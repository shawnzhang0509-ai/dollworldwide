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
