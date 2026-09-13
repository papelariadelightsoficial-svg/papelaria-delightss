import { Phone, Mail, Instagram, MapPin } from 'lucide-react';
import Logo from '@/components/Logo';
import { WHATSAPP_NUMBER, STORE_EMAIL, STORE_INSTAGRAM } from '@/config/store';

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Personalizados', href: '#personalizados' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brown text-cream pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="bg-cream rounded-2xl p-3 inline-block mb-4"><Logo /></div>
            <p className="text-cream/70 text-sm italic max-w-xs">"Pequenos detalhes. Grandes momentos."</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}><a href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }} className="text-cream/70 hover:text-yellow transition-colors text-sm">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-cream/70 text-sm"><Phone className="w-4 h-4 flex-shrink-0 text-yellow" /><span>{WHATSAPP_NUMBER === '5511999999999' ? '(11) 99999-9999' : WHATSAPP_NUMBER}</span></li>
              <li className="flex items-center gap-2.5 text-cream/70 text-sm"><Mail className="w-4 h-4 flex-shrink-0 text-yellow" /><span>{STORE_EMAIL === 'contato@papelariadelights.com' ? 'contato@papelariadelights.com' : STORE_EMAIL}</span></li>
              <li className="flex items-center gap-2.5 text-cream/70 text-sm"><Instagram className="w-4 h-4 flex-shrink-0 text-yellow" /><span>{STORE_INSTAGRAM === 'papelariadelights' ? '@papelariadelights' : `@${STORE_INSTAGRAM}`}</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Papelaria Delights</h4>
            <p className="text-cream/70 text-sm leading-relaxed mb-3">Há 24 anos transformando ideias em detalhes especiais. Papelaria criativa e personalizada feita com carinho para você.</p>
            <div className="flex items-center gap-2 text-cream/60 text-sm"><MapPin className="w-4 h-4 text-yellow" /><span>COLOCAR ENDEREÇO</span></div>
          </div>
        </div>
        <div className="border-t border-cream/10 pt-6 text-center">
          <p className="text-cream/50 text-sm">© {new Date().getFullYear()} Papelaria Delights. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
