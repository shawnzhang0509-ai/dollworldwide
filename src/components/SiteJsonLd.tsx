import { JsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE, LOGO_URL, SITE_NAME, SITE_URL } from '@/lib/seo';

export function SiteJsonLd() {
  return (
    <>
      <JsonLd
        id="website-jsonld"
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SITE_NAME,
          url: SITE_URL,
          inLanguage: 'en-NZ',
        }}
      />
      <JsonLd
        id="organization-jsonld"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
          logo: LOGO_URL,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: CONTACT_PHONE,
            contactType: 'customer service',
            areaServed: 'NZ',
            availableLanguage: 'English',
          },
        }}
      />
      <JsonLd
        id="local-business-jsonld"
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: SITE_NAME,
          url: SITE_URL,
          description:
            'Premium sex dolls with Auckland ready stock, silicone head and TPE body hybrids, $999 NZD, discreet nationwide delivery.',
          telephone: CONTACT_PHONE,
          areaServed: {
            '@type': 'Country',
            name: 'New Zealand',
          },
          priceRange: '$999',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Auckland',
            addressCountry: 'NZ',
          },
        }}
      />
    </>
  );
}
