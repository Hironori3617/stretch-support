import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://stretch-s.co.jp"),
  title: "株式会社ストレッチサポート｜スポーツから可能性をひらく",
  description:
    "株式会社ストレッチサポートは、スポーツの中にある成長の可能性を探究し、実践知を編集・発信することで、一人ひとりが自らの可能性をひらくための環境をつくります。",
  openGraph: {
    title: "株式会社ストレッチサポート｜スポーツから可能性をひらく",
    description:
      "株式会社ストレッチサポートは、スポーツの中にある成長の可能性を探究し、実践知を編集・発信することで、一人ひとりが自らの可能性をひらくための環境をつくります。",
    type: "website",
    locale: "ja_JP",
    siteName: "株式会社ストレッチサポート｜Stretch Support",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社ストレッチサポート｜スポーツから可能性をひらく",
    description:
      "株式会社ストレッチサポートは、スポーツの中にある成長の可能性を探究し、実践知を編集・発信することで、一人ひとりが自らの可能性をひらくための環境をつくります。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
