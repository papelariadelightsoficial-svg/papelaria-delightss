import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import Highlights from '@/components/Highlights';
import Products from '@/components/Products';
import Personalized from '@/components/Personalized';
import WhyChooseUs from '@/components/WhyChooseUs';
import { Reviews } from '@/components/Reviews';
import { FAQ } from '@/components/FAQ';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CartPanel from '@/components/CartPanel';
import DellyAssistant from '@/components/DellyAssistant';
import type { Product, ProductCategory } from '@/data/products';
import ProductDetailsModal from '@/components/ProductDetailsModal';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] =
    useState<'Todos' | ProductCategory>('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-cream">
      <Header searchQuery={searchQuery} onSearch={setSearchQuery} />

      <main>
        <Hero />
        <Welcome />
        <Highlights onProductSelect={setSelectedProduct} />

        <Products
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onProductSelect={setSelectedProduct}
        />

        <Personalized />
        <WhyChooseUs />

        <Reviews />
        <FAQ />

        <About />
        <Contact />
      </main>

      <Footer />
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <CartPanel />
      <DellyAssistant />
    </div>
  );
}

export default App;
