import { useEffect } from 'react';

const SITE_NAME = 'DollWorldwide';
const SITE_URL = 'https://dollworldwide.com';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-bg.jpg`;

interface PageMetaProps {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  image?: string;
}

function upsertMeta(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export function PageMeta({
  title,
  description,
  path = '/',
  type = 'website',
  publishedAt,
  image = DEFAULT_OG_IMAGE,
}: PageMetaProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;

  useEffect(() => {
    document.title = fullTitle;
    upsertMeta('description', description);
    upsertLink('canonical', canonicalUrl);
    upsertMeta('og:title', fullTitle, 'property');
    upsertMeta('og:description', description, 'property');
    upsertMeta('og:type', type, 'property');
    upsertMeta('og:url', canonicalUrl, 'property');
    upsertMeta('og:site_name', SITE_NAME, 'property');
    upsertMeta('og:image', image, 'property');
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', fullTitle);
    upsertMeta('twitter:description', description);
    upsertMeta('twitter:image', image);

    if (type === 'article' && publishedAt) {
      upsertMeta('article:published_time', publishedAt, 'property');
    }
  }, [fullTitle, description, canonicalUrl, type, publishedAt, image]);

  return null;
}

export { SITE_NAME, SITE_URL };
