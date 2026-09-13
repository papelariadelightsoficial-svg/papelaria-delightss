import { Star } from 'lucide-react';
import { REVIEWS } from '@/data/reviews';

export function Reviews() {
  return (
    <section
      id="avaliacoes"
      className="relative py-16 bg-delight-cream overflow-hidden"
    >
      <div className="absolute top-10 left-[5%] text-4xl text-delight-yellow animate-float-slow opacity-50">
        <Star style={{ fill: 'currentColor' }} />
      </div>

      <div className="absolute bottom-10 right-[5%] text-3xl text-delight-pink animate-float-medium opacity-50">
        <Star style={{ fill: 'currentColor' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="section-title mb-2">
            Quem compra, recomenda! <span className="inline-block">⭐</span>
          </h2>

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

          <p className="font-body text-sm text-delight-brown/50 mt-3 bg-delight-yellow/20 inline-block px-4 py-1.5 rounded-full">
            ⚠️ Avaliações demonstrativas do projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 shadow-lg card-hover border-2 border-delight-cream-dark animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-full ${review.avatarColor} flex items-center justify-center text-white font-display font-extrabold text-lg`}
                >
                  {review.avatarLetter}
                </div>

                <div>
                  <h3 className="font-display font-bold text-delight-brown">
                    {review.name}
                  </h3>

                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i <= review.stars
                            ? 'text-delight-yellow'
                            : 'text-gray-300'
                        }`}
                        style={{ fill: 'currentColor' }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="font-body text-sm text-delight-brown/80 leading-relaxed">
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-xs text-delight-brown/40 mt-6">
          Estas avaliações são demonstrativas e não representam avaliações reais
          de clientes.
        </p>
      </div>
    </section>
  );
}
