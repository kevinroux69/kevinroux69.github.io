import React from 'react';
import { useLocale } from '../hooks/useLocale';
import EN from '../data/json/EN.json';
import FR from '../data/json/FR.json';

const Projects = () => {
    const { locale } = useLocale();
    const data = locale === 'fr' ? FR : EN;

    return (
        <div className="projects-page">
            <h1>{locale === 'fr' ? 'Projets' : 'Projects'}</h1>
            <p>{locale === 'fr' ? 'Voici quelques projets sur lesquels j\'ai travaillé:' : 'Here are some projects I have worked on:'}</p>
            <ul>
                {/* Example project entries, replace with actual project data */}
                <li>
                    <h2>{locale === 'fr' ? 'Nom du Projet 1' : 'Project Name 1'}</h2>
                    <p>{locale === 'fr' ? 'Description du projet 1.' : 'Description of project 1.'}</p>
                </li>
                <li>
                    <h2>{locale === 'fr' ? 'Nom du Projet 2' : 'Project Name 2'}</h2>
                    <p>{locale === 'fr' ? 'Description du projet 2.' : 'Description of project 2.'}</p>
                </li>
                {/* Add more projects as needed */}
            </ul>
        </div>
    );
};

export default Projects;