'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header({ hero = false }: { hero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!hero) return;
    const check = () => setScrolled(window.scrollY > window.innerHeight * 0.82);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [hero]);

  const transparent = hero && !scrolled;

  return (
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
        <nav
          style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}
          className={[
            "text-[13px] font-semibold tracking-wide transition-colors duration-300",
            transparent ? "text-white/90" : "text-neutral-500",
          ].join(" ")}
        >
          <a
            href="/about"
            className={`transition-colors ${transparent ? "hover:text-white" : "hover:text-neutral-900"}`}
          >
            About
          </a>
          <a
            href="/service"
            className={`transition-colors ${transparent ? "hover:text-white" : "hover:text-neutral-900"}`}
          >
            Service
          </a>
          <a
            href="/#journal"
            className={`transition-colors ${transparent ? "hover:text-white" : "hover:text-neutral-900"}`}
          >
            Journal
          </a>
          <a
            href="mailto:info@stretch-s.co.jp"
            className={`transition-colors ${transparent ? "hover:text-white" : "hover:text-neutral-900"}`}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
