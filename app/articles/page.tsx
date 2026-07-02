import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import ArticleCard from "@/components/articles/ArticleCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Articles | Stretch Support",
  description:
    "スポーツを通じて、人の可能性を考える。現場で生まれる実践知を編集し、スポーツに関わる人たちへ届けます。",
  alternates: {
    canonical: "https://stretch-s.co.jp/articles",
  },
};

const NOTE_URL = "https://note.com/udio812";

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

export default function ArticlesPage() {
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
          <div className="mx-auto max-w-5xl px-6 pt-16 pb-14 sm:pt-24 sm:pb-16">
            <p className="mb-6 text-[12px] uppercase tracking-[0.22em] text-neutral-400">
              Articles
            </p>
            <h1
              className="text-[1.875rem] leading-[1.55] text-neutral-900 sm:text-[2.5rem] sm:leading-[1.5]"
              style={{ fontFamily: serif }}
            >
              スポーツを通じて、
              <br />
              人の可能性を考える。
            </h1>
            <div
              className="my-7 h-px w-12"
              style={{ backgroundColor: ACCENT }}
            />
            <p className="max-w-lg text-[14px] leading-loose tracking-wide text-neutral-600 sm:text-[15px]">
              現場で生まれる実践知を編集し、スポーツに関わる人たちへ届けます。
            </p>
          </div>
        </section>

        {/* Article Grid */}
        <section className="border-t border-neutral-100">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {articles.filter((a) => a.published).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Note CTA */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p
                className="text-lg leading-loose text-neutral-900 sm:text-xl"
                style={{ fontFamily: serif }}
              >
                すべての記事は、noteで読めます。
              </p>
              <a
                href={NOTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-[14px] tracking-wide transition-colors"
                style={{ color: ACCENT }}
              >
                noteですべての記事を見る
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
