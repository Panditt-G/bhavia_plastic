import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

cloudinary.config({
  cloud_name: "dwzz3cxt1",
  api_key:    "963765384373532",
  api_secret: "c40Q9NIqMCXkjkBZRHAKABflaaM",
  secure: true,
});

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

async function uploadAll() {
  const files = getFiles("public/images");
  console.log(`Found ${files.length} images to upload.`);

  // Upload in batches of 10 to speed it up
  for (let i = 0; i < files.length; i += 10) {
    const batch = files.slice(i, i + 10);
    await Promise.all(batch.map(async (file) => {
      if (!file.match(/\.(png|jpe?g|svg|webp|gif)$/i)) return;
      const relativePath = file.replace(/\\/g, "/").replace(/^public\//, "");
      const publicId = `bhavia/${relativePath.replace(/\.[^/.]+$/, "")}`;
      try {
        await cloudinary.uploader.upload(file, { public_id: publicId, overwrite: true, folder: "" });
        console.log(`✅ Uploaded: ${publicId}`);
      } catch (e) {
        console.error(`❌ Failed: ${file}`, e.message);
      }
    }));
  }
  console.log("Done!");
}

uploadAll();
