import { Heart, Sparkles } from 'lucide-react';

export default function Welcome() {
  const scrollToProducts = () => {
    document
      .querySelector('#produtos')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPersonalized = () => {
    document
      .querySelector('#personalizados')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="border-y border-cream-dark bg-white py-8 sm:py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow/25 text-yellow">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <p className="font-display text-lg font-bold text-brown">Um mundo feito para suas ideias</p>
            <p className="text-sm text-brown/60">Tudo para estudar, criar e organizar com mais personalidade.</p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <button
            type="button"
            onClick={scrollToProducts}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red px-5 py-3 font-display font-bold text-white transition-colors hover:bg-red-dark"
          >
            Conheça os produtos
          </button>
          <button
            type="button"
            onClick={scrollToPersonalized}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue/25 bg-blue/10 px-5 py-3 font-display font-bold text-blue-dark transition-colors hover:bg-blue/20"
          >
            <Heart className="h-4 w-4" />
            Personalize o seu
          </button>
        </div>
      </div>
    </section>
  );
}
