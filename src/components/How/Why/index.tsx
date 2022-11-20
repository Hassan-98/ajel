import React from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./why.scss";

const Why: React.FC = () => {
  const { t: translate } = useTranslation();

  return (
    <section className="why">
      <div className="container">
        <div className="row justify-content-center g-5">
          <div className="col-lg-5 col-md-6 col-12 wow animate__fadeInUp" data-wow-duration="0.6s">
            <div className="image">
              <img src="/assets/images/payment-service.png" alt="section image" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="details">
              <h2 className="wow animate__fadeInUp" data-wow-duration="0.6s">{translate('HowTo/Why/title')}</h2>
              <p className="wow animate__fadeInUp" data-wow-duration="0.6s">{translate('HowTo/Why/description')}</p>
              <div className="list wow animate__fadeInUp" data-wow-duration="0.6s">
                <ul>
                  <li>
                    <i className="fa-solid fa-shield-check"></i>
                    {translate('HowTo/Why/item1')}
                  </li>
                  <li>
                    <i className="fa-solid fa-shield-check"></i>
                    {translate('HowTo/Why/item2')}
                  </li>
                  <li>
                    <i className="fa-solid fa-shield-check"></i>
                    {translate('HowTo/Why/item3')}
                  </li>
                </ul>
              </div>
              <button className="wow animate__fadeInUp" data-wow-duration="0.6s">{translate('HowTo/Why/btn')}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why