import React, { useEffect } from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Components
import InnerHeader from '../../components/Layout/InnerHeader';
import About from '../../components/Home/About';
import Grow from '../../components/Features/Grow';
import JoinUs from '../../components/Home/JoinUs';
import Team from '../../components/About/Team';
import Testimonials from '../../components/Home/Testimonials';

const AboutUs: React.FC = () => {
  const { t: translate } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageMeta = {
    title: translate('About/pageTitle'),
    description: translate('About/pageDescription'),
    icon: "/assets/images/about-icon.png"
  }

  return (
    <>
      <InnerHeader {...pageMeta} />
      <main>
        <About />
        <Grow mb />
        <JoinUs />
        <Team />
        <Testimonials />
      </main>
    </>
  )
}

export default AboutUs;