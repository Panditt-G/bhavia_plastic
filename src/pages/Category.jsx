import { useParams, Link, Navigate } from 'react-router-dom';
import { getCategoryById } from '../data/categories';
import { getProductsByCategory } from '../data/products';
import { buildUrl } from '../cloudinary';
import { contact } from '../data/contact';
import ProductCard from '../components/ProductCard';

export default function Category() {
  const { categoryId } = useParams();
  const category = getCategoryById(categoryId);

  if (!category) return <Navigate to="/products" replace />;

  const categoryProducts = getProductsByCategory(categoryId);
  const waMsg = encodeURIComponent(`Hi Bhavia Plastic, I need information about your ${category.name} products. Please share details and pricing.`);

  document.title = `${category.name} | Bhavia Plastic Nashik`;

  return (
    <>
      {/* Category Banner */}
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-[-1]">
          <img
            src={buildUrl(category.cloudinaryId, { width: 1400, height: 400 })}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/92 to-primary/70" />
        </div>
        <div className="container flex flex-col gap-3 items-start relative z-10">
          <div className="text-[0.8rem] text-accent-light/85 mb-1">
            <Link to="/" className="text-white transition-colors hover:text-accent">Home</Link> › <Link to="/products" className="text-white transition-colors hover:text-accent">Products</Link> › {category.name}
          </div>
          <h1 className="text-white mt-1">{category.name}</h1>
          <p className="text-white/80">{category.description}</p>
          <div className="flex gap-4 mt-4 flex-wrap">
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${waMsg}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              Inquire on WhatsApp
            </a>
            <a href={`tel:${contact.phone}`} className="btn btn-primary btn-lg">Call Now</a>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">{category.name}</div>
            <h2>Available Products ({categoryProducts.length})</h2>
            <p>{category.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col md:flex-row justify-between items-center bg-bg-section border border-border rounded-2xl p-8 mt-16 gap-6">
            <div className="flex flex-col gap-1.5 text-center md:text-left">
              <h3 className="font-heading font-bold text-xl">Need to Order in Bulk?</h3>
              <p className="text-muted text-sm">Get special wholesale pricing for large orders of {category.name.toLowerCase()}.</p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${waMsg}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                WhatsApp for Bulk Order
              </a>
              <Link to="/contact" className="btn btn-outline-dark">Send Inquiry →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to categories */}
      <div className="container pb-16">
        <Link to="/products" className="btn btn-outline-dark">← Back to All Categories</Link>
      </div>
    </>
  );
}
