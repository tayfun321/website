import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Phone } from 'lucide-react';
import CTAButton from './CTAButton';
import companyData from '../data/company';

/**
 * ContactForm Component
 * Validiertes Kontaktformular mit Feedback
 */
function ContactForm({ showPhoneHint = true }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Validierung
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Bitte geben Sie Ihren Namen ein';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Der Name muss mindestens 2 Zeichen haben';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }

    if (formData.phone && !/^[\d\s\+\-\(\)]{5,}$/.test(formData.phone)) {
      newErrors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Bitte geben Sie eine Nachricht ein';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Die Nachricht muss mindestens 10 Zeichen haben';
    }

    if (!formData.privacy) {
      newErrors.privacy = 'Bitte akzeptieren Sie die Datenschutzerklärung';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Input Change Handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Fehler zurücksetzen bei Eingabe
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Simulation API-Call (in Produktion durch echten Endpoint ersetzen)
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Hier würde normalerweise der API-Call stehen:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(
        'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder rufen Sie uns an.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Erfolgreich gesendet Ansicht
  if (isSubmitted) {
    return (
      <div className="text-center py-8 animate-fade-in">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Nachricht gesendet!
        </h3>
        <p className="text-gray-600 mb-6">
          Vielen Dank für Ihre Anfrage. Wir melden uns so schnell wie möglich bei Ihnen.
        </p>
        <CTAButton
          variant="primary"
          href={`tel:${companyData.contact.phoneRaw}`}
          icon="phone"
        >
          Oder jetzt anrufen: {companyData.contact.phone}
        </CTAButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="name" className="form-label">
          Name <span className="text-red-500" aria-label="(Pflichtfeld)">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`form-input ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
          placeholder="Ihr vollständiger Name"
          required
          aria-required="true"
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="form-error flex items-center gap-1">
            <AlertCircle className="w-4 h-4" aria-hidden="true" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="form-label">
          E-Mail <span className="text-red-500" aria-label="(Pflichtfeld)">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-input ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
          placeholder="ihre@email.de"
          required
          aria-required="true"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="form-error flex items-center gap-1">
            <AlertCircle className="w-4 h-4" aria-hidden="true" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone (optional) */}
      <div>
        <label htmlFor="phone" className="form-label">
          Telefon <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`form-input ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
          placeholder="z.B. 0157 56276633"
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="form-error flex items-center gap-1">
            <AlertCircle className="w-4 h-4" aria-hidden="true" />
            {errors.phone}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="form-label">
          Nachricht <span className="text-red-500" aria-label="(Pflichtfeld)">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`form-input resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
          placeholder="Beschreiben Sie kurz Ihr Anliegen..."
          required
          aria-required="true"
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="form-error flex items-center gap-1">
            <AlertCircle className="w-4 h-4" aria-hidden="true" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Privacy Checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            className={`mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer ${
              errors.privacy ? 'border-red-500' : ''
            }`}
            required
            aria-required="true"
            aria-invalid={errors.privacy ? 'true' : 'false'}
            aria-describedby={errors.privacy ? 'privacy-error' : 'privacy-text'}
          />
          <span id="privacy-text" className="text-sm text-gray-600">
            Ich habe die{' '}
            <a href="/datenschutz" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              Datenschutzerklärung
            </a>{' '}
            gelesen und stimme der Verarbeitung meiner Daten zu.{' '}
            <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.privacy && (
          <p id="privacy-error" className="form-error mt-1 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" aria-hidden="true" />
            {errors.privacy}
          </p>
        )}
      </div>

      {/* Submit Error */}
      {submitError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-red-700">{submitError}</p>
        </div>
      )}

      {/* Phone Hint */}
      {showPhoneHint && (
        <div className="p-4 bg-accent/10 rounded-lg flex items-start gap-3">
          <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-gray-700">
            <strong>Schneller geht&apos;s telefonisch:</strong><br />
            Für kurzfristige Termine oder dringende Anliegen rufen Sie uns bitte direkt an unter{' '}
            <a href={`tel:${companyData.contact.phoneRaw}`} className="text-primary font-semibold hover:underline">
              {companyData.contact.phone}
            </a>
          </p>
        </div>
      )}

      {/* Submit Button */}
      <CTAButton
        type="submit"
        variant="primary"
        size="lg"
        loading={isSubmitting}
        icon="arrow"
        iconPosition="right"
        className="w-full"
      >
        {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
      </CTAButton>

      <p className="text-xs text-gray-500 text-center">
        * Pflichtfelder
      </p>
    </form>
  );
}

export default ContactForm;
