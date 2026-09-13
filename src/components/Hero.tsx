import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = () => {
    document.querySelector('#produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative pt-16 sm:pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream-light to-cream" />

      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-yellow/20 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-blue/15 blur-3xl" />
      <div className="absolute top-40 left-1/3 w-24 h-24 rounded-full bg-red/10 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left animate-slide-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-yellow/20 text-brown text-sm font-medium mb-5">
              Há 24 anos transformando ideias em detalhes
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brown leading-tight mb-4 text-shadow-soft">
              PAPELARIA <span className="text-red">DELIGHTS</span>
            </h1>

            <p className="text-lg sm:text-xl text-brown-light font-medium mb-3 max-w-lg mx-auto lg:mx-0">
              "Há 24 anos transformando ideias em detalhes especiais."
            </p>

            <p className="text-base sm:text-lg text-brown/70 mb-8 max-w-lg mx-auto lg:mx-0">
              Papelaria criativa e personalizada feita com carinho para você.
            </p>

            <button
              onClick={scrollToProducts}
              className="inline-flex items-center gap-2 bg-red hover:bg-red-dark text-white font-semibold px-7 py-3.5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 group"
            >
              CONHEÇA NOSSOS PRODUTOS
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Hero image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden card-shadow">
              <img
                src="https://images.pexels.com/photos/7657382/pexels-photo-7657382.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Materiais de papelaria - cadernos, canetas e papéis"
                className="w-full h-[300px] sm:h-[400px] lg:h-[480px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white rounded-2xl px-5 py-3 card-shadow flex items-center gap-3 animate-bounce-soft">
              <div className="w-10 h-10 rounded-full bg-yellow/20 flex items-center justify-center text-xl">
                ✨
              </div>
              <div>
                <p className="text-xs text-brown-light font-medium">Criatividade</p>
                <p className="text-sm font-bold text-brown">em cada detalhe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
