import { useState } from 'react';
import { contact } from '../data/contact';
import './Contact.css';

export default function Contact() {
  document.title = 'Contact Us | Bhavia Plastic Nashik';

  const [form, setForm] = useState({ name: '', phone: '', email: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi Bhavia Plastic! 👋\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProduct Interest: ${form.product}\n\nMessage:\n${form.message}`;
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="section-label">Get In Touch</div>
          <h1>Contact Bhavia Plastic</h1>
          <p>Reach us by phone, WhatsApp, or fill the form below. We respond within 24 hours.</p>
        </div>
      </div>

      <section className="section">
        <div className="container contact-layout">
          {/* Info Column */}
          <div className="contact-info">
            <h2>Our Contact Details</h2>
            <p>Visit us in Nashik or reach out through any of the channels below.</p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card__icon">📞</div>
                <div>
                  <div className="contact-card__label">Phone</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {contact.phones.map((p, idx) => (
                      <a key={idx} href={`tel:${p.value}`} className="contact-card__value" style={{ display: 'block' }}>
                        {p.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="contact-card contact-card--wa">
                <div className="contact-card__icon">💬</div>
                <div>
                  <div className="contact-card__label">WhatsApp</div>
                  <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="contact-card__value">{contact.whatsappDisplay}</a>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card__icon">✉️</div>
                <div>
                  <div className="contact-card__label">Email</div>
                  <a href={`mailto:${contact.email}`} className="contact-card__value">{contact.email}</a>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card__icon">📍</div>
                <div>
                  <div className="contact-card__label">Address</div>
                  <div className="contact-card__value">{contact.address}</div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card__icon">🕐</div>
                <div>
                  <div className="contact-card__label">Business Hours</div>
                  <div className="contact-card__value">
                    {contact.hours.weekdays}<br />
                    {contact.hours.sunday}
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="contact-map">
              <iframe
                src={contact.mapEmbed}
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bhavia Plastic Location"
              />
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-wrap">
            <h2>Send an Inquiry</h2>
            <p>Fill out the form below and we'll get back to you via WhatsApp.</p>

            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__icon">✅</div>
                <h3>Inquiry Sent!</h3>
                <p>Your inquiry has been sent via WhatsApp. We'll respond within 24 hours.</p>
                <button className="btn btn-outline-dark" onClick={() => setSubmitted(false)}>Send Another Inquiry</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Email (optional)</label>
                    <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Product Interest</label>
                  <input type="text" name="product" placeholder="e.g. Thermocol Plates, Garbage Bags…" value={form.product} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" rows={5} placeholder="Describe your requirement, quantity, etc." value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-whatsapp btn-lg" style={{ width: '100%' }}>
                  💬 Send via WhatsApp
                </button>
                <p className="form-note">This will open WhatsApp with your message pre-filled.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
