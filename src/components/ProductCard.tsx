import { Plus, Check } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '@/data/products';
import { formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductCard({
  product,
  onProductSelect,
}: {
  product: Product;
  onProductSelect: (product: Product) => void;
}) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onProductSelect(product)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onProductSelect(product);
        }
      }}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-cream-dark bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red/40"
    >
      <div className="relative aspect-square overflow-hidden bg-cream-light p-4">
        <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="mb-2 font-semibold leading-snug text-brown text-sm sm:text-base">{product.name}</h3>
        <p className="mb-4 min-h-[2.5rem] line-clamp-2 flex-1 text-xs leading-relaxed text-brown/60">{product.description}</p>
        <div className="flex items-center justify-between gap-3 mt-auto">
          <span className="font-display text-lg font-bold text-red">{formatPrice(product.price)}</span>
          <button onClick={(event) => { event.stopPropagation(); handleAdd(); }} className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-300 active:scale-95 ${added ? 'bg-green-500 text-white' : 'bg-cream-dark text-brown hover:bg-yellow hover:text-brown'}`}>
            {added ? (<><Check className="w-4 h-4" />Adicionado</>) : (<><Plus className="w-4 h-4" />Adicionar</>)}
          </button>
        </div>
      </div>
    </div>
  );
}
