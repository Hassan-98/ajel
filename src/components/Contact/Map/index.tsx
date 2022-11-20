import React from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./map.scss";

const Grow: React.FC = () => {
  const { t: translate } = useTranslation();

  return (
    <section className="map">
      <div className="container">
        <h2>{translate('Contact/Map/title')}</h2>
        <p>{translate('Contact/Map/description')}</p>
        <img src="/assets/images/map.png" alt="map image" />
      </div>
    </section>
  )
}

export default Grow