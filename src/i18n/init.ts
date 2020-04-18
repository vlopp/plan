import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import pl from "./pl/resource.json";
import en from "./en/resource.json";

console.log('asd');

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources: {

      en,
      pl,
    },
    lng: "en",
    fallbackLng: "en",
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;