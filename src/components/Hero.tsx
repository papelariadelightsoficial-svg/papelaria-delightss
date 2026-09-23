export default function Hero() {
  const scrollToProducts = () => {
    document.querySelector('#produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-cream">
      <div className="w-full">
        <img
          src={`${import.meta.env.BASE_URL}banner-papelaria-delights.png`}
          alt="Papelaria Delights — Tudo o que você precisa em um só lugar"
          className="h-auto w-full object-cover"
          loading="eager"
        />
      </div>

      <div className="flex justify-center px-4 py-8">
        <button
          type="button"
          onClick={scrollToProducts}
          className="inline-flex items-center gap-2 rounded-2xl bg-red px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-dark hover:shadow-lg active:scale-95"
        >
          CONHEÇA NOSSOS PRODUTOS
        </button>
      </div>
    </section>
  );
}