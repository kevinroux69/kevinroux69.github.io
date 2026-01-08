import React from 'react';
import { useLocale } from '../hooks/useLocale';
import { Link } from 'react-router-dom';
import LanguageToggle from '../components/LanguageToggle';
import ContactCard from '../components/ContactCard';
import { skillLabel } from '../utils/labels';

const Home = () => {
    const { locale, translations } = useLocale();

    // Debug: log translations presence
    // eslint-disable-next-line no-console
    console.log('Home render - locale:', locale, 'translations present:', !!translations);

    return (
        <div className="home">
            <header>
                {/* Name is shown in header; avoid duplicate here */}
                <h2 style={{ marginTop: 8 }}>{translations.personal_info.title}</h2>
            </header>
            <main>
                {/* Certifications at top */}
                <section className="certifications">
                    <h3>{locale === 'fr' ? 'Certifications' : 'Certifications'}</h3>
                    <div>
                        {(translations.certifications || []).map((cert: any) => (
                            <div key={cert.name} className="cert-block">
                                <strong>{cert.name}</strong>
                                <ul>
                                    {(cert.details || []).map((d: any, idx: number) => (
                                        <li key={idx}>{d}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h3>{locale === 'fr' ? 'Loisirs' : 'Hobbies'}</h3>
                    <ul>
                        <li>{(translations.hobbies?.sport || []).join(', ')}</li>
                        <li>{(translations.hobbies?.travel || []).join(', ')}</li>
                    </ul>
                </section>
                <section>
                    <h3>{locale === 'fr' ? 'Compétences' : 'Skills'}</h3>
                    <ul>
                                {Object.entries(translations.skills || {}).map(([category, skills]: any) => (
                                    <li key={category}>
                                        <strong>{skillLabel(category, locale as 'en' | 'fr')}:</strong> {(skills || []).join(', ')}
                                    </li>
                                ))}
                    </ul>
                </section>
                <ContactCard />
            </main>
            <footer>
                <Link to="/cv">{locale === 'fr' ? 'CV' : 'CV'}</Link>
                <Link to="/projects">{locale === 'fr' ? 'Projets' : 'Projects'}</Link>
            </footer>
            {/* name moved to header; removed bottom name */}
        </div>
    );
};

export default Home;