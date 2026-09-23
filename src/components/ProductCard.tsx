import { Plus, Check } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '@/data/products';
import { formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-cream-dark bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden bg-cream-light p-4">
        <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]" />
        {product.highlight && (
          <span className="absolute left-3 top-3 rounded-full bg-yellow px-2.5 py-1 text-xs font-bold text-brown shadow-sm">Destaque</span>
        )}
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <span className="text-xs font-medium text-blue-dark mb-1.5">{product.category}</span>
        <h3 className="font-semibold text-brown text-sm sm:text-base mb-1.5 leading-snug">{product.name}</h3>
        <p className="text-xs text-brown/60 mb-4 line-clamp-2 leading-relaxed flex-1">{product.description}</p>
        <div className="flex items-center justify-between gap-3 mt-auto">
          <span className="font-display text-lg font-bold text-red">{formatPrice(product.price)}</span>
          <button onClick={handleAdd} className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-300 active:scale-95 ${added ? 'bg-green-500 text-white' : 'bg-cream-dark text-brown hover:bg-yellow hover:text-brown'}`}>
            {added ? (<><Check className="w-4 h-4" />Adicionado</>) : (<><Plus className="w-4 h-4" />Adicionar</>)}
          </button>
        </div>
      </div>
    </div>
  );
}
