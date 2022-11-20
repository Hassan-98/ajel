import React from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
//= Styles
import "./notFound.scss";


const NotFound: React.FC = () => {
  const { t: translate } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <div className="container">
        <img src="/assets/images/not-found.png" alt="not found image" />
        <h1>{translate('NotFound/title')}</h1>
        <p>{translate('NotFound/text')}</p>
        <button onClick={() => navigate('/')}>{translate('NotFound/btn')}</button>
      </div>
    </section>
  )
}

export default NotFound