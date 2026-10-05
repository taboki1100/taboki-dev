# taboki-dev

個人で Web 開発の依頼を受けるためのサイト（静的サイト）です。できること・料金の目安・依頼の流れ・技術を載せ、相談は Google フォームで受けます。

## 内容を変える

文章・料金はすべて `lib/content.ts` にあります。

- `prices`: 料金の目安（**仮の金額です。公開前に確認してください**）
- `contact`: 相談の案内と返信の目安
- `career`: 経歴（空のあいだは表示しません）

## 開発

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint && npm run typecheck && npm test
npm run build      # out/ に静的ファイルを書き出します
npm run test:e2e   # out/ を配信して、アクセシビリティと画面幅を確認します
```

## 公開（GitHub Pages）

`main` に push すると `.github/workflows/pages.yml` がビルドして GitHub Pages に公開します。URLは `https://taboki1100.github.io/taboki-dev/` です。

最初に一度だけ設定します。

1. GitHub Pages は無料プランだと**公開リポジトリ**でしか使えません。Settings → General → Danger Zone → Change visibility で Public にします（ソースに秘密情報はありません）。
2. Settings → Pages → Build and deployment の Source を **GitHub Actions** にします。
3. Settings → Secrets and variables → Actions → **Variables** に `CONTACT_FORM_URL`（Google フォームのURL）を追加します。
4. Actions タブで「Deploy to GitHub Pages」を Run workflow するか、何か push します。

フォームのURLがないと、「相談する」ボタンは「相談フォームは準備中です」と表示されます。

独自ドメインを使う場合は、Settings → Pages で Custom domain を設定し、Variables に `SITE_URL`（例: `https://taboki.dev`）を追加します。ドメイン直下で配信されるようにビルドが切り替わります。

## 技術

Next.js 16（静的書き出し）/ TypeScript / Tailwind CSS / Vitest / Playwright + axe。フォントは Zen Kaku Gothic New と Dela Gothic One（SIL Open Font License、`@fontsource` で同梱）。
