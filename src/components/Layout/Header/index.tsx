import React from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./Header.scss";

const Header: React.FC = () => {
  const { t: translate } = useTranslation();

  return (
    <header className="main-header">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="info">
              <h3>{translate('header/welcome')}</h3>
              <h1 className="wow animate__fadeInDown" data-wow-duration="0.5s">{translate('header/title')}</h1>
              <p className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('header/text')}</p>
              <div className="actions">
                <button className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('header/startNow')}</button>
                <button className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('header/contact')}</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="image">
              <img src="/assets/images/What.png" alt="header image" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header