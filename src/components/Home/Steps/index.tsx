import React from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./steps.scss";

const Steps: React.FC = () => {
  const { i18n, t: translate } = useTranslation();

  return (
    <section className="Steps">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <div className="info">
              <h3>{translate('Home/Steps/title')}</h3>
              <p>{translate('Home/Steps/description')}</p>
              <div className={`steps ${i18n.language}`}>
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="step first">
                      <div className="image">
                        <img src="/assets/images/step1.svg" alt="service image" className="wow animate__slideInUp" data-wow-duration="0.5s" />
                      </div>
                      <h5>{translate('Home/Steps/step1')}</h5>
                      <p>{translate('Home/Steps/stepsDesc')}</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="step">
                      <div className="image">
                        <img src="/assets/images/step2.svg" alt="service image" className="wow animate__slideInUp" data-wow-duration="0.5s" />
                      </div>
                      <h5>{translate('Home/Steps/step2')}</h5>
                      <p>{translate('Home/Steps/stepsDesc')}</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="step">
                      <div className="image">
                        <img src="/assets/images/step3.svg" alt="service image" className="wow animate__slideInUp" data-wow-duration="0.5s" />
                      </div>
                      <h5>{translate('Home/Steps/step3')}</h5>
                      <p>{translate('Home/Steps/stepsDesc')}</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="step last">
                      <div className="image">
                        <img src="/assets/images/step4.svg" alt="service image" className="wow animate__slideInUp" data-wow-duration="0.5s" />
                      </div>
                      <h5>{translate('Home/Steps/step4')}</h5>
                      <p>{translate('Home/Steps/stepsDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps