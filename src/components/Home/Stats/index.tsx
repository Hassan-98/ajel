import React from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Packages
import CountUp from 'react-countup';
//= Styles
import "./stats.scss";

type Props = {
  mt?: Boolean;
}

const Stats: React.FC<Props> = ({ mt }) => {
  const { t: translate } = useTranslation();

  return (
    <section className={`Stats ${mt ? 'mt-5' : ''}`}>
      <div className="container">
        <div className="row">
          <div className={`col-12 mb-5 ${mt ? 'mt-5' : ''}`}>
            <div className="info">
              <h3>{translate('Home/Stats/title')}</h3>
              <p>{translate('Home/Stats/description')}</p>
              <div className="stats">
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-sm-6 col-10 mb-4 mb-lg-0">
                    <div className="stat">
                      <div className="details">
                        <h5>
                          <CountUp
                            start={0}
                            end={50}
                            duration={3}
                          />
                          K
                        </h5>
                        <p>{translate('Home/Stats/stat1')}</p>
                      </div>
                      <div className="image">
                        <img src="/assets/images/step1.svg" alt="stats image" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-10 mb-4 mb-lg-0">
                    <div className="stat">
                      <div className="details">
                        <h5>
                          <CountUp
                            start={0}
                            end={14}
                            duration={3}
                          />
                          K
                        </h5>
                        <p>{translate('Home/Stats/stat2')}</p>
                      </div>
                      <div className="image">
                        <img src="/assets/images/step2.svg" alt="stats image" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-10 mb-4 mb-lg-0">
                    <div className="stat">
                      <div className="details">
                        <h5>
                          <CountUp
                            start={0}
                            end={100}
                            duration={3}
                          />
                          K
                        </h5>
                        <p>{translate('Home/Stats/stat3')}</p>
                      </div>
                      <div className="image">
                        <img src="/assets/images/step3.svg" alt="stats image" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-10 mb-4 mb-lg-0">
                    <div className="stat">
                      <div className="details">
                        <h5>
                          <CountUp
                            start={0}
                            end={600}
                            duration={3}
                          />
                          K
                        </h5>
                        <p>{translate('Home/Stats/stat4')}</p>
                      </div>
                      <div className="image">
                        <img src="/assets/images/step4.svg" alt="stats image" />
                      </div>
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

export default Stats