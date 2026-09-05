import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildAutoReplyEmailText,
  buildNotificationEmailText,
  isHoneypotTriggered,
  validateContactInput,
} from "@/lib/contact";

export const runtime = "nodejs";

const CONTACT_ADDRESS = "info@stretch-s.co.jp";
const CONTACT_FROM = `株式会社ストレッチサポート <${CONTACT_ADDRESS}>`;
const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const PRODUCTION_HOSTNAME = "stretch-s.co.jp";

function jsonError(status: number, error: string) {
  return NextResponse.json({ success: false, error }, { status });
}

type TurnstileVerifyResult = { ok: true } | { ok: false };

// Cloudflare Siteverify APIへサーバー側から問い合わせる。
// クライアントのウィジェット表示だけでなく、ここでの検証結果のみを信用する。
async function verifyTurnstileToken(
  token: string,
  remoteIp: string | null
): Promise<TurnstileVerifyResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("[contact] TURNSTILE_SECRET_KEY is not configured");
    return { ok: false };
  }

  const params = new URLSearchParams();
  params.append("secret", secret);
  params.append("response", token);
  if (remoteIp) params.append("remoteip", remoteIp);

  let payload: {
    success?: boolean;
    hostname?: string;
    "error-codes"?: string[];
  };
  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      body: params,
    });
    payload = await res.json();
  } catch {
    console.error("[contact] turnstile siteverify request failed");
    return { ok: false };
  }

  if (!payload.success) {
    // Cloudflareのerror-codesはログにのみ残し、クライアントへは返さない
    console.error(
      "[contact] turnstile verification failed:",
      payload["error-codes"]
    );
    return { ok: false };
  }

  // 本番(Vercel Production)のみhostnameを厳格に確認する。
  // ローカル/PreviewはCloudflare公式テストキーを使うため、hostnameがstretch-s.co.jpと
  // 一致せずテストが妨げられることを避ける。
  if (process.env.VERCEL_ENV === "production") {
    if (payload.hostname !== PRODUCTION_HOSTNAME) {
      console.error(
        "[contact] turnstile hostname mismatch in production"
      );
      return { ok: false };
    }
  }

  return { ok: true };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError(400, "invalid_request");
  }

  // honeypot: 値が入っていればbotとみなし、検知したことを知らせないため一般的な成功レスポンスを返す。
  // Turnstile検証(外部API呼び出し)より先に行い、単純なbotに余計なAPIコストをかけない。
  if (isHoneypotTriggered(body)) {
    return NextResponse.json({ success: true });
  }

  const turnstileToken =
    typeof (body as Record<string, unknown>)?.turnstileToken === "string"
      ? ((body as Record<string, unknown>).turnstileToken as string)
      : "";

  if (!turnstileToken) {
    return jsonError(400, "turnstile_failed");
  }

  const remoteIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  const turnstileResult = await verifyTurnstileToken(turnstileToken, remoteIp);
  if (!turnstileResult.ok) {
    return jsonError(400, "turnstile_failed");
  }

  const result = validateContactInput(body);
  if (!result.success) {
    return jsonError(400, "invalid_input");
  }
  const { data } = result;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // キーの値は出さず、未設定であることのみをログに残す
    console.error("[contact] RESEND_API_KEY is not configured");
    return jsonError(500, "send_failed");
  }

  const resend = new Resend(apiKey);

  // Stretch Support宛の通知メール（事業上、必ず届く必要があるため先に送信し、これを成否の基準にする）
  const notification = await resend.emails.send({
    from: CONTACT_FROM,
    to: CONTACT_ADDRESS,
    replyTo: data.email,
    subject: `【Webサイトお問い合わせ】${data.topic}`,
    text: buildNotificationEmailText(data),
  });

  if (notification.error) {
    console.error(
      "[contact] failed to send notification email:",
      notification.error.name
    );
    return jsonError(502, "send_failed");
  }

  // 問い合わせ者への自動返信。
  // 通知メールは既に成功しているため、自動返信の失敗でユーザーに再送信を促すと、
  // Stretch Support側へ同じ内容の通知メールが重複して届くことになる。
  // 通知メールが届くことの方が業務上重要なため、自動返信の失敗はログに残したうえで
  // ユーザーへは成功として扱う（フォームは/contact/thanksへ進める）。
  const autoReply = await resend.emails.send({
    from: CONTACT_FROM,
    to: data.email,
    subject: "【株式会社ストレッチサポート】お問い合わせを受け付けました",
    text: buildAutoReplyEmailText(data),
  });

  if (autoReply.error) {
    console.error(
      "[contact] failed to send auto-reply email:",
      autoReply.error.name
    );
  }

  return NextResponse.json({ success: true });
}
