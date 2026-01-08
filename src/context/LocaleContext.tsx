import React, { createContext, useState, useEffect, ReactNode } from 'react';
import EN from '../data/json/EN.json';
import FR from '../data/json/FR.json';

type Locale = 'en' | 'fr';

interface LocaleContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  translations: any;
}

export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const saved = localStorage.getItem('locale');
    if (saved === 'en' || saved === 'fr') setLocale(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  const translations = locale === 'fr' ? FR : EN;

  // Debug: log current locale and a small preview of translations
  // This helps verify the JSON was correctly imported and selected.
  // Remove or disable in production.
  // eslint-disable-next-line no-console
  console.log('LocaleProvider: locale=', locale, 'translations keys=', Object.keys(translations || {}));

  return (
    <LocaleContext.Provider value={{ locale, setLocale, translations }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
