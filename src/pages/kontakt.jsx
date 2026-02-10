import { Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import companyData from '../data/company';

/**
 * Kontakt Page
 * Kontaktformular und Kontaktdaten
 */
function Kontakt() {
  const phoneLink = `tel:${companyData.contact.phoneRaw}`;

  return (
    <>
      <SEO 
        title="Kontakt"
        description="Kontaktieren Sie TY-Dienstleistung in Velbert. Telefon: 0157 56276633. Wir freuen uns auf Ihre Anfrage!"
        pathname="/kontakt"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-accent text-sm font-medium mb-4">
              Kontakt
            </span>
            <h1 className="heading-1 text-white mb-6">
              Wir sind für Sie da
            </h1>
            <p className="text-lg md:text-xl text-primary-100">
              Haben Sie Fragen oder möchten Sie ein Angebot einholen? 
              Rufen Sie uns an oder schreiben Sie uns – wir melden uns schnellstmöglich.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" aria-labelledby="contact-title">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 id="contact-title" className="heading-2 mb-6">
                Direkter Kontakt
              </h2>
              <p className="text-gray-600 mb-8">
                Für schnelle Hilfe oder kurzfristige Termine erreichen Sie uns am besten telefonisch. 
                Wir sind Montag bis Samstag für Sie erreichbar.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={phoneLink}
                  className="flex items-start gap-4 p-6 bg-accent/10 rounded-xl hover:bg-accent/20 transition-colors group"
                  aria-label={`Telefon: ${companyData.contact.phone}`}
                >
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-600 block mb-1">Telefon (geschäftlich)</span>
                    <span className="text-xl font-bold text-primary">{companyData.contact.phone}</span>
                    <span className="text-sm text-accent-600 block mt-1">Jetzt anrufen →</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                  aria-label={`E-Mail: ${companyData.contact.email}`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-600 block mb-1">E-Mail</span>
                    <span className="text-lg font-semibold text-gray-900">{companyData.contact.email}</span>
                  </div>
                </a>

                {/* Availability */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-600 block mb-1">Erreichbarkeit</span>
                    <span className="text-lg font-semibold text-gray-900">Mo–Sa: 8:00–18:00 Uhr</span>
                    <span className="text-sm text-gray-500 block mt-1">
                      Auch außerhalb dieser Zeiten für Notfälle erreichbar
                    </span>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-sm text-gray-600 block mb-1">Adresse</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {companyData.contact.address.street}<br />
                    {companyData.contact.address.zip} {companyData.contact.address.city}
                  </span>
                </div>
              </div>

              {/* Service Area Note */}
              <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-sm text-gray-600">
                  <strong>Einsatzgebiet:</strong> Primär in Velbert und dem gesamten Kreis Mettmann. 
                  Andere Regionen auf Anfrage.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
                <h2 className="heading-3 mb-2">Schreiben Sie uns</h2>
                <p className="text-gray-600 mb-6">
                  Füllen Sie das Formular aus und wir melden uns bei Ihnen.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-alt" aria-labelledby="faq-title">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="faq-title" className="heading-2 mb-4">
              Häufige Fragen
            </h2>
            <p className="text-gray-600">
              Hier finden Sie Antworten auf die am häufigsten gestellten Fragen.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Wie schnell können Sie einen Termin anbieten?',
                a: 'In den meisten Fällen können wir innerhalb von 1-3 Tagen einen Termin anbieten. Bei dringenden Anliesten rufen Sie uns bitte direkt an.',
              },
              {
                q: 'Erstellen Sie kostenlose Kostenvoranschläge?',
                a: 'Ja, alle Kostenvoranschläge sind für Sie völlig unverbindlich und kostenlos.',
              },
              {
                q: 'Sind Sie versichert?',
                a: 'Ja, wir sind vollständig versichert (Betriebshaftpflicht). Auf Wunsch senden wir Ihnen gerne den Nachweis zu.',
              },
              {
                q: 'Welche Zahlungsmöglichkeiten bieten Sie an?',
                a: 'Wir akzeptieren Barzahlung, Überweisung und PayPal. Für gewerbliche Kunden bieten wir auch Zahlung auf Rechnung an.',
              },
            ].map((faq, index) => (
              <details 
                key={index} 
                className="bg-white rounded-lg shadow-sm group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <ArrowRight className="w-5 h-5 text-primary transform rotate-90 group-open:rotate-[-90deg] transition-transform" aria-hidden="true" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Kontakt;
