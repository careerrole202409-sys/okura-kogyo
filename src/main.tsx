import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// ベンダーCSSはJSから静的importする（Sandpackプレビュー対応：index.htmlの<link>は配信されないため）
import './vendor/theme.css'
import './vendor/main.css'
import './index.css'
import './i18n/config' // ← App より前に i18n を初期化
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
