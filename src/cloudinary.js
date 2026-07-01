// ─────────────────────────────────────────────────────────────────────────────
// src/cloudinary.js
// Central Cloudinary configuration for your React app.
// Import `cld` and `buildUrl` anywhere in the app to get Cloudinary-hosted URLs.
// ─────────────────────────────────────────────────────────────────────────────

import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto as autoFormat } from "@cloudinary/url-gen/qualifiers/format";
import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";

// Initialise the Cloudinary instance once — reuse everywhere
export const cld = new Cloudinary({
  cloud: {
    cloudName: "dwzz3cxt1", // ← your cloud name
  },
  url: {
    secure: true, // always use https
  },
});

/**
 * Build an optimised Cloudinary image URL.
 *
 * @param {string} publicId   - The public ID of the image in your Cloudinary account
 * @param {object} [options]
 * @param {number} [options.width]   - Resize width (px)
 * @param {number} [options.height]  - Resize height (px)
 * @returns {string}  The ready-to-use https:// URL
 *
 * @example
 *   import { buildUrl } from './cloudinary';
 *   <img src={buildUrl('bhaviaplatic_sample', { width: 800 })} alt="..." />
 */
export function buildUrl(publicId, { width, height } = {}) {
  const img = cld.image(publicId);

  // f_auto  → best format per browser (WebP, AVIF, JPEG…)
  // q_auto  → smallest file at visually lossless quality
  img.delivery(format(autoFormat())).delivery(quality(autoQuality()));

  if (width || height) {
    img.resize(
      auto()
        .width(width ?? undefined)
        .height(height ?? undefined)
        .gravity(autoGravity())
    );
  }

  return img.toURL();
}
