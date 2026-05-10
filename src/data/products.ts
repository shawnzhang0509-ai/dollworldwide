export type RealLifeViewId = 'nakedFullBody' | 'clothedFullBody' | 'head';

export interface RealLifeView {
  id: RealLifeViewId;
  label: string;
  description: string;
}

export interface MediaAsset {
  type: 'image' | 'video';
  src: string;
  title?: string;
  poster?: string;
}

export type ProductTier = 'flagship' | 'best-value';

export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  tag: string;
  specs: string;
  tier: ProductTier;
  featured?: boolean;
  tradeMeSku?: string;
  tradeMeSearchCode?: string;
  realLifeMedia?: Partial<Record<RealLifeViewId, MediaAsset[]>>;
}

export const realLifeViews: RealLifeView[] = [
  {
    id: 'nakedFullBody',
    label: 'See naked full body',
    description: 'Full-body real-life media for checking shape, proportions, and condition.',
  },
  {
    id: 'clothedFullBody',
    label: 'See clothed full body',
    description: 'Styled full-body media for seeing the model in a more natural presentation.',
  },
  {
    id: 'head',
    label: 'See head',
    description: 'Close-up face and head detail for makeup, eyes, hairline, and expression.',
  },
];

export const products: Product[] = [
  {
    id: 'skin-texture-flagship',
    name: 'Full Silicone Skin Texture Edition',
    image: '/images/hero-bg.jpg',
    price: '$3,999',
    tag: 'FLAGSHIP',
    specs: 'Full Silicone · Skin Texture Detail · Premium Finish',
    tier: 'flagship',
    featured: true,
  },
  {
    id: 'aria',
    name: 'Aria',
    image: '/images/divine-aria.jpg',
    price: '$999',
    tag: 'BEST SELLER',
    specs: '165cm · D-Cup · Silicone Head · TPE Body',
    tier: 'best-value',
    featured: true,
    tradeMeSku: '01',
    tradeMeSearchCode: 'DWWD01',
  },
  {
    id: 'nova',
    name: 'Nova',
    image: '/images/divine-nova.jpg',
    price: '$999',
    tag: 'ELITE',
    specs: '148cm · C-Cup · Silicone Head · TPE Body',
    tier: 'best-value',
    featured: true,
  },
  {
    id: 'celeste',
    name: 'Celeste',
    image: '/images/divine-celeste.jpg',
    price: '$999',
    tag: 'NEW ARRIVAL',
    specs: '165cm · E-Cup · Silicone Head · TPE Body',
    tier: 'best-value',
    featured: true,
  },
];

export const flagshipProducts = products.filter((product) => product.tier === 'flagship');
export const homepageValueProducts = products.filter(
  (product) => product.tier === 'best-value' && product.featured,
);
