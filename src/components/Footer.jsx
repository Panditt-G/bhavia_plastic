import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { contact } from '../data/contact';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="py-10 sm:py-16 md:py-24">
        <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr_1.5fr] gap-8 sm:gap-12 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center shrink-0 mb-4">
              <svg
                viewBox="0 0 220 92"
                className="h-9 sm:h-11 w-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* ── Cube icon above the 'i' dot ── */}
                <g transform="translate(148, 2)">
                  <polygon points="10,0 20,5 10,10 0,5" fill="none" stroke="white" strokeWidth="1.2" strokeLinejoin="round"/>
                  <polygon points="0,5 10,10 10,20 0,15" fill="none" stroke="white" strokeWidth="1.2" strokeLinejoin="round"/>
                  <polygon points="10,10 20,5 20,15 10,20" fill="none" stroke="white" strokeWidth="1.2" strokeLinejoin="round"/>
                </g>

                {/* ── "BHAVIA" — row 1 ── */}
                <text
                  x="0"
                  y="44"
                  fontFamily="'Poppins', 'Inter', sans-serif"
                  fontSize="35"
                  fontWeight="900"
                  fill="white"
                  letterSpacing="0"
                >BHAVIA</text>

                {/* ── "PLASTIC" — row 2 ── */}
                <text
                  x="0"
                  y="84"
                  fontFamily="'Poppins', 'Inter', sans-serif"
                  fontSize="35"
                  fontWeight="900"
                  fill="white"
                  letterSpacing="0"
                >PLASTIC</text>
              </svg>
            </Link>
            <p className="text-white/55 text-[0.8rem] sm:text-[0.87rem] leading-relaxed mb-4 sm:mb-6">
              Established in 2017, Bhavia Plastic is Nashik's trusted wholesale &amp; retail
              supplier of disposable products, packaging materials, and household essentials.
            </p>
            <div className="flex gap-2">
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-md flex items-center justify-center transition-all duration-150 opacity-80 hover:opacity-100 hover:-translate-y-[2px] bg-whatsapp text-white" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href={`tel:${contact.phone}`} className="w-10 h-10 rounded-md flex items-center justify-center transition-all duration-150 opacity-80 hover:opacity-100 hover:-translate-y-[2px] bg-accent text-white" aria-label="Call">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[0.9rem] font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/" className="text-white/55 text-[0.87rem] transition-colors duration-150 hover:text-accent flex items-center gap-1">Home</Link></li>
              <li><Link to="/about" className="text-white/55 text-[0.87rem] transition-colors duration-150 hover:text-accent flex items-center gap-1">About Us</Link></li>
              <li><Link to="/products" className="text-white/55 text-[0.87rem] transition-colors duration-150 hover:text-accent flex items-center gap-1">All Products</Link></li>
              <li><Link to="/contact" className="text-white/55 text-[0.87rem] transition-colors duration-150 hover:text-accent flex items-center gap-1">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-[0.9rem] font-bold uppercase tracking-wider mb-6">Product Categories</h4>
            <ul className="flex flex-col gap-2.5">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/products/${cat.id}`} className="text-white/55 text-[0.87rem] transition-colors duration-150 hover:text-accent flex items-center gap-1">{cat.icon} {cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-white text-[0.9rem] font-bold uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <span className="text-white/55 text-[0.87rem] leading-normal">{contact.address}</span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="inline-flex flex-col gap-[2px]">
                  {contact.phones.map((p, idx) => (
                    <a key={idx} href={`tel:${p.value}`} className="block text-white/55 text-[0.87rem] leading-normal transition-colors duration-150 hover:text-accent">
                      {p.display}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="text-white/55 text-[0.87rem] leading-normal transition-colors duration-150 hover:text-accent">{contact.whatsappDisplay}</a>
              </li>
              <li className="flex gap-3 items-start">
                <a href={`mailto:${contact.email}`} className="text-white/55 text-[0.87rem] leading-normal transition-colors duration-150 hover:text-accent">{contact.email}</a>
              </li>
              <li className="flex gap-3 items-start">
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
