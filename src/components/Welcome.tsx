import { Star, Heart } from 'lucide-react';
import {
  STORE_CONFIG,
  getWhatsAppUrl,
  WHATSAPP_MESSAGES,
} from '@/config/store';

export default function Welcome() {
  const scrollToProducts = () => {
    document
      .querySelector('#produtos')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-cream py-16 sm:py-20">
      {/* Decorações */}
      <Star
        className="absolute top-10 left-[8%] w-6 h-6 text-yellow opacity-60"
        style={{ fill: 'currentColor' }}
      />

      <Star
        className="absolute top-20 right-[10%] w-4 h-4 text-pink opacity-60"
        style={{ fill: 'currentColor' }}
      />

      <Heart
        className="absolute bottom-12 left-[12%] w-5 h-5 text-red opacity-50"
        style={{ fill: 'currentColor' }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-block bg-yellow/30 px-4 py-1.5 rounded-full mb-5">
          <span className="font-display font-bold text-brown text-sm">
            ✨ Há 24 anos fazendo história!
          </span>
        </div>

        <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight text-brown mb-5">
          Bem-vindo ao mundo da{' '}
          <span className="text-red">
            Papelaria Delights!
          </span>{' '}
          <span className="inline-block">✨</span>
        </h1>

        <p className="text-lg md:text-xl font-body text-brown/80 mb-2">
          {STORE_CONFIG.tagline}
        </p>

        <p className="text-base md:text-lg font-body text-brown/60 mb-8">
          Tudo para estudar, criar, organizar e deixar seus momentos ainda mais
          coloridos!
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={scrollToProducts}
            className="bg-red hover:bg-red-dark text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105"
          >
            🛍️ CONHEÇA NOSSOS PRODUTOS
          </button>

          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.customization)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue hover:opacity-90 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105"
          >
            💖 PERSONALIZE O SEU
          </a>
        </div>
      </div>
    </section>
  );
}
