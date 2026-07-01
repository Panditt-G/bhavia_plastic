import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { categories } from '../data/categories';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" onClick={closeMenu}>
            <div className="navbar__logo-icon">BP</div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Bhavia Plastic</span>
              <span className="navbar__logo-tagline">Nashik</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar__links">
            <li><NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
            <li className="navbar__dropdown">
              <NavLink to="/products" className={({isActive}) => isActive ? 'active' : ''}>
                Products <span className="navbar__chevron">▾</span>
              </NavLink>
              <div className="navbar__dropdown-menu">
                {categories.map((cat) => (
                  <Link key={cat.id} to={`/products/${cat.id}`} className="navbar__dropdown-item">
                    <span className="navbar__dropdown-icon">{cat.icon}</span>
                    {cat.name}
                  </Link>
                ))}
              </div>
            </li>
            <li><NavLink to="/gallery" className={({isActive}) => isActive ? 'active' : ''}>Gallery</NavLink></li>
            <li><NavLink to="/faqs" className={({isActive}) => isActive ? 'active' : ''}>FAQs</NavLink></li>
            <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
          </ul>

          {/* Actions */}
          <div className="navbar__actions">
            <button
              className="navbar__search-btn"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              🔍
            </button>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-sm navbar__whatsapp">
              💬 WhatsApp
            </a>
            <button
              className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="navbar__search-bar">
            <form onSubmit={handleSearch} className="container">
              <input
                ref={searchRef}
                type="text"
                placeholder="Search products, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit">Search</button>
              <button type="button" className="navbar__search-close" onClick={() => setSearchOpen(false)}>✕</button>
            </form>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`}>
        <ul>
          <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
          <li><NavLink to="/products" onClick={closeMenu}>All Products</NavLink></li>
          {categories.map((cat) => (
            <li key={cat.id} className="navbar__mobile-sub">
              <NavLink to={`/products/${cat.id}`} onClick={closeMenu}>
                {cat.icon} {cat.name}
              </NavLink>
            </li>
          ))}
          <li><NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink></li>
          <li><NavLink to="/faqs" onClick={closeMenu}>FAQs</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
        </ul>
        <div className="navbar__mobile-cta">
          <a href="tel:+91XXXXXXXXXX" className="btn btn-primary btn-lg">📞 Call Now</a>
          <a href="https://wa.me/91XXXXXXXXXX" className="btn btn-whatsapp btn-lg" target="_blank" rel="noreferrer">💬 WhatsApp</a>
        </div>
      </div>
      {menuOpen && <div className="navbar__overlay" onClick={closeMenu} />}
    </>
  );
}
