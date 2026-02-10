/**
 * Referenzen / Portfolio Daten
 * 4 Referenzen - eine für jede Leistung
 */

export const referencesData = [
  {
    id: 1,
    title: 'Hausmeisterservice Wohnanlage',
    description: 'Dauerhafte Betreuung einer Wohnanlage mit Gartenpflege, Winterdienst und kleinen Reparaturen.',
    category: 'hausmeisterservice',
    location: 'Velbert',
    year: '2024',
    images: ['/images/ref-hausmeister.jpeg'],
    featured: true,
  },
  {
    id: 2,
    title: 'Büroreinigung Gewerbekomplex',
    description: 'Tägliche Unterhaltsreinigung eines Bürogebäudes über mehrere Etagen.',
    category: 'gebaeudereinigung',
    location: 'Velbert',
    year: '2024',
    images: ['/images/ref-reinigung.jpeg'],
    featured: true,
  },
  {
    id: 3,
    title: 'Haushaltsauflösung nach Vererbung',
    description: 'Diskrete und einfühlsame Räumung eines kompletten Hauses innerhalb kurzer Zeit.',
    category: 'entruempelung',
    location: 'Mettmann',
    year: '2024',
    images: ['/images/ref-entruempelung.jpeg'],
    featured: true,
  },
  {
    id: 4,
    title: 'Bauschutt-Entsorgung Gewerbe',
    description: 'Entsorgung von Bauschutt nach Umbauarbeiten inklusive Container-Stellung.',
    category: 'entsorgung',
    location: 'Wülfrath',
    year: '2024',
    images: ['/images/ref-entsorgung.jpeg'],
    featured: true,
  },
];

export const referenceCategories = [
  { id: 'all', label: 'Alle Projekte' },
  { id: 'gebaeudereinigung', label: 'Reinigung' },
  { id: 'entruempelung', label: 'Entrümpelung' },
  { id: 'entsorgung', label: 'Entsorgung' },
  { id: 'hausmeisterservice', label: 'Hausmeister' },
];
