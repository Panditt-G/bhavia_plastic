import { Link } from 'react-router-dom';
import { buildUrl } from '../cloudinary';
import { contact } from '../data/contact';
import './About.css';

export default function About() {
  document.title = 'About Us | Bhavia Plastic Nashik';

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="section-label">Who We Are</div>
          <h1>About Bhavia Plastic</h1>
          <p>Nashik's trusted wholesale &amp; retail supplier since 2017</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="section">
        <div className="container about-story">
          <div className="about-story__img">
            <img
              src={buildUrl('bhavia/about_store', { width: 600 })}
              alt="Bhavia Plastic store"
              loading="lazy"
            />
            <div className="about-story__img-overlay">
              <div className="about-story__year">Est. 2017</div>
              <div className="about-story__city">Nashik, Maharashtra</div>
            </div>
          </div>
          <div className="about-story__content">
            <div className="section-label">Our Story</div>
            <h2>9 Years of Serving Nashik with Quality Products</h2>
            <p>
              <strong>Bhavia Plastic</strong> was founded in 2017 with a simple mission: to provide
              Nashik with a one-stop destination for high-quality disposable products at competitive prices.
              Over the past 9 years, we have grown from a small retail shop to Nashik's most trusted
              wholesale and retail supplier.
            </p>
            <p>
              Today, we supply to over 1,000 satisfied customers — from individual households to
              major hotels, catering businesses, corporate offices, hospitals, and event management companies.
            </p>
            <div className="about-story__stats">
              {[
                { n: '2017', l: 'Established' },
                { n: '9+', l: 'Years Experience' },
                { n: '500+', l: 'Products' },
                { n: '1000+', l: 'Customers' },
              ].map((s) => (
                <div key={s.l} className="about-story__stat">
                  <div className="about-story__stat-num">{s.n}</div>
                  <div className="about-story__stat-label">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <div className="section-label">Our Strengths</div>
            <h2>Why Nashik Trusts Us</h2>
          </div>
          <div className="about-highlights">
            {[
              { icon: '💰', t: 'Competitive Pricing', d: 'We offer the best market rates for both retail and wholesale customers. Our bulk pricing ensures maximum value.' },
              { icon: '📦', t: 'Bulk Orders', d: 'Handle large quantity orders for hotels, caterers, events, and corporate clients with quick turnaround.' },
              { icon: '🚚', t: 'Fast Delivery', d: 'Delivery available within 5 KM radius of our Nashik store for large orders.' },
              { icon: '✅', t: 'Quality Assured', d: 'All products are quality-checked and sourced from trusted manufacturers and brands.' },
              { icon: '🤝', t: 'Customer First', d: 'We prioritize customer satisfaction with personalized service and after-sales support.' },
              { icon: '🏪', t: 'Large Variety', d: 'Over 500 products across 9 categories — everything under one roof.' },
            ].map((h) => (
              <div key={h.t} className="about-highlight-card">
                <div className="about-highlight-icon">{h.icon}</div>
                <h4>{h.t}</h4>
                <p>{h.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="section-label">Our Customers</div>
            <h2>Wholesale &amp; Retail for Every Customer</h2>
            <p>We serve a diverse range of customers across Nashik with bulk and retail options.</p>
          </div>
          <div className="serve-types">
            {[
              { icon: '🏨', t: 'Hotels & Restaurants', d: 'Daily disposable supply for dining operations' },
              { icon: '🍽️', t: 'Caterers', d: 'Function and wedding catering supplies at wholesale' },
              { icon: '🏢', t: 'Corporate Offices', d: 'Monthly cleaning and disposable contracts' },
              { icon: '🏥', t: 'Hospitals & Clinics', d: 'Hygienic disposable and cleaning supplies' },
              { icon: '🎊', t: 'Event Planners', d: 'Large-scale event disposable packages' },
              { icon: '🏠', t: 'Retail Customers', d: 'Individual packs for everyday home use' },
              { icon: '🏫', t: 'Schools & Institutions', d: 'Bulk disposable supply for canteens' },
              { icon: '🏗️', t: 'Industries', d: 'Industrial packaging and cleaning supplies' },
            ].map((s) => (
              <div key={s.t} className="serve-type-card">
                <span className="serve-type-icon">{s.icon}</span>
                <div>
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Orders */}
      <section className="section section-dark">
        <div className="container corporate-section">
          <div>
            <div className="section-label">Corporate Supply</div>
            <h2>Corporate &amp; Bulk Order Program</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>
              We offer special monthly supply contracts for businesses, institutions, and corporate offices.
              Get dedicated pricing, priority delivery, and personalized account management.
            </p>
            <ul className="corporate-list">
              {['Disposable Products', 'Cleaning Chemicals', 'Cleaning Accessories', 'Packaging Materials', 'Monthly Supply Contracts', 'Customized Pricing'].map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
          <div className="corporate-cta">
            <div className="corporate-cta__card">
              <h3>Get a Corporate Quote</h3>
              <p>Contact us today for a customized pricing plan for your business.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                <a href={`tel:${contact.phone}`} className="btn btn-primary btn-lg">📞 Call Now</a>
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-lg">💬 WhatsApp</a>
                <Link to="/contact" className="btn btn-outline btn-lg">Send Inquiry →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
