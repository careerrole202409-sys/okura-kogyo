import { Link } from 'react-router-dom';
import type { Product } from '../types/product';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <article className="ele">
      <Link to={`/products/${product.id}/`} className="img gallery-s">
        <img
          width={736}
          height={736}
          src={product.thumbnailImage}
          className="attachment-736x736 size-736x736 wp-post-image"
          alt=""
          decoding="async"
        />
      </Link>
      <div className="cont">
        <h2 className="ttl l-clear no-a">
          <Link to={`/products/${product.id}/`} className="link-ttl">
            {product.name}
          </Link>
          {product.lead && <span className="lead">{product.lead}</span>}
        </h2>
        <p className="t-fz13 l-mb15">{product.excerptText}</p>
        <p className="m-btn-slide-x round t-fz12">
          <Link to={`/products/${product.id}/`} className="link l-bl-sp">
            <span>詳しく見る</span>
          </Link>
        </p>
      </div>
    </article>
  );
}
