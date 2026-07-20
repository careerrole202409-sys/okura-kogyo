import type { Product } from '../types/product';
import {
  displayFilmProducts,
  foodFilmProducts,
  liquidFilmProducts,
  selfAdhesiveProtectionProducts,
  carProducts,
} from './products';

// サイドバー1項目。display 済みのサイト内ページは internal、それ以外は本家への外部リンク。
export interface SidebarItem {
  slug: string;
  key: string; // i18n キー
  internal?: boolean; // サイト内ルート（/products/use/{slug}/）
  href?: string; // 外部リンク先
}

// 上位ジャンル（食品 / 光学・情報電子 …）。カテゴリアイコンの current 位置・
// パンくずの中間項目・サイドバーの見出しと項目を決める。
export interface Genre {
  iconSlug: string; // 8つのカテゴリアイコンのうち current にするもの
  labelKey: string; // パンくず中間 & サイドバー見出しの i18n キー
  href: string; // ジャンルページ（本家）への外部リンク
  sidebarItems: SidebarItem[];
}

// 製品カテゴリ（一覧ページ）の差分定義。共通シェルは CategoryPage が描画し、
// ここで「ジャンル・タイトル・body class の term・m-cont のクラス・掲載商品」を差し替える。
export interface CategoryDef {
  slug: string; // /products/use/{slug}/
  term: string; // body class の term 部分
  contClass: string; // m-cont の投稿クラス
  titleKey: string; // h1 / パンくず末尾 / document.title に使う i18n キー
  genre: Genre;
  products: Product[];
}

// ===== ジャンル定義 =====
export const foodGenre: Genre = {
  iconSlug: 'food',
  labelKey: 'header.productsItems.food',
  href: 'https://www.okr-ind.co.jp/products/use/food/',
  sidebarItems: [
    { slug: 'food-film', key: 'category.sidebarItems.foodFilm', internal: true },
    { slug: 'meet-film', key: 'category.sidebarItems.meetFilm', href: 'https://www.okr-ind.co.jp/products/use/meet-film/' },
    { slug: 'display-film', key: 'category.sidebarItems.displayFilm', internal: true },
    { slug: 'liquid-film', key: 'category.sidebarItems.liquidFilm', internal: true },
    { slug: 'food-laminate-film', key: 'category.sidebarItems.foodLaminateFilm', href: 'https://www.okr-ind.co.jp/products/use/food-laminate-film/' },
    { slug: 'transport-film', key: 'category.sidebarItems.transportFilm', href: 'https://www.okr-ind.co.jp/products/use/transport-film/' },
  ],
};

export const opticalElectronicsGenre: Genre = {
  iconSlug: 'optical-electronics',
  labelKey: 'header.productsItems.opticalElectronics',
  href: 'https://www.okr-ind.co.jp/products/use/optical-electronics/',
  sidebarItems: [
    { slug: 'retardation-film', key: 'category.opticalSidebarItems.retardationFilm', href: 'https://www.okr-ind.co.jp/products/use/retardation-film/' },
    { slug: 'self-adhesive-protection', key: 'category.opticalSidebarItems.selfAdhesiveProtection', internal: true },
    { slug: 'on-demand-manufacturing', key: 'category.opticalSidebarItems.onDemandManufacturing', href: 'https://www.okr-ind.co.jp/products/use/on-demand-manufacturing/' },
    { slug: 'oa-equipment', key: 'category.opticalSidebarItems.oaEquipment', href: 'https://www.okr-ind.co.jp/products/use/oa-equipment/' },
    { slug: 'parts-adhesion', key: 'category.opticalSidebarItems.partsAdhesion', href: 'https://www.okr-ind.co.jp/products/use/parts-adhesion/' },
    { slug: '5g-antenna', key: 'category.opticalSidebarItems.fiveGAntenna', href: 'https://www.okr-ind.co.jp/products/use/5g-antenna/' },
  ],
};

export const industryCarGenre: Genre = {
  iconSlug: 'industry-car',
  labelKey: 'header.productsItems.industryCar',
  href: 'https://www.okr-ind.co.jp/products/use/industry-car/',
  sidebarItems: [
    { slug: 'transparent-electrode-film', key: 'category.industryCarSidebarItems.transparentElectrodeFilm', href: 'https://www.okr-ind.co.jp/products/use/transparent-electrode-film/' },
    { slug: 'car', key: 'category.industryCarSidebarItems.car', internal: true },
    { slug: 'drumcan-film-car', key: 'category.industryCarSidebarItems.drumcanFilmCar', href: 'https://www.okr-ind.co.jp/products/use/drumcan-film-car/' },
    { slug: 'metal-adhesive', key: 'category.industryCarSidebarItems.metalAdhesive', href: 'https://www.okr-ind.co.jp/products/use/metal-adhesive/' },
    { slug: 'heat-insulating-film', key: 'category.industryCarSidebarItems.heatInsulatingFilm', href: 'https://www.okr-ind.co.jp/products/use/heat-insulating-film/' },
  ],
};

// ===== カテゴリ定義 =====
export const displayFilmCategory: CategoryDef = {
  slug: 'display-film',
  term: 'term-display-film term-48',
  contClass:
    'post-484 products type-products status-publish has-post-thumbnail products_cat-food products_cat-display-film products_cat-architecture products_cat-integrated-packaging-film products_division-plastic-film products_division-packaging-bu ja',
  titleKey: 'category.sidebarItems.displayFilm',
  genre: foodGenre,
  products: displayFilmProducts,
};

export const foodFilmCategory: CategoryDef = {
  slug: 'food-film',
  term: 'term-food-film term-49',
  contClass:
    'post-485 products type-products status-publish has-post-thumbnail products_cat-food products_cat-food-film products_division-plastic-film products_division-packaging-bu ja',
  titleKey: 'category.sidebarItems.foodFilm',
  genre: foodGenre,
  products: foodFilmProducts,
};

export const liquidFilmCategory: CategoryDef = {
  slug: 'liquid-film',
  term: 'term-liquid-film term-51',
  contClass:
    'post-1537 products type-products status-publish has-post-thumbnail products_cat-liquid-film products_cat-packaging products_cat-readymade products_division-plastic-film products_division-packaging-bu ja',
  titleKey: 'category.sidebarItems.liquidFilm',
  genre: foodGenre,
  products: liquidFilmProducts,
};

export const selfAdhesiveProtectionCategory: CategoryDef = {
  slug: 'self-adhesive-protection',
  term: 'term-self-adhesive-protection term-62',
  contClass:
    'post-410 products type-products status-publish has-post-thumbnail products_cat-optical-electronics products_cat-self-adhesive-protection products_division-plastic-film products_division-industrial-functional-materials-bu ja',
  titleKey: 'category.opticalSidebarItems.selfAdhesiveProtection',
  genre: opticalElectronicsGenre,
  products: selfAdhesiveProtectionProducts,
};

export const carCategory: CategoryDef = {
  slug: 'car',
  term: 'term-car term-42',
  contClass:
    'post-488 products type-products status-publish has-post-thumbnail products_cat-industry-car products_cat-car products_cat-medical-drug products_cat-dressing-film products_cat-packaging products_cat-packing-base-film products_division-new-materials products_division-nm-group1-bu ja',
  titleKey: 'category.industryCarSidebarItems.car',
  genre: industryCarGenre,
  products: carProducts,
};
