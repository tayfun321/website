import SEO from '../components/SEO';
import companyData from '../data/company';

/**
 * Datenschutz Page
 * DSGVO-konforme Datenschutzerklärung
 */
function Datenschutz() {
  return (
    <>
      <SEO 
        title="Datenschutzerklärung"
        description="Datenschutzerklärung von TY-Dienstleistung. Informationen zur Verarbeitung Ihrer personenbezogenen Daten."
        pathname="/datenschutz"
        noindex={true}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-700 text-white">
        <div className="container-custom">
          <h1 className="heading-1 text-white">Datenschutzerklärung</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section" aria-labelledby="datenschutz-title">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 id="datenschutz-title" className="sr-only">Datenschutzinformationen</h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="lead text-xl text-gray-700 mb-8">
                Wir freuen uns über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen 
                besonders hohen Stellenwert für uns. Nachfolgend informieren wir Sie über die 
                Verarbeitung Ihrer personenbezogenen Daten.
              </p>

              {/* 1. Verantwortlicher */}
              <h3 className="text-xl font-bold text-gray-900 mt-12 mb-4">1. Verantwortlicher</h3>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="font-semibold text-gray-900">{companyData.name}</p>
                <p className="text-gray-600">Inhaber: {companyData.owner}</p>
                <p className="mt-4">
                  <span className="text-gray-600">Telefon: </span>
                  <a href={`tel:${companyData.contact.phoneRaw}`} className="text-primary hover:underline">
                    {companyData.contact.phone}
                  </a>
                </p>
                <p>
                  <span className="text-gray-600">E-Mail: </span>
                  <a href={`mailto:${companyData.contact.email}`} className="text-primary hover:underline">
                    {companyData.contact.email}
                  </a>
                </p>
              </div>

              {/* 2. Arten der verarbeiteten Daten */}
              <h3 className="text-xl font-bold text-gray-900 mt-12 mb-4">2. Arten der verarbeiteten Daten</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Bestandsdaten (z.B. Namen, Adressen)</li>
                <li>Kontaktdaten (z.B. E-Mail, Telefonnummern)</li>
                <li>Inhaltsdaten (z.B. Texteingaben im Kontaktformular)</li>
                <li>Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten)</li>
                <li>Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen)</li>
              </ul>

              {/* 3. Zweck der Verarbeitung */}
              <h3 className="text-xl font-bold text-gray-900 mt-12 mb-4">3. Zweck der Verarbeitung</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte</li>
                <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern</li>
                <li>Sicherheitsmaßnahmen</li>
                <li>Reichweitenmessung/Marketing (nur mit Ihrer Einwilligung)</li>
              </ul>

              {/* 4. Rechtsgrundlagen */}
              <h3 className="text-xl font-bold text-gray-900 mt-12 mb-4">4. Rechtsgrundlagen der Verarbeitung</h3>
              <p>
                Nach Maßgabe der Datenschutz-Grundverordnung (DSGVO) beruht die Verarbeitung 
                personenbezogener Daten auf folgenden Rechtsgrundlagen:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>
                  <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> – Die betroffene Person hat ihre 
                  Einwilligung gegeben (z.B. bei Kontaktformular, Cookies).
                </li>
                <li>
                  <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> – Verarbeitung ist für die Erfüllung 
                  eines Vertrags oder vorvertraglicher Maßnahmen erforderlich.
                </li>
                <li>
                  <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> – Verarbeitung ist zur Wahrung 
                  berechtigter Interessen erforderlich (z.B. technische Funktionalität, Sicherheit).
                </li>
              </ul>

              {/* 5. Kontaktformular */}
              <h3 className="text-xl font-bold text-gray-900 mt-12 mb-4">5. Kontaktaufnahme und Kontaktformular</h3>
              <p>
                Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon) werden 
                die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gemäß 
                Art. 6 Abs. 1 lit. b DSGVO verarbeitet.
              </p>
              <p className="mt-4">
                Die Angaben können in einem Customer-Relationship-Management-System (CRM-System) 
                oder einer vergleichbaren Anforderungsorganisation gespeichert werden.
              </p>
              <p className="mt-4">
                Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir überprüfen 
                die Erforderlichkeit alle zwei Jahre. Ferner gelten die gesetzlichen Archivierungspflichten.
              </p>

              {/* 6. Cookies */}
              <h3 className="text-xl font-bold text-gray-900 mt-12 mb-4">6. Verwendung von Cookies</h3>
              <p>
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem 
                Endgerät gespeichert werden. Einige Cookies sind technisch notwendig, während andere 
                nur mit Ihrer Einwilligung gesetzt werden.
              </p>
              
              <div className="bg-accent/10 rounded-xl p-6 mt-6">
                <h4 className="font-semibold text-gray-900 mb-2">Cookie-Kategorien:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Essenzielle Cookies:</strong> Erforderlich für die Grundfunktionen 
                    der Website (z.B. Speicherung der Cookie-Einstellungen).
                  </li>
                  <li>
                    <strong>Präferenz-Cookies:</strong> Speichern Einstellungen wie Sprache 
                    oder Region (nur mit Einwilligung).
                  </li>
                  <li>
                    <strong>Statistik-Cookies:</strong> Helfen uns zu verstehen, wie Besucher 
                    mit der Website interagieren (nur mit Einwilligung).
                  </li>
                </ul>
              </div>

              <p className="mt-6">
                Sie können Ihre Cookie-Einstellungen jederzeit über den Link im Footer anpassen 
                oder Cookies in Ihren Browsereinstellungen verwalten.
              </p>

              {/* 7. Hosting */}
              <h3 className="text-xl font-bold text-gray-900 mt-12 mb-4">7. Hosting und Content Delivery Networks</h3>
              <p>
                Unser Hoster erhebt in sog. Logfiles folgende Daten, die Ihr Browser übermittelt:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                <li>Inhalt der Anforderung (konkrete Seite)</li>
                <li>Zugriffsstatus/HTTP-Statuscode</li>
                <li>jeweils übertragene Datenmenge</li>
                <li>Website, von der die Anforderung kommt</li>
                <li>Browser</li>
                <li>Betriebssystem und dessen Oberfläche</li>
                <li>Sprache und Version der Browsersoftware</li>
              </ul>
              <p className="mt-4">
                Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser 
                Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>

              {/* 8. Ihre Rechte */}
              <h3 className="text-xl font-bold text-gray-900 mt-12 mb-4">8. Ihre Rechte als betroffene Person</h3>
              <p>Sie haben das Recht:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>
                  gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen 
                  Daten zu verlangen;
                </li>
                <li>
                  gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung 
                  Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;
                </li>
                <li>
                  gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen 
                  Daten zu verlangen;
                </li>
                <li>
                  gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen 
                  Daten zu verlangen;
                </li>
                <li>
                  gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, 
                  gängigen und maschinenlesbaren Format zu erhalten;
                </li>
                <li>
                  gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber 
                  uns zu widerrufen;
                </li>
                <li>
                  gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.
                </li>
              </ul>

              {/* 9. Widerspruchsrecht */}
              <h3 className="text-xl font-bold text-gray-900 mt-12 mb-4">9. Widerspruchsrecht</h3>
              <p>
                Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß 
                Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 
                DSGVO Widerspruch gegen die Verarbeitung einzulegen.
              </p>

              {/* 10. Datensicherheit */}
              <h3 className="text-xl font-bold text-gray-900 mt-12 mb-4">10. Datensicherheit</h3>
              <p>
                Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure 
                Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die 
                von Ihrem Browser unterstützt wird.
              </p>

              {/* 11. Aktualität */}
              <h3 className="text-xl font-bold text-gray-900 mt-12 mb-4">11. Aktualität und Änderung dieser Datenschutzerklärung</h3>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Februar 2024.
              </p>
              <p className="mt-4">
                Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund 
                geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig 
                werden, diese Datenschutzerklärung zu ändern.
              </p>

              {/* 12. Cookie-Einstellungen */}
              <h3 className="text-xl font-bold text-gray-900 mt-12 mb-4">12. Cookie-Einstellungen ändern</h3>
              <p>
                Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie den folgenden 
                Link klicken:
              </p>
              <button
                onClick={() => {
                  localStorage.removeItem('ty_cookie_consent');
                  window.dispatchEvent(new CustomEvent('cookieConsentChanged'));
                  window.location.reload();
                }}
                className="mt-4 btn-outline"
              >
                Cookie-Einstellungen öffnen
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Datenschutz;
