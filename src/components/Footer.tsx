import React from 'react';
import { useLocale } from '../hooks/useLocale';

const Footer: React.FC = () => {
    const { locale } = useLocale();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Kevin Roux. {locale === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
                <div className="footer-links">
                    {locale === 'fr' ? (
                        <a href="./data/pdf/CV_Kévin_Roux_FR_2026.pdf" target="_blank" rel="noopener noreferrer">
                            Télécharger mon CV (FR)
                        </a>
                    ) : (
                        <a href="./data/pdf/CV_Kévin_Roux_EN_2026.pdf" target="_blank" rel="noopener noreferrer">
                            Download CV (EN)
                        </a>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;