import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.resolve(__dirname, '../public/assets/images');

async function processImages() {
  try {
    const files = fs.readdirSync(assetsDir);
    const targetFiles = files.filter(f => f.match(/\.(png|jpe?g)$/i));

    let totalSaved = 0;
    
    console.log(`Found ${targetFiles.length} images. Starting compression to WebP...`);

    for (const [index, file] of targetFiles.entries()) {
      const inputPath = path.join(assetsDir, file);
      const outputFilename = file.replace(/\.(png|jpe?g)$/i, '.webp');
      const outputPath = path.join(assetsDir, outputFilename);

      const inputStats = fs.statSync(inputPath);
      
      // Compress to WebP
      // We'll use 80% quality which provides a great balance of size and visual fidelity
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
        
      const outputStats = fs.statSync(outputPath);
      const savedBytes = inputStats.size - outputStats.size;
      totalSaved += savedBytes;

      // Delete the original PNG/JPG file to save space
      fs.unlinkSync(inputPath);

      if ((index + 1) % 5 === 0 || index === targetFiles.length - 1) {
        console.log(`Processed ${index + 1}/${targetFiles.length} files...`);
      }
    }

    const savedMB = (totalSaved / (1024 * 1024)).toFixed(2);
    console.log(`\n✅ Successfully compressed all images in public/assets/images!`);
    console.log(`📉 Saved roughly ${savedMB} MB of space.`);

  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processImages();
