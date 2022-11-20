import React from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./download.scss";

const Download: React.FC = () => {
  const { t: translate } = useTranslation();

  return (
    <section className="Download">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-12">
            <div className="info">
              <h3 className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('Home/Download/title')}</h3>
              <p className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('Home/Download/description')}</p>
              <div className="download">
                <img src="/assets/images/download.png" alt="download image" className="wow animate__fadeInUp" data-wow-duration="0.5s" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 d-none d-md-block">
            <div className="image">
              <img src="/assets/images/phone.png" alt="download image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download