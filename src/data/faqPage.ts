import type { BlogBlock } from '@/data/blogPosts';

export const faqSchemaItems = [
  {
    '@type': 'Question',
    name: 'Do you ship sex dolls discreetly across New Zealand?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Yes. Orders ship in plain packaging with no brand markings. North Island delivery is typically next business day after dispatch; South Island is usually 2–3 business days.',
    },
  },
  {
    '@type': 'Question',
    name: 'What payment options are available?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'We accept bank transfer, cash on Auckland pickup, and Trade Me Pay Now where available. Many buyers prefer Trade Me for added buyer protection.',
    },
  },
  {
    '@type': 'Question',
    name: 'What is the difference between TPE and silicone?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'TPE bodies are softer and more affordable. Silicone heads offer more realistic facial detail. Our $999 hybrids combine a silicone head with a TPE body for strong value.',
    },
  },
  {
    '@type': 'Question',
    name: 'How do I check current stock?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Text us for live Auckland stock, real photos, and videos. We reply via SMS only and can confirm what is available before you order.',
    },
  },
];

export const faqPageBlocks: BlogBlock[] = [
  {
    type: 'heading',
    level: 2,
    content: 'Shipping & Delivery',
  },
  {
    type: 'paragraph',
    content:
      'We ship discreetly across New Zealand in plain boxes with no brand markings. Same-day dispatch is available for Auckland orders paid before 2pm on business days.',
  },
  {
    type: 'bullet-list',
    items: [
      'North Island: usually next business day',
      'South Island: usually 2–3 business days',
      'Tracking provided where available',
      'Free Auckland pickup available by arrangement',
    ],
  },
  {
    type: 'cta',
    content: 'Full delivery details and terms.',
    href: '/blog/discreet-sex-doll-delivery-nz-how-it-works',
    label: 'Read our discreet delivery guide',
  },
  {
    type: 'heading',
    level: 2,
    content: 'Payment',
  },
  {
    type: 'paragraph',
    content:
      'We accept bank transfer, cash on Auckland pickup, and Trade Me Pay Now where available. Text DOLL30 for a limited SMS-exclusive bank transfer discount.',
  },
  {
    type: 'heading',
    level: 2,
    content: 'Materials & Care',
  },
  {
    type: 'paragraph',
    content:
      'Our core range uses silicone heads with TPE bodies for realistic faces and strong value. See our maintenance guide for cleaning and storage tips.',
  },
  {
    type: 'cta',
    content: 'Step-by-step cleaning instructions.',
    href: '/blog/how-to-clean-a-sex-doll-maintenance-guide',
    label: 'Sex doll cleaning guide',
  },
  {
    type: 'heading',
    level: 2,
    content: 'Stock & Photos',
  },
  {
    type: 'paragraph',
    content:
      'Browse our collection online, then text us to confirm live stock and request real photos or videos for the model you want.',
  },
  {
    type: 'cta',
    content: 'Browse all models with Auckland stock.',
    href: '/dolls',
    label: 'View sex dolls collection',
  },
];
