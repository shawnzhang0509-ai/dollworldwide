
export interface TradeMeSoldListing {
  id: string;
  reference: string;
  product: string;
  timeLabel: string;
  fulfillment?: string;
  thumbnail: string;
}

/** Trade Me app “Sold” tab — amounts hidden; matches seller account overview */
export const trademeSoldListSummary: TradeMeSoldListing[] = [
  {
    id: 'sold-p246773433',
    reference: 'P246773433',
    product: '148cm Lifesize Flexible Female Seamless TPE Body Doll — premium',
    timeLabel: 'Recent sale',
    fulfillment: 'NZ stock · Shipped',
    thumbnail: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD08/Clothed%20Photos/DWWD08%20-%20Freya%20-%20Yingying-2.jpg',
  },
  {
    id: 'sold-p246772405',
    reference: 'P246772405',
    product: 'Sofia Realistic Sex Doll — NZ current stock',
    timeLabel: 'Dec 2025',
    fulfillment: 'Buyer to pick-up',
    thumbnail: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD09/Clothed%20Photos/DWWD09%20-%20Tara%20-%20Yingying-2.jpg',
  },
  {
    id: 'sold-p246682140',
    reference: 'P246682140',
    product: '148cm Lifesize Flexible Female Seamless TPE Body Doll — premium',
    timeLabel: '22 Dec',
    fulfillment: 'Buyer to pick-up',
    thumbnail: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD10/Clothed%20Photos/DWWD10%20-%20Kira%20-%20Yingying-2.jpg',
  },
  {
    id: 'sold-p245937648',
    reference: 'P245937648',
    product: '148cm Lifesize Flexible Female Seamless TPE Body Doll V37',
    timeLabel: '17 Nov',
    fulfillment: 'Buyer to pick-up',
    thumbnail: 'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD08/Clothed%20Photos/DWWD08%20-%20Freya%20-%20Yingying-3.jpg',
  },
];

export interface TradeMeSaleProof {
  id: string;
  reference: string;
  product: string;
  soldLabel: string;
  paymentMethod?: string;
}

/** Real Trade Me sale confirmations — prices and buyer PII intentionally omitted */
export const trademeSaleProofs: TradeMeSaleProof[] = [
  {
    id: 'p248739844',
    reference: 'P248739844',
    product: 'Hana Realistic Sex Doll — Silicone planted hair head / NZ current stock',
    soldLabel: 'Apr 2026',
    paymentMethod: 'Trade Me Pay Now',
  },
  {
    id: 'p246772405',
    reference: 'P246772405',
    product: 'Sofia Realistic Sex Doll — NZ current stock',
    soldLabel: 'Dec 2025',
    paymentMethod: 'Afterpay',
  },
  {
    id: 'p245937648',
    reference: 'P245937648',
    product: '148cm Lifesize Flexible Female Seamless TPE Body Doll V37',
    soldLabel: 'Late 2025',
    paymentMethod: 'Trade Me Pay Now',
  },
  {
    id: 'p243242121',
    reference: 'P243242121',
    product: '158cm Lifesize Flexible Female Seamless TPE Body Doll V43',
    soldLabel: 'Jul 2025',
    paymentMethod: 'Trade Me Pay Now',
  },
  {
    id: 'p242571091',
    reference: 'P242571091',
    product: '158cm Lifesize Flexible Female Seamless TPE Body Doll V43',
    soldLabel: 'May 2025',
    paymentMethod: 'Trade Me Pay Now',
  },
];
