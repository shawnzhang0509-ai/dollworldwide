import { useParams, Navigate } from 'react-router';
import { format } from 'date-fns';
import { BlogArticleBody } from '@/components/BlogArticleBody';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { JsonLd } from '@/components/JsonLd';
import { PageMeta, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '@/components/PageMeta';
import { getBlogPost } from '@/data/blogPosts';

export function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formattedDate = format(new Date(post.publishedAt), 'd MMMM yyyy');
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: [DEFAULT_OG_IMAGE],
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <main className="bg-noir-900 pt-[120px]">
      <PageMeta
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        type="article"
        publishedAt={post.publishedAt}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <JsonLd id={`article-jsonld-${post.slug}`} data={articleSchema} />

      <section className="relative overflow-hidden pb-[120px]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_68%)]" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mx-auto max-w-3xl">
            <a href="/blog" className="text-label text-gold transition-colors hover:text-gold-light">
              ← Back to blog
            </a>

            <header className="mb-12 mt-8 border-b border-noir-500 pb-10">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="text-label text-gold">{post.category}</span>
                <span className="font-body text-sm text-cream-300">{formattedDate}</span>
                <span className="font-body text-sm text-cream-300">{post.readingTimeMinutes} min read</span>
              </div>
              <h1 className="text-display-h2 text-cream-100">{post.title}</h1>
              <p className="mt-5 text-body-large text-cream-200">{post.description}</p>
            </header>

            <BlogArticleBody blocks={post.blocks} />
          </div>
        </div>
      </section>
    </main>
  );
}
