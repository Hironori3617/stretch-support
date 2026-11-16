"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { sendGTMEvent } from "@next/third-parties/google";
import { CONSULTATION_OPTIONS, EMAIL_REGEX } from "@/lib/contact";

const ACCENT = "#2f4e6f";
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

const fieldBaseClass =
  "w-full border bg-white px-4 py-3 text-[15px] text-neutral-900 placeholder:text-neutral-400 focus:border-[#2f4e6f] focus:outline-none transition-colors";

function fieldClassName(hasError: boolean) {
  return `${fieldBaseClass} ${hasError ? "border-red-500" : "border-neutral-300"}`;
}

function RequiredBadge() {
  return (
    <span
      className="text-[11px] font-normal tracking-wide"
      style={{ color: ACCENT }}
    >
      必須
    </span>
  );
}

function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-center gap-2 text-[13px] font-medium tracking-wide text-neutral-700"
    >
      {children}
      {required && <RequiredBadge />}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p
      id={id}
      role="alert"
      className="text-[13px] leading-relaxed tracking-wide text-red-600"
    >
      {message}
    </p>
  );
}

type ErrorKind = "none" | "turnstile" | "invalid" | "send_failed";

const SERVER_ERROR_MESSAGES: Record<Exclude<ErrorKind, "none">, string> = {
  turnstile: "認証を確認できませんでした。もう一度お試しください。",
  invalid: "入力内容をご確認のうえ、もう一度お送りください。",
  send_failed: "送信処理に失敗しました。時間をおいて、もう一度お試しください。",
};

// APIが返すエラーコードを、利用者が次に取るべき行動が分かる表示用の種別へ変換する。
// サーバー内部の詳細（Resendのエラー名、Cloudflareのerror-codes等）はここでも扱わない。
function mapApiErrorCode(code: string | undefined): ErrorKind {
  if (code === "turnstile_failed") return "turnstile";
  if (code === "invalid_input") return "invalid";
  return "send_failed";
}

type FieldName = "name" | "email" | "topic" | "message";

const FIELD_ORDER: FieldName[] = ["name", "email", "topic", "message"];

// lib/contact.ts の validateContactInput と判定基準を揃えた、送信前のクライアント側チェック。
// ここで止めた入力はAPIへ送らないため、Turnstileトークンも消費しない。
function validateField(name: FieldName, rawValue: string): string | undefined {
  const value = rawValue.trim();
  switch (name) {
    case "name":
      if (!value) return "お名前を入力してください。";
      return undefined;
    case "email":
      if (!value) return "メールアドレスを入力してください。";
      if (!EMAIL_REGEX.test(value)) {
        return "メールアドレスの形式をご確認ください。";
      }
      return undefined;
    case "topic":
      if (!value) return "ご相談内容を選択してください。";
      return undefined;
    case "message":
      if (!value) return "お問い合わせ内容を入力してください。";
      return undefined;
  }
}

export default function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [errorKind, setErrorKind] = useState<ErrorKind>("none");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldName, string>>>({});

  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const topicRef = useRef<HTMLSelectElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const fieldRefs: Record<FieldName, React.RefObject<HTMLElement | null>> = {
    name: nameRef,
    email: emailRef,
    topic: topicRef,
    message: messageRef,
  };

  function renderTurnstileWidget() {
    if (widgetIdRef.current) return; // 二重レンダリング防止
    if (!turnstileContainerRef.current || !window.turnstile) return;
    widgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      callback: (token) => setTurnstileToken(token),
      "error-callback": () => setTurnstileToken(null),
      "expired-callback": () => setTurnstileToken(null),
    });
  }

  // クライアント側遷移でスクリプトが既に読み込み済みの場合、Scriptのonloadが
  // 再発火しないことがあるため、マウント時にも一度描画を試みる
  useEffect(() => {
    if (window.turnstile) renderTurnstileWidget();
  }, []);

  // トークンは1回限り・有効期限5分の前提のため、サーバーへ到達した（Siteverifyを
  // 経由した）時点で成否に関わらず使い切りとみなし、再試行の前に必ず取り直す
  function resetTurnstile() {
    if (window.turnstile && widgetIdRef.current) {
      window.turnstile.reset(widgetIdRef.current);
    }
    setTurnstileToken(null);
  }

  // 一度表示したエラーのみ、入力の変化に合わせて追従させる。
  // 未送信の初期状態から入力中に先回りして警告を出すと煩わしいため、
  // 最初の送信チェック（またはサーバーからの指摘）で表示された項目だけを対象にする
  function handleFieldChange(name: FieldName, value: string) {
    setFieldErrors((prev) => {
      if (!(name in prev)) return prev;
      const next = { ...prev };
      const message = validateField(name, value);
      if (message) {
        next[name] = message;
      } else {
        delete next[name];
      }
      return next;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const newErrors: Partial<Record<FieldName, string>> = {};
    for (const field of FIELD_ORDER) {
      const message = validateField(field, String(formData.get(field) ?? ""));
      if (message) newErrors[field] = message;
    }

    if (Object.keys(newErrors).length > 0) {
      setFieldErrors(newErrors);
      const firstInvalid = FIELD_ORDER.find((field) => newErrors[field]);
      if (firstInvalid) fieldRefs[firstInvalid].current?.focus();
      return; // APIへは送らないため、Turnstileトークンは消費されずそのまま使える
    }
    setFieldErrors({});

    if (!turnstileToken) return; // 通常はボタンが無効化され到達しない防御的チェック

    setSubmitting(true);
    setErrorKind("none");

    const payload = {
      company: String(formData.get("company") ?? ""),
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      topic: String(formData.get("topic") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
      turnstileToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = (await res.json().catch(() => null)) as
        | { success?: boolean; error?: string }
        | null;

      if (!res.ok || !json?.success) {
        setErrorKind(mapApiErrorCode(json?.error));
        // サーバーに到達した時点でSiteverifyは実行済み（トークンは消費済み）のため、
        // 結果の種類を問わずリセットして次回送信に備える
        resetTurnstile();
        setSubmitting(false);
        return;
      }

      // honeypot（website）が空の、実際のユーザー送信の場合のみ計測する。
      // サーバーはhoneypot検知時もsuccess:trueを返す仕様のため、
      // クライアント側で送信時のwebsite値を独自に確認する
      if (payload.website.trim() === "") {
        sendGTMEvent({ event: "contact_submit" });
      }

      router.push("/contact/thanks");
    } catch {
      // ネットワーク断等でサーバーに届いたか判断できない場合も、安全側として
      // トークンを使い切り扱いにし、古いトークンでの再送を避ける
      setErrorKind("send_failed");
      resetTurnstile();
      setSubmitting(false);
    }
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onLoad={renderTurnstileWidget}
      />
      <form className="space-y-8" onSubmit={handleSubmit} noValidate>
        {/* honeypot: 通常のユーザーには見えず、tabIndex=-1・aria-hidden でスクリーンリーダーからも除外する */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        >
          <label htmlFor="website">Webサイト</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="space-y-2">
          <FieldLabel htmlFor="company">会社・団体名</FieldLabel>
          <input
            id="company"
            name="company"
            type="text"
            maxLength={120}
            autoComplete="organization"
            className={fieldClassName(false)}
          />
        </div>

        <div className="space-y-2">
          <FieldLabel htmlFor="name" required>
            お名前
          </FieldLabel>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            ref={nameRef}
            onChange={(e) => handleFieldChange("name", e.target.value)}
            aria-invalid={fieldErrors.name ? "true" : undefined}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            className={fieldClassName(Boolean(fieldErrors.name))}
          />
          <FieldError id="name-error" message={fieldErrors.name} />
        </div>

        <div className="space-y-2">
          <FieldLabel htmlFor="email" required>
            メールアドレス
          </FieldLabel>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            ref={emailRef}
            onChange={(e) => handleFieldChange("email", e.target.value)}
            aria-invalid={fieldErrors.email ? "true" : undefined}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className={fieldClassName(Boolean(fieldErrors.email))}
          />
          <FieldError id="email-error" message={fieldErrors.email} />
        </div>

        <div className="space-y-2">
          <FieldLabel htmlFor="topic" required>
            ご相談内容
          </FieldLabel>
          <select
            id="topic"
            name="topic"
            required
            defaultValue=""
            ref={topicRef}
            onChange={(e) => handleFieldChange("topic", e.target.value)}
            aria-invalid={fieldErrors.topic ? "true" : undefined}
            aria-describedby={fieldErrors.topic ? "topic-error" : undefined}
            className={fieldClassName(Boolean(fieldErrors.topic))}
          >
            <option value="" disabled>
              選択してください
            </option>
            {CONSULTATION_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError id="topic-error" message={fieldErrors.topic} />
        </div>

        <div className="space-y-2">
          <FieldLabel htmlFor="message" required>
            お問い合わせ内容
          </FieldLabel>
          <textarea
            id="message"
            name="message"
            required
            maxLength={5000}
            rows={8}
            ref={messageRef}
            onChange={(e) => handleFieldChange("message", e.target.value)}
            aria-invalid={fieldErrors.message ? "true" : undefined}
            aria-describedby={fieldErrors.message ? "message-error" : undefined}
            className={`${fieldClassName(Boolean(fieldErrors.message))} resize-y`}
          />
          <FieldError id="message-error" message={fieldErrors.message} />
        </div>

        <p className="text-[13px] leading-relaxed tracking-wide text-neutral-500">
          個人情報の取り扱いについては、
          <a
            href="/legal"
            className="text-[#2f4e6f] underline underline-offset-2 transition-colors hover:text-neutral-900"
          >
            プライバシーポリシー
          </a>
          をご確認ください。
        </p>

        <div ref={turnstileContainerRef} />

        {!turnstileToken && errorKind === "none" && !submitting && (
          <p className="text-[13px] leading-relaxed tracking-wide text-neutral-500">
            認証が完了すると送信できるようになります。少し時間がかかる場合があります。
          </p>
        )}

        {errorKind !== "none" && (
          <p role="alert" className="text-[13px] leading-relaxed tracking-wide text-red-600">
            {SERVER_ERROR_MESSAGES[errorKind]}
          </p>
        )}

        <p aria-live="polite" className="sr-only">
          {submitting ? "送信中です。しばらくお待ちください。" : ""}
        </p>

        <button
          type="submit"
          disabled={submitting || !turnstileToken}
          aria-busy={submitting}
          className="inline-flex w-full items-center justify-center gap-2 px-8 py-3.5 text-[15px] tracking-wide text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          style={{ backgroundColor: ACCENT }}
        >
          {submitting ? "送信中…" : "送信する"}
        </button>
      </form>
    </>
  );
}
