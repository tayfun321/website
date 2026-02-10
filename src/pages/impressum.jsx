import SEO from '../components/SEO';
import companyData from '../data/company';

/**
 * Impressum Page
 * Rechtliche Angaben gemäß TMG
 */
function Impressum() {
  return (
    <>
      <SEO 
        title="Impressum"
        description="Impressum von TY-Dienstleistung. Rechtliche Angaben gemäß Telemediengesetz."
        pathname="/impressum"
        noindex={true}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-700 text-white">
        <div className="container-custom">
          <h1 className="heading-1 text-white">Impressum</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section" aria-labelledby="impressum-title">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 id="impressum-title" className="sr-only">Impressumsangaben</h2>

            {/* Angaben gemäß § 5 TMG */}
            <div className="mb-12">
              <h3 className="heading-3 mb-4">Angaben gemäß § 5 TMG</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="font-semibold text-gray-900">{companyData.name}</p>
                <p className="text-gray-600">{companyData.legalForm}</p>
                <p className="text-gray-600 mt-2">Inhaber: {companyData.owner}</p>
                <p className="text-gray-600 mt-4">
                  {companyData.contact.address.street}<br />
                  {companyData.contact.address.zip} {companyData.contact.address.city}
                </p>
              </div>
            </div>

            {/* Kontakt */}
            <div className="mb-12">
              <h3 className="heading-3 mb-4">Kontakt</h3>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2">
                <p>
                  <span className="text-gray-600">Telefon: </span>
                  <a 
                    href={`tel:${companyData.contact.phoneRaw}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {companyData.contact.phone}
                  </a>
                </p>
                <p>
                  <span className="text-gray-600">E-Mail: </span>
                  <a 
                    href={`mailto:${companyData.contact.email}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {companyData.contact.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Umsatzsteuer-ID */}
            <div className="mb-12">
              <h3 className="heading-3 mb-4">Umsatzsteuer-ID</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-600">
                  Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
                </p>
                <p className="font-medium text-gray-900 mt-2">
                  [Wird nachgereicht]
                </p>
              </div>
            </div>

            {/* Berufsrechtliche Regelungen */}
            <div className="mb-12">
              <h3 className="heading-3 mb-4">Berufsrechtliche Regelungen</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-600">
                  Es gelten folgende berufsrechtliche Regelungen:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                  <li>Gewerbeordnung (GewO)</li>
                  <li>Verordnung über die Entsorgung von Gewerbeabfällen</li>
                </ul>
                <p className="mt-4">
                  <a 
                    href="http://www.gesetze-im-internet.de/gewo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Gewerbeordnung online einsehbar
                  </a>
                </p>
              </div>
            </div>

            {/* Streitschlichtung */}
            <div className="mb-12">
              <h3 className="heading-3 mb-4">Streitschlichtung</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-600">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a 
                    href="https://ec.europa.eu/consumers/odr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
                <p className="text-gray-600 mt-4">
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
                <p className="text-gray-600 mt-4">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>

            {/* Haftung für Inhalte */}
            <div className="mb-12">
              <h3 className="heading-3 mb-4">Haftung für Inhalte</h3>
              <div className="prose text-gray-600">
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                  Tätigkeit hinweisen.
                </p>
                <p className="mt-4">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                  allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                  erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                  Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend 
                  entfernen.
                </p>
              </div>
            </div>

            {/* Haftung für Links */}
            <div className="mb-12">
              <h3 className="heading-3 mb-4">Haftung für Links</h3>
              <div className="prose text-gray-600">
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                  Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                  mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                  Verlinkung nicht erkennbar.
                </p>
                <p className="mt-4">
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                  Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von 
                  Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>
            </div>

            {/* Urheberrecht */}
            <div className="mb-12">
              <h3 className="heading-3 mb-4">Urheberrecht</h3>
              <div className="prose text-gray-600">
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                  Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                  nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p className="mt-4">
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
                  Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. 
                  Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen 
                  entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte 
                  umgehend entfernen.
                </p>
              </div>
            </div>

            {/* Quellenangaben */}
            <div>
              <h3 className="heading-3 mb-4">Quellenangaben für verwendete Bilder und Grafiken</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-600">
                  Alle verwendeten Bilder und Grafiken sind entweder Eigentum von TY-Dienstleistung 
                  oder wurden unter Lizenz erworben.
                </p>
                <p className="text-gray-500 mt-4 text-sm">
                  Icons: Lucide Icons (lucide.dev) – ISC License
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Impressum;
