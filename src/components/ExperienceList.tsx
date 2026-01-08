import React from 'react';
import { useLocale } from '../hooks/useLocale';
import EN from '../data/json/EN.json';
import FR from '../data/json/FR.json';

const ExperienceList: React.FC = () => {
    const { locale } = useLocale();
    const data = locale === 'fr' ? FR.professional_experience : EN.professional_experience;

    return (
        <div className="experience-list">
            <h2>{locale === 'fr' ? 'Expérience Professionnelle' : 'Professional Experience'}</h2>
            <ul>
                {data.map((experience, index) => (
                    <li key={index}>
                        <h3>{experience.title}</h3>
                        <p>{experience.company} - {experience.years} ({experience.location})</p>
                        <ul>
                            {experience.details.map((detail, idx) => (
                                <li key={idx}>{detail}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceList;