import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Product } from '../types/product';
import { asLang } from '../i18n/lang';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { t, i18n } = useTranslation();
  const lang = asLang(i18n.language);
  const to = `/products/${product.id}/`;

  // externalUrl 指定時は旧サイトへの外部リンク、未指定時はサイト内ルート
  const cardLink = (className: string, children: ReactNode) =>
    product.externalUrl ? (
      <a href={product.externalUrl} className={className}>
        {children}
      </a>
    ) : (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <article className="ele">
      {cardLink(
        'img gallery-s',
        <img
          width={736}
          height={736}
          src={product.thumbnailImage}
          className="attachment-736x736 size-736x736 wp-post-image"
          alt=""
          decoding="async"
        />
      )}
      <div className="cont">
        <h2 className="ttl l-clear no-a">
          {cardLink('link-ttl', product.name[lang])}
          {product.lead[lang] && <span className="lead">{product.lead[lang]}</span>}
        </h2>
        <p className="t-fz13 l-mb15">{product.excerptText[lang]}</p>
        <p className="m-btn-slide-x round t-fz12">
          {cardLink('link l-bl-sp', <span>{t('card.detail')}</span>)}
        </p>
      </div>
    </article>
  );
}
