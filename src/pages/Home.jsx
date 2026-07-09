import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';
import { categories } from '../data/categories';
import { faqs } from '../data/faqs';
import { contact } from '../data/contact';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { useState, useRef } from 'react';
import { products } from '../data/products';
import { buildUrl } from '../cloudinary';

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
      <SEO title="Home" description="Nashik's #1 wholesale supplier of disposable products, packaging materials, and cleaning supplies. Quality products, fast delivery, best rates." />
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WholesaleStore",
              "name": "Bhavia Plastic",
              "image": "https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/hero_background",
              "url": "https://bhaviaplastic.com",
              "telephone": "+918149487449",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No 1, Malpani Empire, Dindori Road, near Morewadi",
                "addressLocality": "Panchavati, Nashik",
                "postalCode": "422003",
                "addressRegion": "MH",
                "addressCountry": "IN"
              }
            }
          `}
        </script>
      </Helmet>
      {/* ══════════════════════════════════════════
          HERO BLOCK — styled after MD Enterprises
      ══════════════════════════════════════════ */}
      <div className="w-full flex flex-col">




        {/* ── CATEGORY CIRCLES ROW ── */}
        {/* ── AUTO-SCROLLING PRODUCT SLIDER ── */}
        <div className="bg-white pt-3 sm:pt-4 pb-4 sm:pb-6 overflow-hidden border-b border-gray-100 z-10">
          <div className="w-full overflow-visible relative">
            <div className="flex gap-2 animate-marquee w-max">
              {/* First Set of Items */}
              {sliderItems.map((item, index) => (
                <Link key={`slide-1-${index}`} to={item.link} className="relative flex flex-col items-center gap-2 sm:gap-3 text-center shrink-0 w-[80px] sm:w-[112px] group transition-transform duration-200 hover:scale-110 hover:z-10">
                  <img
                    src={buildUrl(item.cloudId, { width: 200, height: 200 })}
                    alt={item.name}
                    className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] rounded-full object-cover border-2 border-black shadow-sm group-hover:shadow-lg transition-all duration-200"
                    loading="lazy"
                  />
                  <span className="text-[10px] sm:text-[12.5px] font-semibold text-gray-700 leading-tight group-hover:text-[#0d1b2a] transition-colors">{item.name}</span>
                </Link>
              ))}
              {/* Second Set of Items (for seamless infinite loop) */}
              {sliderItems.map((item, index) => (
                <Link key={`slide-2-${index}`} to={item.link} className="relative flex flex-col items-center gap-2 sm:gap-3 text-center shrink-0 w-[80px] sm:w-[112px] group transition-transform duration-200 hover:scale-110 hover:z-10">
                  <img
                    src={buildUrl(item.cloudId, { width: 200, height: 200 })}
                    alt={item.name}
                    className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] rounded-full object-cover border-2 border-black shadow-sm group-hover:shadow-lg transition-all duration-200"
                    loading="lazy"
                  />
                  <span className="text-[10px] sm:text-[12.5px] font-semibold text-gray-700 leading-tight group-hover:text-[#0d1b2a] transition-colors">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── MAIN HERO BANNER ── */}
        <div
          className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[480px] bg-no-repeat flex flex-col justify-center py-8 sm:py-10 md:py-12 px-4 sm:px-5 md:px-0"
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
              <h1 className="text-white font-heading font-extrabold text-[1.5rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[4rem] leading-[1.12] mb-2 sm:mb-3 tracking-tight">
                Wholesale Shop<br />
                Near You in<br />
                <span className="text-[#E87C2B]">Nashik</span>
              </h1>

              {/* Accent underline */}
              <div className="w-[56px] h-[3px] bg-accent rounded-full mb-4 md:mb-6"></div>

              {/* Subheading */}
              <p className="text-white/85 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8 font-sans font-medium tracking-wide">
                All Products Under One Roof
              </p>

              {/* Buttons — stack on very small, row on sm+ */}
              <div className="flex flex-row gap-2.5 sm:gap-3 sm:flex-row">
                <a
                  href={`tel:${contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#0d1b2a] hover:bg-[#1e3a5f] text-white font-bold text-[0.78rem] sm:text-[0.88rem] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 transition-all duration-150 hover:-translate-y-[1px]"
                >
                  Call Now
                </a>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 border border-white/60 bg-transparent hover:bg-white/10 text-white font-bold text-[0.78rem] sm:text-[0.88rem] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-150"
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
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg h-full min-h-[200px] sm:min-h-[300px]">
            <img
              src="https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/bhavia-plastic-wholesale-shop-v2.jpg"
              alt="Bhavia Plastic wholesale store in Nashik"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
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
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link to="/products" className="btn btn-outline-dark btn-lg">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="section bg-bg-section/40">
        <div className="container">
          <div className="section-header center max-w-xl mx-auto mb-8 sm:mb-12">
            <div className="section-label">Who We Serve</div>
            <h2 className="mt-2">Wholesale &amp; Retail for Every Need</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {[
              { 
                img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&h=420&q=80',
                title: 'Hotels & Restaurants',
                desc: 'Bulk disposable cups, containers, napkins, and cleaning supplies for your daily food operations.',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 9h2M13 9h2M9 13h2M13 13h2M9 17h2M13 17h2"/></svg>
              },
              { 
                img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&h=420&q=80',
                title: 'Caterers',
                desc: 'Premium serving plates, bowls, cups, and elegant disposables for events and parties at wholesale rates.',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4v-1"/><path d="M19 14c0-3.87-3.13-7-7-7S5 10.13 5 14"/><path d="M3 14h18"/><path d="M4 14v2h16v-2"/></svg>
              },
              { 
                img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&h=420&q=80',
                title: 'Corporate Offices',
                desc: 'Monthly contracts for tea cups, water glasses, tissue papers, and essential cleaning supplies.',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
              },
              { 
                img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&h=420&q=80',
                title: 'Hospitals & Clinics',
                desc: 'Hygiene supplies, garbage bags, toilet rolls, face masks, and sanitization products.',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v8M8 12h8"/></svg>
              },
              { 
                img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&h=420&q=80',
                title: 'Event Planners',
                desc: 'Themed disposables, festival packaging, gift boxes, decorative serving bowls, and custom boxes.',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              },
              { 
                img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&h=420&q=80',
                title: 'Home Customers',
                desc: 'Everyday household essentials, kitchen duster, garbage bags, candles, and storage boxes.',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
              },
            ].map((s) => (
              <div 
                key={s.title} 
                className="relative overflow-hidden rounded-2xl sm:rounded-[24px] flex flex-col bg-[#2B3822] h-[220px] sm:h-[300px] group cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Image Section */}
                <div className="w-full h-[55%] relative overflow-hidden">
                  <img 
                    src={s.img} 
                    alt={s.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Top Left Icon Badge */}
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-[#2B3822] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 border-white/90 shadow-sm z-10">
                    {s.icon}
                  </div>
                  
                  {/* Top Right Pill */}
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white text-[#2B3822] text-[0.55rem] sm:text-[0.65rem] font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm z-10">
                    Trusted Partner
                  </div>
                </div>
                
                {/* Text Section */}
                <div className="w-full h-[45%] px-3 sm:px-5 py-3 sm:py-4 flex items-center justify-between">
                  <div className="flex-1 pr-4 text-left">
                    <h4 className="font-heading font-bold text-white text-[0.82rem] sm:text-[1rem] leading-tight mb-1 sm:mb-1.5 truncate">{s.title}</h4>
                    <p className="text-[0.62rem] sm:text-[0.7rem] text-white/70 leading-snug line-clamp-2 sm:line-clamp-3">{s.desc}</p>
                  </div>
                  
                  {/* Arrow Button */}
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-white/30">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
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
          </div>

          {/* 4. Dynamic Categories */}
          {categories.map((cat) => {
              const catProducts = products.filter((p) => p.category === cat.id);
              if (catProducts.length === 0) return null;

              return (
                <div key={cat.id}>
                  <h3 className="font-heading font-bold text-primary text-xl mb-5">
                    {cat.name}
                  </h3>
                  <HorizontalScrollContainer>
                    {catProducts.map((p) => (
                      <div key={p.id} className="w-[160px] sm:w-[260px] shrink-0 snap-start">
                        <ProductCard product={p} />
                      </div>
                    ))}
                  </HorizontalScrollContainer>
                </div>
              );
            })}
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
