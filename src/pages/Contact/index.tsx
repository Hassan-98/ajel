import React, { useEffect } from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Components
import InnerHeader from '../../components/Layout/InnerHeader';
import Info from '../../components/Contact/Info';
import Form from '../../components/Contact/Form';
import Map from '../../components/Contact/Map';

const Contact: React.FC = () => {
  const { t: translate } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageMeta = {
    title: translate('Contact/pageTitle'),
    description: translate('Contact/pageDescription'),
    icon: "/assets/images/contact.png"
  }

  return (
    <>
      <InnerHeader {...pageMeta} />
      <main>
        <Info />
        <Form />
        <Map />
      </main>
    </>
  )
}

export default Contact;