// ─────────────────────────────────────────────────────────────────────────────
// Cloudinary Onboarding Script — Upload · Inspect · Transform
// Run with: node cloudinary-upload.mjs
// ─────────────────────────────────────────────────────────────────────────────

import { v2 as cloudinary } from "cloudinary";

// ── STEP 1: Configure Cloudinary (inline — no .env needed) ───────────────────
cloudinary.config({
  cloud_name: "dwzz3cxt1",      // ← your cloud name
  api_key:    "963765384373532", // ← your API key
  api_secret: "c40Q9NIqMCXkjkBZRHAKABflaaM", // ← your API secret
  secure: true,
});

// ── STEP 2: Upload a sample image from Cloudinary's demo library ──────────────
console.log("⬆️  Uploading sample image to your Cloudinary account...\n");

const uploadResult = await cloudinary.uploader.upload(
  "https://res.cloudinary.com/demo/image/upload/sample.jpg",
  {
    public_id: "bhaviaplatic_sample", // friendly name stored in your account
    overwrite: true,
  }
);

console.log("✅ Upload successful!");
console.log("   Secure URL  :", uploadResult.secure_url);
console.log("   Public ID   :", uploadResult.public_id);
console.log();

// ── STEP 3: Fetch and print image metadata ────────────────────────────────────
console.log("🔍 Fetching image details...\n");

const details = await cloudinary.api.resource(uploadResult.public_id);

console.log("📐 Image Details:");
console.log("   Width        :", details.width, "px");
console.log("   Height       :", details.height, "px");
console.log("   Format       :", details.format);
console.log("   File size    :", details.bytes, "bytes");
console.log();

// ── STEP 4: Generate a transformed URL (f_auto + q_auto) ─────────────────────
// f_auto → Cloudinary automatically picks the best format for the browser
//           (e.g. WebP for Chrome, AVIF for newer browsers, JPEG as fallback)
// q_auto → Cloudinary automatically picks the best quality level,
//           reducing file size without visible quality loss
const transformedUrl = cloudinary.url(uploadResult.public_id, {
  transformation: [
    { fetch_format: "auto" }, // f_auto
    { quality: "auto" },      // q_auto
  ],
  secure: true,
});

console.log("🎨 Transformed URL (f_auto + q_auto):");
console.log("   ", transformedUrl);
console.log();
console.log("✨ Done! Click the link below to see the optimized version of the image.");
console.log("   Check the size and the format in your browser's DevTools → Network tab.");
console.log("   ", transformedUrl);
