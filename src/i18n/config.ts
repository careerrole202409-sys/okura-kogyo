import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { translations } from './translations';

// translations を react-i18next の resources 形式に変換
// （各言語のオブジェクトを既定の名前空間 'translation' に入れる）
const resources = Object.fromEntries(
  Object.entries(translations).map(([lang, data]) => [lang, { translation: data }])
);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ja',
    supportedLngs: Object.keys(translations),
    load: 'languageOnly', // 'en-US' → 'en' に正規化
    interpolation: {
      escapeValue: false, // React が自動でエスケープするため
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
