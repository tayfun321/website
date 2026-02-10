/**
 * Cookie Consent Management System
 * DSGVO-konform mit granularer Kontrolle
 * 
 * Speichert Zustimmung in localStorage mit 13-Monats-Ablauf
 */

const STORAGE_KEY = 'ty_cookie_consent';
const CONSENT_VERSION = '1.0'; // Bei Änderungen erhöhen für Re-Consent
const CONSENT_EXPIRY_MONTHS = 13;

// Kategorien von Cookies/Tracking
export const COOKIE_CATEGORIES = {
  ESSENTIAL: 'essential',
  PREFERENCES: 'preferences',
  STATISTICS: 'statistics',
  MARKETING: 'marketing',
};

// Standard-Konfiguration (nur essenziell = true)
export const DEFAULT_CONSENT = {
  version: CONSENT_VERSION,
  date: null,
  categories: {
    [COOKIE_CATEGORIES.ESSENTIAL]: true, // Immer true, kann nicht abgewählt werden
    [COOKIE_CATEGORIES.PREFERENCES]: false,
    [COOKIE_CATEGORIES.STATISTICS]: false,
    [COOKIE_CATEGORIES.MARKETING]: false,
  },
};

/**
 * Prüft ob LocalStorage verfügbar ist
 */
function isLocalStorageAvailable() {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Holt aktuelle Consent-Daten aus localStorage
 */
export function getConsent() {
  if (!isLocalStorageAvailable()) {
    return { ...DEFAULT_CONSENT, date: new Date().toISOString() };
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const consent = JSON.parse(stored);
    
    // Prüfe auf Version-Change (für Re-Consent bei Updates)
    if (consent.version !== CONSENT_VERSION) {
      return null;
    }

    // Prüfe auf Ablauf (13 Monate)
    if (consent.date) {
      const consentDate = new Date(consent.date);
      const expiryDate = new Date(consentDate);
      expiryDate.setMonth(expiryDate.getMonth() + CONSENT_EXPIRY_MONTHS);
      
      if (new Date() > expiryDate) {
        return null;
      }
    }

    return consent;
  } catch (e) {
    console.error('Error reading cookie consent:', e);
    return null;
  }
}

/**
 * Speichert Consent-Daten in localStorage
 */
export function setConsent(categories) {
  if (!isLocalStorageAvailable()) {
    console.warn('LocalStorage not available, consent cannot be saved');
    return false;
  }

  try {
    const consent = {
      version: CONSENT_VERSION,
      date: new Date().toISOString(),
      categories: {
        ...DEFAULT_CONSENT.categories,
        ...categories,
        // Essential kann nie false sein
        [COOKIE_CATEGORIES.ESSENTIAL]: true,
      },
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    
    // Event für andere Komponenten auslösen
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { 
      detail: consent 
    }));

    return true;
  } catch (e) {
    console.error('Error saving cookie consent:', e);
    return false;
  }
}

/**
 * Prüft ob für eine Kategorie Zustimmung vorliegt
 */
export function hasConsent(category) {
  const consent = getConsent();
  if (!consent) return category === COOKIE_CATEGORIES.ESSENTIAL;
  return consent.categories[category] === true;
}

/**
 * Akzeptiert alle Kategorien
 */
export function acceptAllCookies() {
  return setConsent({
    [COOKIE_CATEGORIES.ESSENTIAL]: true,
    [COOKIE_CATEGORIES.PREFERENCES]: true,
    [COOKIE_CATEGORIES.STATISTICS]: true,
    [COOKIE_CATEGORIES.MARKETING]: true,
  });
}

/**
 * Akzeptiert nur essenzielle Cookies
 */
export function acceptEssentialOnly() {
  return setConsent({
    [COOKIE_CATEGORIES.ESSENTIAL]: true,
    [COOKIE_CATEGORIES.PREFERENCES]: false,
    [COOKIE_CATEGORIES.STATISTICS]: false,
    [COOKIE_CATEGORIES.MARKETING]: false,
  });
}

/**
 * Löscht alle Consent-Daten (für Testing)
 */
export function clearConsent() {
  if (isLocalStorageAvailable()) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

/**
 * Prüft ob Consent bereits gegeben wurde
 */
export function hasMadeConsentChoice() {
  return getConsent() !== null;
}

/**
 * Holt alle Consent-Details als lesbares Objekt
 */
export function getConsentDetails() {
  const consent = getConsent();
  if (!consent) return null;

  return {
    ...consent,
    formattedDate: consent.date 
      ? new Date(consent.date).toLocaleDateString('de-DE')
      : null,
    acceptedCategories: Object.entries(consent.categories)
      .filter(([, value]) => value)
      .map(([key]) => key),
  };
}

// Hook für React (siehe useCookieConsent in separater Datei)
export const cookieConsentAPI = {
  getConsent,
  setConsent,
  hasConsent,
  acceptAllCookies,
  acceptEssentialOnly,
  clearConsent,
  hasMadeConsentChoice,
  getConsentDetails,
  COOKIE_CATEGORIES,
};

export default cookieConsentAPI;
