import { useState } from 'react';
import { faqs } from '../data/faqs';
import { contact } from '../data/contact';
import './FAQs.css';

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
      <div className="page-header">
        <div className="container">
          <div className="section-label">Help Center</div>
          <h1>Frequently Asked Questions</h1>
          <p>Find quick answers to common questions about Bhavia Plastic.</p>
        </div>
      </div>

      <section className="section">
        <div className="container faqs-container">
          {/* Search */}
          <div className="faqs-search">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search FAQs…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* FAQ list */}
          {filtered.length === 0 ? (
            <div className="faqs-empty">
              <div>🤔</div>
              <h3>No results found</h3>
              <p>Try different keywords or contact us directly.</p>
            </div>
          ) : (
            <div className="faqs-list">
              {filtered.map((faq) => (
                <div
                  key={faq.id}
                  className={`faq-item${openId === faq.id ? ' open' : ''}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    aria-expanded={openId === faq.id}
                  >
                    <span>Q{faq.id}. {faq.question}</span>
                    <span className="faq-chevron">{openId === faq.id ? '▲' : '▼'}</span>
                  </button>
                  {openId === faq.id && (
                    <div className="faq-answer">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Still have questions */}
          <div className="faqs-contact">
            <h3>Still have a question?</h3>
            <p>We're happy to help. Reach us directly via WhatsApp or phone.</p>
            <div className="faqs-contact__actions">
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp">💬 WhatsApp Us</a>
              <a href={`tel:${contact.phone}`} className="btn btn-outline-dark">📞 Call Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
