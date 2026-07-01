import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { contact } from '../data/contact';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">BP</div>
              <div>
                <div className="footer__logo-name">Bhavia Plastic</div>
                <div className="footer__logo-tagline">Nashik</div>
              </div>
            </div>
            <p className="footer__desc">
              Established in 2017, Bhavia Plastic is Nashik's trusted wholesale &amp; retail
              supplier of disposable products, packaging materials, and household essentials.
            </p>
            <div className="footer__social">
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="footer__social-btn footer__social-btn--wa" aria-label="WhatsApp">💬</a>
              <a href={`tel:${contact.phone}`} className="footer__social-btn footer__social-btn--call" aria-label="Call">📞</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer__col">
            <h4>Product Categories</h4>
            <ul>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/products/${cat.id}`}>{cat.icon} {cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4>Contact Us</h4>
            <ul className="footer__contact-list">
              <li>
                <span className="footer__contact-icon">📍</span>
                <span>{contact.address}</span>
              </li>
              <li>
                <span className="footer__contact-icon">📞</span>
                <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '2px' }}>
                  {contact.phones.map((p, idx) => (
                    <a key={idx} href={`tel:${p.value}`} style={{ display: 'block' }}>
                      {p.display}
                    </a>
                  ))}
                </div>
              </li>
              <li>
                <span className="footer__contact-icon">💬</span>
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">{contact.whatsappDisplay}</a>
              </li>
              <li>
                <span className="footer__contact-icon">✉️</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <span className="footer__contact-icon">🕐</span>
                <div>
                  <div>{contact.hours.weekdays}</div>
                  <div>{contact.hours.sunday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} Bhavia Plastic, Nashik. All rights reserved.</span>
          <span>Wholesale &amp; Retail Disposable Products</span>
        </div>
      </div>
    </footer>
  );
}
