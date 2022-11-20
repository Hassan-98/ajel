import React, { useEffect } from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Components
import InnerHeader from '../../components/Layout/InnerHeader';
import Grow from '../../components/Features/Grow';
import MainFeatures from '../../components/Features/Features';
import Download from '../../components/Home/Download';
import Payments from '../../components/How/Payments';
import Partners from '../../components/Home/Partners';

const Features: React.FC = () => {
  const { t: translate } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageMeta = {
    title: translate('Features/pageTitle'),
    description: translate('Features/pageDescription'),
    icon: "/assets/images/features.png"
  }

  return (
    <>
      <InnerHeader {...pageMeta} />
      <main>
        <Grow />
        <MainFeatures />
        <Download />
        <Payments />
        <Partners />
      </main>
    </>
  )
}

export default Features;