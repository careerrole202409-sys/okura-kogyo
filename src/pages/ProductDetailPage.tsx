import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id ?? '');

  useEffect(() => {
    if (!product) return;
    document.title = `${product.name} | 大倉工業株式会社`;
    document.body.className = product.bodyClass;
  }, [product]);

  if (!product) {
    return (
      <main className="m-body products">
        <div className="l-fix" style={{ padding: '4rem 0', textAlign: 'center' }}>
          <p>製品が見つかりません。</p>
          <Link to="/products/use/display-film/">一覧に戻る</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="m-body products">
      <div className="m-pg-hdr products non-row food single">
        <div className="inner">
          <p className="ttl">
            <a href="https://www.okr-ind.co.jp/products/" className="link-hdr">
              <span className="l-bl-all">製品情報</span>
              <span className="l-bl-all en"> PRODUCTS</span>
            </a>
          </p>
        </div>
      </div>

      <div className={`m-cont ${product.postClass}`}>
        <div className="l-fix">
          <div className="m-breadcrumb m-hidden-v">
            <ul className="inner-breadcrumb">
              <li className="list-breadcrumb"><a className="link-breadcrumb" href="https://www.okr-ind.co.jp/">ホーム</a></li>
              <li className="list-breadcrumb"><a className="link-breadcrumb" href="https://www.okr-ind.co.jp/products/">製品情報</a></li>
              <li className="list-breadcrumb">{product.name}</li>
            </ul>
          </div>
        </div>

        <div className="l-fix">
          <section className="m-sect m-single-products l-mb3 m-hidden-v">
            <div className="body">
              <div className="l-float-r cont product">
                <h1 className="m-ttl no-a">
                  {product.name}
                  {product.lead && <span className="lead">{product.lead}</span>}
                </h1>
              </div>

              <div className="img">
                <div className="main-img l-mb1">
                  <img
                    width={736}
                    height={736}
                    src={product.image}
                    className="attachment-full size-full wp-post-image"
                    alt={product.name}
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
              </div>

              <div className="cont product">
                <div
                  className="l-pdb1 s-bdb l-mb2"
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />

                {product.features.length > 0 && (
                  <section id="section1" className="m-sect m-cf-cont">
                    <h2 className="m-subttl">特長</h2>
                    <div className="cont-cf">
                      <ul>
                        {product.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  </section>
                )}

                <section id="section2" className="m-sect m-cf-cont">
                  <h2 className="m-subttl">{product.usesLabel}</h2>
                  <div
                    className="cont-cf"
                    dangerouslySetInnerHTML={{ __html: product.usesHtml }}
                  />
                </section>

                {product.materialHtml && (
                  <section id="section3" className="m-sect m-cf-cont">
                    <h2 className="m-subttl">材質</h2>
                    <div
                      className="cont-cf"
                      dangerouslySetInnerHTML={{ __html: product.materialHtml }}
                    />
                  </section>
                )}

                {product.specHtml && (
                  <section id="section4" className="m-sect m-cf-cont">
                    <h2 className="m-subttl">製品仕様</h2>
                    <div
                      className="cont-cf"
                      dangerouslySetInnerHTML={{ __html: product.specHtml }}
                    />
                  </section>
                )}

                {product.pdfUrl && (
                  <p className="m-btn-slide-x round pdf">
                    <a href={product.pdfUrl} target="_blank" rel="noreferrer" className="link">
                      <span>{product.pdfLabel}</span>
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
                <h5 className="ttl">この製品に関するお問い合わせはコチラ</h5>
                <p className="info l-mb1">
                  <span className="subttl">大倉工業株式会社 合成樹脂事業部</span>
                  <span className="num">Tel: 0877-56-1150</span>
                  <span>受付時間: 9:00-17:00 (平日のみ)</span>
                </p>
                <p className="m-btn-slide-x mid round fill full">
                  <a
                    href={`https://www.okr-ind.co.jp/contact/plastic-film-c/?item=${product.contactItem}`}
                    className="link"
                  >
                    <span className="t-les1">メールフォームはコチラ</span>
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
              お問い合わせ：0877-56-1150（代表）<br />
              電話受付時間：9:00〜17:00<br className="for-small" />
              （土日・祝日・その他会社の休日を除く）
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
