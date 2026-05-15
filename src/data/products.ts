export type RealLifeMediaCategoryId = 'clothedPhotos' | 'nakedPhotos' | 'videos';

export interface RealLifeMediaCategory {
  id: RealLifeMediaCategoryId;
  label: string;
  description: string;
  mediaType: 'photos' | 'videos';
}

export interface PhotoAsset {
  src: string;
  title?: string;
  alt?: string;
}

export interface VideoAsset {
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
  realLifeMedia?: Partial<Record<RealLifeMediaCategoryId, PhotoAsset[] | VideoAsset[]>>;
}

export const realLifeMediaCategories: RealLifeMediaCategory[] = [
  {
    id: 'clothedPhotos',
    label: 'Clothed Photos',
    description: 'Main product and styled photos for checking the model presentation.',
    mediaType: 'photos',
  },
  {
    id: 'nakedPhotos',
    label: 'Naked Photos',
    description: 'Chat-style naked body photos for checking shape, proportions, and condition.',
    mediaType: 'photos',
  },
  {
    id: 'videos',
    label: 'Videos',
    description: 'Real-life videos that play inside the website popup.',
    mediaType: 'videos',
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
    realLifeMedia: {
      videos: [
        {
          src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/flagship-skin-texture/naked/videos/1.mp4',
          title: 'Full silicone skin texture detail',
        },
      ],
    },
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
    id: 'DWWD06',
    name: 'Xina',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD06/Naked/photos/2236145526.jpg',
    price: '$999',
    tag: 'READY STOCK',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    tradeMeSearchCode: 'DWWD06',
    realLifeMedia: {
      nakedPhotos: [
        {
          src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD06/Naked/photos/2236145526.jpg',
          title: 'Xina naked body photo',
        },
      ],
    },
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
