import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Shield, Clock, Leaf, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import SEO from '../components/SEO';
import { servicesData } from '../data/services';
import { referencesData } from '../data/references';
import companyData from '../data/company';

/**
 * Home Page
 * Startseite mit Hero, Services, Trust-Section und Referenzen
 */
function Home() {
  const featuredReferences = referencesData.filter(r => r.featured).slice(0, 3);
  const phoneLink = `tel:${companyData.contact.phoneRaw}`;

  return (
    <>
      <SEO pathname="/" />
      
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <section className="section" aria-labelledby="services-title">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-primary rounded-full text-sm font-medium mb-4">
              Unsere Leistungen
            </span>
            <h2 id="services-title" className="heading-2 mb-4">
              Alles aus einer Hand
            </h2>
            <p className="text-lead max-w-2xl mx-auto">
              Professionelle Dienstleistungen für Ihre Immobilie – von der regelmäßigen 
              Reinigung bis zur kompletten Entrümpelung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/leistungen" className="btn-outline">
              Alle Leistungen im Überblick
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section - Warum wir? */}
      <section className="section-alt" aria-labelledby="trust-title">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Warum TY-Dienstleistung?
            </span>
            <h2 id="trust-title" className="heading-2 mb-4">
              Ihr verlässlicher Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyData.values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon === 'Shield' && <Shield className="w-8 h-8 text-primary" aria-hidden="true" />}
                  {value.icon === 'CheckCircle' && <CheckCircle className="w-8 h-8 text-primary" aria-hidden="true" />}
                  {value.icon === 'Leaf' && <Leaf className="w-8 h-8 text-primary" aria-hidden="true" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Badges Bar */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {companyData.trustBadges.map((badge) => (
              <div 
                key={badge}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm"
              >
                <CheckCircle className="w-4 h-4 text-accent" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-700">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References Preview */}
      <section className="section" aria-labelledby="references-title">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/20 text-primary rounded-full text-sm font-medium mb-4">
                Referenzen
              </span>
              <h2 id="references-title" className="heading-2">
                Erfolgreich umgesetzte Projekte
              </h2>
            </div>
            <Link 
              to="/referenzen" 
              className="mt-4 md:mt-0 text-primary font-medium hover:underline inline-flex items-center gap-1"
            >
              Alle Referenzen ansehen
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReferences.map((ref) => (
              <article 
                key={ref.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Reference Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={ref.images[0]}
                    alt={ref.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" aria-hidden="true" />
                </div>
                
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-accent/20 text-primary rounded-full text-xs font-medium mb-3">
                    {ref.category === 'gebaeudereinigung' && 'Reinigung'}
                    {ref.category === 'entruempelung' && 'Entrümpelung'}
                    {ref.category === 'entsorgung' && 'Entsorgung'}
                    {ref.category === 'hausmeisterservice' && 'Hausmeister'}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {ref.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {ref.description}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                    <span>{ref.location}</span>
                    <span>•</span>
                    <span>{ref.year}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden" aria-labelledby="cta-title">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="cta-title" className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bereit für eine saubere Lösung?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir beraten Sie gerne 
              unverbindlich und finden gemeinsam die passende Lösung für Ihr Vorhaben.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={phoneLink}
                className="btn-accent text-lg px-8 py-4 shadow-xl"
                aria-label={`Jetzt anrufen: ${companyData.contact.phone}`}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span className="flex flex-col items-start">
                  <span className="text-xs opacity-80">Jetzt anrufen</span>
                  <span className="font-bold">{companyData.contact.phone}</span>
                </span>
              </a>

              <Link
                to="/kontakt"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary"
              >
                Kontaktformular
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
