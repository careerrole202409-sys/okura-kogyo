import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductCard from '../components/ProductCard';
import { asLang } from '../i18n/lang';
import type { CategoryDef } from '../data/categories';

interface Props {
  category: CategoryDef;
}

// 上部の8カテゴリアイコン（固定）。current はジャンル（category.genre.iconSlug）で決まる。
const CATEGORY_ICONS: Array<{ slug: string; icon: string; key: string }> = [
  { slug: 'industry-car', icon: 'icon-industry-car-s.png', key: 'header.productsItems.industryCar' },
  { slug: 'food', icon: 'icon-food-sanitary-s.png', key: 'header.productsItems.food' },
  { slug: 'medical-drug', icon: 'icon-medical-drug-s.png', key: 'header.productsItems.medicalDrug' },
  { slug: 'packaging', icon: 'icon-packaging-s.png', key: 'header.productsItems.packaging' },
  { slug: 'optical-electronics', icon: 'icon-optical-electronics-s.png', key: 'header.productsItems.opticalElectronics' },
  { slug: 'architecture', icon: 'icon-architecture-s.png', key: 'header.productsItems.architecture' },
  { slug: 'agriculture', icon: 'icon-agriculture-s.png', key: 'header.productsItems.agriculture' },
  { slug: 'other', icon: 'icon-livingware.png', key: 'header.productsItems.other' },
];

export default function CategoryPage({ category }: Props) {
  const { t, i18n } = useTranslation();
  const lang = asLang(i18n.language);
  const title = t(category.titleKey);
  const genre = category.genre;
  const genreLabel = t(genre.labelKey);

  useEffect(() => {
    document.title = `${title} - ${t('common.products')} | 大倉工業株式会社`;
    document.body.className = `archive tax-products_cat ${category.term} ${lang}`;
  }, [t, lang, title, category.term]);

  return (
    <main className="m-body products">
      <div className={`m-pg-hdr products non-row ${genre.iconSlug}`}>
        <div className="inner">
          <p className="ttl">
            <a href="https://www.okr-ind.co.jp/products/" className="link-hdr">
              <span className="l-bl-all">{t('common.products')}</span>
              <span className="l-bl-all en"> PRODUCTS</span>
            </a>
          </p>
        </div>
      </div>

      <div className={`m-cont ${category.contClass}`}>
        <div className="s-bg-bgry-pc l-mb1-sp">
          <div className="l-flex-sp-ms0">
            <ul className="m-idx-products-cat m-hidden-v">
              {CATEGORY_ICONS.map((c) => {
                const active = c.slug === genre.iconSlug;
                const label = t(c.key);
                return (
                  <li className="list" key={c.slug}>
                    <a className={`link ${c.slug}${active ? ' current' : ''}`} href={`https://www.okr-ind.co.jp/products/use/${c.slug}/`}>
                      <img className="img" src={`https://www.okr-ind.co.jp/wp/wp-content/uploads/${c.icon}`} alt={label} />
                      <span className="ttl">{label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="l-flex">
          <div className="m-breadcrumb m-hidden-v">
            <ul className="inner-breadcrumb">
              <li className="list-breadcrumb"><a className="link-breadcrumb" href="https://www.okr-ind.co.jp/">{t('common.home')}</a></li>
              <li className="list-breadcrumb">{t('common.products')}</li>
              <li className="list-breadcrumb"><a className="link-breadcrumb" href={genre.href}>{genreLabel}</a></li>
              <li className="list-breadcrumb">{title}</li>
            </ul>
          </div>
        </div>

        <div className="l-flex-sp-ms0 l-mb3 l-clear l-pdt2-pc">
          <aside className="l-sub l-float-r l-ms-var-sp">
            <aside className="m-dropdown m-dropdown-side m-side">
              <ul className="m-nav-side">
                <li className="list l-only-pc"><a href="https://www.okr-ind.co.jp/products/" className="link parent">{t('common.products')}</a></li>
                <li className="drop">
                  <span className="inner-ttl">{genreLabel}</span>
                  <ul className="body">
                    {genre.sidebarItems.map((item) => {
                      const active = item.slug === category.slug;
                      const className = `link ${item.slug}${active ? ' current' : ''}`;
                      return (
                        <li className="list" key={item.slug}>
                          {item.internal ? (
                            <Link className={className} to={`/products/use/${item.slug}/`}>{t(item.key)}</Link>
                          ) : (
                            <a className={className} href={item.href}>{t(item.key)}</a>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </aside>
          </aside>

          <section className="l-main l-float-l">
            <h1 className="m-ttl s-bdb l-mb0">{title}</h1>
            <div className="m-idx-products-thumb">
              {category.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
