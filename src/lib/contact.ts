export const CONTACT_PHONE_DISPLAY = '028 8514 6884';
export const CONTACT_PHONE_SMS = '+642885146884';

export const SMS_TEMPLATES = {
  general:
    "Hi Doll Worldwide, I'd like to enquire about your dolls. What do you currently have in NZ ready stock? Thanks.",
  stock:
    "Hi Doll Worldwide, I'd like to enquire about your current NZ ready stock. Could you let me know what's available? Thanks.",
  product: (productName: string) =>
    `Hi Doll Worldwide, I'd like to enquire about ${productName}. Could you share availability, photos, and delivery options? Thanks.`,
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
