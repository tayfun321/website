import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Layout Components
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

// Pages
import Home from './pages/index'
import Leistungen from './pages/leistungen'
import Referenzen from './pages/referenzen'
import Kontakt from './pages/kontakt'
import Impressum from './pages/impressum'
import Datenschutz from './pages/datenschutz'

// Utils
import { hasConsent, COOKIE_CATEGORIES } from './utils/cookieConsent'

/**
 * ScrollToTop Komponente
 * Scrollt automatisch nach oben bei Route-Änderung
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  
  return null;
}

function App() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    // Prüfe Cookie-Consent bei Initialisierung
    const checkConsent = () => {
      const statsConsent = hasConsent(COOKIE_CATEGORIES.STATISTICS)
      setAnalyticsEnabled(statsConsent)
    }

    checkConsent()

    // Höre auf Consent-Änderungen
    window.addEventListener('cookieConsentChanged', checkConsent)
    return () => window.removeEventListener('cookieConsentChanged', checkConsent)
  }, [])

  // Analytics nur laden wenn Consent vorliegt
  useEffect(() => {
    if (analyticsEnabled) {
      // Hier könnte Plausible, Matomo etc. initialisiert werden
      console.log('Analytics würde jetzt geladen werden (mit Consent)')
    }
  }, [analyticsEnabled])

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      
      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>
      
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App
