import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { contact } from '../data/contact';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr_1.5fr] gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-[44px] h-[44px] bg-accent rounded-md flex items-center justify-center font-heading font-extrabold text-[0.95rem] text-primary shrink-0">BP</div>
              <div>
                <div className="font-heading font-bold text-base text-white leading-tight">Bhavia Plastic</div>
                <div className="text-[0.65rem] text-accent tracking-widest uppercase">Nashik</div>
              </div>
            </div>
            <p className="text-white/55 text-[0.87rem] leading-relaxed mb-6">
              Established in 2017, Bhavia Plastic is Nashik's trusted wholesale &amp; retail
              supplier of disposable products, packaging materials, and household essentials.
            </p>
            <div className="flex gap-2">
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-md flex items-center justify-center text-[1.1rem] transition-all duration-150 opacity-80 hover:opacity-100 hover:-translate-y-[2px] bg-whatsapp" aria-label="WhatsApp">💬</a>
              <a href={`tel:${contact.phone}`} className="w-10 h-10 rounded-md flex items-center justify-center text-[1.1rem] transition-all duration-150 opacity-80 hover:opacity-100 hover:-translate-y-[2px] bg-accent" aria-label="Call">📞</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[0.9rem] font-bold uppercase tracking-wider mb-6 pb-2 border-b-2 border-accent inline-block">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/" className="text-white/55 text-[0.87rem] transition-colors duration-150 hover:text-accent flex items-center gap-1">Home</Link></li>
              <li><Link to="/about" className="text-white/55 text-[0.87rem] transition-colors duration-150 hover:text-accent flex items-center gap-1">About Us</Link></li>
              <li><Link to="/products" className="text-white/55 text-[0.87rem] transition-colors duration-150 hover:text-accent flex items-center gap-1">All Products</Link></li>
              <li><Link to="/gallery" className="text-white/55 text-[0.87rem] transition-colors duration-150 hover:text-accent flex items-center gap-1">Gallery</Link></li>
              <li><Link to="/faqs" className="text-white/55 text-[0.87rem] transition-colors duration-150 hover:text-accent flex items-center gap-1">FAQs</Link></li>
              <li><Link to="/contact" className="text-white/55 text-[0.87rem] transition-colors duration-150 hover:text-accent flex items-center gap-1">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-[0.9rem] font-bold uppercase tracking-wider mb-6 pb-2 border-b-2 border-accent inline-block">Product Categories</h4>
            <ul className="flex flex-col gap-2.5">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/products/${cat.id}`} className="text-white/55 text-[0.87rem] transition-colors duration-150 hover:text-accent flex items-center gap-1">{cat.icon} {cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-[0.9rem] font-bold uppercase tracking-wider mb-6 pb-2 border-b-2 border-accent inline-block">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <span className="text-base mt-0.5 shrink-0">📍</span>
                <span className="text-white/55 text-[0.87rem] leading-normal">{contact.address}</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-base mt-0.5 shrink-0">📞</span>
                <div className="inline-flex flex-col gap-[2px]">
                  {contact.phones.map((p, idx) => (
                    <a key={idx} href={`tel:${p.value}`} className="block text-white/55 text-[0.87rem] leading-normal transition-colors duration-150 hover:text-accent">
                      {p.display}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-base mt-0.5 shrink-0">💬</span>
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="text-white/55 text-[0.87rem] leading-normal transition-colors duration-150 hover:text-accent">{contact.whatsappDisplay}</a>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-base mt-0.5 shrink-0">✉️</span>
                <a href={`mailto:${contact.email}`} className="text-white/55 text-[0.87rem] leading-normal transition-colors duration-150 hover:text-accent">{contact.email}</a>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-base mt-0.5 shrink-0">🕐</span>
                <div className="text-white/55 text-[0.87rem] leading-normal">
                  <div>{contact.hours.weekdays}</div>
                  <div>{contact.hours.sunday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap text-[0.8rem] text-white/35 text-center md:text-left">
          <span>© {year} Bhavia Plastic, Nashik. All rights reserved.</span>
          <span>Wholesale &amp; Retail Disposable Products</span>
        </div>
      </div>
    </footer>
  );
}
