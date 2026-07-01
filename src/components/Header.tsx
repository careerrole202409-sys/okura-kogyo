import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { asLang } from '../i18n/lang';

// テーマCSSが言語別ナビ調整に使うクラス（英語=en-US, 中国語=zh-CN）に合わせる
const GNAV_LANG_CLASS: Record<string, string> = { en: 'en-US', zh: 'zh-CN', ko: 'ko' };

export default function Header() {
  const { t, i18n } = useTranslation();
  const gnavLangClass = GNAV_LANG_CLASS[asLang(i18n.language)] ?? '';
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
            <ul className={`inner-hdr m-gnav ${gnavLangClass}`.trim()}>
              <li data-role="drop" className="list drop">
                <a href="https://www.okr-ind.co.jp/" data-role="drop" className="link-g inner-ttl">{t('header.home')}</a>
              </li>
              <li data-role="" className="list drop company">
                <a href="https://www.okr-ind.co.jp/company/" className="link-g inner-ttl">{t('header.company')}</a>
                <ul className="body">
                  <li className="list"><a href="https://www.okr-ind.co.jp/company/greeting/" className="s-arrow-r">{t('header.companyItems.greeting')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/company/philosophy/" className="s-arrow-r">{t('header.companyItems.philosophy')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/company/profile/" className="s-arrow-r">{t('header.companyItems.profile')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/company/divisions/" className="s-arrow-r">{t('header.companyItems.divisions')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/company/organization/" className="s-arrow-r">{t('header.companyItems.organization')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/company/history/" className="s-arrow-r">{t('header.companyItems.history')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/company/officer/" className="s-arrow-r">{t('header.companyItems.officer')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/company/locations/" className="s-arrow-r">{t('header.companyItems.locations')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/company/group/" className="s-arrow-r">{t('header.companyItems.group')}</a></li>
                </ul>
              </li>
              <li data-role="" className="list drop products">
                <a href="https://www.okr-ind.co.jp/products/" className="link-g inner-ttl current">{t('header.products')}</a>
                <ul className="body">
                  <li className="list"><a href="https://www.okr-ind.co.jp/products/use/industry-car/" className="s-arrow-r">{t('header.productsItems.industryCar')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/products/use/food/" className="s-arrow-r">{t('header.productsItems.food')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/products/use/medical-drug/" className="s-arrow-r">{t('header.productsItems.medicalDrug')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/products/use/packaging/" className="s-arrow-r">{t('header.productsItems.packaging')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/products/use/optical-electronics/" className="s-arrow-r">{t('header.productsItems.opticalElectronics')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/products/use/architecture/" className="s-arrow-r">{t('header.productsItems.architecture')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/products/use/agriculture/" className="s-arrow-r">{t('header.productsItems.agriculture')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/products/use/other/" className="s-arrow-r">{t('header.productsItems.other')}</a></li>
                </ul>
              </li>
              <li data-role="" className="list drop rd-center">
                <a href="https://www.okr-ind.co.jp/rd-center/" className="link-g inner-ttl">{t('header.rd')}</a>
                <ul className="body">
                  <li className="list"><a href="https://www.okr-ind.co.jp/rd-center/policies/" className="s-arrow-r">{t('header.rdItems.policies')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/rd-center/core-technology-facility/" className="s-arrow-r">{t('header.rdItems.coreTech')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/rd-center/developed-products/" className="s-arrow-r">{t('header.rdItems.developedProducts')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/rd-center/feature/" className="s-arrow-r">{t('header.rdItems.perovskite')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/rd-center/plant-extract/" className="s-arrow-r">{t('header.rdItems.plantExtract')}</a></li>
                </ul>
              </li>
              <li data-role="" className="list drop ir">
                <a href="https://www.okr-ind.co.jp/ir/" className="link-g inner-ttl">{t('header.ir')}</a>
                <ul className="body">
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/greeting-ir/" className="s-arrow-r">{t('header.irItems.greeting')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/earning/" className="s-arrow-r">{t('header.irItems.earning')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/supplemental-doc/" className="s-arrow-r">{t('header.irItems.supplementalDoc')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/securitie/" className="s-arrow-r">{t('header.irItems.securitie')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/highlight/" className="s-arrow-r">{t('header.irItems.highlight')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/report/" className="s-arrow-r">{t('header.irItems.report')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/ir-vision/" className="s-arrow-r">{t('header.irItems.irVision')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/ir-plan/" className="s-arrow-r">{t('header.irItems.irPlan')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/meeting/" className="s-arrow-r">{t('header.irItems.meeting')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/procedure/" className="s-arrow-r">{t('header.irItems.procedure')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/public-notice/" className="s-arrow-r">{t('header.irItems.publicNotice')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/condition/" className="s-arrow-r">{t('header.irItems.condition')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/shareholder/" className="s-arrow-r">{t('header.irItems.shareholder')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/calendar/" className="s-arrow-r">{t('header.irItems.calendar')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/ir/ir-information/" className="s-arrow-r">{t('header.irItems.irInformation')}</a></li>
                </ul>
              </li>
              <li data-role="" className="list drop csr">
                <a href="https://www.okr-ind.co.jp/sustainability/" className="link-g inner-ttl">{t('header.sustainability')}</a>
                <ul className="body">
                  <li className="list"><a href="https://www.okr-ind.co.jp/sustainability/s-message/" className="s-arrow-r">{t('header.sustainabilityItems.message')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/sustainability/s-about/" className="s-arrow-r">{t('header.sustainabilityItems.about')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/sustainability/s-environment/" className="s-arrow-r">{t('header.sustainabilityItems.environment')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/sustainability/s-social/" className="s-arrow-r">{t('header.sustainabilityItems.social')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/sustainability/s-governance/" className="s-arrow-r">{t('header.sustainabilityItems.governance')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/sustainability/data/" className="s-arrow-r">{t('header.sustainabilityItems.data')}</a></li>
                  <li className="list"><a href="https://www.okr-ind.co.jp/sustainability/okura-report/" className="s-arrow-r">{t('header.sustainabilityItems.report')}</a></li>
                </ul>
              </li>
              <li data-role="drop" className="list drop ad">
                <a href="https://www.okr-ind.co.jp/company/ad/" className="link-g inner-ttl">{t('header.ad')}</a>
              </li>
              <li data-role="drop" className="list drop topics">
                <a href="https://www.okr-ind.co.jp/topics/" className="link-g inner-ttl">{t('header.topics')}</a>
              </li>
              <li data-role="drop" className="list drop contact">
                <a href="https://www.okr-ind.co.jp/contact/" className="link-g inner-ttl">{t('header.contact')}</a>
              </li>
            </ul>
          </div>
          <div className="inner-hdr l-por">
            <ul className="m-subnav login"></ul>
            <div className="hdr-right-group">
              <nav className="langnav">
                <LanguageSwitcher />
              </nav>
              <ul className="m-subnav">
                <li className="list"><a href="https://www.okr-ind.co.jp/news/" className="link">{t('header.subnav.news')}</a></li>
                <li className="list"><a href="https://www.okr-ind.co.jp/catalog/" className="link">{t('header.subnav.catalog')}</a></li>
                <li className="list"><a href="https://www.okr-ind.co.jp/link/" className="link" target="_blank" rel="noreferrer">{t('header.subnav.dedicated')}</a></li>
                <li className="list"><a href="https://www.okr-ind.co.jp/recruit/" className="link" target="_blank" rel="noreferrer">{t('header.subnav.recruit')}</a></li>
                <li className="list search"><span className="link"><i></i></span></li>
              </ul>
            </div>
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
