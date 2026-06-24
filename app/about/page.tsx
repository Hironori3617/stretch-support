import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "About | Stretch Support",
  description:
    "実践知を、伝わる価値へ。株式会社ストレッチサポートについて。",
};

// ─── 定数（page.tsx と同じ値を使用）────────────────────────────────────────
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

// ─── 共通コンポーネント ──────────────────────────────────────────────────────
function Eyebrow({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="h-4 w-px" style={{ backgroundColor: ACCENT }} />
      <span className="text-[12px] uppercase tracking-[0.2em] text-neutral-400">
        {en}
      </span>
      <span className="text-[12px] tracking-wide text-neutral-300">{ja}</span>
    </div>
  );
}

// ─── コンテンツデータ ────────────────────────────────────────────────────────
// 【差し替えポイント】各配列の title / body を編集するだけで本文を変更できます。

const supporters = [
  {
    title: "コーチ・指導者",
    body: "育成現場の実践知を言語化し、指導者としての価値を社会へ届ける支援をします。",
  },
  {
    title: "トレーナー・専門職",
    body: "専門性の高い知識と経験を、伝わる言葉とコンテンツへと変換します。",
  },
  {
    title: "チーム・クラブ・団体",
    body: "活動の意義と価値をわかりやすく発信し、共感とファンを集める基盤をつくります。",
  },
  {
    title: "スポーツ関連事業者",
    body: "スポーツの文脈を深く理解した上で、マーケティングと情報発信を設計します。",
  },
];

const offerings = [
  {
    title: "価値の整理",
    body: "実践の中にある強みや専門性を言語化し、伝わるメッセージに整理します。",
  },
  {
    title: "発信・マーケティング設計",
    body: "SNS・ウェブ・noteなどの媒体を活かした、情報発信の戦略を設計します。",
  },
  {
    title: "講演・イベントの企画運営",
    body: "実践者の知恵を場として届けるために、講演やイベントの企画・運営を行います。",
  },
  {
    title: "集客・コンテンツ活用支援",
    body: "コンテンツを起点に、ファンと顧客が自然と集まる仕組みをつくります。",
  },
];

// ─── ページ本体 ──────────────────────────────────────────────────────────────
export default function AboutPage() {
  const year = new Date().getFullYear();

  return (
    <div
      className="min-h-screen bg-white text-neutral-900 antialiased"
      style={{ fontFamily: sans }}
    >
      <Header />

      <main>
        {/* ── Hero ── */}
        <section
          className="bg-white"
          style={{ borderBottom: `1px solid ${ACCENT}` }}
        >
          <div className="mx-auto max-w-5xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-14">
            <p className="mb-6 text-[12px] uppercase tracking-[0.22em] text-neutral-400">
              About
            </p>
            {/* 【差し替えポイント】ページの軸コピー */}
            <h1
              className="text-[1.875rem] leading-[1.55] text-neutral-900 sm:text-[2.5rem] sm:leading-[1.5]"
              style={{ fontFamily: serif }}
            >
              実践知を、
              <br />
              伝わる価値へ。
            </h1>
            <div className="my-7 h-px w-12" style={{ backgroundColor: ACCENT }} />
            {/* 【差し替えポイント】リード文 */}
            <p className="max-w-lg text-[14px] leading-loose tracking-wide text-neutral-600 sm:text-[15px]">
              スポーツの中にある実践知を探究し、伝わる価値へと翻訳する。
            </p>
          </div>
        </section>

        {/* ── Challenge：私たちが向き合う課題 ── */}
        <section className="bg-neutral-50">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Challenge" ja="私たちが向き合う課題" />
            {/* max-w-2xl で読みやすい行幅を維持しつつ、左端は max-w-5xl に揃える */}
            <div className="max-w-2xl">
              {/* 【差し替えポイント】課題の見出し */}
              <p
                className="text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                スポーツの現場には、まだ言語化されていない価値がある。
              </p>
              {/* 【差し替えポイント】課題の本文（段落ごとに <p> を増減可） */}
              <div className="mt-8 space-y-6 text-[15px] leading-loose tracking-wide text-neutral-700">
                <p>
                  スポーツを支える指導者やトレーナーの実践知は、十分に伝わる言葉になっていない。
                  現場で積み重ねられた知恵が、社会に届かないまま埋もれ続けている。
                </p>
                <p>
                  私たちはその現実と向き合い、スポーツの価値を「伝わる言葉」へと翻訳することに取り組んでいます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── For：支援する対象 ── */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="For" ja="支援する対象" />
            {/* 【差し替えポイント】supporters 配列（上部）の title / body を編集 */}
            <div className="divide-y divide-neutral-200">
              {supporters.map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 py-10 sm:gap-10 sm:py-12"
                >
                  <span className="w-7 shrink-0 pt-0.5 text-[13px] tracking-[0.18em] text-neutral-400 sm:w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="text-lg text-neutral-900 sm:text-xl"
                      style={{ fontFamily: serif }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-loose tracking-wide text-neutral-600">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services：提供すること ── */}
        <section className="border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Services" ja="提供すること" />
            {/* 【差し替えポイント】セクションリード文 */}
            <p className="mb-12 max-w-2xl text-[15px] leading-loose tracking-wide text-neutral-600 sm:text-base sm:leading-loose">
              現場にある知恵を、その人や組織らしい言葉と形に整え、必要とする人へ届けます。
            </p>
            {/* 【差し替えポイント】offerings 配列（上部）の title / body を編集 */}
            <div className="divide-y divide-neutral-200">
              {offerings.map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 py-10 sm:gap-10 sm:py-12"
                >
                  <span className="w-7 shrink-0 pt-0.5 text-[13px] tracking-[0.18em] text-neutral-400 sm:w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="text-lg text-neutral-900 sm:text-xl"
                      style={{ fontFamily: serif }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-loose tracking-wide text-neutral-600">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Contact" ja="お問い合わせ" />
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              {/* 【差し替えポイント】Contact の誘導文 */}
              <p
                className="max-w-md text-lg leading-loose text-neutral-900 sm:text-2xl sm:leading-snug"
                style={{ fontFamily: serif }}
              >
                スポーツの価値を届けることへの
                <br className="hidden sm:block" />
                ご相談、お気軽にどうぞ。
              </p>
              <a
                href={LINKS.contact}
                className="group inline-flex items-center gap-2 text-[15px] tracking-wide transition-colors"
                style={{ color: ACCENT }}
              >
                メールで問い合わせる
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
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
