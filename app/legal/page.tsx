import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "法的表記｜株式会社ストレッチサポート",
  description: "株式会社ストレッチサポートのプライバシーポリシーです。",
};

const serif =
  '"Hiragino Mincho ProN", "Yu Mincho", "YuMincho", "Noto Serif JP", "Times New Roman", serif';
const sans =
  '"Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "YuGothic", "Meiryo", "Noto Sans JP", system-ui, sans-serif';
const ACCENT = "#2f4e6f";

const LINKS = {
  contact: "mailto:info@stretch-s.co.jp",
  instagram: "https://www.instagram.com/udio08/?hl=ja",
  facebook: "https://www.facebook.com/hironori.uranaka",
} as const;

const sections = [
  {
    heading: "1. 個人情報の取得について",
    body: "当社は、お問い合わせ等に際して、氏名、メールアドレス、その他お問い合わせ内容に含まれる情報を取得する場合があります。",
  },
  {
    heading: "2. 個人情報の利用目的",
    body: null,
    list: [
      "お問い合わせへの回答",
      "当社のサービス、活動、コンテンツに関する連絡",
      "当サイトの運営、改善、利便性向上",
      "必要に応じた本人確認",
      "法令等に基づく対応",
    ],
    intro: "当社は、取得した個人情報を以下の目的で利用します。",
  },
  {
    heading: "3. 個人情報の第三者提供について",
    body: "当社は、法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供することはありません。",
  },
  {
    heading: "4. アクセス解析ツールについて",
    body: "当サイトでは、サイトの利用状況を把握し、改善に役立てるため、Google Analytics等のアクセス解析ツールを利用する場合があります。\n\nこれらのツールでは、Cookieを使用して利用者の情報を収集することがありますが、個人を特定する情報を収集するものではありません。Cookieの利用を望まない場合は、ブラウザの設定により無効にすることができます。",
  },
  {
    heading: "5. 外部サービスへのリンクについて",
    body: "当サイトには、note、Instagram、Facebook等の外部サービスへのリンクが含まれる場合があります。外部サービスにおける個人情報の取扱いについては、各サービスのプライバシーポリシーをご確認ください。",
  },
  {
    heading: "6. 個人情報の管理について",
    body: "当社は、取得した個人情報について、不正アクセス、紛失、漏えい、改ざん等を防止するため、適切な管理に努めます。",
  },
  {
    heading: "7. 個人情報の開示・訂正・削除等について",
    body: "本人から個人情報の開示、訂正、削除、利用停止等の申し出があった場合は、本人確認のうえ、法令に基づき適切に対応します。",
  },
  {
    heading: "8. プライバシーポリシーの変更について",
    body: "当社は、必要に応じて本プライバシーポリシーの内容を変更することがあります。変更後の内容は、当サイトに掲載した時点で効力を生じるものとします。",
  },
  {
    heading: "9. お問い合わせ窓口",
    body: "本プライバシーポリシーに関するお問い合わせは、当サイトのお問い合わせ窓口よりご連絡ください。",
  },
];

export default function LegalPage() {
  const year = new Date().getFullYear();

  return (
    <div
      className="min-h-screen bg-white text-neutral-900 antialiased"
      style={{ fontFamily: sans }}
    >
      <Header />

      <main>
        {/* Hero */}
        <section
          className="bg-white"
          style={{ borderBottom: `1px solid ${ACCENT}` }}
        >
          <div className="mx-auto max-w-5xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-14">
            <p className="mb-6 text-[12px] uppercase tracking-[0.22em] text-neutral-400">
              Legal
            </p>
            <h1
              className="text-[1.875rem] leading-[1.55] text-neutral-900 sm:text-[2.5rem] sm:leading-[1.5]"
              style={{ fontFamily: serif }}
            >
              プライバシーポリシー
            </h1>
            <div className="my-7 h-px w-12" style={{ backgroundColor: ACCENT }} />
            <p className="whitespace-nowrap text-[14px] leading-loose tracking-wide text-neutral-600 sm:text-[15px]">
              株式会社ストレッチサポートにおける個人情報の取扱いについて定めます。
            </p>
          </div>
        </section>

        {/* Policy body */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
            {/* Intro */}
            <p className="mb-14 text-[15px] leading-loose tracking-wide text-neutral-700 sm:text-base sm:leading-loose">
              株式会社ストレッチサポート（以下「当社」といいます）は、当社が運営するウェブサイト（以下「当サイト」といいます）における個人情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。
            </p>

            {/* Sections */}
            <div className="divide-y divide-neutral-200">
              {sections.map((section) => (
                <article key={section.heading} className="py-10 sm:py-12">
                  <h2
                    className="mb-5 text-base font-normal leading-relaxed text-neutral-900 sm:text-lg"
                    style={{ fontFamily: serif }}
                  >
                    {section.heading}
                  </h2>
                  {"intro" in section && section.intro && (
                    <p className="mb-4 text-[15px] leading-loose tracking-wide text-neutral-700">
                      {section.intro}
                    </p>
                  )}
                  {"list" in section && section.list && (
                    <ul className="space-y-2 text-[15px] leading-loose tracking-wide text-neutral-700">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span
                            className="mt-[0.75em] h-[3px] w-[3px] shrink-0 rounded-full"
                            style={{ backgroundColor: ACCENT }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.body &&
                    section.body.split("\n\n").map((para, i) => (
                      <p
                        key={i}
                        className="mt-4 text-[15px] leading-loose tracking-wide text-neutral-700 first:mt-0"
                      >
                        {para}
                      </p>
                    ))}
                </article>
              ))}
            </div>

            {/* Effective date */}
            <div className="mt-14 border-t border-neutral-200 pt-10 text-[13px] leading-relaxed tracking-wide text-neutral-500">
              <p>制定日：2026年6月24日</p>
              <p
                className="mt-4 text-[14px] text-neutral-700"
                style={{ fontFamily: serif }}
              >
                株式会社ストレッチサポート
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Image
                src="/logo.png"
                alt="Stretch Support"
                width={103}
                height={40}
                className="mb-5 h-10 w-auto"
              />
              <p
                className="text-[15px] text-neutral-900"
                style={{ fontFamily: serif }}
              >
                株式会社ストレッチサポート
              </p>
              <p className="mt-2 text-[13px] tracking-wide text-neutral-500">
                Stretch Support, Inc.
              </p>
              <address className="mt-3 not-italic text-[12px] leading-relaxed tracking-wide text-neutral-400">
                〒104-0061
                <br />
                東京都中央区銀座1-22-11 銀座大竹ビジデンス2階
              </address>
            </div>
            <nav className="flex flex-col gap-2 text-[13px] tracking-wide text-neutral-500 sm:items-end">
              <a
                href={LINKS.contact}
                className="transition-colors hover:text-neutral-900"
              >
                Contact
              </a>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-neutral-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
              <a
                href={LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-neutral-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Facebook
              </a>
              <a
                href="/legal"
                className="mt-3 transition-colors hover:text-neutral-900"
              >
                Privacy Policy
              </a>
            </nav>
          </div>
          <p className="mt-12 text-[12px] tracking-wide text-neutral-400">
            © {year} Stretch Support, Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}
