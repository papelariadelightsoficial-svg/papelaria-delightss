import { ArrowRight, Heart, Instagram, Mail, Phone, Star } from 'lucide-react';
import {
  STORE_EMAIL,
  STORE_INSTAGRAM,
  WHATSAPP_NUMBER,
} from '@/config/store';

const bannerProducts = [
  {
    image: '02-caderno-espiral.png',
    alt: 'Caderno espiral',
    className:
      'left-[1%] top-[18%] w-[47%] rotate-[-8deg] sm:left-[4%] sm:w-[42%]',
  },
  {
    image: '06-lapis-de-cor.png',
    alt: 'Lápis de cor',
    className:
      'right-[3%] top-[2%] w-[31%] rotate-[9deg] sm:right-[7%] sm:w-[28%]',
  },
  {
    image: '13-kit-papelaria.png',
    alt: 'Kit de papelaria',
    className:
      'left-[35%] top-[25%] z-10 w-[32%] rotate-[3deg] sm:left-[38%] sm:w-[28%]',
  },
  {
    image: '18-marcadores-coloridos.png',
    alt: 'Marcadores coloridos',
    className:
      'bottom-[1%] left-[7%] w-[34%] rotate-[7deg] sm:left-[11%] sm:w-[30%]',
  },
  {
    image: '07-canetinhas.png',
    alt: 'Canetinhas coloridas',
    className:
      'bottom-[-2%] right-[0%] w-[39%] rotate-[-8deg] sm:right-[4%] sm:w-[34%]',
  },
];

export default function Hero() {
  const scrollToProducts = () => {
    document.querySelector('#produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-cream pt-[82px]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-cream-dark bg-cream-light shadow-[0_18px_50px_rgba(87,51,35,0.10)]">
          <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-yellow/25 blur-3xl" />
          <div className="pointer-events-none absolute right-[30%] top-[-5rem] h-56 w-56 rounded-full bg-blue/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 right-[-2rem] h-64 w-64 rounded-full bg-lilac/15 blur-3xl" />

          <div className="relative grid items-center gap-8 px-5 pb-7 pt-7 sm:px-8 sm:pb-8 sm:pt-8 lg:grid-cols-[0.8fr_1.05fr_1.2fr] lg:gap-6 lg:px-10 lg:pb-9 lg:pt-9">
            <div className="relative z-10 flex items-center gap-4 sm:gap-5 lg:block">
              <div className="relative shrink-0">
                <div className="absolute -inset-2 rounded-[1.5rem] bg-yellow/45 rotate-6" />
                <img
                  src={`${import.meta.env.BASE_URL}logo-papelaria-delights.jpeg`}
                  alt="Logo Papelaria Delights"
                  className="relative h-24 w-24 rounded-[1.35rem] border-4 border-white object-cover shadow-lg sm:h-28 sm:w-28 lg:h-32 lg:w-32"
                />
              </div>
              <div className="lg:mt-5">
                <p className="font-display text-xl font-extrabold tracking-tight text-brown sm:text-2xl">
                  PAPELARIA
                  <span className="block text-red">DELIGHTS</span>
                </p>
                <p className="mt-2 max-w-[210px] text-xs leading-relaxed text-brown/65 sm:text-sm">
                  Há 24 anos transformando ideias em detalhes especiais.
                </p>
              </div>
            </div>

            <div className="relative z-10 max-w-md lg:pb-2">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-red/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-red">
                <span className="h-1.5 w-1.5 rounded-full bg-red" />
                Papelaria criativa
              </span>
              <h1 className="font-display text-3xl font-extrabold leading-[1.08] text-brown sm:text-4xl lg:text-[2.9rem]">
                Tudo para estudar, criar e se organizar{' '}
                <span className="text-red">💗</span>
              </h1>
              <p className="mt-4 text-sm font-medium leading-relaxed text-brown/65 sm:text-base">
                Materiais escolares <span className="text-red">•</span>{' '}
                Papelaria criativa <span className="text-red">•</span>{' '}
                Personalizados
              </p>
              <button
                type="button"
                onClick={scrollToProducts}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red px-5 py-3 font-display font-bold text-white shadow-lg shadow-red/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-dark hover:shadow-xl active:scale-95"
              >
                Ver produtos
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="relative mx-auto h-[245px] w-full max-w-[440px] sm:h-[285px] lg:h-[300px]">
              <div className="absolute inset-x-[8%] top-[8%] h-[74%] rotate-[-5deg] rounded-[44%_56%_48%_52%/52%_43%_57%_48%] bg-white/75" />
              <div className="absolute left-[8%] top-[28%] h-20 w-20 rounded-[1.5rem] bg-yellow/50 rotate-12 sm:h-28 sm:w-28" />
              <div className="absolute bottom-[7%] right-[7%] h-24 w-24 rounded-full bg-blue/20 sm:h-32 sm:w-32" />
              <div className="absolute right-[18%] top-[2%] h-10 w-10 rounded-full bg-lilac/40 sm:h-14 sm:w-14" />

              {bannerProducts.map((product, index) => (
                <img
                  key={product.image}
                  src={`${import.meta.env.BASE_URL}${product.image}`}
                  alt={product.alt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className={`absolute h-auto max-h-[78%] object-contain drop-shadow-[0_14px_12px_rgba(87,51,35,0.18)] transition-transform duration-500 hover:scale-105 ${product.className}`}
                />
              ))}

              <Star className="absolute left-[2%] top-[5%] h-6 w-6 rotate-12 fill-yellow text-yellow sm:h-8 sm:w-8" />
              <Heart className="absolute bottom-[17%] left-[42%] h-5 w-5 -rotate-12 fill-red/80 text-red" />
              <span className="absolute bottom-[8%] left-[3%] h-2 w-2 rounded-full bg-red" />
              <span className="absolute right-[30%] top-[18%] h-2 w-2 rounded-full bg-blue" />
            </div>
          </div>

          <div className="relative grid gap-3 border-t border-cream-dark bg-white/65 px-5 py-4 text-xs font-medium text-brown/70 sm:grid-cols-3 sm:px-8 lg:px-10">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-red"
            >
              <Phone className="h-4 w-4 shrink-0 text-red" />
              <span>WhatsApp: {WHATSAPP_NUMBER}</span>
            </a>
            <a
              href={`https://instagram.com/${STORE_INSTAGRAM}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-red"
            >
              <Instagram className="h-4 w-4 shrink-0 text-red" />
              <span>Instagram: @{STORE_INSTAGRAM}</span>
            </a>
            <a
              href={`mailto:${STORE_EMAIL}`}
              className="flex min-w-0 items-center gap-2 transition-colors hover:text-red"
            >
              <Mail className="h-4 w-4 shrink-0 text-red" />
              <span className="truncate">{STORE_EMAIL}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}