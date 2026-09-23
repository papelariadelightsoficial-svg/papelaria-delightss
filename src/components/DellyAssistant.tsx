import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type FormEvent,
} from 'react';

import {
  X,
  Send,
} from 'lucide-react';

import {
  products,
  findProductByName,
  formatPrice,
} from '@/data/products';

import { Mascot } from '@/components/Mascot';

interface ChatMessage {
  role: 'delly' | 'user';
  text: string;
}

const quickQuestions = [
  {
    label: 'Quais produtos vocês têm?',
    icon: '🛍️',
  },
  {
    label: 'Quero ver os preços',
    icon: '💰',
  },
  {
    label: 'Como faço um pedido?',
    icon: '📦',
  },
  {
    label: 'Quero personalizar',
    icon: '🎁',
  },
  {
    label: 'Meu carrinho',
    icon: '🛒',
  },
  {
    label: 'Falar com a loja',
    icon: '💬',
  },
];

function normalizeText(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function generateResponse(input: string): string {
  const lower = normalizeText(input);

  /* SAUDAÇÕES */
  if (
    /^(oi|ola|hi|hello|hey|e ai|eai|bom dia|boa tarde|boa noite)/i.test(
      lower
    )
  ) {
    return (
      'Oi! 💖 Eu sou a DELLY!\n\n' +
      'Sou a assistente virtual da Papelaria Delights. ✨\n\n' +
      'Posso ajudar você com produtos, preços, pedidos, carrinho e personalizações!'
    );
  }

  /* PRODUTO ESPECÍFICO */
  const product = findProductByName(lower);

  if (
    product &&
    (
      lower.includes('preco') ||
      lower.includes('valor') ||
      lower.includes('quanto') ||
      lower.includes('custa') ||
      lower.includes('tem') ||
      lower.includes('voces tem') ||
      lower.includes('procuro') ||
      lower.includes('quero')
    )
  ) {
    return (
      `Encontrei! 💖\n\n` +
      `${product.name}\n` +
      `💰 ${formatPrice(product.price)}\n` +
      `📚 Categoria: ${product.category}\n\n` +
      `Você encontra esse produto na seção de produtos! ✨`
    );
  }

  /* PEDIDO */
  if (
    lower.includes('como comprar') ||
    lower.includes('como faco um pedido') ||
    lower.includes('como pedir') ||
    lower.includes('fazer pedido')
  ) {
    return (
      'É super fácil fazer um pedido! 📦\n\n' +
      '1. Escolha seus produtos favoritos\n' +
      '2. Clique em "Adicionar ao carrinho"\n' +
      '3. Abra seu carrinho\n' +
      '4. Confira os produtos e quantidades\n' +
      '5. Finalize seu pedido pelo atendimento da loja 💖'
    );
  }

  /* PERSONALIZADOS */
  if (
    lower.includes('personaliz') ||
    lower.includes('quero personalizar')
  ) {
    return (
      'Adoramos personalizar! 🎁💖\n\n' +
      'Temos cadernos, kits e outros produtos personalizados.\n\n' +
      'Os personalizados começam a partir de R$ 20,00. ' +
      'Os detalhes e o valor final dependem do modelo escolhido.'
    );
  }

  /* CARRINHO */
  if (
    lower.includes('carrinho') ||
    lower.includes('adicionar') ||
    lower.includes('remover') ||
    lower.includes('quantidade') ||
    lower.includes('limpar carrinho')
  ) {
    return (
      'Eu te ajudo com o carrinho! 🛒\n\n' +
      'Para adicionar um produto, clique em "Adicionar ao carrinho".\n\n' +
      'No ícone do carrinho você pode conferir os produtos, aumentar ou diminuir a quantidade e remover itens.'
    );
  }

  /* PREÇOS */
  if (
    lower.includes('preco') ||
    lower.includes('precos') ||
    lower.includes('valor') ||
    lower.includes('quanto custa') ||
    lower.includes('quero ver os precos')
  ) {
    const sorted = [...products].sort(
      (a, b) => a.price - b.price
    );

    const cheapest = sorted[0];

    return (
      'Claro! 💰✨\n\n' +
      `Temos produtos a partir de ${formatPrice(
        cheapest.price
      )}.\n\n` +
      'Se você me disser o nome de um produto, eu tento encontrar o preço para você. 💖'
    );
  }

  /* PRODUTOS */
  if (
    lower.includes('ver produtos') ||
    lower.includes('mostrar produtos') ||
    lower.includes('quais produtos') ||
    lower.includes('catalogo') ||
    lower.includes('produtos voces tem')
  ) {
    return (
      `Temos ${products.length} produtos no catálogo! 🛍️✨\n\n` +
      '📚 Cadernos\n' +
      '✏️ Materiais escolares\n' +
      '🎨 Papéis\n' +
      '🎁 Kits\n' +
      '💖 Produtos personalizados\n\n' +
      'Você pode conferir tudo na seção de produtos!'
    );
  }

  /* CADERNOS */
  if (lower.includes('caderno')) {
    const encontrados = products
      .filter(
        (item) =>
          item.category === 'Cadernos' ||
          normalizeText(item.name).includes('caderno')
      )
      .slice(0, 4);

    if (encontrados.length > 0) {
      return (
        'Temos vários cadernos! 📚💖\n\n' +
        encontrados
          .map(
            (item) =>
              `• ${item.name} — ${formatPrice(
                item.price
              )}`
          )
          .join('\n') +
        '\n\nConfira todos na seção de produtos! ✨'
      );
    }
  }

  /* CANETAS */
  if (
    lower.includes('caneta') ||
    lower.includes('canetinha') ||
    lower.includes('marcador')
  ) {
    const encontrados = products
      .filter((item) => {
        const name = normalizeText(item.name);

        return (
          name.includes('caneta') ||
          name.includes('canetinha') ||
          name.includes('marcador')
        );
      })
      .slice(0, 4);

    if (encontrados.length > 0) {
      return (
        'Olha o que encontrei! ✏️✨\n\n' +
        encontrados
          .map(
            (item) =>
              `• ${item.name} — ${formatPrice(
                item.price
              )}`
          )
          .join('\n')
      );
    }
  }

  /* KITS */
  if (lower.includes('kit')) {
    const encontrados = products
      .filter(
        (item) =>
          item.category === 'Kits' ||
          normalizeText(item.name).includes('kit')
      )
      .slice(0, 4);

    if (encontrados.length > 0) {
      return (
        'Temos kits também! 🎁✨\n\n' +
        encontrados
          .map(
            (item) =>
              `• ${item.name} — ${formatPrice(
                item.price
              )}`
          )
          .join('\n')
      );
    }
  }

  /* PRODUTO BARATO */
  if (
    lower.includes('barato') ||
    lower.includes('mais barato') ||
    lower.includes('menor preco')
  ) {
    const cheapest = [...products].sort(
      (a, b) => a.price - b.price
    )[0];

    return (
      'Tenho uma opção econômica para você! 💰💖\n\n' +
      `${cheapest.name} — ${formatPrice(
        cheapest.price
      )}\n\n` +
      'Você encontra ele na seção de produtos.'
    );
  }

  /* CONTATO */
  if (
    lower.includes('falar com a loja') ||
    lower.includes('contato') ||
    lower.includes('whatsapp') ||
    lower.includes('atendente') ||
    lower.includes('instagram') ||
    lower.includes('email')
  ) {
    return (
      'Claro! 💬💖\n\n' +
      'Você pode falar com a Papelaria Delights pelo WhatsApp, Instagram ou e-mail.\n\n' +
      'Role até a seção "Contato" no final da página para ver as opções.'
    );
  }

  /* ENDEREÇO */
  if (
    lower.includes('endereco') ||
    lower.includes('onde fica') ||
    lower.includes('localizacao')
  ) {
    return (
      '📍 O endereço demonstrativo da Papelaria Delights é:\n\n' +
      'Rua das Cores, 124 — Centro — Dourados/MS\n\n' +
      'Esse endereço é demonstrativo para o trabalho escolar.'
    );
  }

  /* AGRADECIMENTO */
  if (
    lower.includes('obrigad') ||
    lower.includes('valeu') ||
    lower.includes('agradec')
  ) {
    return (
      'De nada! 💖✨\n\n' +
      'Foi um prazer ajudar. Se precisar de mais alguma coisa, é só chamar a DELLY!'
    );
  }

  /* DESPEDIDA */
  if (
    lower === 'tchau' ||
    lower.includes('ate mais') ||
    lower.includes('falou')
  ) {
    return (
      'Tchau! 💖✨\n\n' +
      'Obrigada por visitar a Papelaria Delights. Volte sempre!'
    );
  }

  return (
    'Hmm... 🤔 Ainda não consegui entender muito bem.\n\n' +
    'Você pode perguntar sobre:\n\n' +
    '🛍️ Produtos\n' +
    '💰 Preços\n' +
    '📦 Pedidos\n' +
    '🎁 Personalizados\n' +
    '🛒 Carrinho\n' +
    '💬 Contato\n\n' +
    'Ou escreva o nome de um produto para eu tentar encontrar. 💖'
  );
}

export default function DellyAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<
    ChatMessage[]
  >([
    {
      role: 'delly',
      text:
        'Oi! Eu sou a DELLY! 💖\n' +
        'Como posso ajudar?',
    },
  ]);

  const [input, setInput] = useState('');

  const [isTyping, setIsTyping] =
    useState(false);

  const messagesEndRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages, isOpen, isTyping]);

  /* FECHA A DELLY COM ESC */
  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      'keydown',
      handleEscape
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleEscape
      );
    };
  }, []);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim() || isTyping) return;

      const userMessage: ChatMessage = {
        role: 'user',
        text: text.trim(),
      };

      setMessages((previous) => [
        ...previous,
        userMessage,
      ]);

      setInput('');
      setIsTyping(true);

      window.setTimeout(() => {
        const response = generateResponse(text);

        const dellyMessage: ChatMessage = {
          role: 'delly',
          text: response,
        };

        setMessages((previous) => [
          ...previous,
          dellyMessage,
        ]);

        setIsTyping(false);
      }, 650);
    },
    [isTyping]
  );

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* BOTÃO FLUTUANTE */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-40 group"
          aria-label="Abrir DELLY"
        >
          <div className="relative">
            <div className="flex h-[78px] w-[78px] items-center justify-center rounded-[1.6rem] bg-red shadow-2xl shadow-red/25 transition-transform duration-300 group-hover:scale-110">
              <div className="flex h-[66px] w-[66px] items-center justify-center overflow-hidden rounded-[1.25rem] border-4 border-white bg-cream">
                <Mascot
                  size={72}
                  animate
                />
              </div>
            </div>

            <span className="absolute -right-2 -top-2 rounded-full bg-yellow px-2.5 py-1 text-[11px] font-bold text-brown shadow-md">
              DELLY
            </span>
          </div>
        </button>
      )}

      {/* CHAT */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 sm:bottom-5 sm:right-5 z-40 w-full sm:w-[390px] animate-slide-up">
          <div
            className="flex flex-col overflow-hidden rounded-t-3xl border border-cream-dark bg-white shadow-2xl sm:rounded-3xl"
            style={{
              maxHeight:
                'min(650px, calc(100vh - 40px))',
            }}
          >
            {/* CABEÇALHO */}
            <div className="relative flex items-center gap-3 bg-red p-4">

              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shadow">
                <Mascot
                  size={52}
                  animate={false}
                />
              </div>

              <div>
                <h3 className="font-display font-extrabold text-white text-lg leading-none">
                  DELLY
                </h3>

                <p className="text-white/80 text-xs mt-1">
                  Assistente virtual • Online
                </p>
              </div>

              {/* X BEM VISÍVEL */}
              <button
                type="button"
                onClick={() =>
                  setIsOpen(false)
                }
                aria-label="Fechar assistente"
                title="Fechar"
                className="
                  absolute
                  top-3
                  right-3
                  z-50
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  rounded-full
                   bg-brown
                  text-white
                  shadow-lg
                  hover:scale-105
                   hover:bg-brown-dark
                  transition
                "
              >
                <X
                  size={22}
                  strokeWidth={3}
                />
              </button>

            </div>

            {/* MENSAGENS */}
            <div className="flex-1 overflow-y-auto custom-scroll p-4 space-y-3 bg-cream">

              {messages.map(
                (message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`flex ${
                      message.role === 'user'
                        ? 'justify-end'
                        : 'justify-start'
                    }`}
                  >
                    {message.role ===
                      'delly' && (
                      <div className="w-8 h-8 mr-2 rounded-full bg-white shadow-sm flex items-center justify-center overflow-hidden flex-shrink-0">
                        <Mascot
                          size={34}
                          animate={false}
                        />
                      </div>
                    )}

                    <div
                      className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                        message.role === 'user'
                          ? 'bg-blue text-white rounded-br-sm'
                          : 'bg-white text-brown rounded-bl-sm shadow-sm'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                )
              )}

              {/* DELLY DIGITANDO */}
              {isTyping && (
                <div className="flex justify-start items-end">

                  <div className="w-8 h-8 mr-2 rounded-full bg-white shadow-sm flex items-center justify-center overflow-hidden">
                    <Mascot
                      size={34}
                      animate={false}
                    />
                  </div>

                  <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                    <div className="flex gap-1">

                      <span className="w-2 h-2 rounded-full bg-brown/30 animate-bounce" />

                      <span
                        className="w-2 h-2 rounded-full bg-brown/30 animate-bounce"
                        style={{
                          animationDelay:
                            '150ms',
                        }}
                      />

                      <span
                        className="w-2 h-2 rounded-full bg-brown/30 animate-bounce"
                        style={{
                          animationDelay:
                            '300ms',
                        }}
                      />

                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* PERGUNTAS RÁPIDAS */}
            <div className="border-t border-cream-dark px-3 py-3 bg-white">

              <div className="grid grid-cols-2 gap-2">

                {quickQuestions.map(
                  (question) => (
                    <button
                      key={question.label}
                      type="button"
                      onClick={() =>
                        sendMessage(
                          question.label
                        )
                      }
                      className="rounded-xl border border-cream-dark bg-cream px-3 py-2 text-left text-xs font-semibold text-brown transition-colors hover:border-red hover:bg-red hover:text-white"
                    >
                      {question.icon}{' '}
                      {question.label}
                    </button>
                  )
                )}

              </div>
            </div>

            {/* CAMPO DE TEXTO */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-3 py-3 bg-white border-t border-cream-dark"
            >

              <input
                type="text"
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                placeholder="Pergunte alguma coisa para a DELLY..."
                className="flex-1 rounded-xl border border-cream-dark bg-cream px-4 py-3 text-sm text-brown placeholder-brown/40 focus:outline-none focus:ring-2 focus:ring-yellow/50"
              />

              <button
                type="submit"
                disabled={
                  !input.trim() ||
                  isTyping
                }
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-red hover:bg-red-dark disabled:opacity-40 text-white transition-colors"
                aria-label="Enviar"
              >
                <Send className="w-4 h-4" />
              </button>

            </form>

            {/* RODAPÉ */}
            <div className="bg-cream py-1.5 text-center">
              <p className="text-[10px] text-brown/40">
                DELLY • Assistente virtual da
                Papelaria Delights 💖
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
