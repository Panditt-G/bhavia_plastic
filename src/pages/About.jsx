import { Link } from 'react-router-dom';
import { buildUrl } from '../cloudinary';
import { contact } from '../data/contact';

export default function About() {
  document.title = 'About Us | Bhavia Plastic Nashik';

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary text-white py-16 md:py-20 text-center">
        <div className="container">
          <div className="section-label">Who We Are</div>
          <h1 className="text-white mt-2">About Bhavia Plastic</h1>
          <p className="text-white/80 mt-2">Nashik's trusted wholesale &amp; retail supplier since 2017</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="section">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={buildUrl('bhavia/about_store', { width: 600 })}
              alt="Bhavia Plastic store"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/80 to-transparent p-6 text-white">
              <div className="font-bold text-lg">Est. 2017</div>
              <div className="text-xs text-white/80 uppercase tracking-widest mt-0.5">Nashik, Maharashtra</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start">
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
            <div className="grid grid-cols-2 gap-6 mt-6 w-full">
              {[
                { n: '2017', l: 'Established' },
                { n: '9+', l: 'Years Experience' },
                { n: '500+', l: 'Products' },
                { n: '1000+', l: 'Customers' },
              ].map((s) => (
                <div key={s.l} className="bg-bg-section p-5 rounded-xl border border-border text-center">
                  <div className="font-heading font-extrabold text-2xl text-accent leading-none">{s.n}</div>
                  <div className="text-[0.75rem] font-bold text-primary-light uppercase tracking-wider mt-1.5">{s.l}</div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💰', t: 'Competitive Pricing', d: 'We offer the best market rates for both retail and wholesale customers. Our bulk pricing ensures maximum value.' },
              { icon: '📦', t: 'Bulk Orders', d: 'Handle large quantity orders for hotels, caterers, events, and corporate clients with quick turnaround.' },
              { icon: '🚚', t: 'Fast Delivery', d: 'Delivery available within 5 KM radius of our Nashik store for large orders.' },
              { icon: '✅', t: 'Quality Assured', d: 'All products are quality-checked and sourced from trusted manufacturers and brands.' },
              { icon: '🤝', t: 'Customer First', d: 'We prioritize customer satisfaction with personalized service and after-sales support.' },
              { icon: '🏪', t: 'Large Variety', d: 'Over 500 products across 9 categories — everything under one roof.' },
            ].map((h) => (
              <div key={h.t} className="bg-bg-card rounded-xl p-6 border border-border flex flex-col gap-2.5 hover:shadow-md transition-shadow duration-200">
                <div className="text-3xl">{h.icon}</div>
                <h4 className="font-heading font-bold text-primary text-base leading-tight">{h.t}</h4>
                <p className="text-[0.85rem] text-muted leading-relaxed">{h.d}</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div key={s.t} className="bg-bg-section rounded-xl p-6 border border-border hover:shadow-md transition-shadow duration-200 flex flex-col gap-3">
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <h4 className="font-heading font-bold text-primary text-base leading-tight mb-1">{s.t}</h4>
                  <p className="text-[0.84rem] text-muted leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Orders */}
      <section className="section section-dark">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-label text-accent">Corporate Supply</div>
            <h2>Corporate &amp; Bulk Order Program</h2>
            <p className="text-white/70 mt-4 mb-6">
              We offer special monthly supply contracts for businesses, institutions, and corporate offices.
              Get dedicated pricing, priority delivery, and personalized account management.
            </p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
              {['Disposable Products', 'Cleaning Chemicals', 'Cleaning Accessories', 'Packaging Materials', 'Monthly Supply Contracts', 'Customized Pricing'].map((item) => (
                <li key={item} className="text-sm font-semibold text-white/90">✓ {item}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="bg-white text-primary rounded-2xl p-8 shadow-xl max-w-sm w-full text-center flex flex-col gap-4 border border-border">
              <h3 className="text-primary font-heading font-bold text-xl">Get a Corporate Quote</h3>
              <p className="text-muted text-sm leading-relaxed">Contact us today for a customized pricing plan for your business.</p>
              <div className="flex flex-col gap-3">
                <a href={`tel:${contact.phone}`} className="btn btn-primary btn-lg">📞 Call Now</a>
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-lg">💬 WhatsApp</a>
                <Link to="/contact" className="btn btn-outline-dark btn-lg">Send Inquiry →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
