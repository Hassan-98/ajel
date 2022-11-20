import React from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./form.scss";

const Grow: React.FC = () => {
  const { i18n, t: translate } = useTranslation();

  return (
    <section className="form">
      <div className="container">
        <div className="row justify-content-center gx-0">
          <div className="col-lg-8 col-md-7 col-12 wow animate__fadeInUp" data-wow-duration="0.5s">
            <div className="form-box">
              <h2>{translate('Contact/Form/title')}</h2>
              <p className="details">{translate('Contact/Form/text')}</p>
              <form>
                <div className="row gy-3">
                  <div className="col-lg-6 col-12">
                    <label htmlFor="firstName" className="form-label">{translate('Contact/Form/firstName')}</label>
                    <input type="text" id="firstName" className="form-control" placeholder={translate('Contact/Form/firstName') || ''} aria-label="First name" />
                  </div>
                  <div className="col-lg-6 col-12">
                    <label htmlFor="lastName" className="form-label">{translate('Contact/Form/lastName')}</label>
                    <input type="text" id="lastName" className="form-control" placeholder={translate('Contact/Form/lastName') || ''} aria-label="Last name" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">{translate('Contact/Form/email')}</label>
                    <input type="email" id="email" className="form-control" placeholder={translate('Contact/Form/email') || ''} aria-label="Email Addrerss" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">{translate('Contact/Form/message')}</label>
                    <textarea className="form-control" id="message" placeholder={translate('Contact/Form/message') || ''}></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-4">{translate('Contact/Form/send')}</button>
              </form>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-12 wow animate__fadeInUp" data-wow-duration="0.5s">
            <div className={`icons-box ${i18n.language}`}>
              <h2>{translate('Contact/Form/social')}</h2>
              <div className="d-flex flex-wrap icons">
                <i className="fa-brands fa-facebook-f wow animate__fadeInUp" data-wow-duration="0.5s"></i>
                <i className="fa-brands fa-twitter wow animate__fadeInUp" data-wow-duration="0.5s"></i>
                <i className="fa-brands fa-linkedin-in wow animate__fadeInUp" data-wow-duration="0.5s"></i>
                <i className="fa-brands fa-google-plus-g wow animate__fadeInUp" data-wow-duration="0.5s"></i>
                <i className="fa-brands fa-instagram wow animate__fadeInUp" data-wow-duration="0.5s"></i>
                <i className="fa-brands fa-youtube wow animate__fadeInUp" data-wow-duration="0.5s"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Grow