import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cloudinaryPrefix = 'https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/';

function replaceImagesInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  content = content.replace(/\/images\//g, cloudinaryPrefix);
  
  if (original !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

const filesToUpdate = [
  'src/data/products.js',
  'src/data/categories.js',
  'src/pages/Home.jsx',
  'src/pages/About.jsx',
  'src/pages/Gallery.jsx'
];

filesToUpdate.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    replaceImagesInFile(fullPath);
  }
});

console.log('Image paths updated to Cloudinary URLs!');
