import PTBR from "./pt/pt-br.json";
import ENUS from "./en/en-us.json";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: PTBR,
  },
  en: {
    translation: ENUS,
  },
};
i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  debug: true,
});

export default i18n;
