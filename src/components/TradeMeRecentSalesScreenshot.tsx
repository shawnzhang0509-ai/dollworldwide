/**
 * Real Trade Me app Sold-tab screenshot.
 * Prices are covered with positioned masks (see PRICE_MASKS) — no amounts shown on site.
 */
const SCREENSHOT_SRC = '/images/trademe-recent-sales.jpg';

/** Right-side price rows on a typical iPhone Trade Me Sold list (4 listings). */
const PRICE_MASKS = [
  { top: '26.8%', left: '56%', width: '40%', height: '4.2%' },
  { top: '41.5%', left: '56%', width: '40%', height: '4.2%' },
  { top: '56.2%', left: '56%', width: '40%', height: '4.2%' },
  { top: '70.8%', left: '56%', width: '40%', height: '4.2%' },
] as const;

export function TradeMeRecentSalesScreenshot() {
  return (
    <div className="mx-auto mb-12 max-w-[min(100%,360px)] overflow-hidden border border-noir-500 bg-[#0d0d0d] shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
      <div className="border-b border-noir-500 bg-[#141414] px-5 py-4 text-center">
        <h3 className="font-body text-sm font-semibold uppercase tracking-[0.14em] text-gold">
          Recent Trade Me sales
        </h3>
      </div>

      <div className="relative bg-[#1a1a1c]">
        <img
          src={SCREENSHOT_SRC}
          alt="Recent Trade Me sold listings from Doll Worldwide seller account"
          className="block w-full h-auto"
          loading="lazy"
        />
        {PRICE_MASKS.map((mask, index) => (
          <div
            key={index}
            className="pointer-events-none absolute rounded-[2px] bg-[#1a1a1c]"
            style={{
              top: mask.top,
              left: mask.left,
              width: mask.width,
              height: mask.height,
            }}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
}
