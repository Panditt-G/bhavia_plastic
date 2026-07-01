import { useParams, Link, Navigate } from 'react-router-dom';
import { getCategoryById } from '../data/categories';
import { getProductsByCategory } from '../data/products';
import { buildUrl } from '../cloudinary';
import { contact } from '../data/contact';
import ProductCard from '../components/ProductCard';
import './Category.css';

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
      <div className="cat-page-header">
        <div className="cat-page-header__bg">
          <img
            src={buildUrl(category.cloudinaryId, { width: 1400, height: 400 })}
            alt={category.name}
          />
          <div className="cat-page-header__overlay" />
        </div>
        <div className="container cat-page-header__content">
          <div className="cat-page-header__breadcrumb">
            <Link to="/">Home</Link> › <Link to="/products">Products</Link> › {category.name}
          </div>
          <div className="cat-page-header__icon">{category.icon}</div>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
          <div className="cat-page-header__actions">
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${waMsg}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              💬 Inquire on WhatsApp
            </a>
            <a href={`tel:${contact.phone}`} className="btn btn-primary btn-lg">📞 Call Now</a>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">{category.icon} {category.name}</div>
            <h2>Available Products ({categoryProducts.length})</h2>
            <p>{category.description}</p>
          </div>

          <div className="cat-page-grid">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="cat-page-cta">
            <div className="cat-page-cta__content">
              <h3>Need to Order in Bulk?</h3>
              <p>Get special wholesale pricing for large orders of {category.name.toLowerCase()}.</p>
            </div>
            <div className="cat-page-cta__actions">
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${waMsg}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                💬 WhatsApp for Bulk Order
              </a>
              <Link to="/contact" className="btn btn-outline-dark">Send Inquiry →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to categories */}
      <div className="container" style={{ paddingBottom: 'var(--space-3xl)' }}>
        <Link to="/products" className="btn btn-outline-dark">← Back to All Categories</Link>
      </div>
    </>
  );
}
