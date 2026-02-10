import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  getConsent,
  setConsent,
  hasConsent,
  acceptAllCookies,
  acceptEssentialOnly,
  clearConsent,
  hasMadeConsentChoice,
  COOKIE_CATEGORIES,
} from '../cookieConsent';

describe('cookieConsent', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe('getConsent', () => {
    it('returns null when no consent is stored', () => {
      localStorage.getItem.mockReturnValue(null);
      expect(getConsent()).toBeNull();
    });

    it('returns parsed consent when valid consent exists', () => {
      const mockConsent = {
        version: '1.0',
        date: new Date().toISOString(),
        categories: {
          [COOKIE_CATEGORIES.ESSENTIAL]: true,
          [COOKIE_CATEGORIES.STATISTICS]: false,
        },
      };
      localStorage.getItem.mockReturnValue(JSON.stringify(mockConsent));
      expect(getConsent()).toEqual(mockConsent);
    });
  });

  describe('setConsent', () => {
    it('saves consent to localStorage', () => {
      const categories = {
        [COOKIE_CATEGORIES.ESSENTIAL]: true,
        [COOKIE_CATEGORIES.STATISTICS]: true,
      };
      
      setConsent(categories);
      
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'ty_cookie_consent',
        expect.stringContaining('essential')
      );
    });

    it('always sets essential to true', () => {
      const categories = {
        [COOKIE_CATEGORIES.ESSENTIAL]: false,
        [COOKIE_CATEGORIES.STATISTICS]: true,
      };
      
      setConsent(categories);
      
      const callArg = localStorage.setItem.mock.calls[0][1];
      const savedConsent = JSON.parse(callArg);
      expect(savedConsent.categories[COOKIE_CATEGORIES.ESSENTIAL]).toBe(true);
    });
  });

  describe('hasConsent', () => {
    it('returns true for essential category by default', () => {
      localStorage.getItem.mockReturnValue(null);
      expect(hasConsent(COOKIE_CATEGORIES.ESSENTIAL)).toBe(true);
    });

    it('returns false for statistics when no consent', () => {
      localStorage.getItem.mockReturnValue(null);
      expect(hasConsent(COOKIE_CATEGORIES.STATISTICS)).toBe(false);
    });

    it('returns true when consent exists for category', () => {
      const mockConsent = {
        version: '1.0',
        date: new Date().toISOString(),
        categories: {
          [COOKIE_CATEGORIES.ESSENTIAL]: true,
          [COOKIE_CATEGORIES.STATISTICS]: true,
        },
      };
      localStorage.getItem.mockReturnValue(JSON.stringify(mockConsent));
      expect(hasConsent(COOKIE_CATEGORIES.STATISTICS)).toBe(true);
    });
  });

  describe('acceptAllCookies', () => {
    it('saves all categories as true', () => {
      acceptAllCookies();
      
      const callArg = localStorage.setItem.mock.calls[0][1];
      const savedConsent = JSON.parse(callArg);
      
      expect(savedConsent.categories[COOKIE_CATEGORIES.ESSENTIAL]).toBe(true);
      expect(savedConsent.categories[COOKIE_CATEGORIES.PREFERENCES]).toBe(true);
      expect(savedConsent.categories[COOKIE_CATEGORIES.STATISTICS]).toBe(true);
      expect(savedConsent.categories[COOKIE_CATEGORIES.MARKETING]).toBe(true);
    });
  });

  describe('acceptEssentialOnly', () => {
    it('saves only essential as true', () => {
      acceptEssentialOnly();
      
      const callArg = localStorage.setItem.mock.calls[0][1];
      const savedConsent = JSON.parse(callArg);
      
      expect(savedConsent.categories[COOKIE_CATEGORIES.ESSENTIAL]).toBe(true);
      expect(savedConsent.categories[COOKIE_CATEGORIES.PREFERENCES]).toBe(false);
      expect(savedConsent.categories[COOKIE_CATEGORIES.STATISTICS]).toBe(false);
      expect(savedConsent.categories[COOKIE_CATEGORIES.MARKETING]).toBe(false);
    });
  });

  describe('clearConsent', () => {
    it('removes consent from localStorage', () => {
      clearConsent();
      expect(localStorage.removeItem).toHaveBeenCalledWith('ty_cookie_consent');
    });
  });

  describe('hasMadeConsentChoice', () => {
    it('returns false when no consent exists', () => {
      localStorage.getItem.mockReturnValue(null);
      expect(hasMadeConsentChoice()).toBe(false);
    });

    it('returns true when consent exists', () => {
      const mockConsent = {
        version: '1.0',
        date: new Date().toISOString(),
        categories: { [COOKIE_CATEGORIES.ESSENTIAL]: true },
      };
      localStorage.getItem.mockReturnValue(JSON.stringify(mockConsent));
      expect(hasMadeConsentChoice()).toBe(true);
    });
  });
});
