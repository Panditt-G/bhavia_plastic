import { buildUrl } from '../cloudinary';
import { contact } from '../data/contact';

export default function ProductCard({ product }) {
  const { name, cloudinaryId, description } = product;
  const waMsg = encodeURIComponent(`Hi Bhavia Plastic, I'm interested in: ${name}. Please share price and availability.`);

  return (
    <div className="bg-bg-card rounded-md overflow-hidden shadow-sm transition-all duration-250 flex flex-col hover:shadow-md hover:-translate-y-1 group">
      <div className="relative h-[180px] overflow-hidden bg-gradient-to-br from-[#E8F4FD] to-[#C5DFF8] shrink-0">
        <img
          src={buildUrl(cloudinaryId, { width: 320, height: 220 })}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
          loading="lazy"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent to-[60%]" />
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h4 className="font-heading font-bold text-primary text-[0.92rem] leading-snug">{name}</h4>
        <p className="text-[0.8rem] text-muted leading-relaxed flex-1 line-clamp-2">{description}</p>
        <div className="flex gap-2 mt-1">
          <a
            href={`https://wa.me/${contact.whatsapp}?text=${waMsg}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp btn-sm flex-1"
          >
            💬 Inquire
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="btn btn-outline-dark btn-sm flex-1"
          >
            📞 Call
          </a>
        </div>
      </div>
    </div>
  );
}
