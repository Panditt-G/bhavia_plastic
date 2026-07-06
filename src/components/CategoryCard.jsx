import { Link } from 'react-router-dom';
import { buildUrl } from '../cloudinary';

export default function CategoryCard({ category }) {
  const { id, name, cloudinaryId, description, productCount } = category;

  return (
    <Link 
      to={`/products/${id}`} 
      className="relative overflow-hidden rounded-[24px] h-[320px] shadow-sm group cursor-pointer border border-border flex flex-col justify-end transition-all duration-300 hover:shadow-lg" 
      aria-label={`Browse ${name}`}
    >
      {/* Background Image */}
      <img
        src={buildUrl(cloudinaryId, { width: 500, height: 350 })}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060e17] via-[#060e17]/35 to-transparent transition-opacity duration-300 group-hover:via-[#060e17]/45" />

      {/* Product Count Badge */}
      <span className="absolute top-4 right-4 bg-accent text-primary text-[0.7rem] font-bold px-2.5 py-1 rounded-full z-20">
        {productCount}+ Products
      </span>

      {/* Content Overlay */}
      <div className="relative p-6 z-10 flex flex-col gap-1 text-left transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
        <h4 className="font-heading font-bold text-white text-base leading-tight md:text-lg">{name}</h4>
        <p className="text-[0.82rem] text-white/70 leading-relaxed opacity-0 max-h-[0px] overflow-hidden group-hover:opacity-100 group-hover:max-h-[80px] transition-all duration-300">
          {description}
        </p>
        <span className="flex items-center gap-1 text-[0.78rem] font-semibold text-accent mt-1.5 transition-all duration-150 group-hover:gap-2">
          View Products <span>→</span>
        </span>
      </div>
    </Link>
  );
}

