/**
 * Scan a Cloudflare R2 bucket (S3-compatible), group media by product prefix,
 * map 主图 / 聊天图 / 视频 (and common aliases) to realLifeMedia JSON for PRODUCT_UPLOAD.md.
 *
 * Usage:
 *   R2_ACCOUNT_ID=... R2_ACCESS_KEY_ID=... R2_SECRET_ACCESS_KEY=... R2_BUCKET=dollworldwide-media \
 *   R2_PUBLIC_BASE_URL=https://pub-....r2.dev node scripts/r2-scan-media.mjs
 *
 * Optional:
 *   R2_IGNORE_PREFIXES=DWWD06/,flagship-skin-texture/   (comma-separated, default includes these)
 *   R2_SCAN_OUT=./scripts/r2-scan-output.json
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

const PHOTO_EXT = new Set(['.jpg', '.jpeg', '.webp', '.png', '.gif']);
const VIDEO_EXT = new Set(['.mp4', '.webm', '.mov']);

const CLOTHED_DIRS = new Set(['主图']);
const NAKED_DIRS = new Set(['聊天图', '聊天图没水印', '聊天图1', '聊天图2']);
const VIDEO_DIRS = new Set([
  '视频',
  '视频1',
  '视频2',
  '视频压缩',
  '聊天视频',
  '高清透视私密视频',
  '水印图片视频',
]);

const DEFAULT_IGNORE = ['DWWD06/', 'flagship-skin-texture/'];

function extOf(key) {
  const lower = key.toLowerCase();
  const dot = lower.lastIndexOf('.');
  if (dot === -1) return '';
  return lower.slice(dot);
}

function isSkippableAsset(key) {
  const ext = extOf(key);
  if (['.zip', '.rar', '.lnk', '.xlsx', '.xls', '.doc', '.docx'].includes(ext)) return true;
  return false;
}

function categorizeKey(key) {
  if (isSkippableAsset(key)) return null;
  const ext = extOf(key);
  const isPhoto = PHOTO_EXT.has(ext);
  const isVideo = VIDEO_EXT.has(ext);
  if (!isPhoto && !isVideo) return null;

  const segments = key.split('/').filter(Boolean);
  for (const seg of segments) {
    if (CLOTHED_DIRS.has(seg)) return isPhoto ? 'clothedPhotos' : null;
    if (NAKED_DIRS.has(seg)) return isPhoto ? 'nakedPhotos' : null;
    if (VIDEO_DIRS.has(seg)) return isVideo ? 'videos' : null;
  }
  return null;
}

function encodePublicUrl(base, key) {
  const u = new URL(base.endsWith('/') ? base.slice(0, -1) : base);
  const path = key
    .split('/')
    .filter(Boolean)
    .map((seg) => encodeURIComponent(seg))
    .join('/');
  return `${u.origin}/${path}`;
}

function naturalCompare(a, b) {
  return a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' });
}

function folderDisplayName(rootPrefix) {
  const name = rootPrefix.replace(/\/$/, '').split('/').pop() ?? rootPrefix;
  const m = name.match(/^([^（(]+)/);
  return (m ? m[1] : name).trim() || name;
}

function folderSlug(rootPrefix) {
  const base = rootPrefix.replace(/\/$/, '').split('/').pop() ?? rootPrefix;
  if (/--/.test(base)) {
    const tail = base.split('--').pop()?.trim();
    if (tail && /^[A-Za-z0-9_-]+$/i.test(tail)) {
      return tail.toLowerCase().replace(/\s+/g, '-');
    }
  }
  const parenDash = base.match(/\)\s*-\s*([^/]+)$/);
  if (parenDash) {
    return parenDash[1]
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  return base
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64);
}

function basename(path) {
  const parts = path.split('/');
  return parts[parts.length - 1] ?? path;
}

function titleFromKey(key) {
  const file = basename(key);
  const dot = file.lastIndexOf('.');
  return dot > 0 ? file.slice(0, dot) : file;
}

async function listAllKeys(client, bucket, prefix) {
  const keys = [];
  let ContinuationToken;
  do {
    const res = await client.send(
      new ListObjectsV2Command({
        Bucket: bucket,
        Prefix: prefix,
        ContinuationToken,
      }),
    );
    for (const obj of res.Contents ?? []) {
      if (obj.Key && !obj.Key.endsWith('/')) keys.push(obj.Key);
    }
    ContinuationToken = res.IsTruncated ? res.NextContinuationToken : undefined;
  } while (ContinuationToken);
  return keys;
}

async function listRootPrefixes(client, bucket) {
  const prefixes = [];
  let ContinuationToken;
  do {
    const res = await client.send(
      new ListObjectsV2Command({
        Bucket: bucket,
        Delimiter: '/',
        ContinuationToken,
      }),
    );
    for (const cp of res.CommonPrefixes ?? []) {
      if (cp.Prefix) prefixes.push(cp.Prefix);
    }
    ContinuationToken = res.IsTruncated ? res.NextContinuationToken : undefined;
  } while (ContinuationToken);
  return prefixes.sort(naturalCompare);
}

function parseIgnore(raw) {
  if (!raw || !raw.trim()) return [...DEFAULT_IGNORE];
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((p) => (p.endsWith('/') ? p : `${p}/`));
}

function shouldIgnore(prefix, ignoreList) {
  return ignoreList.some((ig) => prefix === ig || prefix.startsWith(ig));
}

function buildProduct(publicBase, rootPrefix, keys) {
  const groups = {
    clothedPhotos: [],
    nakedPhotos: [],
    videos: [],
  };

  for (const key of keys) {
    const cat = categorizeKey(key);
    if (!cat) continue;
    const url = encodePublicUrl(publicBase, key);
    if (cat === 'videos') {
      groups.videos.push({ src: url, title: titleFromKey(key) });
    } else {
      groups[cat].push({ src: url, title: titleFromKey(key) });
    }
  }

  for (const k of Object.keys(groups)) {
    groups[k].sort((a, b) => naturalCompare(a.src, b.src));
  }

  const hasAny = groups.clothedPhotos.length + groups.nakedPhotos.length + groups.videos.length > 0;
  if (!hasAny) return null;

  const poster =
    groups.clothedPhotos[0]?.src ??
    groups.nakedPhotos[0]?.src ??
    undefined;

  const videosWithPoster = groups.videos.map((v) =>
    poster ? { ...v, poster } : { ...v },
  );

  const firstCardImage =
    groups.clothedPhotos[0]?.src ?? groups.nakedPhotos[0]?.src ?? groups.videos[0]?.src ?? '';

  return {
    id: folderSlug(rootPrefix),
    name: folderDisplayName(rootPrefix),
    image: firstCardImage,
    price: '$999',
    tag: 'GALLERY',
    specs: 'Silicone Head · TPE Body',
    tier: 'best-value',
    featured: false,
    realLifeMedia: {
      ...(groups.clothedPhotos.length ? { clothedPhotos: groups.clothedPhotos } : {}),
      ...(groups.nakedPhotos.length ? { nakedPhotos: groups.nakedPhotos } : {}),
      ...(videosWithPoster.length ? { videos: videosWithPoster } : {}),
    },
  };
}

function readEnv() {
  const accountId = process.env.R2_ACCOUNT_ID;
  const endpoint =
    process.env.R2_ENDPOINT ||
    (accountId ? `https://${accountId}.r2.cloudflarestorage.com` : '');
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
  const bucket = process.env.R2_BUCKET;
  const publicBase = process.env.R2_PUBLIC_BASE_URL;
  if (!endpoint || !accessKeyId || !secretAccessKey || !bucket || !publicBase) {
    console.error(
      'Missing env. Required: R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET, R2_PUBLIC_BASE_URL, and R2_ACCOUNT_ID (or R2_ENDPOINT).',
    );
    process.exit(1);
  }
  return { endpoint, accessKeyId, secretAccessKey, bucket, publicBase };
}

function printHelp() {
  console.log(`R2 media scanner → PRODUCT_UPLOAD-style JSON

Required env:
  R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET, R2_PUBLIC_BASE_URL
  R2_ACCOUNT_ID   (or set R2_ENDPOINT to your S3 API URL)

Optional:
  R2_IGNORE_PREFIXES   comma-separated prefixes, default: ${DEFAULT_IGNORE.join(',')}
  R2_SCAN_OUT          output file path (default: scripts/r2-scan-output.json)

Example:
  R2_ACCOUNT_ID=xxx R2_ACCESS_KEY_ID=xxx R2_SECRET_ACCESS_KEY=xxx \\
  R2_BUCKET=dollworldwide-media R2_PUBLIC_BASE_URL=https://pub-....r2.dev \\
  node scripts/r2-scan-media.mjs
`);
}

async function main() {
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    printHelp();
    process.exit(0);
  }

  const { endpoint, accessKeyId, secretAccessKey, bucket, publicBase } = readEnv();
  const ignoreList = parseIgnore(process.env.R2_IGNORE_PREFIXES);

  const client = new S3Client({
    region: 'auto',
    endpoint,
    credentials: { accessKeyId, secretAccessKey },
  });

  const roots = await listRootPrefixes(client, bucket);
  const products = [];
  const usedIds = new Map();

  for (const prefix of roots) {
    if (shouldIgnore(prefix, ignoreList)) {
      console.error(`skip (ignored): ${prefix}`);
      continue;
    }
    const keys = await listAllKeys(client, bucket, prefix);
    const product = buildProduct(publicBase, prefix, keys);
    if (product) {
      let id = product.id;
      const n = (usedIds.get(id) ?? 0) + 1;
      usedIds.set(id, n);
      if (n > 1) {
        const nextId = `${id}-${n}`;
        console.error(`warn: duplicate id "${id}" from ${prefix} → "${nextId}"`);
        product.id = nextId;
      }
      products.push(product);
      console.error(`ok: ${prefix} → ${product.id} (${product.realLifeMedia.clothedPhotos?.length ?? 0} clothed, ${product.realLifeMedia.nakedPhotos?.length ?? 0} naked, ${product.realLifeMedia.videos?.length ?? 0} videos)`);
    } else {
      console.error(`skip (no mapped 主图/聊天图/视频 media): ${prefix}`);
    }
  }

  const json = JSON.stringify(products, null, 2);
  const outPath = process.env.R2_SCAN_OUT
    ? resolve(process.cwd(), process.env.R2_SCAN_OUT)
    : resolve(process.cwd(), 'scripts/r2-scan-output.json');

  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, `${json}\n`, 'utf8');
  console.error(`\nWrote ${products.length} product(s) to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
