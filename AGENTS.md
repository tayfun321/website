# TY-Dienstleistung Website - Agent Guide

## Project Overview

This is a modern, production-ready corporate website for **TY-Dienstleistung**, a German service company specializing in building maintenance (Hausmeisterservice), building cleaning (Gebäudereinigung), decluttering (Entrümpelung), and disposal services (Entsorgung).

The website is built as a React single-page application (SPA) with German as the primary language for all UI text, content, and code comments.

## Technology Stack

| Category | Technology | Version |
|----------|-----------|---------|
| Framework | React | 18.2.0 |
| Build Tool | Vite | 5.1.0 |
| Routing | React Router DOM | 6.22.0 |
| Styling | TailwindCSS | 3.4.1 |
| UI Icons | Lucide React | 0.344.0 |
| SEO | React Helmet Async | 2.0.4 |
| Testing | Vitest | 1.2.2 |
| Testing Utils | React Testing Library | 14.2.1 |

## Project Structure

```
/
├── public/                    # Static assets
│   ├── images/               # Service/reference images (place local images here)
│   └── favicon.svg           # Site favicon
├── src/
│   ├── components/           # Reusable React components
│   │   ├── __tests__/        # Component tests
│   │   ├── Header.jsx        # Sticky navigation header
│   │   ├── Footer.jsx        # Site footer
│   │   ├── Hero.jsx          # Hero section with CTA
│   │   ├── ServiceCard.jsx   # Service display cards
│   │   ├── CTAButton.jsx     # Call-to-action buttons
│   │   ├── CookieBanner.jsx  # GDPR cookie consent banner
│   │   ├── ContactForm.jsx   # Contact form component
│   │   ├── Modal.jsx         # Accessible dialog modal
│   │   └── SEO.jsx           # Meta tags & JSON-LD structured data
│   ├── pages/                # Page components (route targets)
│   │   ├── index.jsx         # Homepage
│   │   ├── leistungen.jsx    # Services overview
│   │   ├── referenzen.jsx    # References/portfolio
│   │   ├── kontakt.jsx       # Contact page
│   │   ├── impressum.jsx     # Legal imprint (required in Germany)
│   │   └── datenschutz.jsx   # Privacy policy (required in Germany)
│   ├── data/                 # Static data files
│   │   ├── company.js        # Company info, contact data, SEO defaults
│   │   ├── services.js       # Service definitions and content
│   │   └── references.js     # Portfolio/reference items
│   ├── utils/                # Utility functions
│   │   ├── __tests__/        # Utility tests
│   │   ├── cookieConsent.js  # GDPR-compliant cookie management
│   │   ├── accessibility.js  # Accessibility helpers
│   │   └── fetchLocalData.js # Data loading utilities
│   ├── styles/               # CSS styles
│   │   ├── global.css        # Tailwind imports + custom component classes
│   │   └── variables.css     # CSS custom properties
│   ├── test/                 # Test configuration
│   │   └── setup.js          # Vitest setup, mocks (localStorage, matchMedia, etc.)
│   ├── main.jsx              # Application entry point
│   └── App.jsx               # Root app component with routing
├── index.html                # HTML template with critical CSS inline
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration (includes test config)
├── tailwind.config.js        # Tailwind theme customization
├── eslint.config.js          # ESLint rules (React, Hooks, Refresh)
├── netlify.toml              # Netlify deployment configuration
└── postcss.config.js         # PostCSS (Tailwind + Autoprefixer)
```

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Create production build (outputs to /dist)
npm run build

# Preview production build locally
npm run preview

# Run tests
npm test

# Run tests with UI
npm run test:ui

# Run linter
npm run lint
```

## Design System

### Colors
- **Primary**: `#013a55` (Dark Blue/Turquoise) - Brand color
- **Accent**: `#d1d927` (Yellow-Green) - CTAs, highlights
- **Extended palette**: Defined in `tailwind.config.js` with 50-900 variants

### Typography
- **Font**: Inter (Google Fonts)
- **Base size**: 16px with responsive scaling
- **Custom font sizes**: `text-xxl` (1.375rem / 22px) for better readability

### Custom CSS Classes
Located in `src/styles/global.css` using Tailwind's `@layer`:
- **Buttons**: `.btn`, `.btn-primary`, `.btn-accent`, `.btn-outline`, `.btn-phone`
- **Cards**: `.card`, `.card-hover`
- **Forms**: `.form-input`, `.form-label`, `.form-error`
- **Layout**: `.section`, `.section-alt`, `.container-custom`
- **Typography**: `.heading-1`, `.heading-2`, `.heading-3`, `.text-body`, `.text-lead`

## Code Style Guidelines

### Language
- **All UI text and comments are in German**
- Code (variables, functions, components) uses English

### File Naming
- Components: PascalCase (e.g., `CookieBanner.jsx`)
- Utilities/data: camelCase (e.g., `cookieConsent.js`)
- Test files: `*.test.jsx` or `*.test.js`

### Component Structure
- Functional components with hooks
- Props destructuring in parameters
- Default exports for page components
- Named exports for utilities

### Accessibility Requirements
- WCAG 2.1 AA compliance is mandatory
- All interactive elements must be keyboard accessible
- Use `focus-visible` for focus styles (defined in global.css)
- ARIA labels for icon-only buttons
- Skip link in index.html for keyboard users
- Support `prefers-reduced-motion` (defined in global.css)
- Minimum touch target: 44px (configured in Tailwind as `min-h-11 min-w-11`)

## Testing Strategy

### Test Framework
- **Vitest** for test runner
- **React Testing Library** for component testing
- **jest-dom** matchers for DOM assertions

### Test Setup
Configuration in `vite.config.js`:
```javascript
test: {
  environment: 'jsdom',
  globals: true,
  setupFiles: './src/test/setup.js',
}
```

### Mocks (in `src/test/setup.js`)
- `localStorage` - Mocked with vi.fn()
- `matchMedia` - Mocked for responsive testing
- `window.scrollTo` - Mocked as vi.fn()
- `IntersectionObserver` - Mocked as empty class

### Running Tests
```bash
# Run all tests
npm test

# Run specific test file
npm test -- CookieBanner

# Run with UI
npm run test:ui
```

### Test Locations
- Component tests: `src/components/__tests__/*.test.jsx`
- Utility tests: `src/utils/__tests__/*.test.js`

## GDPR / Cookie Consent

The project includes a comprehensive GDPR-compliant cookie consent system in `src/utils/cookieConsent.js`:

### Cookie Categories
- `ESSENTIAL` - Always enabled (cannot be disabled)
- `PREFERENCES` - User preferences
- `STATISTICS` - Analytics (requires consent)
- `MARKETING` - Marketing cookies (requires consent)

### Usage in Code
```javascript
import { hasConsent, COOKIE_CATEGORIES } from './utils/cookieConsent';

// Check if statistics/analytics is allowed
if (hasConsent(COOKIE_CATEGORIES.STATISTICS)) {
  // Load analytics
}
```

### Consent Storage
- Stored in `localStorage` with key `ty_cookie_consent`
- Auto-expires after 13 months
- Version tracking for re-consent on policy updates
- Dispatches `cookieConsentChanged` event on updates

## SEO

SEO is handled via the `SEO.jsx` component using `react-helmet-async`:

- Meta tags (title, description)
- OpenGraph tags for social sharing
- Twitter Card support
- JSON-LD LocalBusiness schema
- Canonical URLs

Usage:
```jsx
<SEO 
  title="Seiten-Titel"
  description="Seitenbeschreibung"
  pathname="/leistungen"
/>
```

## Adding Images

Place local images in `public/images/`:
- Hero background: `hero-bg.jpg`
- Service images: `service-*.jpg`
- Reference images: `ref-*.jpg`

Images are referenced from root: `/images/filename.jpg`

### Image Optimization Guidelines
- Hero images: max 1920px width
- Service images: max 800px width
- Reference images: max 1200px width
- Use WebP format when possible
- Tools: Squoosh, TinyPNG

## Deployment

### Netlify (Recommended)
Already configured in `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 20
- SPA redirect rules included
- Security headers configured (CSP, X-Frame-Options, etc.)

### Manual Deployment
The `dist/` folder after `npm run build` can be deployed to any static hosting:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- etc.

## Security Considerations

- Content Security Policy defined in `netlify.toml`
- X-Frame-Options: DENY
- X-XSS-Protection enabled
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- `.env` files are gitignored
- No sensitive data should be committed

## Common Tasks

### Adding a New Page
1. Create component in `src/pages/NeueSeite.jsx`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`
4. Add footer link if applicable

### Modifying Company Data
Edit `src/data/company.js` - this updates contact info across the entire site.

### Adding a New Service
Edit `src/data/services.js` and add the new service object to `servicesData` array.

### Changing Colors
Modify the color values in `tailwind.config.js` under `theme.extend.colors`.

### Updating Cookie Consent
If cookie policy changes, increment `CONSENT_VERSION` in `src/utils/cookieConsent.js` to trigger re-consent for all users.

## External Dependencies

The app loads these external resources:
- Google Fonts (Inter)
- Google Fonts CSS

These are configured in `index.html` with `preconnect` hints for performance.

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
