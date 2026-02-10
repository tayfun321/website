import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CookieBanner from '../CookieBanner';
import { clearConsent } from '../../utils/cookieConsent';

describe('CookieBanner', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    clearConsent();
  });

  it('renders cookie banner when no consent is given', async () => {
    render(<CookieBanner />);
    
    await waitFor(() => {
      expect(screen.getByText(/Ihre Privatsphäre ist uns wichtig/i)).toBeInTheDocument();
    });
  });

  it('has accept all button', async () => {
    render(<CookieBanner />);
    
    await waitFor(() => {
      expect(screen.getByLabelText(/Alle Cookies akzeptieren/i)).toBeInTheDocument();
    });
  });

  it('has essential only button', async () => {
    render(<CookieBanner />);
    
    await waitFor(() => {
      expect(screen.getByLabelText(/Nur essenzielle Cookies akzeptieren/i)).toBeInTheDocument();
    });
  });

  it('has settings button', async () => {
    render(<CookieBanner />);
    
    await waitFor(() => {
      expect(screen.getByLabelText(/Cookie-Einstellungen anpassen/i)).toBeInTheDocument();
    });
  });

  it('opens settings when settings button is clicked', async () => {
    render(<CookieBanner />);
    
    await waitFor(() => {
      fireEvent.click(screen.getByLabelText(/Cookie-Einstellungen anpassen/i));
    });

    expect(screen.getByText(/Cookie-Einstellungen/i)).toBeInTheDocument();
  });

  it('has essential cookies always enabled in settings', async () => {
    render(<CookieBanner />);
    
    await waitFor(() => {
      fireEvent.click(screen.getByLabelText(/Cookie-Einstellungen anpassen/i));
    });

    const essentialCheckbox = screen.getByLabelText(/Essenzielle Cookies/i);
    expect(essentialCheckbox).toBeChecked();
    expect(essentialCheckbox).toBeDisabled();
  });

  it('is accessible as dialog', async () => {
    render(<CookieBanner />);
    
    await waitFor(() => {
      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
      expect(dialog).toHaveAttribute('aria-modal', 'true');
      expect(dialog).toHaveAttribute('aria-labelledby', 'cookie-title');
    });
  });
});
