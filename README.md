# TY-Dienstleistung Website

Eine moderne, production-ready Unternehmenswebsite für TY-Dienstleistung - professioneller Hausmeisterservice, Gebäudereinigung, Entrümpelung und Entsorgung.

## 🚀 Features

- **React + Vite** - Modernes, schnelles Frontend-Framework
- **TailwindCSS** - Utility-first CSS mit Custom Design System
- **WCAG 2.1 AA** - Barrierefreie Implementierung
- **DSGVO-konform** - Vollständiges Cookie-Management mit granularer Kontrolle
- **SEO-optimiert** - Meta-Tags, OpenGraph, JSON-LD Structured Data
- **Mobile-first** - Responsive Design für alle Geräte
- **Telefon-First UX** - Prominente Telefon-CTAs für schnelle Kontaktaufnahme

## 📋 Inhaltsverzeichnis

- [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Deployment](#deployment)
- [Projektstruktur](#projektstruktur)
- [Cookie-Consent](#cookie-consent)
- [Lokale Bilder hinzufügen](#lokale-bilder-hinzufügen)
- [Konfiguration](#konfiguration)
- [Testing](#testing)

## Installation

```bash
# Repository klonen
git clone <repository-url>
cd ty-dienstleistung

# Dependencies installieren
npm install
```

## Development

```bash
# Development Server starten
npm run dev

# Website ist verfügbar unter http://localhost:5173
```

## Build

```bash
# Production Build erstellen
npm run build

# Build wird in /dist erstellt
```

## Deployment

### Netlify (empfohlen)

1. **GitHub Repository erstellen und pushen:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/IHR_USERNAME/ty-dienstleistung.git
   git push -u origin main
   ```

2. **Auf Netlify deployen:**
   - [Netlify](https://netlify.com) öffnen
   - "Add new site" → "Import an existing project"
   - GitHub Repository auswählen
   - Build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`

3. **Fertig!** Die Website wird automatisch bei jedem Push neu deployed.

### Manuelles Deployment

Die Dateien im `/dist` Ordner können auf jedem Static Hosting deployt werden:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- o.ä.

## Projektstruktur

```
/
├── public/                    # Statische Assets
│   ├── images/               # Bilder (siehe unten)
│   └── favicon.svg           # Favicon
├── src/
│   ├── components/           # React Komponenten
│   │   ├── Header.jsx        # Sticky Header mit Navigation
│   │   ├── Footer.jsx        # Footer mit Links
│   │   ├── Hero.jsx          # Hero Section mit CTA
│   │   ├── ServiceCard.jsx   # Service-Kacheln
│   │   ├── CTAButton.jsx     # Call-to-Action Buttons
│   │   ├── CookieBanner.jsx  # DSGVO Cookie-Banner
│   │   ├── Modal.jsx         # Barrierefreier Dialog
│   │   ├── ContactForm.jsx   # Kontaktformular
│   │   └── SEO.jsx           # Meta-Tags & JSON-LD
│   ├── pages/                # Seiten-Komponenten
│   │   ├── index.jsx         # Startseite
│   │   ├── leistungen.jsx    # Leistungsübersicht
│   │   ├── referenzen.jsx    # Referenzen/Portfolio
│   │   ├── kontakt.jsx       # Kontaktseite
│   │   ├── impressum.jsx     # Impressum
│   │   └── datenschutz.jsx   # Datenschutzerklärung
│   ├── data/                 # Statische Daten
│   │   ├── company.js        # Unternehmensdaten
│   │   ├── services.js       # Dienstleistungen
│   │   └── references.js     # Referenzen
│   ├── utils/                # Hilfsfunktionen
│   │   ├── cookieConsent.js  # Cookie-Management
│   │   ├── accessibility.js  # A11y-Utilities
│   │   └── fetchLocalData.js # Daten-Laden
│   ├── styles/               # CSS Styles
│   │   ├── global.css        # Tailwind + Custom CSS
│   │   └── variables.css     # CSS Variablen
│   ├── test/                 # Test Setup
│   │   └── setup.js          # Vitest Konfiguration
│   ├── main.jsx              # App Entry Point
│   └── App.jsx               # Haupt-App-Komponente
├── index.html                # HTML Template
├── package.json              # Dependencies
├── vite.config.js            # Vite Konfiguration
├── tailwind.config.js        # Tailwind Konfiguration
├── netlify.toml              # Netlify Settings
└── README.md                 # Diese Datei
```

## Lokale Bilder hinzufügen

1. **Bilder in den richtigen Ordner legen:**
   ```
   public/images/
   ├── service-hausmeister.jpg
   ├── service-reinigung.jpg
   ├── service-entruempelung.jpg
   ├── service-entsorgung.jpg
   ├── ref-1a.jpg
   ├── ref-1b.jpg
   └── ...
   ```

2. **Unterstützte Formate:**
   - JPG/JPEG (fotos)
   - PNG (grafiken mit transparenz)
   - WebP (empfohlen für beste performance)
   - SVG (icons/logos)

3. **Bildoptimierung:**
   - Hero Bilder: max. 1920px Breite
   - Service Bilder: max. 800px Breite
   - Referenzen: max. 1200px Breite
   - Tools: [Squoosh](https://squoosh.app) oder [TinyPNG](https://tinypng.com)

4. **Bilder in den Code einbinden:**
   Die Bilder sind automatisch unter `/images/...` verfügbar:
   ```jsx
   <img src="/images/service-hausmeister.jpg" alt="Hausmeisterservice" />
   ```

## Cookie-Consent

Das Cookie-Banner ist vollständig DSGVO-konform implementiert:

- ✅ Granulare Kategorien (Essenziell, Präferenzen, Statistik)
- ✅ Klare "Ablehnen"-Option
- ✅ Speicherung in localStorage mit 13-Monats-Ablauf
- ✅ Versionierung für Re-Consent bei Updates
- ✅ Barrierefrei (Keyboard, Screen Reader)

### Verwendung im Code:

```javascript
import { hasConsent, COOKIE_CATEGORIES } from './utils/cookieConsent';

// Prüfen ob Analytics erlaubt
if (hasConsent(COOKIE_CATEGORIES.STATISTICS)) {
  // Analytics laden
}
```

## Konfiguration

### Unternehmensdaten anpassen

In `src/data/company.js` können alle Kontaktdaten und Texte angepasst werden:

```javascript
export const companyData = {
  name: 'TY-Dienstleistung',
  owner: 'Tayfun Yaroglu',
  contact: {
    phone: '0157 56276633',
    email: 'T.Y-Dienstleistung@gmx.de',
  },
  // ...
};
```

### Farben anpassen

In `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#013a55',    // Dunkelblau/Türkis
    // ...
  },
  accent: {
    DEFAULT: '#d1d927',    // Helles Gelbgrün
    // ...
  },
}
```

### SEO anpassen

In `src/data/company.js` unter `seo`:

```javascript
seo: {
  siteUrl: 'https://ty-dienstleistung.de',
  defaultTitle: 'TY-Dienstleistung | ...',
  defaultDescription: '...',
}
```

## Testing

```bash
# Tests ausführen
npm test

# Tests mit UI
npm run test:ui

# Einzelne Datei testen
npm test -- CookieBanner
```

## Technische Details

### Accessibility (WCAG 2.1 AA)

- Semantisches HTML5
- ARIA-Labels wo nötig
- Keyboard-Navigation
- Fokus-Management
- Screen Reader Support
- Reduced Motion Support

### Performance

- Code Splitting
- Lazy Loading von Bildern
- Preload für kritische Ressourcen
- Optimierte Schriftarten
- Komprimierte Assets

### Browser Support

- Chrome (letzte 2 Versionen)
- Firefox (letzte 2 Versionen)
- Safari (letzte 2 Versionen)
- Edge (letzte 2 Versionen)

## Lizenz

© 2024 TY-Dienstleistung - Alle Rechte vorbehalten

## Support

Bei Fragen oder Problemen:
- Telefon: 0157 56276633
- E-Mail: T.Y-Dienstleistung@gmx.de
