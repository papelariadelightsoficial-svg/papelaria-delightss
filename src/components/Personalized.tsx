import { Heart } from 'lucide-react';
import { WHATSAPP_NUMBER, PERSONALIZED_MESSAGE } from '@/config/store';

export default function Personalized() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(PERSONALIZED_MESSAGE);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const scrollToContact = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="personalizados" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-red/5 via-cream to-yellow/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 card-shadow text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-red/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-yellow/10 translate-y-1/2 -translate-x-1/2" />
          <div className="relative">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-red/10 flex items-center justify-center mb-6"><Heart className="w-8 h-8 text-red" /></div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-brown mb-4">Produtos Personalizados</h2>
            <p className="text-base sm:text-lg text-brown/70 max-w-2xl mx-auto mb-8 leading-relaxed">Crie algo único e especial para você! Nossos produtos personalizados são feitos com carinho para deixar cada momento ainda mais especial.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={handleWhatsApp} className="bg-red hover:bg-red-dark text-white font-semibold px-7 py-3.5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">QUERO PERSONALIZAR</button>
              <button onClick={scrollToContact} className="bg-cream-dark hover:bg-yellow/30 text-brown font-semibold px-7 py-3.5 rounded-2xl transition-all duration-300 hover:shadow-md">Falar com a loja</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
