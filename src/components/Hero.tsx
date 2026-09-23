import { ArrowRight, Heart, MessageCircle, Sparkles, Star } from 'lucide-react';

const heroProducts = [
  {
    image: '02-caderno-espiral.png',
    alt: 'Caderno espiral',
    className: 'left-[7%] top-[15%] w-[48%] rotate-[-8deg] sm:left-[9%] sm:w-[43%]',
  },
  {
    image: '06-lapis-de-cor.png',
    alt: 'Lápis de cor',
    className: 'right-[9%] top-[8%] w-[32%] rotate-[10deg] sm:right-[13%] sm:w-[28%]',
  },
  {
    image: '13-kit-papelaria.png',
    alt: 'Kit de papelaria',
    className: 'left-[36%] top-[28%] z-10 w-[31%] rotate-[3deg] sm:left-[38%] sm:w-[28%]',
  },
  {
    image: '18-marcadores-coloridos.png',
    alt: 'Marcadores coloridos',
    className: 'bottom-[5%] left-[10%] w-[34%] rotate-[8deg] sm:left-[14%] sm:w-[30%]',
  },
  {
    image: '07-canetinhas.png',
    alt: 'Canetinhas coloridas',
    className: 'bottom-[2%] right-[3%] w-[39%] rotate-[-8deg] sm:right-[8%] sm:w-[34%]',
  },
];

export default function Hero() {
  const scrollToProducts = () => {
    document.querySelector('#produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openDelly = () => {
    document
      .querySelector<HTMLButtonElement>('button[aria-label="Abrir DELLY"]')
      ?.click();
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-cream pt-[82px]">
      <div className="pointer-events-none absolute -left-24 top-28 h-64 w-64 rounded-full bg-yellow/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-lilac/15 blur-3xl" />
      <div className="pointer-events-none absolute left-[44%] top-20 h-36 w-36 rounded-full bg-blue/10 blur-2xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10 lg:px-8 lg:py-20">
        <div className="relative z-10 max-w-xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-red/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-red">
            <span className="h-2 w-2 rounded-full bg-red" />
            Papelaria Delights <span className="text-brown/35">•</span> Há 24 anos
          </span>
          <h1 className="font-display text-4xl font-extrabold leading-[1.06] text-brown sm:text-5xl lg:text-[4.25rem]">
            <span className="text-red">Criatividade</span> para todos os momentos.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-brown/70 sm:text-lg">
            Materiais escolares, papelaria criativa e produtos especiais para deixar suas ideias ainda mais incríveis.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red px-6 py-3.5 font-display font-bold text-white shadow-lg shadow-red/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-dark hover:shadow-xl active:scale-95"
            >
              Conheça nossos produtos
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={openDelly}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-brown/15 bg-white px-6 py-3.5 font-display font-bold text-brown transition-all duration-300 hover:-translate-y-0.5 hover:border-red/30 hover:text-red"
            >
              <MessageCircle className="h-4 w-4 text-red" />
              Fale com a Delly
            </button>
          </div>
        </div>

        <div className="relative mx-auto h-[340px] w-full max-w-[570px] sm:h-[425px] lg:h-[470px]">
          <div className="absolute inset-x-[10%] top-[8%] h-[76%] rotate-[-5deg] rounded-[42%_58%_52%_48%/48%_42%_58%_52%] bg-white/80 shadow-sm" />
          <div className="absolute left-[8%] top-[25%] h-28 w-28 rounded-[2rem] bg-yellow/55 rotate-12 sm:h-36 sm:w-36" />
          <div className="absolute bottom-[10%] right-[8%] h-32 w-32 rounded-full bg-blue/20 sm:h-40 sm:w-40" />
          <div className="absolute right-[17%] top-[5%] h-14 w-14 rounded-full bg-lilac/40 sm:h-20 sm:w-20" />

          <div className="absolute inset-0">
            {heroProducts.map((product, index) => (
              <img
                key={product.image}
                src={`${import.meta.env.BASE_URL}${product.image}`}
                alt={product.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                className={`absolute h-auto max-h-[72%] object-contain drop-shadow-[0_18px_16px_rgba(87,51,35,0.16)] transition-transform duration-500 hover:scale-105 ${product.className}`}
              />
            ))}
          </div>

          <Star className="absolute left-[4%] top-[7%] h-7 w-7 rotate-12 fill-yellow text-yellow sm:h-9 sm:w-9" />
          <Heart className="absolute bottom-[17%] left-[42%] h-5 w-5 -rotate-12 fill-red/80 text-red sm:h-6 sm:w-6" />
          <Sparkles className="absolute right-[4%] top-[38%] h-5 w-5 text-lilac sm:h-6 sm:w-6" />
          <span className="absolute bottom-[8%] left-[3%] h-2.5 w-2.5 rounded-full bg-red sm:left-[7%]" />
          <span className="absolute right-[31%] top-[19%] h-2 w-2 rounded-full bg-blue" />
        </div>
      </div>
    </section>
  );
}
