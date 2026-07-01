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
  // 翻訳フィールド（言語ごとに値を持つ）
  name: Localized<string>;
  lead: Localized<string>;
  descriptionHtml: Localized<string>;
  features: Localized<string[]>;
  usesLabel: Localized<string>;
  usesHtml: Localized<string>;
  materialHtml?: Localized<string>;
  specHtml?: Localized<string>;
  pdfLabel?: Localized<string>;
  excerptText: Localized<string>;
}
