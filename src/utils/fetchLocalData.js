/**
 * Utility für das Laden lokaler Daten
 * Referenzen, Services, etc.
 */

// Lokale Daten statt API-Calls
import { servicesData } from '../data/services';
import { referencesData } from '../data/references';

/**
 * Holt alle Services
 */
export function getAllServices() {
  return Promise.resolve(servicesData);
}

/**
 * Holt einen einzelnen Service nach Slug
 */
export function getServiceBySlug(slug) {
  const service = servicesData.find(s => s.slug === slug);
  return Promise.resolve(service || null);
}

/**
 * Holt alle Referenzen
 */
export function getAllReferences() {
  return Promise.resolve(referencesData);
}

/**
 * Holt Referenzen gefiltert nach Kategorie
 */
export function getReferencesByCategory(category) {
  const filtered = referencesData.filter(r => r.category === category);
  return Promise.resolve(filtered);
}

/**
 * Holt eine einzelne Referenz nach ID
 */
export function getReferenceById(id) {
  const reference = referencesData.find(r => r.id === id);
  return Promise.resolve(reference || null);
}

/**
 * Simuliert API-Delay (für Loading-States testen)
 */
export function simulateDelay(ms = 500) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Holt Daten mit Error-Handling
 */
export async function fetchDataWithErrorHandling(fetcher, errorMessage = 'Daten konnten nicht geladen werden') {
  try {
    const data = await fetcher();
    return { data, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error: errorMessage };
  }
}
