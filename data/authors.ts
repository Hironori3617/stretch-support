// 自社記事(owned)の執筆者・監修者をIDで管理するレジストリ。
// content/articles/*.md の frontmatter からは authorId/supervisorIds で参照する。
// note記事(外部リンク記事)は対象外。

export type AuthorRole = "author" | "supervisor";

type OrganizationRef = {
  "@type": "Organization";
  name: string;
  url: string;
};

export type Author = {
  id: string;
  name: string;
  title: string; // 肩書き（jobTitle）。会社名は含めない
  role: AuthorRole;
  url: string; // プロフィールページURL
  worksFor: OrganizationRef;
  sameAs?: string[]; // 本人の公開プロフィールURLのみ
};

const SITE_URL = "https://stretch-s.co.jp";

// Article構造化データのpublisher/author.worksForで共通利用するOrganization参照。
// 会社名・URLの定義箇所を一本化するため、lib/articles.tsのpublisherもこれを利用する
export const STRETCH_SUPPORT_ORG: OrganizationRef = {
  "@type": "Organization",
  name: "株式会社ストレッチサポート",
  url: `${SITE_URL}/`,
};

export const DEFAULT_AUTHOR_ID = "hironori-uranaka";

const authors: Record<string, Author> = {
  "hironori-uranaka": {
    id: "hironori-uranaka",
    name: "浦中 宏典",
    title: "代表取締役",
    role: "author",
    url: `${SITE_URL}/about`,
    worksFor: STRETCH_SUPPORT_ORG,
    sameAs: [
      "https://note.com/udio812",
      "https://www.instagram.com/udio08/",
      "https://www.facebook.com/hironori.uranaka",
    ],
  },
};

// 未登録のauthorIdが指定された場合は、既定著者へ黙って差し替えず、
// 原因が分かるエラーを投げる（フォールバックは呼び出し側でauthorId省略時のみ行う）
export function getAuthorById(id: string): Author {
  const author = authors[id];
  if (!author) {
    throw new Error(
      `Unknown authorId "${id}". Register it in data/authors.ts, or remove it from the article's frontmatter to fall back to the default author ("${DEFAULT_AUTHOR_ID}").`
    );
  }
  return author;
}
