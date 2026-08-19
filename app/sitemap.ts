import { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import type { OwnedArticle } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const ownedArticleEntries: MetadataRoute.Sitemap = getAllArticles()
    .filter((article): article is OwnedArticle => article.type === "owned")
    .map((article) => ({
      url: `https://stretch-s.co.jp/articles/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [
    {
      url: "https://stretch-s.co.jp/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://stretch-s.co.jp/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://stretch-s.co.jp/service",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://stretch-s.co.jp/articles",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...ownedArticleEntries,
    {
      url: "https://stretch-s.co.jp/legal",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
