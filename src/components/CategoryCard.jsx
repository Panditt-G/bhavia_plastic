import { Link } from 'react-router-dom';
import { buildUrl } from '../cloudinary';

export default function CategoryCard({ category }) {
  const { id, name, cloudinaryId, description, productCount } = category;

  return (
    <Link to={`/products/${id}`} className="flex flex-col bg-bg-card rounded-[20px] overflow-hidden shadow-sm transition-all duration-250 cursor-pointer hover:shadow-lg hover:-translate-y-[6px] group" aria-label={`Browse ${name}`}>
      <div className="relative h-[200px] overflow-hidden bg-gradient-to-br from-primary-light to-primary shrink-0">
        <img
          src={buildUrl(cloudinaryId, { width: 400, height: 280 })}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-106"
          loading="lazy"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-primary/10 to-transparent" />
        <span className="absolute bottom-3 right-3 bg-accent text-primary text-[0.72rem] font-bold px-2.5 py-1 rounded-full">{productCount}+ Products</span>
      </div>
      <div className="p-6 flex flex-col gap-2 flex-1">
        <h3 className="font-heading font-bold text-primary text-base leading-snug">{name}</h3>
        <p className="text-[0.84rem] text-muted leading-relaxed flex-1 line-clamp-2">{description}</p>
        <span className="flex items-center gap-1 text-[0.84rem] font-semibold text-accent-dark mt-1 transition-all duration-150 group-hover:gap-2">
          View Products <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
