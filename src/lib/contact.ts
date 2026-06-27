export const CONTACT_PHONE_DISPLAY = '028 8514 6884';
export const CONTACT_PHONE_SMS = '+642885146884';

export const SMS_TEMPLATES = {
  general:
    "Hi Doll Worldwide, I'd like to enquire about your dolls. What do you currently have in NZ ready stock? Thanks.",
  stock:
    "Hi Doll Worldwide, I'd like to enquire about your current NZ ready stock. Could you let me know what's available? Thanks.",
  product: (productName: string) =>
    `Hi Doll Worldwide, I'd like to enquire about ${productName}. Could you share availability, photos, and delivery options? Thanks.`,
  floating: (productName: string) =>
    `Hi, I'm interested in ${productName}. Is it in stock?`,
  realPhotos: (productName: string) =>
    `Hi, I'm interested in ${productName}. Could you send real photos? Thanks.`,
  stockCheck: (sku: string) => `Stock check for ${sku}`,
  doll30Promo: 'DOLL30',
  realLifeMedia: (productName: string, categoryLabel: string) =>
    `Hi Doll Worldwide, please send me the real-life media for ${productName}: ${categoryLabel}. Thanks.`,
  tradeMeLink: (productName: string) =>
    `Hi Doll Worldwide, please send me the current Trade Me listing for ${productName}. Thanks.`,
} as const;

export function buildSmsUrl(body: string, phone = CONTACT_PHONE_SMS) {
  return `sms:${phone}?body=${encodeURIComponent(body)}`;
}

export function buildGeneralInquirySmsUrl() {
  return buildSmsUrl(SMS_TEMPLATES.general);
}

export function buildStockInquirySmsUrl() {
  return buildSmsUrl(SMS_TEMPLATES.stock);
}

export function buildProductInquirySmsUrl(productName: string) {
  return buildSmsUrl(SMS_TEMPLATES.product(productName));
}

export function buildFloatingSmsUrl(productName?: string | null) {
  const name = productName?.trim() || 'your dolls';
  return buildSmsUrl(SMS_TEMPLATES.floating(name));
}

export function buildProductPhotosSmsUrl(productName: string) {
  return buildSmsUrl(SMS_TEMPLATES.realPhotos(productName));
}

export function buildProductStockCheckSmsUrl(sku: string) {
  return buildSmsUrl(SMS_TEMPLATES.stockCheck(sku));
}

export function buildDoll30PromoSmsUrl() {
  return buildSmsUrl(SMS_TEMPLATES.doll30Promo);
}

export function buildRealLifeMediaSmsUrl(productName: string, categoryLabel: string) {
  return buildSmsUrl(SMS_TEMPLATES.realLifeMedia(productName, categoryLabel));
}

export function buildTradeMeLinkSmsUrl(productName: string) {
  return buildSmsUrl(SMS_TEMPLATES.tradeMeLink(productName));
}
