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
  { label: 'Personalizados', href: '#personalizados' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Header({ onSearch, searchQuery }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const el = document.querySelector('#produtos');
    el?.scrollIntoView({ behavior: 'smooth' });
    setSearchOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_2px_20px_rgba(99,53,31,0.1)]'
          : 'bg-cream/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="flex-shrink-0"
          >
            <Logo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-brown hover:text-red transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-cream-dark transition-colors text-brown"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button
              onClick={openCart}
              className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-cream-dark transition-colors text-brown"
              aria-label="Carrinho"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse-soft">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-cream-dark transition-colors text-brown"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-4 animate-fade-in">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-light" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Buscar produtos..."
                autoFocus
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-cream-dark bg-white/80 text-brown placeholder-brown-light/60 focus:outline-none focus:border-yellow transition-colors"
              />
            </form>
          </div>
        )}

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 animate-slide-up">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-3 rounded-xl text-brown font-medium hover:bg-cream-dark transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
