import { Phone, Mail, Instagram, MapPin } from 'lucide-react';
import {
  WHATSAPP_NUMBER,
  STORE_EMAIL,
  STORE_INSTAGRAM,
} from '@/config/store';

export default function Contact() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Olá! Vim pelo site da Papelaria Delights e gostaria de mais informações.'
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      '_blank'
    );
  };

  return (
    <section
      id="contato"
      className="py-16 sm:py-20 lg:py-24 bg-cream-light"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brown mb-3">
            Fale com a Papelaria Delights
          </h2>

          <p className="text-brown/60">
            Estamos aqui para ajudar você com carinho!
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* WhatsApp */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="bg-white rounded-2xl p-6 text-center card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="w-14 h-14 mx-auto rounded-2xl bg-green-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-green-600" />
            </div>

            <h3 className="font-semibold text-brown mb-1">
              WhatsApp
            </h3>

            <p className="text-sm text-brown/60">
              {WHATSAPP_NUMBER === '5511999999999'
                ? '(11) 99999-9999'
                : WHATSAPP_NUMBER}
            </p>
          </button>

          {/* E-mail */}
          <a
            href={
              STORE_EMAIL === 'contato@papelariadelights.com'
                ? '#'
                : `mailto:${STORE_EMAIL}`
            }
            className="bg-white rounded-2xl p-6 text-center card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="w-14 h-14 mx-auto rounded-2xl bg-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-blue" />
            </div>

            <h3 className="font-semibold text-brown mb-1">
              E-mail
            </h3>

            <p className="text-sm text-brown/60 break-words">
              {STORE_EMAIL === 'contato@papelariadelights.com'
                ? 'contato@papelariadelights.com'
                : STORE_EMAIL}
            </p>
          </a>

          {/* Instagram */}
          <a
            href={
              STORE_INSTAGRAM === 'papelariadelights'
                ? '#'
                : `https://instagram.com/${STORE_INSTAGRAM}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-6 text-center card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="w-14 h-14 mx-auto rounded-2xl bg-red/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Instagram className="w-7 h-7 text-red" />
            </div>

            <h3 className="font-semibold text-brown mb-1">
              Instagram
            </h3>

            <p className="text-sm text-brown/60">
              {STORE_INSTAGRAM === 'papelariadelights'
                ? '@papelariadelights'
                : `@${STORE_INSTAGRAM}`}
            </p>
          </a>

          {/* Endereço demonstrativo */}
          <div className="bg-white rounded-2xl p-6 text-center card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-yellow/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7 text-red" />
            </div>

            <h3 className="font-semibold text-brown mb-1">
              Endereço
            </h3>

            <p className="text-sm text-brown/70 leading-relaxed">
              Rua das Cores, 124
              <br />
              Centro — Dourados/MS
            </p>

            <p className="text-xs text-brown/40 italic mt-2">
              Endereço demonstrativo para o trabalho
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
