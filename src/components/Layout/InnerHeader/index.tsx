import React from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./Header.scss";

type Props = {
  title: string;
  icon: string;
  description: string;
}

const Header: React.FC<Props> = ({ title, icon, description }) => {
  const { i18n } = useTranslation();

  return (
    <header className="inner-header">
      <div className="container">
        <div className={`content ${i18n.language} d-flex`}>
          <div className="icon">
            <img src={icon} alt="page icon" />
          </div>
          <div className="details">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header