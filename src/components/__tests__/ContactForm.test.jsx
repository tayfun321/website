import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  it('renders form fields', () => {
    render(<ContactForm />);
    
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-Mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telefon/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nachricht/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Datenschutzerklärung/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty required fields', async () => {
    render(<ContactForm />);
    
    const submitButton = screen.getByRole('button', { name: /Nachricht senden/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Bitte geben Sie Ihren Namen ein/i)).toBeInTheDocument();
    });
  });

  it('accepts valid input', () => {
    render(<ContactForm />);
    
    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: 'Max Mustermann' } });
    
    expect(nameInput).toHaveValue('Max Mustermann');
  });

  it('has phone hint visible by default', () => {
    render(<ContactForm />);
    
    expect(screen.getByText(/Schneller geht's telefonisch/i)).toBeInTheDocument();
  });

  it('submits form with valid data', async () => {
    render(<ContactForm />);
    
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Max Mustermann' } });
    fireEvent.change(screen.getByLabelText(/E-Mail/i), { target: { value: 'max@example.com' } });
    fireEvent.change(screen.getByLabelText(/Nachricht/i), { target: { value: 'Dies ist eine Testnachricht mit mehr als 10 Zeichen.' } });
    fireEvent.click(screen.getByLabelText(/Datenschutzerklärung/i));
    
    const submitButton = screen.getByRole('button', { name: /Nachricht senden/i });
    fireEvent.click(submitButton);

    // Form should submit without validation errors
    await waitFor(() => {
      expect(screen.queryByText(/Bitte geben Sie Ihren Namen ein/i)).not.toBeInTheDocument();
    });
  });

  it('is accessible with proper labels', () => {
    render(<ContactForm />);
    
    expect(screen.getByLabelText(/Name/i)).toHaveAttribute('required');
    expect(screen.getByLabelText(/E-Mail/i)).toHaveAttribute('required');
    expect(screen.getByLabelText(/Nachricht/i)).toHaveAttribute('required');
  });
});
