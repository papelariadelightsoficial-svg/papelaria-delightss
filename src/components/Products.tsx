import { useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { products, categoryFilters, type ProductCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';

interface ProductsProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilter: 'Todos' | ProductCategory;
  onFilterChange: (filter: 'Todos' | ProductCategory) => void;
}

export default function Products({ searchQuery, onSearchChange, activeFilter, onFilterChange }: ProductsProps) {
  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = searchQuery.trim() === '' || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'Todos' || p.category === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  return (
    <section id="produtos" className="py-16 sm:py-20 lg:py-24 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brown mb-3">Nossos Produtos</h2>
          <p className="text-brown/60 max-w-xl mx-auto">Tudo para seus estudos, organização e momentos criativos.</p>
        </div>
        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-light" />
            <input type="text" value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} placeholder="Buscar produtos pelo nome..." className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-cream-dark bg-white text-brown placeholder-brown-light/60 focus:outline-none focus:border-yellow transition-colors" />
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <SlidersHorizontal className="w-4 h-4 text-brown-light hidden sm:block" />
            {categoryFilters.map((filter) => (
              <button key={filter} onClick={() => onFilterChange(filter)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter ? 'bg-red text-white shadow-md' : 'bg-white text-brown hover:bg-cream-dark card-shadow'}`}>{filter}</button>
            ))}
          </div>
        </div>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {filtered.map((product) => (<ProductCard key={product.id} product={product} />))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-brown/50 text-lg">Nenhum produto encontrado para sua busca.</p>
            <button onClick={() => { onSearchChange(''); onFilterChange('Todos'); }} className="mt-4 text-red font-medium hover:underline">Ver todos os produtos</button>
          </div>
        )}
      </div>
    </section>
  );
}
