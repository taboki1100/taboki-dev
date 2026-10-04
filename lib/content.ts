// Everything the site says lives here, so prices and text can be changed in one place.

/** Google Form for inquiries, set at build time (Vercel environment variable). */
export const CONTACT_FORM_URL = process.env.NEXT_PUBLIC_CONTACT_FORM_URL ?? "";

// TODO(taboki): 返信の目安は公開前に確認してください。
export const contact = {
  lead: "「作れるかどうか分からない」「いくらかかるか知りたい」という段階でも大丈夫です。フォームに内容を書いて送ってください。",
  reply: "2営業日以内にメールでお返事します。",
};

export const site = {
  name: "taboki",
  title: "taboki｜Webアプリ・業務システムの開発",
  description:
    "予約・在庫・顧客管理などの業務ツール、ホームページ、既存システムの改修・保守を個人で請け負っています。設計からテスト、公開、保守まで一人で担当します。",
};

export type Service = { title: string; body: string; examples: string[] };

export const services: Service[] = [
  {
    title: "小規模Webアプリ・業務ツール",
    body: "表計算や紙で回している業務を、ブラウザで使えるツールにします。ログインや権限分けにも対応します。",
    examples: ["予約・受付の管理", "在庫・備品の管理", "顧客・案件の管理", "社内の記録・集計"],
  },
  {
    title: "ホームページ制作",
    body: "会社やお店の紹介ページを、スマホでも読みやすく作ります。公開や独自ドメインの設定まで行います。",
    examples: ["会社・お店の紹介", "サービス・料金のページ", "お問い合わせへの導線"],
  },
  {
    title: "既存システムの改修・保守",
    body: "動いているシステムの不具合修正や機能追加を行います。まずコードを読んで、直す範囲と費用をお伝えします。",
    examples: ["不具合の調査・修正", "機能の追加", "ライブラリの更新", "Rails・Next.js のアプリ"],
  },
  {
    title: "技術相談・AI活用支援",
    body: "作るべきか、既製品で足りるか、から一緒に考えます。生成AIを業務にどう使うかの相談にも乗ります。",
    examples: ["システム化の相談", "見積もりの妥当性チェック", "生成AIの業務への導入"],
  },
];

export type Work = {
  name: string;
  summary: string;
  points: string[];
  stack: string[];
  /** Public URL, or null while it is not published yet. */
  url: string | null;
};

export const works: Work[] = [
  {
    name: "道の駅訪問記録",
    summary: "全国1,200以上の道の駅を地図と一覧で探し、訪問日・評価・メモを記録できるアプリ。",
    points: ["都道府県ごとの達成率と地図の塗り分け", "公開・非公開を選べるプロフィール", "国のデータからの駅情報の取り込み"],
    stack: ["Next.js", "Supabase", "Leaflet"],
    url: "https://michinoeki-log-ten.vercel.app",
  },
  {
    name: "水族館訪問記録",
    summary: "全国125館の水族館を探して、訪問の記録を残せるアプリ。",
    points: ["公開データから施設一覧を作成・検証", "ほかの人の評価・公開メモの閲覧"],
    stack: ["Next.js", "Supabase", "Leaflet"],
    url: "https://suizokukan-log.vercel.app",
  },
  {
    name: "駅訪問記録",
    summary: "全国約9,000の鉄道駅を、路線・鉄道会社・都道府県ごとの達成率つきで記録できるアプリ。",
    points: ["約9,000駅を地図と一覧で軽快に表示", "国土数値情報から駅・路線を変換して取り込み"],
    stack: ["Next.js", "Supabase", "Leaflet"],
    url: null,
  },
  {
    name: "16タイプQ&A",
    summary: "性格の16タイプを登録したユーザー同士が、質問・回答・コメントで語り合うQ&Aサービス。",
    points: ["タイプ別の集計と絞り込み", "通報と管理者による非表示", "投稿数の上限"],
    stack: ["Next.js", "Supabase"],
    url: null,
  },
  {
    name: "タスクログ",
    summary: "自分のタスクと共有プロジェクトを、リスト・カンバン・カレンダーで管理するアプリ。",
    points: ["招待リンクでのメンバー共有と権限", "繰り返しタスク", "キーボードでも動かせるカンバン"],
    stack: ["Next.js", "Supabase", "dnd-kit"],
    url: null,
  },
];

export type Price = { item: string; price: string; note: string };

// TODO(taboki): 金額は仮置きです。公開前に確認してください。
export const prices: Price[] = [
  { item: "ホームページ制作", price: "10万円〜", note: "5ページ程度。スマホ対応・公開作業を含みます" },
  { item: "小規模Webアプリ・業務ツール", price: "30万円〜", note: "ログイン・データ管理を含む小さな業務ツール" },
  { item: "既存システムの改修", price: "3万円〜", note: "調査のうえ、作業ごとにお見積もりします" },
  { item: "保守・運用", price: "月1万円〜", note: "不具合対応、ライブラリの更新、小さな修正" },
  { item: "技術相談・AI活用支援", price: "1時間 5,000円〜", note: "オンラインでの相談。初回30分は無料です" },
];

export type Step = { title: string; body: string };

export const steps: Step[] = [
  { title: "相談", body: "フォームから、困っていることや作りたいものを送ってください。決まっていなくても大丈夫です。" },
  { title: "ヒアリング", body: "オンラインで、業務の流れや必要な機能をうかがいます。" },
  { title: "見積もり・契約", body: "作る範囲・費用・期間をまとめてお出しします。合意してから着手します。" },
  { title: "開発", body: "途中で実際に動く画面を見ていただき、使い勝手を確かめながら進めます。" },
  { title: "納品・公開", body: "公開作業を行い、使い方をお伝えします。" },
  { title: "保守", body: "必要に応じて、公開後の不具合対応や機能追加を続けます。" },
];

export type SkillGroup = { area: string; items: string[] };

export const skills: SkillGroup[] = [
  { area: "画面", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { area: "サーバー・DB", items: ["Ruby on Rails", "Node.js", "PostgreSQL", "Supabase"] },
  { area: "インフラ", items: ["AWS", "Google Cloud", "Vercel", "GitHub Actions"] },
  { area: "品質", items: ["自動テスト（Vitest・Playwright・pgTAP）", "アクセシビリティ確認", "セキュリティ設計"] },
];

/** How work is done, as shown in every project above. */
export const practices: Step[] = [
  { title: "先に設計書を書く", body: "作るもの・作らないものを文章にして、認識を合わせてから作り始めます。" },
  { title: "テストを書いてから作る", body: "画面・DB・操作の流れを自動テストで確かめ、変更のたびに全部を流します。" },
  { title: "権限はデータベースで守る", body: "他人のデータが見えない・変えられないことを、画面ではなくDBの仕組みで保証します。" },
  { title: "誰でも使える画面に", body: "スマホの小さな画面やキーボード操作、読み上げソフトでも使えるかを確認します。" },
];

/** A few lines about the developer. Left empty until written; the section hides it. */
// TODO(taboki): 経歴を書く（例: 経験年数、これまで関わった業種・システム）。
export const career: string[] = [];
