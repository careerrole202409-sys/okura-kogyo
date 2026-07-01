import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="m-ftr products">
      <div className="inner">
        <div className="left">
          <img
            src="https://www.okr-ind.co.jp/wp/wp-content/themes/okr-ind/images/common/logo-full.png"
            alt="マーク"
            className="ttl"
          />
          <p className="address l-only-pc">{t('footer.address')}</p>
          <p className="m-btn-pg-top"><a href="#container">pagetop</a></p>
        </div>
        <div className="right">
          <ul className="m-fnav">
            <li className="list"><a href="https://www.okr-ind.co.jp/company/" className="link">{t('header.company')}</a></li>
            <li className="list"><a href="https://www.okr-ind.co.jp/products/" className="link current">{t('header.products')}</a></li>
            <li className="list"><a href="https://www.okr-ind.co.jp/rd-center/" className="link">{t('header.rd')}</a></li>
            <li className="list"><a href="https://www.okr-ind.co.jp/ir/" className="link">{t('header.ir')}</a></li>
            <li className="list"><a href="https://www.okr-ind.co.jp/sustainability/" className="link">{t('header.sustainability')}</a></li>
            <li className="list"><a href="https://www.okr-ind.co.jp/topics/" className="link">{t('header.topics')}</a></li>
            <li className="list"><a href="https://www.okr-ind.co.jp/contact/" className="link">{t('header.contact')}</a></li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="inner">
          <ul className="m-bnav l-float-l">
            <li className="list news"><a href="https://www.okr-ind.co.jp/news/" className="link">{t('header.subnav.news')}</a></li>
            <li className="list catalog"><a href="https://www.okr-ind.co.jp/catalog/" className="link">{t('header.subnav.catalog')}</a></li>
            <li className="list"><a href="https://www.okr-ind.co.jp/link/" className="link" target="_blank" rel="noreferrer">{t('header.subnav.dedicated')}</a></li>
            <li className="list"><a href="https://www.okr-ind.co.jp/recruit/" className="link" target="_blank" rel="noreferrer">{t('header.subnav.recruit')}</a></li>
            <li className="list privacy"><a href="https://www.okr-ind.co.jp/privacy/" className="link">{t('footer.privacy')}</a></li>
          </ul>
          <div className="l-float-r">
            <p className="copyright">{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
