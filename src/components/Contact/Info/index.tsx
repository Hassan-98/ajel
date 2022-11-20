import React from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./info.scss";

const Grow: React.FC = () => {
  const { t: translate } = useTranslation();

  return (
    <section className="info-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 wow animate__fadeInUp" data-wow-duration="0.5s">
            <div className="info-box">
              <i className="fa-light fa-phone-office"></i>
              <p className="info-item">{translate('Contact/Info/Phone')}</p>
              <p className="details">{translate('Contact/Info/PhoneDetails')}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 wow animate__fadeInUp" data-wow-duration="0.5s">
            <div className="info-box">
              <i className="fa-light fa-envelope"></i>
              <p className="info-item">{translate('Contact/Info/Email')}</p>
              <p className="details">{translate('Contact/Info/EmailDetails')}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 wow animate__fadeInUp" data-wow-duration="0.5s">
            <div className="info-box">
              <i className="fa-light fa-location-dot"></i>
              <p className="info-item">{translate('Contact/Info/Address')}</p>
              <p className="details">{translate('Contact/Info/AddressDetails')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Grow