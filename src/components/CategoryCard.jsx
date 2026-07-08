import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {
  const { id, name, productCount, products } = category;

  return (
    <Link 
      to={`/products/${id}`} 
      className="block bg-white rounded-2xl sm:rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group overflow-hidden"
      aria-label={`Browse ${name}`}
    >
      {/* Image Section */}
      <div className="w-full h-[120px] sm:h-[180px] relative">
        {category.image ? (
          <img
            src={category.image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[40px] sm:text-[60px] bg-[#E3E8DC] transition-transform duration-500 group-hover:scale-110">
            {category.emoji || '📦'}
          </div>
        )}
        
        {/* Top Right Pill (Item Count) */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white text-primary text-[0.6rem] sm:text-[0.65rem] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-sm z-10">
          {productCount}+ Items
        </div>

        {/* Bottom Banner inside image */}
        <div className="absolute bottom-0 left-0 w-full bg-[#2B3822] text-white py-1 sm:py-1.5 flex items-center justify-center gap-1 sm:gap-1.5 text-[0.58rem] sm:text-[0.65rem] font-medium z-10">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-3 sm:h-3"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
          Wholesale & Retail
        </div>
      </div>
      
      {/* Text Section */}
      <div className="pt-3 sm:pt-4 pb-3 sm:pb-4 px-3 sm:px-4">
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <h4 className="font-heading font-bold text-primary text-[0.85rem] sm:text-[1rem] leading-tight truncate pr-2">{name}</h4>
          <span className="text-primary text-[0.6rem] sm:text-[0.65rem] font-bold flex items-center gap-0.5 shrink-0 group-hover:text-accent transition-colors">
            View <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-3 sm:h-3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
        
        {/* Tag Pills — hidden on very small screens to keep card compact */}
        <div className="hidden sm:flex gap-1.5 flex-wrap h-[22px] overflow-hidden">
          {products && products.slice(0, 3).map((prodId) => (
            <span key={prodId} className="bg-[#F4F4F5] text-[#52525B] text-[0.65rem] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap capitalize">
              {prodId.replace(/-/g, ' ')}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

