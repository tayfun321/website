import { Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import companyData from '../data/company';

/**
 * Hero Component
 * Haupt-CTA mit Hintergrundbild
 */
function Hero() {
  const phoneLink = `tel:${companyData.contact.phoneRaw}`;

  return (
    <section
      className="relative min-h-[600px] md:min-h-[700px] flex items-center pt-28"
      aria-labelledby="hero-title"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <img
          src="/images/hero-bg.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary-700/90" />
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-accent text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" aria-hidden="true" />
            Versichert • Pünktlich • Umweltgerecht
          </div>

          {/* Main Headline */}
          <h1
            id="hero-title"
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up text-balance"
          >
            TY-Dienstleistung — <br className="hidden md:block" />
            <span className="text-accent">Zuverlässiger</span> Hausmeister & Reinigungsservice
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-100 leading-relaxed mb-8 max-w-2xl animate-slide-up animation-delay-100 text-balance">
            Professionelle Gebäudebetreuung, gründliche Reinigung und fachgerechte 
            Entrümpelung für Ihre Immobilie. Wir sind für Sie da – schnell, fair und mit 
            persönlichem Service in Velbert und Umgebung.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-200">
            {/* Primary CTA - Phone */}
            <a
              href={phoneLink}
              className="btn-phone group"
              aria-label={`Jetzt anrufen: ${companyData.contact.phone}`}
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" aria-hidden="true" />
              <span className="flex flex-col items-start">
                <span className="text-xs opacity-80">Jetzt anrufen</span>
                <span className="text-lg font-bold">{companyData.contact.phone}</span>
              </span>
            </a>

            {/* Secondary CTA - Email */}
            <a
              href={`mailto:${companyData.contact.email}`}
              className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
              aria-label={`E-Mail senden an: ${companyData.contact.email}`}
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              <span>{companyData.contact.email}</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="mt-10 pt-8 border-t border-white/20 animate-slide-up animation-delay-300">
            <p className="text-primary-200 text-sm mb-4">Unsere Hauptleistungen:</p>
            <div className="flex flex-wrap gap-3">
              {companyData.services.map((service) => (
                <Link
                  key={service}
                  to="/leistungen"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors backdrop-blur-sm"
                >
                  {service}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (subtle) */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
