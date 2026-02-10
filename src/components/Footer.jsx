import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import companyData from '../data/company';

/**
 * Footer Component
 * Kontaktdaten, Links, Impressum & Datenschutz
 */
function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneLink = `tel:${companyData.contact.phoneRaw}`;

  const footerLinks = {
    services: [
      { label: 'Hausmeisterservice', path: '/leistungen' },
      { label: 'Gebäudereinigung', path: '/leistungen' },
      { label: 'Entrümpelung', path: '/leistungen' },
      { label: 'Entsorgung', path: '/leistungen' },
    ],
    company: [
      { label: 'Referenzen', path: '/referenzen' },
      { label: 'Kontakt', path: '/kontakt' },
    ],
    legal: [
      { label: 'Impressum', path: '/impressum' },
      { label: 'Datenschutz', path: '/datenschutz' },
    ],
  };

  return (
    <footer className="bg-primary text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-3 text-xl font-bold text-white hover:opacity-90 transition-opacity mb-4"
              aria-label="TY-Dienstleistung - Zur Startseite"
            >
              <img 
                src="/images/logo.jpeg" 
                alt="TY-Dienstleistung Logo"
                className="w-20 h-20 object-contain rounded-lg"
              />
              <span>TY-Dienstleistung</span>
            </Link>
            
            <p className="text-primary-100 text-sm mb-6 leading-relaxed">
              Ihr zuverlässiger Partner für Hausmeisterservice, Gebäudereinigung, 
              Entrümpelung und Entsorgung.
            </p>

            <div className="space-y-3">
              <a
                href={phoneLink}
                className="flex items-center gap-3 text-white hover:text-accent transition-colors group"
                aria-label={`Telefon: ${companyData.contact.phone}`}
              >
                <Phone className="w-5 h-5 text-accent" aria-hidden="true" />
                <span className="group-hover:underline">{companyData.contact.phone}</span>
              </a>
              
              <a
                href={`mailto:${companyData.contact.email}`}
                className="flex items-center gap-3 text-white hover:text-accent transition-colors group"
                aria-label={`E-Mail: ${companyData.contact.email}`}
              >
                <Mail className="w-5 h-5 text-accent" aria-hidden="true" />
                <span className="group-hover:underline">{companyData.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Leistungen</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-primary-100 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Unternehmen</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-primary-100 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Rechtliches</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-primary-100 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-primary-400/30">
              <p className="text-xs text-primary-200 mb-2">Unsere Werte:</p>
              <div className="flex flex-wrap gap-2">
                {companyData.trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center px-2 py-1 bg-primary-600/50 rounded text-xs text-accent"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-400/30">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-200">
            <p>
              © {currentYear} {companyData.name} - {companyData.owner}. Alle Rechte vorbehalten.
            </p>
            
            {/* Cookie Settings Link */}
            <button
              type="button"
              onClick={() => {
                // Lösche Consent um Banner neu anzuzeigen
                localStorage.removeItem('ty_cookie_consent');
                window.dispatchEvent(new CustomEvent('cookieConsentChanged'));
                window.location.reload();
              }}
              className="text-primary-200 hover:text-white transition-colors underline"
            >
              Cookie-Einstellungen ändern
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
