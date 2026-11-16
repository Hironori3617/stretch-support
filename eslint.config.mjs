import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// 旧 .eslintrc.json の "extends": "next/core-web-vitals" を引き継いだ上で、
// Next.js 16公式ドキュメントの推奨構成どおりTypeScript推奨ルールも合わせて適用する。
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // eslint-config-nextの既定の除外設定（.next/**, out/**, build/**, next-env.d.ts）を明示する
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
