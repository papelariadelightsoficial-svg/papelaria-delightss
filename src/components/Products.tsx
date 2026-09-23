import { useMemo, useState } from 'react';
import { Search, ShoppingCart, Check } from 'lucide-react';
import {
  products,
  categoryFilters,
  formatPrice,
  type Product,
  type ProductCategory,
} from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductsProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  activeFilter: 'Todos' | ProductCategory;
  onFilterChange: (value: 'Todos' | ProductCategory) => void;
}

type SortOption =
  | 'relevant'
  | 'price-asc'
  | 'price-desc'
  | 'alpha';

const SORT_LABELS: Record<SortOption, string> = {
  relevant: 'Mais relevantes',
  'price-asc': 'Menor preço',
  'price-desc': 'Maior preço',
  alpha: 'Ordem alfabética',
};

export default function Products({
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
}: ProductsProps) {
  const [sort, setSort] = useState<SortOption>('relevant');
  const [addedIds, setAddedIds] = useState<Set<number>>(new Set());

  const { addToCart } = useCart();

  const handleAdd = (product: Product) => {
    addToCart(product);

    setAddedIds((previous) => {
      const next = new Set(previous);
      next.add(product.id);
      return next;
    });

    window.setTimeout(() => {
      setAddedIds((previous) => {
        const next = new Set(previous);
        next.delete(product.id);
        return next;
      });
    }, 1500);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeFilter !== 'Todos') {
      result = result.filter(
        (product) => product.category === activeFilter
      );
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === 'alpha') {
      result.sort((a, b) =>
        a.name.localeCompare(b.name, 'pt-BR')
      );
    }

    return result;
  }, [activeFilter, searchQuery, sort]);

  return (
    <section
      id="produtos"
      className="relative bg-cream py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* TÍTULO */}
        <div className="text-center mb-8">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-brown mb-2">
            Escolha seus favoritos
          </h2>

          <p className="font-body text-brown/60 text-base md:text-lg">
            Produtos selecionados para deixar sua rotina mais criativa.
          </p>
        </div>

        {/* BUSCA */}
        <div className="max-w-2xl mx-auto mb-5">
          <div className="relative">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brown/40"
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(event) =>
                onSearchChange(event.target.value)
              }
              placeholder="O que você está procurando?"
              className="w-full bg-white border border-cream-dark rounded-xl py-3.5 pl-12 pr-5 font-body text-brown outline-none transition focus:border-red focus:ring-4 focus:ring-red/10"
            />
          </div>
        </div>

        {/* CATEGORIAS */}
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {categoryFilters.map((category) => {
            const selected = activeFilter === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onFilterChange(category)}
                className={`px-5 py-2.5 rounded-full font-display font-semibold text-sm transition-all ${
                  selected
                    ? 'bg-red text-white shadow-md'
                    : 'bg-white text-brown border border-cream-dark hover:border-red'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* ORDENAR */}
        <div className="flex justify-center mb-9">
          <select
            value={sort}
            onChange={(event) =>
              setSort(event.target.value as SortOption)
            }
             className="bg-white border border-cream-dark rounded-xl px-5 py-2.5 font-display font-semibold text-sm text-brown outline-none cursor-pointer focus:border-red"
          >
            {Object.entries(SORT_LABELS).map(
              ([value, label]) => (
                <option key={value} value={value}>
                  Ordenar: {label}
                </option>
              )
            )}
          </select>
        </div>

        {/* PRODUTOS */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
              <p className="font-display font-bold text-2xl text-brown/60">
               Não encontramos nenhum produto
            </p>

            <p className="font-body text-brown/50 mt-2">
              Tente pesquisar outro nome ou categoria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {filteredProducts.map((product) => {
              const wasAdded = addedIds.has(product.id);

              return (
                <article
                  key={product.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-cream-dark bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* IMAGEM */}
                  <div className="relative aspect-square overflow-hidden bg-cream-light p-4 sm:h-56 sm:aspect-auto">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    {/* ETIQUETA DA CATEGORIA */}
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 font-display text-xs font-semibold text-brown shadow-sm">
                      {product.category}
                    </span>
                  </div>

                  {/* INFORMAÇÕES */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display font-bold text-lg text-brown mb-1">
                      {product.name}
                    </h3>

                    <p className="font-body text-sm text-brown/55 mb-3">
                      {product.category}
                    </p>

                    <p className="mt-auto mb-5 font-display font-extrabold text-2xl text-red">
                      {formatPrice(product.price)}
                    </p>

                    {/* BOTÃO */}
                    <button
                      type="button"
                      onClick={() => handleAdd(product)}
                      className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full font-display font-bold text-sm text-white shadow-md transition-all duration-300 ${
                        wasAdded
                          ? 'bg-green'
                          : 'bg-red hover:bg-red-dark hover:-translate-y-0.5'
                      }`}
                    >
                      {wasAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          Adicionado!
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          Adicionar ao carrinho
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}

          </div>
        )}
      </div>
    </section>
  );
}
