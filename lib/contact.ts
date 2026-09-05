// Contactフォームの許可値・サーバー側validation・メール本文生成を集約するモジュール。
// クライアント（フォームのselect肢）とサーバー（/api/contact のvalidation）の両方から参照し、
// 許可値がずれないようにする。

export const CONSULTATION_OPTIONS = [
  "マーケティング・広報について",
  "地域・自治体と連携したスポーツ事業について",
  "協業・プロジェクトについて",
  "取材・講演等について",
  "その他",
] as const;

export type ConsultationTopic = (typeof CONSULTATION_OPTIONS)[number];

export type ContactInput = {
  company: string;
  name: string;
  email: string;
  topic: ConsultationTopic;
  message: string;
};

export type ContactValidationResult =
  | { success: true; data: ContactInput }
  | { success: false };

// RFC5322完全準拠ではなく、一般的なメールアドレス形式を確認する簡易チェック
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isConsultationTopic(value: string): value is ConsultationTopic {
  return (CONSULTATION_OPTIONS as readonly string[]).includes(value);
}

// 送信された値を信用せず、型・空文字・文字数・許可値をすべてサーバー側で検証する
export function validateContactInput(input: unknown): ContactValidationResult {
  if (typeof input !== "object" || input === null) {
    return { success: false };
  }
  const raw = input as Record<string, unknown>;

  const company = typeof raw.company === "string" ? raw.company.trim() : "";
  if (company.length > 120) return { success: false };

  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  if (!name || name.length > 100) return { success: false };

  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  if (!email || email.length > 254 || !EMAIL_REGEX.test(email)) {
    return { success: false };
  }

  const topic = typeof raw.topic === "string" ? raw.topic : "";
  if (!isConsultationTopic(topic)) return { success: false };

  const message = typeof raw.message === "string" ? raw.message.trim() : "";
  if (!message || message.length > 5000) return { success: false };

  return { success: true, data: { company, name, email, topic, message } };
}

// honeypot（"website"）に何か入力されていればbot判定
export function isHoneypotTriggered(input: unknown): boolean {
  if (typeof input !== "object" || input === null) return false;
  const raw = input as Record<string, unknown>;
  return typeof raw.website === "string" && raw.website.trim() !== "";
}

export function buildNotificationEmailText(input: ContactInput): string {
  const companyDisplay = input.company || "未入力";
  return [
    "Webサイトのお問い合わせフォームから、お問い合わせがありました。",
    "",
    `会社・団体名：${companyDisplay}`,
    `お名前：${input.name}`,
    `メールアドレス：${input.email}`,
    `ご相談内容：${input.topic}`,
    "",
    "お問い合わせ内容：",
    input.message,
  ].join("\n");
}

export function buildAutoReplyEmailText(input: ContactInput): string {
  const companyDisplay = input.company || "未入力";
  return [
    `${input.name} 様`,
    "",
    "株式会社ストレッチサポートへお問い合わせいただき、",
    "ありがとうございます。",
    "",
    "以下の内容でお問い合わせを受け付けました。",
    "",
    `会社・団体名：${companyDisplay}`,
    `ご相談内容：${input.topic}`,
    "お問い合わせ内容：",
    input.message,
    "",
    "内容を確認のうえ、ご連絡いたします。",
    "",
    "このメールはお問い合わせ受付時に自動送信されています。",
    "お心当たりがない場合は、このメールを破棄してください。",
    "",
    "株式会社ストレッチサポート",
    "https://stretch-s.co.jp/",
  ].join("\n");
}
