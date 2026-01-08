export const skillLabel = (key: string, locale: 'en' | 'fr') => {
  const map: Record<string, { en: string; fr: string }> = {
    cybersecurity: { en: 'Cybersecurity', fr: 'Cybersécurité' },
    security: { en: 'Security', fr: 'Sécurité' },
    network: { en: 'Network', fr: 'Réseau' },
    system: { en: 'System', fr: 'Système' },
    programming_languages: { en: 'Programming languages', fr: 'Langages de programmation' },
  };

  if (map[key]) return map[key][locale];
  // Fallback: transform snake_case or camelCase into spaced words with capitalization
  const fallback = key.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2');
  return fallback.charAt(0).toUpperCase() + fallback.slice(1);
};

export const contactLabels = (locale: 'en' | 'fr') => {
  return locale === 'fr'
    ? { phone: 'Téléphone', address: 'Adresse', driver_license: 'Permis de conduire', linkedin: 'LinkedIn', email: 'Email' }
    : { phone: 'Phone', address: 'Address', driver_license: "Driver's license", linkedin: 'LinkedIn', email: 'Email' };
};
