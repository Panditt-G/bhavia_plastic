import { Link } from 'react-router-dom';
import { buildUrl } from '../cloudinary';
import { categories } from '../data/categories';
import { brands } from '../data/brands';
import { faqs } from '../data/faqs';
import { contact } from '../data/contact';
import CategoryCard from '../components/CategoryCard';
import { useState } from 'react';

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
            <div className="flex gap-8 animate-marquee w-max">
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
                  📞 Call Now
                </a>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 border border-white/60 bg-transparent hover:bg-white/10 text-white font-bold text-[0.88rem] px-6 py-3 rounded-full transition-all duration-150"
                >
                  🛍️ Explore Products
                </Link>
              </div>
            </div>

            {/* Bottom Features Row — hidden on mobile, visible md+ */}
            <div className="hidden md:grid mt-10 border-t border-white/10 pt-6 grid-cols-4 gap-4 max-w-3xl w-full">
              {[
                { icon: '📦', title: 'Wide Range', sub: 'of Products' },
                { icon: '🛡️', title: 'Quality Assured', sub: 'Best for Business' },
                { icon: '🚚', title: 'Fast Delivery', sub: 'On-time Service' },
                { icon: '📞', title: 'Customer Support', sub: "We're Here to Help" },
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
            <div className="absolute bottom-6 left-6 bg-primary text-white p-4 md:p-5 rounded-xl shadow-xl flex flex-col items-center leading-tight">
              <span className="font-heading font-extrabold text-2xl md:text-3xl text-accent">9+</span>
              <span className="text-[0.68rem] font-bold uppercase tracking-wider text-white/80 mt-1">Years of Trust</span>
            </div>
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
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="section-label">Who We Serve</div>
            <h2>Wholesale &amp; Retail for Every Need</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🏨', title: 'Hotels & Restaurants', desc: 'Bulk disposable supply for daily operations' },
              { icon: '🍽️', title: 'Caterers', desc: 'Event and function supply at wholesale rates' },
              { icon: '🏢', title: 'Corporate Offices', desc: 'Monthly supply contracts for offices' },
              { icon: '🏥', title: 'Hospitals & Clinics', desc: 'Hygiene and disposable product supply' },
              { icon: '🎊', title: 'Event Planners', desc: 'Large-scale event disposable packages' },
              { icon: '🏠', title: 'Home Customers', desc: 'Retail packs for everyday household needs' },
            ].map((s) => (
              <div key={s.title} className="bg-bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-center flex flex-col items-center gap-3">
                <div className="text-4xl filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]">{s.icon}</div>
                <h4 className="font-heading font-bold text-primary text-base leading-tight">{s.title}</h4>
                <p className="text-[0.88rem] text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <div className="section-label">Why Choose Us</div>
            <h2>The Bhavia Plastic Advantage</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow duration-200 text-center flex flex-col items-center gap-2.5">
                <div className="text-3xl">{w.icon}</div>
                <h4 className="font-heading font-bold text-primary text-sm uppercase tracking-wider">{w.title}</h4>
                <p className="text-[0.8rem] text-muted leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
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
            <a href={`tel:${contact.phone}`} className="btn btn-primary btn-lg">📞 Call Now</a>
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-lg">💬 WhatsApp Us</a>
            <Link to="/contact" className="btn btn-outline btn-lg">Send Inquiry →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
