import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
//= Hooks
import { useTranslation } from "react-i18next";
//= Styles
import "./Navbar.scss";

const Navbar: React.FC = () => {
  const { i18n, t: translate } = useTranslation();
  const navbar = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navbarElement = navbar.current! as HTMLElement;

      if (navbarElement) {
        if (window.scrollY > 150) {
          navbarElement.style.borderBottom = '0';
          navbarElement.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        } else {
          navbarElement.style.borderBottom = '1px solid #00000029';
          navbarElement.style.boxShadow = 'none';
        }
      }
    });
  }, []);

  const toggleLanguage = () => {
    // Detect Current Language
    let locale = localStorage.locale === 'en' ? 'ar' : 'en';

    // Toggle Current Language
    i18n.changeLanguage(locale);
    localStorage.setItem('locale', locale);

    // Change Direction
    if (locale === 'en') document.body.classList.add('en');
    else document.body.classList.remove('en');

    let spanMobileNav = document.querySelector('.navbar-nav .change-langeuage span')!;
    let spanDesktopNav = document.querySelector('.change-langeuage span')!;

    spanMobileNav.textContent = localStorage.locale === 'en' ? 'العربية' : 'English';
    spanDesktopNav.textContent = localStorage.locale === 'en' ? 'العربية' : 'English';
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top" ref={navbar}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/assets/images/Logo.svg" alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-duotone fa-bars-staggered"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <NavLink className={`nav-link ${i18n.language}`} aria-current="page" to="/">{translate('nav/home')}</NavLink>
            <NavLink className={`nav-link ${i18n.language}`} to="/about-us">{translate('nav/about')}</NavLink>
            <NavLink className={`nav-link ${i18n.language}`} to="/features">{translate('nav/features')}</NavLink>
            <NavLink className={`nav-link ${i18n.language}`} to="/how-to">{translate('nav/how')}</NavLink>
            <NavLink className={`nav-link ${i18n.language}`} to="/partners">{translate('nav/partners')}</NavLink>
            <NavLink className={`nav-link ${i18n.language}`} to="/contact-us">{translate('nav/contact')}</NavLink>

            <div className="change-langeuage" onClick={toggleLanguage}>
              <i className="fa-duotone fa-earth-americas"></i>
              <span>{translate('nav/language')}</span>
            </div>
          </div>
        </div>
        <div className="action ms-auto">
          <div className="change-langeuage" onClick={toggleLanguage}>
            <span>{translate('nav/language')}</span>
            <i className="fa-duotone fa-earth-americas"></i>
          </div>
          <button>
            {translate('nav/startNow')}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar