import type { Product } from '@/data/products';
import { getProductSlug } from '@/data/products';

export const SITE_NAME = 'DollWorldwide';
export const SITE_NAME_NZ = 'DollWorldwide NZ';
export const SITE_URL = 'https://dollworldwide.com';
export const SITE_LOCALE = 'en-NZ';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-bg.jpg`;
export const LOGO_URL = `${SITE_URL}/favicon.svg`;
export const CONTACT_PHONE = '+642885146884';

export function buildPageTitle(title: string, includeNz = false): string {
  if (title.includes(SITE_NAME)) return title;
  const brand = includeNz ? SITE_NAME_NZ : SITE_NAME;
  return `${title} | ${brand}`;
}

export { getProductSlug };

export function getProductPath(product: Product): string {
  return `/dolls/${getProductSlug(product)}`;
}

export function parseProductPrice(price: string): string {
  const numeric = price.replace(/[^0-9.]/g, '');
  return numeric || '999';
}

export function getProductMetaTitle(product: Product): string {
  return `${product.name} Silicone Head TPE Body | Buy in NZ`;
}

export function getProductMetaDescription(product: Product): string {
  const sku = product.tradeMeSearchCode ? ` SKU ${product.tradeMeSearchCode}.` : '';
  return `Buy the ${product.name} — silicone head and TPE body sex doll with Auckland ready stock.${sku} Discreet NZ delivery from ${product.price}. Text for photos today.`;
}

export function getProductSeoDescription(product: Product): string {
  return `${product.name} is a ${product.specs.toLowerCase()} sex doll available from DollWorldwide NZ at ${product.price} NZD with discreet nationwide delivery and Auckland warehouse stock.`;
}

export function getProductImageAlt(product: Product): string {
  return `${product.name} silicone head TPE body sex doll — realistic hybrid doll | ${SITE_NAME_NZ}`;
}
