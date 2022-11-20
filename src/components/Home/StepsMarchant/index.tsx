import React from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./steps.scss";

const StepsMarchant: React.FC = () => {
  const { i18n, t: translate } = useTranslation();

  return (
    <section className="StepsMarchant">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <div className="info">
              <h3>{translate('Home/StepsMarchant/title')}</h3>
              <p>{translate('Home/StepsMarchant/description')}</p>
              <div className={`steps ${i18n.language}`}>
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="step first">
                      <div className="image">
                        <img src="/assets/images/stepM1.svg" alt="service image" className="wow animate__fadeInUp" data-wow-duration="0.5s" />
                      </div>
                      <h5>{translate('Home/StepsMarchant/step1')}</h5>
                      <p>{translate('Home/StepsMarchant/stepsDesc')}</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="step">
                      <div className="image">
                        <img src="/assets/images/stepM2.svg" alt="service image" className="wow animate__fadeInUp" data-wow-duration="0.5s" />
                      </div>
                      <h5>{translate('Home/StepsMarchant/step2')}</h5>
                      <p>{translate('Home/StepsMarchant/stepsDesc')}</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="step">
                      <div className="image">
                        <img src="/assets/images/stepM3.svg" alt="service image" className="wow animate__fadeInUp" data-wow-duration="0.5s" />
                      </div>
                      <h5>{translate('Home/StepsMarchant/step3')}</h5>
                      <p>{translate('Home/StepsMarchant/stepsDesc')}</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12">
                    <div className="step last">
                      <div className="image">
                        <img src="/assets/images/stepM4.svg" alt="service image" className="wow animate__fadeInUp" data-wow-duration="0.5s" />
                      </div>
                      <h5>{translate('Home/StepsMarchant/step4')}</h5>
                      <p>{translate('Home/StepsMarchant/stepsDesc')}</p>
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

export default StepsMarchant