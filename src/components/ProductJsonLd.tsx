import { JsonLd } from '@/components/JsonLd';
import type { Product } from '@/data/products';
import {
  getProductPath,
  getProductSeoDescription,
  parseProductPrice,
  SITE_NAME,
  SITE_URL,
} from '@/lib/seo';

interface ProductJsonLdProps {
  product: Product;
}

export function ProductJsonLd({ product }: ProductJsonLdProps) {
  const productUrl = `${SITE_URL}${getProductPath(product)}`;
  const price = parseProductPrice(product.price);

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: [product.image],
    description: getProductSeoDescription(product),
    sku: product.tradeMeSearchCode ?? product.tradeMeSku ?? product.id,
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    offers: {
      '@type': 'Offer',
      url: productUrl,
      priceCurrency: 'NZD',
      price,
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'NZD',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'NZ',
        },
      },
    },
  };

  return <JsonLd id={`product-jsonld-${product.id}`} data={data} />;
}
