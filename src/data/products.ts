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
    id: 'jiani',
    name: '佳妮',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E4%BD%B3%E5%A6%AE(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)--Jiani/%E4%B8%BB%E5%9B%BE/DSC03222.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E4%BD%B3%E5%A6%AE(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)--Jiani/%E4%B8%BB%E5%9B%BE/DSC03222.jpg', title: '佳妮 clothed DSC03222.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E4%BD%B3%E5%A6%AE(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)--Jiani/%E4%B8%BB%E5%9B%BE/DSC03262.jpg', title: '佳妮 clothed DSC03262.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E4%BD%B3%E5%A6%AE(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)--Jiani/%E4%B8%BB%E5%9B%BE/DSC03267.jpg', title: '佳妮 clothed DSC03267.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E4%BD%B3%E5%A6%AE(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)--Jiani/%E4%B8%BB%E5%9B%BE/DSC03303.jpg', title: '佳妮 clothed DSC03303.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E4%BD%B3%E5%A6%AE(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)--Jiani/%E4%B8%BB%E5%9B%BE/DSC03340.jpg', title: '佳妮 clothed DSC03340.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E4%BD%B3%E5%A6%AE(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)--Jiani/%E4%B8%BB%E5%9B%BE/DSC03355.jpg', title: '佳妮 clothed DSC03355.jpg' },
      ],
      videos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E4%BD%B3%E5%A6%AE(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)--Jiani/%E8%A7%86%E9%A2%91/1~1.mp4', title: '佳妮 video 1~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E4%BD%B3%E5%A6%AE(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)--Jiani/%E4%B8%BB%E5%9B%BE/DSC03222.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E4%BD%B3%E5%A6%AE(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)--Jiani/%E8%A7%86%E9%A2%91/2~1.mp4', title: '佳妮 video 2~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E4%BD%B3%E5%A6%AE(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)--Jiani/%E4%B8%BB%E5%9B%BE/DSC03222.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E4%BD%B3%E5%A6%AE(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)--Jiani/%E8%A7%86%E9%A2%91/3~1.mp4', title: '佳妮 video 3~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E4%BD%B3%E5%A6%AE(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)--Jiani/%E4%B8%BB%E5%9B%BE/DSC03222.jpg' },
      ],
    },
  },
  {
    id: 'lingzi',
    name: '凌子',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%8C%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Lingzi/%E4%B8%BB%E5%9B%BE/1.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%8C%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Lingzi/%E4%B8%BB%E5%9B%BE/1.jpg', title: '凌子 clothed 1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%8C%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Lingzi/%E4%B8%BB%E5%9B%BE/2.jpg', title: '凌子 clothed 2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%8C%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Lingzi/%E4%B8%BB%E5%9B%BE/3.jpg', title: '凌子 clothed 3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%8C%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Lingzi/%E4%B8%BB%E5%9B%BE/4.jpg', title: '凌子 clothed 4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%8C%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Lingzi/%E4%B8%BB%E5%9B%BE/5.jpg', title: '凌子 clothed 5.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%8C%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Lingzi/%E4%B8%BB%E5%9B%BE/6.jpg', title: '凌子 clothed 6.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%8C%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Lingzi/%E4%B8%BB%E5%9B%BE/7.jpg', title: '凌子 clothed 7.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%8C%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Lingzi/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC04482.jpg', title: '凌子 photo DSC04482.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%8C%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Lingzi/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC04553.jpg', title: '凌子 photo DSC04553.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%8C%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Lingzi/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC04657.jpg', title: '凌子 photo DSC04657.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%8C%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Lingzi/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC04785.jpg', title: '凌子 photo DSC04785.jpg' },
      ],
    },
  },
  {
    id: 'kaitelin',
    name: '凯特琳',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E4%B8%BB%E5%9B%BE/1.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E4%B8%BB%E5%9B%BE/1.jpg', title: '凯特琳 clothed 1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E4%B8%BB%E5%9B%BE/2.jpg', title: '凯特琳 clothed 2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E4%B8%BB%E5%9B%BE/3.jpg', title: '凯特琳 clothed 3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E4%B8%BB%E5%9B%BE/4.jpg', title: '凯特琳 clothed 4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E4%B8%BB%E5%9B%BE/5.jpg', title: '凯特琳 clothed 5.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC08241.jpg', title: '凯特琳 photo DSC08241.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC08272.jpg', title: '凯特琳 photo DSC08272.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC08432.jpg', title: '凯特琳 photo DSC08432.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC08491.jpg', title: '凯特琳 photo DSC08491.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC08545.jpg', title: '凯特琳 photo DSC08545.jpg' },
      ],
      videos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E9%AB%98%E6%B8%85%E9%80%8F%E8%A7%86%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91/202210251255(1)~1.mp4', title: '凯特琳 video 202210251255(1)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E9%AB%98%E6%B8%85%E9%80%8F%E8%A7%86%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91/202210251255(10)~1.mp4', title: '凯特琳 video 202210251255(10)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E9%AB%98%E6%B8%85%E9%80%8F%E8%A7%86%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91/202210251255(2)~1.mp4', title: '凯特琳 video 202210251255(2)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E9%AB%98%E6%B8%85%E9%80%8F%E8%A7%86%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91/202210251255(3)~1.mp4', title: '凯特琳 video 202210251255(3)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E9%AB%98%E6%B8%85%E9%80%8F%E8%A7%86%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91/202210251255(4)~1.mp4', title: '凯特琳 video 202210251255(4)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E9%AB%98%E6%B8%85%E9%80%8F%E8%A7%86%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91/202210251255(5)~1.mp4', title: '凯特琳 video 202210251255(5)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E9%AB%98%E6%B8%85%E9%80%8F%E8%A7%86%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91/202210251255(6)~1.mp4', title: '凯特琳 video 202210251255(6)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E9%AB%98%E6%B8%85%E9%80%8F%E8%A7%86%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91/202210251255(7)~1.mp4', title: '凯特琳 video 202210251255(7)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E9%AB%98%E6%B8%85%E9%80%8F%E8%A7%86%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91/202210251255(8)~1.mp4', title: '凯特琳 video 202210251255(8)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E9%AB%98%E6%B8%85%E9%80%8F%E8%A7%86%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91/202210251255(9)~1.mp4', title: '凯特琳 video 202210251255(9)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E9%AB%98%E6%B8%85%E9%80%8F%E8%A7%86%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91/202210251255~1.mp4', title: '凯特琳 video 202210251255~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%87%AF%E7%89%B9%E7%90%B3(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Kaitelin/%E4%B8%BB%E5%9B%BE/1.jpg' },
      ],
    },
  },
  {
    id: 'anqing',
    name: '安青',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%AE%89%E9%9D%92(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Anqing/%E4%B8%BB%E5%9B%BE/1.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%AE%89%E9%9D%92(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Anqing/%E4%B8%BB%E5%9B%BE/1.jpg', title: '安青 clothed 1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%AE%89%E9%9D%92(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Anqing/%E4%B8%BB%E5%9B%BE/2.jpg', title: '安青 clothed 2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%AE%89%E9%9D%92(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Anqing/%E4%B8%BB%E5%9B%BE/3.jpg', title: '安青 clothed 3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%AE%89%E9%9D%92(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Anqing/%E4%B8%BB%E5%9B%BE/4.jpg', title: '安青 clothed 4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%AE%89%E9%9D%92(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Anqing/%E4%B8%BB%E5%9B%BE/5.jpg', title: '安青 clothed 5.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%AE%89%E9%9D%92(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Anqing/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC02856.jpg', title: '安青 photo DSC02856.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%AE%89%E9%9D%92(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Anqing/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC02881.jpg', title: '安青 photo DSC02881.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%AE%89%E9%9D%92(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Anqing/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC02913.jpg', title: '安青 photo DSC02913.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%AE%89%E9%9D%92(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Anqing/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC02929.jpg', title: '安青 photo DSC02929.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%AE%89%E9%9D%92(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Anqing/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC02935.jpg', title: '安青 photo DSC02935.jpg' },
      ],
      videos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%AE%89%E9%9D%92(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Anqing/%E8%A7%86%E9%A2%91/1.mp4', title: '安青 video 1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%AE%89%E9%9D%92(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Anqing/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%AE%89%E9%9D%92(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Anqing/%E8%A7%86%E9%A2%91/2.mp4', title: '安青 video 2.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%AE%89%E9%9D%92(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Anqing/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%AE%89%E9%9D%92(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Anqing/%E8%A7%86%E9%A2%91/3.mp4', title: '安青 video 3.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E5%AE%89%E9%9D%92(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Anqing/%E4%B8%BB%E5%9B%BE/1.jpg' },
      ],
    },
  },
  {
    id: 'huiyan',
    name: '慧妍',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E4%B8%BB%E5%9B%BE/1.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E4%B8%BB%E5%9B%BE/1.jpg', title: '慧妍 clothed 1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E4%B8%BB%E5%9B%BE/2.jpg', title: '慧妍 clothed 2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E4%B8%BB%E5%9B%BE/3.jpg', title: '慧妍 clothed 3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E4%B8%BB%E5%9B%BE/4.jpg', title: '慧妍 clothed 4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E4%B8%BB%E5%9B%BE/5.jpg', title: '慧妍 clothed 5.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E4%B8%BB%E5%9B%BE/6.jpg', title: '慧妍 clothed 6.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E4%B8%BB%E5%9B%BE/7.jpg', title: '慧妍 clothed 7.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC03059.jpg', title: '慧妍 photo DSC03059.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC03196.jpg', title: '慧妍 photo DSC03196.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC03246.jpg', title: '慧妍 photo DSC03246.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC03347.jpg', title: '慧妍 photo DSC03347.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC03431.jpg', title: '慧妍 photo DSC03431.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC03561.jpg', title: '慧妍 photo DSC03561.jpg' },
      ],
      videos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E8%A7%86%E9%A2%91/202208161216(1).mp4', title: '慧妍 video 202208161216(1).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E8%A7%86%E9%A2%91/202208161216(2).mp4', title: '慧妍 video 202208161216(2).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E8%A7%86%E9%A2%91/202208161216(3).mp4', title: '慧妍 video 202208161216(3).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E8%A7%86%E9%A2%91/202208161216(4).mp4', title: '慧妍 video 202208161216(4).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E8%A7%86%E9%A2%91/202208161216(5).mp4', title: '慧妍 video 202208161216(5).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E8%A7%86%E9%A2%91/202208161216(6).mp4', title: '慧妍 video 202208161216(6).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E8%A7%86%E9%A2%91/202208161216(7).mp4', title: '慧妍 video 202208161216(7).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E8%A7%86%E9%A2%91/202208161216.mp4', title: '慧妍 video 202208161216.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%85%A7%E5%A6%8D(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)%20--Huiyan/%E4%B8%BB%E5%9B%BE/1.jpg' },
      ],
    },
  },
  {
    id: 'huanshi',
    name: '欢诗',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/1.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/1.jpg', title: '欢诗 clothed 1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/2.jpg', title: '欢诗 clothed 2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/3.jpg', title: '欢诗 clothed 3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/4.jpg', title: '欢诗 clothed 4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/5.jpg', title: '欢诗 clothed 5.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC00410.jpg', title: '欢诗 photo DSC00410.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC00516.jpg', title: '欢诗 photo DSC00516.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC00578.jpg', title: '欢诗 photo DSC00578.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC00595.jpg', title: '欢诗 photo DSC00595.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC00649.jpg', title: '欢诗 photo DSC00649.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC00708.jpg', title: '欢诗 photo DSC00708.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC09518.jpg', title: '欢诗 photo DSC09518.jpg' },
      ],
      videos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%A7%86%E9%A2%911/202209131702(1)~1.mp4', title: '欢诗 video 202209131702(1)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%A7%86%E9%A2%911/202209131702(10)~1.mp4', title: '欢诗 video 202209131702(10)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%A7%86%E9%A2%911/202209131702(11)~1.mp4', title: '欢诗 video 202209131702(11)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%A7%86%E9%A2%911/202209131702(12)~1.mp4', title: '欢诗 video 202209131702(12)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%A7%86%E9%A2%911/202209131702(13)~1.mp4', title: '欢诗 video 202209131702(13)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%A7%86%E9%A2%911/202209131702(14)~1.mp4', title: '欢诗 video 202209131702(14)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%A7%86%E9%A2%911/202209131702(15)~1.mp4', title: '欢诗 video 202209131702(15)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%A7%86%E9%A2%911/202209131702(2)~1.mp4', title: '欢诗 video 202209131702(2)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%A7%86%E9%A2%911/202209131702(3)~1.mp4', title: '欢诗 video 202209131702(3)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%A7%86%E9%A2%911/202209131702(4)~1.mp4', title: '欢诗 video 202209131702(4)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%A7%86%E9%A2%911/202209131702(5)~1.mp4', title: '欢诗 video 202209131702(5)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%A7%86%E9%A2%911/202209131702(6)~1.mp4', title: '欢诗 video 202209131702(6)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%A7%86%E9%A2%911/202209131702(7)~1.mp4', title: '欢诗 video 202209131702(7)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%A7%86%E9%A2%911/202209131702(8)~1.mp4', title: '欢诗 video 202209131702(8)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%A7%86%E9%A2%911/202209131702(9)~1.mp4', title: '欢诗 video 202209131702(9)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E8%A7%86%E9%A2%911/202209131702~1.mp4', title: '欢诗 video 202209131702~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E6%AC%A2%E8%AF%97(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Huanshi/%E4%B8%BB%E5%9B%BE/1.jpg' },
      ],
    },
  },
  {
    id: 'diandian',
    name: '点点',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%82%B9%E7%82%B9(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Diandian/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%82%B9%E7%82%B9(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Diandian/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg', title: '点点 clothed 未标题-1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%82%B9%E7%82%B9(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Diandian/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-2.jpg', title: '点点 clothed 未标题-2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%82%B9%E7%82%B9(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Diandian/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-3.jpg', title: '点点 clothed 未标题-3.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%82%B9%E7%82%B9(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Diandian/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC05721.JPG', title: '点点 photo DSC05721.JPG' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%82%B9%E7%82%B9(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Diandian/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC06556.jpg', title: '点点 photo DSC06556.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%82%B9%E7%82%B9(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)-Diandian/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC06626.jpg', title: '点点 photo DSC06626.jpg' },
      ],
    },
  },
  {
    id: 'aihui',
    name: '爱慧',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E4%B8%BB%E5%9B%BE/1.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E4%B8%BB%E5%9B%BE/1.jpg', title: '爱慧 clothed 1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E4%B8%BB%E5%9B%BE/2.jpg', title: '爱慧 clothed 2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E4%B8%BB%E5%9B%BE/3.jpg', title: '爱慧 clothed 3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E4%B8%BB%E5%9B%BE/4.jpg', title: '爱慧 clothed 4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E4%B8%BB%E5%9B%BE/5.jpg', title: '爱慧 clothed 5.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E4%B8%BB%E5%9B%BE/6.jpg', title: '爱慧 clothed 6.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC05492.jpg', title: '爱慧 photo DSC05492.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC05595.jpg', title: '爱慧 photo DSC05595.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC05959.jpg', title: '爱慧 photo DSC05959.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC06001.jpg', title: '爱慧 photo DSC06001.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC06038.jpg', title: '爱慧 photo DSC06038.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC06062.jpg', title: '爱慧 photo DSC06062.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC06128.jpg', title: '爱慧 photo DSC06128.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC06148.jpg', title: '爱慧 photo DSC06148.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC06197.jpg', title: '爱慧 photo DSC06197.jpg' },
      ],
      videos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%A7%86%E9%A2%91/202208250955(1)~1.mp4', title: '爱慧 video 202208250955(1)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%A7%86%E9%A2%91/202208250955(2)~1.mp4', title: '爱慧 video 202208250955(2)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%A7%86%E9%A2%91/202208250955(3)~1.mp4', title: '爱慧 video 202208250955(3)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%A7%86%E9%A2%91/202208250955(4)~1.mp4', title: '爱慧 video 202208250955(4)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%A7%86%E9%A2%91/202208250955(5)~1.mp4', title: '爱慧 video 202208250955(5)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%A7%86%E9%A2%91/202208250955(6)~1.mp4', title: '爱慧 video 202208250955(6)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%A7%86%E9%A2%91/202208250955(7)~1.mp4', title: '爱慧 video 202208250955(7)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%A7%86%E9%A2%91/202208250955(8)~1.mp4', title: '爱慧 video 202208250955(8)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%A7%86%E9%A2%91/202208250955(9)~1.mp4', title: '爱慧 video 202208250955(9)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E8%A7%86%E9%A2%91/202208250955~1.mp4', title: '爱慧 video 202208250955~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%88%B1%E6%85%A7(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Aihui/%E4%B8%BB%E5%9B%BE/1.jpg' },
      ],
    },
  },
  {
    id: 'chunzi',
    name: '纯子',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E4%B8%BB%E5%9B%BE/1.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E4%B8%BB%E5%9B%BE/1.jpg', title: '纯子 clothed 1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E4%B8%BB%E5%9B%BE/2.jpg', title: '纯子 clothed 2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E4%B8%BB%E5%9B%BE/3.jpg', title: '纯子 clothed 3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E4%B8%BB%E5%9B%BE/4.jpg', title: '纯子 clothed 4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E4%B8%BB%E5%9B%BE/5.jpg', title: '纯子 clothed 5.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E4%B8%BB%E5%9B%BE/6.jpg', title: '纯子 clothed 6.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC00056.jpg', title: '纯子 photo DSC00056.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC00114.jpg', title: '纯子 photo DSC00114.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC00161.jpg', title: '纯子 photo DSC00161.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC09973.jpg', title: '纯子 photo DSC09973.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC09981.jpg', title: '纯子 photo DSC09981.jpg' },
      ],
      videos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E8%A7%86%E9%A2%91/202211131735(1)~1.mp4', title: '纯子 video 202211131735(1)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E8%A7%86%E9%A2%91/202211131735(2)~1.mp4', title: '纯子 video 202211131735(2)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E8%A7%86%E9%A2%91/202211131735(3)~1.mp4', title: '纯子 video 202211131735(3)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E8%A7%86%E9%A2%91/202211131735(4)~1.mp4', title: '纯子 video 202211131735(4)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E8%A7%86%E9%A2%91/202211131735(5)~1.mp4', title: '纯子 video 202211131735(5)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E8%A7%86%E9%A2%91/202211131735(6)~1.mp4', title: '纯子 video 202211131735(6)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E8%A7%86%E9%A2%91/202211131735~1.mp4', title: '纯子 video 202211131735~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E7%BA%AF%E5%AD%90(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Chunzi/%E4%B8%BB%E5%9B%BE/1.jpg' },
      ],
    },
  },
  {
    id: 'ailing',
    name: '艾凌',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg', title: '艾凌 clothed 未标题-1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-2.jpg', title: '艾凌 clothed 未标题-2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-3.jpg', title: '艾凌 clothed 未标题-3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-4.jpg', title: '艾凌 clothed 未标题-4.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC05642.jpg', title: '艾凌 photo DSC05642.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC05966.jpg', title: '艾凌 photo DSC05966.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC06014.jpg', title: '艾凌 photo DSC06014.jpg' },
      ],
      videos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E8%A7%86%E9%A2%91/202209140953(1).mp4', title: '艾凌 video 202209140953(1).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E8%A7%86%E9%A2%91/202209140953(10).mp4', title: '艾凌 video 202209140953(10).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E8%A7%86%E9%A2%91/202209140953(2).mp4', title: '艾凌 video 202209140953(2).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E8%A7%86%E9%A2%91/202209140953(3).mp4', title: '艾凌 video 202209140953(3).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E8%A7%86%E9%A2%91/202209140953(4).mp4', title: '艾凌 video 202209140953(4).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E8%A7%86%E9%A2%91/202209140953(5).mp4', title: '艾凌 video 202209140953(5).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E8%A7%86%E9%A2%91/202209140953(6).mp4', title: '艾凌 video 202209140953(6).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E8%A7%86%E9%A2%91/202209140953(7).mp4', title: '艾凌 video 202209140953(7).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E8%A7%86%E9%A2%91/202209140953(8).mp4', title: '艾凌 video 202209140953(8).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E8%A7%86%E9%A2%91/202209140953(9).mp4', title: '艾凌 video 202209140953(9).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E8%A7%86%E9%A2%91/202209140953.mp4', title: '艾凌 video 202209140953.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%89%BE%E5%87%8C(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E7%8B%AC%E5%AE%B6)-Ailing/%E4%B8%BB%E5%9B%BE/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg' },
      ],
    },
  },
  {
    id: 'beier',
    name: '贝儿',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/1.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/1.jpg', title: '贝儿 clothed 1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/2.jpg', title: '贝儿 clothed 2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/3.jpg', title: '贝儿 clothed 3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/4.jpg', title: '贝儿 clothed 4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/5.jpg', title: '贝儿 clothed 5.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/6.jpg', title: '贝儿 clothed 6.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC00283.jpg', title: '贝儿 photo DSC00283.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC00375.jpg', title: '贝儿 photo DSC00375.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC00474.jpg', title: '贝儿 photo DSC00474.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC00501.jpg', title: '贝儿 photo DSC00501.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC00630.jpg', title: '贝儿 photo DSC00630.jpg' },
      ],
      videos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E8%A7%86%E9%A2%91/202211091313(1)~1.mp4', title: '贝儿 video 202211091313(1)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E8%A7%86%E9%A2%91/202211091313(10)~1.mp4', title: '贝儿 video 202211091313(10)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E8%A7%86%E9%A2%91/202211091313(11)~1.mp4', title: '贝儿 video 202211091313(11)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E8%A7%86%E9%A2%91/202211091313(2)~1.mp4', title: '贝儿 video 202211091313(2)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E8%A7%86%E9%A2%91/202211091313(3)~1.mp4', title: '贝儿 video 202211091313(3)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E8%A7%86%E9%A2%91/202211091313(4)~1.mp4', title: '贝儿 video 202211091313(4)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E8%A7%86%E9%A2%91/202211091313(5)~1.mp4', title: '贝儿 video 202211091313(5)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E8%A7%86%E9%A2%91/202211091313(6)~1.mp4', title: '贝儿 video 202211091313(6)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E8%A7%86%E9%A2%91/202211091313(7)~1.mp4', title: '贝儿 video 202211091313(7)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E8%A7%86%E9%A2%91/202211091313(8)~1.mp4', title: '贝儿 video 202211091313(8)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E8%A7%86%E9%A2%91/202211091313(9)~1.mp4', title: '贝儿 video 202211091313(9)~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E8%A7%86%E9%A2%91/202211091313~1.mp4', title: '贝儿 video 202211091313~1.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E5%84%BF(%E5%85%A8%E7%BD%91%E7%8B%AC%E5%AE%B6)%20-Beier/%E4%B8%BB%E5%9B%BE/1.jpg' },
      ],
    },
  },
  {
    id: 'beila',
    name: '贝拉',
    image: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/1.jpg',
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    realLifeMedia: {
      clothedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/1.jpg', title: '贝拉 clothed 1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/2.jpg', title: '贝拉 clothed 2.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/3.jpg', title: '贝拉 clothed 3.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/4.jpg', title: '贝拉 clothed 4.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/5.jpg', title: '贝拉 clothed 5.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/6.jpg', title: '贝拉 clothed 6.jpg' },
      ],
      nakedPhotos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC04951.jpg', title: '贝拉 photo DSC04951.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC05140.jpg', title: '贝拉 photo DSC05140.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC05210.jpg', title: '贝拉 photo DSC05210.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC05285.jpg', title: '贝拉 photo DSC05285.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%81%8A%E5%A4%A9%E5%9B%BE/DSC05311.jpg', title: '贝拉 photo DSC05311.jpg' },
      ],
      videos: [
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%A7%86%E9%A2%91/202209071123(1).mp4', title: '贝拉 video 202209071123(1).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%A7%86%E9%A2%91/202209071123(2).mp4', title: '贝拉 video 202209071123(2).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%A7%86%E9%A2%91/202209071123(3).mp4', title: '贝拉 video 202209071123(3).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%A7%86%E9%A2%91/202209071123(4).mp4', title: '贝拉 video 202209071123(4).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%A7%86%E9%A2%91/202209071123(5).mp4', title: '贝拉 video 202209071123(5).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%A7%86%E9%A2%91/202209071123(6).mp4', title: '贝拉 video 202209071123(6).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%A7%86%E9%A2%91/202209071123(7).mp4', title: '贝拉 video 202209071123(7).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%A7%86%E9%A2%91/202209071123(8).mp4', title: '贝拉 video 202209071123(8).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%A7%86%E9%A2%91/202209071123.mp4', title: '贝拉 video 202209071123.mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%A7%86%E9%A2%91/202209071216(1).mp4', title: '贝拉 video 202209071216(1).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%A7%86%E9%A2%91/202209071216(2).mp4', title: '贝拉 video 202209071216(2).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%A7%86%E9%A2%91/202209071216(3).mp4', title: '贝拉 video 202209071216(3).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%A7%86%E9%A2%91/202209071216(4).mp4', title: '贝拉 video 202209071216(4).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%A7%86%E9%A2%91/202209071216(5).mp4', title: '贝拉 video 202209071216(5).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/1.jpg' },
        { src: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E8%A7%86%E9%A2%91/202209071216(6).mp4', title: '贝拉 video 202209071216(6).mp4', poster: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/%E8%B4%9D%E6%8B%89(%E5%A4%A9%E7%8C%AB%E6%B7%98%E5%AE%9D%E4%BA%AC%E4%B8%9C%E7%8B%AC%E5%AE%B6)-Beila/%E4%B8%BB%E5%9B%BE/1.jpg' },
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

export const homepageValueProducts = products.filter(
  (product) => product.tier === 'best-value' && product.featured,
);
