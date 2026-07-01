import { useState } from 'react';
import { buildUrl } from '../cloudinary';

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
      {/* Page Header */}
      <div className="bg-primary text-white py-16 md:py-20 text-center">
        <div className="container">
          <div className="section-label">Our Gallery</div>
          <h1 className="text-white mt-2">Gallery</h1>
          <p className="text-white/80 mt-2">A look at our store, product range, and the quality we deliver.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Tabs */}
          <div className="flex gap-2 justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-[22px] py-2.5 rounded-full font-semibold text-[0.88rem] transition-all duration-150 ${
                  activeTab === tab 
                    ? 'bg-accent text-primary shadow-accent' 
                    : 'bg-bg-section text-muted hover:bg-border/60'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'all' ? '🖼️ All' : tab === 'store' ? '🏪 Store' : '📦 Products'}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 grid-flow-row-dense">
            {filtered.map((img, i) => (
              <div
                key={img.id}
                className={`relative rounded-xl overflow-hidden h-[220px] cursor-pointer border border-border group ${
                  i === 0 ? 'md:col-span-2 md:row-span-2 md:h-[460px]' : ''
                }`}
                onClick={() => setLightbox(img)}
              >
                <img
                  src={buildUrl(img.cloudinaryId, { width: i === 0 ? 800 : 400, height: i === 0 ? 500 : 300 })}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="font-heading font-bold text-white text-base">{img.title}</div>
                  <div className="absolute top-4 right-4 bg-white/20 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold shadow-sm backdrop-blur-md">🔍</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/90 z-[2000] flex items-center justify-center p-6" onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-10 right-0 bg-white/10 text-white hover:bg-white/25 w-8 h-8 rounded-full flex items-center justify-center text-sm" onClick={() => setLightbox(null)}>✕</button>
            <img
              src={buildUrl(lightbox.cloudinaryId, { width: 1000 })}
              alt={lightbox.title}
              className="max-h-[80vh] w-auto object-contain rounded-md"
            />
            <div className="text-white font-heading font-medium text-base text-center mt-2">{lightbox.title}</div>
          </div>
        </div>
      )}
    </>
  );
}
