// Stretch Support — Manifesto / Server Component（外部ライブラリ・画像なし）

import Image from "next/image";
import Header from "@/components/Header";

const LINKS = {
  note: "https://note.com/udio812",
  instagram: "https://www.instagram.com/udio08/?hl=ja",
  facebook: "https://www.facebook.com/hironori.uranaka",
  contact: "mailto:info@stretch-s.co.jp",   // 問い合わせ先に差し替え
  siteUrl: "https://stretch-s.co.jp",
} as const;

const serif =
  '"Hiragino Mincho ProN", "Yu Mincho", "YuMincho", "Noto Serif JP", "Times New Roman", serif';
const sans =
  '"Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "YuGothic", "Meiryo", "Noto Sans JP", system-ui, sans-serif';

const ACCENT = "#2f4e6f";

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
  "中学時代、世界を知る指導者との出会いと仲間との挑戦を通じて、人は想像以上に成長できることを知りました。",
  "高校時代には怪我に苦しみ、スポーツを支える存在の重要性を知りました。",
  "アスレチックトレーナーとして活動する中では、スポーツを支える人たちの価値が十分に伝わっていない現実も見てきました。",
  "そして父親となった今、スポーツには競技力向上だけではなく、人を育てる可能性があると感じています。",
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
  const year = new Date().getFullYear();

  return (
    <div
      className="min-h-screen bg-white text-neutral-900 antialiased"
      style={{ fontFamily: sans }}
    >
      <Header hero />

      <main>
        {/* Hero */}
        <section className="relative -mt-16 min-h-[85svh] flex flex-col overflow-hidden">
          {/* 背景画像: PC=右寄り中央、モバイル=右寄せやや下（人物と道を残す） */}
          <Image
            src="/hero-main.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover [object-position:62%_55%] sm:[object-position:58%_50%]"
            priority
            aria-hidden="true"
          />
          {/* ヘッダー下の薄い暗さ（白文字可読性確保） */}
          <div
            className="absolute inset-x-0 top-0 h-44 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 100%)" }}
            aria-hidden="true"
          />
          {/* 下部グラデーション — 画像本来の暗部を活かすため極めて薄く */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.06) 25%, transparent 50%)" }}
            aria-hidden="true"
          />
          {/* コピー — 左下寄せ */}
          <div className="relative z-10 mt-auto">
            <div className="mx-auto max-w-5xl w-full px-6 pb-20 sm:pb-28">
              <p className="mb-4 text-[12px] uppercase tracking-[0.22em] text-white/60">
                Manifesto
              </p>
              <h1
                className="text-[2.5rem] leading-[1.5] text-white [text-wrap:balance] sm:text-6xl sm:leading-[1.45]"
                style={{ fontFamily: serif }}
              >
                可能性は、
                <br className="sm:hidden" />
                出会いからひらく。
              </h1>
              <div className="mt-7 mb-6 h-px w-12 bg-white/40" />
              <p className="max-w-xl text-[15px] leading-loose tracking-wide text-white/85 sm:text-lg sm:leading-loose">
                スポーツの中にある可能性を探究し、
                <br className="sm:hidden" />
                その価値を社会へ翻訳する。
              </p>
            </div>
          </div>
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
            <div
              className="mt-8 pb-2 text-right text-[13px] leading-relaxed tracking-wider text-neutral-500"
              style={{
                fontFamily:
                  '"新正楷書CBSK1", "游明朝体", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", "HiraMinProN-W3", "MS Mincho", "MS 明朝", serif',
              }}
            >
              <p>株式会社ストレッチサポート 代表取締役</p>
              <p className="mt-1.5 text-[15px] text-neutral-700">浦中宏典</p>
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
                href={LINKS.note}
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
                〒104-0061<br />
                東京都中央区銀座1-22-11 銀座大竹ビジデンス2階
              </address>
            </div>
            <nav className="flex flex-col gap-2 text-[13px] tracking-wide text-neutral-500 sm:items-end">
              <a href={LINKS.contact} className="transition-colors hover:text-neutral-900">
                Contact
              </a>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-neutral-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Instagram
              </a>
              <a
                href={LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-neutral-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
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
