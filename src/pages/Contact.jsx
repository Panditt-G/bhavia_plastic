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
                <div className="text-primary mt-1 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
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
                <div className="text-whatsapp mt-1 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[0.72rem] font-bold text-muted uppercase tracking-wider">WhatsApp</div>
                  <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="block text-primary font-semibold text-sm mt-1 transition-colors hover:text-accent-dark">{contact.whatsappDisplay}</a>
                </div>
              </div>
              <div className="bg-bg-section p-5 rounded-xl border border-border flex gap-4 hover:shadow-sm transition-shadow duration-200">
                <div className="text-primary mt-1 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="text-[0.72rem] font-bold text-muted uppercase tracking-wider">Email</div>
                  <a href={`mailto:${contact.email}`} className="block text-primary font-semibold text-sm mt-1 transition-colors hover:text-accent-dark">{contact.email}</a>
                </div>
              </div>
              <div className="bg-bg-section p-5 rounded-xl border border-border flex gap-4 hover:shadow-sm transition-shadow duration-200">
                <div className="text-primary mt-1 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-[0.72rem] font-bold text-muted uppercase tracking-wider">Address</div>
                  <div className="text-primary font-semibold text-sm mt-1 leading-normal">{contact.address}</div>
                </div>
              </div>
              <div className="bg-bg-section p-5 rounded-xl border border-border flex gap-4 hover:shadow-sm transition-shadow duration-200 sm:col-span-2">
                <div className="text-primary mt-1 shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
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
                  Send via WhatsApp
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
