import React, { useEffect } from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Components
import InnerHeader from '../../components/Layout/InnerHeader';
import Video from '../../components/How/Video';
import Payments from '../../components/How/Payments';
import Why from '../../components/How/Why';
import Download from '../../components/Home/Download';
import Testimonials from '../../components/Home/Testimonials';

const HowTo: React.FC = () => {
  const { t: translate } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageMeta = {
    title: translate('HowTo/pageTitle'),
    description: translate('HowTo/pageDescription'),
    icon: "/assets/images/how.png"
  }

  return (
    <>
      <InnerHeader {...pageMeta} />
      <main>
        <Video />
        <Payments />
        <Why />
        <Download />
        <Testimonials />
      </main>
    </>
  )
}

export default HowTo;