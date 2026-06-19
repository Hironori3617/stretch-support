import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://stretch-s.co.jp"),
  title: "Stretch Support｜可能性は、出会いからひらく。",
  description:
    "スポーツの中にある可能性を探究し、その価値を社会へ翻訳する。株式会社ストレッチサポートのマニフェスト。",
  openGraph: {
    title: "Stretch Support｜可能性は、出会いからひらく。",
    description: "スポーツの中にある可能性を探究し、その価値を社会へ翻訳する。",
    type: "website",
    locale: "ja_JP",
    siteName: "Stretch Support",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stretch Support",
    description: "可能性は、出会いからひらく。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
