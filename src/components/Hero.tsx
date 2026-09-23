export default function Hero() {
  const scrollToProducts = () => {
    document.querySelector('#produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-cream pt-[82px]">
      <div className="absolute -left-24 top-32 h-64 w-64 rounded-full bg-yellow/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-lilac/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8 lg:py-24">
        <div className="relative z-10">
          <span className="mb-5 inline-flex rounded-full border border-red/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-red">
            Papelaria criativa desde 2000
          </span>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] text-brown sm:text-5xl lg:text-6xl">
            Tudo o que você precisa{' '}
            <span className="text-red">em um só lugar!</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brown/70 sm:text-lg">
            Papelaria, criatividade e produtos especiais para deixar seus estudos ainda mais incríveis.
          </p>
          <p className="mt-3 text-sm font-semibold text-brown/55">
            Há 24 anos transformando ideias em detalhes especiais.
          </p>
          <button
            onClick={scrollToProducts}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red px-7 py-3.5 font-display font-bold text-white shadow-lg shadow-red/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-dark hover:shadow-xl active:scale-95"
          >
            Ver produtos
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="relative">
          <div className="absolute -right-3 -top-5 h-16 w-16 rotate-12 rounded-2xl bg-yellow/80 sm:h-20 sm:w-20" />
          <div className="absolute -bottom-5 -left-3 h-20 w-20 rounded-full border-[12px] border-blue/25" />
          <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl shadow-brown/10">
            <img
              src={`${import.meta.env.BASE_URL}banner-papelaria-delights.png`}
              alt="Materiais coloridos da Papelaria Delights"
              className="h-auto w-full object-contain"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-5 right-6 rounded-2xl bg-white px-4 py-3 shadow-xl">
            <p className="text-xs font-semibold text-brown/55">Feito para</p>
            <p className="font-display font-bold text-red">estudar e criar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
