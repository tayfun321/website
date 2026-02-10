/**
 * Accessibility Utilities
 * WCAG 2.1 AA Unterstützung
 */

/**
 * Fokussiert ein Element und setzt den Fokus-Modus
 */
export function focusElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

/**
 * Trapt Fokus innerhalb eines Modals (für Tastaturnavigation)
 */
export function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  function handleTabKey(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  }

  element.addEventListener('keydown', handleTabKey);
  
  // Cleanup-Funktion zurückgeben
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
}

/**
 * Erstellt eine eindeutige ID
 */
export function generateId(prefix = 'id') {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Announcement für Screen Reader
 */
export function announceToScreenReader(message, priority = 'polite') {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Prüft ob Benutzer reduced-motion bevorzugt
 */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Prüft ob Benutzer hohen Kontrast bevorzugt
 */
export function prefersHighContrast() {
  return window.matchMedia('(prefers-contrast: high)').matches;
}

/**
 * Smooth Scroll mit Reduced Motion Check
 */
export function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId);
  if (!element) return;

  if (prefersReducedMotion()) {
    element.scrollIntoView();
  } else {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Keyboard Navigation Helper
 */
export function handleKeyboardNavigation(event, actions) {
  const { key } = event;
  
  if (actions[key]) {
    event.preventDefault();
    actions[key]();
  }
}

/**
 * Prüft ob Element im Viewport ist (für Lazy Loading)
 */
export function isInViewport(element, offset = 0) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -offset &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Debounce-Funktion für Performance
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle-Funktion für Performance
 */
export function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
