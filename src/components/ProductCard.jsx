import { contact } from '../data/contact';

export default function ProductCard({ product }) {
  const { name, description, image } = product;
  const waMsg = encodeURIComponent(`Hi Bhavia Plastic, I'm interested in: ${name}. Please share price and availability.`);

  return (
    <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-[180px] bg-[#E3E8DC]/40 overflow-hidden flex items-center justify-center">
        {image && (
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        )}
      </div>
      
      {/* Text Content */}
      <div className="p-4 flex flex-col flex-1">
        <h4 className="font-heading font-bold text-primary text-[0.95rem] leading-tight mb-1.5">{name}</h4>
        <p className="text-muted text-[0.8rem] leading-snug line-clamp-2 mb-4 flex-1">{description}</p>
        
        {/* Button */}
        <a
          href={`https://wa.me/${contact.whatsapp}?text=${waMsg}`}
          target="_blank"
          rel="noreferrer"
          className="w-full border border-[#478B55]/40 rounded-full py-2 flex items-center justify-center gap-1.5 text-[#478B55] text-[0.8rem] font-semibold transition-colors hover:bg-[#478B55]/10 group-hover:border-[#478B55]"
        >
          View Details
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  );
}
