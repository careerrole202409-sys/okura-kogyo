import type { Lang } from '../i18n/lang';

// 言語ごとの値を持つ翻訳フィールド
export type Localized<T> = Record<Lang, T>;

export interface Product {
  // 非翻訳フィールド
  id: string;
  image: string;
  thumbnailImage: string;
  postClass: string;
  bodyClass: string;
  contactItem: string;
  pdfUrl?: string;
  // 指定した場合、一覧カードのリンクをサイト内ルートではなくこの外部URL（旧サイト）に向ける
  externalUrl?: string;
  // 翻訳フィールド（言語ごとに値を持つ）
  name: Localized<string>;
  lead: Localized<string>;
  excerptText: Localized<string>;
  // 詳細ページ専用（一覧のみの商品では省略可）
  descriptionHtml?: Localized<string>;
  features?: Localized<string[]>;
  usesLabel?: Localized<string>;
  usesHtml?: Localized<string>;
  materialHtml?: Localized<string>;
  specHtml?: Localized<string>;
  specLabel?: Localized<string>; // 仕様セクションの見出し（省略時は t('product.spec') = 製品仕様）
  pdfLabel?: Localized<string>;
  // 固定スロット（特長/用途/材質/仕様）に収まらない製品向けの汎用セクション。
  // 説明文の直後に、見出し(label)＋HTML(html) を順に描画する。
  sections?: Array<{ label: Localized<string>; html: Localized<string> }>;
}
