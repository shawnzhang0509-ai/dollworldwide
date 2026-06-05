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

export type ProductTier = 'best-value';

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
    id: 'lillith',
    name: 'Lillith',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD02/Naked%20Photos/DWWD02%20-%20Lillith%20-%20Salefenni-12.jpg',
    price: '$999',
    tag: 'BEST SELLER',
    specs: '165cm · D-Cup · Silicone Head · TPE Body',
    tier: 'best-value',
    featured: true,
    tradeMeSku: '02',
    tradeMeSearchCode: 'DWWD02',
    realLifeMedia: {
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD02/Naked%20Photos/DWWD02%20-%20Lillith%20-%20Salefenni-7.jpg', title: 'Lillith naked DWWD02 - Lillith - DWWD02 - Lillith - Salefenni-7.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD02/Naked%20Photos/DWWD02%20-%20Lillith%20-%20Salefenni-12.jpg', title: 'Lillith naked DWWD02 - Lillith - DWWD02 - Lillith - Salefenni-12.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD02/Naked%20Photos/DWWD02%20-%20Lillith%20-%20Salefenni-13.jpg', title: 'Lillith naked DWWD02 - Lillith - DWWD02 - Lillith - Salefenni-13.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD02/Naked%20Photos/DWWD02%20-%20Lillith%20-%20Salefenni-14.jpg', title: 'Lillith naked DWWD02 - Lillith - DWWD02 - Lillith - Salefenni-14.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD02/Naked%20Photos/DWWD02%20-%20Lillith%20-%20Salefenni-15.jpg', title: 'Lillith naked DWWD02 - Lillith - DWWD02 - Lillith - Salefenni-15.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD02/Naked%20Photos/DWWD02%20-%20Lillith%20-%20Salefenni-16.jpg', title: 'Lillith naked DWWD02 - Lillith - DWWD02 - Lillith - Salefenni-16.jpg' },
      ],
    },
  },
  {
    id: 'nova',
    name: 'Nova',
    image:
      'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD01/Clothed%20Photos/DWWD01%20-%20Nova%20-%20Xuexian-4.jpg',
    price: '$999',
    tag: 'ELITE',
    specs: '148cm · C-Cup · Silicone Head · TPE Body',
    tier: 'best-value',
    featured: true,
    tradeMeSku: '01',
    tradeMeSearchCode: 'DWWD01',
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD01/Clothed%20Photos/DWWD01%20-%20Nova%20-%20Xuexian-4.jpg', title: 'Nova clothed DWWD01 - Nova - Xuexian-4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD01/Clothed%20Photos/DWWD01%20-%20Nova%20-%20Xuexian-5.jpg', title: 'Nova clothed DWWD01 - Nova - Xuexian-5.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD01/Clothed%20Photos/DWWD01%20-%20Nova%20-%20Xuexian-6.jpg', title: 'Nova clothed DWWD01 - Nova - Xuexian-6.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD01/Clothed%20Photos/DWWD01%20-%20Nova%20-%20Xuexian-7.jpg', title: 'Nova clothed DWWD01 - Nova - Xuexian-7.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD01/Clothed%20Photos/DWWD01%20-%20Nova%20-%20Xuexian-8.jpg', title: 'Nova clothed DWWD01 - Nova - Xuexian-8.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD01/Clothed%20Photos/DWWD01%20-%20Nova%20-%20Xuexian-9.jpg', title: 'Nova clothed DWWD01 - Nova - Xuexian-9.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD01/Clothed%20Photos/DWWD01%20-%20Nova%20-%20Xuexian-10.jpg', title: 'Nova clothed DWWD01 - Nova - Xuexian-10.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD01/Naked%20Photos/DWWD01%20-%20Nova%20-%20Xuexian-11.jpg', title: 'Nova naked DWWD01 - Nova - Xuexian-11.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD01/Naked%20Photos/DWWD01%20-%20Nova%20-%20Xuexian-12.jpg', title: 'Nova naked DWWD01 - Nova - Xuexian-12.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD01/Naked%20Photos/DWWD01%20-%20Nova%20-%20Xuexian-13.jpg', title: 'Nova naked DWWD01 - Nova - Xuexian-13.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD01/Naked%20Photos/DWWD01%20-%20Nova%20-%20Xuexian-14.jpg', title: 'Nova naked DWWD01 - Nova - Xuexian-14.jpg' },
      ],
    },
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
    id: 'zara',
    name: 'Zara',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD03/Clothed%20Photos/DWWD03%20-%20Zara%20-%20Diandian-3.jpg',
    price: '$999',
    tag: 'NEW ARRIVAL',
    specs: '165cm · E-Cup · Silicone Head · TPE Body',
    tier: 'best-value',
    featured: true,
    tradeMeSku: '03',
    tradeMeSearchCode: 'DWWD03',
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD03/Clothed%20Photos/DWWD03%20-%20Zara%20-%20Diandian-3.jpg', title: 'DWWD03 - Zara - Diandian-3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD03/Clothed%20Photos/DWWD03%20-%20Zara%20-%20Diandian-4.jpg', title: 'DWWD03 - Zara - Diandian-4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD03/Clothed%20Photos/DWWD03%20-%20Zara%20-%20Diandian-5.jpg', title: 'DWWD03 - Zara - Diandian-5.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD03/Naked%20Photos/DWWD03%20-%20Zara%20-%20Diandian-6.jpg', title: 'DWWD03 - Zara - Diandian-6.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD03/Naked%20Photos/DWWD03%20-%20Zara%20-%20Diandian-7.jpg', title: 'DWWD03 - Zara - Diandian-7.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD03/Naked%20Photos/DWWD03%20-%20Zara%20-%20Diandian-8.jpg', title: 'DWWD03 - Zara - Diandian-8.jpg' },
      ],
    },
  },
  {
    id: 'rei',
    name: 'Rei',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD04/Clothed%20Photos/DWWD04%20-%20Rei%20-%20Lingzi-2.jpg',
    price: '$999',
    tag: 'NEW ARRIVAL',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: true,
    tradeMeSku: '04',
    tradeMeSearchCode: 'DWWD04',
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD04/Clothed%20Photos/DWWD04%20-%20Rei%20-%20Lingzi-2.jpg', title: 'DWWD04 - Rei - Lingzi-2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD04/Clothed%20Photos/DWWD04%20-%20Rei%20-%20Lingzi-3.jpg', title: 'DWWD04 - Rei - Lingzi-3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD04/Clothed%20Photos/DWWD04%20-%20Rei%20-%20Lingzi-4.jpg', title: 'DWWD04 - Rei - Lingzi-4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD04/Clothed%20Photos/DWWD04%20-%20Rei%20-%20Lingzi-5.jpg', title: 'DWWD04 - Rei - Lingzi-5.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD04/Clothed%20Photos/DWWD04%20-%20Rei%20-%20Lingzi-6.jpg', title: 'DWWD04 - Rei - Lingzi-6.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD04/Clothed%20Photos/DWWD04%20-%20Rei%20-%20Lingzi-7.jpg', title: 'DWWD04 - Rei - Lingzi-7.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD04/Clothed%20Photos/DWWD04%20-%20Rei%20-%20Lingzi-8.jpg', title: 'DWWD04 - Rei - Lingzi-8.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD04/Naked%20Photos/DWWD04%20-%20Rei%20-%20Lingzi-9.jpg', title: 'DWWD04 - Rei - Lingzi-9.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD04/Naked%20Photos/DWWD04%20-%20Rei%20-%20Lingzi-10.jpg', title: 'DWWD04 - Rei - Lingzi-10.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD04/Naked%20Photos/DWWD04%20-%20Rei%20-%20Lingzi-11.jpg', title: 'DWWD04 - Rei - Lingzi-11.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD04/Naked%20Photos/DWWD04%20-%20Rei%20-%20Lingzi-12.jpg', title: 'DWWD04 - Rei - Lingzi-12.jpg' },
      ],
    },
  },
  {
    id: 'haruki',
    name: 'Haruki',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD05/Clothed%20Photos/DWWD05%20-%20Haruki%20-%20Yawen-3.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    tradeMeSku: '05',
    tradeMeSearchCode: 'DWWD05',
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD05/Clothed%20Photos/DWWD05%20-%20Haruki%20-%20Yawen-3.jpg', title: 'DWWD05 - Haruki - Yawen-3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD05/Clothed%20Photos/DWWD05%20-%20Haruki%20-%20Yawen-4.jpg', title: 'DWWD05 - Haruki - Yawen-4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD05/Clothed%20Photos/DWWD05%20-%20Haruki%20-%20Yawen-5.jpg', title: 'DWWD05 - Haruki - Yawen-5.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD05/Clothed%20Photos/DWWD05%20-%20Haruki%20-%20Yawen-6.jpg', title: 'DWWD05 - Haruki - Yawen-6.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD05/Clothed%20Photos/DWWD05%20-%20Haruki%20-%20Yawen-7.jpg', title: 'DWWD05 - Haruki - Yawen-7.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD05/Clothed%20Photos/DWWD05%20-%20Haruki%20-%20Yawen-8.jpg', title: 'DWWD05 - Haruki - Yawen-8.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD05/Naked%20Photos/DWWD05%20-%20Haruki%20-%20Yawen-10.jpg', title: 'DWWD05 - Haruki - Yawen-10.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD05/Naked%20Photos/DWWD05%20-%20Haruki%20-%20Yawen-11.jpg', title: 'DWWD05 - Haruki - Yawen-11.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD05/Naked%20Photos/DWWD05%20-%20Haruki%20-%20Yawen-12.jpg', title: 'DWWD05 - Haruki - Yawen-12.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD05/Naked%20Photos/DWWD05%20-%20Haruki%20-%20Yawen-13.jpg', title: 'DWWD05 - Haruki - Yawen-13.jpg' },
      ],
    },
  },
  {
    id: 'yuna',
    name: 'Yuna',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD07/Clothed%20Photos/DWWD07%20-%20Yuna%20-%20Xingzi-2.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    tradeMeSku: '07',
    tradeMeSearchCode: 'DWWD07',
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD07/Clothed%20Photos/DWWD07%20-%20Yuna%20-%20Xingzi-2.jpg', title: 'DWWD07 - Yuna - Xingzi-2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD07/Clothed%20Photos/DWWD07%20-%20Yuna%20-%20Xingzi-3.jpg', title: 'DWWD07 - Yuna - Xingzi-3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD07/Clothed%20Photos/DWWD07%20-%20Yuna%20-%20Xingzi-4.jpg', title: 'DWWD07 - Yuna - Xingzi-4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD07/Clothed%20Photos/DWWD07%20-%20Yuna%20-%20Xingzi-5.jpg', title: 'DWWD07 - Yuna - Xingzi-5.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD07/Clothed%20Photos/DWWD07%20-%20Yuna%20-%20Xingzi-6.jpg', title: 'DWWD07 - Yuna - Xingzi-6.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD07/Clothed%20Photos/DWWD07%20-%20Yuna%20-%20Xingzi-7.jpg', title: 'DWWD07 - Yuna - Xingzi-7.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD07/Naked%20Photos/DWWD07%20-%20Yuna%20-%20Xingzi-8.jpg', title: 'DWWD07 - Yuna - Xingzi-8.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD07/Naked%20Photos/DWWD07%20-%20Yuna%20-%20Xingzi-9.jpg', title: 'DWWD07 - Yuna - Xingzi-9.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD07/Naked%20Photos/DWWD07%20-%20Yuna%20-%20Xingzi-10.jpg', title: 'DWWD07 - Yuna - Xingzi-10.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD07/Naked%20Photos/DWWD07%20-%20Yuna%20-%20Xingzi-11.jpg', title: 'DWWD07 - Yuna - Xingzi-11.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD07/Naked%20Photos/DWWD07%20-%20Yuna%20-%20Xingzi-12.jpg', title: 'DWWD07 - Yuna - Xingzi-12.jpg' },
      ],
    },
  },
  {
    id: 'freya',
    name: 'Freya',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD08/Clothed%20Photos/DWWD08%20-%20Freya%20-%20Shasha-2.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    tradeMeSku: '08',
    tradeMeSearchCode: 'DWWD08',
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD08/Clothed%20Photos/DWWD08%20-%20Freya%20-%20Shasha-2.jpg', title: 'DWWD08 - Freya - Shasha-2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD08/Clothed%20Photos/DWWD08%20-%20Freya%20-%20Shasha-3.jpg', title: 'DWWD08 - Freya - Shasha-3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD08/Clothed%20Photos/DWWD08%20-%20Freya%20-%20Shasha-4.jpg', title: 'DWWD08 - Freya - Shasha-4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD08/Clothed%20Photos/DWWD08%20-%20Freya%20-%20Shasha-5.jpg', title: 'DWWD08 - Freya - Shasha-5.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD08/Clothed%20Photos/DWWD08%20-%20Freya%20-%20Shasha-6.jpg', title: 'DWWD08 - Freya - Shasha-6.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD08/Clothed%20Photos/DWWD08%20-%20Freya%20-%20Shasha-7.jpg', title: 'DWWD08 - Freya - Shasha-7.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD08/Naked%20Photos/DWWD08%20-%20Freya%20-%20Shasha-8.jpg', title: 'DWWD08 - Freya - Shasha-8.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD08/Naked%20Photos/DWWD08%20-%20Freya%20-%20Shasha-9.jpg', title: 'DWWD08 - Freya - Shasha-9.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD08/Naked%20Photos/DWWD08%20-%20Freya%20-%20Shasha-10.jpg', title: 'DWWD08 - Freya - Shasha-10.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD08/Naked%20Photos/DWWD08%20-%20Freya%20-%20Shasha-11.jpg', title: 'DWWD08 - Freya - Shasha-11.jpg' },
      ],
    },
  },
  {
    id: 'tara',
    name: 'Tara',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD09/Clothed%20Photos/DWWD09%20-%20Tara%20-%20Jiachen-2.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    tradeMeSku: '09',
    tradeMeSearchCode: 'DWWD09',
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD09/Clothed%20Photos/DWWD09%20-%20Tara%20-%20Jiachen-2.jpg', title: 'DWWD09 - Tara - Jiachen-2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD09/Clothed%20Photos/DWWD09%20-%20Tara%20-%20Jiachen-3.jpg', title: 'DWWD09 - Tara - Jiachen-3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD09/Clothed%20Photos/DWWD09%20-%20Tara%20-%20Jiachen-4.jpg', title: 'DWWD09 - Tara - Jiachen-4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD09/Clothed%20Photos/DWWD09%20-%20Tara%20-%20Jiachen-5.jpg', title: 'DWWD09 - Tara - Jiachen-5.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD09/Clothed%20Photos/DWWD09%20-%20Tara%20-%20Jiachen-6.jpg', title: 'DWWD09 - Tara - Jiachen-6.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD09/Naked%20Photos/DWWD09%20-%20Tara%20-%20Jiachen-7.jpg', title: 'DWWD09 - Tara - Jiachen-7.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD09/Naked%20Photos/DWWD09%20-%20Tara%20-%20Jiachen-8.jpg', title: 'DWWD09 - Tara - Jiachen-8.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD09/Naked%20Photos/DWWD09%20-%20Tara%20-%20Jiachen-9.jpg', title: 'DWWD09 - Tara - Jiachen-9.jpg' },
      ],
    },
  },
  {
    id: 'kira',
    name: 'Kira',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD10/Clothed%20Photos/DWWD10%20-%20Kira%20-%20Longnv-10.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    tradeMeSku: '10',
    tradeMeSearchCode: 'DWWD10',
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD10/Clothed%20Photos/DWWD10%20-%20Kira%20-%20Longnv-10.jpg', title: 'DWWD10 - Kira - Longnv-10.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD10/Clothed%20Photos/DWWD10%20-%20Kira%20-%20Longnv-11.jpg', title: 'DWWD10 - Kira - Longnv-11.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD10/Clothed%20Photos/DWWD10%20-%20Kira%20-%20Longnv-12.jpg', title: 'DWWD10 - Kira - Longnv-12.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD10/Clothed%20Photos/DWWD10%20-%20Kira%20-%20Longnv-13.jpg', title: 'DWWD10 - Kira - Longnv-13.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD10/Clothed%20Photos/DWWD10%20-%20Kira%20-%20Longnv-14.jpg', title: 'DWWD10 - Kira - Longnv-14.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD10/Naked%20Photos/DWWD10%20-%20Kira%20-%20Longnv-6.jpg', title: 'DWWD10 - Kira - Longnv-6.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD10/Naked%20Photos/DWWD10%20-%20Kira%20-%20Longnv-7.jpg', title: 'DWWD10 - Kira - Longnv-7.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD10/Naked%20Photos/DWWD10%20-%20Kira%20-%20Longnv-8.jpg', title: 'DWWD10 - Kira - Longnv-8.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD10/Naked%20Photos/DWWD10%20-%20Kira%20-%20Longnv-9.jpg', title: 'DWWD10 - Kira - Longnv-9.jpg' },
      ],
    },
  },
  {
    id: 'juliet',
    name: 'Juliet',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD11/Clothed%20Photos/DWWD11%20-%20Juliet%20-%20Muyao-2.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    tradeMeSku: '11',
    tradeMeSearchCode: 'DWWD11',
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD11/Clothed%20Photos/DWWD11%20-%20Juliet%20-%20Muyao-2.jpg', title: 'DWWD11 - Juliet - Muyao-2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD11/Clothed%20Photos/DWWD11%20-%20Juliet%20-%20Muyao-3.jpg', title: 'DWWD11 - Juliet - Muyao-3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD11/Clothed%20Photos/DWWD11%20-%20Juliet%20-%20Muyao-4.jpg', title: 'DWWD11 - Juliet - Muyao-4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD11/Clothed%20Photos/DWWD11%20-%20Juliet%20-%20Muyao-6.jpg', title: 'DWWD11 - Juliet - Muyao-6.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD11/Clothed%20Photos/DWWD11%20-%20Juliet%20-%20Muyao-7.jpg', title: 'DWWD11 - Juliet - Muyao-7.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD11/Naked%20Photos/DWWD11%20-%20Juliet%20-%20Muyao-8.jpg', title: 'DWWD11 - Juliet - Muyao-8.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD11/Naked%20Photos/DWWD11%20-%20Juliet%20-%20Muyao-9.jpg', title: 'DWWD11 - Juliet - Muyao-9.jpg' },
      ],
    },
  },
  {
    id: 'ivy',
    name: 'Ivy',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD12/Clothed%20Photos/DWWD12%20-%20Ivy%20-%20Muyu-2.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    tradeMeSku: '12',
    tradeMeSearchCode: 'DWWD12',
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD12/Clothed%20Photos/DWWD12%20-%20Ivy%20-%20Muyu-2.jpg', title: 'DWWD12 - Ivy - Muyu-2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD12/Clothed%20Photos/DWWD12%20-%20Ivy%20-%20Muyu-3.jpg', title: 'DWWD12 - Ivy - Muyu-3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD12/Clothed%20Photos/DWWD12%20-%20Ivy%20-%20Muyu-4.jpg', title: 'DWWD12 - Ivy - Muyu-4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD12/Clothed%20Photos/DWWD12%20-%20Ivy%20-%20Muyu-6.jpg', title: 'DWWD12 - Ivy - Muyu-6.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD12/Clothed%20Photos/DWWD12%20-%20Ivy%20-%20Muyu-7.jpg', title: 'DWWD12 - Ivy - Muyu-7.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD12/Clothed%20Photos/DWWD12%20-%20Ivy%20-%20Muyu-8.jpg', title: 'DWWD12 - Ivy - Muyu-8.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD12/Naked%20Photos/DWWD12%20-%20Ivy%20-%20Muyu-10.jpg', title: 'DWWD12 - Ivy - Muyu-10.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD12/Naked%20Photos/DWWD12%20-%20Ivy%20-%20Muyu-11.jpg', title: 'DWWD12 - Ivy - Muyu-11.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD12/Naked%20Photos/DWWD12%20-%20Ivy%20-%20Muyu-12.jpg', title: 'DWWD12 - Ivy - Muyu-12.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD12/Naked%20Photos/DWWD12%20-%20Ivy%20-%20Muyu-13.jpg', title: 'DWWD12 - Ivy - Muyu-13.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD12/Naked%20Photos/DWWD12%20-%20Ivy%20-%20Muyu-14.jpg', title: 'DWWD12 - Ivy - Muyu-14.jpg' },
      ],
    },
  },
  {
    id: 'olivia',
    name: 'Olivia',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD13/Clothed%20Photos/DWWD13%20-%20Olivia%20-%20Nanxi-2.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    tradeMeSku: '13',
    tradeMeSearchCode: 'DWWD13',
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD13/Clothed%20Photos/DWWD13%20-%20Olivia%20-%20Nanxi-2.jpg', title: 'DWWD13 - Olivia - Nanxi-2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD13/Clothed%20Photos/DWWD13%20-%20Olivia%20-%20Nanxi-3.jpg', title: 'DWWD13 - Olivia - Nanxi-3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD13/Clothed%20Photos/DWWD13%20-%20Olivia%20-%20Nanxi-4.jpg', title: 'DWWD13 - Olivia - Nanxi-4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD13/Clothed%20Photos/DWWD13%20-%20Olivia%20-%20Nanxi-5.jpg', title: 'DWWD13 - Olivia - Nanxi-5.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD13/Clothed%20Photos/DWWD13%20-%20Olivia%20-%20Nanxi-6.jpg', title: 'DWWD13 - Olivia - Nanxi-6.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD13/Naked%20Photos/DWWD13%20-%20Olivia%20-%20Nanxi-7.jpg', title: 'DWWD13 - Olivia - Nanxi-7.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD13/Naked%20Photos/DWWD13%20-%20Olivia%20-%20Nanxi-8.jpg', title: 'DWWD13 - Olivia - Nanxi-8.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD13/Naked%20Photos/DWWD13%20-%20Olivia%20-%20Nanxi-9.jpg', title: 'DWWD13 - Olivia - Nanxi-9.jpg' },
      ],
    },
  },
  {
    id: 'sophie',
    name: 'Sophie',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD14/Clothed%20Photos/DWWD14%20-%20Sophie%20-%20Zhiyan-2.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    tradeMeSku: '14',
    tradeMeSearchCode: 'DWWD14',
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD14/Clothed%20Photos/DWWD14%20-%20Sophie%20-%20Zhiyan-2.jpg', title: 'DWWD14 - Sophie - Zhiyan-2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD14/Clothed%20Photos/DWWD14%20-%20Sophie%20-%20Zhiyan-3.jpg', title: 'DWWD14 - Sophie - Zhiyan-3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD14/Clothed%20Photos/DWWD14%20-%20Sophie%20-%20Zhiyan-4.jpg', title: 'DWWD14 - Sophie - Zhiyan-4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD14/Clothed%20Photos/DWWD14%20-%20Sophie%20-%20Zhiyan-5.jpg', title: 'DWWD14 - Sophie - Zhiyan-5.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD14/Clothed%20Photos/DWWD14%20-%20Sophie%20-%20Zhiyan-6.jpg', title: 'DWWD14 - Sophie - Zhiyan-6.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD14/Clothed%20Photos/DWWD14%20-%20Sophie%20-%20Zhiyan-7.jpg', title: 'DWWD14 - Sophie - Zhiyan-7.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD14/Clothed%20Photos/DWWD14%20-%20Sophie%20-%20Zhiyan-8.jpg', title: 'DWWD14 - Sophie - Zhiyan-8.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD14/Naked%20Photos/DWWD14%20-%20Sophie%20-%20Zhiyan-9.jpg', title: 'DWWD14 - Sophie - Zhiyan-9.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD14/Naked%20Photos/DWWD14%20-%20Sophie%20-%20Zhiyan-10.jpg', title: 'DWWD14 - Sophie - Zhiyan-10.jpg' },
      ],
    },
  },
  {
    id: 'bonnie',
    name: 'Bonnie',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD15/Clothed%20Photos/DWWD15%20-%20Bonnie%20-%20Xiaen-2.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    tradeMeSku: '15',
    tradeMeSearchCode: 'DWWD15',
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD15/Clothed%20Photos/DWWD15%20-%20Bonnie%20-%20Xiaen-2.jpg', title: 'DWWD15 - Bonnie - Xiaen-2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD15/Clothed%20Photos/DWWD15%20-%20Bonnie%20-%20Xiaen-3.jpg', title: 'DWWD15 - Bonnie - Xiaen-3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD15/Clothed%20Photos/DWWD15%20-%20Bonnie%20-%20Xiaen-4.jpg', title: 'DWWD15 - Bonnie - Xiaen-4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD15/Clothed%20Photos/DWWD15%20-%20Bonnie%20-%20Xiaen-5.jpg', title: 'DWWD15 - Bonnie - Xiaen-5.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD15/Clothed%20Photos/DWWD15%20-%20Bonnie%20-%20Xiaen-6.jpg', title: 'DWWD15 - Bonnie - Xiaen-6.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD15/Clothed%20Photos/DWWD15%20-%20Bonnie%20-%20Xiaen-7.jpg', title: 'DWWD15 - Bonnie - Xiaen-7.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD15/Naked%20Photos/DWWD15%20-%20Bonnie%20-%20Xiaen-8.jpg', title: 'DWWD15 - Bonnie - Xiaen-8.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD15/Naked%20Photos/DWWD15%20-%20Bonnie%20-%20Xiaen-9.jpg', title: 'DWWD15 - Bonnie - Xiaen-9.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD15/Naked%20Photos/DWWD15%20-%20Bonnie%20-%20Xiaen-10.jpg', title: 'DWWD15 - Bonnie - Xiaen-10.jpg' },
      ],
    },
  },
  {
    id: 'maya',
    name: 'Maya',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD16/Clothed%20Photos/DWWD16%20-%20Maya%20-%20Chunzi-4.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    tradeMeSku: '16',
    tradeMeSearchCode: 'DWWD16',
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD16/Clothed%20Photos/DWWD16%20-%20Maya%20-%20Chunzi-4.jpg', title: 'DWWD16 - Maya - Chunzi-4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD16/Clothed%20Photos/DWWD16%20-%20Maya%20-%20Chunzi-5.jpg', title: 'DWWD16 - Maya - Chunzi-5.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD16/Clothed%20Photos/DWWD16%20-%20Maya%20-%20Chunzi-6.jpg', title: 'DWWD16 - Maya - Chunzi-6.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD16/Clothed%20Photos/DWWD16%20-%20Maya%20-%20Chunzi-7.jpg', title: 'DWWD16 - Maya - Chunzi-7.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD16/Clothed%20Photos/DWWD16%20-%20Maya%20-%20Chunzi-8.jpg', title: 'DWWD16 - Maya - Chunzi-8.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD16/Clothed%20Photos/DWWD16%20-%20Maya%20-%20Chunzi-9.jpg', title: 'DWWD16 - Maya - Chunzi-9.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD16/Clothed%20Photos/DWWD16%20-%20Maya%20-%20Chunzi-10.jpg', title: 'DWWD16 - Maya - Chunzi-10.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD16/Naked%20Photos/DWWD16%20-%20Maya%20-%20Chunzi-11.jpg', title: 'DWWD16 - Maya - Chunzi-11.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD16/Naked%20Photos/DWWD16%20-%20Maya%20-%20Chunzi-12.jpg', title: 'DWWD16 - Maya - Chunzi-12.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD16/Naked%20Photos/DWWD16%20-%20Maya%20-%20Chunzi-13.jpg', title: 'DWWD16 - Maya - Chunzi-13.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD16/Naked%20Photos/DWWD16%20-%20Maya%20-%20Chunzi-14.jpg', title: 'DWWD16 - Maya - Chunzi-14.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD16/Naked%20Photos/DWWD16%20-%20Maya%20-%20Chunzi-15.jpg', title: 'DWWD16 - Maya - Chunzi-15.jpg' },
      ],
    },
  },
  {
    id: 'aiko',
    name: 'Aiko',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD17/Clothed%20Photos/DWWD17%20-%20Aiko%20-%20Qiaoyi-3.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    tradeMeSku: '17',
    tradeMeSearchCode: 'DWWD17',
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD17/Clothed%20Photos/DWWD17%20-%20Aiko%20-%20Qiaoyi-3.jpg', title: 'DWWD17 - Aiko - Qiaoyi-3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD17/Clothed%20Photos/DWWD17%20-%20Aiko%20-%20Qiaoyi-4.jpg', title: 'DWWD17 - Aiko - Qiaoyi-4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD17/Clothed%20Photos/DWWD17%20-%20Aiko%20-%20Qiaoyi-5.jpg', title: 'DWWD17 - Aiko - Qiaoyi-5.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD17/Clothed%20Photos/DWWD17%20-%20Aiko%20-%20Qiaoyi-6.jpg', title: 'DWWD17 - Aiko - Qiaoyi-6.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD17/Clothed%20Photos/DWWD17%20-%20Aiko%20-%20Qiaoyi-7.jpg', title: 'DWWD17 - Aiko - Qiaoyi-7.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD17/Naked%20Photos/DWWD17%20-%20Aiko%20-%20Qiaoyi-9.jpg', title: 'DWWD17 - Aiko - Qiaoyi-9.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD17/Naked%20Photos/DWWD17%20-%20Aiko%20-%20Qiaoyi-10.jpg', title: 'DWWD17 - Aiko - Qiaoyi-10.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD17/Naked%20Photos/DWWD17%20-%20Aiko%20-%20Qiaoyi-11.jpg', title: 'DWWD17 - Aiko - Qiaoyi-11.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD17/Naked%20Photos/DWWD17%20-%20Aiko%20-%20Qiaoyi-12.jpg', title: 'DWWD17 - Aiko - Qiaoyi-12.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD17/Naked%20Photos/DWWD17%20-%20Aiko%20-%20Qiaoyi-13.jpg', title: 'DWWD17 - Aiko - Qiaoyi-13.jpg' },
      ],
    },
  },
  {
    id: 'mei',
    name: 'Mei',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD18/Clothed%20Photos/DWWD18%20-%20Mei%20-%20Xiaodie-2.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    tradeMeSku: '18',
    tradeMeSearchCode: 'DWWD18',
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD18/Clothed%20Photos/DWWD18%20-%20Mei%20-%20Xiaodie-2.jpg', title: 'DWWD18 - Mei - Xiaodie-2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD18/Clothed%20Photos/DWWD18%20-%20Mei%20-%20Xiaodie-6.jpg', title: 'DWWD18 - Mei - Xiaodie-6.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD18/Clothed%20Photos/DWWD18%20-%20Mei%20-%20Xiaodie-7.jpg', title: 'DWWD18 - Mei - Xiaodie-7.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD18/Clothed%20Photos/DWWD18%20-%20Mei%20-%20Xiaodie-8.jpg', title: 'DWWD18 - Mei - Xiaodie-8.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD18/Clothed%20Photos/DWWD18%20-%20Mei%20-%20Xiaodie-9.jpg', title: 'DWWD18 - Mei - Xiaodie-9.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD18/Clothed%20Photos/DWWD18%20-%20Mei%20-%20Xiaodie-10.jpg', title: 'DWWD18 - Mei - Xiaodie-10.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD18/Naked%20Photos/DWWD18%20-%20Mei%20-%20Xiaodie-11.jpg', title: 'DWWD18 - Mei - Xiaodie-11.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD18/Naked%20Photos/DWWD18%20-%20Mei%20-%20Xiaodie-12.jpg', title: 'DWWD18 - Mei - Xiaodie-12.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD18/Naked%20Photos/DWWD18%20-%20Mei%20-%20Xiaodie-13.jpg', title: 'DWWD18 - Mei - Xiaodie-13.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD18/Naked%20Photos/DWWD18%20-%20Mei%20-%20Xiaodie-14.jpg', title: 'DWWD18 - Mei - Xiaodie-14.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD18/Naked%20Photos/DWWD18%20-%20Mei%20-%20Xiaodie-15.jpg', title: 'DWWD18 - Mei - Xiaodie-15.jpg' },
      ],
    },
  },
  {
    id: 'aria',
    name: 'Aria',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD19/Clothed%20Photos/DWWD19%20-%20Aria%20-%20Beila-11.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    tradeMeSku: '19',
    tradeMeSearchCode: 'DWWD19',
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD19/Clothed%20Photos/DWWD19%20-%20Aria%20-%20Beila-11.jpg', title: 'DWWD19 - Aria - Beila-11.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD19/Clothed%20Photos/DWWD19%20-%20Aria%20-%20Beila-12.jpg', title: 'DWWD19 - Aria - Beila-12.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD19/Clothed%20Photos/DWWD19%20-%20Aria%20-%20Beila-13.jpg', title: 'DWWD19 - Aria - Beila-13.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD19/Clothed%20Photos/DWWD19%20-%20Aria%20-%20Beila-14.jpg', title: 'DWWD19 - Aria - Beila-14.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD19/Clothed%20Photos/DWWD19%20-%20Aria%20-%20Beila-15.jpg', title: 'DWWD19 - Aria - Beila-15.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD19/Clothed%20Photos/DWWD19%20-%20Aria%20-%20Beila-16.jpg', title: 'DWWD19 - Aria - Beila-16.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD19/Naked%20Photos/DWWD19%20-%20Aria%20-%20Beila-2.jpg', title: 'DWWD19 - Aria - Beila-2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD19/Naked%20Photos/DWWD19%20-%20Aria%20-%20Beila-3.jpg', title: 'DWWD19 - Aria - Beila-3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD19/Naked%20Photos/DWWD19%20-%20Aria%20-%20Beila-4.jpg', title: 'DWWD19 - Aria - Beila-4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD19/Naked%20Photos/DWWD19%20-%20Aria%20-%20Beila-5.jpg', title: 'DWWD19 - Aria - Beila-5.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD19/Naked%20Photos/DWWD19%20-%20Aria%20-%20Beila-17.jpg', title: 'DWWD19 - Aria - Beila-17.jpg' },
      ],
    },
  },
];

export const homepageValueProducts = products.filter(
  (product) => product.tier === 'best-value' && product.featured,
);
