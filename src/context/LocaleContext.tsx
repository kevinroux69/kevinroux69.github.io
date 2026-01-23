import React, { createContext, useState, useEffect, ReactNode } from 'react';
import EN from '../data/json/EN.json';
import FR from '../data/json/FR.json';

type Locale = 'en' | 'fr';
type Theme = 'light' | 'dark';

interface LocaleContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  theme: Theme;
  toggleTheme: () => void;
  translations: any;
}

export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  // --- LANGUAGE LOGIC ---
  const [locale, setLocale] = useState<Locale>(() => {
    // 1. Check local storage
    const saved = localStorage.getItem('locale');
    if (saved === 'en' || saved === 'fr') return saved as Locale;

    // 2. Detect browser language
    const browserLang = navigator.language.split('-')[0];
    const detected = browserLang === 'fr' ? 'fr' : 'en';
    console.log(`[Language] Auto-detected from browser: ${detected.toUpperCase()}`);
    return detected;
  });

  // --- THEME LOGIC ---
  const [theme, setTheme] = useState<Theme>(() => {
    // 1. Check local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme as Theme;

    // 2. Check system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const detectedTheme = systemPrefersDark ? 'dark' : 'light';
    console.log(`[Theme] Auto-detected from system: ${detectedTheme.toUpperCase()}`);
    return detectedTheme;
  });

  // Sync Language with LocalStorage and Logs
  useEffect(() => {
    localStorage.setItem('locale', locale);
    console.log(`[Language] Active locale: ${locale.toUpperCase()}`);
  }, [locale]);

  // Sync Theme with LocalStorage, HTML class, and Logs
  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    console.log(`[Theme] Active mode: ${theme.toUpperCase()}`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const translations = locale === 'fr' ? FR : EN;

  return (
    <LocaleContext.Provider value={{ locale, setLocale, theme, toggleTheme, translations }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;