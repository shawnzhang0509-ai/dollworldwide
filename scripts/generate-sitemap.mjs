import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const SITE_URL = 'https://dollworldwide.com';

function extractBlogPosts(source) {
  const matches = [...source.matchAll(/slug:\s*'([^']+)'[\s\S]*?publishedAt:\s*'([^']+)'/g)];
  return matches.map((match) => ({
    slug: match[1],
    publishedAt: match[2],
  }));
}

function extractProductSlugs(source) {
  const start = source.indexOf('export const products: Product[] = [');
  const end = source.indexOf('export interface ProductPreviewPair');
  const productsBlock = source.slice(start, end);
  const ids = [...productsBlock.matchAll(/^\s*id:\s*'([^']+)'/gm)].map((match) => match[1]);
  return ids.map((id) => `${id}-sex-doll-nz`);
}

function urlEntry(loc, options) {
  const lastmod = options.lastmod ? `\n    <lastmod>${options.lastmod}</lastmod>` : '';
  return `  <url>\n    <loc>${loc}</loc>${lastmod}\n    <changefreq>${options.changefreq}</changefreq>\n    <priority>${options.priority}</priority>\n  </url>`;
}

const blogSource = readFileSync(join(root, 'src/data/blogPosts.ts'), 'utf8');
const productSource = readFileSync(join(root, 'src/data/products.ts'), 'utf8');
const blogPosts = extractBlogPosts(blogSource);
const productSlugs = extractProductSlugs(productSource);
const today = new Date().toISOString().slice(0, 10);

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/dolls', priority: '0.9', changefreq: 'weekly' },
  { path: '/models', priority: '0.9', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.6', changefreq: 'monthly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/shipping-policy', priority: '0.5', changefreq: 'yearly' },
  { path: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
  { path: '/terms-and-conditions', priority: '0.5', changefreq: 'yearly' },
];

const urls = [
  ...staticPages.map((page) =>
    urlEntry(`${SITE_URL}${page.path}`, {
      lastmod: today,
      changefreq: page.changefreq,
      priority: page.priority,
    }),
  ),
  ...productSlugs.map((slug) =>
    urlEntry(`${SITE_URL}/dolls/${slug}`, {
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.9',
    }),
  ),
  ...blogPosts.map((post) =>
    urlEntry(`${SITE_URL}/blog/${post.slug}`, {
      lastmod: post.publishedAt,
      changefreq: 'monthly',
      priority: '0.7',
    }),
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;

writeFileSync(join(root, 'public/sitemap.xml'), xml, 'utf8');
console.log(`Generated sitemap with ${urls.length} URLs.`);
