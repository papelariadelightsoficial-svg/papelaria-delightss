import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Highlights() {
  const highlighted = products.filter((p) => p.highlight).slice(0, 4);

  return (
    <section id="destaques" className="py-16 sm:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brown mb-3">Destaques</h2>
          <p className="text-brown/60 max-w-xl mx-auto">Produtos especiais selecionados com carinho para você.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {highlighted.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
