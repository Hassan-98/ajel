import React from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./joinus.scss";

const JoinUs: React.FC = () => {
  const { t: translate } = useTranslation();

  return (
    <section className="Join-Us">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            <div className="info">
              <h3 className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('Home/JoinUs/title')}</h3>
              <p className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('Home/JoinUs/description')}</p>
              <div className="actions">
                <button className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('Home/JoinUs/startNow')}</button>
                <button className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('Home/JoinUs/contact')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinUs