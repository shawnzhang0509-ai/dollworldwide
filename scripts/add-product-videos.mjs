import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const productsPath = path.resolve(__dirname, '../src/data/products.ts');

const videoUrls = [
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD01/Naked%20videos/DWWD01%20-%20Nova%20-%20Xuexian.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD02/Naked%20videos/DWWD02%20-%20Lillith%20-%20Salefenni.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD05/Naked%20videos/DWWD05%20-%20Haruki%20-%20Yawen.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD06/Naked%20videos/DWWD06%20-%20Hikari%20-%20Kaitelin.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD07/Naked%20videos/DWWD07%20-%20Yuna%20-%20Xingzi.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD09/Naked%20videos/DWWD09%20-%20Tara%20-%20Jiachen.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD10/Naked%20videos/DWWD10%20-%20Kira%20-%20Longnv.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD11/Naked%20videos/DWWD11%20-%20Juliet%20-%20Muyao.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD12/Naked%20videos/DWWD12%20-%20Ivy%20-%20Muyu.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD13/Naked%20videos/DWWD13%20-%20Olivia%20-%20Nanxi.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD14/Naked%20videos/DWWD14%20-%20Sophie%20-%20Zhiyan.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD15/Naked%20videos/DWWD15%20-%20Bonnie%20-%20Xiaen.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD16/Naked%20videos/DWWD16%20-%20Maya%20-%20Chunzi.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD17/Naked%20videos/DWWD17%20-%20Aiko%20-%20Qiaoyi.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD18/Naked%20videos/DWWD18%20-%20Mei%20-%20Xiaodie.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD19/Naked%20videos/DWWD19%20-%20Aria%20-%20Beila.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD20/Naked%20videos/DWWD20%20-%20Amara%20-%20Ruoyan.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD21/Naked%20videos/DWWD21%20-%20Mae%20-%20Lanxi.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD22/Naked%20videos/DWWD22%20-%20Faye%20-%20Lidiya.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD25/Naked%20videos/DWWD25%20-%20Yumi%20-%20Anqing.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD26/Naked%20videos/DWWD26%20-%20Hailey%20-%20Beier.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD27/Naked%20videos/DWWD27%20-%20Hiroko%20-%20Huanshi.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD28/Naked%20videos/DWWD28%20-%20Natsuki%20-%20Huiyan.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD29/Naked%20videos/DWWD29%20-%20Sakura%20-%20Jiani.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD30/Naked%20videos/DWWD30%20-%20Yuri%20-%20Manni.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD32/Naked%20videos/DWWD32%20-%20Luna%20-%20Muhan.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD33/Naked%20videos/DWWD33%20-%20Emiko%20-%20Nanyuan.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD34/Naked%20videos/DWWD34%20-%20Kaori%20-%20Siying.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD35/Naked%20videos/DWWD35%20-%20Indy%20-%20Xiaoying.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD36/Naked%20videos/DWWD36%20-%20Asami%20-%20Xiaozhi.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD38/Naked%20videos/DWWD38%20-%20Elysia%20-%20Xiuyan.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD39/Naked%20videos/DWWD39%20-%20Akira%20-%20Yanqi.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD40/Naked%20videos/DWWD40%20-%20Haruki%20-%20Yawen.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD41/Naked%20videos/DWWD41%20-%20Stella%20-%20Yumeng.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD42/Naked%20videos/DWWD42%20-%20Kohana%20-%20Yuanli.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD43/Naked%20videos/DWWD43%20-%20Elisha%20-%20Siwei.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD44/Naked%20videos/DWWD44%20-%20Reina%20-%20Waner.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD45/Naked%20videos/DWWD45%20-%20Evie%20-%20Xiaoyu.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD46/Naked%20videos/DWWD46%20-%20Maia%20-%20Baoer.mov',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD47/Naked%20videos/DWWD47%20-%20Lyla%20-%20Yanke.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD48/Naked%20videos/DWWD48%20-%20Lola%20-%20Cailin.mp4',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD49/Naked%20videos/DWWD49%20-%20Lucy%20-%20Huaze.mov',
  'https://pub-2332c827c22d490283e3e7585dc5e06c.r2.dev/DWWD50/Naked%20videos/DWWD50%20-%20Hana%20-%20Jieyi.mov',
];

function decodeTitle(url) {
  const filename = decodeURIComponent(url.split('/').pop() ?? 'video');
  return filename;
}

function pickPoster(productBlock) {
  const nakedMatch = productBlock.match(/nakedPhotos:\s*\[[\s\S]*?src:\s*'([^']+)'/);
  if (nakedMatch) return nakedMatch[1];

  const clothedMatch = productBlock.match(/clothedPhotos:\s*\[[\s\S]*?src:\s*'([^']+)'/);
  if (clothedMatch) return clothedMatch[1];

  const imageMatch = productBlock.match(/image:\s*'([^']+)'/);
  if (imageMatch) return imageMatch[1];

  const multilineImageMatch = productBlock.match(/image:\s*\n\s*'([^']+)'/);
  if (multilineImageMatch) return multilineImageMatch[1];

  return null;
}

function buildVideosBlock(videoUrl, poster) {
  const title = decodeTitle(videoUrl);
  return `      videos: [
        {
          src: '${videoUrl}',
          title: '${title}',
          poster: '${poster}',
        },
      ],`;
}

let content = readFileSync(productsPath, 'utf8');
const updatedSkus = [];
const missingSkus = [];

for (const videoUrl of videoUrls) {
  const skuMatch = videoUrl.match(/DWWD\d+/);
  if (!skuMatch) continue;
  const sku = skuMatch[0];

  const skuPattern = new RegExp(
    `tradeMeSearchCode:\\s*'${sku}',[\\s\\S]*?realLifeMedia:\\s*\\{([\\s\\S]*?)\\n    \\},`,
    'm'
  );
  const blockMatch = content.match(skuPattern);
  if (!blockMatch) {
    missingSkus.push(sku);
    continue;
  }

  const productBlock = blockMatch[0];
  const poster = pickPoster(productBlock);
  if (!poster) {
    missingSkus.push(`${sku} (no poster)`);
    continue;
  }

  const videosBlock = buildVideosBlock(videoUrl, poster);
  let nextProductBlock;

  if (/videos:\s*\[[\s\S]*?\],/.test(productBlock)) {
    nextProductBlock = productBlock.replace(/videos:\s*\[[\s\S]*?\],/, videosBlock);
  } else {
    nextProductBlock = productBlock.replace(/\n    \},/, `\n${videosBlock}\n    },`);
  }

  content = content.replace(productBlock, nextProductBlock);
  updatedSkus.push(sku);
}

writeFileSync(productsPath, content);

console.log(`Updated ${updatedSkus.length} products: ${updatedSkus.join(', ')}`);
if (missingSkus.length > 0) {
  console.log(`Missing: ${missingSkus.join(', ')}`);
  process.exit(1);
}
