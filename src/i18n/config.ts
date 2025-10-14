import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import hu from './locales/hu.json';
import en from './locales/en.json';
import de from './locales/de.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      hu: { translation: hu },
      en: { translation: en },
      de: { translation: de },
    },
    lng: 'hu', // default language
    fallbackLng: 'hu',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

