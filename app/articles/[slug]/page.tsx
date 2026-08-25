import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import ArticleCard from "@/components/articles/ArticleCard";
import TableOfContents from "@/components/articles/TableOfContents";
import {
  buildArticleJsonLd,
  getOwnedArticleBySlug,
  getOwnedArticlesMeta,
  resolveRelatedArticles,
} from "@/lib/articles";

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

export function generateStaticParams() {
  return getOwnedArticlesMeta()
    .filter((article) => article.published)
    .map((article) => ({ slug: article.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getOwnedArticleBySlug(params.slug);
  if (!article || !article.meta.published) {
    notFound();
  }

  const { meta } = article;
  const title = `${meta.seoTitle ?? meta.title}｜株式会社ストレッチサポート`;
  const description = meta.description ?? meta.summary;
  const url = `https://stretch-s.co.jp/articles/${meta.slug}`;
  // thumbnailは相対パスのまま渡す。metadataBase(app/layout.tsx)により絶対URLへ自動解決される
  const images = meta.thumbnail ? [meta.thumbnail] : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "株式会社ストレッチサポート｜Stretch Support",
      locale: "ja_JP",
      type: "article",
      publishedTime: meta.publishedAt.replace(/\./g, "-"),
      ...(meta.updatedAt ? { modifiedTime: meta.updatedAt.replace(/\./g, "-") } : {}),
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(images ? { images } : {}),
    },
  };
}

export default function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getOwnedArticleBySlug(params.slug);
  if (!article || !article.meta.published) {
    notFound();
  }

  const { meta, html, toc } = article;
  const isoDate = meta.publishedAt.replace(/\./g, "-");
  const isoUpdated = meta.updatedAt?.replace(/\./g, "-");
  const related = resolveRelatedArticles(meta.related, meta.id);
  const year = new Date().getFullYear();
  const articleJsonLd = buildArticleJsonLd(meta);

  // toc: trueの記事のみ、本文冒頭(導入文)と最初のH2の間に目次を挿入する
  const showToc = meta.toc && toc.length > 0;
  const firstH2Index = html.indexOf("<h2");
  const introHtml = showToc && firstH2Index !== -1 ? html.slice(0, firstH2Index) : html;
  const restHtml = showToc && firstH2Index !== -1 ? html.slice(firstH2Index) : "";

  return (
    <div
      className="min-h-screen bg-white text-neutral-900 antialiased"
      style={{ fontFamily: sans }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />

      <main>
        <article>
          {/* ── Article Header ── */}
          <section className="bg-white" style={{ borderBottom: `1px solid ${ACCENT}` }}>
            <div className="mx-auto max-w-2xl px-6 pt-16 pb-14 sm:pt-24 sm:pb-16">
              <p
                className="mb-6 text-[12px] uppercase tracking-[0.22em]"
                style={{ color: ACCENT }}
              >
                {meta.category}
              </p>
              <h1
                className="text-[1.875rem] leading-[1.55] text-neutral-900 [text-wrap:balance] sm:text-[2.5rem] sm:leading-[1.5]"
                style={{ fontFamily: serif }}
              >
                {meta.title}
              </h1>
              {meta.lead && (
                <p className="mt-6 text-[15px] leading-loose tracking-wide text-neutral-600">
                  {meta.lead}
                </p>
              )}
              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] tracking-wide text-neutral-400">
                <time dateTime={isoDate}>{meta.publishedAt}</time>
                {meta.updatedAt && (
                  <span>
                    更新：
                    <time dateTime={isoUpdated}>{meta.updatedAt}</time>
                  </span>
                )}
              </div>
            </div>
          </section>

          {/* ── Body ── */}
          {/* thumbnailは/articles一覧カード専用のため、詳細ページでは表示しない */}
          <section className="border-t border-neutral-100">
            <div className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
              <div
                className="article-prose text-[16px] leading-loose tracking-wide text-neutral-700"
                dangerouslySetInnerHTML={{ __html: introHtml }}
              />
              {showToc && <TableOfContents items={toc} />}
              {showToc && (
                <div
                  className="article-prose text-[16px] leading-loose tracking-wide text-neutral-700"
                  dangerouslySetInnerHTML={{ __html: restHtml }}
                />
              )}
            </div>
          </section>

          {/* ── Related Articles ── */}
          {related.length > 0 && (
            <section className="border-t border-neutral-200 bg-neutral-50">
              <div className="mx-auto max-w-5xl px-6 pt-24 pb-20 sm:pt-28 sm:pb-24">
                <p className="mb-10 text-[12px] uppercase tracking-[0.22em] text-neutral-400">
                  Related Articles
                </p>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((relatedArticle) => (
                    <ArticleCard key={relatedArticle.id} article={relatedArticle} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── About Stretch Support ── */}
          <section className="border-t border-neutral-200">
            <div className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
              <p className="mb-5 text-[12px] uppercase tracking-[0.22em] text-neutral-400">
                Stretch Supportについて
              </p>
              <p className="max-w-xl text-[14px] leading-loose tracking-wide text-neutral-600">
                スポーツの現場にある知識や経験を、必要とする人や社会に伝わる形へ編集・翻訳しています。
              </p>
              <div className="mt-7 flex items-center gap-6 text-[13px] tracking-wide">
                <a
                  href="/about"
                  className="group inline-flex items-center gap-1.5 transition-colors"
                  style={{ color: ACCENT }}
                >
                  About
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="/service"
                  className="group inline-flex items-center gap-1.5 transition-colors"
                  style={{ color: ACCENT }}
                >
                  Service
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </section>
        </article>
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
              <p className="text-[15px] text-neutral-900" style={{ fontFamily: serif }}>
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
              <a href={LINKS.contact} className="transition-colors hover:text-neutral-900">
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
              <a href="/legal" className="mt-3 transition-colors hover:text-neutral-900">
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
