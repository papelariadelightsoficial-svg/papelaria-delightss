import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/data/reviews';

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title mb-2">
            Tem alguma dúvida? A DELLY explica!{' '}
            <span className="inline-block">💬</span>
          </h2>

          <p className="font-body text-delight-brown/60 text-lg">
            As perguntas mais frequentes, respondidas com carinho!
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-delight-cream rounded-2xl overflow-hidden border-2 border-delight-cream-dark"
            >
              <button
                onClick={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-display font-bold text-delight-brown text-base">
                  {item.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-delight-red flex-shrink-0 transition-transform duration-300 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === item.id ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-4 pb-4 font-body text-sm text-delight-brown/80 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
