const TRADE_ME_BASE_SEARCH_URL = 'https://www.trademe.co.nz/a/marketplace/search';
const TRADE_ME_R18_ADULT_SEARCH_URL =
  'https://www.trademe.co.nz/a/marketplace/home-living/lifestyle/r-18-adult/search';

export const TRADE_ME_SELLER_NAME = 'silvertrust';

interface TradeMeSearchParams {
  sku: string;
  productName?: string;
  sellerName?: string;
}

export function buildTradeMeSearchUrl({
  sku,
  productName,
  sellerName = TRADE_ME_SELLER_NAME,
}: TradeMeSearchParams) {
  const searchTerms = [sellerName, productName, `SKU ${sku}`].filter(Boolean).join(' ');
  const params = new URLSearchParams({ search_string: searchTerms });

  return `${TRADE_ME_BASE_SEARCH_URL}?${params.toString()}`;
}

export function buildTradeMeR18AdultSearchUrl(searchCode: string) {
  const params = new URLSearchParams({ search_string: searchCode });

  return `${TRADE_ME_R18_ADULT_SEARCH_URL}?${params.toString()}`;
}
