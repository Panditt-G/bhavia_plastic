import { buildUrl } from '../cloudinary';
import { contact } from '../data/contact';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { name, cloudinaryId, description } = product;
  const waMsg = encodeURIComponent(`Hi Bhavia Plastic, I'm interested in: ${name}. Please share price and availability.`);

  return (
    <div className="product-card">
      <div className="product-card__img-wrap">
        <img
          src={buildUrl(cloudinaryId, { width: 320, height: 220 })}
          alt={name}
          className="product-card__img"
          loading="lazy"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="product-card__img-overlay" />
      </div>
      <div className="product-card__body">
        <h4 className="product-card__name">{name}</h4>
        <p className="product-card__desc">{description}</p>
        <div className="product-card__actions">
          <a
            href={`https://wa.me/${contact.whatsapp}?text=${waMsg}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            💬 Inquire
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="btn btn-outline-dark btn-sm"
          >
            📞 Call
          </a>
        </div>
      </div>
    </div>
  );
}
