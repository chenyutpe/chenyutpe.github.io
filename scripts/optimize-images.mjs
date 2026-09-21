// Run from the repository root with npm run media:images.
// Sharp is already installed by Next.js; retain the source images in public/.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const images = [
  { source: 'profile.png', name: 'profile', widths: [560], quality: 85 },
  { source: 'CHI_PHOTO_LOGO.jpg', name: 'chi-photo', widths: [720, 1440], quality: 85 },
  { source: 'works/publication_05.png', name: 'publication-05', widths: [720], quality: 90 },
  { source: 'works/publication_06.png', name: 'publication-06', widths: [720], quality: 90 },
];

await mkdir('public/images', { recursive: true });
for (const { source, name, widths, quality } of images) {
  for (const width of widths) {
    const output = `public/images/${name}-${width}.webp`;
    const result = await sharp(`public/${source}`)
      .rotate() // Apply EXIF orientation before resizing the CHI portrait.
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(output);
    console.log(`${output}: ${result.width}×${result.height}, ${result.size} bytes`);
  }
}
