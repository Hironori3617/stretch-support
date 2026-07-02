export const CATEGORIES = [
  "事業づくり",
  "保護者",
  "コーチ",
  "教育",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Article = {
  id: string;
  title: string;
  summary: string;
  category: Category;
  target: string;
  publishedAt: string; // YYYY.MM.DD
  thumbnail: string;
  noteUrl: string;
  featured: boolean;
  published: boolean;
};

export const articles: Article[] = [
  {
    id: "article-001",
    title: "スポーツの価値をもっと社会に届けるために",
    summary:
      "スポーツには、人の可能性を広げる力がある。勝つことだけではないその価値を、現場で生まれる実践知とともに社会へ届けていくための考え方。",
    category: "事業づくり",
    target: "スポーツ事業者",
    publishedAt: "2026.06.28",
    thumbnail: "/images/articles/20260628-sports-value-gift.webp",
    noteUrl: "https://note.com/udio812/n/n5126fc849d74",
    featured: true,
    published: true,
  },
  {
    id: "article-002",
    title: "子どもの試合後、親は何を伝えるべきか？アドバイスの前に渡したい、ひとつの問い",
    summary:
      "試合後、親は子どもに何を伝えるべきか。アドバイスの前に、子ども自身が考えるきっかけとなる問いを渡すことの大切さを考えます。",
    category: "保護者",
    target: "保護者",
    publishedAt: "2026.06.24",
    thumbnail: "/images/articles/20260624-child-after-game-advice.webp",
    noteUrl: "https://note.com/udio812/n/n4f9642668663",
    featured: true,
    published: true,
  },
  {
    id: "article-003",
    title: "スポーツを通じて、自らの可能性をひらくということ",
    summary:
      "スポーツには、勝つことや上達すること以上の価値がある。自ら考え、挑戦し、可能性をひらいていくプロセスについて綴った記事です。",
    category: "事業づくり",
    target: "スポーツ事業者",
    publishedAt: "2026.06.22",
    thumbnail: "/images/articles/20260622-sports-possibility.webp",
    noteUrl: "https://note.com/udio812/n/n7ee52836998f",
    featured: true,
    published: true,
  },
  {
    id: "article-004",
    title: "なぜ「子どものスポーツ×トレーニング」に向き合い始めたのか？",
    summary:
      "子どものスポーツや怪我、成長期のトレーニングに向き合う中で見えてきた課題と、ストレッチサポートがこのテーマに取り組む理由をまとめています。",
    category: "保護者",
    target: "保護者",
    publishedAt: "2026.06.04",
    thumbnail: "/images/articles/20260604-why-child-sports-training.webp",
    noteUrl: "https://note.com/udio812/n/ndabaab925cce",
    featured: false,
    published: true,
  },
  {
    id: "article-005",
    title: '「考える子ども」はスポーツで育つ―勝ち負けより大切な“思考する力”を育てる指導とは？',
    summary:
      "スポーツには、技術や体力だけでなく、考える力を育てる可能性があります。勝ち負けを超えて、子どもの思考する力をどう支えるかを考えます。",
    category: "保護者",
    target: "保護者",
    publishedAt: "2025.10.17",
    thumbnail: "/images/articles/20251017-think-child.webp",
    noteUrl: "https://note.com/udio812/n/n1fa5afdef477",
    featured: false,
    published: true,
  },
  {
    id: "article-006",
    title: "子どものマルチスポーツ化をどう考えるか",
    summary:
      "複数のスポーツに取り組むことをどう捉えるか。個人種目とチームスポーツの両立を通じて、子どもの成長環境を考えます。",
    category: "コーチ",
    target: "指導者",
    publishedAt: "2025.09.07",
    thumbnail: "/images/articles/20250907-child-multi-sports.webp",
    noteUrl: "https://note.com/udio812/n/nbf7fd1323ffc",
    featured: false,
    published: true,
  },
  {
    id: "article-007",
    title: "アメリカの勝つためだけじゃない、育てるスポーツ教育へ",
    summary:
      "スポーツ大国アメリカにおける育成の考え方を紹介しながら、勝つことだけではないスポーツ教育のあり方を考えます。",
    category: "教育",
    target: "保護者",
    publishedAt: "2025.05.17",
    thumbnail: "/images/articles/20250517-us-sports-education.webp",
    noteUrl: "https://note.com/udio812/n/n932c7e3b91e6",
    featured: false,
    published: true,
  },
  {
    id: "article-008",
    title: "スウェーデンに学ぶ、子どもとスポーツと教育のちょうどいい関係",
    summary:
      "スウェーデンのスポーツ教育を手がかりに、子どもとスポーツ、教育の関係性について考えます。競技と学びをどう両立するかを探ります。",
    category: "教育",
    target: "保護者",
    publishedAt: "2025.05.13",
    thumbnail: "/images/articles/20250513-sweden-sports-education.webp",
    noteUrl: "https://note.com/udio812/n/n94d38ec0cc8f",
    featured: false,
    published: true,
  },
  {
    id: "article-009",
    title: "「部活の地域移行」が意味するもの｜私たちが受け入れ、育てていくべき新しいスポーツ文化",
    summary:
      "部活動の地域移行は、制度変更にとどまらず、新しいスポーツ文化を育てる転機でもあります。持続可能なスポーツの形について考えます。",
    category: "事業づくり",
    target: "スポーツ事業者",
    publishedAt: "2025.05.24",
    thumbnail: "/images/articles/20250524-bukatsu-transition.webp",
    noteUrl: "https://note.com/udio812/n/n8686993ce86b",
    featured: true,
    published: true,
  },
];
