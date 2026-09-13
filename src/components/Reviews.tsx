import { Star } from 'lucide-react';
import { REVIEWS } from '@/data/reviews';

const DEMO_PHOTOS = [
  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
];

export function Reviews() {
  return (
    <section
      id="avaliacoes"
      className="relative py-16 bg-delight-cream overflow-hidden"
    >
      {/* Decorações */}
      <div className="absolute top-10 left-[5%] text-4xl text-delight-yellow animate-float-slow opacity-50">
        <Star style={{ fill: 'currentColor' }} />
      </div>

      <div className="absolute bottom-10 right-[5%] text-3xl text-delight-pink animate-float-medium opacity-50">
        <Star style={{ fill: 'currentColor' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="section-title mb-2">
            Quem compra, recomenda!{' '}
            <span className="inline-block">⭐</span>
          </h2>

          {/* Nota */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md mt-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-delight-yellow"
                  style={{ fill: 'currentColor' }}
                />
              ))}
            </div>

            <span className="font-display font-bold text-delight-brown text-lg">
              4,9 de 5
            </span>
          </div>

          {/* Aviso demonstrativo */}
          <div className="max-w-2xl mx-auto mt-5 bg-delight-yellow/20 border border-delight-yellow/40 rounded-2xl px-5 py-4">
            <p className="font-display font-bold text-delight-brown text-sm sm:text-base">
              ⚠️ Avaliações e fotos demonstrativas do trabalho
            </p>

            <p className="font-body text-sm text-delight-brown/65 mt-1 leading-relaxed">
              As pessoas, imagens e comentários abaixo são fictícios e foram
              usados apenas para apresentação do trabalho.
            </p>
          </div>
        </div>

        {/* Avaliações */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 shadow-lg card-hover border-2 border-delight-cream-dark animate-slide-up"
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              {/* Pessoa */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative flex-shrink-0">
                  <img
                    src={DEMO_PHOTOS[idx % DEMO_PHOTOS.length]}
                    alt={`Foto demonstrativa de ${review.name}`}
                    loading="lazy"
                    className="w-14 h-14 rounded-full object-cover border-2 border-delight-yellow shadow-sm"
                  />

                  <span
                    className="absolute -bottom-1 -right-1 w-5 h-5 bg-delight-pink text-white rounded-full flex items-center justify-center text-[10px]"
                    title="Perfil demonstrativo"
                  >
                    ✨
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-delight-brown">
                    {review.name}
                  </h3>

                  <div className="flex items-center gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i <= review.stars
                            ? 'text-delight-yellow'
                            : 'text-gray-300'
                        }`}
                        style={{
                          fill: 'currentColor',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Comentário */}
              <p className="font-body text-sm text-delight-brown/80 leading-relaxed">
                "{review.comment}"
              </p>

              {/* Identificação */}
              <p className="font-body text-[10px] uppercase tracking-wide text-delight-brown/35 mt-4">
                Perfil demonstrativo
              </p>
            </div>
          ))}
        </div>

        {/* Aviso final */}
        <p className="text-center font-body text-xs text-delight-brown/45 mt-7">
          Estas avaliações, nomes e imagens são demonstrativos e não representam
          clientes reais da Papelaria Delights.
        </p>
      </div>
    </section>
  );
}
