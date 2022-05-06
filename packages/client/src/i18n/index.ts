import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { hu } from "./locales";

const resources = {
  hu: {
    translation: hu,
  },
};

i18n.use(initReactI18next).init(
  {
    resources,
    lng: "hu",
    fallbackLng: "hu",
    interpolation: {
      escapeValue: false,
    },
  },
  () => i18n.language
);
export default i18n;
