import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import Highlights from '@/components/Highlights';
import Products from '@/components/Products';
import Personalized from '@/components/Personalized';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CartPanel from '@/components/CartPanel';
import DellyAssistant from '@/components/DellyAssistant';
import type { ProductCategory } from '@/data/products';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'Todos' | ProductCategory>('Todos');

  return (
    <div className="min-h-screen bg-cream">
      <Header searchQuery={searchQuery} onSearch={setSearchQuery} />
      <main>
        <Hero />
        <Welcome />
        <Highlights />
        <Products
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <Personalized />
        <WhyChooseUs />
        <About />
        <Contact />
      </main>
      <Footer />
      <CartPanel />
      <DellyAssistant />
    </div>
  );
}

export default App;
