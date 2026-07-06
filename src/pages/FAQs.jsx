import { useState } from 'react';
import { faqs } from '../data/faqs';
import { contact } from '../data/contact';

export default function FAQs() {
  const [openId, setOpenId] = useState(null);
  const [search, setSearch] = useState('');

  document.title = 'FAQs | Bhavia Plastic Nashik';

  const filtered = search
    ? faqs.filter(
        (f) =>
          f.question.toLowerCase().includes(search.toLowerCase()) ||
          f.answer.toLowerCase().includes(search.toLowerCase())
      )
    : faqs;

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary text-white py-16 md:py-20 text-center">
        <div className="container">
          <div className="section-label">Help Center</div>
          <h1 className="text-white mt-2">Frequently Asked Questions</h1>
          <p className="text-white/80 mt-2">Find quick answers to common questions about Bhavia Plastic.</p>
        </div>
      </div>

      <section className="section">
        <div className="container max-w-3xl mx-auto">
          {/* Search */}
          <div className="flex gap-3 items-center bg-bg-card border border-border rounded-xl px-5 py-4 shadow-sm mb-8">
            <svg className="w-5 h-5 text-muted/80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search FAQs…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border-none outline-none font-sans text-base bg-transparent text-primary placeholder:text-muted/60"
            />
          </div>

          {/* FAQ list */}
          {filtered.length === 0 ? (
            <div className="text-center py-12 flex flex-col items-center gap-3">
              <div className="text-4xl">🤔</div>
              <h3 className="font-heading font-bold text-xl">No results found</h3>
              <p className="text-muted">Try different keywords or contact us directly.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {filtered.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-bg-card rounded-xl border border-border overflow-hidden transition-all duration-200"
                >
                  <button
                    className="w-full flex items-center justify-between p-5 text-left font-heading font-semibold text-primary text-[0.92rem] md:text-base hover:bg-bg-section transition-colors"
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    aria-expanded={openId === faq.id}
                  >
                    <span>Q{faq.id}. {faq.question}</span>
                    <span className="text-xs text-muted transition-transform">{openId === faq.id ? '▲' : '▼'}</span>
                  </button>
                  {openId === faq.id && (
                    <div className="p-5 pt-0 border-t border-border/50 text-[0.88rem] text-muted leading-relaxed">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Still have questions */}
          <div className="text-center bg-bg-section border border-border rounded-2xl p-8 mt-12 flex flex-col items-center gap-3">
            <h3 className="font-heading font-bold text-xl">Still have a question?</h3>
            <p className="text-muted">We're happy to help. Reach us directly via WhatsApp or phone.</p>
            <div className="flex gap-4 mt-2 flex-wrap justify-center">
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp">WhatsApp Us</a>
              <a href={`tel:${contact.phone}`} className="btn btn-outline-dark">Call Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
