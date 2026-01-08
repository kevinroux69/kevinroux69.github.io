import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Kevin Roux. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/data/pdf/cv-en.pdf" target="_blank" rel="noopener noreferrer">Download CV (EN)</a>
                    <a href="/data/pdf/cv-fr.pdf" target="_blank" rel="noopener noreferrer">Download CV (FR)</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;