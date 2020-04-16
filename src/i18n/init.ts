import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import pl from "./pl/resource.json";
import en from "./en/resource.json";

export const i18n = i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources: {
      en,
      pl,
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
