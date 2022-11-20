import React from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./about.scss";

const About: React.FC = () => {
  const { t: translate } = useTranslation();

  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-5 mb-lg-0">
            <div className="info">
              <h4>{translate('Home/About/subTitle')}</h4>
              <h3>{translate('Home/About/title')}</h3>
              <p>{translate('Home/About/description')}</p>
              <div className="services">
                <div className="row justify-content-center justify-content-lg-start g-4">
                  <div className="col-md-5 col-6">
                    <div className="service wow animate__pulse" data-wow-duration="0.7s" data-wow-delay="0s">
                      <img src="/assets/images/service1.svg" alt="service image" />
                      <p>{translate('Home/About/service1')}</p>
                    </div>
                  </div>
                  <div className="col-md-5 col-6">
                    <div className="service wow animate__pulse" data-wow-duration="0.7s" data-wow-delay="0.2s">
                      <img src="/assets/images/service2.svg" alt="service image" />
                      <p>{translate('Home/About/service2')}</p>
                    </div>
                  </div>
                  <div className="col-md-5 col-6">
                    <div className="service wow animate__pulse" data-wow-duration="0.7s" data-wow-delay="0.5s">
                      <img src="/assets/images/service3.svg" alt="service image" />
                      <p>{translate('Home/About/service3')}</p>
                    </div>
                  </div>
                  <div className="col-md-5 col-6">
                    <div className="service wow animate__pulse" data-wow-duration="0.7s" data-wow-delay="0.7s">
                      <img src="/assets/images/service4.svg" alt="service image" />
                      <p>{translate('Home/About/service4')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="image">
              <img src="/assets/images/services.png" alt="services image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About