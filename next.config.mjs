// Content-Security-Policy-Report-Only（検証用、まだ実通信は遮断しない）
// 許可ドメインの根拠:
// - Next.js/Turbopackが全ページに出力するインラインスクリプト（RSCハイドレーション・
//   チャンク読込）と、GTMのインライン初期化スクリプトのため script-src に 'unsafe-inline' が必要
//   （nonce方式は静的生成を維持できないため採用しない）
// - GTM: https://www.googletagmanager.com（Google公式CSPガイド）
// - GA4（GTM経由、/g/collect）: https://*.google-analytics.com（Google公式CSPガイド、
//   広告関連ドメインは未使用のため含めない）
// - Microsoft Clarity: https://*.clarity.ms、https://c.bing.com（Microsoft公式CSPガイド）
// - Cloudflare Turnstile: https://challenges.cloudflare.com（ウィジェット・検証通信・iframe）
// - Resendはサーバー側のみの通信のため対象外
// - frame-ancestors は検証対象に含めない（既存のX-Frame-Optionsで対応済み）
const CSP_REPORT_ONLY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.clarity.ms https://challenges.cloudflare.com",
  "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.clarity.ms https://c.bing.com https://challenges.cloudflare.com",
  "img-src 'self' data: https://www.googletagmanager.com https://*.google-analytics.com https://*.clarity.ms https://c.bing.com",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self'",
  "frame-src https://www.googletagmanager.com https://challenges.cloudflare.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Content-Security-Policy-Report-Only",
            value: CSP_REPORT_ONLY,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
