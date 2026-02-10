import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Check, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';
import { servicesData } from '../data/services';
import companyData from '../data/company';

/**
 * Leistungen Page
 * Detaillierte Übersicht aller Dienstleistungen mit Bildern
 */
function Leistungen() {
  const [expandedService, setExpandedService] = useState(null);
  const phoneLink = `tel:${companyData.contact.phoneRaw}`;

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <>
      <SEO 
        title="Leistungen"
        description="Hausmeisterservice, Gebäudereinigung, Entrümpelung und Entsorgung in Velbert. Professionelle Dienstleistungen für Ihre Immobilie."
        pathname="/leistungen"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-accent text-sm font-medium mb-4">
              Unsere Leistungen
            </span>
            <h1 className="heading-1 text-white mb-6">
              Alles aus einer Hand für Ihre Immobilie
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8">
              Von der regelmäßigen Gebäudebetreuung bis zur fachgerechten Entsorgung – 
              wir bieten Ihnen professionelle Dienstleistungen mit persönlichem Service.
            </p>
            <a href={phoneLink} className="btn-accent">
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>Jetzt beraten lassen: {companyData.contact.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section" aria-labelledby="services-detail-title">
        <div className="container-custom">
          <h2 id="services-detail-title" className="sr-only">Detaillierte Leistungsbeschreibungen</h2>
          
          <div className="space-y-12">
            {servicesData.map((service) => (
              <article 
                key={service.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Service Image - Full Width */}
                <div className="aspect-[21/9] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" aria-hidden="true" />
                  {/* Title overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-gray-600 mb-6 text-lg">{service.fullDescription}</p>

                  {/* Expandable Details */}
                  <div className={`overflow-hidden transition-all duration-300 ${expandedService === service.id ? 'max-h-[1000px]' : 'max-h-0 lg:max-h-none'}`}>
                    <div className="grid md:grid-cols-2 gap-6 pb-6">
                      {/* Features */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Check className="w-5 h-5 text-accent" aria-hidden="true" />
                          Unser Service umfasst:
                        </h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Check className="w-5 h-5 text-accent" aria-hidden="true" />
                          Ihre Vorteile:
                        </h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Toggle */}
                  <button
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className="lg:hidden flex items-center gap-2 text-primary font-medium mt-2"
                    aria-expanded={expandedService === service.id}
                    aria-controls={`service-details-${service.id}`}
                  >
                    {expandedService === service.id ? (
                      <>
                        Weniger anzeigen <ChevronUp className="w-4 h-4" aria-hidden="true" />
                      </>
                    ) : (
                      <>
                        Mehr erfahren <ChevronDown className="w-4 h-4" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>

                {/* CTA Bar */}
                <div className="px-6 md:px-8 py-4 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-sm text-gray-600">
                    Fragen zu unserem {service.title}?
                  </p>
                  <a
                    href={phoneLink}
                    className="btn-primary text-sm w-full sm:w-auto justify-center"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    {service.ctaText}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-alt" aria-labelledby="process-title">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 id="process-title" className="heading-2 mb-4">So funktioniert&apos;s</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Einfach, schnell und unkompliziert – in nur drei Schritten zu Ihrer Lösung.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Kontakt aufnehmen',
                description: 'Rufen Sie uns an oder schreiben Sie uns. Wir besprechen Ihr Anliegen und machen Ihnen ein unverbindliches Angebot.',
              },
              {
                step: '02',
                title: 'Termin vereinbaren',
                description: 'Wir finden einen passenden Termin – auch kurzfristig oder am Wochenende möglich.',
              },
              {
                step: '03',
                title: 'Professionelle Umsetzung',
                description: 'Wir erledigen die Arbeit zuverlässig, pünktlich und zu dem vereinbarten Festpreis.',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/20">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-4">Haben Sie Fragen zu unseren Leistungen?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Wir beraten Sie gerne persönlich und finden gemeinsam die beste Lösung für Ihr Vorhaben.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={phoneLink} className="btn-primary">
              <Phone className="w-5 h-5" aria-hidden="true" />
              {companyData.contact.phone}
            </a>
            <Link to="/kontakt" className="btn-outline">
              Kontaktformular
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Leistungen;
