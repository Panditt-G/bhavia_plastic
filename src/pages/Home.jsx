import { Link } from 'react-router-dom';
import { buildUrl } from '../cloudinary';
import { categories } from '../data/categories';
import { brands } from '../data/brands';
import { faqs } from '../data/faqs';
import { contact } from '../data/contact';
import CategoryCard from '../components/CategoryCard';
import './Home.css';
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
  { name: 'Mattress', imgUrl: '/images/slider/mattress.png', link: '/products?search=mattress' },
  { name: 'Food Packaging', imgUrl: '/images/slider/food_packaging.png', link: '/products/food-packaging' },
  { name: 'Mineral Water', imgUrl: '/images/slider/mineral_water.png', link: '/products?search=water' },
  { name: 'Cleaning Chemicals', imgUrl: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=150&h=150&q=80', link: '/products/cleaning-supplies' },
  { name: 'Cleaning Materials', imgUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=150&h=150&q=80', link: '/products/cleaning-supplies' },
  { name: 'Floor Mats', imgUrl: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=150&h=150&q=80', link: '/products/household' },
  { name: 'Door Mats', imgUrl: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=150&h=150&q=80', link: '/products/household' },
  { name: 'Pots', imgUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=150&h=150&q=80', link: '/products/household' },
  { name: 'Ladders', imgUrl: '/images/slider/ladder.png', link: '/products/packaging-materials' },
  { name: 'Fire Equipments', imgUrl: 'https://images.unsplash.com/photo-1618579895757-0b8110cc696a?auto=format&fit=crop&w=150&h=150&q=80', link: '/products/cleaning-supplies' },
  { name: 'Packaging Items', imgUrl: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=150&h=150&q=80', link: '/products/packaging-materials' },
  { name: 'Cups & Glasses', imgUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=150&h=150&q=80', link: '/products/cups-glasses' },
  { name: 'Plates', imgUrl: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=150&h=150&q=80', link: '/products/plates' },
  { name: 'Cutlery', imgUrl: '/images/slider/cutlery.png', link: '/products/cutlery' }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO BLOCK — styled after MD Enterprises
      ══════════════════════════════════════════ */}
      <div className="mdhero">

        {/* ── TOP NAV BAR ── */}
        <div className="mdhero__topbar">
          <div className="mdhero__topbar-inner">
            {/* Logo */}
            <div className="mdhero__logo">
              <div className="mdhero__logo-icon">BP</div>
              <div className="mdhero__logo-text">
                <span className="mdhero__logo-name">BHAVIA PLASTIC</span>
                <span className="mdhero__logo-tagline">NASHIK</span>
              </div>
            </div>

            {/* Nav Links */}
            <nav className="mdhero__nav">
              <Link to="/" className="mdhero__nav-link mdhero__nav-link--active">Home</Link>
              <span className="mdhero__nav-divider">|</span>
              <Link to="/about" className="mdhero__nav-link">About Us</Link>
              <span className="mdhero__nav-divider">|</span>
              <Link to="/contact" className="mdhero__nav-link">Contact Us</Link>
            </nav>

            {/* Right CTA */}
            <div className="mdhero__topbar-right">
              <a href={`tel:${contact.phone}`} className="mdhero__phone">
                <span className="mdhero__phone-icon">📞</span>
                {contact.phoneDisplay}
              </a>
              <Link to="/products" className="mdhero__shopnow">Shop Now</Link>
            </div>
          </div>
        </div>

        {/* ── CATEGORY NAV BAR ── */}
        <div className="mdhero__catbar">
          <div className="mdhero__catbar-inner">
            {categories.map((cat, i) => (
              <Link key={cat.id} to={`/products/${cat.id}`} className="mdhero__catbar-link">
                {cat.name}
                {i < categories.length - 1 && <span className="mdhero__catbar-sep" />}
              </Link>
            ))}
          </div>
        </div>

        {/* ── CATEGORY CIRCLES ROW ── */}
        {/* ── AUTO-SCROLLING PRODUCT SLIDER ── */}
        <div className="mdhero__circles-wrap">
          <div className="mdhero__marquee-container">
            <div className="mdhero__marquee-track">
              {/* First Set of Items */}
              {sliderItems.map((item, index) => (
                <Link key={`slide-1-${index}`} to={item.link} className="mdhero__circle-item">
                  <div className="mdhero__circle-img-wrap">
                    <img
                      src={item.imgUrl}
                      alt={item.name}
                      className="mdhero__circle-img"
                      loading="lazy"
                    />
                  </div>
                  <span className="mdhero__circle-label">{item.name}</span>
                </Link>
              ))}
              {/* Second Set of Items (for seamless infinite loop) */}
              {sliderItems.map((item, index) => (
                <Link key={`slide-2-${index}`} to={item.link} className="mdhero__circle-item">
                  <div className="mdhero__circle-img-wrap">
                    <img
                      src={item.imgUrl}
                      alt={item.name}
                      className="mdhero__circle-img"
                      loading="lazy"
                    />
                  </div>
                  <span className="mdhero__circle-label">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── MAIN HERO BANNER ── */}
        <div className="mdhero__banner">
          {/* Decorative leaf blobs */}
          <div className="mdhero__banner-leaves" aria-hidden="true">
            <div className="mdhero__leaf mdhero__leaf--1">🌿</div>
            <div className="mdhero__leaf mdhero__leaf--2">🍃</div>
            <div className="mdhero__leaf mdhero__leaf--3">🌿</div>
          </div>

          {/* Left – Text Content */}
          <div className="mdhero__banner-text">
            <div className="mdhero__banner-badge">BHAVIA PLASTIC</div>
            <h1 className="mdhero__banner-heading">
              Wholesale Shop<br />
              <span>Near You</span><br />
              in Nashik
            </h1>
            <p className="mdhero__banner-sub">
              All Products Under One Roof
            </p>
            <div className="mdhero__banner-actions">
              <a href={`tel:${contact.phone}`} className="mdhero__banner-btn mdhero__banner-btn--primary">📞 Call Now</a>
              <Link to="/products" className="mdhero__banner-btn mdhero__banner-btn--outline">🛍️ Explore</Link>
            </div>
          </div>
        </div>

      </div>
      {/* END HERO BLOCK */}


      {/* ── ABOUT SNIPPET ── */}
      <section className="section about-snippet">
        <div className="container about-snippet__inner">
          <div className="about-snippet__img-wrap">
            <img
              src={buildUrl('bhavia/about_store', { width: 600 })}
              alt="Bhavia Plastic store in Nashik"
              className="about-snippet__img"
              loading="lazy"
            />
            <div className="about-snippet__badge">
              <span className="about-snippet__badge-num">9+</span>
              <span className="about-snippet__badge-text">Years of Trust</span>
            </div>
          </div>
          <div className="about-snippet__content">
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
            <div className="about-snippet__highlights">
              {['Wholesale & Retail', 'Bulk Orders Welcome', 'Fast Delivery', 'Quality Products', 'Corporate Supply', 'Competitive Pricing'].map((h) => (
                <span key={h} className="about-snippet__chip">✓ {h}</span>
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
          <div className="categories-grid">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/products" className="btn btn-outline-dark btn-lg">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="section serve-section">
        <div className="container">
          <div className="section-header center">
            <div className="section-label">Who We Serve</div>
            <h2>Wholesale &amp; Retail for Every Need</h2>
          </div>
          <div className="serve-grid">
            {[
              { icon: '🏨', title: 'Hotels & Restaurants', desc: 'Bulk disposable supply for daily operations' },
              { icon: '🍽️', title: 'Caterers', desc: 'Event and function supply at wholesale rates' },
              { icon: '🏢', title: 'Corporate Offices', desc: 'Monthly supply contracts for offices' },
              { icon: '🏥', title: 'Hospitals & Clinics', desc: 'Hygiene and disposable product supply' },
              { icon: '🎊', title: 'Event Planners', desc: 'Large-scale event disposable packages' },
              { icon: '🏠', title: 'Home Customers', desc: 'Retail packs for everyday household needs' },
            ].map((s) => (
              <div key={s.title} className="serve-card">
                <div className="serve-card__icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
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
          <div className="grid-4 why-grid">
            {whyUs.map((w) => (
              <div key={w.title} className="why-card">
                <div className="why-card__icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
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
          <div className="brands-grid">
            {brands.map((brand) => (
              <div key={brand.id} className="brand-card">
                <div className="brand-card__logo" style={{ background: brand.color }}>
                  {brand.initial}
                </div>
                <div className="brand-card__name">{brand.name}</div>
                <div className="brand-card__role">{brand.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SNIPPET ── */}
      <section className="section section-alt">
        <div className="container faq-section">
          <div className="section-header center">
            <div className="section-label">FAQs</div>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.slice(0, 5).map((faq) => (
              <div key={faq.id} className={`faq-item${openFaq === faq.id ? ' open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}>
                  <span>{faq.question}</span>
                  <span className="faq-chevron">{openFaq === faq.id ? '▲' : '▼'}</span>
                </button>
                {openFaq === faq.id && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <Link to="/faqs" className="btn btn-outline-dark">View All FAQs →</Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="section section-dark cta-section">
        <div className="container cta-section__inner">
          <div>
            <div className="section-label" style={{ color: 'var(--color-accent)' }}>Get In Touch</div>
            <h2>Ready to Place a Bulk Order?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>
              Contact us for wholesale pricing, bulk quotes, and corporate supply contracts.
              We respond within 24 hours.
            </p>
          </div>
          <div className="cta-section__actions">
            <a href={`tel:${contact.phone}`} className="btn btn-primary btn-lg">📞 Call Now</a>
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-lg">💬 WhatsApp Us</a>
            <Link to="/contact" className="btn btn-outline btn-lg">Send Inquiry →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
