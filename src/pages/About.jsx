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
              Today, we supply to over 1,000 satisfied customers, from individual households to
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
              { 
                icon: (
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                ),
                t: 'Competitive Pricing', 
                d: 'We offer the best market rates for both retail and wholesale customers. Our bulk pricing ensures maximum value.' 
              },
              { 
                icon: (
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                  </svg>
                ),
                t: 'Bulk Orders', 
                d: 'Handle large quantity orders for hotels, caterers, events, and corporate clients with quick turnaround.' 
              },
              { 
                icon: (
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>
                  </svg>
                ),
                t: 'Fast Delivery', 
                d: 'Delivery available within 5 KM radius of our Nashik store for large orders.' 
              },
              { 
                icon: (
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                ),
                t: 'Quality Assured', 
                d: 'All products are quality-checked and sourced from trusted manufacturers and brands.' 
              },
              { 
                icon: (
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                ),
                t: 'Customer First', 
                d: 'We prioritize customer satisfaction with personalized service and after-sales support.' 
              },
              { 
                icon: (
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011-1v5m-4 0h4"/>
                  </svg>
                ),
                t: 'Large Variety', 
                d: 'Over 500 products across 9 categories, everything under one roof.' 
              },
            ].map((h) => (
              <div key={h.t} className="bg-bg-card rounded-xl p-6 border border-border flex flex-col gap-2.5 hover:shadow-md transition-shadow duration-200">
                <div>{h.icon}</div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&h=420&q=80',
                t: 'Hotels & Restaurants', 
                d: 'Daily disposable supply for dining operations' 
              },
              { 
                img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&h=420&q=80',
                t: 'Caterers', 
                d: 'Function and wedding catering supplies at wholesale' 
              },
              { 
                img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&h=420&q=80',
                t: 'Corporate Offices', 
                d: 'Monthly cleaning and disposable contracts' 
              },
              { 
                img: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&h=420&q=80',
                t: 'Hospitals & Clinics', 
                d: 'Hygienic disposable and cleaning supplies' 
              },
              { 
                img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&h=420&q=80',
                t: 'Event Planners', 
                d: 'Large-scale event disposable packages' 
              },
              { 
                img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&h=420&q=80',
                t: 'Retail Customers', 
                d: 'Individual packs for everyday home use' 
              },
            ].map((s) => (
              <div 
                key={s.t} 
                className="relative overflow-hidden rounded-[24px] h-[320px] shadow-sm group cursor-pointer border border-border flex flex-col justify-end"
              >
                {/* Background Image */}
                <img 
                  src={s.img} 
                  alt={s.t} 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e17] via-[#060e17]/35 to-transparent transition-opacity duration-300 group-hover:via-[#060e17]/45" />
                
                {/* Content Overlay */}
                <div className="relative p-6 z-10 flex flex-col gap-1.5 text-left transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-heading font-bold text-white text-lg leading-tight md:text-xl">{s.t}</h4>
                  <p className="text-[0.82rem] text-white/70 leading-relaxed opacity-0 max-h-[0px] overflow-hidden group-hover:opacity-100 group-hover:max-h-[80px] transition-all duration-300">
                    {s.d}
                  </p>
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
                <a href={`tel:${contact.phone}`} className="btn btn-primary btn-lg">Call Now</a>
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-lg">WhatsApp</a>
                <Link to="/contact" className="btn btn-outline-dark btn-lg">Send Inquiry →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
