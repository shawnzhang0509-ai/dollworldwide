import { BlogPostCard } from '@/components/BlogPostCard';
import { getBlogPostsSorted } from '@/data/blogPosts';

export function BlogPreviewSection() {
  const posts = getBlogPostsSorted().slice(0, 2);

  if (posts.length === 0) return null;

  return (
    <section id="guides" className="bg-noir-900 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="mb-4 block text-label text-gold">BUYING GUIDES</span>
            <h2 className="text-display-h3 text-cream-100">Practical advice before you buy.</h2>
            <p className="mt-4 text-body-large text-cream-200">
              Guides on materials, value, local stock, and what to compare when buying in New Zealand.
            </p>
          </div>
          <a href="/blog" className="text-label text-gold transition-colors hover:text-gold-light">
            View all articles →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
