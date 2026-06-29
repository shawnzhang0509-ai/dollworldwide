import type { BlogBlock } from '@/data/blogPosts';

export const aboutPageBlocks: BlogBlock[] = [
  {
    type: 'paragraph',
    content:
      'DollWorldwide is a New Zealand-focused retailer specialising in realistic sex dolls with silicone head and TPE body construction, Auckland ready stock, and discreet nationwide delivery.',
  },
  {
    type: 'heading',
    level: 2,
    content: 'Why We Exist',
  },
  {
    type: 'paragraph',
    content:
      'After moving to New Zealand, we saw limited local stock, long wait times, and prices that did not match the value buyers expected. We work directly with trusted manufacturers to bring better products to Kiwi customers without unnecessary middlemen.',
  },
  {
    type: 'heading',
    level: 2,
    content: 'What We Focus On',
  },
  {
    type: 'bullet-list',
    items: [
      'Premium silicone head and TPE body hybrids at $999 NZD',
      'Auckland warehouse stock whenever possible',
      'Real photos and videos before you buy',
      'Discreet plain-box shipping with no brand markings',
      'Trade Me checkout for buyer protection',
      'SMS-first support that is fast and private',
    ],
  },
  {
    type: 'cta',
    content: 'Read the full story of how DollWorldwide started.',
    href: '/blog/why-we-started-doll-worldwide',
    label: 'Why we started DollWorldwide',
  },
];
