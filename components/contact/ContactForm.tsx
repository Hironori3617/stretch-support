"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { sendGTMEvent } from "@next/third-parties/google";
import { CONSULTATION_OPTIONS } from "@/lib/contact";

const ACCENT = "#2f4e6f";
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

const fieldClass =
  "w-full border border-neutral-300 bg-white px-4 py-3 text-[15px] text-neutral-900 placeholder:text-neutral-400 focus:border-[#2f4e6f] focus:outline-none transition-colors";

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

type ErrorKind = "none" | "turnstile" | "generic";

export default function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [errorKind, setErrorKind] = useState<ErrorKind>("none");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // トークンは使い回せないため、失敗後の再試行に備えてウィジェットをリセットし、
  // 新しいトークンを取得できる状態に戻す
  function resetTurnstile() {
    if (window.turnstile && widgetIdRef.current) {
      window.turnstile.reset(widgetIdRef.current);
    }
    setTurnstileToken(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting || !turnstileToken) return;

    setSubmitting(true);
    setErrorKind("none");

    const form = event.currentTarget;
    const formData = new FormData(form);
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
        setErrorKind(json?.error === "turnstile_failed" ? "turnstile" : "generic");
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
      setErrorKind("generic");
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
            className={fieldClass}
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
            className={fieldClass}
          />
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
            className={fieldClass}
          />
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
            className={fieldClass}
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
            className={`${fieldClass} resize-y`}
          />
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

        {errorKind === "turnstile" && (
          <p className="text-[13px] leading-relaxed tracking-wide text-red-600">
            認証を確認できませんでした。もう一度お試しください。
          </p>
        )}
        {errorKind === "generic" && (
          <p className="text-[13px] leading-relaxed tracking-wide text-red-600">
            お問い合わせを送信できませんでした。
            <br />
            時間をおいて、もう一度お試しください。
          </p>
        )}

        <button
          type="submit"
          disabled={submitting || !turnstileToken}
          className="inline-flex w-full items-center justify-center gap-2 px-8 py-3.5 text-[15px] tracking-wide text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          style={{ backgroundColor: ACCENT }}
        >
          {submitting ? "送信中…" : "送信する"}
        </button>
      </form>
    </>
  );
}
