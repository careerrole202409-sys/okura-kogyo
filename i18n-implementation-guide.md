# 多言語対応（i18n）実装ガイド

このドキュメントは、生成した React + Vite サイトに **Leap 本体と同じ方式（react-i18next）** で多言語対応（i18n）を実装するための手順書です。
このファイルを参照すれば、どの生成サイトでも同じ構成で i18n を追加できます。

Leap 本体は `react-i18next` を使い、翻訳データをビルド時に静的にバンドルしています（実行時に外部から取得しない）。この「静的バンドル方式」は **Sandpack プレビューでも動作する**ため、生成サイトでも同じ方式を採用します。

---

## 目次
1. [概要](#概要)
2. [依存パッケージ](#依存パッケージ)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [セットアップ](#セットアップ)
5. [翻訳データの持ち方](#翻訳データの持ち方)
6. [コンポーネントでの使い方](#コンポーネントでの使い方)
7. [言語切り替えUI](#言語切り替えui)
8. [言語・翻訳キーの追加手順](#言語翻訳キーの追加手順)
9. [Sandpack / 実装上の注意点](#sandpack--実装上の注意点)
10. [実装チェックリスト](#実装チェックリスト)

---

## 概要

- **ライブラリ**: `react-i18next` + `i18next` + `i18next-browser-languagedetector`
- **翻訳の持ち方**: `src/i18n/translations.ts` に TypeScript オブジェクトとして定義し、**直接 import** して初期化（＝ビルド時バンドル）。
- **言語検出/永続化**: `i18next-browser-languagedetector` が `localStorage`（キー `i18nextLng`）→ ブラウザ言語 の順で判定し、切り替えた言語を自動保存。
- **使用方法**: コンポーネントで `const { t } = useTranslation()` → `t('hero.title')`。

> ⚠️ **重要**: Leap 本体は大規模なので翻訳を「言語×名前空間」の多数ファイルに分割していますが、生成サイトでは **単一の `translations.ts`** に集約する簡素な構成を推奨します（後述）。また **`i18next-http-backend`（実行時にJSONを取得する方式）は使いません**（Sandpack で動かないため）。

---

## 依存パッケージ

`package.json` の `dependencies` に以下を追加します。

```json
{
  "dependencies": {
    "i18next": "^23.0.0",
    "react-i18next": "^14.0.0",
    "i18next-browser-languagedetector": "^8.0.0"
  }
}
```

Sandpack プレビューを使う場合は、プレビュー側の依存にも同じパッケージを含める必要があります（プレビュー環境の設定に依存）。

---

## ディレクトリ構成

生成サイトでの推奨構成（単一ファイル集約）:

```
src/
├── main.tsx                 # ここで i18n を最初に import して初期化
├── i18n/
│   ├── config.ts            # i18next の初期化
│   └── translations.ts      # 全言語の翻訳データ（as const）
└── components/
    ├── LanguageSwitcher.tsx  # 言語切り替えUI
    └── ...
```

参考: Leap 本体は規模が大きいため `src/i18n/local/{ja,en,zh}/{namespace}.ts` の「言語×名前空間」分割 + `local/index.ts` で束ねる構成を採用しています。ページ数・文言が非常に多いサイトではこの分割方式が有効ですが、通常の生成サイトは上記の単一ファイルで十分です。

---

## セットアップ

### 1. 翻訳データ `src/i18n/translations.ts`

言語コードをトップレベルに置き、ネストしたオブジェクトで文言を定義します。`as const` を付けます。

```typescript
// src/i18n/translations.ts
export const translations = {
  ja: {
    header: {
      nav: {
        products: '商品一覧',
        blog: 'ブログ',
        contact: 'お問い合わせ',
      },
    },
    hero: {
      title: 'あなたの暮らしに、ちょうどいいものを。',
      subtitle: 'こだわりの商品を公式オンラインストアでお届けします。',
      cta: '商品を見る',
    },
    footer: {
      copyright: '© 2026 サンプルストア',
    },
  },
  en: {
    header: {
      nav: {
        products: 'Products',
        blog: 'Blog',
        contact: 'Contact',
      },
    },
    hero: {
      title: 'Just the right things for your life.',
      subtitle: 'Carefully selected products, delivered from our official online store.',
      cta: 'View products',
    },
    footer: {
      copyright: '© 2026 Sample Store',
    },
  },
} as const
```

### 2. 初期化 `src/i18n/config.ts`

```typescript
// src/i18n/config.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { translations } from './translations'

// translations を react-i18next の resources 形式に変換
// （各言語のオブジェクトを 'translation' という既定の名前空間に入れる）
const resources = Object.fromEntries(
  Object.entries(translations).map(([lang, data]) => [lang, { translation: data }])
)

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ja',                       // 未対応言語のときの既定
    supportedLngs: Object.keys(translations), // 例: ['ja', 'en']
    interpolation: {
      escapeValue: false,                     // React が自動エスケープするため false
    },
    detection: {
      order: ['localStorage', 'navigator'],   // localStorage → ブラウザ言語 の順で判定
      caches: ['localStorage'],               // 切替結果を localStorage(i18nextLng) に保存
    },
  })

export default i18n
```

### 3. アプリ起動時に読み込む `src/main.tsx`

**App より前に** i18n を import して初期化します（重要）。

```tsx
// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './i18n/config'   // ← App より前に i18n を初期化
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

## 翻訳データの持ち方

- **キーの構造**: 画面/セクション単位でネストする（例: `header.nav.products`、`hero.title`）。
- **配列**: リスト項目は配列で持てます。コンポーネント側では `returnObjects: true` で取得します（後述）。
  ```typescript
  hero: {
    features: ['高品質', '送料無料', '安心サポート'],
  }
  ```
- **すべての言語で同じキー構造**を維持する（キーが欠けている言語は `fallbackLng` にフォールバックします）。

---

## コンポーネントでの使い方

### 基本

```tsx
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
      <a href="/products">{t('hero.cta')}</a>
    </section>
  )
}
```

### フォールバック（キーが無い場合の既定値）

```tsx
<span>{t('footer.copyright', '© 2026')}</span>
```

### 変数の埋め込み（interpolation）

```typescript
// translations.ts
cart: { itemCount: 'カート: {{count}}点' }
```
```tsx
<span>{t('cart.itemCount', { count: 3 })}</span>  // → カート: 3点
```

### 配列の取得（returnObjects）

必ず `Array.isArray` で防御してから使います（初期化タイミング等で配列以外が返ることがあるため）。

```tsx
const raw = t('hero.features', { returnObjects: true })
const features = Array.isArray(raw) ? (raw as string[]) : []

return (
  <ul>
    {features.map((f, i) => <li key={i}>{f}</li>)}
  </ul>
)
```

### 現在の言語で日付/数値をフォーマット

```tsx
const { t, i18n } = useTranslation()

const locale = i18n.language === 'ja' ? 'ja-JP'
             : i18n.language === 'zh' ? 'zh-CN'
             : 'en-US'

const dateText = new Date(ts * 1000).toLocaleDateString(locale)
```

---

## 言語切り替えUI

`i18n.changeLanguage(code)` を呼ぶだけで、全コンポーネントが再描画され、選択言語は `localStorage`（`i18nextLng`）に自動保存されます。

```tsx
// src/components/LanguageSwitcher.tsx
import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'English' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0]

  const change = (code: string) => {
    i18n.changeLanguage(code) // 言語切替＋localStorageへ自動保存
    setOpen(false)
  }

  // 外側クリックで閉じる
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setOpen(v => !v)}>{current.label} ▾</button>
      {open && (
        <div style={{ position: 'absolute', right: 0, background: '#fff', border: '1px solid #eee' }}>
          {LANGUAGES.map(l => (
            <button
              key={l.code}
              onClick={() => change(l.code)}
              style={{ display: 'block', width: '100%', textAlign: 'left', fontWeight: l.code === i18n.language ? 700 : 400 }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
```

ヘッダー等に `<LanguageSwitcher />` を配置してください。

---

## 言語・翻訳キーの追加手順

### 言語を追加する（例: 英語 en を足す）
1. `src/i18n/translations.ts` の `translations` に `en: { ... }` を、**既存(ja)と同じキー構造**で追加する。
2. `LanguageSwitcher.tsx` の `LANGUAGES` に `{ code: 'en', label: 'English' }` を追加する。
3. `config.ts` は変更不要（`supportedLngs` は `Object.keys(translations)` で自動反映）。

### 翻訳キー（文言）を追加する
1. `translations.ts` の**全言語**に同じキーを追加する（例: `hero.badge`）。
2. コンポーネントで `t('hero.badge')` を使う。

> 文言を追加/変更するときは、**全言語で同じキーを揃える**こと。揃っていないキーは `fallbackLng` の値が表示されます。

---

## Sandpack / 実装上の注意点

- **翻訳は静的 import**（`import { translations } from './translations'`）で持つ。**`i18next-http-backend`（実行時に `/locales/*.json` を fetch する方式）は使わない** — Sandpack プレビューでは動作しないため。
- **初期化は `main.tsx` で最初に import**（`import './i18n/config'` を `App` より前に置く）。忘れると `t()` がキー文字列をそのまま返す。
- **`interpolation.escapeValue: false`**（React が自動でエスケープするため二重エスケープを避ける）。
- **配列は `returnObjects: true` + `Array.isArray` チェック**で防御的に扱う。
- **キー構造は全言語で統一**する。
- ハードコードした文言を移行するときは、**まず `translations.ts` にキーを定義 → コンポーネントを `t('...')` に置換**の順で行う。

---

## 実装チェックリスト

- [ ] `i18next` / `react-i18next` / `i18next-browser-languagedetector` を `package.json` に追加した
- [ ] `src/i18n/translations.ts`（`as const`）を作成し、全言語で同一キー構造にした
- [ ] `src/i18n/config.ts` で `resources` を組み立て `init` した（`fallbackLng` / `supportedLngs` / `detection` / `escapeValue:false`）
- [ ] `src/main.tsx` で `App` より前に `import './i18n/config'` した
- [ ] コンポーネントの文言を `t('...')` に置換した
- [ ] 配列は `returnObjects: true` + `Array.isArray` で扱った
- [ ] `LanguageSwitcher` を設置し、切り替え→再描画→`localStorage` 永続化を確認した
- [ ] `http-backend` を使っていない（静的 import になっている）
- [ ] 未対応言語で `fallbackLng` にフォールバックすることを確認した
```
