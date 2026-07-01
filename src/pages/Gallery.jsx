import { useState } from 'react';
import { buildUrl } from '../cloudinary';
import './Gallery.css';

// Using Cloudinary-hosted images with category images for gallery
const galleryImages = [
  { id: 1, cloudinaryId: 'bhavia/hero_background',       title: 'Our Product Range',       tab: 'products' },
  { id: 2, cloudinaryId: 'bhavia/about_store',           title: 'Our Store',                tab: 'store' },
  { id: 3, cloudinaryId: 'bhavia/cat_cups_glasses',      title: 'Cups & Glasses Range',    tab: 'products' },
  { id: 4, cloudinaryId: 'bhavia/cat_plates',            title: 'Plates Collection',        tab: 'products' },
  { id: 5, cloudinaryId: 'bhavia/cat_food_packaging',    title: 'Food Packaging',           tab: 'products' },
  { id: 6, cloudinaryId: 'bhavia/cat_cleaning',          title: 'Cleaning Supplies',        tab: 'products' },
  { id: 7, cloudinaryId: 'bhavia/cat_packaging_materials', title: 'Packaging Materials',   tab: 'products' },
  { id: 8, cloudinaryId: 'bhavia/cat_cutlery',           title: 'Cutlery Range',            tab: 'products' },
  { id: 9, cloudinaryId: 'bhavia/about_store',           title: 'Shop Interior',            tab: 'store' },
];

const tabs = ['all', 'store', 'products'];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  document.title = 'Gallery | Bhavia Plastic Nashik';

  const filtered = activeTab === 'all' ? galleryImages : galleryImages.filter((g) => g.tab === activeTab);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="section-label">Our Gallery</div>
          <h1>Gallery</h1>
          <p>A look at our store, product range, and the quality we deliver.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Tabs */}
          <div className="gallery-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`gallery-tab${activeTab === tab ? ' active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'all' ? '🖼️ All' : tab === 'store' ? '🏪 Store' : '📦 Products'}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filtered.map((img, i) => (
              <div
                key={img.id}
                className={`gallery-item${i === 0 ? ' gallery-item--large' : ''}`}
                onClick={() => setLightbox(img)}
              >
                <img
                  src={buildUrl(img.cloudinaryId, { width: i === 0 ? 800 : 400, height: i === 0 ? 500 : 300 })}
                  alt={img.title}
                  loading="lazy"
                />
                <div className="gallery-item__overlay">
                  <div className="gallery-item__title">{img.title}</div>
                  <div className="gallery-item__zoom">🔍</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" onClick={() => setLightbox(null)}>✕</button>
            <img
              src={buildUrl(lightbox.cloudinaryId, { width: 1000 })}
              alt={lightbox.title}
            />
            <div className="lightbox__caption">{lightbox.title}</div>
          </div>
        </div>
      )}
    </>
  );
}
