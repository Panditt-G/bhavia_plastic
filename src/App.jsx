import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Category from './pages/Category';
import Gallery from './pages/Gallery';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {/* Hide global navbar on home — mdhero has its own topbar */}
      {!isHome && <Navbar />}
      <main style={isHome ? { paddingTop: 0 } : {}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:categoryId" element={<Category />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all → Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

export default App;
