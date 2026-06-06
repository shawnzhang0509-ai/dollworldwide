import { useEffect } from 'react';
import { SITE_NAME, SITE_URL } from '@/components/PageMeta';

const SCRIPT_ID = 'local-business-jsonld';

export function LocalBusinessJsonLd() {
  useEffect(() => {
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      url: SITE_URL,
      description:
        'Premium sex dolls with Auckland ready stock, realistic silicone head and TPE body, $999 NZD, discreet nationwide delivery.',
      telephone: '+642885146884',
      email: 'dollworldwide2023@gmail.com',
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
    });
    document.head.appendChild(script);

    return () => {
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, []);

  return null;
}
