import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * ServiceCard Component
 * Kachel für Dienstleistungen mit Bild, Titel und Beschreibung
 */
function ServiceCard({ service, variant = 'default' }) {
  if (variant === 'compact') {
    return (
      <Link
        to="/leistungen"
        className="group flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
        aria-label={`${service.title}: ${service.shortDescription}`}
      >
        <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
          <img
            src={service.image}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {service.shortDescription}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <article className="card-hover group h-full flex flex-col bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Service Image */}
      <div className="aspect-video relative overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        
        <p className="text-gray-600 mb-4 flex-grow">
          {service.shortDescription}
        </p>

        {/* Features Preview */}
        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/leistungen"
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-auto"
          aria-label={`Mehr erfahren über ${service.title}`}
        >
          Mehr erfahren
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default ServiceCard;
