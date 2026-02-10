import { Helmet } from 'react-helmet-async';
import companyData from '../data/company';

/**
 * SEO Component
 * Meta-Tags, OpenGraph, JSON-LD für jede Seite
 */
function SEO({
  title,
  description,
  pathname = '',
  image = '/og-image.jpg',
  type = 'website',
  noindex = false,
}) {
  const siteUrl = companyData.seo.siteUrl;
  const fullUrl = `${siteUrl}${pathname}`;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const pageTitle = title 
    ? `${title} | ${companyData.name}`
    : companyData.seo.defaultTitle;
  
  const pageDescription = description || companyData.seo.defaultDescription;

  // JSON-LD LocalBusiness Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: companyData.name,
    description: pageDescription,
    url: siteUrl,
    telephone: companyData.contact.phoneRaw,
    email: companyData.contact.email,
    founder: {
      '@type': 'Person',
      name: companyData.owner,
    },
    areaServed: 'Deutschland',
    priceRange: '€€',
    ...(image !== '/og-image.jpg' && { image: fullImage }),
  };

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      
      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Noindex falls gewünscht */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* OpenGraph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={companyData.name} />
      <meta property="og:locale" content="de_DE" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
}

export default SEO;
