// @ts-nocheck
import React from 'react';
import { useLocale } from '../hooks/useLocale';
import ExperienceList from '../components/ExperienceList';
import { skillLabel, contactLabels } from '../utils/labels';

const CV: React.FC = () => {
    const { locale, translations } = useLocale();
    const data: any = translations;
    const labels = contactLabels(locale as 'en' | 'fr');

    // Debug: log translations when CV renders
    // eslint-disable-next-line no-console
    console.log('CV render - locale:', locale, 'translations present:', !!translations);

    return (
        <>
        <div className="cv-container">
            {/* Header already shows name; display title only */}
            <h2 style={{ marginTop: 8 }}>{data.personal_info.title}</h2>
            <div className="contact-info">
                {/* display values only */}
                <p>{data.personal_info.phone}</p>
                <p>{data.personal_info.email}</p>
                <p>{data.personal_info.address}</p>
                <p><a href={`https://${data.personal_info.linkedin}`} target="_blank" rel="noopener noreferrer">{data.personal_info.linkedin}</a></p>
                <p>{data.personal_info.driver_license}</p>
            </div>
            <h3>{locale === 'fr' ? 'Certifications' : 'Certifications'}</h3>
            <div>
                {data.certifications.map((cert, index) => (
                    <div key={index} className="cert-block">
                        <strong>{cert.name}</strong>
                        <ul>
                            {(cert.details || []).map((d: any, idx: number) => (
                                <li key={idx}>{d}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <h3>{locale === 'fr' ? 'Compétences' : 'Skills'}</h3>
            <div className="skills">
                {Object.entries(data.skills).map(([category, skills]) => (
                    <div key={category}>
                        <div className="skill-category">
                            <span className="skill-chip">{skillLabel(category, locale as 'en' | 'fr')}</span>
                        </div>
                        <ul className="skill-list">
                            {(skills || []).map((skill: any, index: number) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <h3>{locale === 'fr' ? 'Langues' : 'Languages'}</h3>
            <ul>
                {data.languages.map((lang, index) => (
                    <li key={index}>{lang.language}: {lang.level}</li>
                ))}
            </ul>
            <h3>{locale === 'fr' ? 'Loisirs' : 'Hobbies'}</h3>
            <div className="hobbies">
                <h4>{locale === 'fr' ? 'Sport' : 'Sports'}</h4>
                <ul>
                    {data.hobbies.sport.map((sport, index) => (
                        <li key={index}>{sport}</li>
                    ))}
                </ul>
                <h4>{locale === 'fr' ? 'Voyages' : 'Travel'}</h4>
                <ul>
                    {data.hobbies.travel.map((place, index) => (
                        <li key={index}>{place}</li>
                    ))}
                </ul>
            </div>
            <h3>{locale === 'fr' ? 'Expérience Professionnelle' : 'Professional Experience'}</h3>
        <ExperienceList />
            <h3>{locale === 'fr' ? 'Éducation' : 'Education'}</h3>
            <ul>
                {data.education.map((edu, index) => (
                    <li key={index}>
                        <strong>{edu.school}</strong> - {edu.degree} ({edu.years})
                        {edu.highlights.length > 0 && <ul>{edu.highlights.map((highlight, idx) => <li key={idx}>{highlight}</li>)}</ul>}
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};

export default CV;