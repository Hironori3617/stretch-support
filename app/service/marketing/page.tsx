import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "スポーツ事業者のマーケティング・広報支援 | Stretch Support",
  description:
    "Stretch Supportは、スポーツ事業者やスポーツクラブの外部マーケティング・広報パートナーとして、課題整理からWebサイト、コンテンツ、広報など必要な施策の企画・実行まで支援します。",
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
  contact: "mailto:info@stretch-s.co.jp",
  instagram: "https://www.instagram.com/udio08/?hl=ja",
  facebook: "https://www.facebook.com/hironori.uranaka",
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

const heroBullets = [
  "Webサイトを見直したい",
  "もっと情報を発信したい",
  "自分たちの強みをきちんと伝えたい",
  "新しいサービスを、必要としている人に届けたい",
];

const challengeItems = [
  "サービスには自信があるが、他社との違いをうまく説明できていない",
  "Webサイトを改善したいが、何年もそのままになっている",
  "情報発信を始めても、日々の業務が忙しく継続できない",
  "専門的な知識や経験はあるが、記事やコンテンツにする時間がない",
  "お客様から評価されていることを、マーケティングに活かせていない",
  "新しいサービスを作っても、どう伝え、どう届けるかまで手が回らない",
  "マーケティングや広報を強化したいが、専任者を置くほどの体制にはなっていない",
];

const diagram1Steps = [
  "事業・目標を理解する",
  "現状・課題を整理する",
  "優先順位を決める",
  "企画・実行する",
  "振り返り・改善する",
];

const conditionalLines = [
  "Webサイトの改善が必要なら、Webサイトを見直す。",
  "専門性を伝える必要があるなら、記事やコンテンツをつくる。",
  "顧客がどこに価値を感じているのか分からなければ、お客様の声を聞く。",
  "新しいサービスを届けたいのであれば、そのためのマーケティングを考える。",
];

const supportCards = [
  {
    title: "Webサイトの企画・改善",
    body: "事業やサービスの価値が伝わるように、サイト構成、文章、コンテンツ、導線などを見直します。必要に応じて、新しいページの企画・制作や既存ページの改善も行います。",
  },
  {
    title: "記事・コンテンツ制作",
    body: "専門知識や現場での経験、顧客が知りたい情報などを整理し、Web記事、コラム、ホワイトペーパーなどのコンテンツとして形にします。",
  },
  {
    title: "専門性・サービスの言語化",
    body: "「何が強みなのか」「誰にどのような価値を提供しているのか」を整理し、Webサイトや営業資料、情報発信などで使える言葉にしていきます。",
  },
  {
    title: "顧客インタビュー・事例制作",
    body: "お客様へのインタビューを通じて、サービスがどのように評価されているのかを確認・整理します。得られた内容は、事例記事やWebサイト、営業資料などにも活用します。",
  },
  {
    title: "情報発信・広報",
    body: "発信するテーマの設計、コンテンツの企画・制作、プレスリリースなど、事業の状況に合わせて必要な情報発信を支援します。",
  },
  {
    title: "営業・提案資料",
    body: "サービスの特徴や導入する価値を整理し、営業や商談で使用する資料の企画・制作を行います。",
  },
  {
    title: "イベント・企画",
    body: "顧客との新しい接点づくりや情報発信など、目的に応じてイベント、講習会、セミナー等の企画を行います。",
  },
];

const specialtyBullets = [
  "誰に伝えるのか",
  "その人は何に困っているのか",
  "何を理解してもらう必要があるのか",
  "どのような形で届けるのか",
];

const diagram2Items = [
  "スポーツ・身体・現場への理解",
  "マーケティング・広報",
  "編集・制作・実行力",
];

const flowSteps = [
  {
    title: "ご相談",
    body: [
      "現在の事業や、マーケティング・広報について感じている課題をお聞きします。",
      "具体的な施策が決まっていなくても問題ありません。",
    ],
  },
  {
    title: "現状・課題の整理",
    body: ["事業の目標やサービス、現在行っているマーケティング活動などを確認し、課題を整理します。"],
  },
  {
    title: "取り組むことを決める",
    body: ["課題の優先順位を整理し、何から取り組むのか、どのような支援が必要なのかを決めます。"],
  },
  {
    title: "実行する",
    body: ["Webサイト、コンテンツ、広報など、必要な施策を実行します。"],
  },
  {
    title: "振り返り・改善",
    body: ["実施した施策を確認しながら、次に取り組むことを考えます。"],
  },
];

const closingQuotes = [
  "「Webサイトを何とかしたい」",
  "「情報発信を始めたい」",
  "「自分たちのサービスを、もっときちんと伝えたい」",
  "「マーケティングを強化したいが、何から取り組めばよいか分からない」",
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
            <p className="mb-6 text-[12px] uppercase tracking-[0.22em] text-neutral-400">
              For Business / Marketing &amp; PR
            </p>
            <h1
              className="text-[1.875rem] leading-[1.55] text-neutral-900 [text-wrap:balance] sm:text-[2.5rem] sm:leading-[1.5]"
              style={{ fontFamily: serif }}
            >
              スポーツ事業者の、
              <br />
              外部マーケティング・広報パートナー
            </h1>
            <div className="my-7 h-px w-12" style={{ backgroundColor: ACCENT }} />
            <p className="max-w-xl text-[14px] leading-loose tracking-wide text-neutral-600 sm:text-[15px]">
              スポーツ事業のマーケティング・広報を、外部パートナーとともに。
            </p>
            <p className="mt-6 max-w-2xl text-[15px] leading-loose tracking-wide text-neutral-700">
              株式会社ストレッチサポートは、事業やサービスへの理解を深めながら、社内のメンバーと同じような距離で課題を共有し、マーケティング・広報の課題整理から必要な施策の企画・実行まで支援します。
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-x-8 border-t border-neutral-200 sm:grid-cols-2">
              {heroBullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-neutral-200 py-5"
                >
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
            <p className="mt-8 max-w-2xl text-[13px] leading-loose tracking-wide text-neutral-500">
              やった方がいいことは分かっていても、日々の業務を優先するうちに、マーケティングや広報は後回しになりがちです。
            </p>
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
                専門的な仕事に集中するほど、マーケティングは後回しになりやすい
              </h2>
              <div className="mt-8 space-y-6 text-[15px] leading-loose tracking-wide text-neutral-700">
                <p>
                  スポーツに関わる事業では、専門的な知識や技術、現場で積み重ねてきた経験そのものが、サービスの価値になっていることがあります。
                </p>
                <p>
                  一方で、その専門性を持つ人たちが、サービスの提供だけでなく、営業、広報、Webサイトの更新、情報発信まで担っているケースもあります。また、少人数で運営するスポーツクラブなどでは、営業、広報、集客、スポンサー対応などを複数のメンバーが兼務し、マーケティングに十分な時間を割けないこともあります。
                </p>
              </div>
              <p className="mt-10 mb-6 text-[13px] tracking-wide text-neutral-500">
                その結果、次のような状況が生まれます。
              </p>
              <ul className="divide-y divide-neutral-200 border-t border-neutral-200">
                {challengeItems.map((item, i) => (
                  <li key={item} className="flex items-start gap-5 py-6 sm:py-7">
                    <span className="w-7 shrink-0 pt-0.5 text-[13px] tracking-[0.18em] text-neutral-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-loose tracking-wide text-neutral-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 space-y-5 text-[15px] leading-loose tracking-wide text-neutral-700">
                <p>
                  必要なのは、必ずしも施策を増やすことではありません。今の事業にとって何が課題なのかを整理し、限られた時間や予算の中で、何から取り組むのかを決めることが重要です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Partner ── */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Partner" ja="私たちの関わり方" />
            <div className="max-w-2xl">
              <h2
                className="text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                社内にマーケティング担当者がいるような距離で
              </h2>
              <div className="mt-8 space-y-6 text-[15px] leading-loose tracking-wide text-neutral-700">
                <p>
                  Webサイトだけを作る会社でも、記事だけを制作する会社でもありません。Stretch
                  Supportは、スポーツ事業者の外部マーケティング・広報パートナーとして、事業の状況や目標を共有しながら、今取り組むべきことを一緒に考え、必要な施策の実行まで支援します。
                </p>
                <p>
                  マーケティングや広報の専任者を正社員として採用するほどではない。一方で、経営者や専門職のメンバーだけでマーケティングまで担い続けるのも難しい。その間を埋める外部マーケティング・広報パートナーとして、事業の状況を共有しながら継続的に支援します。
                </p>
                <p>
                  Webサイト、コンテンツ、広報、顧客インタビュー、営業資料、イベントなどは、そのための手段です。最初から「何をつくるか」を決めるのではなく、まず事業を理解し、今どこに課題があるのかを整理するところから始めます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Approach + 図解01 ── */}
        <section className="border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Approach" ja="進め方" />
            <div className="max-w-2xl">
              <h2
                className="text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                マーケティングの課題を整理し、取り組むことを決める
              </h2>
              <div className="mt-8 space-y-6 text-[15px] leading-loose tracking-wide text-neutral-700">
                <p>
                  マーケティングの課題は、事業によって異なります。Webサイトに問題がある場合もあれば、そもそもサービスの価値が十分に言語化されていない場合もあります。認知を広げることより、既存のお客様の声や実績を整理した方がよいこともあります。
                </p>
                <p>
                  Stretch Supportでは、特定の施策を最初から前提にするのではなく、事業の状況や目標、現在のマーケティング・広報活動を確認しながら、課題と優先順位を整理します。
                </p>
              </div>
            </div>

            {/* 図解01 */}
            <div className="mt-16 max-w-4xl">
              <h3
                className="mb-8 text-lg text-neutral-900 sm:text-xl"
                style={{ fontFamily: serif }}
              >
                事業の課題から、必要なマーケティングを考える
              </h3>

              <ol className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-2">
                {diagram1Steps.map((step, i) => (
                  <Fragment key={step}>
                    <li className="flex flex-1 items-start gap-3 border border-neutral-200 bg-white px-4 py-4 sm:flex-col sm:items-start sm:gap-2 sm:px-4 sm:py-5">
                      <span
                        className="text-[12px] tracking-[0.16em]"
                        style={{ color: ACCENT }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[14px] leading-snug tracking-wide text-neutral-800 sm:text-[14px]">
                        {step}
                      </span>
                    </li>
                    {i < diagram1Steps.length - 1 && (
                      <li
                        aria-hidden="true"
                        className="flex items-center justify-center leading-none"
                        style={{ color: ACCENT }}
                      >
                        <span className="text-lg sm:hidden">↓</span>
                        <span className="hidden text-lg sm:inline">→</span>
                      </li>
                    )}
                  </Fragment>
                ))}
              </ol>

              <div
                className="mt-6 flex items-start justify-center gap-3 border-t border-dashed pt-6 sm:mt-8 sm:pt-7"
                style={{ borderColor: "rgba(47,78,111,0.3)" }}
              >
                <span aria-hidden="true" className="mt-0.5 text-base" style={{ color: ACCENT }}>
                  ↺
                </span>
                <p className="max-w-md text-center text-[13px] leading-relaxed tracking-wide text-neutral-500">
                  「振り返り・改善する」の内容は、再び「現状・課題を整理する」へとつながり、次のサイクルへ活かされます。
                </p>
              </div>
            </div>

            <div className="mt-14 max-w-2xl">
              <ul className="space-y-4 text-[15px] leading-loose tracking-wide text-neutral-700">
                {conditionalLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="mt-8 text-[15px] leading-loose tracking-wide text-neutral-700">
                「何をつくるか」からではなく、「何を解決する必要があるのか」から考えます。
              </p>
            </div>
          </div>
        </section>

        {/* ── What We Do（実務支援）── */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="What We Do" ja="支援できること" />
            <p className="mb-14 max-w-2xl text-[15px] leading-loose tracking-wide text-neutral-700">
              課題や優先順位に応じて、必要な支援を組み合わせます。
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {supportCards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col border border-neutral-200 bg-neutral-50 p-7"
                >
                  <h3
                    className="mb-3 text-[16px] leading-snug text-neutral-900 sm:text-[17px]"
                    style={{ fontFamily: serif }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[14px] leading-loose tracking-wide text-neutral-600">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 max-w-2xl space-y-4 text-[15px] leading-loose tracking-wide text-neutral-700">
              <p>すべてを実施するわけではありません。</p>
              <p>事業の状況と課題を確認しながら、必要なものを選び、優先順位をつけて進めます。</p>
            </div>
          </div>
        </section>

        {/* ── Expertise + 図解02 ── */}
        <section className="border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Expertise" ja="専門性への理解" />
            <div className="max-w-2xl">
              <h2
                className="text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                スポーツの専門性を理解したうえで、マーケティングを考える
              </h2>
              <div className="mt-8 space-y-6 text-[15px] leading-loose tracking-wide text-neutral-700">
                <p>
                  スポーツに関わるサービスでは、専門的な内容そのものが価値になっていることがあります。身体、トレーニング、コンディショニング、育成、指導などに関する専門性は、単に分かりやすい言葉に置き換えればよいわけではありません。
                </p>
                <p>内容を理解したうえで、次のことまで考える必要があります。</p>
              </div>
              <ul className="mt-8 grid grid-cols-1 gap-x-8 border-t border-neutral-200 sm:grid-cols-2">
                {specialtyBullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-neutral-200 py-5"
                  >
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
            </div>

            {/* 図解02 */}
            <div className="mt-16 max-w-4xl">
              <h3
                className="mb-8 text-lg text-neutral-900 sm:text-xl"
                style={{ fontFamily: serif }}
              >
                スポーツの専門性と、マーケティングをつなぐ
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-stretch sm:gap-3">
                {diagram2Items.map((item, i) => (
                  <Fragment key={item}>
                    <div className="flex items-center justify-center border border-neutral-200 bg-white px-5 py-7 text-center sm:py-8">
                      <p className="text-[14px] leading-relaxed tracking-wide text-neutral-800 sm:text-[15px]">
                        {item}
                      </p>
                    </div>
                    {i < diagram2Items.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="flex items-center justify-center text-lg"
                        style={{ color: ACCENT }}
                      >
                        ×
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>

              <p
                className="mt-10 text-center text-lg leading-loose text-neutral-900 sm:text-xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                専門性を理解したうえで、
                <br className="hidden sm:block" />
                マーケティング・広報を考え、実行する
              </p>
            </div>

            <div className="mt-14 max-w-2xl space-y-6 text-[15px] leading-loose tracking-wide text-neutral-700">
              <p>
                Stretch
                Supportは、スポーツ現場での経験と身体・トレーニング領域への理解、WebメディアやBtoB事業でのマーケティング経験をもとに、専門性を損なわず、顧客に伝わる形へ整理することを大切にしています。
              </p>
              <p>
                マーケティングと専門性を別々に考えるのではなく、事業そのものを理解しながら、必要なマーケティング・広報活動を一緒につくっていきます。
              </p>
            </div>
          </div>
        </section>

        {/* ── Flow ── */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Flow" ja="ご相談から支援までの流れ" />
            <h2
              className="mb-14 max-w-2xl text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
              style={{ fontFamily: serif }}
            >
              ご相談から支援までの流れ
            </h2>
            <div className="divide-y divide-neutral-200 border-t border-neutral-200">
              {flowSteps.map((item, i) => (
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
                    <div className="mt-3 space-y-2 text-[15px] leading-loose tracking-wide text-neutral-600">
                      {item.body.map((para) => (
                        <p key={para}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact / CTA ── */}
        <section className="border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Contact" ja="お問い合わせ" />
            <div className="max-w-2xl">
              <h2
                className="text-xl leading-loose text-neutral-900 sm:text-2xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                まずは、今の課題を整理するところから
              </h2>
              <ul className="mt-8 space-y-3 text-[15px] leading-loose tracking-wide text-neutral-700">
                {closingQuotes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div className="mt-8 space-y-5 text-[15px] leading-loose tracking-wide text-neutral-700">
                <p>
                  具体的な施策が決まっていない段階でも構いません。まず現在の事業やマーケティング・広報の状況を伺い、どこに課題があるのかを一緒に整理します。
                </p>
                <p>そのうえで、Stretch Supportがお手伝いできることがあれば、必要な支援内容をご提案します。</p>
              </div>
              <div className="mt-12">
                <a
                  href={LINKS.contact}
                  className="group inline-flex items-center gap-2 text-[15px] tracking-wide transition-colors"
                  style={{ color: ACCENT }}
                >
                  スポーツ事業のマーケティング・広報について相談する
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
