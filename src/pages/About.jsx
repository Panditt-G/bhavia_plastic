import { Link } from 'react-router-dom';
import { contact } from '../data/contact';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Learn about Bhavia Plastic, Nashik's leading wholesale and retail supplier of disposable products since 2017." />


      {/* Story Section */}
      <section className="pt-4 sm:pt-8 md:pt-10 pb-10 sm:pb-16 md:pb-24">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/images/bhavia-plastic-wholesale-shop-nashik.jpg"
              alt="Bhavia Plastic wholesale and retail shop front in Nashik"
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">9 Years of Serving Nashik with Quality Products</h1>
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
            <div className="grid grid-cols-2 gap-3 sm:gap-6 mt-4 sm:mt-6 w-full">
              {[
                { n: '2017', l: 'Established' },
                { n: '9+', l: 'Years Experience' },
                { n: '500+', l: 'Products' },
                { n: '1000+', l: 'Customers' },
              ].map((s) => (
                <div key={s.l} className="bg-bg-section p-3 sm:p-5 rounded-xl border border-border text-center">
                  <div className="font-heading font-extrabold text-xl sm:text-2xl text-accent leading-none">{s.n}</div>
                  <div className="text-[0.65rem] sm:text-[0.75rem] font-bold text-primary-light uppercase tracking-wider mt-1 sm:mt-1.5">{s.l}</div>
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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
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
                d: 'A wide range of products across 8 categories, everything under one roof.' 
              },
            ].map((h) => (
              <div key={h.t} className="bg-bg-card rounded-xl p-4 sm:p-6 border border-border flex flex-col gap-2 sm:gap-2.5 hover:shadow-md transition-shadow duration-200">
                <div>{h.icon}</div>
                <h4 className="font-heading font-bold text-primary text-[0.85rem] sm:text-base leading-tight">{h.t}</h4>
                <p className="text-[0.78rem] sm:text-[0.85rem] text-muted leading-relaxed">{h.d}</p>
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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {[
              { 
                img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&h=420&q=80',
                t: 'Hotels & Restaurants', 
                d: 'Disposable tableware & packaging solutions for hospitality businesses.',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 9h2M13 9h2M9 13h2M13 13h2M9 17h2M13 17h2"/></svg>
              },
              { 
                img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&h=420&q=80',
                t: 'Caterers', 
                d: 'Reliable disposable products for events, parties & large gatherings.',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4v-1"/><path d="M19 14c0-3.87-3.13-7-7-7S5 10.13 5 14"/><path d="M3 14h18"/><path d="M4 14v2h16v-2"/></svg>
              },
              { 
                img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&h=420&q=80',
                t: 'Corporate Offices', 
                d: 'Hygienic & convenient plastic products for daily office needs.',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
              },
              { 
                img: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&h=420&q=80',
                t: 'Healthcare & Clinics', 
                d: 'Safe, hygienic & disposable products for medical use.',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v8M8 12h8"/></svg>
              },
              { 
                img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&h=420&q=80',
                t: 'Event Planners', 
                d: 'Complete range of disposables for events of all sizes.',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              },
              { 
                img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&h=420&q=80',
                t: 'Retail & Supermarkets', 
                d: 'Packaging & disposable solutions for retail & daily use.',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
              },
            ].map((s) => (
              <div 
                key={s.t} 
                className="relative overflow-hidden rounded-2xl sm:rounded-[24px] flex flex-col bg-[#2B3822] h-[220px] sm:h-[300px] group cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                  {/* Image Section */}
                  <div className="w-full h-[55%] relative overflow-hidden">
                    <img 
                      src={s.img} 
                      alt={s.t} 
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
                    <div className="flex-1 pr-2 sm:pr-4 text-left">
                      <h4 className="font-heading font-bold text-white text-[0.82rem] sm:text-[1rem] leading-tight mb-1 sm:mb-1.5 truncate">{s.t}</h4>
                      <p className="text-[0.62rem] sm:text-[0.7rem] text-white/70 leading-snug line-clamp-2 sm:line-clamp-3">{s.d}</p>
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

      {/* Corporate Orders */}
      <section className="section section-dark">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <div className="section-label">Corporate Supply</div>
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
              <h3 className="!text-primary font-heading font-bold text-xl">Get a Corporate Quote</h3>
              <p className="!text-muted text-sm leading-relaxed">Contact us today for a customized pricing plan for your business.</p>
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
