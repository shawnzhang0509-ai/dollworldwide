import { useEffect } from 'react';
import {
  buildPageTitle,
  DEFAULT_OG_IMAGE,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
} from '@/lib/seo';

export { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE };

interface PageMetaProps {
  title: string;
  description: string;
  path?: string;
  canonicalPath?: string;
  type?: 'website' | 'article' | 'product';
  publishedAt?: string;
  image?: string;
  robots?: string;
  includeNzInTitle?: boolean;
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
  canonicalPath,
  type = 'website',
  publishedAt,
  image = DEFAULT_OG_IMAGE,
  robots = 'index, follow',
  includeNzInTitle = false,
}: PageMetaProps) {
  const fullTitle = buildPageTitle(title, includeNzInTitle);
  const canonicalUrl = `${SITE_URL}${canonicalPath ?? path}`;
  const ogType = type === 'product' ? 'product' : type;

  useEffect(() => {
    document.documentElement.lang = SITE_LOCALE;
    document.title = fullTitle;
    upsertMeta('description', description);
    upsertMeta('robots', robots);
    upsertLink('canonical', canonicalUrl);
    upsertMeta('og:title', fullTitle, 'property');
    upsertMeta('og:description', description, 'property');
    upsertMeta('og:type', ogType, 'property');
    upsertMeta('og:url', canonicalUrl, 'property');
    upsertMeta('og:site_name', SITE_NAME, 'property');
    upsertMeta('og:image', image, 'property');
    upsertMeta('og:locale', 'en_NZ', 'property');
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', fullTitle);
    upsertMeta('twitter:description', description);
    upsertMeta('twitter:image', image);

    if (type === 'article' && publishedAt) {
      upsertMeta('article:published_time', publishedAt, 'property');
    }
  }, [fullTitle, description, canonicalUrl, ogType, type, publishedAt, image, robots]);

  return null;
}
