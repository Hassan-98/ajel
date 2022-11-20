import React from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./payments.scss";

const Payments: React.FC = () => {
  const { t: translate } = useTranslation();

  return (
    <section className="payments">
      <div className="container">
        <h3>{translate('HowTo/Payments/title')}</h3>
        <p className="description">{translate('HowTo/Payments/description')}</p>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 wow animate__fadeInUp" data-wow-duration="0.5s">
            <div className="service">
              <img src="/assets/images/credit-card.png" alt="icon image" />
              <h4>{translate('HowTo/Payments/payment1Title')}</h4>
              <p>{translate('HowTo/Payments/paymentsText')}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 wow animate__fadeInUp" data-wow-duration="0.5s">
            <div className="service">
              <img src="/assets/images/credit-card-2.png" alt="icon image" />
              <h4>{translate('HowTo/Payments/payment2Title')}</h4>
              <p>{translate('HowTo/Payments/paymentsText')}</p>
            </div>
          </div>
          <div className="col-lg-4 col-12 wow animate__fadeInUp" data-wow-duration="0.5s">
            <div className="service">
              <img src="/assets/images/credit-card-3.png" alt="icon image" />
              <h4>{translate('HowTo/Payments/payment3Title')}</h4>
              <p>{translate('HowTo/Payments/paymentsText')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payments