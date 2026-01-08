import React from 'react';
import { useLocale } from '../hooks/useLocale';

const LanguageToggle: React.FC = () => {
    const { locale, setLocale } = useLocale();

    const toggleLanguage = () => {
        setLocale(locale === 'en' ? 'fr' : 'en');
    };

    return (
        <button onClick={toggleLanguage} className="language-toggle">
            {locale === 'en' ? 'Français' : 'English'}
        </button>
    );
};

export default LanguageToggle;