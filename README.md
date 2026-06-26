# Stretch Support — Manifesto

株式会社ストレッチサポートの1ページ・マニフェストサイト。
Next.js (App Router) / React / TypeScript / Tailwind CSS。画像・外部UIライブラリなし。

## 構成

```
stretch-support/
├── app/
│   ├── globals.css      # Tailwind + ベースタイポgrafi / ::selection
│   ├── layout.tsx       # metadata・lang="ja"
│   └── page.tsx         # マニフェスト本体（全セクション）
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── next-env.d.ts
└── .gitignore
```

## 環境変数の設定

プロジェクトルートに `.env.local` を作成し、以下を設定してください。

```bash
# Google Tag Manager コンテナ ID（GTM-XXXXXXX 形式）
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

- `NEXT_PUBLIC_GTM_ID` が未設定または空の場合、GTM スクリプトは挿入されません。
- Vercel にデプロイする場合は、Project → Settings → Environment Variables に同じキーと値を追加してください。
- `.env.local` は `.gitignore` に含まれており、リポジトリにはコミットされません。

## ローカルで動かす

```bash
npm install
npm run dev
```

→ http://localhost:3000

## ビルド確認

```bash
npm run build
npm run start
```

## Vercel で公開

1. このフォルダを GitHub リポジトリに push。
2. https://vercel.com で「Add New → Project」から Import。
3. フレームワークは Next.js が自動検出されるので、設定は変えず「Deploy」。
4. 独自ドメイン（stretch-s.co.jp）は Project → Settings → Domains から追加。

CLI 派なら、フォルダ直下で:

```bash
npx vercel        # プレビュー
npx vercel --prod # 本番公開
```

## 仮リンクの差し替え箇所

- ヘッダー / フッター / Journal の `href="#"` → 実際の Contact・note URL に。
- フッターの `stretch-s.co.jp` リンク。
- `app/layout.tsx` の `metadataBase` と OGP テキスト。

## デザインメモ

明朝体（思想・宣言）×ゴシック体（説明・ナビ）のコントラストが基調。
白・黒・グレーにディープブルー `#2f4e6f` を1色だけ最小限に使用。
フォントを環境差なく揃えたい場合は `next/font/google` で
Noto Serif JP / Noto Sans JP を読み込み、`page.tsx` の `serif` / `sans` 定数を差し替える。
