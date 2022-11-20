import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ENtranslation from "./en.json";
import ARtranslation from "./ar.json";

export default () => {
  let locale = localStorage.getItem('locale');

  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: ENtranslation
      },
      ar: {
        translation: ARtranslation
      }
    },
    lng: locale || "ar",
    fallbackLng: locale || "ar",
    interpolation: {
      escapeValue: false
    }
  });
}