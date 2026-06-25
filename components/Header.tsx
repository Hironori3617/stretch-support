'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/#journal", label: "Journal" },
  { href: "mailto:info@stretch-s.co.jp", label: "Contact" },
] as const;

export default function Header({ hero = false }: { hero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!hero) return;
    const check = () => setScrolled(window.scrollY > window.innerHeight * 0.82);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [hero]);

  // Escape キーでメニューを閉じる
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [menuOpen]);

  // メニュー展開中は白ヘッダーに固定
  const transparent = hero && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={
          transparent
            ? "sticky top-0 z-50 border-b border-transparent bg-transparent transition-colors duration-300"
            : "sticky top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur-md transition-colors duration-300"
        }
      >
        <div
          className="mx-auto h-16 max-w-5xl px-6"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          {/* transparent時: -ml-2でロゴPNG内部余白(約9px)を補正しMANIFESTOと左端を揃える */}
          <a href="/" className={`shrink-0 ${transparent ? "-ml-2" : ""}`}>
            <Image
              src="/logo.png"
              alt="Stretch Support"
              width={93}
              height={36}
              className="h-8 w-auto sm:h-9"
              priority
              style={
                transparent
                  ? { filter: "drop-shadow(0 1px 2px rgba(255,255,255,0.9)) drop-shadow(0 0 6px rgba(255,255,255,0.55))" }
                  : undefined
              }
            />
          </a>

          {/* PC ナビゲーション */}
          <nav
            className={[
              "hidden sm:flex items-center gap-5 text-[13px] font-semibold tracking-wide transition-colors duration-300",
              transparent ? "text-white/90" : "text-neutral-500",
            ].join(" ")}
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`transition-colors ${transparent ? "hover:text-white" : "hover:text-neutral-900"}`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* モバイル ハンバーガーボタン */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
            className={[
              "flex sm:hidden items-center justify-center -mr-2 h-10 w-10 transition-colors",
              transparent ? "text-white/90" : "text-neutral-500",
            ].join(" ")}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="16" y1="4" x2="4"  y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <line x1="3" y1="6"  x2="17" y2="6"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* モバイルメニュー（ヘッダー直下に固定） */}
      {menuOpen && (
        <nav
          className="fixed inset-x-0 top-16 z-40 sm:hidden border-b border-neutral-200 bg-white/95 backdrop-blur-md"
          aria-label="モバイルナビゲーション"
        >
          <ul className="mx-auto max-w-5xl divide-y divide-neutral-100 px-6">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center py-4 text-[15px] font-semibold tracking-wide text-neutral-700 transition-colors hover:text-neutral-900"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
