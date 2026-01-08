# Kevin Roux Portfolio

This is the my portfolio website, showcasing my skills, experience, and projects in the field of Cybersecurity, Systems, and Network Engineering.

## Project Structure

The project is structured as follows:

```
kevinroux69.github.io
├── src
│   ├── main.tsx          # Entry point of the React application
│   ├── App.tsx           # Main application component with routing
│   ├── index.css         # Global CSS styles
│   ├── pages             # Contains different page components
│   │   ├── Home.tsx      # Home page component
│   │   ├── CV.tsx        # CV page component displaying detailed CV
│   │   └── Projects.tsx   # Projects page component
│   ├── components        # Reusable components
│   │   ├── Header.tsx    # Header component with navigation
│   │   ├── Footer.tsx    # Footer component with copyright info
│   │   ├── LanguageToggle.tsx # Component for switching languages
│   │   ├── ContactCard.tsx # Component displaying contact information
│   │   └── ExperienceList.tsx # Component listing professional experiences
│   ├── hooks             # Custom hooks
│   │   └── useLocale.ts  # Hook for managing language state
│   ├── utils             # Utility functions
│   │   └── i18n.ts       # Internationalization utilities
│   └── data              # Data files
│       ├── json          # JSON files for CV data
│       │   ├── EN.json   # English CV data
│       │   └── FR.json   # French CV data
│       └── pdf           # PDF versions of the CV
│           ├── cv-en.pdf # English CV PDF
│           └── cv-fr.pdf # French CV PDF
├── public
│   └── robots.txt        # Robots.txt for search engine indexing
├── index.html            # Main HTML file for the React app
├── package.json          # NPM configuration file
├── tsconfig.json         # TypeScript configuration file
├── vite.config.ts        # Vite configuration file
└── README.md             # Project documentation
```