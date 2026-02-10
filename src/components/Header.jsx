import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import companyData from '../data/company';

/**
 * Header Component
 * Sticky Header mit großem Logo
 */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll-Listener für Sticky-Header-Effekt
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile Menu schließen bei Route-Change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Scroll-Lock bei mobilem Menü
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { path: '/', label: 'Startseite' },
    { path: '/leistungen', label: 'Leistungen' },
    { path: '/referenzen', label: 'Referenzen' },
    { path: '/kontakt', label: 'Kontakt' },
  ];

  const phoneLink = `tel:${companyData.contact.phoneRaw}`;

  // phoneLink wird im Mobile Menu verwendet, nicht entfernen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white shadow-sm'
      }`}
      role="banner"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 text-xl md:text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
            aria-label="TY-Dienstleistung - Zur Startseite"
          >
            <img 
              src="/images/logo.jpeg" 
              alt="TY-Dienstleistung Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg"
            />
            <span className="hidden sm:inline">TY-Dienstleistung</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Hauptnavigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-primary border-b-2 border-accent pb-0.5'
                      : 'text-gray-600 hover:text-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden flex items-center justify-center w-11 h-11 ml-2 text-gray-600 hover:text-primary rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-24 bg-white shadow-lg transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        }`}
        style={{ height: 'calc(100vh - 6rem)' }}
      >
        <nav className="container-custom py-6 flex flex-col" role="navigation" aria-label="Mobile Navigation">
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `py-4 text-lg font-medium border-b border-gray-100 transition-all duration-200 ${
                  isActive
                    ? 'text-primary pl-4 border-l-4 border-l-accent border-b-transparent'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50 hover:pl-2'
                }`
              }
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </NavLink>
          ))}

          {/* Mobile Contact Info */}
          <div className="mt-8 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">Schnelle Hilfe?</p>
            <p className="text-center text-sm text-gray-500">
              Telefon: <a href={phoneLink} className="text-primary hover:underline font-medium">{companyData.contact.phone}</a>
            </p>
            <p className="text-center text-sm text-gray-500 mt-2">
              oder per E-Mail:{" "}
              <a
                href={`mailto:${companyData.contact.email}`}
                className="text-primary hover:underline"
              >
                {companyData.contact.email}
              </a>
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
