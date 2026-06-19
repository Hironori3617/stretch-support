import { serif, sans, SOCIAL_LINKS } from "@/app/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-neutral-200 bg-white"
      style={{ fontFamily: sans }}
    >
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          {/* Company info */}
          <div>
            <p
              className="text-[15px] text-neutral-900"
              style={{ fontFamily: serif }}
            >
              株式会社ストレッチサポート
            </p>
            <p className="mt-2 text-[13px] tracking-wide text-neutral-500">
              Stretch Support, Inc.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-2 text-[13px] tracking-wide text-neutral-500 sm:items-end">
            <a href="#" className="transition-colors hover:text-neutral-900">
              Contact
            </a>
            <a
              href="https://stretch-s.co.jp"
              className="transition-colors hover:text-neutral-900"
            >
              stretch-s.co.jp
            </a>
          </nav>
        </div>

        {/* Social links */}
        <div className="mt-10 flex items-center gap-5 border-t border-neutral-100 pt-8">
          <a
            href={SOCIAL_LINKS.note}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12px] tracking-wide text-neutral-400 transition-colors hover:text-neutral-900"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.32 0H4.68A4.68 4.68 0 0 0 0 4.68v14.64A4.68 4.68 0 0 0 4.68 24h14.64A4.68 4.68 0 0 0 24 19.32V4.68A4.68 4.68 0 0 0 19.32 0ZM7.5 17.25a.75.75 0 0 1-1.5 0V6.75a.75.75 0 0 1 1.5 0v10.5Zm4.5 0a.75.75 0 0 1-1.5 0V6.75a.75.75 0 0 1 1.5 0v10.5Zm4.5-4.5a.75.75 0 0 1-1.5 0V6.75a.75.75 0 0 1 1.5 0v6Z" />
            </svg>
            note
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12px] tracking-wide text-neutral-400 transition-colors hover:text-neutral-900"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Instagram
          </a>
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12px] tracking-wide text-neutral-400 transition-colors hover:text-neutral-900"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </a>
        </div>

        <p className="mt-8 text-[12px] tracking-wide text-neutral-400">
          © {year} Stretch Support, Inc.
        </p>
      </div>
    </footer>
  );
}
