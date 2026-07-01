import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { asLang } from '../i18n/lang';

export default function CategoryPage() {
  const { t, i18n } = useTranslation();
  const lang = asLang(i18n.language);

  useEffect(() => {
    document.title = `${t('category.title')} - ${t('common.products')} | 大倉工業株式会社`;
    document.body.className = `archive tax-products_cat term-display-film term-48 ${lang}`;
  }, [t, lang]);

  return (
    <main className="m-body products">
      <div className="m-pg-hdr products non-row food">
        <div className="inner">
          <p className="ttl">
            <a href="https://www.okr-ind.co.jp/products/" className="link-hdr">
              <span className="l-bl-all">{t('common.products')}</span>
              <span className="l-bl-all en"> PRODUCTS</span>
            </a>
          </p>
        </div>
      </div>

      <div className="m-cont post-484 products type-products status-publish has-post-thumbnail products_cat-food products_cat-display-film products_cat-architecture products_cat-integrated-packaging-film products_division-plastic-film products_division-packaging-bu ja">
        <div className="s-bg-bgry-pc l-mb1-sp">
          <div className="l-flex-sp-ms0">
            <ul className="m-idx-products-cat m-hidden-v">
              <li className="list"><a className="link industry-car" href="https://www.okr-ind.co.jp/products/use/industry-car/"><img className="img" src="https://www.okr-ind.co.jp/wp/wp-content/uploads/icon-industry-car-s.png" alt={t('header.productsItems.industryCar')} /><span className="ttl">{t('header.productsItems.industryCar')}</span></a></li>
              <li className="list"><a className="link food current" href="https://www.okr-ind.co.jp/products/use/food/"><img className="img" src="https://www.okr-ind.co.jp/wp/wp-content/uploads/icon-food-sanitary-s.png" alt={t('header.productsItems.food')} /><span className="ttl">{t('header.productsItems.food')}</span></a></li>
              <li className="list"><a className="link medical-drug" href="https://www.okr-ind.co.jp/products/use/medical-drug/"><img className="img" src="https://www.okr-ind.co.jp/wp/wp-content/uploads/icon-medical-drug-s.png" alt={t('header.productsItems.medicalDrug')} /><span className="ttl">{t('header.productsItems.medicalDrug')}</span></a></li>
              <li className="list"><a className="link packaging" href="https://www.okr-ind.co.jp/products/use/packaging/"><img className="img" src="https://www.okr-ind.co.jp/wp/wp-content/uploads/icon-packaging-s.png" alt={t('header.productsItems.packaging')} /><span className="ttl">{t('header.productsItems.packaging')}</span></a></li>
              <li className="list"><a className="link optical-electronics" href="https://www.okr-ind.co.jp/products/use/optical-electronics/"><img className="img" src="https://www.okr-ind.co.jp/wp/wp-content/uploads/icon-optical-electronics-s.png" alt={t('header.productsItems.opticalElectronics')} /><span className="ttl">{t('header.productsItems.opticalElectronics')}</span></a></li>
              <li className="list"><a className="link architecture" href="https://www.okr-ind.co.jp/products/use/architecture/"><img className="img" src="https://www.okr-ind.co.jp/wp/wp-content/uploads/icon-architecture-s.png" alt={t('header.productsItems.architecture')} /><span className="ttl">{t('header.productsItems.architecture')}</span></a></li>
              <li className="list"><a className="link agriculture" href="https://www.okr-ind.co.jp/products/use/agriculture/"><img className="img" src="https://www.okr-ind.co.jp/wp/wp-content/uploads/icon-agriculture-s.png" alt={t('header.productsItems.agriculture')} /><span className="ttl">{t('header.productsItems.agriculture')}</span></a></li>
              <li className="list"><a className="link other" href="https://www.okr-ind.co.jp/products/use/other/"><img className="img" src="https://www.okr-ind.co.jp/wp/wp-content/uploads/icon-livingware.png" alt={t('header.productsItems.other')} /><span className="ttl">{t('header.productsItems.other')}</span></a></li>
            </ul>
          </div>
        </div>

        <div className="l-flex">
          <div className="m-breadcrumb m-hidden-v">
            <ul className="inner-breadcrumb">
              <li className="list-breadcrumb"><a className="link-breadcrumb" href="https://www.okr-ind.co.jp/">{t('common.home')}</a></li>
              <li className="list-breadcrumb">{t('common.products')}</li>
              <li className="list-breadcrumb"><a className="link-breadcrumb" href="https://www.okr-ind.co.jp/products/use/food/">{t('category.food')}</a></li>
              <li className="list-breadcrumb">{t('category.title')}</li>
            </ul>
          </div>
        </div>

        <div className="l-flex-sp-ms0 l-mb3 l-clear l-pdt2-pc">
          <aside className="l-sub l-float-r l-ms-var-sp">
            <aside className="m-dropdown m-dropdown-side m-side">
              <ul className="m-nav-side">
                <li className="list l-only-pc"><a href="https://www.okr-ind.co.jp/products/" className="link parent">{t('common.products')}</a></li>
                <li className="drop">
                  <span className="inner-ttl">{t('category.food')}</span>
                  <ul className="body">
                    <li className="list"><a className="link food-film" href="https://www.okr-ind.co.jp/products/use/food-film/">{t('category.sidebarItems.foodFilm')}</a></li>
                    <li className="list"><a className="link meet-film" href="https://www.okr-ind.co.jp/products/use/meet-film/">{t('category.sidebarItems.meetFilm')}</a></li>
                    <li className="list"><a className="link display-film current" href="/products/use/display-film/">{t('category.sidebarItems.displayFilm')}</a></li>
                    <li className="list"><a className="link liquid-film" href="https://www.okr-ind.co.jp/products/use/liquid-film/">{t('category.sidebarItems.liquidFilm')}</a></li>
                    <li className="list"><a className="link food-laminate-film" href="https://www.okr-ind.co.jp/products/use/food-laminate-film/">{t('category.sidebarItems.foodLaminateFilm')}</a></li>
                    <li className="list"><a className="link transport-film" href="https://www.okr-ind.co.jp/products/use/transport-film/">{t('category.sidebarItems.transportFilm')}</a></li>
                  </ul>
                </li>
              </ul>
            </aside>
          </aside>

          <section className="l-main l-float-l">
            <h1 className="m-ttl s-bdb l-mb0">{t('category.title')}</h1>
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
