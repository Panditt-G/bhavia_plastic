import { useState } from 'react';
import { contact } from '../data/contact';

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
      {/* Page Header */}
      <div className="bg-primary text-white py-16 md:py-20 text-center">
        <div className="container">
          <div className="section-label">Get In Touch</div>
          <h1 className="text-white mt-2">Contact Bhavia Plastic</h1>
          <p className="text-white/80 mt-2">Reach us by phone, WhatsApp, or fill the form below. We respond within 24 hours.</p>
        </div>
      </div>

      <section className="section">
        <div className="container grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">
          {/* Info Column */}
          <div className="flex flex-col gap-6">
            <h2>Our Contact Details</h2>
            <p>Visit us in Nashik or reach out through any of the channels below.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-bg-section p-5 rounded-xl border border-border flex gap-4 hover:shadow-sm transition-shadow duration-200">
                <div className="text-2xl mt-0.5 shrink-0">📞</div>
                <div>
                  <div className="text-[0.72rem] font-bold text-muted uppercase tracking-wider">Phone</div>
                  <div className="flex flex-col gap-1 mt-1">
                    {contact.phones.map((p, idx) => (
                      <a key={idx} href={`tel:${p.value}`} className="text-primary font-semibold text-sm transition-colors hover:text-accent-dark">
                        {p.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-xl border flex gap-4 hover:shadow-sm transition-shadow duration-200 bg-whatsapp/5 border-whatsapp/20">
                <div className="text-2xl mt-0.5 shrink-0">💬</div>
                <div>
                  <div className="text-[0.72rem] font-bold text-muted uppercase tracking-wider">WhatsApp</div>
                  <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="block text-primary font-semibold text-sm mt-1 transition-colors hover:text-accent-dark">{contact.whatsappDisplay}</a>
                </div>
              </div>
              <div className="bg-bg-section p-5 rounded-xl border border-border flex gap-4 hover:shadow-sm transition-shadow duration-200">
                <div className="text-2xl mt-0.5 shrink-0">✉️</div>
                <div>
                  <div className="text-[0.72rem] font-bold text-muted uppercase tracking-wider">Email</div>
                  <a href={`mailto:${contact.email}`} className="block text-primary font-semibold text-sm mt-1 transition-colors hover:text-accent-dark">{contact.email}</a>
                </div>
              </div>
              <div className="bg-bg-section p-5 rounded-xl border border-border flex gap-4 hover:shadow-sm transition-shadow duration-200">
                <div className="text-2xl mt-0.5 shrink-0">📍</div>
                <div>
                  <div className="text-[0.72rem] font-bold text-muted uppercase tracking-wider">Address</div>
                  <div className="text-primary font-semibold text-sm mt-1 leading-normal">{contact.address}</div>
                </div>
              </div>
              <div className="bg-bg-section p-5 rounded-xl border border-border flex gap-4 hover:shadow-sm transition-shadow duration-200 sm:col-span-2">
                <div className="text-2xl mt-0.5 shrink-0">🕐</div>
                <div>
                  <div className="text-[0.72rem] font-bold text-muted uppercase tracking-wider">Business Hours</div>
                  <div className="text-primary font-semibold text-sm mt-1 leading-normal">
                    {contact.hours.weekdays}<br />
                    {contact.hours.sunday}
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border shadow-sm mt-4">
              <iframe
                src={contact.mapEmbed}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bhavia Plastic Location"
              />
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-bg-card rounded-2xl p-8 border border-border shadow-sm flex flex-col gap-6">
            <h2>Send an Inquiry</h2>
            <p>Fill out the form below and we'll get back to you via WhatsApp.</p>

            {submitted ? (
              <div className="text-center py-10 flex flex-col items-center gap-4">
                <div className="text-5xl">✅</div>
                <h3 className="font-heading font-bold text-xl">Inquiry Sent!</h3>
                <p className="text-muted text-sm max-w-xs mx-auto">Your inquiry has been sent via WhatsApp. We'll respond within 24 hours.</p>
                <button className="btn btn-outline-dark" onClick={() => setSubmitted(false)}>Send Another Inquiry</button>
              </div>
            ) : (
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-xs text-primary uppercase tracking-wider">Full Name *</label>
                  <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required className="px-4 py-3 rounded-lg border border-border bg-bg font-sans text-sm outline-none transition-colors duration-150 focus:border-primary" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-xs text-primary uppercase tracking-wider">Phone Number *</label>
                    <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required className="px-4 py-3 rounded-lg border border-border bg-bg font-sans text-sm outline-none transition-colors duration-150 focus:border-primary" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-xs text-primary uppercase tracking-wider">Email (optional)</label>
                    <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} className="px-4 py-3 rounded-lg border border-border bg-bg font-sans text-sm outline-none transition-colors duration-150 focus:border-primary" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-xs text-primary uppercase tracking-wider">Product Interest</label>
                  <input type="text" name="product" placeholder="e.g. Thermocol Plates, Garbage Bags…" value={form.product} onChange={handleChange} className="px-4 py-3 rounded-lg border border-border bg-bg font-sans text-sm outline-none transition-colors duration-150 focus:border-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-xs text-primary uppercase tracking-wider">Message *</label>
                  <textarea name="message" rows={5} placeholder="Describe your requirement, quantity, etc." value={form.message} onChange={handleChange} required className="px-4 py-3 rounded-lg border border-border bg-bg font-sans text-sm outline-none transition-colors duration-150 focus:border-primary" />
                </div>
                <button type="submit" className="btn btn-whatsapp btn-lg w-full">
                  💬 Send via WhatsApp
                </button>
                <p className="text-center text-[0.75rem] text-muted">This will open WhatsApp with your message pre-filled.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
