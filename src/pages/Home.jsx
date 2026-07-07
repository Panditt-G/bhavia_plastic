import { Link } from 'react-router-dom';
import { buildUrl } from '../cloudinary';
import { categories } from '../data/categories';
import { brands } from '../data/brands';
import { faqs } from '../data/faqs';
import { contact } from '../data/contact';
import CategoryCard from '../components/CategoryCard';
import { useState, useRef } from 'react';
import { products } from '../data/products';

function HorizontalScrollContainer({ children }) {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 360; // scrolls roughly 3 cards
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group/slider w-full">
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white border border-gray-200 hover:bg-gray-50 text-primary w-9 h-9 rounded-full shadow-md flex items-center justify-center z-30 focus:outline-none"
        aria-label="Scroll Left"
      >
        <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      {/* Slider Viewport */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
      >
        {children}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white border border-gray-200 hover:bg-gray-50 text-primary w-9 h-9 rounded-full shadow-md flex items-center justify-center z-30 focus:outline-none"
        aria-label="Scroll Right"
      >
        <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  );
}

const productEmojis = {
  // Cups & Glasses
  'plastic-tea-glass': '🍵',
  'water-glass': '🥛',
  'paper-glass': '🥤',
  'plastic-glass': '🍺',
  'hot-beverage-cups': '☕',

  // Plates
  'paper-plates': '🍽️',
  'thermocol-plates': '🍛',
  'silver-plates': '🍛',
  'areca-plates': '🍃',
  'plastic-plates': '🍽️',

  // Food Packaging
  'thermocol-containers': '📦',
  'food-containers': '🫙',
  'plastic-containers': '🫙',
  'paper-containers': '🥡',
  'lunch-boxes': '🍱',
  'silver-containers': '🍱',

  // Paper Products
  'paper-napkins': '🧻',
  'kitchen-tissue': '🧻',
  'butter-paper': '📝',
  'foil-paper': '💿',
  'paper-roll': '🧻',
  'paper-bags': '🛍️',

  // Cutlery
  'plastic-spoon': '🥄',
  'fork': '🍴',
  'knife': '🔪',
  'stirrers': '🥤',
  'disposable-bowls': '🥣',

  // Packaging Materials
  'stretch-film': '🎁',
  'plastic-rolls': '📜',
  'tapes': '📼',
  'wrapping-materials': '🎁',
  'carry-bags': '🛍️',
  'packaging-rolls': '📜',
  'step-ladder': '🪜',

  // Cleaning Supplies
  'garbage-bags': '🗑️',
  'cleaning-cloth': '🧼',
  'kitchen-duster': '🧽',
  'steel-scrubber': '🧼',
  'room-freshener': '💨',
  'phenyl': '🧴',
  'fire-extinguisher': '🧯',

  // Household
  'candles': '🕯️',
  'buckets': '🪣',
  'storage-containers': '🫙',
  'plastic-bowls': '🥣',
  'ropes': '🪢',
  'mops': '🧹',
  'ortho-mattress': '🛏️',
  'mineral-water': '💧',
  'floor-mat': '🧼',
  'door-mat': '🚪',
  'garden-pots': '🪴',

  // Festival
  'modak-boxes': '🎁',
  'disposable-serving-items': '🍽️',
  'festival-packaging': '🎀',
  'gift-packaging': '🎁',
};

const getProductMedia = (productId, cloudinaryId) => {
  const localImages = {
    // Water bottles
    'water-independence': '/images/water/water_independence.png',
    'water-bisleri': '/images/water/water_bisleri.png',
    'water-kinley': '/images/water/water_kinley.png',
    'water-clear': '/images/water/water_clear.png',
    'water-renatures': '/images/water/water_renatures.png',
    'water-bailley': '/images/water/water_bailley.png',

    // Cleaning chemicals
    'bathroom-cleaner': '/images/housekeeping/bathroom_cleaner.png',
    'glass-cleaner': '/images/housekeeping/glass_cleaner.png',
    'floor-cleaner': '/images/housekeeping/floor_cleaner.png',
    'toilet-cleaner': '/images/housekeeping/toilet_cleaner.png',
    'dishwash-liquid': '/images/housekeeping/dishwash_liquid.png',
    'handwash': '/images/housekeeping/handwash.png',
    'air-freshener': '/images/housekeeping/air_freshener.png',
    'naphthalene-balls': '/images/housekeeping/naphthalene_balls.png',
    'bleaching-powder': '/images/housekeeping/bleaching_powder.png',
    'room-spray': '/images/housekeeping/room_spray.png',
    'flushmatic': '/images/housekeeping/flushmatic.png',
  };

  if (localImages[productId]) {
    return localImages[productId];
  }

  if (cloudinaryId) {
    return buildUrl(cloudinaryId, { width: 200, height: 200, crop: 'fit' });
  }

  return '/images/placeholder.png';
};


const whyUs = [
  { icon: '💰', title: 'Wholesale Pricing', desc: 'Best market rates for bulk buyers, businesses, and caterers.' },
  { icon: '📦', title: 'Bulk Orders', desc: 'Handle large quantity orders for hotels, restaurants, and events.' },
  { icon: '🛒', title: 'Retail Available', desc: 'Individual packs also available for home customers.' },
  { icon: '✅', title: 'Quality Products', desc: 'Only trusted brands and quality-checked products in our store.' },
  { icon: '⚡', title: 'Fast Service', desc: 'Quick order processing and fast delivery within Nashik.' },
  { icon: '🏪', title: 'Large Range', desc: '500+ products across 9 categories under one roof.' },
  { icon: '🚚', title: '5 KM Delivery', desc: 'Free delivery for large orders within 5 km radius.' },
  { icon: '🤝', title: 'Trusted Business', desc: 'Serving Nashik since 2017. 1000+ happy customers.' },
];

/* Category circles for the quick-nav strip (scrolling marquee style) */
const sliderItems = [
  { name: 'Mattress', cloudId: 'bhavia/slider_mattress', link: '/products?search=mattress' },
  { name: 'Food Packaging', cloudId: 'bhavia/slider_food_packaging', link: '/products/food-packaging' },
  { name: 'Mineral Water', cloudId: 'bhavia/slider_mineral_water', link: '/products?search=water' },
  { name: 'Cleaning Chemicals', cloudId: 'bhavia/slider_cleaning_chemicals', link: '/products/cleaning-supplies' },
  { name: 'Cleaning Materials', cloudId: 'bhavia/slider_cleaning_materials', link: '/products/cleaning-supplies' },
  { name: 'Floor Mats', cloudId: 'bhavia/slider_floor_mats', link: '/products/household' },
  { name: 'Door Mats', cloudId: 'bhavia/slider_door_mats', link: '/products/household' },
  { name: 'Pots', cloudId: 'bhavia/slider_pots', link: '/products/household' },
  { name: 'Ladders', cloudId: 'bhavia/slider_ladder', link: '/products/packaging-materials' },
  { name: 'Fire Equipments', cloudId: 'bhavia/slider_fire_equipments', link: '/products/cleaning-supplies' },
  { name: 'Packaging Items', cloudId: 'bhavia/slider_packaging_items', link: '/products/packaging-materials' },
  { name: 'Cups & Glasses', cloudId: 'bhavia/slider_cups_glasses', link: '/products/cups-glasses' },
  { name: 'Plates', cloudId: 'bhavia/slider_plates', link: '/products/plates' },
  { name: 'Cutlery', cloudId: 'bhavia/slider_cutlery', link: '/products/cutlery' }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO BLOCK — styled after MD Enterprises
      ══════════════════════════════════════════ */}
      <div className="w-full flex flex-col">




        {/* ── CATEGORY CIRCLES ROW ── */}
        {/* ── AUTO-SCROLLING PRODUCT SLIDER ── */}
        <div className="bg-white pt-4 pb-6 overflow-hidden border-b border-gray-100 z-10">
          <div className="w-full overflow-visible relative">
            <div className="flex gap-2 animate-marquee w-max">
              {/* First Set of Items */}
              {sliderItems.map((item, index) => (
                <Link key={`slide-1-${index}`} to={item.link} className="relative flex flex-col items-center gap-3 text-center shrink-0 w-[112px] group transition-transform duration-200 hover:scale-110 hover:z-10">
                  <img
                    src={buildUrl(item.cloudId, { width: 200, height: 200 })}
                    alt={item.name}
                    className="w-[100px] h-[100px] rounded-full object-cover border-2 border-black shadow-sm group-hover:shadow-lg transition-all duration-200"
                    loading="lazy"
                  />
                  <span className="text-[12.5px] font-semibold text-gray-700 leading-tight group-hover:text-[#0d1b2a] transition-colors">{item.name}</span>
                </Link>
              ))}
              {/* Second Set of Items (for seamless infinite loop) */}
              {sliderItems.map((item, index) => (
                <Link key={`slide-2-${index}`} to={item.link} className="relative flex flex-col items-center gap-3 text-center shrink-0 w-[112px] group transition-transform duration-200 hover:scale-110 hover:z-10">
                  <img
                    src={buildUrl(item.cloudId, { width: 200, height: 200 })}
                    alt={item.name}
                    className="w-[100px] h-[100px] rounded-full object-cover border-2 border-black shadow-sm group-hover:shadow-lg transition-all duration-200"
                    loading="lazy"
                  />
                  <span className="text-[12.5px] font-semibold text-gray-700 leading-tight group-hover:text-[#0d1b2a] transition-colors">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── MAIN HERO BANNER ── */}
        <div
          className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] bg-no-repeat flex flex-col justify-center py-10 md:py-12 px-5 md:px-0"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/hero_bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        >
          {/* Overlay — full cover on mobile for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060e17]/90 via-[#0d1b2a]/70 to-[#0d1b2a]/40 md:to-transparent z-[1]" />

          {/* Text Content */}
          <div className="container relative z-[3] w-full flex flex-col items-start">
            <div className="w-full max-w-xl">
              {/* Heading — smaller on mobile */}
              <h1 className="text-white font-heading font-extrabold text-[1.9rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[4rem] leading-[1.12] mb-3 tracking-tight">
                Wholesale Shop<br />
                Near You in<br />
                <span className="text-[#E87C2B]">Nashik</span>
              </h1>

              {/* Accent underline */}
              <div className="w-[56px] h-[3px] bg-[#E87C2B] rounded-full mb-4 md:mb-6"></div>

              {/* Subheading */}
              <p className="text-white/85 text-sm md:text-base lg:text-lg mb-6 md:mb-8 font-sans font-medium tracking-wide">
                All Products Under One Roof
              </p>

              {/* Buttons — stack on very small, row on sm+ */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={`tel:${contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#0d1b2a] hover:bg-[#1e3a5f] text-white font-bold text-[0.88rem] px-6 py-3 rounded-full border border-white/20 transition-all duration-150 hover:-translate-y-[1px]"
                >
                  Call Now
                </a>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 border border-white/60 bg-transparent hover:bg-white/10 text-white font-bold text-[0.88rem] px-6 py-3 rounded-full transition-all duration-150"
                >
                  Explore Products
                </Link>
              </div>
            </div>

            {/* Bottom Features Row — hidden on mobile, visible md+ */}
            <div className="hidden md:grid mt-10 border-t border-white/10 pt-6 grid-cols-4 gap-4 max-w-3xl w-full">
              {[
                { 
                  icon: (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                    </svg>
                  ), 
                  title: 'Wide Range', 
                  sub: 'of Products' 
                },
                { 
                  icon: (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  ), 
                  title: 'Quality Assured', 
                  sub: 'Best for Business' 
                },
                { 
                  icon: (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>
                    </svg>
                  ), 
                  title: 'Fast Delivery', 
                  sub: 'On-time Service' 
                },
                { 
                  icon: (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                  ), 
                  title: 'Customer Support', 
                  sub: "We're Here to Help" 
                },
              ].map(({ icon, title, sub }) => (
                <div key={title} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-base bg-white/8 shrink-0">
                    {icon}
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-white font-bold text-[10px] uppercase tracking-wide">{title}</span>
                    <span className="text-white/55 text-[9px]">{sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      {/* END HERO BLOCK */}


      {/* ── ABOUT SNIPPET ── */}
      <section className="section">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative rounded-[20px] overflow-hidden shadow-lg">
            <img
              src={buildUrl('bhavia/about_store', { width: 600 })}
              alt="Bhavia Plastic store in Nashik"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-4 items-start">
            <div className="section-label">About Us</div>
            <h2>Nashik's Trusted Wholesale &amp; Retail Disposable Store</h2>
            <p>
              Established in 2017, <strong>Bhavia Plastic</strong> has grown to become Nashik's premier
              destination for disposable products, packaging materials, and household essentials.
            </p>
            <p>
              We serve homes, restaurants, hotels, caterers, corporate offices, hospitals, and event
              planners across Nashik with competitive pricing and reliable bulk supply.
            </p>
            <div className="flex flex-wrap gap-2.5 my-4">
              {['Wholesale & Retail', 'Bulk Orders Welcome', 'Fast Delivery', 'Quality Products', 'Corporate Supply', 'Competitive Pricing'].map((h) => (
                <span key={h} className="bg-bg-section text-primary-light font-semibold text-[0.8rem] px-3.5 py-1.5 rounded-full border border-border">✓ {h}</span>
              ))}
            </div>
            <Link to="/about" className="btn btn-primary">Learn More About Us →</Link>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <div className="section-label">Our Products</div>
            <h2>Browse by Category</h2>
            <p>Explore our complete range of disposable products, packaging materials, and household essentials organized into easy-to-browse categories.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn btn-outline-dark btn-lg">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="section bg-bg-section/40">
        <div className="container">
          <div className="section-header center max-w-xl mx-auto mb-12">
            <div className="section-label">Who We Serve</div>
            <h2 className="mt-2">Wholesale &amp; Retail for Every Need</h2>
            <p className="text-muted text-[0.88rem] mt-2">We provide reliable supply and customized solutions for businesses, institutions, and homes across Nashik.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&h=420&q=80',
                title: 'Hotels & Restaurants',
                desc: 'Bulk disposable cups, containers, napkins, and cleaning supplies for your daily food operations.' 
              },
              { 
                img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&h=420&q=80',
                title: 'Caterers',
                desc: 'Premium serving plates, bowls, cups, and elegant disposables for events and parties at wholesale rates.' 
              },
              { 
                img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&h=420&q=80',
                title: 'Corporate Offices',
                desc: 'Monthly contracts for tea cups, water glasses, tissue papers, and essential cleaning supplies.' 
              },
              { 
                img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&h=420&q=80',
                title: 'Hospitals & Clinics',
                desc: 'Hygiene supplies, garbage bags, toilet rolls, face masks, and sanitization products.' 
              },
              { 
                img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&h=420&q=80',
                title: 'Event Planners',
                desc: 'Themed disposables, festival packaging, gift boxes, decorative serving bowls, and custom boxes.' 
              },
              { 
                img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&h=420&q=80',
                title: 'Home Customers',
                desc: 'Everyday household essentials, kitchen duster, garbage bags, candles, and storage boxes.' 
              },
            ].map((s) => (
              <div 
                key={s.title} 
                className="relative overflow-hidden rounded-[24px] h-[320px] shadow-sm group cursor-pointer border border-border flex flex-col justify-end"
              >
                {/* Background Image */}
                <img 
                  src={s.img} 
                  alt={s.title} 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e17] via-[#060e17]/35 to-transparent transition-opacity duration-300 group-hover:via-[#060e17]/45" />
                
                {/* Content Overlay */}
                <div className="relative p-6 z-10 flex flex-col gap-1.5 text-left transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-heading font-bold text-white text-lg leading-tight md:text-xl">{s.title}</h4>
                  <p className="text-[0.82rem] text-white/70 leading-relaxed opacity-0 max-h-[0px] overflow-hidden group-hover:opacity-100 group-hover:max-h-[80px] transition-all duration-300">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS RANGE SHOWCASE ── */}
      <section className="section bg-bg-section/30">
        <div className="container flex flex-col gap-14">
          {/* Section Header */}
          <div className="section-header center max-w-xl mx-auto mb-4">
            <div className="section-label">Our Range</div>
            <h2>Explore Our Product Categories</h2>
            <p className="text-muted text-[0.88rem] mt-2">
              High-quality disposable products, food packaging, drinking water, and housekeeping materials at Nashik's best wholesale rates.
            </p>
          </div>

          {/* 1. Packaged Drinking Water Supply */}
          <div>
            <h3 className="font-heading font-bold text-primary text-xl mb-5">
              Packaged Drinking Water
            </h3>
            <HorizontalScrollContainer>
              {[
                { name: 'Independence', img: '/images/water/water_independence.png' },
                { name: 'Bisleri',       img: '/images/water/water_bisleri.png' },
                { name: 'Kinley',        img: '/images/water/water_kinley.png' },
                { name: 'Clear',         img: '/images/water/water_clear.png' },
                { name: 'ReNatures',     img: '/images/water/water_renatures.png' },
                { name: 'Bailley',       img: '/images/water/water_bailley.png' },
              ].map((w) => (
                <div
                  key={w.name}
                  className="group shrink-0 snap-start bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col items-center gap-2 p-4 w-[120px] cursor-pointer relative overflow-hidden"
                >
                  <img
                    src={w.img}
                    alt={w.name}
                    className="h-[90px] w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="relative w-full h-[42px] flex items-center justify-center overflow-hidden">
                    <span className="absolute transition-all duration-300 transform group-hover:translate-y-10 group-hover:opacity-0 font-semibold text-[0.75rem] text-primary text-center leading-tight whitespace-pre-line">
                      {w.name}
                    </span>
                    <a
                      href={`https://wa.me/${contact.whatsapp}?text=I%20want%20to%20order%20${w.name}`}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute transition-all duration-300 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-[#E87C2B] hover:bg-[#C86518] text-white text-[0.68rem] font-bold py-1.5 px-3 rounded-full shadow-sm text-center whitespace-nowrap"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              ))}
            </HorizontalScrollContainer>
          </div>

          {/* 2. House Keeping Chemicals */}
          <div>
            <h3 className="font-heading font-bold text-primary text-xl mb-5">
              House Keeping Chemicals
            </h3>
            <HorizontalScrollContainer>
              {[
                { name: 'Bathroom\nCleaners',   img: '/images/housekeeping/bathroom_cleaner.png' },
                { name: 'Glass\nCleaners',       img: '/images/housekeeping/glass_cleaner.png' },
                { name: 'Floor\nCleaners',       img: '/images/housekeeping/floor_cleaner.png' },
                { name: 'Toilet\nCleaners',      img: '/images/housekeeping/toilet_cleaner.png' },
                { name: 'Dishwashing\nLiquids',  img: '/images/housekeeping/dishwash_liquid.png' },
                { name: 'Hand\nWashing Liquids', img: '/images/housekeeping/handwash.png' },
                { name: 'Air\nFresheners',       img: '/images/housekeeping/air_freshener.png' },
                { name: 'Naphthalene\nBalls',    img: '/images/housekeeping/naphthalene_balls.png' },
                { name: 'Bleaching\nPowder',     img: '/images/housekeeping/bleaching_powder.png' },
                { name: 'Room\nSprays',          img: '/images/housekeeping/room_spray.png' },
                { name: 'Flushmatic',            img: '/images/housekeeping/flushmatic.png' },
              ].map((item) => (
                <div
                  key={item.name}
                  className="group shrink-0 snap-start bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col items-center gap-2 p-4 w-[120px] cursor-pointer relative overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={item.name.replace('\n', ' ')}
                    className="h-[90px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="relative w-full h-[32px] flex items-center justify-center overflow-hidden">
                    <span className="absolute transition-all duration-300 transform group-hover:translate-y-10 group-hover:opacity-0 font-semibold text-[0.75rem] text-primary text-center leading-tight whitespace-pre-line">
                      {item.name}
                    </span>
                    <a
                      href={`https://wa.me/${contact.whatsapp}?text=I%20want%20to%20order%20${item.name.replace('\n', ' ')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute transition-all duration-300 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-[#E87C2B] hover:bg-[#C86518] text-white text-[0.68rem] font-bold py-1.5 px-3 rounded-full shadow-sm text-center whitespace-nowrap"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              ))}
            </HorizontalScrollContainer>
          </div>

          {/* 3. House Keeping Materials */}
          <div>
            <h3 className="font-heading font-bold text-primary text-xl mb-5">
              House Keeping Materials
            </h3>
            <HorizontalScrollContainer>
              {[
                { name: 'Broom\n& Dustpan',   cloudId: 'bhavia/cat_cleaning', id: 'broom-dustpan' },
                { name: 'Buckets',             cloudId: 'bhavia/cat_household', id: 'buckets' },
                { name: 'Mops',                cloudId: 'bhavia/cat_household', id: 'mops' },
                { name: 'Microfiber\nCloths',  cloudId: 'bhavia/cat_cleaning', id: 'cleaning-cloth' },
                { name: 'Scrubbers',           cloudId: 'bhavia/cat_cleaning', id: 'steel-scrubber' },
                { name: 'Toilet\nBrush',       cloudId: 'bhavia/cat_cleaning', id: 'toilet-brush' },
                { name: 'Garbage\nBags',       cloudId: 'bhavia/cat_cleaning', id: 'garbage-bags' },
                { name: 'Cleaning\nGloves',    cloudId: 'bhavia/cat_cleaning', id: 'cleaning-gloves' },
                { name: 'Wiper /\nSqueegee',   cloudId: 'bhavia/cat_cleaning', id: 'wiper-squeegee' },
                { name: 'Duster',              cloudId: 'bhavia/cat_cleaning', id: 'duster' },
                { name: 'Dustbin',             cloudId: 'bhavia/cat_household', id: 'dustbin' },
                { name: 'Cleaning\nBrushes',   cloudId: 'bhavia/cat_cleaning', id: 'cleaning-brushes' },
              ].map((item) => {
                const cloudUrl = buildUrl(`bhavia/products/${item.id}`, { width: 160, height: 160, crop: 'fit' });
                const fallbackUrl = buildUrl(item.cloudId, { width: 160, height: 160, crop: 'fit' });
                return (
                  <div
                    key={item.name}
                    className="group shrink-0 snap-start bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col items-center gap-2 p-4 w-[120px] cursor-pointer relative overflow-hidden"
                  >
                    <img
                      src={cloudUrl}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = fallbackUrl;
                      }}
                      alt={item.name.replace('\n', ' ')}
                      className="h-[90px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="relative w-full h-[32px] flex items-center justify-center overflow-hidden">
                      <span className="absolute transition-all duration-300 transform group-hover:translate-y-10 group-hover:opacity-0 font-semibold text-[0.75rem] text-primary text-center leading-tight whitespace-pre-line">
                        {item.name}
                      </span>
                      <a
                        href={`https://wa.me/${contact.whatsapp}?text=I%20want%20to%20order%20${item.name.replace('\n', ' ')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute transition-all duration-300 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-[#E87C2B] hover:bg-[#C86518] text-white text-[0.68rem] font-bold py-1.5 px-3 rounded-full shadow-sm text-center whitespace-nowrap"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                );
              })}
            </HorizontalScrollContainer>
          </div>

          {/* 4. Dynamic Categories */}
          {categories
            .filter((cat) => cat.id !== 'cleaning-supplies' && cat.id !== 'household')
            .map((cat) => {
              const catProducts = products.filter((p) => p.category === cat.id);
              if (catProducts.length === 0) return null;

              return (
                <div key={cat.id}>
                  <h3 className="font-heading font-bold text-primary text-xl mb-5">
                    {cat.name}
                  </h3>
                  <HorizontalScrollContainer>
                    {catProducts.map((p) => {
                      const cloudUrl = buildUrl(p.cloudinaryId, { width: 200, height: 200, crop: 'fit' });
                      const fallbackUrl = buildUrl(`bhavia/cat_${p.category}`, { width: 200, height: 200, crop: 'fit' });
                      return (
                        <div
                          key={p.id}
                          className="group shrink-0 snap-start bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col items-center gap-2 p-4 w-[120px] cursor-pointer relative overflow-hidden"
                        >
                          <img
                            src={cloudUrl}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = fallbackUrl;
                            }}
                            alt={p.name}
                            className="h-[90px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="relative w-full h-[32px] flex items-center justify-center overflow-hidden">
                            <span className="absolute transition-all duration-300 transform group-hover:translate-y-10 group-hover:opacity-0 font-semibold text-[0.72rem] text-primary text-center leading-tight">
                              {p.name}
                            </span>
                            <a
                              href={`https://wa.me/${contact.whatsapp}?text=I%20want%20to%20order%20${p.name}`}
                              target="_blank"
                              rel="noreferrer"
                              className="absolute transition-all duration-300 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-[#E87C2B] hover:bg-[#C86518] text-white text-[0.68rem] font-bold py-1.5 px-3 rounded-full shadow-sm text-center whitespace-nowrap"
                            >
                              Shop Now
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </HorizontalScrollContainer>
                </div>
              );
            })}
        </div>
      </section>


      {/* ── BRANDS ── */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="section-label">Our Partners</div>
            <h2>Trusted Brand Partners</h2>
            <p>We are authorized distributors and wholesale suppliers for leading brands.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {brands.map((brand) => (
              <div key={brand.id} className="bg-bg-card rounded-xl p-5 border border-border text-center flex flex-col items-center gap-2 hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-extrabold text-white text-[1.1rem] shadow-sm mb-1" style={{ background: brand.color }}>
                  {brand.initial}
                </div>
                <div className="font-semibold text-[0.88rem] text-primary leading-tight">{brand.name}</div>
                <div className="text-[0.7rem] text-muted tracking-wider uppercase font-medium">{brand.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SNIPPET ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <div className="section-label">FAQs</div>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {faqs.slice(0, 5).map((faq) => (
              <div key={faq.id} className="bg-bg-card rounded-xl border border-border overflow-hidden transition-all duration-200">
                <button className="w-full flex items-center justify-between p-5 text-left font-heading font-semibold text-primary text-[0.92rem] md:text-base hover:bg-bg-section transition-colors" onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}>
                  <span>{faq.question}</span>
                  <span className="text-xs text-muted transition-transform">{openFaq === faq.id ? '▲' : '▼'}</span>
                </button>
                {openFaq === faq.id && (
                  <div className="p-5 pt-0 border-t border-border/50 text-[0.88rem] text-muted leading-relaxed">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/faqs" className="btn btn-outline-dark">View All FAQs →</Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="section section-dark">
        <div className="container flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-16">
          <div>
            <div className="section-label" style={{ color: 'var(--color-accent)' }}>Get In Touch</div>
            <h2>Ready to Place a Bulk Order?</h2>
            <p className="text-white/70">
              Contact us for wholesale pricing, bulk quotes, and corporate supply contracts.
              We respond within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <a href={`tel:${contact.phone}`} className="btn btn-primary btn-lg">Call Now</a>
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-lg">WhatsApp Us</a>
            <Link to="/contact" className="btn btn-outline btn-lg">Send Inquiry →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
