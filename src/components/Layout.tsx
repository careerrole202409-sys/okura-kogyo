import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // タイマーは常に設定（StrictModeで2回実行されても動く）
    const timer = setTimeout(() => setVisible(true), 300);

    // jQueryとテーマJSは一度だけ読み込む
    if (!document.getElementById('jquery-original-js')) {
      const jq = document.createElement('script');
      jq.id = 'jquery-original-js';
      jq.src = 'https://www.okr-ind.co.jp/wp/wp-content/themes/okr-ind/js/jquery.min.js';
      jq.onload = () => {
        const theme = document.createElement('script');
        theme.src = 'https://www.okr-ind.co.jp/wp/wp-content/themes/okr-ind/js/okr-ind.min.js?ver=20190412c';
        document.body.appendChild(theme);
      };
      document.body.appendChild(jq);
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="container" className="products" style={{ opacity: visible ? 1 : 0 }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
