import React, { useEffect } from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Components
import InnerHeader from '../../components/Layout/InnerHeader';
import PartnersSection from '../../components/Home/Partners';
import Team from '../../components/About/Team';
import JoinUs from '../../components/Home/JoinUs';
import Testimonials from '../../components/Home/Testimonials';

const Partners: React.FC = () => {
  const { t: translate } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageMeta = {
    title: translate('Partners/pageTitle'),
    description: translate('Partners/pageDescription'),
    icon: "/assets/images/partners.png"
  }

  return (
    <>
      <InnerHeader {...pageMeta} />
      <main>
        <PartnersSection showAll />
        <Team />
        <JoinUs />
        <Testimonials />
      </main>
    </>
  )
}

export default Partners;