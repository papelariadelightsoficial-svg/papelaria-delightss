export type ProductCategory =
  | 'Cadernos'
  | 'Materiais escolares'
  | 'Papéis'
  | 'Kits'
  | 'Personalizados';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: ProductCategory;
  image: string;
  description: string;
  highlight?: boolean;
}

// As imagens estão diretamente dentro da pasta /public
const productImage = (file: string) =>
  `${import.meta.env.BASE_URL}${file}`;

export const products: Product[] = [
  {
    id: 1,
    name: 'Caderno personalizado',
    price: 49.90,
    category: 'Personalizados',
    image: productImage('01-caderno-personalizado.png'),
    description:
      'Caderno espiral personalizado com capa floral delicada e acabamento elegante.',
    highlight: true
  },
  {
    id: 2,
    name: 'Caderno espiral',
    price: 32.90,
    category: 'Cadernos',
    image: productImage('02-caderno-espiral.png'),
    description:
      'Caderno espiral pautado, com folhas organizadas para estudos e anotações do dia a dia.',
    highlight: true
  },
  {
    id: 3,
    name: 'Caderno de desenho',
    price: 29.90,
    category: 'Cadernos',
    image: productImage('03-caderno-desenho.png'),
    description:
      'Caderno espiral de capa resistente, ideal para desenhos, rascunhos e projetos criativos.'
  },
  {
    id: 4,
    name: 'Lápis',
    price: 3.50,
    category: 'Materiais escolares',
    image: productImage('04-lapis.png'),
    description:
      'Lápis grafite Masterprint com corpo verde, indicado para escrita, desenho e atividades escolares.'
  },
  {
    id: 5,
    name: 'Caneta',
    price: 5.90,
    category: 'Materiais escolares',
    image: productImage('05-caneta.png'),
    description:
      'Canetas esferográficas em cores azul, vermelha e preta, práticas para escola e escritório.'
  },
  {
    id: 6,
    name: 'Lápis de cor',
    price: 27.90,
    category: 'Materiais escolares',
    image: productImage('06-lapis-de-cor.png'),
    description:
      'Lápis de cor Faber-Castell Multi Color com 12 cores e 2 EcoLápis grafite para completar o estojo.',
    highlight: true
  },
  {
    id: 7,
    name: 'Canetinhas',
    price: 24.90,
    category: 'Materiais escolares',
    image: productImage('07-canetinhas.png'),
    description:
      'Canetinhas Faber-Castell com 12 cores variadas para desenhos, trabalhos e atividades criativas.'
  },
  {
    id: 8,
    name: 'Régua',
    price: 6.90,
    category: 'Materiais escolares',
    image: productImage('08-regua.png'),
    description:
      'Régua escolar colorida em tons pastel, prática para medições, traços e atividades escolares.'
  },
  {
    id: 9,
    name: 'Borracha',
    price: 4.50,
    category: 'Materiais escolares',
    image: productImage('09-borracha.png'),
    description:
      'Borracha Stabilo Legend em cores variadas, ideal para apagar escrita a lápis com praticidade.'
  },
  {
    id: 10,
    name: 'Papel colorido',
    price: 14.90,
    category: 'Papéis',
    image: productImage('10-papel-colorido.png'),
    description:
      'Papel criativo colorido Scrity Paper A4 com variedade de cores para trabalhos escolares e artesanato.'
  },
  {
    id: 11,
    name: 'Post-it',
    price: 12.90,
    category: 'Papéis',
    image: productImage('11-post-it.png'),
    description:
      'Notas adesivas Post-it 3M Super Adesivo em cores variadas para lembretes, estudos e organização.',
    highlight: true
  },
  {
    id: 12,
    name: 'Bloco de anotações',
    price: 19.90,
    category: 'Papéis',
    image: productImage('12-bloco-anotacoes.png'),
    description:
      'Blocos de anotações em papel rosa, ideais para recados, listas e pequenas anotações.'
  },
  {
    id: 13,
    name: 'Kit de papelaria',
    price: 69.90,
    category: 'Kits',
    image: productImage('13-kit-papelaria.png'),
    description:
      'Kit de papelaria com organizadores, grampeador, clips, canetas, marca-texto e blocos adesivos.',
    highlight: true
  },
  {
    id: 14,
    name: 'Kit escolar',
    price: 89.90,
    category: 'Kits',
    image: productImage('14-kit-escolar.png'),
    description:
      'Kit escolar completo com cadernos, canetas, lápis, lápis de cor, tintas Acrilex, tesoura, cola, régua e outros materiais.'
  },
  {
    id: 15,
    name: 'Produtos personalizados',
    price: 44.90,
    category: 'Personalizados',
    image: productImage('15-produtos-personalizados.png'),
    description:
      'Caderno criativo de adesivos com capa colorida, ideal para personalizar cadernos, agendas e trabalhos.',
    highlight: true
  },
  {
    id: 16,
    name: 'Caderno pontilhado',
    price: 39.90,
    category: 'Cadernos',
    image: productImage('16-caderno-pontilhado.png'),
    description:
      'Caderno espiral com páginas quadriculadas, ideal para organização, planejamento, estudos e anotações.'
  },
  {
    id: 17,
    name: 'Agenda colorida',
    price: 49.90,
    category: 'Cadernos',
    image: productImage('17-agenda-colorida.png'),
    description:
      'Agenda espiral disponível em várias cores, prática para organizar compromissos, tarefas e anotações.'
  },
  {
    id: 18,
    name: 'Marcadores coloridos',
    price: 27.90,
    category: 'Materiais escolares',
    image: productImage('18-marcadores-coloridos.png'),
    description:
      'Conjunto de marcadores artísticos em diversas cores, com pontas para colorir, destacar e criar detalhes.'
  },
  {
    id: 19,
    name: 'Kit de canetas',
    price: 34.90,
    category: 'Materiais escolares',
    image: productImage('19-kit-canetas.png'),
    description:
      'Kit BIC Cristal Cores e Sentimentos com 10 canetas esferográficas coloridas e estojo organizador.'
  },
  {
    id: 20,
    name: 'Estojo escolar colorido',
    price: 39.90,
    category: 'Materiais escolares',
    image: productImage('20-estojo-colorido.png'),
    description:
      'Estojo escolar transparente colorido com fechamento em zíper, disponível em diferentes cores.'
  },
  {
    id: 21,
    name: 'Cartolina colorida',
    price: 9.90,
    category: 'Papéis',
    image: productImage('21-cartolina-colorida.png'),
    description:
      'Conjunto de folhas coloridas em várias tonalidades, indicado para trabalhos, recortes e projetos criativos.'
  },
  {
    id: 22,
    name: 'Adesivos decorativos',
    price: 12.90,
    category: 'Papéis',
    image: productImage('22-adesivos-decorativos.png'),
    description:
      'Caderno de adesivos decorativos com ilustrações coloridas para personalizar agendas, cadernos e presentes.'
  },
  {
    id: 23,
    name: 'Clips coloridos',
    price: 8.90,
    category: 'Papéis',
    image: productImage('23-clips-coloridos.png'),
    description:
      'Clips coloridos Yins Paper de 33 mm, embalagem com 100 unidades para organizar folhas e documentos.'
  },
  {
    id: 24,
    name: 'Pasta criativa',
    price: 29.90,
    category: 'Personalizados',
    image: productImage('24-pasta-criativa.png'),
    description:
      'Pastas coloridas em diversas tonalidades para guardar documentos, trabalhos escolares e papéis.'
  },
  {
    id: 25,
    name: 'Kit de desenho criativo',
    price: 79.90,
    category: 'Personalizados',
    image: productImage('25-kit-desenho-criativo.png'),
    description:
      'Maleta artística completa com lápis, canetinhas, giz de cera, aquarela e outros materiais para desenho e pintura.',
    highlight: true
  }
];

export const categoryFilters: ('Todos' | ProductCategory)[] = [
  'Todos',
  'Cadernos',
  'Materiais escolares',
  'Papéis',
  'Kits',
  'Personalizados'
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
}

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

export function findProductByName(query: string): Product | undefined {
  const normalizedQuery = normalizeText(query);

  return [...products]
    .sort((a, b) => b.name.length - a.name.length)
    .find((product) => {
      const normalizedName = normalizeText(product.name);
      const normalizedCategory = normalizeText(product.category);

      return (
        normalizedQuery.includes(normalizedName) ||
        normalizedName.includes(normalizedQuery) ||
        normalizedCategory === normalizedQuery
      );
    });
}
