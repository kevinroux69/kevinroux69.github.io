import EN from '../data/json/EN.json';
import FR from '../data/json/FR.json';

const translations = {
  en: EN,
  fr: FR,
};

export const getTranslation = (lang) => {
  return translations[lang] || translations.en;
};