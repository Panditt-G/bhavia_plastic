import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { categories } from '../data/categories';
import { products, searchProducts } from '../data/products';
import { contact } from '../data/contact';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const [query, setQuery] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };


    setQuery(initialSearch);
  }, [initialSearch]);

  let displayedProducts = query
    ? searchProducts(query)
    : activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const isSearchMode = !!query;

  return (
    <>
      <SEO title="Products" description="Explore our extensive range of wholesale disposable cups, plates, food containers, and cleaning supplies in Nashik." />

      <section className="pt-8 md:pt-10 pb-16 md:pb-24">
        <div className="container">
          <h1 className="sr-only">All Products</h1>
          {!isSearchMode && (
            <>
              {/* Category Filter Tabs */}
              <div className="relative flex items-center mb-12 group">
                {/* Left Scroll Button */}
                <button 
                  onClick={() => scroll('left')} 
                  className="absolute left-0 z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-primary transition-opacity -translate-x-4 hover:bg-gray-50 border border-gray-100 hidden md:flex"
                  aria-label="Scroll left"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>

                <div ref={scrollRef} className="flex gap-2 overflow-x-auto pb-2 scrollbar-none w-full scroll-smooth">
                  <button 
                    className={`px-5 py-2.5 rounded-full font-semibold text-[0.88rem] transition-all duration-150 whitespace-nowrap shrink-0 ${
                      activeCategory === 'all' 
                        ? 'bg-accent text-white shadow-accent' 
                        : 'bg-bg-section text-muted hover:bg-border/60'
                    }`} 
                    onClick={() => setActiveCategory('all')}
                  >
                    All Products
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      className={`px-5 py-2.5 rounded-full font-semibold text-[0.88rem] transition-all duration-150 whitespace-nowrap shrink-0 ${
                        activeCategory === cat.id 
                          ? 'bg-accent text-white shadow-accent' 
                          : 'bg-bg-section text-muted hover:bg-border/60'
                      }`}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      {cat.icon} {cat.name}
                    </button>
                  ))}
                </div>

                {/* Right Scroll Button */}
                <button 
                  onClick={() => scroll('right')} 
                  className="absolute right-0 z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-primary transition-opacity translate-x-4 hover:bg-gray-50 border border-gray-100 hidden md:flex"
                  aria-label="Scroll right"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>

              {/* Category Cards (all view) */}
              {activeCategory === 'all' && (
                <>
                  <div className="section-header">
                    <div className="section-label">Browse by Category</div>
                    <h2>Product Categories</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-center flex-wrap gap-4 border-b border-border pb-4">
                <h3 className="text-xl font-bold">
                  {isSearchMode
                    ? `Search results for "${query}" (${displayedProducts.length} products)`
                    : `${categories.find((c) => c.id === activeCategory)?.name} (${displayedProducts.length} products)`}
                </h3>
                {isSearchMode && (
                  <button className="btn btn-outline-dark btn-sm" onClick={() => { setQuery(''); setSearchInput(''); }}>
                    Clear Search
                  </button>
                )}
              </div>
              {displayedProducts.length === 0 ? (
                <div className="text-center py-16 bg-bg-card border border-border rounded-2xl flex flex-col items-center gap-4">
                  <svg className="w-16 h-16 text-muted/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <h3 className="font-heading font-bold text-xl">No products found</h3>
                  <p className="text-muted">Try a different search term or browse by category.</p>
                  <button className="btn btn-primary" onClick={() => { setQuery(''); setSearchInput(''); setActiveCategory('all'); }}>
                    Browse All Categories
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
      <section className="section section-dark py-12 md:py-16">
        <div className="container text-center">
          <h2>Can't Find What You Need?</h2>
          <p className="text-white/70 my-6 max-w-[500px] mx-auto">
            We stock 500+ products. Contact us on WhatsApp and we'll check availability for you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-lg">Ask on WhatsApp</a>
            <Link to="/contact" className="btn btn-outline btn-lg">Send Inquiry →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
