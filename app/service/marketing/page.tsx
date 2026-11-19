import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "マーケティング・情報発信支援｜株式会社ストレッチサポート",
  description:
    "スポーツに関わる事業者・団体を中心に、マーケティング・情報発信を支援。Webサイトの企画・構築・運用改善、コンテンツ企画・編集、SEOやアクセス解析など、事業と顧客をつなぐ情報設計に取り組みます。",
  alternates: {
    canonical: "https://stretch-s.co.jp/service/marketing",
  },
};

const serif =
  '"Hiragino Mincho ProN", "Yu Mincho", "YuMincho", "Noto Serif JP", "Times New Roman", serif';
const sans =
  '"Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "YuGothic", "Meiryo", "Noto Sans JP", system-ui, sans-serif';
const ACCENT = "#2f4e6f";

const LINKS = {
  instagram: "https://www.instagram.com/udio08/?hl=ja",
  facebook: "https://www.facebook.com/hironori.uranaka",
} as const;

function Eyebrow({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="h-4 w-px" style={{ backgroundColor: ACCENT }} />
      <span className="text-[12px] uppercase tracking-[0.2em] text-neutral-600">{en}</span>
      <span className="text-[12px] tracking-wide text-neutral-500">{ja}</span>
    </div>
  );
}

type IconType =
  | "media"
  | "product"
  | "event"
  | "contact"
  | "plan"
  | "build"
  | "measure"
  | "understand"
  | "prioritize"
  | "execute"
  | "improve";

function DiagramIcon({ type, size = 30 }: { type: IconType; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
  switch (type) {
    case "media":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="7.5" y1="9" x2="16.5" y2="9" />
          <line x1="7.5" y1="13" x2="16.5" y2="13" />
          <line x1="7.5" y1="17" x2="13" y2="17" />
        </svg>
      );
    case "product":
      return (
        <svg {...common}>
          <path d="M21 8 12 3 3 8l9 5 9-5Z" />
          <path d="M3 8v8l9 5 9-5V8" />
          <line x1="12" y1="13" x2="12" y2="21" />
        </svg>
      );
    case "event":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="8" y1="3" x2="8" y2="7" />
          <line x1="16" y1="3" x2="16" y2="7" />
        </svg>
      );
    case "contact":
      return (
        <svg {...common}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l2.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 1 1 17 0Z" />
        </svg>
      );
    case "plan":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="9" x2="9" y2="21" />
        </svg>
      );
    case "build":
      return (
        <svg {...common}>
          <rect x="2" y="4" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="18" x2="12" y2="21" />
        </svg>
      );
    case "measure":
      return (
        <svg {...common}>
          <line x1="4" y1="20" x2="20" y2="20" />
          <rect x="6" y="13" width="3" height="7" />
          <rect x="11" y="9" width="3" height="11" />
          <rect x="16" y="5" width="3" height="15" />
        </svg>
      );
    case "understand":
      return (
        <svg {...common}>
          <circle cx="9" cy="12" r="6" />
          <circle cx="15" cy="12" r="6" />
        </svg>
      );
    case "prioritize":
      return (
        <svg {...common}>
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="15" y2="12" />
          <line x1="4" y1="18" x2="10" y2="18" />
        </svg>
      );
    case "execute":
      return (
        <svg {...common}>
          <polygon points="8,5 19,12 8,19" />
        </svg>
      );
    case "improve":
      return (
        <svg {...common}>
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
          <path d="M21 3v5h-5" />
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
          <path d="M3 21v-5h5" />
        </svg>
      );
  }
}

function IconCircle({
  type,
  accent = true,
  size = "lg",
}: {
  type: IconType;
  accent?: boolean;
  size?: "lg" | "md";
}) {
  return (
    <span
      className={
        size === "lg"
          ? "flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-neutral-100"
          : "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-100"
      }
      style={{ color: accent ? ACCENT : "#9ca3af" }}
    >
      <DiagramIcon type={type} size={size === "lg" ? 30 : 26} />
    </span>
  );
}

function ArrowIcon({
  direction = "right",
  size = 16,
}: {
  direction?: "right" | "down";
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-neutral-300"
      style={direction === "down" ? { transform: "rotate(90deg)" } : undefined}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const heroBody = [
  "スポーツに関わる事業者・団体を中心に、マーケティング・情報発信の企画から実行、改善まで支援します。",
  "事業やサービスの強みを理解し、誰に、何を、どのように届けるかを整理する。",
  "Webサイトの企画・構築・運用改善を中心に、コンテンツや情報発信を組み合わせながら、顧客の理解や問い合わせにつながる仕組みを考えます。",
];

const challengeItems = [
  {
    title: "強みや違いが伝わらない",
    body: "専門性や実績はあるものの、顧客に何を提供できるのか、他社と何が違うのかをうまく説明できていない。",
  },
  {
    title: "Webサイトが十分に機能していない",
    body: "サイトはあるものの、サービス内容が分かりにくく、問い合わせや相談につながる導線が整っていない。",
  },
  {
    title: "情報発信が継続できない",
    body: "発信の必要性は感じていても、テーマの整理やコンテンツ制作、更新のための時間が確保できない。",
  },
  {
    title: "効果が分からず、改善できない",
    body: "Webサイトや情報発信が顧客にどう届いているのかを把握できず、次の施策を判断しにくい。",
  },
];

const approachBody = [
  "Webサイトを新しくすること。記事を増やすこと。SNSで発信すること。",
  "それらは目的を実現するための手段です。",
  "私たちは、まず事業やサービスの特徴、顧客、現在の課題を理解することから始めます。",
  "そのうえで、何を優先して取り組むべきかを整理し、必要な施策を企画・実行します。",
  "最初からすべての施策を行うのではなく、事業の状況や体制に合わせて、必要な範囲から支援します。",
];

const whatWeDo = [
  {
    title: "マーケティング・情報発信の設計",
    lead: "事業の目的や顧客像を整理し、伝えるべき情報と届け方を設計します。",
    body: "Webサイトやコンテンツなどの役割を整理し、顧客の認知から理解、比較・検討、問い合わせまでを見据えた情報発信を考えます。",
    points: [
      "顧客・市場・サービスの理解",
      "情報発信の課題整理と優先順位づけ",
      "コンテンツの方向性・テーマ設計",
      "顧客接点・問い合わせ導線の設計",
    ],
  },
  {
    title: "Webサイトの企画・構築",
    lead: "サービスや事業の価値を伝え、顧客が必要な情報を得られるWebサイトを企画・構築します。",
    body: "新規制作やリニューアルに加え、既存サイトの情報設計・導線改善にも対応します。",
    points: [
      "Webサイトの企画・構成設計",
      "ページ設計・ワイヤーフレーム作成",
      "サービスサイト・プロダクトサイトの制作・実装",
      "SEO・AI検索を意識した情報構造の設計",
    ],
  },
  {
    title: "コンテンツの企画・編集",
    lead: "サービスの特徴や専門的な知識・経験を、顧客に伝わるコンテンツへと編集します。",
    body: "記事を増やすこと自体を目的にせず、顧客の理解や検討に必要な情報を整理し、適切な形で届けます。",
    points: [
      "コンテンツテーマ・構成の企画",
      "サービス紹介コンテンツの制作・改善",
      "導入事例や取り組みの編集",
      "Webサイトと情報発信の連携設計",
    ],
  },
  {
    title: "計測・運用・改善",
    lead: "Webサイトや情報発信の状況を把握し、改善につなげます。",
    body: "アクセスデータや問い合わせ状況、顧客の反応などから課題を整理し、優先順位をつけて施策を検討・実行します。",
    points: [
      "アクセス解析・計測環境の整備",
      "Webサイトの課題分析",
      "コンテンツ・問い合わせ導線の改善",
      "運用方針の整理と継続的な改善支援",
    ],
  },
];

const experienceItems = [
  {
    title: "情報発信を事業につなげる",
    body: [
      "BtoC・BtoBの両領域で、メディアの企画・運営に携わってきました。",
      "ランナー向けメディアでは、情報発信を起点にコンテンツ販売や物販、イベント集客などへ展開。",
      "BtoBメディアでは、顧客の関心や課題に応じた情報発信を通じて、問い合わせや商談・受注につながる仕組みの設計・運用に取り組んできました。",
    ],
    note: "ランナー向けメディアは、月間30万PV超の規模に成長しました。",
  },
  {
    title: "Webを企画から改善まで",
    body: [
      "Webサイトの企画・構成、ワイヤーフレーム作成から制作・実装まで担当。",
      "事業や顧客の理解を起点に、アクセス解析や計測データを活用しながら、Webサイトやコンテンツの改善にも取り組んできました。",
    ],
    note: null,
  },
];

const experienceBranches = [
  { label: "商品・サービス", icon: "product" as const },
  { label: "イベント", icon: "event" as const },
  { label: "相談・商談", icon: "contact" as const },
];

const webFlowSteps = [
  { label: "企画・設計", icon: "plan" as const },
  { label: "制作・実装", icon: "build" as const },
  { label: "計測・改善", icon: "measure" as const },
];

const howWeWorkSteps = [
  {
    shortTitle: "理解",
    shortBody: "事業と顧客",
    icon: "understand" as const,
    title: "事業・課題の理解",
    body: "事業の目的、サービスの特徴、顧客、現在の取り組みを把握します。",
  },
  {
    shortTitle: "整理",
    shortBody: "課題と優先順位",
    icon: "prioritize" as const,
    title: "方針・優先順位の整理",
    body: "何を改善し、どのような施策に取り組むかを整理します。",
  },
  {
    shortTitle: "実行",
    shortBody: "企画・制作",
    icon: "execute" as const,
    title: "企画・制作・実行",
    body: "Webサイトやコンテンツなど、合意した施策を具体化します。",
  },
  {
    shortTitle: "計測",
    shortBody: "数字と反応",
    icon: "measure" as const,
    title: "計測・振り返り",
    body: "アクセス状況や顧客の反応などを確認します。",
  },
  {
    shortTitle: "改善",
    shortBody: "次の施策へ",
    icon: "improve" as const,
    title: "改善・次の施策へ",
    body: "結果を踏まえて課題と優先順位を見直し、次の取り組みにつなげます。",
  },
];

const consultExamples = [
  "Webサイトを新しくつくりたい",
  "今あるサイトの情報や導線を見直したい",
  "自社の強みを伝えるコンテンツを整えたい",
  "情報発信やマーケティングの進め方を相談したい",
];

export default function MarketingServicePage() {
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
          <div className="mx-auto max-w-5xl px-6 pt-16 pb-14 sm:pt-24 sm:pb-16">
            <Eyebrow en="Marketing" ja="マーケティング・情報発信支援" />
            <h1
              className="text-[1.875rem] leading-[1.55] text-neutral-900 [text-wrap:balance] sm:text-[2.5rem] sm:leading-[1.5]"
              style={{ fontFamily: serif }}
            >
              事業の価値を、顧客に届く情報と接点へ。
            </h1>
            <div className="my-7 h-px w-12" style={{ backgroundColor: ACCENT }} />
            <div className="max-w-2xl space-y-5 text-[15px] leading-loose tracking-wide text-neutral-700">
              {heroBody.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Challenge ── */}
        <section className="bg-neutral-50">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Challenge" ja="抱えやすい課題" />
            <div className="max-w-2xl">
              <h2
                className="text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                伝えたい価値が、顧客に届いていない。
              </h2>
              <div className="mt-8 space-y-4 text-[15px] leading-loose tracking-wide text-neutral-700">
                <p>専門的なサービスや現場の仕事に力を注ぐ一方で、マーケティングや情報発信まで十分に手が回らない。</p>
                <p>そんな課題を抱える事業者は少なくありません。</p>
              </div>
              <ul className="mt-10 divide-y divide-neutral-200 border-t border-neutral-200">
                {challengeItems.map((item, i) => (
                  <li key={item.title} className="flex items-start gap-5 py-7">
                    <span className="w-7 shrink-0 pt-0.5 text-[13px] tracking-[0.18em] text-neutral-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className="text-[15px] text-neutral-900 sm:text-[16px]"
                        style={{ fontFamily: serif }}
                      >
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-loose tracking-wide text-neutral-600">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Our Approach ── */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Approach" ja="進め方" />
            <div className="max-w-2xl">
              <h2
                className="text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                施策からではなく、事業の理解から。
              </h2>
              <div className="mt-8 space-y-6 text-[15px] leading-loose tracking-wide text-neutral-700">
                {approachBody.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── What We Do ── */}
        <section className="border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="What We Do" ja="支援できること" />
            <h2
              className="mb-14 max-w-2xl text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
              style={{ fontFamily: serif }}
            >
              伝え方を設計し、形にし、改善する。
            </h2>
            <div className="divide-y divide-neutral-200 border-t border-neutral-200">
              {whatWeDo.map((item, i) => (
                <div key={item.title} className="flex items-start gap-5 py-10 sm:gap-10">
                  <span className="w-7 shrink-0 pt-0.5 text-[13px] tracking-[0.18em] text-neutral-600 sm:w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg text-neutral-900 sm:text-xl" style={{ fontFamily: serif }}>
                      {item.title}
                    </h3>
                    <div className="mt-3 max-w-2xl space-y-3 text-[15px] leading-loose tracking-wide text-neutral-700">
                      <p>{item.lead}</p>
                      <p>{item.body}</p>
                    </div>
                    <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span
                            className="mt-[0.6em] h-[3px] w-[3px] shrink-0 rounded-full"
                            style={{ backgroundColor: ACCENT }}
                          />
                          <span className="text-[13px] leading-loose tracking-wide text-neutral-600">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-2xl text-[13px] leading-loose tracking-wide text-neutral-500">
              支援範囲・体制は案件ごとに設計します。専門的な技術開発などが必要な場合は、外部パートナーとの連携も含めて検討します。
            </p>
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Experience" ja="実績・経験" />
            <h2
              className="mb-14 max-w-2xl text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
              style={{ fontFamily: serif }}
            >
              情報を届けることと、事業につなげること。
            </h2>
            <div className="divide-y divide-neutral-200 border-t border-neutral-200">
              {experienceItems.map((item, i) => (
                <div key={item.title} className="py-10 lg:flex lg:items-center lg:gap-14 lg:py-14">
                  <div className="lg:w-[19rem] lg:shrink-0">
                    <span className="text-[13px] tracking-[0.18em] text-neutral-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="mt-3 text-[16px] leading-snug text-neutral-900 sm:text-[17px]"
                      style={{ fontFamily: serif }}
                    >
                      {item.title}
                    </h3>
                    <div className="mt-4 space-y-4 text-[14px] leading-loose tracking-wide text-neutral-600">
                      {item.body.map((para) => (
                        <p key={para}>{para}</p>
                      ))}
                    </div>
                    {item.note && (
                      <p className="mt-3 text-[12px] leading-relaxed tracking-wide text-neutral-500">
                        {item.note}
                      </p>
                    )}
                  </div>

                  <div className="mt-8 lg:mt-0 lg:flex-1">
                    {i === 0 ? (
                      <div className="grid grid-cols-[auto_auto_1fr] items-center gap-x-4 gap-y-4">
                        <div className="row-span-3 flex flex-col items-center gap-3 pr-4">
                          <IconCircle type="media" />
                          <span className="text-center text-[11px] leading-snug tracking-wide text-neutral-500">
                            メディア
                            <br />
                            情報発信
                          </span>
                        </div>
                        {experienceBranches.map((branch) => (
                          <Fragment key={branch.label}>
                            <ArrowIcon size={20} />
                            <div className="flex items-center gap-3">
                              <IconCircle type={branch.icon} accent={false} />
                              <span className="text-[13px] tracking-wide text-neutral-700">
                                {branch.label}
                              </span>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                    ) : (
                      <ol className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-2">
                        {webFlowSteps.map((step, j) => (
                          <Fragment key={step.label}>
                            <li className="flex flex-1 flex-col items-center gap-3 border border-neutral-200 px-4 py-6 text-center">
                              <IconCircle type={step.icon} />
                              <span className="text-[13px] tracking-wide text-neutral-800">
                                {step.label}
                              </span>
                            </li>
                            {j < webFlowSteps.length - 1 && (
                              <li
                                aria-hidden="true"
                                className="flex items-center justify-center text-neutral-300"
                              >
                                <span className="text-base sm:hidden">↓</span>
                                <span className="hidden text-base sm:inline">→</span>
                              </li>
                            )}
                          </Fragment>
                        ))}
                      </ol>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How We Work ── */}
        <section className="border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="How We Work" ja="支援の流れ" />
            <h2
              className="mb-14 max-w-2xl text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
              style={{ fontFamily: serif }}
            >
              理解から実行、改善まで。
            </h2>
            {/* PC: 横方向の5ステップ図解（lg以上） */}
            <div className="hidden lg:flex lg:items-start lg:gap-0">
              {howWeWorkSteps.map((item, i) => (
                <Fragment key={item.title}>
                  <div
                    className="flex flex-1 flex-col items-center gap-3 border-t-2 px-2 pt-6 text-center"
                    style={{ borderColor: ACCENT }}
                  >
                    <span className="text-[12px] tracking-[0.16em]" style={{ color: ACCENT }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <IconCircle type={item.icon} size="md" />
                    <h3
                      className="text-2xl leading-none text-neutral-900 sm:text-3xl"
                      style={{ fontFamily: serif }}
                    >
                      {item.shortTitle}
                    </h3>
                    <p className="text-[12px] tracking-wide text-neutral-500">{item.shortBody}</p>
                  </div>
                  {i < howWeWorkSteps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="flex w-6 shrink-0 items-center justify-center pt-20"
                    >
                      <ArrowIcon />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>

            {/* SP・タブレット: 縦方向の5ステップ（lg未満） */}
            <div className="divide-y divide-neutral-200 border-t border-neutral-200 lg:hidden">
              {howWeWorkSteps.map((item, i) => (
                <div key={item.title} className="flex items-start gap-5 py-10 sm:gap-10 sm:py-12">
                  <span className="w-7 shrink-0 pt-0.5 text-[13px] tracking-[0.18em] text-neutral-600 sm:w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg text-neutral-900 sm:text-xl" style={{ fontFamily: serif }}>
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-[15px] leading-loose tracking-wide text-neutral-600">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-2xl text-[13px] leading-loose tracking-wide text-neutral-500">
              すべての工程を一括で依頼いただく必要はありません。ご相談内容に応じて、支援範囲や進め方をご提案します。
            </p>
          </div>
        </section>

        {/* ── Contact / CTA ── */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Contact" ja="お問い合わせ" />
            <div className="max-w-2xl">
              <h2
                className="text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                事業やサービスの伝え方から、ご相談ください。
              </h2>
              <ul className="mt-10 grid grid-cols-1 gap-x-8 border-t border-neutral-200 sm:grid-cols-2">
                {consultExamples.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-neutral-200 py-5">
                    <span
                      className="mt-[0.65em] h-[3px] w-[3px] shrink-0 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                    <span className="text-[14px] tracking-wide text-neutral-700 sm:text-[15px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-[15px] leading-loose tracking-wide text-neutral-700">
                具体的な施策が決まっていない段階でも構いません。まずは現在の状況や課題をお聞かせください。
              </p>
              <div className="mt-12">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md px-8 py-4 text-[15px] font-semibold tracking-wide whitespace-nowrap text-white transition-colors hover:bg-[#24405c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f4e6f] focus-visible:ring-offset-2"
                  style={{ backgroundColor: ACCENT }}
                >
                  お問い合わせ・ご相談はこちら
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
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
