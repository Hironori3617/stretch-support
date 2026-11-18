import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "About｜株式会社ストレッチサポート",
  description:
    "実践知を、伝わる価値へ。株式会社ストレッチサポートについて。",
  alternates: {
    canonical: "https://stretch-s.co.jp/about",
  },
};

// ─── 定数（page.tsx と同じ値を使用）────────────────────────────────────────
const serif =
  '"Hiragino Mincho ProN", "Yu Mincho", "YuMincho", "Noto Serif JP", "Times New Roman", serif';
const sans =
  '"Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "YuGothic", "Meiryo", "Noto Sans JP", system-ui, sans-serif';
const ACCENT = "#2f4e6f";
const ACCENT_RED = "#a8463f";

const LINKS = {
  instagram: "https://www.instagram.com/udio08/?hl=ja",
  facebook: "https://www.facebook.com/hironori.uranaka",
} as const;

// ─── 共通コンポーネント ──────────────────────────────────────────────────────
function Eyebrow({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="h-4 w-px" style={{ backgroundColor: ACCENT }} />
      <span className="text-[12px] uppercase tracking-[0.2em] text-neutral-600">
        {en}
      </span>
      <span className="text-[12px] tracking-wide text-neutral-500">{ja}</span>
    </div>
  );
}

function WorkIcon({ type }: { type: "web" | "media" | "events" }) {
  if (type === "web") {
    return (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2.5" y="4" width="19" height="13" rx="1.5" stroke={ACCENT} strokeWidth="1.5" />
        <line x1="8" y1="20" x2="16" y2="20" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12" y2="20" stroke={ACCENT} strokeWidth="1.5" />
        <polyline
          points="6,13.5 9.5,10 12.5,12 17.3,7.6"
          stroke="#9ca3af"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="17.5" cy="7.5" r="1.4" fill={ACCENT_RED} />
      </svg>
    );
  }
  if (type === "media") {
    return (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="3.5" width="12" height="16" rx="1.3" stroke={ACCENT} strokeWidth="1.5" />
        <line x1="6.5" y1="7.5" x2="12.5" y2="7.5" stroke="#9ca3af" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="6.5" y1="10.5" x2="12.5" y2="10.5" stroke="#9ca3af" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="6.5" y1="13.5" x2="10" y2="13.5" stroke="#9ca3af" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M15 16.5 L20.5 11" stroke={ACCENT_RED} strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M16.3 11 H20.5 V15.2"
          stroke={ACCENT_RED}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="11" rx="1.3" stroke={ACCENT} strokeWidth="1.5" />
      <line x1="7" y1="8" x2="13" y2="8" stroke="#9ca3af" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="7" y1="11" x2="11" y2="11" stroke="#9ca3af" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="17" cy="10" r="1.6" fill={ACCENT_RED} />
      <path d="M8 19.5 C8 17.5 16 17.5 16 19.5" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// ─── コンテンツデータ ────────────────────────────────────────────────────────
// 【差し替えポイント】各配列の title / body を編集するだけで本文を変更できます。

const supporters = [
  {
    title: "スポーツ事業者",
    body: "トレーニング、コンディショニング、教育、用品、イベント、サービス開発など、スポーツに関わる事業を展開する企業・事業者。私たちが主に支援する対象です。",
  },
  {
    title: "プロスポーツクラブ・スポーツ団体",
    body: "クラブの価値発信、事業・広報の改善、地域との接点づくりに取り組む組織。",
  },
  {
    title: "自治体・地域の関係者",
    body: "スポーツを通じた育成、健康づくり、地域参加、共創プロジェクトに取り組む組織。",
  },
  {
    title: "企業",
    body: "スポーツを活用した事業展開や、地域連携・共創プロジェクトに取り組む企業。",
  },
];

const offerings = [
  {
    title: "価値の言語化・編集",
    body: "専門性や強みを、顧客に伝わる言葉と情報へ整理します。",
  },
  {
    title: "マーケティング・情報発信支援",
    body: "Webサイトの企画・構築・運用改善を中心に、情報発信や顧客との接点づくりを支援します。",
  },
  {
    title: "事業・共創プロジェクトの企画設計",
    body: "スポーツの専門性を、新しい事業や地域の機会へつなぐ企画を設計します。",
  },
];

const biography = [
  { label: "1983年", body: "長崎県長崎市生まれ" },
  {
    label: "トレーナーとして活動",
    body: "スポーツ選手や市民ランナーを中心に、トレーニング・コンディショニングを支援",
  },
  {
    label: "株式会社ストレッチサポート設立",
    body: "トレーニング指導を起点に、コンテンツ制作、セミナー・イベントの企画運営などへ活動を展開",
  },
  {
    label: "マーケティング活動",
    body: "ランナー向けオウンドメディアを立ち上げ、月間30万PVを超えるメディアへ成長。BtoBマーケティングでは、顧客理解と市場・業界理解を起点とした事業・マーケティング支援に携わる",
  },
  {
    label: "現在",
    body: "スポーツの現場で生まれる実践知を編集し、社会へ翻訳することを軸に、スポーツ事業者や地域との事業づくりに取り組む",
  },
];

const works: {
  title: string;
  icon: "web" | "media" | "events";
  body: string[];
}[] = [
  {
    title: "Web & Digital Marketing",
    icon: "web",
    body: [
      "Webサイトやページの企画、ワイヤーフレーム作成、実装、公開後の計測・分析、運用改善まで、構築から改善までを一貫して担ってきました。",
    ],
  },
  {
    title: "Media & Business Development",
    icon: "media",
    body: [
      "ランナー向けオウンドメディアを企画・運営し、月間30万PVを超える規模へ成長。コンテンツ販売や物販、イベント集客など、メディアを起点とした事業展開にも取り組んできました。",
    ],
  },
  {
    title: "Events & Learning Programs",
    icon: "events",
    body: [
      "セミナー、イベント、ワークショップなど、学びや体験の場の企画・運営に取り組んできました。",
    ],
  },
];

const companyBasics = [
  { label: "会社名", body: "株式会社ストレッチサポート" },
  { label: "英文社名", body: "Stretch Support Inc." },
  { label: "設立", body: "2011年4月" },
  { label: "所在地", body: "〒104-0061 東京都中央区銀座1-22-11 2F" },
  { label: "活動拠点", body: "東京都・長野県" },
  { label: "代表取締役", body: "浦中 宏典" },
];

const businessLines = [
  "スポーツ事業・サービスの価値整理、企画・編集支援",
  "Webサイトの企画・構築・運用改善、マーケティング支援",
  "スポーツを起点とした事業・共創プロジェクトの企画・設計",
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
            <p className="mb-6 text-[12px] uppercase tracking-[0.22em] text-neutral-600">
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
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
            <Eyebrow en="Challenge" ja="私たちが向き合う課題" />
            {/* 見出しを左カラム、本文を右カラムに配置し、横幅を活かす */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[20rem_1fr] lg:gap-16">
              {/* 【差し替えポイント】課題の見出し */}
              <p
                className="text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose lg:sticky lg:top-24 lg:self-start"
                style={{ fontFamily: serif }}
              >
                スポーツの現場には、まだ言語化されていない価値がある。
              </p>
              {/* 【差し替えポイント】課題の本文（段落ごとに <p> を増減可） */}
              <div className="max-w-2xl space-y-6 text-[15px] leading-loose tracking-wide text-neutral-700">
                <p>
                  指導者やトレーナーが培ってきた実践知だけでなく、スポーツ事業者やクラブ、地域の組織が積み重ねてきた専門性や実績も、十分に伝わる言葉や情報になっていないことがあります。
                </p>
                <p>
                  その結果、価値そのものは存在していても、顧客との接点や新しい事業機会につながらないまま埋もれてしまうことがあります。
                </p>
                <p>
                  私たちはその現実と向き合い、スポーツに関わる価値を「伝わる言葉」へと翻訳し、次の機会へつなげることに取り組んでいます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── For：支援する対象 ── */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
            <Eyebrow en="For" ja="支援する対象" />
            {/* 【差し替えポイント】supporters 配列（上部）の title / body を編集 */}
            {/* PCは2列×2段。各セルに下罫線・右罫線を付け、コンテナに上罫線・左罫線を付けて格子状に */}
            <div className="grid grid-cols-1 border-neutral-200 sm:grid-cols-2 sm:border-t sm:border-l">
              {supporters.map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 border-b border-neutral-200 py-10 sm:gap-8 sm:border-r sm:px-8 sm:py-12"
                >
                  <span className="w-7 shrink-0 pt-0.5 text-[13px] tracking-[0.18em] text-neutral-600 sm:w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="text-lg text-neutral-900 sm:text-xl"
                      style={{ fontFamily: serif }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[15px] leading-loose tracking-wide text-neutral-600">
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
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
            <Eyebrow en="Services" ja="提供すること" />
            {/* 【差し替えポイント】セクションリード文 */}
            <p className="mb-12 max-w-2xl text-[15px] leading-loose tracking-wide text-neutral-600 sm:text-base sm:leading-loose">
              現場にある知恵を、その人や組織らしい言葉と形に整え、必要とする人へ届けます。
            </p>
            {/* 【差し替えポイント】offerings 配列（上部）の title / body を編集 */}
            {/* 3項目をPCでは横並びのグリッドにし、各列が横幅を活用できるようにする */}
            <div className="grid grid-cols-1 gap-10 border-t border-neutral-200 pt-10 lg:grid-cols-3 lg:gap-x-12">
              {offerings.map((item, i) => (
                <div key={item.title}>
                  <span className="text-[13px] tracking-[0.18em] text-neutral-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="mt-3 text-lg text-neutral-900 sm:text-xl"
                    style={{ fontFamily: serif }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-loose tracking-wide text-neutral-600">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 border-t border-neutral-200 pt-10">
              <a
                href="/service"
                className="group inline-flex items-center gap-2 text-[14px] tracking-wide text-neutral-500 transition-colors hover:text-neutral-900"
              >
                法人・団体向けの支援について
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ── Profile ── */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
            <Eyebrow en="Profile" ja="" />
            {/* 氏名・肩書きを左カラム、本文・略歴を右カラムに配置し、横幅を活かしつつ本文の可読性を維持する */}
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[18rem_1fr] lg:gap-16">
              <div>
                <p
                  className="text-lg leading-snug text-neutral-900 sm:text-xl"
                  style={{ fontFamily: serif }}
                >
                  浦中 宏典
                </p>
                <p className="mt-3 text-[14px] tracking-wide text-neutral-500">
                  株式会社ストレッチサポート 代表取締役
                </p>
              </div>
              <div>
                <div className="max-w-2xl space-y-6 text-[15px] leading-loose tracking-wide text-neutral-700">
                  <p>
                    高校時代、陸上競技に取り組む中で慢性的な膝の痛みに悩んだ経験から、身体づくりやコンディショニングに関心を持ち、トレーナーの道を志しました。
                  </p>
                  <p>
                    その後、トレーナーとしてスポーツ選手や市民ランナーの身体づくりを支援。株式会社ストレッチサポートを設立し、トレーニング指導に加え、ランニングメディアの運営、コンテンツ制作、セミナーやイベントの企画・運営など、スポーツに関わるさまざまな事業に取り組んできました。
                  </p>
                  <p>
                    活動を続ける中で、保護者として子どものスポーツに関わるようになり、現場の外側からスポーツを見る機会が増えました。選手やトレーナーとして関わっていた頃とは異なる視点から、スポーツの価値や課題を考えるようになりました。
                  </p>
                  <p>
                    また、BtoBマーケティングに携わる中では、顧客を深く理解し、市場や業界の構造を捉えることを前提としてきました。マーケティングにおいて重要なのは、価値をどのようにつくり、必要とする人へ届けるかということです。
                  </p>
                  <p>
                    こうした経験を通して、スポーツの現場には人の成長を支える知識や経験が数多くある一方で、その多くが現場の中で完結し、社会へ伝わる機会が限られていることに課題を感じるようになりました。
                  </p>
                  <p>
                    現場で生まれる実践知を見つけ、編集し、必要とする人へ届けること。そして、その価値を新たな事業や地域へつないでいくことを、株式会社ストレッチサポートの役割と考えています。
                  </p>
                  <p>
                    トレーナーとしての活動は、株式会社ストレッチサポートの出発点です。現在は、Webサイトの企画・構築・運用改善や、事業者の価値整理・情報発信、事業・共創プロジェクトの企画設計を中心に取り組んでいます。
                  </p>
                </div>
                {/* 略歴 */}
                <div className="mt-16 max-w-2xl border-t border-neutral-200 pt-10">
                  <div className="divide-y divide-neutral-200">
                    {biography.map((item) => (
                      <div
                        key={item.label}
                        className="py-6 sm:grid sm:grid-cols-[13rem_1fr] sm:gap-10"
                      >
                        <p className="mb-2 text-[14px] font-medium tracking-wide text-neutral-800 sm:mb-0">
                          {item.label === "株式会社ストレッチサポート設立" ? (
                            <>
                              株式会社ストレッチサポート
                              <br className="hidden sm:block" />
                              設立
                            </>
                          ) : (
                            item.label
                          )}
                        </p>
                        <p className="text-[15px] leading-loose tracking-wide text-neutral-600">
                          {item.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Works ── */}
        <section className="border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
            <Eyebrow en="Works" ja="" />
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-16">
              {works.map((item) => (
                <div
                  key={item.title}
                  className="border-t border-neutral-300 py-8 lg:pb-0"
                >
                  <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-neutral-100">
                    <WorkIcon type={item.icon} />
                  </div>
                  <h3
                    className="mb-5 text-[15px] tracking-[0.04em] text-neutral-900"
                    style={{ fontFamily: serif }}
                  >
                    {item.title}
                  </h3>
                  <div className="space-y-4 text-[14px] leading-loose tracking-wide text-neutral-600">
                    {item.body.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Company Profile ── */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
            <Eyebrow en="Company Profile" ja="会社概要" />
            {/* カードではなく罫線のみで2カラムを区切る。背景はページと同じ白のまま */}
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              {/* 基本情報 */}
              <div className="border-t border-neutral-200 pt-10">
                <h3 className="mb-6 text-[12px] uppercase tracking-[0.18em] text-neutral-500">
                  基本情報
                </h3>
                <div className="divide-y divide-neutral-200">
                  {companyBasics.map((item) => (
                    <div
                      key={item.label}
                      className="py-4 first:pt-0 sm:grid sm:grid-cols-[7rem_1fr] sm:gap-6"
                    >
                      <p className="mb-1 text-[13px] font-medium tracking-wide text-neutral-800 sm:mb-0">
                        {item.label}
                      </p>
                      <p className="text-[14px] leading-loose tracking-wide text-neutral-600">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 事業内容 */}
              <div className="border-t border-neutral-200 pt-10 lg:border-t-0 lg:border-l lg:pl-16 lg:pt-0">
                <h3 className="mb-6 text-[12px] uppercase tracking-[0.18em] text-neutral-500">
                  事業内容
                </h3>
                <ol className="space-y-4 text-[15px] leading-loose tracking-wide text-neutral-600">
                  {businessLines.map((line, i) => (
                    <li key={line} className="flex gap-3">
                      <span className="shrink-0 text-neutral-400">
                        {i + 1}.
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ── Message ── */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Message" ja="" />
            <div className="max-w-xl space-y-6 text-[15px] leading-loose tracking-wide text-neutral-700">
              <p>
                スポーツに関わる専門家や組織のもとには、人の成長や挑戦を支える専門知や実践知が蓄積されています。しかし、それらが必要とする人や地域の現場まで届き、日々の実践に生かされる仕組みは、まだ十分ではありません。
              </p>
              <p>
                私たちは、専門知や実践知を持つ人たちと、それを必要とする人たちの間に立ち、その価値を見つけ、伝わる言葉や実践できる仕組みへ編集していきます。
              </p>
              <p>
                そして、現場で生まれた知識や経験が、新たな事業や地域の仕組みへとつながり、より多くの人の成長や挑戦を支える循環をつくっていきます。
              </p>
            </div>
            <p
              className="mt-10 max-w-xl text-base leading-loose text-neutral-800 sm:text-lg"
              style={{ fontFamily: serif }}
            >
              スポーツの中にある可能性を探究し、その価値を社会へ翻訳する。
            </p>
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
                href="/contact"
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
              <address className="mt-3 not-italic text-[12px] leading-relaxed tracking-wide text-neutral-600">
                〒104-0061
                <br />
                東京都中央区銀座1-22-11 銀座大竹ビジデンス2階
              </address>
            </div>
            <nav className="flex flex-col gap-2 text-[13px] tracking-wide text-neutral-500 sm:items-end">
              <a
                href="/contact"
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
          <p className="mt-12 text-[12px] tracking-wide text-neutral-600">
            © {year} Stretch Support, Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}
