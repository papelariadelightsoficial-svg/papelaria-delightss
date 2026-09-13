export default function About() {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative rounded-3xl overflow-hidden card-shadow order-2 lg:order-1">
            <img src="https://images.pexels.com/photos/5717492/pexels-photo-5717492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Materiais de papelaria organizados" loading="lazy" className="w-full h-[300px] sm:h-[400px] object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brown mb-5">Sobre a Papelaria Delights</h2>
            <p className="text-base sm:text-lg text-brown/70 leading-relaxed mb-6">A Papelaria Delights nasceu para transformar produtos de papelaria em experiências especiais. Unimos criatividade, carinho e personalidade para oferecer produtos que tornam os estudos, a organização e os momentos criativos ainda mais divertidos.</p>
            <div className="bg-yellow/15 rounded-2xl px-6 py-5 border-l-4 border-yellow">
              <p className="font-display text-xl sm:text-2xl font-semibold text-brown italic">"Pequenos detalhes. Grandes momentos."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
