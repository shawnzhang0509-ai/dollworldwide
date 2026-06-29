import { BlogPostCard } from '@/components/BlogPostCard';
import { PageMeta } from '@/components/PageMeta';
import { getBlogPostsSorted } from '@/data/blogPosts';

export function BlogIndexPage() {
  const posts = getBlogPostsSorted();

  return (
    <main className="bg-noir-900 pt-[120px]">
      <PageMeta
        title="Sex Doll Guides & Tips"
        description="Expert guides on choosing, using, and maintaining your sex doll. TPE vs silicone comparison, cleaning tips, and NZ buyer's guides. Read now."
        path="/blog"
        includeNzInTitle
      />

      <section className="relative overflow-hidden pb-[120px]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_68%)]" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="mb-12 max-w-3xl">
            <a href="/" className="text-label text-gold transition-colors hover:text-gold-light">
              ← Back to homepage
            </a>
            <span className="mb-4 mt-8 block text-label text-gold">BLOG</span>
            <h1 className="mb-5 text-display-h2 text-cream-100">Sex Doll Guides &amp; Tips for NZ Buyers</h1>
            <p className="text-body-large text-cream-200">
              Practical articles on materials, value, local stock, and what to look for before you purchase.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
