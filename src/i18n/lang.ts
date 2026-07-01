// 対応言語の定義と正規化ヘルパー
export const LANGS = ['ja', 'en', 'zh', 'ko'] as const;
export type Lang = (typeof LANGS)[number];

// i18n.language（'en-US' 等になり得る）を対応言語コードに正規化する。
// 未対応の場合は 'ja' にフォールバック。
export function asLang(code: string | undefined): Lang {
  const short = (code ?? '').split('-')[0];
  return (LANGS as readonly string[]).includes(short) ? (short as Lang) : 'ja';
}
