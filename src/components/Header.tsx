import { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import Logo from '@/components/Logo';
import { useCart } from '@/context/CartContext';

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Categorias', href: '#produtos' },
  { label: 'Personalizados', href: '#personalizados' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Dúvidas Frequentes', href: '#faq' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Header({
  onSearch,
  searchQuery,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    const element = document.querySelector(href);

    element?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const handleSearch = (value: string) => {
    onSearch(value);
  };

  const handleSearchSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    document
      .querySelector('#produtos')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 border-b border-cream-dark transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_4px_20px_rgba(87,51,35,0.10)]'
          : 'bg-cream/95'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex h-[82px] max-w-7xl items-center">

          {/* LOGO + SLOGAN */}
          <a
            href="#inicio"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick('#inicio');
            }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <Logo />

            <div className="hidden xl:block max-w-[175px]">
              <p className="font-body text-[11px] leading-[1.25] text-brown/60">
                Há 24 anos transformando ideias
                <br />
                em detalhes especiais
              </p>
            </div>
          </a>

          {/* MENU DESKTOP */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-5 xl:gap-6 px-5">
            {navLinks.map((link, index) => (
              <a
                key={`${link.label}-${index}`}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative text-[12px] xl:text-[13px] font-medium text-brown/75 hover:text-red transition-colors whitespace-nowrap group"
              >
                {link.label === 'Dúvidas Frequentes' ? (
                  <span className="text-center leading-tight block">
                    Dúvidas
                    <br />
                    Frequentes
                  </span>
                ) : link.label === 'Sobre nós' ? (
                  <span className="text-center leading-tight block">
                    Sobre
                    <br />
                    nós
                  </span>
                ) : (
                  link.label
                )}

                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* DIREITA */}
          <div className="ml-auto flex items-center gap-2">

            {/* PESQUISA DESKTOP */}
            <form
              onSubmit={handleSearchSubmit}
              className="hidden xl:block"
            >
              <div className="relative w-[200px] 2xl:w-[230px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brown/35" />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) =>
                    handleSearch(event.target.value)
                  }
                  placeholder="O que você procura?"
                  className="w-full h-10 pl-9 pr-3 rounded-xl bg-white border border-brown/10 text-xs text-brown placeholder:text-brown/35 outline-none transition-all focus:border-red/40 focus:ring-2 focus:ring-red/10"
                />
              </div>
            </form>

            {/* PESQUISA TABLET */}
            <button
              type="button"
              onClick={() => {
                document
                  .querySelector('#produtos')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-full text-brown hover:bg-brown/5 transition-colors"
              aria-label="Buscar produtos"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* CARRINHO */}
            <button
              type="button"
              onClick={openCart}
              className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-red text-white shadow-md shadow-red/20 transition-all duration-300 hover:scale-105 hover:bg-red-dark"
              aria-label="Abrir carrinho"
            >
              <ShoppingCart className="w-5 h-5" />

              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 bg-yellow text-brown text-[11px] font-extrabold rounded-full flex items-center justify-center border-2 border-cream">
                  {totalItems}
                </span>
              )}
            </button>

            {/* MENU MOBILE */}
            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen((previous) => !previous)
              }
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-brown hover:bg-brown/5 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* MENU MOBILE */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-5">
            {/* BUSCA MOBILE */}
            <form
              onSubmit={handleSearchSubmit}
              className="relative mb-4"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brown/35" />

              <input
                type="text"
                value={searchQuery}
                onChange={(event) =>
                  handleSearch(event.target.value)
                }
                placeholder="O que você procura?"
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border-2 border-brown/10 text-brown outline-none focus:border-red/40"
              />
            </form>

            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={`${link.label}-mobile-${index}`}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-3 rounded-xl text-sm text-brown font-medium hover:bg-brown/5 hover:text-red transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
