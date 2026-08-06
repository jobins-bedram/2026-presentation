// Assemble a 4:3 PPTX from rendered slide images (one full-bleed image per slide).
// Usage: node scripts/make-pptx.mjs <images-dir> <output.pptx>
import fs from 'node:fs';
import path from 'node:path';
import Pptxgen from 'pptxgenjs';

const [imagesDir, outFile] = process.argv.slice(2);
if (!imagesDir || !outFile) {
  console.error('usage: node scripts/make-pptx.mjs <images-dir> <output.pptx>');
  process.exit(1);
}

const images = fs
  .readdirSync(imagesDir)
  .filter((f) => f.endsWith('.png'))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

if (images.length === 0) {
  console.error(`no PNG slides found in ${imagesDir}`);
  process.exit(1);
}

const pptx = new Pptxgen();
pptx.defineLayout({ name: 'DECK_4x3', width: 10, height: 7.5 });
pptx.layout = 'DECK_4x3';

for (const image of images) {
  const slide = pptx.addSlide();
  slide.addImage({ path: path.join(imagesDir, image), x: 0, y: 0, w: 10, h: 7.5 });
}

await pptx.writeFile({ fileName: outFile });
console.log(`wrote ${outFile} (${images.length} slides)`);
