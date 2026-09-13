export default function Hero() {
  const scrollToProducts = () => {
    document.querySelector('#produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-cream">
      {/* Banner */}
      <div className="w-full">
        <img
          src={`${import.meta.env.BASE_URL}banner-papelaria-delights.png`}
          alt="Papelaria Delights — Tudo o que você precisa em um só lugar"
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </div>

      {/* Botão abaixo do banner */}
      <div className="flex justify-center py-8 px-4">
        <button
          onClick={scrollToProducts}
          className="inline-flex items-center gap-2 bg-red hover:bg-red-dark text-white font-semibold px-7 py-3.5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
        >
          CONHEÇA NOSSOS PRODUTOS
        </button>
      </div>
    </section>
  );
}
