import React from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./grow.scss";

type Props = {
  mb?: boolean;
}

const Grow: React.FC<Props> = ({ mb }) => {
  const { t: translate } = useTranslation();

  return (
    <section className={`grow ${mb ? 'mb' : ''}`}>
      <div className="container">
        <div className="row gx-5">
          <div className="col-md-6 col-12 wow animate__fadeInUp" data-wow-duration="0.5s">
            <div className="image">
              <img src="/assets/images/move-money.png" alt="section image" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="details">
              <h2 className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('Features/Grow/title')}</h2>
              <p className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('Features/Grow/description')}</p>
              <div className="list wow animate__fadeInUp" data-wow-duration="0.5s">
                <ul>
                  <li>
                    <i className="fa-solid fa-shield-check"></i>
                    {translate('Features/Grow/item1')}
                  </li>
                  <li>
                    <i className="fa-solid fa-shield-check"></i>
                    {translate('Features/Grow/item2')}
                  </li>
                  <li>
                    <i className="fa-solid fa-shield-check"></i>
                    {translate('Features/Grow/item3')}
                  </li>
                </ul>
              </div>
              <button className="wow animate__fadeInUp" data-wow-duration="0.5s">{translate('Features/Grow/btn')}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Grow