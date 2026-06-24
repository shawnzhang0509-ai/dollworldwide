import { useEffect, useRef, useState, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { PrimaryButton } from '@/components/PrimaryButton';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  flagshipProducts,
  getProductPreviewPair,
  homepageValueProducts,
  realLifeMediaCategories,
  type Product,
  type RealLifeMediaCategory,
  type VideoAsset,
  type PhotoAsset,
} from '@/data/products';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { buildTradeMeR18AdultSearchUrl } from '@/lib/trademe';

gsap.registerPlugin(ScrollTrigger);

const CONTACT_EMAIL = 'dollworldwide2023@gmail.com';

interface SelectedRealLifeMedia {
  product: Product;
  category: RealLifeMediaCategory;
}

function buildRealLifeRequestUrl(productName: string, categoryLabel: string) {
  const subject = `${categoryLabel} for ${productName}`;
  const body = `Hi Doll Worldwide,\n\nPlease send me the real-life media for ${productName}: ${categoryLabel}.\n\nThanks.`;

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildTradeMeRequestUrl(productName: string) {
  const subject = `Trade Me link for ${productName}`;
  const body = `Hi Doll Worldwide,\n\nPlease send me the current Trade Me listing for ${productName}.\n\nThanks.`;

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

interface ProductCardImageProps {
  product: Product;
  dualImagePreview?: boolean;
}

function ProductCardImage({ product, dualImagePreview }: ProductCardImageProps) {
  const [showSecondary, setShowSecondary] = useState(false);
  const preview = getProductPreviewPair(product);
  const hasDualPreview = Boolean(dualImagePreview && preview.secondary);

  const togglePreview = () => {
    if (!hasDualPreview) return;
    setShowSecondary((current) => !current);
  };

  return (
    <div
      className={`relative aspect-[3/4] overflow-hidden ${hasDualPreview ? 'cursor-pointer' : ''}`}
      onClick={hasDualPreview ? togglePreview : undefined}
      onKeyDown={
        hasDualPreview
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                togglePreview();
              }
            }
          : undefined
      }
      role={hasDualPreview ? 'button' : undefined}
      tabIndex={hasDualPreview ? 0 : undefined}
      aria-pressed={hasDualPreview ? showSecondary : undefined}
      aria-label={
        hasDualPreview
          ? showSecondary
            ? `Show clothed photo of ${product.name}`
            : `Show body photo of ${product.name}`
          : undefined
      }
    >
      <img
        src={preview.primary.src}
        alt={preview.primary.alt}
        className={`w-full h-full object-cover transition-all duration-500 ${
          hasDualPreview
            ? showSecondary
              ? 'opacity-0 scale-100'
              : 'opacity-100 scale-100 md:group-hover:opacity-0 md:group-hover:scale-105'
            : 'group-hover:scale-105'
        }`}
      />
      {preview.secondary && (
        <img
          src={preview.secondary.src}
          alt={preview.secondary.alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            showSecondary
              ? 'opacity-100 scale-105'
              : 'opacity-0 scale-100 md:group-hover:opacity-100 md:group-hover:scale-105'
          }`}
        />
      )}
      {hasDualPreview && (
        <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-cream-300/15 bg-noir-900/75 px-3 py-1.5 backdrop-blur-sm">
          <span
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              showSecondary ? 'bg-cream-300/40' : 'bg-gold'
            }`}
          />
          <span
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              showSecondary ? 'bg-gold' : 'bg-cream-300/40'
            }`}
          />
          <span className="ml-0.5 font-body text-[10px] text-cream-200 md:hidden">Tap to switch</span>
          <span className="ml-0.5 hidden font-body text-[10px] text-cream-200 md:inline">Hover to switch</span>
        </div>
      )}
    </div>
  );
}

interface ProductCardContentProps {
  product: Product;
  tradeMeUrl?: string;
  realLifeOpen: boolean;
  dualImagePreview?: boolean;
  onToggleRealLife: () => void;
  onSelectRealLife: (category: RealLifeMediaCategory) => void;
}

function ProductCardContent({
  product,
  tradeMeUrl,
  realLifeOpen,
  dualImagePreview,
  onToggleRealLife,
  onSelectRealLife,
}: ProductCardContentProps) {
  const isFlagship = product.tier === 'flagship';

  return (
    <>
      <div className="relative">
        <ProductCardImage product={product} dualImagePreview={dualImagePreview} />
        <div className="pointer-events-none absolute top-4 left-4 z-10">
          <span className={`text-label text-xs px-3 py-1 ${
            isFlagship ? 'bg-noir-900 text-gold border border-gold' : 'bg-gold text-noir-900'
          }`}>
            {product.tag}
          </span>
        </div>
        {isFlagship && (
          <div className="pointer-events-none absolute right-[-46px] top-7 z-10 rotate-45 bg-gold px-12 py-2 text-center shadow-lg">
            <span className="text-label text-[10px] text-noir-900">PREMIUM</span>
          </div>
        )}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background: isFlagship
              ? 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.35) 42%, rgba(212,175,55,0.16) 100%)'
              : 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 40%)',
          }}
        />
      </div>
      <div className={`p-6 ${isFlagship ? 'bg-[linear-gradient(135deg,rgba(31,24,9,0.98),rgba(10,10,10,0.98))]' : ''}`}>
        {isFlagship && (
          <p className="text-label text-gold mb-2">FULL SILICONE SPECIAL EDITION</p>
        )}
        <h3 className="font-display text-display-h4 text-cream-100 mb-1">{product.name}</h3>
        {product.tradeMeSearchCode && (
          <p className="font-body text-xs text-gold mb-2">
            Trade Me SKU: <span className="font-medium tracking-wide">{product.tradeMeSearchCode}</span>
          </p>
        )}
        <p className="font-body text-sm text-cream-300 mb-3">{product.specs}</p>
        <div className="flex items-center justify-between">
          <span className={`font-display text-gold ${isFlagship ? 'text-4xl' : 'text-3xl'}`}>{product.price}</span>
          <span className="font-body text-xs text-cream-300">{isFlagship ? 'NZD · Flagship' : 'NZD'}</span>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-3">
          <a
            href={tradeMeUrl ?? buildTradeMeRequestUrl(product.name)}
            target={tradeMeUrl ? '_blank' : undefined}
            rel={tradeMeUrl ? 'noopener noreferrer' : undefined}
            className={`inline-flex w-full flex-col items-center justify-center gap-1 px-5 py-3.5 text-center transition-all duration-300 ${
              isFlagship
                ? 'bg-gold text-noir-900 shadow-[0_0_24px_rgba(212,175,55,0.22)] hover:bg-gold-light'
                : 'bg-gold text-noir-900 hover:bg-gold-light'
            }`}
          >
            <span className="text-button leading-snug">Buy from Trade Me (100% good review)</span>
            <span className="font-body text-[10px] font-normal normal-case tracking-normal text-noir-900/80">
              Better protection for you
            </span>
          </a>
          <button
            type="button"
            onClick={onToggleRealLife}
            aria-expanded={realLifeOpen}
            className={`inline-flex w-full items-center justify-center border px-5 py-3 text-button transition-all duration-300 ${
              isFlagship
                ? 'border-gold bg-gold/10 text-gold hover:bg-gold hover:text-noir-900'
                : 'border-gold text-gold hover:bg-gold hover:text-noir-900'
            }`}
          >
            See me in real life
          </button>
        </div>
        {realLifeOpen && (
          <div className={`mt-4 border p-3 ${isFlagship ? 'border-gold/50 bg-noir-900/80' : 'border-gold/30 bg-noir-900/60'}`}>
            <p className="font-body text-xs text-cream-300 mb-3">
              Choose what you want to see inside the site:
            </p>
            <div className="grid gap-2">
              {realLifeMediaCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => onSelectRealLife(category)}
                  className="flex items-center justify-between border border-cream-300/15 px-4 py-2.5 font-body text-sm text-cream-100 transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  <span>{category.label}</span>
                  <span className="text-gold">→</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function PhotoLightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-noir-900/95 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged photo"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full border border-cream-300/20 p-2 text-cream-100 transition-colors hover:border-gold hover:text-gold"
        aria-label="Close enlarged photo"
      >
        <X className="h-5 w-5" />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[92vh] max-w-[96vw] object-contain"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}

function RealLifeMediaDialog({
  selected,
  onClose,
}: {
  selected: SelectedRealLifeMedia | null;
  onClose: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxPhoto, setLightboxPhoto] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!selected) {
      setLightboxPhoto(null);
    }
  }, [selected]);

  const storedMedia = selected?.product.realLifeMedia?.[selected.category.id] ?? [];
  const media =
    selected?.category.id === 'clothedPhotos' && storedMedia.length === 0
      ? [{ src: selected.product.image, alt: `${selected.product.name} photo` }]
      : storedMedia;
  const isVideoCategory = selected?.category.mediaType === 'videos';
  const hasMultipleItems = media.length > 1;

  const scrollGallery = (direction: -1 | 1) => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction * Math.max(container.clientWidth * 0.82, 280),
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Dialog open={Boolean(selected)} onOpenChange={(open) => { if (!open) onClose(); }}>
        <DialogContent className="top-[max(0.5rem,2.5dvh)] max-h-[min(94dvh,920px)] translate-y-0 border-gold/30 bg-noir-900 text-cream-100 sm:max-w-4xl flex flex-col gap-2 overflow-hidden p-0 sm:p-6">
          {selected && (
            <>
              <DialogHeader className="shrink-0 space-y-0 px-6 pb-1 pt-6 pr-14 text-left sm:px-0 sm:pb-0 sm:pt-0 sm:pr-10">
                <DialogTitle className="font-display text-2xl text-cream-100">
                  {selected.product.name} — {selected.category.label}
                </DialogTitle>
              </DialogHeader>

              {media.length > 0 ? (
                <div className="relative min-h-0 flex-1 px-6 pb-6 sm:px-0 sm:pb-2">
                  {hasMultipleItems && !isVideoCategory && (
                    <>
                      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-noir-900 to-transparent sm:left-0" />
                      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-noir-900 to-transparent" />
                      <button
                        type="button"
                        onClick={() => scrollGallery(-1)}
                        className="absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-cream-300/20 bg-noir-900/85 p-2 text-cream-100 transition-colors hover:border-gold hover:text-gold sm:inline-flex"
                        aria-label="Previous photo"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => scrollGallery(1)}
                        className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-cream-300/20 bg-noir-900/85 p-2 text-cream-100 transition-colors hover:border-gold hover:text-gold sm:inline-flex"
                        aria-label="Next photo"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}

                  <div
                    ref={scrollRef}
                    className="h-full overflow-x-auto overflow-y-hidden overscroll-x-contain [-webkit-overflow-scrolling:touch]"
                    tabIndex={0}
                    aria-label={`${selected.category.label} gallery`}
                  >
                    <div className="flex w-max flex-row gap-3 snap-x snap-mandatory scroll-smooth pb-1">
                      {isVideoCategory
                        ? (media as VideoAsset[]).map((item) => (
                            <div
                              key={item.src}
                              className="snap-center shrink-0 w-[min(92vw,640px)] max-w-[min(92vw,640px)] overflow-hidden rounded-md border border-cream-300/10 bg-noir-700"
                            >
                              <video
                                src={item.src}
                                poster={item.poster}
                                controls
                                playsInline
                                preload="metadata"
                                className="mx-auto h-[min(68vh,640px)] w-full object-contain"
                              />
                            </div>
                          ))
                        : (media as PhotoAsset[]).map((item, index) => {
                            const alt = item.alt ?? `${selected.product.name} photo ${index + 1}`;

                            return (
                              <button
                                key={item.src}
                                type="button"
                                onClick={() => setLightboxPhoto({ src: item.src, alt })}
                                className="group relative snap-center shrink-0 w-[min(92vw,640px)] max-w-[min(92vw,640px)] overflow-hidden rounded-md border border-cream-300/10 bg-noir-700 text-left transition-colors hover:border-gold/40"
                                aria-label={`View photo ${index + 1} full size`}
                              >
                                <img
                                  src={item.src}
                                  alt={alt}
                                  className="h-[min(68vh,640px)] w-full object-contain"
                                  loading="lazy"
                                />
                                <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full border border-cream-300/15 bg-noir-900/80 px-2.5 py-1 font-body text-[11px] text-cream-200 opacity-80 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                                  <ZoomIn className="h-3.5 w-3.5" />
                                  Tap to enlarge
                                </span>
                              </button>
                            );
                          })}
                    </div>
                  </div>
                </div>
              ) : (
              <div className="mx-6 mb-6 border border-gold/20 bg-noir-700 p-6 text-center sm:mx-0 sm:mb-0">
                <p className="font-display text-xl text-gold mb-3">{selected.category.label} opens here.</p>
                <p className="font-body text-sm text-cream-300 mb-5">
                  Add files for this product and this popup will show them inside the website, without sending buyers to Google Drive or another app.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <a
                    href={buildRealLifeRequestUrl(selected.product.name, selected.category.label)}
                    className="inline-flex items-center justify-center bg-gold px-5 py-3 text-button text-noir-900 transition-colors hover:bg-gold-light"
                  >
                    Request {selected.category.label}
                  </a>
                  <a
                    href="tel:02885146884"
                    className="inline-flex items-center justify-center border border-gold px-5 py-3 text-button text-gold transition-colors hover:bg-gold hover:text-noir-900"
                  >
                    Call 028 8514 6884
                  </a>
                </div>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>

      {lightboxPhoto && (
        <PhotoLightbox
          src={lightboxPhoto.src}
          alt={lightboxPhoto.alt}
          onClose={() => setLightboxPhoto(null)}
        />
      )}
    </>
  );
}

interface ProductGridProps {
  products: Product[];
  gridRef?: RefObject<HTMLDivElement | null>;
  className?: string;
  dualImagePreview?: boolean;
}

export function ProductGrid({
  products,
  gridRef,
  className = 'grid grid-cols-1 md:grid-cols-3 gap-6',
  dualImagePreview = false,
}: ProductGridProps) {
  const [openRealLifeProduct, setOpenRealLifeProduct] = useState<string | null>(null);
  const [selectedRealLifeMedia, setSelectedRealLifeMedia] = useState<SelectedRealLifeMedia | null>(null);

  return (
    <>
      <div ref={gridRef} className={className} style={{ perspective: '1200px' }}>
        {products.map((product) => {
          const tradeMeUrl = product.tradeMeSearchCode
            ? buildTradeMeR18AdultSearchUrl(product.tradeMeSearchCode)
            : undefined;
          const realLifeOpen = openRealLifeProduct === product.id;
          const isFlagship = product.tier === 'flagship';

          return (
            <div
              key={product.id}
              className={`product-card relative overflow-hidden group will-change-transform ${
                isFlagship
                  ? 'border border-gold/70 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.22),rgba(24,18,8,0.98)_38%,rgba(10,10,10,1)_100%)] shadow-[0_24px_80px_rgba(212,175,55,0.16)]'
                  : 'bg-noir-600'
              }`}
            >
              {isFlagship && (
                <div className="pointer-events-none absolute inset-0 z-10 border border-gold/30" />
              )}
              <ProductCardContent
                product={product}
                tradeMeUrl={tradeMeUrl}
                realLifeOpen={realLifeOpen}
                dualImagePreview={dualImagePreview}
                onToggleRealLife={() => setOpenRealLifeProduct(realLifeOpen ? null : product.id)}
                onSelectRealLife={(category) => setSelectedRealLifeMedia({ product, category })}
              />
            </div>
          );
        })}
      </div>
      <RealLifeMediaDialog
        selected={selectedRealLifeMedia}
        onClose={() => setSelectedRealLifeMedia(null)}
      />
    </>
  );
}

export function ProductSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current || reduced) return;
    const header = headerRef.current;
    const cards = cardsRef.current.querySelectorAll('.product-card');
    const images = cardsRef.current.querySelectorAll('.product-card img');

    gsap.set(header, { opacity: 0, y: 36 });
    gsap.set(cards, {
      opacity: 0,
      y: 110,
      scale: 0.88,
      rotateX: 14,
      filter: 'blur(12px)',
      transformOrigin: 'center bottom',
    });
    gsap.set(images, { scale: 1.12 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 76%',
        toggleActions: 'play none none none',
      },
    });

    tl.to(header, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: 'power3.out',
    })
      .to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: 'blur(0px)',
        duration: 1.15,
        stagger: 0.18,
        ease: 'expo.out',
      }, '-=0.25')
      .to(images, {
        scale: 1,
        duration: 1.25,
        stagger: 0.18,
        ease: 'power3.out',
      }, '<');
  }, [reduced]);

  return (
    <section id="product" ref={sectionRef} className="relative bg-noir-700 py-[110px] md:py-[120px] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[280px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_68%)] pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-label text-gold block mb-4">FEATURED AUCKLAND STOCK</span>
          <div className="w-[60px] h-[1px] bg-gold mx-auto mb-6" />
          <h2 className="text-display-h2 text-cream-100 mb-4">$999 Models Ready to View or Ship.</h2>
          <p className="text-body-large text-cream-200 max-w-2xl mx-auto">
            Browse selected silicone-head + TPE-body models from current stock. Each card can link to the matching Trade Me listing or search code, so renewed listings can still be found when the title marker stays the same.
          </p>
        </div>

        {flagshipProducts.length > 0 && (
          <div className="mb-12 rounded-none border border-gold/25 bg-[linear-gradient(135deg,rgba(212,175,55,0.08),rgba(10,10,10,0)_42%)] p-4 md:p-6">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <span className="text-label text-gold block mb-2">FLAGSHIP MODEL</span>
                <h3 className="font-display text-display-h3 text-cream-100">Premium full-silicone option</h3>
              </div>
              <span className="hidden sm:block border border-gold/40 px-4 py-2 text-label text-gold">Not part of the $999 range</span>
            </div>
            <ProductGrid
              products={flagshipProducts}
              className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.72fr)] gap-6"
            />
          </div>
        )}

        <ProductGrid
          products={homepageValueProducts}
          gridRef={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        />

        <div className="text-center mt-14">
          <p className="font-body text-sm text-cream-300 mb-6 max-w-xl mx-auto">
            More models and real media are available on request. Call to see the latest photos, videos, and full catalogue.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="/models"
              className={`inline-flex min-w-[min(100%,320px)] items-center justify-center px-12 py-4 bg-gold text-noir-900 font-semibold text-sm tracking-[0.12em] uppercase focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-noir-700 ${
                reduced ? 'hover:bg-gold-light transition-colors duration-300' : 'animate-cta-flash'
              }`}
            >
              View All Models
            </a>
            <PrimaryButton href="tel:02885146884">Call to See Current Stock</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
