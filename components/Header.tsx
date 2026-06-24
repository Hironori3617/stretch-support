import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur-md">
      <div
        className="mx-auto h-16 max-w-5xl px-6"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <a href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Stretch Support"
            width={93}
            height={36}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </a>
        <nav
          style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}
          className="text-[13px] tracking-wide text-neutral-500"
        >
          <a href="/about" className="transition-colors hover:text-neutral-900">
            About
          </a>
          <a href="/#journal" className="transition-colors hover:text-neutral-900">
            Journal
          </a>
          <a
            href="mailto:info@stretch-s.co.jp"
            className="transition-colors hover:text-neutral-900"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
