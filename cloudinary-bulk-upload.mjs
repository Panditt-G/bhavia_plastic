// ─────────────────────────────────────────────────────────────────────────────
// Cloudinary Bulk Image Upload Script
// Run with: node cloudinary-bulk-upload.mjs
// Uploads all AI-generated category/section images to your Cloudinary account
// ─────────────────────────────────────────────────────────────────────────────

import { v2 as cloudinary } from "cloudinary";
import path from "path";

cloudinary.config({
  cloud_name: "dwzz3cxt1",
  api_key:    "963765384373532",
  api_secret: "c40Q9NIqMCXkjkBZRHAKABflaaM",
  secure: true,
});

const artifactsDir = "C:/Users/VIVEK/.gemini/antigravity-ide/brain/8eb1473b-b19f-4aa6-b84c-7c1170bcd703";

const images = [
  { file: `${artifactsDir}/hero_background_1782805408274.png`,        publicId: "bhavia/hero_background" },
  { file: `${artifactsDir}/about_store_1782805457204.png`,            publicId: "bhavia/about_store" },
  { file: `${artifactsDir}/cat_cups_glasses_1782805467579.png`,       publicId: "bhavia/cat_cups_glasses" },
  { file: `${artifactsDir}/cat_plates_1782805478104.png`,             publicId: "bhavia/cat_plates" },
  { file: `${artifactsDir}/cat_food_packaging_1782805670526.png`,     publicId: "bhavia/cat_food_packaging" },
  { file: `${artifactsDir}/cat_cleaning_1782805693202.png`,           publicId: "bhavia/cat_cleaning" },
  { file: `${artifactsDir}/cat_cutlery_1782805703719.png`,            publicId: "bhavia/cat_cutlery" },
  { file: `${artifactsDir}/cat_packaging_materials_1782805505563.png`, publicId: "bhavia/cat_packaging_materials" },
];

console.log(`⬆️  Uploading ${images.length} images to Cloudinary...\n`);

for (const img of images) {
  try {
    const result = await cloudinary.uploader.upload(img.file, {
      public_id: img.publicId,
      overwrite: true,
      folder: "",
    });
    console.log(`✅ ${img.publicId}`);
    console.log(`   URL: ${result.secure_url}\n`);
  } catch (err) {
    console.error(`❌ Failed: ${img.publicId}`, err.message, "\n");
  }
}

console.log("🎉 All uploads complete! Your images are now live on Cloudinary CDN.");
