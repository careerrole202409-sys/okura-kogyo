import type { Product } from '../types/product';
import { displayFilmProducts, foodFilmProducts } from './products';

// 製品カテゴリ（一覧ページ）の差分定義。共通シェルは CategoryPage が描画し、
// ここで「タイトル・body class の term・m-cont のクラス・掲載商品」だけを差し替える。
export interface CategoryDef {
  slug: string; // /products/use/{slug}/
  term: string; // body class の term 部分
  contClass: string; // m-cont の投稿クラス
  titleKey: string; // h1 / パンくず / document.title に使う i18n キー
  products: Product[];
}

export const displayFilmCategory: CategoryDef = {
  slug: 'display-film',
  term: 'term-display-film term-48',
  contClass:
    'post-484 products type-products status-publish has-post-thumbnail products_cat-food products_cat-display-film products_cat-architecture products_cat-integrated-packaging-film products_division-plastic-film products_division-packaging-bu ja',
  titleKey: 'category.sidebarItems.displayFilm',
  products: displayFilmProducts,
};

export const foodFilmCategory: CategoryDef = {
  slug: 'food-film',
  term: 'term-food-film term-49',
  contClass:
    'post-485 products type-products status-publish has-post-thumbnail products_cat-food products_cat-food-film products_division-plastic-film products_division-packaging-bu ja',
  titleKey: 'category.sidebarItems.foodFilm',
  products: foodFilmProducts,
};
