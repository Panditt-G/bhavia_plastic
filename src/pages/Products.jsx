import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { products, searchProducts } from '../data/products';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import './Products.css';

export default function Products() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const [query, setQuery] = useState(initialSearch);
  const [searchInput, setSearchInput] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState('all');

  document.title = 'Products | Bhavia Plastic Nashik';

  useEffect(() => {
    setQuery(initialSearch);
    setSearchInput(initialSearch);
  }, [initialSearch]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(searchInput);
    setActiveCategory('all');
  };

  let displayedProducts = query
    ? searchProducts(query)
    : activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const isSearchMode = !!query;

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="section-label">Our Range</div>
          <h1>All Products</h1>
          <p>Browse 500+ products across 9 categories. Wholesale &amp; retail available.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Search Bar */}
          <form className="products-search" onSubmit={handleSearch}>
            <div className="products-search__input-wrap">
              <span className="products-search__icon">🔍</span>
              <input
                type="text"
                placeholder="Search products, e.g. thermocol plates, garbage bags…"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              {searchInput && (
                <button type="button" className="products-search__clear" onClick={() => { setSearchInput(''); setQuery(''); }}>✕</button>
              )}
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
          </form>

          {!isSearchMode && (
            <>
              {/* Category Filter Tabs */}
              <div className="products-tabs">
                <button className={`products-tab${activeCategory === 'all' ? ' active' : ''}`} onClick={() => setActiveCategory('all')}>
                  All Products
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`products-tab${activeCategory === cat.id ? ' active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.icon} {cat.name}
                  </button>
                ))}
              </div>

              {/* Category Cards (all view) */}
              {activeCategory === 'all' && (
                <>
                  <div className="section-header">
                    <div className="section-label">Browse by Category</div>
                    <h2>Product Categories</h2>
                  </div>
                  <div className="products-category-grid">
                    {categories.map((cat) => (
                      <CategoryCard key={cat.id} category={cat} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}

          {/* Products Grid */}
          {(isSearchMode || activeCategory !== 'all') && (
            <div className="products-results">
              <div className="products-results__header">
                <h3>
                  {isSearchMode
                    ? `Search results for "${query}" — ${displayedProducts.length} products`
                    : `${categories.find((c) => c.id === activeCategory)?.name} — ${displayedProducts.length} products`}
                </h3>
                {isSearchMode && (
                  <button className="btn btn-outline-dark btn-sm" onClick={() => { setQuery(''); setSearchInput(''); }}>
                    Clear Search
                  </button>
                )}
              </div>
              {displayedProducts.length === 0 ? (
                <div className="products-empty">
                  <div className="products-empty__icon">🔍</div>
                  <h3>No products found</h3>
                  <p>Try a different search term or browse by category.</p>
                  <button className="btn btn-primary" onClick={() => { setQuery(''); setSearchInput(''); setActiveCategory('all'); }}>
                    Browse All Categories
                  </button>
                </div>
              ) : (
                <div className="products-grid">
                  {displayedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark" style={{ padding: 'var(--space-3xl) 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Can't Find What You Need?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', margin: 'var(--space-md) auto var(--space-xl)', maxWidth: '500px' }}>
            We stock 500+ products. Contact us on WhatsApp and we'll check availability for you.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-lg">💬 Ask on WhatsApp</a>
            <Link to="/contact" className="btn btn-outline btn-lg">Send Inquiry →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
