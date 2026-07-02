import type { Article } from "@/data/articles";
import Image from "next/image";

const serif =
  '"Hiragino Mincho ProN", "Yu Mincho", "YuMincho", "Noto Serif JP", "Times New Roman", serif';
const ACCENT = "#2f4e6f";

export default function ArticleCard({ article }: { article: Article }) {
  const isoDate = article.publishedAt.replace(/\./g, "-");

  return (
    <a
      href={article.noteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white border border-neutral-200 transition-shadow duration-300 hover:shadow-md"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
        {article.thumbnail ? (
          <Image
            src={article.thumbnail}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
        ) : (
          <div
            className="absolute inset-0 flex items-end p-4"
            style={{
              background: `linear-gradient(135deg, #e8edf2 0%, #d4dce6 100%)`,
            }}
          >
            <span
              className="text-[11px] uppercase tracking-[0.18em]"
              style={{ color: ACCENT, opacity: 0.6 }}
            >
              {article.category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Category + Date */}
        <div className="mb-3 flex items-center justify-between gap-2">
          <span
            className="text-[11px] uppercase tracking-[0.16em]"
            style={{ color: ACCENT }}
          >
            {article.category}
          </span>
          <time
            dateTime={isoDate}
            className="shrink-0 text-[11px] tracking-wide text-neutral-400"
          >
            {article.publishedAt}
          </time>
        </div>

        {/* Title */}
        <h3
          className="mb-3 text-[17px] leading-snug text-neutral-900 sm:text-lg"
          style={{ fontFamily: serif }}
        >
          {article.title}
        </h3>

        {/* Summary */}
        <p className="flex-1 text-[13px] leading-loose tracking-wide text-neutral-500 line-clamp-3">
          {article.summary}
        </p>

        {/* CTA */}
        <div className="mt-5 pt-4 border-t border-neutral-100">
          <span
            className="inline-flex items-center gap-1.5 text-[12px] tracking-wide transition-colors duration-200"
            style={{ color: ACCENT }}
          >
            続きを読む
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </a>
  );
}
