import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { asLang } from '../i18n/lang';

const LANGUAGES = [
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'ko', label: '한국어' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const currentCode = asLang(i18n.language);
  const current = LANGUAGES.find(l => l.code === currentCode)!;
  const others = LANGUAGES.filter(l => l.code !== currentCode);

  const handleToggle = () => {
    if (!open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPos({ top: rect.bottom + 4, left: rect.left });
    }
    setOpen(v => !v);
  };

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);

  const dropdown = open
    ? createPortal(
        <ul
          onMouseDown={e => e.stopPropagation()}
          style={{
            position: 'fixed',
            top: pos.top,
            left: pos.left,
            background: '#202a67',
            listStyle: 'none',
            margin: 0,
            padding: '4px 0',
            minWidth: '110px',
            zIndex: 9999,
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
          }}
        >
          {others.map(lang => (
            <li key={lang.code}>
              <button
                onClick={() => {
                  i18n.changeLanguage(lang.code); // 言語切替＋localStorageへ自動保存
                  setOpen(false);
                }}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  padding: '8px 14px',
                  textAlign: 'left',
                  fontSize: '13px',
                  fontFamily: 'inherit',
                  display: 'block',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'none')}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>,
        document.body
      )
    : null;

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleToggle}
        onMouseDown={e => e.stopPropagation()}
        style={{
          background: 'none',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          fontSize: '13px',
          paddingTop: '1.3rem',
          paddingBottom: '1.1rem',
          paddingLeft: '6px',
          paddingRight: '6px',
          fontFamily: 'inherit',
        }}
      >
        <span style={{ fontSize: '15px' }}>🌐</span>
        {current.label}
        <span style={{ fontSize: '10px' }}>▼</span>
      </button>
      {dropdown}
    </>
  );
}
