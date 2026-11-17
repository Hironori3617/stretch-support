import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "スポーツ事業者向けWebサイト制作・マーケティング支援｜株式会社ストレッチサポート",
  description:
    "スポーツ事業者・クラブの専門性を顧客に伝わる価値へ。サービスサイト・プロダクトサイトの企画・構築・運用改善、SEO・AI検索を意識した情報設計、事業・共創プロジェクトの企画設計を支援します。",
  alternates: {
    canonical: "https://stretch-s.co.jp/service",
  },
};

const serif =
  '"Hiragino Mincho ProN", "Yu Mincho", "YuMincho", "Noto Serif JP", "Times New Roman", serif';
const sans =
  '"Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "YuGothic", "Meiryo", "Noto Sans JP", system-ui, sans-serif';
const ACCENT = "#2f4e6f";

function Eyebrow({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="h-4 w-px" style={{ backgroundColor: ACCENT }} />
      <span className="text-[12px] uppercase tracking-[0.2em] text-neutral-600">{en}</span>
      <span className="text-[12px] tracking-wide text-neutral-500">{ja}</span>
    </div>
  );
}

const challenges = [
  "専門性や実績が、顧客に伝わる言葉や情報になっていない",
  "Webサイトはあるが、サービスの違いや依頼内容が分かりにくい",
  "更新や分析、改善まで手が回らず、問い合わせにつながっているか見えにくい",
  "新しい事業や連携の構想はあるが、企画として具体化できていない",
];

const services = [
  {
    title: "価値の言語化・編集",
    tagline: "専門性や強みを、顧客が理解できる価値へ。",
    body: "現場では当たり前になっている知識や技術、日々の工夫。その中にある価値を見つけ、誰に、何を、なぜ届けるのかを整理します。サービスの説明や営業活動、Webサイトの情報設計に使える言葉と形にしていきます。",
    examples: [
      "サービスの強み・提供価値の整理",
      "サービス紹介文・営業資料の企画・制作",
      "顧客の声・事例・専門知識の編集",
    ],
  },
  {
    title: "マーケティング・情報発信支援",
    tagline: "Webサイトを、事業と顧客をつなぐ基盤へ。",
    body: "専門性の高いサービスであっても、その価値が顧客に伝わらなければ、新しい相談や事業機会にはつながりません。サービスサイトやプロダクトサイトの企画・構築・運用改善を中心に、SEOやAI検索を意識した情報設計、顧客との接点づくりを支援します。",
    examples: [
      "コーポレートサイト・サービスサイト・プロダクトサイトの企画・構築・改善",
      "サービス情報・事例・FAQの制作",
      "検索や問い合わせ導線の改善",
      "アクセス解析・運用支援",
    ],
    href: "/service/marketing",
  },
  {
    title: "事業・共創プロジェクトの企画設計",
    tagline: "スポーツの専門性を、新しい事業や地域の機会へ。",
    body: "スポーツクラブ、専門家、企業、地域の関係者が持つ強みを整理し、目的や役割を共有しながら、新たな取り組みを企画します。事業構想、実証、セミナーやワークショップなど、内容に応じて必要な関係者と進め方を設計します。",
    examples: [
      "新規サービス・事業構想の整理",
      "協業・共創プロジェクトの企画設計",
      "実証計画・振り返りの設計",
      "セミナー・イベント・ワークショップの企画運営",
    ],
    note: "具体的な対応範囲・実施体制は案件ごとに確認します。",
  },
];

const experienceItems = [
  {
    title: "セミナー・ウェビナーの企画運営",
    body: "ランナー向けのセミナーに加え、外部講師を招いたトレーナー向けの専門セミナー、BtoB領域のウェビナーなど、対象と目的に応じた学びの場を企画・運営してきました。",
    photo: "/images/service/seminar.webp",
    alt: "セミナー会場で、スクリーンの資料をもとに講師が参加者へ説明している様子",
  },
  {
    title: "トレイルランニングイベントの企画運営",
    body: "自然環境を活かしたトレイルランニングイベントを企画・運営。スポーツを体験する機会と、参加者同士の交流や学びの場づくりに取り組んできました。",
    photo: "/images/service/trail-running-event.webp",
    alt: "森の中のトレイルコースで、参加者たちが集まって歩いている様子",
  },
  {
    title: "身体づくりワークショップ",
    body: "身体づくりや動きづくりを実践するワークショップを企画・運営してきました。講師から知識を聞くだけでなく、参加者自身が身体を動かしながら学ぶ場づくりに取り組んできました。",
    photo: "/images/service/bodywork-workshop.webp",
    alt: "スタジオで参加者たちが、身体づくりのエクササイズに取り組んでいる様子",
  },
];

const processes = [
  {
    title: "価値を見つけ、整理する",
    body: "事業や現場への理解を深め、専門性・強み・課題を整理します。",
  },
  {
    title: "届け方を設計する",
    body: "誰に何を届けるかを明確にし、必要な施策や導線を考えます。",
  },
  {
    title: "形にする",
    body: "Webサイト、コンテンツ、資料、企画などに落とし込みます。",
  },
  {
    title: "届ける",
    body: "情報発信や関係者との連携を通じて、顧客・参加者との接点をつくります。",
  },
  {
    title: "計測し、振り返り、次へつなげる",
    body: "数字や現場の声をもとに振り返り、改善に活かします。",
  },
];

const targets = [
  {
    title: "スポーツ事業者",
    body: "トレーニング、コンディショニング、教育、用品、イベント、サービス開発など、スポーツに関わる事業を展開する企業・事業者。",
  },
  {
    title: "プロスポーツクラブ・スポーツ団体",
    body: "クラブの価値発信、事業・広報の改善、地域との接点づくりに取り組む組織。",
  },
  {
    title: "自治体・地域の関係者",
    body: "スポーツを通じた育成、健康づくり、地域参加、共創プロジェクトに取り組む組織。",
  },
];

const flowSteps = [
  {
    title: "ご相談",
    body: "事業の状況、課題、実現したいことを伺います。",
  },
  {
    title: "課題と優先順位の整理",
    body: "何から取り組むべきか、対応の方向性を検討します。",
  },
  {
    title: "ご提案",
    body: "支援内容、成果物、進め方、役割分担、費用を具体化してご提案します。",
  },
  {
    title: "実行・改善",
    body: "合意した内容に基づいて実施し、必要に応じて改善します。",
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
            <p className="mb-6 text-[12px] uppercase tracking-[0.22em] text-neutral-600">
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
              スポーツ事業者やクラブが培ってきた専門性や経験を、顧客に伝わる言葉と仕組みへ。価値の言語化、Webサイトの企画・構築・運用改善、事業・共創プロジェクトの企画設計を通じて、次の機会につなげます。
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
                スポーツの現場には、時間をかけて培われた専門性や実績があります。一方で、その価値を顧客に伝えるための整理や情報発信に、十分な時間を割けない事業者も少なくありません。
              </p>
              <ul className="divide-y divide-neutral-200 border-t border-neutral-200">
                {challenges.map((item, i) => (
                  <li key={i} className="flex items-start gap-5 py-6 sm:py-7">
                    <span className="w-7 shrink-0 pt-0.5 text-[13px] tracking-[0.18em] text-neutral-600">
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

        {/* ── Services ── */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Services" ja="提供する支援" />
            <div className="mb-14 max-w-2xl">
              <p
                className="text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                現場への理解を、具体的な支援へ。
              </p>
              <p className="mt-8 text-[15px] leading-loose tracking-wide text-neutral-700">
                事業の状況や目標に応じて、必要な範囲を組み合わせて支援します。はじめから制作物や施策ありきで進めるのではなく、何を実現する必要があるのかを整理するところから始めます。
              </p>
            </div>
            <div className="divide-y divide-neutral-200 border-t border-neutral-200">
              {services.map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 py-10 sm:gap-10 sm:py-12"
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
                    <p className="mt-3 text-[15px] font-semibold tracking-wide text-neutral-800">
                      {item.tagline}
                    </p>
                    <p className="mt-3 text-[15px] leading-loose tracking-wide text-neutral-600">
                      {item.body}
                    </p>
                    <p className="mt-5 text-[12px] leading-relaxed tracking-wide text-neutral-500">
                      <span className="text-neutral-400">支援内容の例：</span>{" "}
                      {item.examples.join("／")}
                    </p>
                    {item.note && (
                      <p className="mt-3 text-[12px] leading-relaxed tracking-wide text-neutral-400">
                        {item.note}
                      </p>
                    )}
                    {item.href && (
                      <a
                        href={item.href}
                        className="group mt-5 inline-flex items-center gap-2 text-[14px] tracking-wide transition-colors"
                        style={{ color: ACCENT }}
                      >
                        詳細はこちら
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Experience" ja="これまでの取り組み・実績" />
            <div className="mb-14 max-w-2xl">
              <p
                className="text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                現場と事業、その両方を行き来してきた経験。
              </p>
              <p className="mt-8 text-[15px] leading-loose tracking-wide text-neutral-700">
                Stretch Supportは2011年から、スポーツ現場でのサービス提供を起点に、メディア、Webサイト、セミナー、イベントなどへ取り組みを広げてきました。これまで培ってきた実務経験を、現在の事業支援に活かしています。
              </p>
            </div>

            <div className="max-w-2xl border-t border-neutral-200 pt-10">
              <h3
                className="text-lg text-neutral-900 sm:text-xl"
                style={{ fontFamily: serif }}
              >
                Webサイト・デジタルマーケティング
              </h3>
              <p className="mt-3 text-[15px] leading-loose tracking-wide text-neutral-600">
                サービスサイト・プロダクトサイトの企画・構築・運用や、BtoB領域のマーケティング施策に取り組んできました。また、ランナー向けオウンドメディアを企画・運営し、月間30万PVを超える規模へ成長。コンテンツ販売、物販、イベント集客など、Web上の接点を実際の事業へつなげてきました。
              </p>
              <p className="mt-5 text-[12px] leading-relaxed tracking-wide text-neutral-500">
                <span className="text-neutral-400">実績の要点：</span>{" "}
                月間30万PV超のメディア運営／コンテンツ販売・物販・イベント集客への展開／サービスサイト・プロダクトサイトの構築・運用
              </p>
            </div>

            <div className="mt-14 divide-y divide-neutral-200 border-t border-neutral-200">
              {experienceItems.map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 py-10 sm:gap-10 sm:py-12"
                >
                  <span className="w-7 shrink-0 pt-0.5 text-[13px] tracking-[0.18em] text-neutral-600 sm:w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-1 flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                    <div className="sm:flex-1">
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
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 sm:w-56 sm:shrink-0">
                      <Image
                        src={item.photo}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 224px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-xl text-[13px] leading-loose tracking-wide text-neutral-500">
              その他の実績：スポーツチーム向けに、目標設定から達成に向けた行動を考えるワークショップも実施してきました。
            </p>
          </div>
        </section>

        {/* ── Approach ── */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Approach" ja="支援の進め方" />
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
                    <p className="mt-3 text-[15px] leading-loose tracking-wide text-neutral-600">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-xl text-[13px] leading-loose tracking-wide text-neutral-500">
              すべての工程を一律に提供するのではなく、必要な範囲を組み合わせます。
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

        {/* ── Flow ── */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Flow" ja="ご相談から支援まで" />
            <div className="mb-14 max-w-2xl">
              <p
                className="text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                まずは、現在の状況をお聞かせください。
              </p>
            </div>
            <div className="divide-y divide-neutral-200 border-t border-neutral-200">
              {flowSteps.map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 py-10 sm:gap-10 sm:py-12"
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
                    <p className="mt-3 text-[15px] leading-loose tracking-wide text-neutral-600">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Document: 既存PDFと「3つの支援領域」の内容が不一致のため、新PDF確定まで一時非表示（public/documents配下のファイルは削除していない） */}

        {/* ── Contact ── */}
        <section className="border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Contact" ja="お問い合わせ" />
            <div className="max-w-2xl">
              <p
                className="text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                現場の価値から、次の可能性を考える。
              </p>
              <div className="mt-8 space-y-5 text-[15px] leading-loose tracking-wide text-neutral-700">
                <p>
                  「自社サービスの強みを整理したい」「Webサイトを見直したい」「新しい事業や連携について相談したい」。課題や具体的な施策がまだ決まっていなくても構いません。
                </p>
                <p>
                  現在の状況を伺いながら、Stretch Supportがお手伝いできることを一緒に考えます。
                </p>
              </div>
              <div className="mt-12">
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
          <p className="mt-12 text-[12px] tracking-wide text-neutral-600">
            © {year} Stretch Support, Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}
