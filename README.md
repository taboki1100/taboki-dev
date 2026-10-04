# taboki-dev

個人で Web 開発の依頼を受けるためのサイト（静的サイト）です。実績・料金の目安・依頼の流れ・技術を載せ、相談は Google フォームで受けます。

## 内容を変える

文章・料金・実績はすべて `lib/content.ts` にあります。

- `prices`: 料金の目安（**仮の金額です。公開前に確認してください**）
- `contact`: 相談の案内と返信の目安
- `career`: 経歴（空のあいだは表示しません）
- `works`: 実績。公開したら `url` にアドレスを入れると「アプリを開く」リンクになります

## 開発

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint && npm run typecheck && npm test
npm run build      # out/ に静的ファイルを書き出します
npm run test:e2e   # out/ を配信して、アクセシビリティと画面幅を確認します
```

## 公開（Vercel）

1. Google フォームを作り、共有用のURL（`https://forms.gle/...`）を控えます。
2. Vercel でこのリポジトリをインポートします（フレームワークは Next.js）。
3. 環境変数を設定してデプロイします。

   | 変数 | 値 |
   | --- | --- |
   | `NEXT_PUBLIC_CONTACT_FORM_URL` | Google フォームのURL |
   | `NEXT_PUBLIC_SITE_URL` | サイトのURL（例: `https://taboki-dev.vercel.app`） |

フォームのURLを入れないと、「相談する」ボタンは「相談フォームは準備中です」と表示されます。

## 技術

Next.js 16（静的書き出し）/ TypeScript / Tailwind CSS / Vitest / Playwright + axe。フォントは Zen Kaku Gothic New と Dela Gothic One（SIL Open Font License、`@fontsource` で同梱）。
