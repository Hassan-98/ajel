import React from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./features.scss";

const Features: React.FC = () => {
  const { t: translate } = useTranslation();

  return (
    <section className="features">
      <div className="container">
        <h3>{translate('Features/Features/title')}</h3>
        <p className="description">{translate('Features/Features/description')}</p>
        <div className="row g-5">
          <div className="col-md-6 col-12 wow animate__fadeInRight" data-wow-duration="0.5s">
            <div className="feature">
              <div className="details">
                <h4>{translate('Features/Features/feature1Title')}</h4>
                <p>{translate('Features/Features/featureText')}</p>
              </div>
              <div className="icon">
                <img src="/assets/images/secure-payment.png" alt="icon image" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 wow animate__fadeInLeft" data-wow-duration="0.5s">
            <div className="feature right">
              <div className="icon">
                <img src="/assets/images/instant.png" alt="icon image" />
              </div>
              <div className="details">
                <h4>{translate('Features/Features/feature2Title')}</h4>
                <p>{translate('Features/Features/featureText')}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 wow animate__fadeInRight" data-wow-duration="0.5s">
            <div className="feature">
              <div className="details">
                <h4>{translate('Features/Features/feature3Title')}</h4>
                <p>{translate('Features/Features/featureText')}</p>
              </div>
              <div className="icon">
                <img src="/assets/images/currency.png" alt="icon image" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 wow animate__fadeInLeft" data-wow-duration="0.5s">
            <div className="feature right">
              <div className="icon">
                <img src="/assets/images/encryption.png" alt="icon image" />
              </div>
              <div className="details">
                <h4>{translate('Features/Features/feature4Title')}</h4>
                <p>{translate('Features/Features/featureText')}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 wow animate__fadeInRight" data-wow-duration="0.5s">
            <div className="feature">
              <div className="details">
                <h4>{translate('Features/Features/feature5Title')}</h4>
                <p>{translate('Features/Features/featureText')}</p>
              </div>
              <div className="icon">
                <img src="/assets/images/save-money.png" alt="icon image" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 wow animate__fadeInLeft" data-wow-duration="0.5s">
            <div className="feature right">
              <div className="icon">
                <img src="/assets/images/money.png" alt="icon image" />
              </div>
              <div className="details">
                <h4>{translate('Features/Features/feature6Title')}</h4>
                <p>{translate('Features/Features/featureText')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features