import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import {
  articles as noteArticles,
  type Article,
  type Category,
  type OwnedArticle,
} from "@/data/articles";
import {
  getAuthorById,
  DEFAULT_AUTHOR_ID,
  STRETCH_SUPPORT_ORG,
  type Author,
} from "@/data/authors";

// 自社記事(owned)のMarkdown本文置き場
// 1記事 = 1ファイル。ファイル名(拡張子除く)がそのままslugになる
const CONTENT_DIR = path.join(process.cwd(), "content", "articles");

type OwnedFrontmatter = {
  title: string;
  seoTitle?: string; // <title>/OGタイトル用。省略時はtitleを使用
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
  toc?: boolean; // 目次の表示有無。省略時はfalse（記事ごとに明示指定）
  authorId?: string;
  supervisorIds?: string[];
};

export type TocItem = { id: string; text: string };

// 目次から除外する見出し（参考文献・参考資料セクション）
const TOC_EXCLUDED_HEADINGS = new Set(["参考文献", "参考資料"]);

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

// authorId省略時のみDEFAULT_AUTHOR_IDへフォールバックする。
// 未登録のauthorIdが指定された場合は、どのファイルが原因か分かるメッセージ付きで例外を投げる
// （黙って既定著者に差し替えない）
function resolveAuthorId(slug: string, authorId: string | undefined): string {
  const resolvedId = authorId ?? DEFAULT_AUTHOR_ID;
  try {
    getAuthorById(resolvedId);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(`content/articles/${slug}.md: ${message}`);
  }
  return resolvedId;
}

function toOwnedArticle(slug: string, data: OwnedFrontmatter): OwnedArticle {
  return {
    type: "owned",
    id: slug,
    slug,
    title: data.title,
    seoTitle: data.seoTitle,
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
    toc: data.toc ?? false,
    authorId: resolveAuthorId(slug, data.authorId),
    supervisorIds: data.supervisorIds,
  };
}

// 記事詳細ページの著者表示・JSON-LD用に、記事から著者レコードを解決する
export function getArticleAuthor(meta: OwnedArticle): Author {
  return getAuthorById(meta.authorId ?? DEFAULT_AUTHOR_ID);
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

const H2_REGEX = /<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g;

// 生成済みHTMLからH2見出し（id・テキスト）を目次用に抽出する。
// H3以下や「参考文献」等は対象外
function extractToc(html: string): TocItem[] {
  const items: TocItem[] = [];
  for (const match of html.matchAll(H2_REGEX)) {
    const id = match[1];
    const text = match[2].replace(/<[^>]+>/g, "").trim();
    if (TOC_EXCLUDED_HEADINGS.has(text)) continue;
    items.push({ id, text });
  }
  return items;
}

// 自社記事1件の詳細（本文HTML込み）。/articles/[slug] 用
export function getOwnedArticleBySlug(
  slug: string
): { meta: OwnedArticle; html: string; toc: TocItem[] } | null {
  const file = readOwnedFile(slug);
  if (!file) return null;
  const meta = toOwnedArticle(slug, file.data);
  const processed = remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .processSync(file.content);
  const html = processed.toString();
  const toc = meta.toc ? extractToc(html) : [];
  return { meta, html, toc };
}

const SITE_URL = "https://stretch-s.co.jp";

// 自社記事(owned)向けのschema.org Article構造化データ(JSON-LD)を生成する。
// note記事(外部リンク)には適用しない。frontmatterに存在するデータのみを使用し、
// dateModified等、根拠のない値は補完しない
export function buildArticleJsonLd(meta: OwnedArticle) {
  const url = `${SITE_URL}/articles/${meta.slug}`;
  const description = meta.description ?? meta.summary;
  const author = getArticleAuthor(meta);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description,
    image: `${SITE_URL}${meta.thumbnail}`,
    datePublished: `${meta.publishedAt.replace(/\./g, "-")}T00:00:00+09:00`,
    ...(meta.updatedAt ? { dateModified: meta.updatedAt.replace(/\./g, "-") } : {}),
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
      jobTitle: author.title,
      worksFor: author.worksFor,
      ...(author.sameAs && author.sameAs.length > 0 ? { sameAs: author.sameAs } : {}),
    },
    publisher: {
      ...STRETCH_SUPPORT_ORG,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: meta.category,
    inLanguage: "ja-JP",
  };
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
