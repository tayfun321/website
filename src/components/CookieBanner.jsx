import { useState, useEffect, useCallback } from 'react';
import { X, Settings, Shield, BarChart3, Settings2, Check } from 'lucide-react';
import { 
  getConsent, 
  setConsent, 
  acceptAllCookies, 
  acceptEssentialOnly,
  hasMadeConsentChoice,
  COOKIE_CATEGORIES 
} from '../utils/cookieConsent';

/**
 * CookieBanner Component
 * DSGVO-konform mit granularer Kontrolle
 */
function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [categories, setCategories] = useState({
    [COOKIE_CATEGORIES.ESSENTIAL]: true,
    [COOKIE_CATEGORIES.PREFERENCES]: false,
    [COOKIE_CATEGORIES.STATISTICS]: false,
    [COOKIE_CATEGORIES.MARKETING]: false,
  });

  // Prüfe beim Mounten ob Consent bereits vorliegt
  useEffect(() => {
    const checkConsent = () => {
      const existingConsent = getConsent();
      if (!existingConsent) {
        setIsVisible(true);
      } else {
        setCategories(existingConsent.categories);
      }
    };

    // Kurze Verzögerung für bessere UX (nicht sofortiges Popup)
    const timer = setTimeout(checkConsent, 500);
    return () => clearTimeout(timer);
  }, []);

  // Höre auf Consent-Änderungen von anderen Komponenten
  useEffect(() => {
    const handleConsentChange = () => {
      const existingConsent = getConsent();
      if (!existingConsent) {
        setIsVisible(true);
      }
    };

    window.addEventListener('cookieConsentChanged', handleConsentChange);
    return () => window.removeEventListener('cookieConsentChanged', handleConsentChange);
  }, []);

  // Alle akzeptieren
  const handleAcceptAll = useCallback(() => {
    acceptAllCookies();
    setIsVisible(false);
    setShowSettings(false);
  }, []);

  // Nur Essenzielle
  const handleAcceptEssential = useCallback(() => {
    acceptEssentialOnly();
    setIsVisible(false);
    setShowSettings(false);
  }, []);

  // Einstellungen speichern
  const handleSaveSettings = useCallback(() => {
    setConsent(categories);
    setIsVisible(false);
    setShowSettings(false);
  }, [categories]);

  // Kategorie toggeln
  const toggleCategory = useCallback((category) => {
    if (category === COOKIE_CATEGORIES.ESSENTIAL) return; // Kann nicht deaktiviert werden
    setCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-[900] backdrop-blur-sm"
        onClick={() => {}} // Verhindert Schließen durch Klick außerhalb
        aria-hidden="true"
      />

      {/* Banner */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        aria-describedby="cookie-description"
        className="fixed bottom-0 left-0 right-0 md:left-auto md:right-4 md:bottom-4 md:max-w-lg md:rounded-2xl z-[901] bg-white shadow-2xl animate-slide-up"
      >
        {!showSettings ? (
          // Hauptansicht
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              
              <div className="flex-grow">
                <h2 id="cookie-title" className="text-lg font-bold text-gray-900 mb-2">
                  Ihre Privatsphäre ist uns wichtig
                </h2>
                <p id="cookie-description" className="text-sm text-gray-600 mb-4">
                  Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. 
                  Essenzielle Cookies sind immer aktiv. Weitere Informationen finden Sie in unserer{' '}
                  <a href="/datenschutz" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </a>.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleAcceptAll}
                    className="btn-primary w-full justify-center"
                    aria-label="Alle Cookies akzeptieren"
                  >
                    <Check className="w-4 h-4" aria-hidden="true" />
                    Akzeptieren alle
                  </button>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={handleAcceptEssential}
                      className="btn-outline text-sm py-2.5"
                      aria-label="Nur essenzielle Cookies akzeptieren"
                    >
                      Nur essenzielle
                    </button>
                    
                    <button
                      onClick={() => setShowSettings(true)}
                      className="btn-ghost text-sm py-2.5"
                      aria-label="Cookie-Einstellungen anpassen"
                    >
                      <Settings className="w-4 h-4" aria-hidden="true" />
                      Einstellungen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Einstellungen-Ansicht
          <div className="p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-primary" aria-hidden="true" />
                Cookie-Einstellungen
              </h2>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                aria-label="Zurück zur Übersicht"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Cookie Categories */}
            <div className="space-y-3 mb-6">
              {/* Essential */}
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" aria-hidden="true" />
                    <span className="font-semibold text-gray-900">Essenziell</span>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                      Erforderlich
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={categories[COOKIE_CATEGORIES.ESSENTIAL]}
                    disabled
                    className="w-5 h-5 text-primary rounded border-gray-300 cursor-not-allowed"
                    aria-label="Essenzielle Cookies (immer aktiv)"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Notwendig für die grundlegende Funktionalität der Website. 
                  Ohne diese Cookies kann die Website nicht richtig funktionieren.
                </p>
              </div>

              {/* Preferences */}
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-primary" aria-hidden="true" />
                    <span className="font-semibold text-gray-900">Präferenzen</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={categories[COOKIE_CATEGORIES.PREFERENCES]}
                    onChange={() => toggleCategory(COOKIE_CATEGORIES.PREFERENCES)}
                    className="w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary cursor-pointer"
                    aria-label="Präferenz-Cookies aktivieren"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Speichern Ihre Einstellungen wie Sprache oder Region für ein 
                  verbessertes Erlebnis.
                </p>
              </div>

              {/* Statistics */}
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" aria-hidden="true" />
                    <span className="font-semibold text-gray-900">Statistik</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={categories[COOKIE_CATEGORIES.STATISTICS]}
                    onChange={() => toggleCategory(COOKIE_CATEGORIES.STATISTICS)}
                    className="w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary cursor-pointer"
                    aria-label="Statistik-Cookies aktivieren"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Helfen uns zu verstehen, wie Besucher mit der Website interagieren, 
                  indem sie Informationen anonym sammeln.
                </p>
              </div>
            </div>

            {/* Settings Actions */}
            <div className="flex flex-col gap-2">
              <button
                onClick={handleSaveSettings}
                className="btn-primary w-full justify-center"
              >
                <Check className="w-4 h-4" aria-hidden="true" />
                Einstellungen speichern
              </button>
              
              <button
                onClick={() => setShowSettings(false)}
                className="btn-ghost w-full"
              >
                Abbrechen
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CookieBanner;
