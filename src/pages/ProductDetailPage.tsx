import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getProductById } from '../data/products';
import { asLang } from '../i18n/lang';

export default function ProductDetailPage() {
  const { t, i18n } = useTranslation();
  const lang = asLang(i18n.language);
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id ?? '');

  useEffect(() => {
    if (!product) return;
    document.title = `${product.name[lang]} | 大倉工業株式会社`;
    document.body.className = product.bodyClass;
  }, [product, lang]);

  if (!product) {
    return (
      <main className="m-body products">
        <div className="l-fix" style={{ padding: '4rem 0', textAlign: 'center' }}>
          <p>{t('product.notFound')}</p>
          <Link to="/products/use/display-film/">{t('product.backToList')}</Link>
        </div>
      </main>
    );
  }

  const features = product.features[lang];

  return (
    <main className="m-body products">
      <div className="m-pg-hdr products non-row food single">
        <div className="inner">
          <p className="ttl">
            <a href="https://www.okr-ind.co.jp/products/" className="link-hdr">
              <span className="l-bl-all">{t('common.products')}</span>
              <span className="l-bl-all en"> PRODUCTS</span>
            </a>
          </p>
        </div>
      </div>

      <div className={`m-cont ${product.postClass}`}>
        <div className="l-fix">
          <div className="m-breadcrumb m-hidden-v">
            <ul className="inner-breadcrumb">
              <li className="list-breadcrumb"><a className="link-breadcrumb" href="https://www.okr-ind.co.jp/">{t('common.home')}</a></li>
              <li className="list-breadcrumb"><a className="link-breadcrumb" href="https://www.okr-ind.co.jp/products/">{t('common.products')}</a></li>
              <li className="list-breadcrumb">{product.name[lang]}</li>
            </ul>
          </div>
        </div>

        <div className="l-fix">
          <section className="m-sect m-single-products l-mb3 m-hidden-v">
            <div className="body">
              <div className="l-float-r cont product">
                <h1 className="m-ttl no-a">
                  {product.name[lang]}
                  {product.lead[lang] && <span className="lead">{product.lead[lang]}</span>}
                </h1>
              </div>

              <div className="img">
                <div className="main-img l-mb1">
                  <img
                    width={736}
                    height={736}
                    src={product.image}
                    className="attachment-full size-full wp-post-image"
                    alt={product.name[lang]}
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
              </div>

              <div className="cont product">
                <div
                  className="l-pdb1 s-bdb l-mb2"
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml[lang] }}
                />

                {features.length > 0 && (
                  <section id="section1" className="m-sect m-cf-cont">
                    <h2 className="m-subttl">{t('product.features')}</h2>
                    <div className="cont-cf">
                      <ul>
                        {features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  </section>
                )}

                <section id="section2" className="m-sect m-cf-cont">
                  <h2 className="m-subttl">{product.usesLabel[lang]}</h2>
                  <div
                    className="cont-cf"
                    dangerouslySetInnerHTML={{ __html: product.usesHtml[lang] }}
                  />
                </section>

                {product.materialHtml && (
                  <section id="section3" className="m-sect m-cf-cont">
                    <h2 className="m-subttl">{t('product.material')}</h2>
                    <div
                      className="cont-cf"
                      dangerouslySetInnerHTML={{ __html: product.materialHtml[lang] }}
                    />
                  </section>
                )}

                {product.specHtml && (
                  <section id="section4" className="m-sect m-cf-cont">
                    <h2 className="m-subttl">{t('product.spec')}</h2>
                    <div
                      className="cont-cf"
                      dangerouslySetInnerHTML={{ __html: product.specHtml[lang] }}
                    />
                  </section>
                )}

                {product.pdfUrl && product.pdfLabel && (
                  <p className="m-btn-slide-x round pdf">
                    <a href={product.pdfUrl} target="_blank" rel="noreferrer" className="link">
                      <span>{product.pdfLabel[lang]}</span>
                    </a>
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>

        <section id="contact" className="s-bg-bgry l-pdt15 l-pdb15">
          <div className="l-fix">
            <div className="m-division">
              <div className="body">
                <h5 className="ttl">{t('product.contactHeading')}</h5>
                <p className="info l-mb1">
                  <span className="subttl">{t('product.contactDept')}</span>
                  <span className="num">Tel: 0877-56-1150</span>
                  <span>{t('product.contactHours')}</span>
                </p>
                <p className="m-btn-slide-x mid round fill full">
                  <a
                    href={`https://www.okr-ind.co.jp/contact/plastic-film-c/?item=${product.contactItem}`}
                    className="link"
                  >
                    <span className="t-les1">{t('product.mailForm')}</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="l-fix">
          <p className="m-btn-contact">
            <a
              href={`https://www.okr-ind.co.jp/contact/plastic-film-c/?item=${product.contactItem}`}
              className="link-contact"
            >
              {t('product.bottomContactLine1')}<br />
              {t('product.bottomContactLine2')}<br className="for-small" />
              {t('product.bottomContactLine3')}
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
