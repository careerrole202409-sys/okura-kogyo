import { useEffect } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function CategoryPage() {
  useEffect(() => {
    document.title = '食品包装用シュリンクフィルム - 製品情報 | 大倉工業株式会社';
    document.body.className = 'archive tax-products_cat term-display-film term-48 ja';
  }, []);

  return (
    <main className="m-body products">
      <div className="m-pg-hdr products non-row food">
        <div className="inner">
          <p className="ttl">
            <a href="https://www.okr-ind.co.jp/products/" className="link-hdr">
              <span className="l-bl-all">製品情報</span>
              <span className="l-bl-all en"> PRODUCTS</span>
            </a>
          </p>
        </div>
      </div>

      <div className="m-cont post-484 products type-products status-publish has-post-thumbnail products_cat-food products_cat-display-film products_cat-architecture products_cat-integrated-packaging-film products_division-plastic-film products_division-packaging-bu ja">
        <div className="s-bg-bgry-pc l-mb1-sp">
          <div className="l-flex-sp-ms0">
            <ul className="m-idx-products-cat m-hidden-v">
              <li className="list"><a className="link industry-car" href="https://www.okr-ind.co.jp/products/use/industry-car/"><img className="img" src="https://www.okr-ind.co.jp/wp/wp-content/uploads/icon-industry-car-s.png" alt="産業・自動車" /><span className="ttl">産業・自動車</span></a></li>
              <li className="list"><a className="link food current" href="https://www.okr-ind.co.jp/products/use/food/"><img className="img" src="https://www.okr-ind.co.jp/wp/wp-content/uploads/icon-food-sanitary-s.png" alt="食品" /><span className="ttl">食品</span></a></li>
              <li className="list"><a className="link medical-drug" href="https://www.okr-ind.co.jp/products/use/medical-drug/"><img className="img" src="https://www.okr-ind.co.jp/wp/wp-content/uploads/icon-medical-drug-s.png" alt="医療・医薬" /><span className="ttl">医療・医薬</span></a></li>
              <li className="list"><a className="link packaging" href="https://www.okr-ind.co.jp/products/use/packaging/"><img className="img" src="https://www.okr-ind.co.jp/wp/wp-content/uploads/icon-packaging-s.png" alt="一般包装" /><span className="ttl">一般包装</span></a></li>
              <li className="list"><a className="link optical-electronics" href="https://www.okr-ind.co.jp/products/use/optical-electronics/"><img className="img" src="https://www.okr-ind.co.jp/wp/wp-content/uploads/icon-optical-electronics-s.png" alt="光学・情報電子" /><span className="ttl">光学・情報電子</span></a></li>
              <li className="list"><a className="link architecture" href="https://www.okr-ind.co.jp/products/use/architecture/"><img className="img" src="https://www.okr-ind.co.jp/wp/wp-content/uploads/icon-architecture-s.png" alt="建築" /><span className="ttl">建築</span></a></li>
              <li className="list"><a className="link agriculture" href="https://www.okr-ind.co.jp/products/use/agriculture/"><img className="img" src="https://www.okr-ind.co.jp/wp/wp-content/uploads/icon-agriculture-s.png" alt="農業" /><span className="ttl">農業</span></a></li>
              <li className="list"><a className="link other" href="https://www.okr-ind.co.jp/products/use/other/"><img className="img" src="https://www.okr-ind.co.jp/wp/wp-content/uploads/icon-livingware.png" alt="生活用品" /><span className="ttl">生活用品</span></a></li>
            </ul>
          </div>
        </div>

        <div className="l-flex">
          <div className="m-breadcrumb m-hidden-v">
            <ul className="inner-breadcrumb">
              <li className="list-breadcrumb"><a className="link-breadcrumb" href="https://www.okr-ind.co.jp/">ホーム</a></li>
              <li className="list-breadcrumb">製品情報</li>
              <li className="list-breadcrumb"><a className="link-breadcrumb" href="https://www.okr-ind.co.jp/products/use/food/">食品</a></li>
              <li className="list-breadcrumb">食品包装用シュリンクフィルム</li>
            </ul>
          </div>
        </div>

        <div className="l-flex-sp-ms0 l-mb3 l-clear l-pdt2-pc">
          <aside className="l-sub l-float-r l-ms-var-sp">
            <aside className="m-dropdown m-dropdown-side m-side">
              <ul className="m-nav-side">
                <li className="list l-only-pc"><a href="https://www.okr-ind.co.jp/products/" className="link parent">製品情報</a></li>
                <li className="drop">
                  <span className="inner-ttl">食品</span>
                  <ul className="body">
                    <li className="list"><a className="link food-film" href="https://www.okr-ind.co.jp/products/use/food-film/">トレイ食品用フィルム</a></li>
                    <li className="list"><a className="link meet-film" href="https://www.okr-ind.co.jp/products/use/meet-film/">畜肉包装用フィルム</a></li>
                    <li className="list"><a className="link display-film current" href="/products/use/display-film/">食品包装用シュリンクフィルム</a></li>
                    <li className="list"><a className="link liquid-film" href="https://www.okr-ind.co.jp/products/use/liquid-film/">液体充填用フィルム</a></li>
                    <li className="list"><a className="link food-laminate-film" href="https://www.okr-ind.co.jp/products/use/food-laminate-film/">食品用ラミネートフィルム</a></li>
                    <li className="list"><a className="link transport-film" href="https://www.okr-ind.co.jp/products/use/transport-film/">業務用輸送フィルム</a></li>
                  </ul>
                </li>
              </ul>
            </aside>
          </aside>

          <section className="l-main l-float-l">
            <h1 className="m-ttl s-bdb l-mb0">食品包装用シュリンクフィルム</h1>
            <div className="m-idx-products-thumb">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
