import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

type TI18n = {
  fallbackLng: string;
  debug: boolean;
  interpolation: {
    escapeValue: boolean;
  };
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<TI18n>({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
