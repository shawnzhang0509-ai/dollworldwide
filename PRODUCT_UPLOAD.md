# Product upload guide

Products are managed in `src/data/products.ts`.

## Add product images or videos

Put files under `public/media/<product-id>/`.

Example:

```txt
public/media/aria/main.jpg
public/media/aria/naked/photos/1.webp
public/media/aria/naked/videos/1.mp4
public/media/aria/clothed/photos/1.webp
public/media/aria/clothed/videos/1.mp4
public/media/aria/head/photos/1.webp
public/media/aria/head/videos/1.mp4
```

Files in `public` are available on the website with paths like:

```txt
/media/aria/main.jpg
/media/aria/naked/photos/1.webp
/media/aria/naked/videos/1.mp4
```

## Add a product

Add one object to the `products` array in `src/data/products.ts`:

```ts
{
  id: 'aria',
  name: 'Aria',
  image: '/media/aria/main.jpg',
  price: '$999',
  tag: 'BEST SELLER',
  specs: '165cm · D-Cup · Silicone Head · TPE Body',
  tier: 'best-value',
  featured: true,
  tradeMeSku: '01',
  tradeMeSearchCode: 'DWWD01',
  realLifeMedia: {
    nakedFullBody: {
      photos: [
        { src: '/media/aria/naked/photos/1.webp', title: 'Naked full body photo' },
      ],
      videos: [
        { src: '/media/aria/naked/videos/1.mp4', title: 'Naked full body video', poster: '/media/aria/naked/photos/1.webp' },
      ],
    },
    clothedFullBody: {
      photos: [
        { src: '/media/aria/clothed/photos/1.webp', title: 'Clothed full body photo' },
      ],
      videos: [
        { src: '/media/aria/clothed/videos/1.mp4', title: 'Clothed full body video', poster: '/media/aria/clothed/photos/1.webp' },
      ],
    },
    head: {
      photos: [
        { src: '/media/aria/head/photos/1.webp', title: 'Head close-up photo' },
      ],
      videos: [
        { src: '/media/aria/head/videos/1.mp4', title: 'Head close-up video', poster: '/media/aria/head/photos/1.webp' },
      ],
    },
  },
}
```

Each `See me in real life` view has two tabs in the popup:

- `photos`: compressed WebP/JPG images.
- `videos`: MP4/video URLs with optional poster images.

## Product tiers

- `best-value`: the $999 silicone-head + TPE-body range.
- `flagship`: premium models such as full-silicone special editions.

Set `featured: true` for products that should appear on the homepage. All products appear on `/models`.

## Video hosting recommendation

For SEO and buyer trust, avoid Google Drive links on the live site. Use direct video URLs that can play inside the website:

- local files under `public/media` for small files,
- Vercel Blob,
- Cloudflare R2,
- Bunny CDN/Stream.

The buyer should stay on the website when opening `See me in real life`.
