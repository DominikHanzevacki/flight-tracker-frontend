import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import enTranslation from '@constants/translations/en.json';
import hrTranslation from '@constants/translations/hr.json';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'hr',
    debug: true,
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: enTranslation
      },
      hr: {
        translation: hrTranslation
      }
    }
  });


export default i18n;
