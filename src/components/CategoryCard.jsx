import { Link } from 'react-router-dom';
import { buildUrl } from '../cloudinary';
import './CategoryCard.css';

export default function CategoryCard({ category }) {
  const { id, name, icon, cloudinaryId, description, productCount } = category;

  return (
    <Link to={`/products/${id}`} className="cat-card" aria-label={`Browse ${name}`}>
      <div className="cat-card__img-wrap">
        <img
          src={buildUrl(cloudinaryId, { width: 400, height: 280 })}
          alt={name}
          className="cat-card__img"
          loading="lazy"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="cat-card__overlay" />
        <span className="cat-card__count">{productCount}+ Products</span>
      </div>
      <div className="cat-card__body">
        <h3 className="cat-card__name">{name}</h3>
        <p className="cat-card__desc">{description}</p>
        <span className="cat-card__link">
          View Products <span className="cat-card__arrow">→</span>
        </span>
      </div>
    </Link>
  );
}
