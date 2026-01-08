import React, { useState, useEffect } from 'react';
import { useLocale } from '../hooks/useLocale';

const Header: React.FC = () => {
    const { locale, setLocale, translations } = useLocale();
    const [theme, setTheme] = useState<'light' | 'dark'>(() => (localStorage.getItem('theme') as 'light' | 'dark') || 'light');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleLocale = () => setLocale(locale === 'en' ? 'fr' : 'en');
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    const langLabel = locale === 'en' ? 'EN' : 'FR';
    const displayName = translations?.personal_info?.name || 'KEVIN ROUX';

    return (
        <header className="app-header">
            <div className="cv-container header-row">
                <h1 className="header-title">{displayName}</h1>

                <div className="lang-controls" role="group" aria-label="Language and theme controls">
                    <button
                        title={locale === 'en' ? 'Passer en français' : 'Switch to English'}
                        onClick={toggleLocale}
                        className={`lang-toggle-single ${locale === 'en' ? 'active-en' : 'active-fr'}`}
                        aria-pressed={locale === 'fr'}
                    >
                        <span aria-hidden className="lang-label">{langLabel}</span>
                        <span className="visually-hidden">{locale === 'en' ? 'English' : 'Français'}</span>
                    </button>

                    <button
                        title={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
                        onClick={toggleTheme}
                        className="theme-toggle"
                        aria-pressed={theme === 'dark'}
                    >
                        {/* Inline SVG icons so they always render reliably */}
                        {theme === 'light' ? (
                            <svg className="theme-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                                <path fill="#000" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                            </svg>
                        ) : (
                            <svg className="theme-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                                <circle cx="12" cy="12" r="5" fill="#fff" />
                                <g stroke="#fff" strokeWidth="1.5">
                                    <path d="M12 1v2" />
                                    <path d="M12 21v2" />
                                    <path d="M4.22 4.22l1.42 1.42" />
                                    <path d="M18.36 18.36l1.42 1.42" />
                                    <path d="M1 12h2" />
                                    <path d="M21 12h2" />
                                    <path d="M4.22 19.78l1.42-1.42" />
                                    <path d="M18.36 5.64l1.42-1.42" />
                                </g>
                            </svg>
                        )}
                        <span className="visually-hidden">{theme === 'light' ? 'Activer mode sombre' : 'Activer mode clair'}</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;