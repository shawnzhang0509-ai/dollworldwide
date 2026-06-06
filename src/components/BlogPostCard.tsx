import { format } from 'date-fns';
import type { BlogPost } from '@/data/blogPosts';

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = format(new Date(post.publishedAt), 'd MMMM yyyy');

  return (
    <a
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col border border-noir-500 bg-[#111111] p-8 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_18px_48px_rgba(0,0,0,0.35)]"
    >
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="text-label text-gold">{post.category}</span>
        <span className="font-body text-xs text-cream-300">{formattedDate}</span>
        <span className="font-body text-xs text-cream-300">{post.readingTimeMinutes} min read</span>
      </div>

      <h2 className="font-display text-[28px] leading-[1.25] text-cream-100 transition-colors duration-300 group-hover:text-gold md:text-[32px]">
        {post.title}
      </h2>

      <p className="mt-4 flex-1 font-body text-base font-light leading-[1.7] text-cream-200">
        {post.excerpt}
      </p>

      <span className="mt-8 text-label text-gold transition-colors duration-300 group-hover:text-gold-light">
        Read article →
      </span>
    </a>
  );
}
