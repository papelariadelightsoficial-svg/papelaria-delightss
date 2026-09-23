import { useEffect } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import type { Product } from '@/data/products';
import { formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailsModal({
  product,
  onClose,
}: ProductDetailsModalProps) {
  const { addToCart } = useCart();

  useEffect(() => {
    if (!product) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose, product]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-brown/45 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-details-title"
        onClick={(event) => event.stopPropagation()}
        className="max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:max-w-2xl sm:rounded-3xl"
      >
        <div className="flex items-center justify-between border-b border-cream-dark px-5 py-4 sm:px-7">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-red">
            Detalhes do produto
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar detalhes do produto"
            className="flex h-9 w-9 items-center justify-center rounded-full text-brown transition-colors hover:bg-cream hover:text-red"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-6 p-5 sm:grid-cols-[0.85fr_1.15fr] sm:p-7">
          <div className="flex min-h-[220px] items-center justify-center rounded-2xl bg-cream-light p-6">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-64 w-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span className="mb-2 text-sm font-semibold text-blue">
              {product.category}
            </span>
            <h2
              id="product-details-title"
              className="font-display text-2xl font-bold text-brown sm:text-3xl"
            >
              {product.name}
            </h2>
            <p className="mt-3 font-display text-2xl font-extrabold text-red">
              {formatPrice(product.price)}
            </p>
            <div className="mt-6">
              <h3 className="font-display text-lg font-bold text-brown">
                Descrição do produto
              </h3>
              <p className="mt-2 leading-relaxed text-brown/70">
                {product.description}
              </p>
            </div>
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-red px-5 py-3.5 font-display font-bold text-white transition-colors hover:bg-red-dark"
            >
              <ShoppingCart className="h-4 w-4" />
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}