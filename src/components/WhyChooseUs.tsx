import { Sparkles, Heart, Star, ShoppingBag } from 'lucide-react';

const benefits = [
  { icon: Sparkles, title: 'Criatividade', description: 'Produtos pensados para deixar tudo mais especial.', color: 'text-yellow', bg: 'bg-yellow/15' },
  { icon: Heart, title: 'Personalização', description: 'Detalhes feitos para combinar com você.', color: 'text-red', bg: 'bg-red/10' },
  { icon: Star, title: 'Qualidade', description: 'Produtos escolhidos com cuidado.', color: 'text-blue', bg: 'bg-blue/10' },
  { icon: ShoppingBag, title: 'Carinho', description: 'Tudo preparado com atenção em cada detalhe.', color: 'text-brown', bg: 'bg-brown/10' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brown mb-3">Por que escolher a Delights?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="bg-white rounded-2xl p-6 text-center card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className={`w-14 h-14 mx-auto rounded-2xl ${benefit.bg} flex items-center justify-center mb-4`}><Icon className={`w-7 h-7 ${benefit.color}`} /></div>
                <h3 className="font-display text-lg font-bold text-brown mb-2">{benefit.title}</h3>
                <p className="text-sm text-brown/60 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
