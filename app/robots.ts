import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://stretch-s.co.jp/sitemap.xml",
    host: "https://stretch-s.co.jp",
  };
}
