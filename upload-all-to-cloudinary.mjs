import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

// Configure Cloudinary
cloudinary.config({
  cloud_name: "dwzz3cxt1",
  api_key:    "963765384373532",
  api_secret: "c40Q9NIqMCXkjkBZRHAKABflaaM",
  secure: true,
});

const localImages = [
  { filePath: "public/images/slider/mattress.png", publicId: "bhavia/slider_mattress" },
  { filePath: "public/images/slider/food_packaging.png", publicId: "bhavia/slider_food_packaging" },
  { filePath: "public/images/slider/mineral_water.png", publicId: "bhavia/slider_mineral_water" },
  { filePath: "public/images/slider/ladder.png", publicId: "bhavia/slider_ladder" },
  { filePath: "public/images/slider/cutlery.png", publicId: "bhavia/slider_cutlery" },
  { filePath: "public/images/slider/fire_equipments.png", publicId: "bhavia/slider_fire_equipments" },
  { filePath: "public/images/slider/packaging_items.png", publicId: "bhavia/slider_packaging_items" },
  { filePath: "public/images/hero.jpg", publicId: "bhavia/hero_bg" }
];

const remoteImages = [
  { url: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=300&h=300&q=80", publicId: "bhavia/slider_cleaning_chemicals" },
  { url: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=300&h=300&q=80", publicId: "bhavia/slider_cleaning_materials" },
  { url: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=300&h=300&q=80", publicId: "bhavia/slider_floor_mats" },
  { url: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=300&h=300&q=80", publicId: "bhavia/slider_door_mats" },
  { url: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&h=300&q=80", publicId: "bhavia/slider_pots" },
  { url: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=300&h=300&q=80", publicId: "bhavia/slider_cups_glasses" },
  { url: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=300&h=300&q=80", publicId: "bhavia/slider_plates" }
];

async function run() {
  console.log("🚀 Starting Cloudinary uploads...");

  // 1. Upload local images
  for (const img of localImages) {
    if (fs.existsSync(img.filePath)) {
      console.log(`Uploading local file: ${img.filePath} to publicId: ${img.publicId}`);
      try {
        const result = await cloudinary.uploader.upload(img.filePath, {
          public_id: img.publicId,
          overwrite: true,
        });
        console.log(`✅ Uploaded! URL: ${result.secure_url}`);
      } catch (err) {
        console.error(`❌ Failed local upload for ${img.filePath}:`, err.message);
      }
    } else {
      console.warn(`⚠️ File not found: ${img.filePath}`);
    }
  }

  // 2. Upload remote images
  for (const img of remoteImages) {
    console.log(`Uploading remote URL: ${img.url} to publicId: ${img.publicId}`);
    try {
      const result = await cloudinary.uploader.upload(img.url, {
        public_id: img.publicId,
        overwrite: true,
      });
      console.log(`✅ Uploaded! URL: ${result.secure_url}`);
    } catch (err) {
      console.error(`❌ Failed remote upload for ${img.publicId}:`, err.message);
    }
  }

  console.log("🎉 All uploads finished!");
}

run();
