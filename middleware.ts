import { resolveWooProductDestination } from './src/lib/wooRedirects';

const WOO_PATH_PREFIXES = [
  '/product/',
  '/product_faq_post/',
  '/product-category/',
  '/product-tag/',
  '/wc-api/',
] as const;

function shouldHandle(pathname: string) {
  return WOO_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const { pathname } = url;

  if (!shouldHandle(pathname)) {
    return;
  }

  if (pathname.startsWith('/wc-api/')) {
    return new Response('Not Found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  if (pathname.startsWith('/product_faq_post/')) {
    return Response.redirect(new URL('/faq', url), 301);
  }

  if (pathname.startsWith('/product-category/') || pathname.startsWith('/product-tag/')) {
    return Response.redirect(new URL('/', url), 301);
  }

  if (pathname.startsWith('/product/')) {
    const wooSlug = pathname.slice('/product/'.length);
    const destination = resolveWooProductDestination(wooSlug);
    return Response.redirect(new URL(destination, url), 301);
  }

  return;
}

export const config = {
  matcher: [
    '/product/:path*',
    '/product_faq_post/:path*',
    '/product-category/:path*',
    '/product-tag/:path*',
    '/wc-api/:path*',
  ],
};
