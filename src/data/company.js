/**
 * Unternehmensdaten
 * Zentrale Konfiguration für alle Kontaktdaten
 */

export const companyData = {
  name: 'TY-Dienstleistung',
  owner: 'Tayfun Yaroglu',
  legalForm: 'Einzelunternehmen',
  
  contact: {
    phone: '0157 56276633',
    phoneRaw: '+4915756276633', // Für tel: Links
    email: 'T.Y-Dienstleistung@gmx.de',
    address: {
      street: 'Papenfeld 35',
      zip: '42549',
      city: 'Velbert',
    },
  },
  
  services: [
    'Hausmeisterservice',
    'Gebäudereinigung', 
    'Entrümpelung',
    'Entsorgung',
  ],
  
  values: [
    {
      title: 'Zuverlässig',
      description: 'Wir halten unsere Termine ein und erledigen Aufgaben pünktlich und gewissenhaft.',
      icon: 'Shield',
    },
    {
      title: 'Versichert',
      description: 'Vollständige Versicherungsdeckung für Ihre Sicherheit bei allen Arbeiten.',
      icon: 'CheckCircle',
    },
    {
      title: 'Umweltgerecht',
      description: 'Umweltbewusste Arbeitsweisen und fachgerechte Entsorgung nach Vorschrift.',
      icon: 'Leaf',
    },
  ],
  
  trustBadges: [
    'Versichert',
    'Pünktlich', 
    'Umweltgerecht',
    'Fair & Transparent',
  ],
  
  // SEO Defaults
  seo: {
    defaultTitle: 'TY-Dienstleistung | Hausmeisterservice & Gebäudereinigung',
    defaultDescription: 'Professioneller Hausmeisterservice, Gebäudereinigung, Entrümpelung und Entsorgung in Velbert und Umgebung. Zuverlässig, versichert und fair. Jetzt anrufen: 0157 56276633',
    siteUrl: 'https://ty-dienstleistung.de',
  },
};

export default companyData;
