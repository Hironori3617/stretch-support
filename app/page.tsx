import { serif, sans, ACCENT, SOCIAL_LINKS } from "@/app/lib/constants";

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

const mvr = [
  { label: "Mission", ja: "使命", body: "スポーツを通じて、自らの可能性をひらく" },
  {
    label: "Vision",
    ja: "目指す社会",
    body: "スポーツに関わるすべての人が、自らの価値を発揮し、自己実現できる社会",
  },
  {
    label: "Role",
    ja: "役割",
    body: "スポーツの中にある可能性を探究し、その価値を社会へ翻訳する",
  },
];

const philosophy = [
  "中学時代の駅伝では、優れた指導者との出会いと仲間との挑戦を通じて、人は想像以上に成長できることを知りました。",
  "高校時代には怪我に苦しみ、スポーツを支える存在の重要性を知りました。",
  "アスレチックトレーナーとして活動する中では、スポーツを支える人たちの価値が十分に伝わっていない現実も見てきました。",
  "そして親となった今、スポーツには競技力向上だけではなく、人を育てる可能性があると感じています。",
];

const themes = [
  "スポーツ教育",
  "主体性と問いを立てる力",
  "タレント発掘・育成",
  "コーチ育成",
  "アスレチックトレーナーの可能性",
  "保護者教育",
  "世界のスポーツ教育",
  "生涯スポーツ",
];

const projects = [
  {
    title: "世界のスポーツ教育を旅する",
    body: "世界各国のスポーツ教育や育成環境を調査し、日本への示唆を探っています。",
  },
  {
    title: "子どもとの実践・実験",
    body: "目標設定、振り返り、問いを立てる力など、スポーツを通じた成長の実践を続けています。",
  },
  {
    title: "スポーツの可能性を探る対話",
    body: "指導者、トレーナー、教育者、研究者、保護者など、スポーツに関わる実践者との対話を通じて、スポーツの可能性を探究しています。",
  },
  {
    title: "Journal",
    body: "探究の記録をnoteで発信しています。",
  },
];

export default function Page() {
  return (
    <div
      className="min-h-screen bg-white text-neutral-900 antialiased"
      style={{ fontFamily: sans }}
    >
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pt-28 pb-24 sm:pt-40 sm:pb-36">
          <p className="mb-8 text-[12px] uppercase tracking-[0.22em] text-neutral-400">
            Manifesto
          </p>
          <h1
            className="text-[2.5rem] leading-[1.5] text-neutral-900 [text-wrap:balance] sm:text-6xl sm:leading-[1.45]"
            style={{ fontFamily: serif }}
          >
            可能性は、
            <br className="sm:hidden" />
            出会いからひらく。
          </h1>
          <div className="my-10 h-px w-12" style={{ backgroundColor: ACCENT }} />
          <p className="max-w-xl text-[15px] leading-loose tracking-wide text-neutral-600 sm:text-lg sm:leading-loose">
            スポーツの中にある可能性を探究し、その価値を社会へ翻訳する。
          </p>
        </section>

        {/* Mission / Vision / Role */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Mission · Vision · Role" ja="私たちの輪郭" />
            <div className="divide-y divide-neutral-200">
              {mvr.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-4 py-10 sm:grid-cols-[180px_1fr] sm:gap-10 sm:py-12"
                >
                  <div className="text-[13px] uppercase tracking-[0.18em] text-neutral-400">
                    {item.label}
                    <span className="ml-2 text-neutral-300">{item.ja}</span>
                  </div>
                  <p
                    className="text-xl leading-relaxed text-neutral-900 sm:text-2xl sm:leading-relaxed"
                    style={{ fontFamily: serif }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-2xl px-6 py-24 sm:py-28">
            <Eyebrow en="Philosophy" ja="原体験と思想" />
            <div className="space-y-7 text-[15px] leading-loose tracking-wide text-neutral-700 sm:text-base sm:leading-loose">
              <p
                className="text-lg leading-loose text-neutral-900 sm:text-xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                私はスポーツには、人の可能性をひらく力があると信じています。
              </p>
              {philosophy.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p
                className="pt-4 text-lg leading-loose text-neutral-900 sm:text-xl sm:leading-loose"
                style={{ fontFamily: serif }}
              >
                スポーツには、まだ十分に語られていない価値があります。
              </p>
              <p>私は、その価値を探究し、編集し、社会へ届けていきます。</p>
            </div>
          </div>
        </section>

        {/* What I'm Exploring */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="What I'm Exploring" ja="探究のテーマ" />
            <ul className="grid grid-cols-1 border-t border-neutral-200 sm:grid-cols-2">
              {themes.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 border-b border-neutral-200 py-6 sm:py-7"
                >
                  <span
                    className="mt-[0.65em] h-[3px] w-[3px] shrink-0 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span className="text-[15px] tracking-wide text-neutral-800">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-3xl px-6 py-24 sm:py-28">
            <Eyebrow en="Projects" ja="いま取り組んでいること" />
            <div className="divide-y divide-neutral-200">
              {projects.map((p) => (
                <article key={p.title} className="py-10 sm:py-12">
                  <h3
                    className="text-xl text-neutral-900 sm:text-2xl"
                    style={{ fontFamily: serif }}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-loose tracking-wide text-neutral-600">
                    {p.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Journal */}
        <section id="journal" className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
            <Eyebrow en="Journal" ja="探究の記録" />
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p
                className="max-w-md text-lg leading-loose text-neutral-900 sm:text-2xl sm:leading-snug"
                style={{ fontFamily: serif }}
              >
                探究の記録を、noteで発信しています。
              </p>
              <a
                href={SOCIAL_LINKS.note}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[15px] tracking-wide transition-colors"
                style={{ color: ACCENT }}
              >
                noteを読む
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-neutral-200 bg-neutral-950 text-neutral-50">
          <div className="mx-auto max-w-5xl px-6 py-32 text-center sm:py-44">
            <div
              className="mx-auto inline-flex flex-col gap-5 text-2xl leading-relaxed sm:gap-7 sm:text-4xl sm:leading-relaxed"
              style={{ fontFamily: serif }}
            >
              <span>出会いを、探究に。</span>
              <span>探究を、翻訳に。</span>
              <span className="text-neutral-300">そして、社会へ。</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
