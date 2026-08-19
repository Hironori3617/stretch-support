import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import {
  articles as noteArticles,
  type Article,
  type Category,
  type OwnedArticle,
} from "@/data/articles";

// 自社記事(owned)のMarkdown本文置き場
// 1記事 = 1ファイル。ファイル名(拡張子除く)がそのままslugになる
const CONTENT_DIR = path.join(process.cwd(), "content", "articles");

type OwnedFrontmatter = {
  title: string;
  lead?: string;
  description?: string;
  category: Category;
  target: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  thumbnail: string;
  featured?: boolean;
  published?: boolean;
  related?: string[];
};

function listOwnedSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function readOwnedFile(slug: string): { data: OwnedFrontmatter; content: string } | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { data: data as OwnedFrontmatter, content };
}

function toOwnedArticle(slug: string, data: OwnedFrontmatter): OwnedArticle {
  return {
    type: "owned",
    id: slug,
    slug,
    title: data.title,
    lead: data.lead,
    description: data.description,
    category: data.category,
    target: data.target,
    summary: data.summary,
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
    thumbnail: data.thumbnail,
    featured: data.featured ?? false,
    published: data.published ?? false,
    related: data.related,
  };
}

// 自社記事のメタ情報一覧（本文の変換は行わない軽量版。一覧・generateStaticParams用）
export function getOwnedArticlesMeta(): OwnedArticle[] {
  return listOwnedSlugs()
    .map((slug) => {
      const file = readOwnedFile(slug);
      return file ? toOwnedArticle(slug, file.data) : null;
    })
    .filter((article): article is OwnedArticle => article !== null);
}

function sortByPublishedAtDesc(a: Article, b: Article): number {
  return b.publishedAt.localeCompare(a.publishedAt);
}

// note記事・自社記事をまとめて新着順で返す（/articles 一覧・sitemap用）
export function getAllArticles(options: { includeUnpublished?: boolean } = {}): Article[] {
  const { includeUnpublished = false } = options;
  const combined: Article[] = [...noteArticles, ...getOwnedArticlesMeta()];
  const visible = includeUnpublished ? combined : combined.filter((a) => a.published);
  return [...visible].sort(sortByPublishedAtDesc);
}

// 自社記事1件の詳細（本文HTML込み）。/articles/[slug] 用
export function getOwnedArticleBySlug(
  slug: string
): { meta: OwnedArticle; html: string } | null {
  const file = readOwnedFile(slug);
  if (!file) return null;
  const meta = toOwnedArticle(slug, file.data);
  const processed = remark().use(remarkGfm).use(remarkHtml).processSync(file.content);
  return { meta, html: processed.toString() };
}

// Related Articlesの解決。記事側で指定したid/slugの配列から、
// note・自社記事を問わず公開済みの記事を順番通りに引き当てる
export function resolveRelatedArticles(
  ids: string[] | undefined,
  excludeId: string,
  limit = 3
): Article[] {
  if (!ids || ids.length === 0) return [];
  const byId = new Map(getAllArticles().map((a) => [a.id, a] as const));
  const resolved: Article[] = [];
  for (const id of ids) {
    if (id === excludeId) continue;
    const found = byId.get(id);
    if (found) resolved.push(found);
    if (resolved.length >= limit) break;
  }
  return resolved;
}
