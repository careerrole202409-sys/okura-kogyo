export default function Footer() {
  return (
    <footer className="m-ftr products">
      <div className="inner">
        <div className="left">
          <img
            src="https://www.okr-ind.co.jp/wp/wp-content/themes/okr-ind/images/common/logo-full.png"
            alt="マーク"
            className="ttl"
          />
          <p className="address l-only-pc">〒763-8508 香川県丸亀市中津町1515番地</p>
          <p className="m-btn-pg-top"><a href="#container">pagetop</a></p>
        </div>
        <div className="right">
          <ul className="m-fnav">
            <li className="list"><a href="https://www.okr-ind.co.jp/company/" className="link">企業情報</a></li>
            <li className="list"><a href="https://www.okr-ind.co.jp/products/" className="link current">製品情報</a></li>
            <li className="list"><a href="https://www.okr-ind.co.jp/rd-center/" className="link">研究開発</a></li>
            <li className="list"><a href="https://www.okr-ind.co.jp/ir/" className="link">IR情報</a></li>
            <li className="list"><a href="https://www.okr-ind.co.jp/sustainability/" className="link">サステナビリティ</a></li>
            <li className="list"><a href="https://www.okr-ind.co.jp/topics/" className="link">トピックス</a></li>
            <li className="list"><a href="https://www.okr-ind.co.jp/contact/" className="link">お問い合わせ</a></li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="inner">
          <ul className="m-bnav l-float-l">
            <li className="list news"><a href="https://www.okr-ind.co.jp/news/" className="link">ニュースリリース</a></li>
            <li className="list catalog"><a href="https://www.okr-ind.co.jp/catalog/" className="link">カタログ一覧</a></li>
            <li className="list"><a href="https://www.okr-ind.co.jp/link/" className="link" target="_blank" rel="noreferrer">専用サイト一覧</a></li>
            <li className="list"><a href="https://www.okr-ind.co.jp/recruit/" className="link" target="_blank" rel="noreferrer">採用サイト</a></li>
            <li className="list privacy"><a href="https://www.okr-ind.co.jp/privacy/" className="link">プライバシーポリシー</a></li>
          </ul>
          <div className="l-float-r">
            <p className="copyright">© 2003-2026 Okura Industrial Co.,Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
