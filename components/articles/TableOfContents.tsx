"use client";

import { useState } from "react";
import type { TocItem } from "@/lib/articles";

const ACCENT = "#2f4e6f";

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [expanded, setExpanded] = useState(true);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="目次"
      className="mt-10 mb-14 bg-neutral-50 text-[15px] leading-snug tracking-wide text-neutral-700 sm:mb-16"
    >
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls="toc-list"
        className="flex w-full items-center gap-2 px-6 py-4 text-left text-[17px] font-semibold text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]"
        style={{ outlineColor: ACCENT }}
      >
        <span aria-hidden="true" className="text-[11px] text-neutral-400">
          {expanded ? "▼" : "▶"}
        </span>
        目次
      </button>
      {expanded && (
        <ul
          id="toc-list"
          className="divide-y divide-neutral-200 border-t border-neutral-200"
        >
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block px-6 py-3.5 leading-snug text-neutral-700 transition-colors hover:text-[#2f4e6f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]"
                style={{ outlineColor: ACCENT }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
