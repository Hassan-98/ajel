import React from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./team.scss";

const Team: React.FC = () => {
  const { t: translate } = useTranslation();

  return (
    <section className="Team">
      <div className="container">
        <h3>{translate('About/Team/title')}</h3>
        <p className="description">{translate('About/Team/description')}</p>
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12 mb-5 mt-5 mt-lg-0 mb-lg-0">
            <div className="member">
              <div className="image">
                <img src="/assets/images/User1.png" alt="team member" />
              </div>
              <h4 className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('About/Team/member1')}</h4>
              <p className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('About/Team/member1Position')}</p>
              <p className="words wow animate__fadeInUp" data-wow-duration="0.5s">{translate('About/Team/words')}</p>
              <div className="icons">
                <i className="fa-brands fa-facebook-f wow animate__fadeInUp" data-wow-duration="0.5s"></i>
                <i className="fa-brands fa-twitter wow animate__fadeInUp" data-wow-duration="0.5s"></i>
                <i className="fa-brands fa-linkedin-in wow animate__fadeInUp" data-wow-duration="0.5s"></i>
                <i className="fa-brands fa-google-plus-g wow animate__fadeInUp" data-wow-duration="0.5s"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 mb-5 mt-5 mt-lg-0 mb-lg-0">
            <div className="member">
              <div className="image">
                <img src="/assets/images/User2.png" alt="team member" />
              </div>
              <h4 className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('About/Team/member2')}</h4>
              <p className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('About/Team/member2Position')}</p>
              <p className="words wow animate__fadeInUp" data-wow-duration="0.5s">{translate('About/Team/words')}</p>
              <div className="icons">
                <i className="fa-brands fa-facebook-f wow animate__fadeInUp" data-wow-duration="0.5s"></i>
                <i className="fa-brands fa-twitter wow animate__fadeInUp" data-wow-duration="0.5s"></i>
                <i className="fa-brands fa-linkedin-in wow animate__fadeInUp" data-wow-duration="0.5s"></i>
                <i className="fa-brands fa-google-plus-g wow animate__fadeInUp" data-wow-duration="0.5s"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 mb-5 mt-5 mt-lg-0 mb-lg-0">
            <div className="member">
              <div className="image">
                <img src="/assets/images/User3.png" alt="team member" />
              </div>
              <h4 className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('About/Team/member3')}</h4>
              <p className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('About/Team/member3Position')}</p>
              <p className="words wow animate__fadeInUp" data-wow-duration="0.5s">{translate('About/Team/words')}</p>
              <div className="icons">
                <i className="fa-brands fa-facebook-f wow animate__fadeInUp" data-wow-duration="0.5s"></i>
                <i className="fa-brands fa-twitter wow animate__fadeInUp" data-wow-duration="0.5s"></i>
                <i className="fa-brands fa-linkedin-in wow animate__fadeInUp" data-wow-duration="0.5s"></i>
                <i className="fa-brands fa-google-plus-g wow animate__fadeInUp" data-wow-duration="0.5s"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 mb-5 mt-5 mt-lg-0 mb-lg-0">
            <div className="member">
              <div className="image">
                <img src="/assets/images/User2.png" alt="team member" />
              </div>
              <h4 className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('About/Team/member4')}</h4>
              <p className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('About/Team/member4Position')}</p>
              <p className="words wow animate__fadeInUp" data-wow-duration="0.5s">{translate('About/Team/words')}</p>
              <div className="icons">
                <i className="fa-brands fa-facebook-f wow animate__fadeInUp" data-wow-duration="0.5s"></i>
                <i className="fa-brands fa-twitter wow animate__fadeInUp" data-wow-duration="0.5s"></i>
                <i className="fa-brands fa-linkedin-in wow animate__fadeInUp" data-wow-duration="0.5s"></i>
                <i className="fa-brands fa-google-plus-g wow animate__fadeInUp" data-wow-duration="0.5s"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team