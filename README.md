# Kevin Roux - Professional Portfolio

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Kevin_Roux-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/kévin-roux-49284821a)
[![Portfolio](https://img.shields.io/badge/Live_Demo-View_Site-green?style=flat)](https://kevinroux69.github.io/)

A professional, multilingual portfolio showcasing my journey as a **Cybersecurity, Systems, and Network Engineer**. Built with modern web technologies, this project demonstrates my ability to bridge the gap between infrastructure security and software development.

## 🚀 Technologies Used

* **React** (Functional Components, Hooks)
* **TypeScript** (Type safety and better developer experience)
* **Vite** (Next-generation frontend tooling)
* **Context API** (State management for internationalization)
* **GitHub Pages** (Deployment and hosting)

## 🌍 Key Features

* **Multilingual Support:** Full site toggle between English and French.
* **Dynamic Data:** Content is driven by structured JSON files for easy updates.
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.
* **PDF Integration:** Dynamic CV download links that match the currently selected language.

## 📂 Project Structure

```text
kevinroux69.github.io
├── src/
│   ├── components/       # Reusable UI components (Experience, Toggle, etc.)
│   ├── context/          # LocaleContext for language state management
│   ├── data/
│   │   └── json/         # English (EN.json) and French (FR.json) content
│   ├── hooks/            # Custom hooks (useLocale)
│   ├── pages/            # Page-level components (Home, Projects, etc.)
│   └── App.tsx           # Main logic and routing
├── public/               # Static assets (Not processed by Vite)
│   └── data/
│       ├── pdf/          # CV files for direct download
│       └── Photo_Kévin_Roux.jpg
├── vite.config.ts        # Build configuration with relative base paths
└── package.json          # Dependencies and scripts