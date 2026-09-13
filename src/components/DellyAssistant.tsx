import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { findProductByName, formatPrice } from '@/data/products';

interface ChatMessage {
  role: 'delly' | 'user';
  text: string;
}

const quickQuestions = [
  { label: 'Ver produtos', icon: '🛍️' },
  { label: 'Consultar preços', icon: '💰' },
  { label: 'Como comprar?', icon: '🛒' },
  { label: 'Como faço um pedido?', icon: '📦' },
  { label: 'Produtos personalizados', icon: '💖' },
  { label: 'Falar com a loja', icon: '📞' },
];

function generateResponse(input: string): string {
  const lower = input.toLowerCase().trim();

  if (/^(oi|olá|ola|hi|hello|hey|e aí|eai|bom dia|boa tarde|boa noite)/i.test(lower)) {
    return 'Oi! 💖 Seja muito bem-vindo à Papelaria Delights! Eu sou a Delly. Posso te ajudar a encontrar produtos, consultar preços ou entender como fazer seu pedido. ✨';
  }

  if (lower.includes('como comprar') || lower.includes('como faço um pedido') || lower.includes('como pedir')) {
    return 'É fácil! 😊 Escolha os produtos, adicione ao carrinho e depois clique em "Finalizar pedido". O pedido poderá ser enviado pelo WhatsApp da loja.';
  }

  if (lower.includes('personalizad') || lower.includes('personalizar')) {
    return 'Temos produtos personalizados 💖! Você pode falar com a loja para solicitar seu produto e combinar os detalhes. O Produto personalizado começa a partir de R$ 20,00.';
  }

  if (lower.includes('falar com a loja') || lower.includes('contato') || lower.includes('whatsapp') || lower.includes('atendente')) {
    return 'Você pode falar com a equipe da Papelaria Delights pelo WhatsApp, e-mail ou Instagram! 📞 Vá até a seção "Contato" no final da página para ver todos os dados.';
  }

  if (lower.includes('quanto') || lower.includes('preço') || lower.includes('preco') || lower.includes('valor') || lower.includes('custa')) {
    const product = findProductByName(lower);
    if (product) {
      return `O ${product.name} está por ${formatPrice(product.price)}. 💖 Quer adicionar ao carrinho? É só clicar no produto lá na seção de produtos!`;
    }
    return 'Posso te ajudar com preços! 🛍️ Temos produtos a partir de R$ 2,00. Me diga qual produto você quer saber o preço, ou clique em "Ver produtos" para ver todos!';
  }

  if (lower.includes('tem ') || lower.includes('vocês têm') || lower.includes('existe')) {
    const product = findProductByName(lower);
    if (product) {
      return `Temos sim! ✨ O ${product.name} está por ${formatPrice(product.price)}. 💖`;
    }
  }

  if (lower.includes('ver produtos') || lower.includes('mostrar produtos') || lower.includes('quais produtos') || lower.includes('catálogo') || lower.includes('catalogo')) {
    return 'Claro! 🛍️ Temos cadernos, materiais escolares, papéis, kits e produtos personalizados. Role a página até a seção "Nossos Produtos" ou clique em uma categoria para ver tudo!';
  }

  if (lower.includes('carrinho') || lower.includes('adicionar') || lower.includes('remover') || lower.includes('quantidade') || lower.includes('limpar')) {
    return 'Posso te orientar sobre o carrinho! 🛒 Para adicionar produtos, clique no botão "Adicionar" em cada produto. Para remover ou alterar quantidade, clique no ícone do carrinho no topo da página. Lá você vê tudo e pode finalizar seu pedido!';
  }

  if (lower.includes('categoria') || lower.includes('caderno') || lower.includes('lápis') || lower.includes('lapis') || lower.includes('caneta') || lower.includes('papel') || lower.includes('kit')) {
    const product = findProductByName(lower);
    if (product) {
      return `Encontrei! 💖 O ${product.name} está por ${formatPrice(product.price)}. Você pode encontrá-lo na seção de produtos!`;
    }
    return 'Temos várias categorias! 🛍️ Cadernos, Materiais escolares, Papéis, Kits e Personalizados. Quer que eu te mostre alguma categoria específica?';
  }

  if (lower.includes('obrigad') || lower.includes('valeu') || lower.includes('agradec')) {
    return 'De nada! 💖 Estou aqui sempre que você precisar. Se tiver mais alguma dúvida, é só perguntar! ✨';
  }

  return 'Hmm, essa informação eu não tenho certeza. 😅 Mas posso te orientar a falar diretamente com a equipe da Papelaria Delights. Vá até a seção "Contato" no final da página!';
}

export default function DellyAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'delly', text: 'Oi! 💖 Eu sou a Delly, assistente virtual da Papelaria Delights! Como posso ajudar você hoje?' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;
    const userMessage: ChatMessage = { role: 'user', text };
    const response = generateResponse(text);
    const dellyMessage: ChatMessage = { role: 'delly', text: response };
    setMessages((prev) => [...prev, userMessage]);
    setTimeout(() => { setMessages((prev) => [...prev, dellyMessage]); }, 600);
    setInput('');
  }, []);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); sendMessage(input); };
  const handleQuickQuestion = (question: string) => { sendMessage(question); };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-red hover:bg-red-dark text-white rounded-full shadow-xl transition-all duration-300 hover:scale-105 ${isOpen ? 'px-4 py-3' : 'w-14 h-14 justify-center'}`} aria-label="Assistente Delly">
        {isOpen ? (<><X className="w-5 h-5" /><span className="font-medium text-sm hidden sm:inline">Fechar</span></>) : (<><MessageCircle className="w-6 h-6" /><span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow text-brown text-xs font-bold rounded-full flex items-center justify-center animate-pulse-soft">💖</span></>)}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-3 sm:right-5 z-40 w-[calc(100vw-1.5rem)] sm:w-96 max-w-md bg-cream rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up border border-cream-dark" style={{ maxHeight: 'min(600px, calc(100vh - 120px))' }}>
          <div className="bg-gradient-to-r from-red to-red-light px-5 py-4 flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-cream flex items-center justify-center text-xl flex-shrink-0">💖</div>
            <div className="flex-1"><h3 className="font-display text-lg font-bold text-white">Delly</h3><p className="text-cream/80 text-xs">Assistente virtual • Online</p></div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors text-white" aria-label="Fechar"><X className="w-5 h-5" /></button>
          </div>

          <div className="flex-1 overflow-y-auto custom-scroll px-4 py-4 space-y-3 bg-cream-light">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${msg.role === 'user' ? 'bg-blue text-white rounded-br-md' : 'bg-white text-brown rounded-bl-md card-shadow'}`}>{msg.text}</div>
              </div>
            ))}
            {messages.length > 0 && messages[messages.length - 1].role === 'user' && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 card-shadow">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-brown-light/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-brown-light/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-brown-light/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-4 py-3 bg-cream-light border-t border-cream-dark">
            <div className="flex gap-1.5 overflow-x-auto scrollbar-hide pb-2">
              {quickQuestions.map((q) => (
                <button key={q.label} onClick={() => handleQuickQuestion(q.label)} className="flex-shrink-0 text-xs font-medium bg-white text-brown px-3 py-1.5 rounded-full border border-cream-dark hover:bg-yellow/20 hover:border-yellow transition-colors whitespace-nowrap">{q.icon} {q.label}</button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 bg-white border-t border-cream-dark">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Digite sua mensagem..." className="flex-1 bg-cream rounded-xl px-4 py-2.5 text-sm text-brown placeholder-brown-light/50 focus:outline-none focus:ring-2 focus:ring-yellow/50 transition-all" />
            <button type="submit" className="w-10 h-10 flex items-center justify-center rounded-xl bg-red hover:bg-red-dark text-white transition-colors flex-shrink-0" aria-label="Enviar"><Send className="w-4 h-4" /></button>
          </form>
        </div>
      )}
    </>
  );
}
