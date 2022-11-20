import React, { useState, useEffect } from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./partners.scss";

type Props = {
  showAll?: boolean;
}

const Partners: React.FC<Props> = ({ showAll }) => {
  const { t: translate } = useTranslation();

  return (
    <section className={`Partners ${showAll ? 'pb-0' : ''}`}>
      <div className="container">
        <h3>{translate('Home/Partners/title')}</h3>
        <div className="info">
          <p>{translate('Home/Partners/description')}</p>
          <div className="clients">
            <div className="client">
              <img src="/assets/images/Client1.png" alt="partner" className="wow animate__fadeInUp" data-wow-duration="0.5s" />
            </div>
            <div className="client">
              <img src="/assets/images/Client2.png" alt="partner" className="wow animate__fadeInUp" data-wow-duration="0.5s" />
            </div>
            <div className="client">
              <img src="/assets/images/Client3.png" alt="partner" className="wow animate__fadeInUp" data-wow-duration="0.5s" />
            </div>
            <div className="client">
              <img src="/assets/images/Client4.png" alt="partner" className="wow animate__fadeInUp" data-wow-duration="0.5s" />
            </div>
            <div className="client">
              <img src="/assets/images/Client5.png" alt="partner" className="wow animate__fadeInUp" data-wow-duration="0.5s" />
            </div>
          </div>
          {
            showAll && (
              <div className="clients mt-4">
                <div className="client">
                  <img src="/assets/images/Client3.png" alt="partner" className="wow animate__fadeInUp" data-wow-duration="0.5s" />
                </div>
                <div className="client">
                  <img src="/assets/images/Client5.png" alt="partner" className="wow animate__fadeInUp" data-wow-duration="0.5s" />
                </div>
                <div className="client">
                  <img src="/assets/images/Client1.png" alt="partner" className="wow animate__fadeInUp" data-wow-duration="0.5s" />
                </div>
                <div className="client">
                  <img src="/assets/images/Client4.png" alt="partner" className="wow animate__fadeInUp" data-wow-duration="0.5s" />
                </div>
                <div className="client">
                  <img src="/assets/images/Client2.png" alt="partner" className="wow animate__fadeInUp" data-wow-duration="0.5s" />
                </div>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Partners