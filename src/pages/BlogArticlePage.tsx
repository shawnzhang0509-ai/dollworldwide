import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router';
import { format } from 'date-fns';
import { BlogArticleBody } from '@/components/BlogArticleBody';
import { PageMeta, SITE_NAME, SITE_URL } from '@/components/PageMeta';
import { getBlogPost } from '@/data/blogPosts';

function ArticleJsonLd({
  title,
  description,
  slug,
  publishedAt,
}: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
}) {
  useEffect(() => {
    const scriptId = 'blog-article-jsonld';
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      datePublished: publishedAt,
      author: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/blog/${slug}`,
      },
    });
    document.head.appendChild(script);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [title, description, slug, publishedAt]);

  return null;
}

export function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formattedDate = format(new Date(post.publishedAt), 'd MMMM yyyy');

  return (
    <main className="bg-noir-900 pt-[120px]">
      <PageMeta
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        type="article"
        publishedAt={post.publishedAt}
      />
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        slug={post.slug}
        publishedAt={post.publishedAt}
      />

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
