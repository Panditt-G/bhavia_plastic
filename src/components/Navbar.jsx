import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { contact } from '../data/contact';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    `text-gray-600 hover:text-[#0d1b2a] font-semibold text-[0.88rem] xl:text-[0.92rem] transition-colors whitespace-nowrap pb-1 ${
      isActive ? 'text-[#0d1b2a] border-b-2 border-[#0d1b2a]' : 'border-b-2 border-transparent'
    }`;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[1000] bg-white h-20 border-b border-gray-100 flex items-center transition-all duration-250 ${
        scrolled ? 'shadow-md bg-white/95 backdrop-blur-md' : ''
      }`}>
        <div className="container flex items-center justify-between gap-4 h-full">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center shrink-0" onClick={closeMenu}>
            <svg
              viewBox="0 0 220 92"
              className="h-12 w-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* ── Cube icon above the 'i' dot ── */}
              <g transform="translate(148, 2)">
                <polygon points="10,0 20,5 10,10 0,5" fill="none" stroke="#0d1b2a" strokeWidth="1.2" strokeLinejoin="round"/>
                <polygon points="0,5 10,10 10,20 0,15" fill="none" stroke="#0d1b2a" strokeWidth="1.2" strokeLinejoin="round"/>
                <polygon points="10,10 20,5 20,15 10,20" fill="none" stroke="#0d1b2a" strokeWidth="1.2" strokeLinejoin="round"/>
              </g>

              {/* ── "BHAVIA" — row 1 ── */}
              <text
                x="0"
                y="44"
                fontFamily="'Poppins', 'Inter', sans-serif"
                fontSize="35"
                fontWeight="900"
                fill="#0d1b2a"
                letterSpacing="0"
              >BHAVIA</text>

              {/* ── "PLASTIC" — row 2 ── */}
              <text
                x="0"
                y="84"
                fontFamily="'Poppins', 'Inter', sans-serif"
                fontSize="35"
                fontWeight="900"
                fill="#0d1b2a"
                letterSpacing="0"
              >PLASTIC</text>
            </svg>
          </Link>

          {/* ── Desktop Nav ── */}
          <ul className="hidden xl:flex items-center gap-4 xl:gap-7 flex-1 justify-center whitespace-nowrap">
            <li>
              <NavLink to="/" end className={navLinkClass}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/products" className={navLinkClass}>Categories</NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
            </li>
          </ul>

          {/* ── Search + CTA + Mobile Toggle ── */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Pill Search Bar */}
            <form onSubmit={handleSearch} className="relative hidden lg:flex items-center max-w-[200px] w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#f4f4f5] border border-gray-200 rounded-full pl-4 pr-10 py-2 text-sm font-sans outline-none focus:border-[#0d1b2a] transition-colors placeholder:text-gray-400 text-primary"
              />
              <button type="submit" className="absolute right-3 text-gray-400 hover:text-[#0d1b2a]" aria-label="Search">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            {/* Call Now Button – navy style */}
            <a
              href={`tel:${contact.phone}`}
              className="hidden md:inline-flex items-center gap-2 bg-[#0d1b2a] text-white font-bold text-[0.88rem] px-5 py-2.5 rounded-full shadow-md transition-all hover:bg-[#1e3a5f] hover:-translate-y-[1px]"
            >
              Call Now
            </a>

            {/* Mobile Hamburger */}
            <button
              className="flex xl:hidden flex-col gap-[5px] bg-transparent p-2 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-[22px] h-[2px] bg-gray-800 rounded-[2px] transition-all duration-250 origin-center ${menuOpen ? 'translate-y-[7px] rotate-45 bg-[#0d1b2a]' : ''}`} />
              <span className={`block w-[22px] h-[2px] bg-gray-800 rounded-[2px] transition-all duration-250 origin-center ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-[22px] h-[2px] bg-gray-800 rounded-[2px] transition-all duration-250 origin-center ${menuOpen ? '-translate-y-[7px] -rotate-45 bg-[#0d1b2a]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`fixed top-20 left-0 right-0 bottom-0 bg-white z-[999] overflow-y-auto transition-transform duration-250 p-6 pb-24 border-t border-gray-100 ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="relative flex items-center w-full mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#f4f4f5] border border-gray-200 rounded-full pl-4 pr-10 py-3 text-sm font-sans outline-none focus:border-[#0d1b2a] transition-colors placeholder:text-gray-400 text-primary"
          />
          <button type="submit" className="absolute right-4 text-gray-400 hover:text-[#0d1b2a]" aria-label="Search">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>

        <ul className="flex flex-col gap-2">
          <li>
            <NavLink to="/" end onClick={closeMenu} className={({ isActive }) =>
              `block px-4 py-3 text-gray-700 text-base font-semibold rounded-lg hover:bg-gray-50 hover:text-[#0d1b2a] ${isActive ? 'bg-slate-50 text-[#0d1b2a] font-bold' : ''}`
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) =>
              `block px-4 py-3 text-gray-700 text-base font-semibold rounded-lg hover:bg-gray-50 hover:text-[#0d1b2a] ${isActive ? 'bg-slate-50 text-[#0d1b2a] font-bold' : ''}`
            }>About Us</NavLink>
          </li>

          <li>
            <NavLink to="/faqs" onClick={closeMenu} className={({ isActive }) =>
              `block px-4 py-3 text-gray-700 text-base font-semibold rounded-lg hover:bg-gray-50 hover:text-[#0d1b2a] ${isActive ? 'bg-slate-50 text-[#0d1b2a] font-bold' : ''}`
            }>FAQs</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) =>
              `block px-4 py-3 text-gray-700 text-base font-semibold rounded-lg hover:bg-gray-50 hover:text-[#0d1b2a] ${isActive ? 'bg-slate-50 text-[#0d1b2a] font-bold' : ''}`
            }>Contact Us</NavLink>
          </li>
        </ul>
        <div className="flex flex-col gap-3 mt-8">
          <a href={`tel:${contact.phone}`} className="flex items-center justify-center gap-2 bg-[#0d1b2a] text-white font-bold py-3.5 rounded-full shadow-md hover:bg-[#1e3a5f]">
            Call Now
          </a>
          <a href={`https://wa.me/${contact.whatsapp}`} className="flex items-center justify-center gap-2 bg-whatsapp text-white font-bold py-3.5 rounded-full shadow-md hover:bg-whatsapp-dark" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
      {menuOpen && <div className="fixed inset-0 bg-black/30 z-[998] top-20" onClick={closeMenu} />}
    </>
  );
}
