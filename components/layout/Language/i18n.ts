import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translateAz from './translateAz.json'
import translateRu from './translateRu.json'
import translateEn from './translateEn.json'

const resources = {
  az: {...translateAz},
  ru: {...translateRu},
  en:{...translateEn}
}

void i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default  i18n
