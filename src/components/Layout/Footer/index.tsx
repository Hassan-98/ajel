import React from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./Footer.scss";

const Footer: React.FC = () => {
  const { t: translate } = useTranslation();

  return (
    <footer>
      <div className="container">
        <div className="row gy-md-4">
          <div className="col-lg-3 col-md-6 col-12 d-none d-md-block">
            <h4>{translate('footer/links')}</h4>
            <ul>
              <li>{translate('footer/devs')}</li>
              <li>{translate('footer/about')}</li>
              <li>{translate('footer/contact')}</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-12 d-none d-md-block">
            <h4>{translate('footer/help')}</h4>
            <ul>
              <li>{translate('footer/privacy')}</li>
              <li>{translate('footer/polices')}</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-12 d-none d-md-block">
            <h4>{translate('footer/contact')}</h4>
            <ul>
              <li>
                <i className="fa-regular fa-envelope"></i>
                support@example.com
              </li>
              <li>
                <i className="fa-regular fa-phone-office"></i>
                +966 0142222555
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <img src="/assets/images/AjelLogo.png" alt="logo" className="d-block d-md-none" />
            <h4>{translate('footer/follow')}</h4>
            <p className="description">{translate('footer/followText')}</p>
            <div className="social">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">
        {translate('footer/copyrights')}
      </p>
    </footer>
  )
}

export default Footer