import React from 'react';
import { useLocale } from '../hooks/useLocale';

const ContactCard: React.FC = () => {
    const { locale, translations } = useLocale();

    const info = translations.personal_info || {};

    return (
        <div className="contact-card">
            {/* show values only, labels removed as requested */}
            <p>{info.phone}</p>
            <p>{info.email}</p>
            <p>{info.address}</p>
            <p>
                <a href={`https://${info.linkedin}`} target="_blank" rel="noopener noreferrer">
                    {info.linkedin}
                </a>
            </p>
            <p>{info.driver_license}</p>
        </div>
    );
};

export default ContactCard;