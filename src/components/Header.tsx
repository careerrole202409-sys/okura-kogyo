import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  return (
    <header className="m-hdr">
      <div className="logo en">
        <div className="inner-hdr">
          <a href="https://www.okr-ind.co.jp/" className="link">
            <img
              src="https://www.okr-ind.co.jp/wp/wp-content/themes/okr-ind/images/common/logo.svg"
              alt="大倉工業株式会社"
              className="svg"
            />
          </a>
        </div>
      </div>
      <nav className="control-cont">
        <div className="m-nav-toggle">
          <div className="m-dropdown m-dropdown-gnav">
            <ul className="inner-hdr m-gnav">
              <li data-role="drop" className="list drop">
                <a href="https://www.okr-ind.co.jp/" data-role="drop" className="link-g inner-ttl">HOME</a>
              </li>
              <li data-role="" className="list drop company">
                <a href="https://www.okr-ind.co.jp/company/" className="link-g inner-ttl">企業情報</a>
                <ul className="body">
                  <li className="list"><a href="https://www.okr-ind.co.jp/company/greeting/" className="s-arrow-r">ご挨拶</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/company/philosophy/" className="s-arrow-r">理念・方針</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/company/profile/" className="s-arrow-r">会社概要</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/company/divisions/" className="s-arrow-r">事業紹介</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/company/organization/" className="s-arrow-r">組織図</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/company/history/" className="s-arrow-r">沿革</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/company/officer/" className="s-arrow-r">役員紹介</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/company/locations/" className="s-arrow-r">事業所一覧</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/company/group/" className="s-arrow-r">グループ会社一覧</a></li>
                </ul>
              </li>
              <li data-role="" className="list drop products">
                <a href="https://www.okr-ind.co.jp/products/" className="link-g inner-ttl current">製品情報</a>
                <ul className="body">
                  <li className="list"><a href="https://www.okr-ind.co.jp/products/use/industry-car/" className="s-arrow-r">産業・自動車</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/products/use/food/" className="s-arrow-r">食品</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/products/use/medical-drug/" className="s-arrow-r">医療・医薬</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/products/use/packaging/" className="s-arrow-r">一般包装</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/products/use/optical-electronics/" className="s-arrow-r">光学・情報電子</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/products/use/architecture/" className="s-arrow-r">建築</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/products/use/agriculture/" className="s-arrow-r">農業</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/products/use/other/" className="s-arrow-r">生活用品</a></li>
                </ul>
              </li>
              <li data-role="" className="list drop rd-center">
                <a href="https://www.okr-ind.co.jp/rd-center/" className="link-g inner-ttl">研究開発</a>
                <ul className="body">
                  <li className="list"><a href="https://www.okr-ind.co.jp/rd-center/policies/" className="s-arrow-r">方針</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/rd-center/core-technology-facility/" className="s-arrow-r">要素技術・設備紹介</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/rd-center/developed-products/" className="s-arrow-r">開発品紹介</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/rd-center/feature/" className="s-arrow-r">【特設サイト】ペロブスカイト太陽電池</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/rd-center/plant-extract/" className="s-arrow-r">【特設サイト】植物抽出紹介</a></li>
                </ul>
              </li>
              <li data-role="" className="list drop ir">
                <a href="https://www.okr-ind.co.jp/ir/" className="link-g inner-ttl">IR情報</a>
                <ul className="body">
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/greeting-ir/" className="s-arrow-r">ご挨拶</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/earning/" className="s-arrow-r">決算短信</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/supplemental-doc/" className="s-arrow-r">各種説明会</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/securitie/" className="s-arrow-r">有価証券報告書・四半期報告書</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/highlight/" className="s-arrow-r">業績ハイライト</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/report/" className="s-arrow-r">株主通信</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/ir-vision/" className="s-arrow-r">経営ビジョン</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/ir-plan/" className="s-arrow-r">中期経営計画</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/meeting/" className="s-arrow-r">株主総会</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/procedure/" className="s-arrow-r">株式手続き</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/public-notice/" className="s-arrow-r">電子公告</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/condition/" className="s-arrow-r">株式等の状況</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/shareholder/" className="s-arrow-r">株主優待</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/calendar/" className="s-arrow-r">IRカレンダー</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/ir-information/" className="s-arrow-r">IRニュース</a></li>
                </ul>
              </li>
              <li data-role="" className="list drop csr">
                <a href="https://www.okr-ind.co.jp/sustainability/" className="link-g inner-ttl">サステナビリティ</a>
                <ul className="body">
                  <li className="list"><a href="https://www.okr-ind.co.jp/sustainability/s-message/" className="s-arrow-r">トップコミットメント</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/sustainability/s-about/" className="s-arrow-r">大倉工業グループのサステナビリティ</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/sustainability/s-environment/" className="s-arrow-r">環境</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/sustainability/s-social/" className="s-arrow-r">社会</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/sustainability/s-governance/" className="s-arrow-r">ガバナンス</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/sustainability/data/" className="s-arrow-r">財務/非財務データ</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/sustainability/okura-report/" className="s-arrow-r">統合報告書 / サステナビリティレポート</a></li>
                </ul>
              </li>
              <li data-role="drop" className="list drop ad">
                <a href="https://www.okr-ind.co.jp/company/ad/" className="link-g inner-ttl">企業広告</a>
              </li>
              <li data-role="drop" className="list drop topics">
                <a href="https://www.okr-ind.co.jp/topics/" className="link-g inner-ttl">トピックス</a>
              </li>
              <li data-role="drop" className="list drop contact">
                <a href="https://www.okr-ind.co.jp/contact/" className="link-g inner-ttl">お問い合わせ</a>
              </li>
            </ul>
          </div>
          <div className="inner-hdr l-por">
            <nav className="langnav">
              <LanguageSwitcher />
            </nav>
            <ul className="m-subnav login"></ul>
            <ul className="m-subnav">
              <li className="list"><a href="https://www.okr-ind.co.jp/news/" className="link">ニュースリリース</a></li>
              <li className="list"><a href="https://www.okr-ind.co.jp/catalog/" className="link">カタログ一覧</a></li>
              <li className="list"><a href="https://www.okr-ind.co.jp/link/" className="link" target="_blank" rel="noreferrer">専用サイト一覧</a></li>
              <li className="list"><a href="https://www.okr-ind.co.jp/recruit/" className="link" target="_blank" rel="noreferrer">採用サイト</a></li>
              <li className="list search"><span className="link"><i></i></span></li>
            </ul>
          </div>
        </div>
        <div className="m-search">
          <form id="cse-search-box" action="https://www.okr-ind.co.jp/search" className="form">
            <input type="hidden" name="cx" value="001793229115547448085:3ku7ru42ewm" />
            <input type="hidden" name="ie" value="UTF-8" />
            <input type="text" name="q" size={31} className="txt" />
            <input type="submit" name="sa" value="" className="submit" />
          </form>
        </div>
      </nav>
      <p className="m-btn-search-sp"><i></i></p>
      <nav className="langnav sp">
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
