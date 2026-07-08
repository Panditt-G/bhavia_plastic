import { Routes, Route } from 'react-router-dom';
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
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-16 sm:pt-20">
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
