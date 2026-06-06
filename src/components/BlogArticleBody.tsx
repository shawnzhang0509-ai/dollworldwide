import type { BlogBlock } from '@/data/blogPosts';

function renderInlineLinks(text: string) {
  const parts = text.split(/(dollworldwide\.com)/g);

  return parts.map((part, index) => {
    if (part === 'dollworldwide.com') {
      return (
        <a
          key={index}
          href="/"
          className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors"
        >
          dollworldwide.com
        </a>
      );
    }

    return part;
  });
}

function BlogBlockRenderer({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case 'paragraph':
      return <p className="blog-prose-p">{renderInlineLinks(block.content)}</p>;

    case 'heading':
      if (block.level === 2) {
        return <h2 className="blog-prose-h2">{block.content}</h2>;
      }
      return <h3 className="blog-prose-h3">{block.content}</h3>;

    case 'bullet-list':
      return (
        <ul className="blog-prose-ul">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );

    case 'comparison':
      return (
        <div className="blog-prose-comparison">
          {block.items.map((item) => (
            <div key={item.title} className="blog-prose-comparison-card">
              <h4 className="blog-prose-comparison-title">{item.title}</h4>
              <ul className="blog-prose-ul">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case 'cta':
      return (
        <div className="blog-prose-cta">
          <p className="blog-prose-p mb-0">{block.content}</p>
          <a href={block.href} className="blog-prose-cta-button">
            {block.label}
          </a>
        </div>
      );

    default:
      return null;
  }
}

export function BlogArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <article className="blog-prose">
      {blocks.map((block, index) => (
        <BlogBlockRenderer key={index} block={block} />
      ))}
    </article>
  );
}
