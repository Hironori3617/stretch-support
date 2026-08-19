import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社ストレッチサポート",
  alternateName: "Stretch Support, Inc.",
  url: "https://stretch-s.co.jp/",
  logo: "https://stretch-s.co.jp/logo.png",
  founder: {
    "@type": "Person",
    name: "浦中宏典",
  },
  sameAs: [
    "https://note.com/udio812",
    "https://www.instagram.com/udio08/",
    "https://www.facebook.com/hironori.uranaka",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <GoogleTagManager gtmId="GTM-MHK672JV" />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
