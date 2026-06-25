import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Service｜株式会社ストレッチサポート",
  description:
    "スポーツに関わる事業・組織に向けて、価値整理・発信・企画・集客・改善支援を行っています。",
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
  pdf: "/documents/stretch-support-service-guide.pdf",
} as const;

function Eyebrow({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="h-4 w-px" style={{ backgroundColor: ACCENT }} />
      <span className="text-[12px] uppercase tracking-[0.2em] text-neutral-400">{en}</span>
      <span className="text-[12px] tracking-wide text-neutral-300">{ja}</span>
    </div>
  );
}

const challenges = [
  "専門性や実績が、事業の価値として伝わりきっていない",
  "発信しているが、問い合わせや参加につながっているか見えにくい",
  "現場が優先で、更新・検証・改善まで手が回らない",
  "取り組みを実施して終わりになり、次の機会へ活かし切れていない",
];

const processes = [
  {
    title: "価値を見つけ、整理する",
    body: "現場で当たり前になっている経験や工夫の中にある価値を探り、誰に何を届けるのかを言葉にします。",
  },
  {
    title: "届け方を設計する",
    body: "目的と届けたい相手を整理し、Web・コンテンツ・企画・導線をどのようにつなげるかを設計します。",
  },
  {
    title: "形にする",
    body: "ウェブサイト、記事、資料、イベント、告知物など、必要な人に伝わる具体的な形へ落とし込みます。",
  },
  {
    title: "届ける",
    body: "発信、告知、集客、関係者との連携を通じて、必要とする人との接点をつくります。",
  },
  {
    title: "計測し、振り返り、次へつなげる",
    body: "数字だけでなく、参加者・関係者の声、現場で起きた変化も振り返り、次の発信・企画・事業改善へつなげます。",
  },
];

const targets = [
  {
    title: "スポーツの商品・サービスを提供する事業者",
    body: "スポーツ用品、教育、イベント、コミュニティ、メディア、テクノロジーなど。",
  },
  {
    title: "現場の専門性を持つ事業者",
    body: "トレーナー派遣、治療・コンディショニング、育成支援など。",
  },
  {
    title: "地域・公共性のあるスポーツ事業",
    body: "自治体や地域、団体とともに進める、育成・参加・交流・地域づくりの事業やプロジェクト。",
  },
];

export default function ServicePage() {
  const year = new Date().getFullYear();

  return (
    <div
      className="min-h-screen bg-white text-neutral-900 antialiased"
      style={{ fontFamily: sans }}
    >
      <Header />

      <main>
        {/* ── Hero ── */}
        <section className="bg-white" style={{ borderBottom: `1px solid ${ACCENT}` }}>
          <div className="mx-auto max-w-5xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-14">
            <p className="mb-6 text-[12px] uppercase tracking-[0.22em] text-neutral-400">
              For Business / Service
            </p>
            <h1
              className="text-[1.875rem] leading-[1.55] text-neutral-900 [text-wrap:balance] sm:text-[2.5rem] sm:leading-[1.5]"
              style={{ fontFamily: serif }}
            >
              現場の専門性を、事業の価値へ。
            </h1>
            <div className="my-7 h-px w-12" style={{ backgroundColor: ACCENT }} />
            <p className="max-w-lg text-[14px] leading-loose tracking-wide text-neutral-600 sm:text-[15px]">
              スポーツに関わる事業・組織に向けて、
              価値整理・発信・企画・集客・改善支援を行っています。
            </p>
          </div>
        </section>

        {/* ── Challenge ── */}
        <section className="bg-neutral-50">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Challenge" ja="課題の入口" />
            <div className="max-w-2xl">
              <p
                className="text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                現場にある価値が、十分に伝わっていない。
              </p>
              <p className="mt-8 mb-12 text-[15px] leading-loose tracking-wide text-neutral-700">
                現場で積み上げてきた専門性や経験は、適切に整理され、必要な人へ届くことで、事業の価値となり、次の機会を生み出します。
              </p>
              <ul className="divide-y divide-neutral-200 border-t border-neutral-200">
                {challenges.map((item, i) => (
                  <li key={i} className="flex items-start gap-5 py-6 sm:py-7">
                    <span className="w-7 shrink-0 pt-0.5 text-[13px] tracking-[0.18em] text-neutral-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-loose tracking-wide text-neutral-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── What We Do ── */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="What We Do" ja="Stretch Supportが担うこと" />
            <div className="mb-14 max-w-2xl">
              <p
                className="text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                価値を見つけ、届け方を設計し、次へつなげる。
              </p>
              <p className="mt-8 text-[15px] leading-loose tracking-wide text-neutral-700">
                現場の理解と、発信・企画・マーケティングの視点を行き来しながら、専門性を、伝わる言葉と仕組みに変えていきます。
              </p>
            </div>
            <div className="divide-y divide-neutral-200 border-t border-neutral-200">
              {processes.map((item, i) => (
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
            <p className="mt-10 max-w-xl text-[13px] leading-loose tracking-wide text-neutral-500">
              価値の発見から、設計・実行・振り返りまで。組織の状況や目的に合わせて、必要な範囲をともに設計します。
            </p>
          </div>
        </section>

        {/* ── For ── */}
        <section className="border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="For" ja="支援する対象" />
            <div className="mb-14 max-w-2xl">
              <p
                className="text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                スポーツに関わる事業・組織のために。
              </p>
              <p className="mt-8 text-[15px] leading-loose tracking-wide text-neutral-700">
                現場で培われた専門性や独自の価値を、発信・企画・集客・次の施策へつながる形に整えたい事業・組織を支援します。
              </p>
            </div>
            <div className="divide-y divide-neutral-200 border-t border-neutral-200">
              {targets.map((item, i) => (
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
            <p className="mt-10 max-w-xl text-[13px] leading-loose tracking-wide text-neutral-500">
              組織の規模や業種ではなく、現場にある価値を、より多くの人へ届けたいという意志を大切にしています。
            </p>
          </div>
        </section>

        {/* ── Document ── */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Document" ja="資料を読む" />
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-md">
                <p
                  className="text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-snug"
                  style={{ fontFamily: serif }}
                >
                  法人向けサービス紹介資料
                </p>
                <p className="mt-5 text-[15px] leading-loose tracking-wide text-neutral-600">
                  支援の考え方、5つの支援領域、進め方、ご相談から提案までの流れをまとめています。
                </p>
              </div>
              <a
                href={LINKS.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[15px] tracking-wide transition-colors"
                style={{ color: ACCENT }}
              >
                資料を読む
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Contact" ja="お問い合わせ" />
            <div className="max-w-2xl">
              <p
                className="text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                積み重ねてきた経験から、次の可能性を考える。
              </p>
              <div className="mt-8 space-y-5 text-[15px] leading-loose tracking-wide text-neutral-700">
                <p>
                  支援の考え方や進め方について、まず話を聞いてみたい。自社・自組織の事業、発信、企画について相談したい。
                </p>
                <p>
                  まだ課題が明確になっていなくても構いません。積み重ねてきた経験と、これから目指したいことを伺いながら、次の一歩を一緒に考えます。
                </p>
              </div>
              <div className="mt-12">
                <a
                  href={LINKS.contact}
                  className="group inline-flex items-center gap-2 text-[15px] tracking-wide transition-colors"
                  style={{ color: ACCENT }}
                >
                  お問い合わせ
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
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
                href="https://www.instagram.com/udio08/?hl=ja"
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
                href="https://www.facebook.com/hironori.uranaka"
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
