export const CATEGORIES = [
  "スポーツと地域",
  "育成とスポーツ環境",
  "実践知と編集",
] as const;

export type Category = (typeof CATEGORIES)[number];

// note記事・自社記事(owned)に共通する項目
type ArticleBase = {
  id: string;
  title: string;
  summary: string;
  category: Category;
  target: string;
  publishedAt: string; // YYYY.MM.DD
  updatedAt?: string; // YYYY.MM.DD（更新日がある場合のみ）
  thumbnail: string;
  featured: boolean;
  published: boolean;
  // Related Articlesに表示する記事のid/slugを指定（note・自社記事どちらも指定可）
  related?: string[];
};

// note上で公開している記事（このファイルで一覧管理）
export type NoteArticle = ArticleBase & {
  type: "note";
  noteUrl: string;
};

// stretch-s.co.jp/articles/[slug] で公開する自社記事
// メタ情報は content/articles/[slug].md のfrontmatterに保持し、
// lib/articles.ts が実行時に読み込んでこの型に変換する
export type OwnedArticle = ArticleBase & {
  type: "owned";
  slug: string;
  lead?: string; // 記事詳細ページのリード文（サブタイトル）
  description?: string; // SEO description（省略時はsummaryを使用）
};

export type Article = NoteArticle | OwnedArticle;

export function getArticleHref(article: Article): string {
  return article.type === "note" ? article.noteUrl : `/articles/${article.slug}`;
}

export const articles: NoteArticle[] = [
  {
    id: "article-016",
    type: "note",
    title:
      "「続けさせる」から、「続けられる・続けたくなる」へ｜子どもが主体的に取り組み、夢中になっていく過程を考える",
    summary:
      "前回の記事では、学んだことを日常の中で試し、続け、振り返りながら、少しずつ自分のものにしていくことについて書きました。育成年代では、最初からすべてを本人に任せるのではなく、保護者や指導者が声をかけたり、続けやすい環境を整えたりすることも必要です。",
    category: "育成とスポーツ環境",
    target: "保護者",
    publishedAt: "2026.08.23",
    thumbnail: "/images/articles/20260823-continue-by-choice.webp",
    noteUrl: "https://note.com/udio812/n/n1598f3584c5c",
    featured: true,
    published: true,
  },
  {
    id: "article-015",
    type: "note",
    title: "学んだことを、自分のものにするということ",
    summary:
      "前回の記事では、育成年代の子どもたちに何かを届けるとき、講習会やセミナー、ワークショップの当日だけでなく、その後の日常まで含めて設計することが大切ではないかと書きました。",
    category: "育成とスポーツ環境",
    target: "保護者",
    publishedAt: "2026.08.22",
    thumbnail: "/images/articles/20260822-make-learning-your-own.webp",
    noteUrl: "https://note.com/udio812/n/nc60a1ebc6105",
    featured: true,
    published: true,
  },
  {
    id: "article-014",
    type: "note",
    title: "学びを「その日」で終わらせないために｜育成年代に必要な、その後の設計",
    summary:
      "講習会やセミナー、ワークショップを通じて、その道の専門家から直接学べる機会には大きな価値があります。育成年代の子どもたちにも、それまで知らなかったことを知り、新しい身体の使い方を体験し、自分の身体について考えるきっかけにもなる。",
    category: "育成とスポーツ環境",
    target: "保護者",
    publishedAt: "2026.08.21",
    thumbnail: "/images/articles/20260821-design-learning-beyond-the-day.webp",
    noteUrl: "https://note.com/udio812/n/ne47a2dc26531",
    featured: true,
    published: true,
  },
  {
    id: "article-013",
    type: "note",
    title: "「伝えた」と「届いた」は同じではない｜実践知をどう届けるか",
    summary:
      "記事を書いた。SNSで発信した。資料をつくって説明した。そこまでやれば、「伝えた」と感じることがあります。",
    category: "実践知と編集",
    target: "スポーツ事業者",
    publishedAt: "2026.08.16",
    thumbnail: "/images/articles/20260816-conveyed-received.webp",
    noteUrl: "https://note.com/udio812/n/n617c3c50ddbc",
    featured: true,
    published: true,
  },
  {
    id: "article-012",
    type: "note",
    title: "「専門知識を、分かりやすくする」だけでは足りない｜「実践知の編集」を考える",
    summary:
      "スポーツの現場には、日々の実践の中で積み重ねられてきた知識や経験があります。",
    category: "実践知と編集",
    target: "スポーツ事業者",
    publishedAt: "2026.08.10",
    thumbnail: "/images/articles/20260810-specialized-editing.webp",
    noteUrl: "https://note.com/udio812/n/n80ea4ab96a69",
    featured: true,
    published: true,
  },
  {
    id: "article-011",
    type: "note",
    title: "なぜ、スポーツには「編集」が必要なのか",
    summary:
      "高校時代、原因の分からない膝の痛みに悩まされ続けた経験から見えてきたこと。現場に埋もれた実践知を社会に届けるために、なぜスポーツに「編集」という視点が必要なのかを考えます。",
    category: "実践知と編集",
    target: "スポーツ事業者",
    publishedAt: "2026.08.04",
    thumbnail: "/images/articles/20260804-why-sports-edit.webp",
    noteUrl: "https://note.com/udio812/n/n100436cc58df",
    featured: true,
    published: true,
  },
  {
    id: "article-010",
    type: "note",
    title:
      "プロスポーツの知見を、地域の子どもたちへどう届けるか？専門知を、地域で実践できる仕組みに変えるために",
    summary:
      "プロスポーツクラブやスポーツ医科学の専門家には、身体づくりや傷害予防、コンディショニングに関する知見が蓄積されています。その専門知を、地域の子どもたちが実践できる仕組みへと変えていくための視点を考えます。",
    category: "スポーツと地域",
    target: "スポーツ事業者",
    publishedAt: "2026.07.19",
    thumbnail: "/images/articles/20260719-sports-knowledge.webp",
    noteUrl: "https://note.com/udio812/n/nd114f0f15b6f",
    featured: true,
    published: true,
  },
  {
    id: "article-001",
    type: "note",
    title: "スポーツの価値をもっと社会に届けるために",
    summary:
      "スポーツには、人の可能性を広げる力がある。勝つことだけではないその価値を、現場で生まれる実践知とともに社会へ届けていくための考え方。",
    category: "実践知と編集",
    target: "スポーツ事業者",
    publishedAt: "2026.06.28",
    thumbnail: "/images/articles/20260628-sports-value-gift.webp",
    noteUrl: "https://note.com/udio812/n/n5126fc849d74",
    featured: false,
    published: true,
  },
  {
    id: "article-002",
    type: "note",
    title: "子どもの試合後、親は何を伝えるべきか？アドバイスの前に渡したい、ひとつの問い",
    summary:
      "試合後、親は子どもに何を伝えるべきか。アドバイスの前に、子ども自身が考えるきっかけとなる問いを渡すことの大切さを考えます。",
    category: "育成とスポーツ環境",
    target: "保護者",
    publishedAt: "2026.06.24",
    thumbnail: "/images/articles/20260624-child-after-game-advice.webp",
    noteUrl: "https://note.com/udio812/n/n4f9642668663",
    featured: false,
    published: true,
  },
  {
    id: "article-003",
    type: "note",
    title: "スポーツを通じて、自らの可能性をひらくということ",
    summary:
      "スポーツには、勝つことや上達すること以上の価値がある。自ら考え、挑戦し、可能性をひらいていくプロセスについて綴った記事です。",
    category: "育成とスポーツ環境",
    target: "スポーツ事業者",
    publishedAt: "2026.06.22",
    thumbnail: "/images/articles/20260622-sports-possibility.webp",
    noteUrl: "https://note.com/udio812/n/n7ee52836998f",
    featured: false,
    published: true,
  },
  {
    id: "article-004",
    type: "note",
    title: "なぜ「子どものスポーツ×トレーニング」に向き合い始めたのか？",
    summary:
      "子どものスポーツや怪我、成長期のトレーニングに向き合う中で見えてきた課題と、ストレッチサポートがこのテーマに取り組む理由をまとめています。",
    category: "育成とスポーツ環境",
    target: "保護者",
    publishedAt: "2026.06.04",
    thumbnail: "/images/articles/20260604-why-child-sports-training.webp",
    noteUrl: "https://note.com/udio812/n/ndabaab925cce",
    featured: false,
    published: true,
  },
  {
    id: "article-005",
    type: "note",
    title: '「考える子ども」はスポーツで育つ―勝ち負けより大切な“思考する力”を育てる指導とは？',
    summary:
      "スポーツには、技術や体力だけでなく、考える力を育てる可能性があります。勝ち負けを超えて、子どもの思考する力をどう支えるかを考えます。",
    category: "育成とスポーツ環境",
    target: "保護者",
    publishedAt: "2025.10.17",
    thumbnail: "/images/articles/20251017-think-child.webp",
    noteUrl: "https://note.com/udio812/n/n1fa5afdef477",
    featured: false,
    published: true,
  },
  {
    id: "article-006",
    type: "note",
    title: "子どものマルチスポーツ化をどう考えるか",
    summary:
      "複数のスポーツに取り組むことをどう捉えるか。個人種目とチームスポーツの両立を通じて、子どもの成長環境を考えます。",
    category: "育成とスポーツ環境",
    target: "指導者",
    publishedAt: "2025.09.07",
    thumbnail: "/images/articles/20250907-child-multi-sports.webp",
    noteUrl: "https://note.com/udio812/n/nbf7fd1323ffc",
    featured: false,
    published: true,
  },
  {
    id: "article-007",
    type: "note",
    title: "アメリカの勝つためだけじゃない、育てるスポーツ教育へ",
    summary:
      "スポーツ大国アメリカにおける育成の考え方を紹介しながら、勝つことだけではないスポーツ教育のあり方を考えます。",
    category: "育成とスポーツ環境",
    target: "保護者",
    publishedAt: "2025.05.17",
    thumbnail: "/images/articles/20250517-us-sports-education.webp",
    noteUrl: "https://note.com/udio812/n/n932c7e3b91e6",
    featured: false,
    published: true,
  },
  {
    id: "article-008",
    type: "note",
    title: "スウェーデンに学ぶ、子どもとスポーツと教育のちょうどいい関係",
    summary:
      "スウェーデンのスポーツ教育を手がかりに、子どもとスポーツ、教育の関係性について考えます。競技と学びをどう両立するかを探ります。",
    category: "育成とスポーツ環境",
    target: "保護者",
    publishedAt: "2025.05.13",
    thumbnail: "/images/articles/20250513-sweden-sports-education.webp",
    noteUrl: "https://note.com/udio812/n/n94d38ec0cc8f",
    featured: false,
    published: true,
  },
  {
    id: "article-009",
    type: "note",
    title: "「部活の地域移行」が意味するもの｜私たちが受け入れ、育てていくべき新しいスポーツ文化",
    summary:
      "部活動の地域移行は、制度変更にとどまらず、新しいスポーツ文化を育てる転機でもあります。持続可能なスポーツの形について考えます。",
    category: "スポーツと地域",
    target: "スポーツ事業者",
    publishedAt: "2025.05.24",
    thumbnail: "/images/articles/20250524-bukatsu-transition.webp",
    noteUrl: "https://note.com/udio812/n/n8686993ce86b",
    featured: false,
    published: true,
  },
];
