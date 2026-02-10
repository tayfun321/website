import { MapPin, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import { referencesData } from '../data/references';
import companyData from '../data/company';

/**
 * Referenzen Page
 * Portfolio ohne Filter - 4 Referenzen, eine pro Leistung
 */
function Referenzen() {
  const phoneLink = `tel:${companyData.contact.phoneRaw}`;

  return (
    <>
      <SEO 
        title="Referenzen"
        description="Überzeugen Sie sich von unserer Arbeit. Eine Auswahl erfolgreich umgesetzter Projekte in Velbert und Umgebung."
        pathname="/referenzen"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-accent text-sm font-medium mb-4">
              Referenzen
            </span>
            <h1 className="heading-1 text-white mb-6">
              Erfolgreich umgesetzte Projekte
            </h1>
            <p className="text-lg md:text-xl text-primary-100">
              Überzeugen Sie sich von unserer Arbeit. Hier finden Sie eine Auswahl 
              unserer durchgeführten Projekte aus Velbert und der Umgebung.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section" aria-labelledby="references-title">
        <div className="container-custom">
          <h2 id="references-title" className="sr-only">Unsere Referenzen</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {referencesData.map((ref) => (
              <article 
                key={ref.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
              >
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <img 
                    src={ref.images[0]} 
                    alt={ref.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" aria-hidden="true" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-primary rounded-full text-xs font-medium">
                      {ref.category === 'gebaeudereinigung' && 'Reinigung'}
                      {ref.category === 'entruempelung' && 'Entrümpelung'}
                      {ref.category === 'entsorgung' && 'Entsorgung'}
                      {ref.category === 'hausmeisterservice' && 'Hausmeister'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {ref.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {ref.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      {ref.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      {ref.year}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 p-6 bg-accent/10 rounded-xl">
            <p className="text-center text-gray-700">
              <strong>Hinweis:</strong> Aus Datenschutzgründen zeigen wir nicht alle Projekte öffentlich. 
              Gerne nennen wir Ihnen bei einem persönlichen Gespräch weitere Referenzen.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-4">Werden Sie unser nächster zufriedener Kunde</h2>
          <p className="text-primary-100 mb-6 max-w-xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
          </p>
          <a href={phoneLink} className="btn-accent">
            Jetzt anrufen: {companyData.contact.phone}
          </a>
        </div>
      </section>
    </>
  );
}

export default Referenzen;
