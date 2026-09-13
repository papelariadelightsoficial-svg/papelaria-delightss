import type { Review, FAQItem } from '@/types';

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Marina Souza',
    stars: 5,
    comment:
      'Os cadernos são lindos e de ótima qualidade! Meu filho amou o personalizado. Atendimento super atencioso!',
    avatarColor: 'bg-delight-pink',
    avatarLetter: 'M',
  },
  {
    id: 2,
    name: 'Pedro Henrique',
    stars: 5,
    comment:
      'Comprei o kit escolar e veio tudo perfeito. Preço justo e produtos duráveis. Recomendo demais!',
    avatarColor: 'bg-delight-blue',
    avatarLetter: 'P',
  },
  {
    id: 3,
    name: 'Juliana Alves',
    stars: 5,
    comment:
      'Adorei a variedade de produtos! As canetinhas têm cores incríveis. A entrega foi rapidíssima.',
    avatarColor: 'bg-delight-purple',
    avatarLetter: 'J',
  },
  {
    id: 4,
    name: 'Carlos Eduardo',
    stars: 4,
    comment:
      'Personalizei um caderno para minha filha e ficou maravilhoso! A equipe é muito criativa e atenciosa.',
    avatarColor: 'bg-delight-orange',
    avatarLetter: 'C',
  },
  {
    id: 5,
    name: 'Beatriz Lima',
    stars: 5,
    comment:
      'Experiência de compra muito fácil e divertida! O site é lindo e o atendimento pelo WhatsApp foi ótimo.',
    avatarColor: 'bg-delight-green',
    avatarLetter: 'B',
  },
  {
    id: 6,
    name: 'Rafael Gomes',
    stars: 5,
    comment:
      'Comprei papéis coloridos para minha filha e ela ficou encantada. Qualidade excelente e cores vibrantes!',
    avatarColor: 'bg-delight-yellow',
    avatarLetter: 'R',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: 'Quais produtos vocês vendem?',
    answer:
      'Temos de tudo! Cadernos, materiais escolares, papéis e produtos personalizados. Tudo colorido e divertido para deixar seu dia mais alegre!',
  },
  {
    id: 2,
    question: 'Como faço um pedido?',
    answer:
      'É muito fácil! Escolha seus produtos, coloque no carrinho e clique em "Finalizar pelo WhatsApp". A gente cuida do resto com muito carinho!',
  },
  {
    id: 3,
    question: 'Posso personalizar um produto?',
    answer:
      'Claro! Adoramos deixar tudo com a sua cara. É só ir na seção "Personalizados" e falar com a gente pelo WhatsApp. Vamos criar algo único para você!',
  },
  {
    id: 4,
    question: 'Como funciona o carrinho?',
    answer:
      'O carrinho guarda tudo o que você escolheu. Você pode aumentar ou diminuir a quantidade, remover itens e ver o total. Quando estiver pronto, é só finalizar pelo WhatsApp!',
  },
  {
    id: 5,
    question: 'Como falar com a Papelaria Delights?',
    answer:
      'Você pode falar com a gente pelo WhatsApp, Instagram ou e-mail. Estamos sempre prontos para ajudar!',
  },
  {
    id: 6,
    question: 'Vocês têm kits escolares?',
    answer:
      'Sim! Temos kits escolares com vários materiais para facilitar sua volta às aulas.',
  },
  {
    id: 7,
    question: 'Como funciona o atendimento?',
    answer:
      'Nosso atendimento é feito de forma online, com suporte para dúvidas, pedidos e personalizações.',
  },
  {
    id: 8,
    question: 'Como faço para comprar produtos personalizados?',
    answer:
      'Escolha a opção de produtos personalizados e fale com a gente pelo WhatsApp para explicar como você quer seu produto.',
  },
];
