import React, { useEffect } from 'react';
//= Hooks
import { useTranslation } from "react-i18next";
//= Components
import InnerHeader from '../../components/Layout/InnerHeader';
import NotFound from '../../components/NotFound/NotFound';

const NotFound404: React.FC = () => {
  const { t: translate } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageMeta = {
    title: translate('NotFound/pageTitle'),
    description: translate('NotFound/pageDescription'),
    icon: "/assets/images/no-results.png"
  }

  return (
    <>
      <InnerHeader {...pageMeta} />
      <main>
        <NotFound />
      </main>
    </>
  )
}

export default NotFound404;