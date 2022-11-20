import { useEffect } from 'react';
// Routes & Pages
import AppRoutes from './routes';
//= Hooks
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Detect Current Language
    let locale = localStorage.locale;

    i18n.changeLanguage(locale);

    if (locale === 'en') {
      document.body.className = "en";
    } else {
      document.body.removeAttribute('class');
    }
  }, [])

  return (
    <AppRoutes />
  )
}

export default App
