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

export const products: Product[] = [
  { id: 1, name: 'Caderno personalizado', price: 34.90, category: 'Personalizados', image: 'https://images.pexels.com/photos/8230968/pexels-photo-8230968.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Caderno especial para deixar seus estudos com a sua cara.', highlight: true },
  { id: 2, name: 'Caderno espiral', price: 24.90, category: 'Cadernos', image: 'https://images.pexels.com/photos/8250879/pexels-photo-8250879.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Prático para estudar, anotar e organizar o dia a dia.', highlight: true },
  { id: 3, name: 'Caderno de desenho', price: 19.90, category: 'Cadernos', image: 'https://images.pexels.com/photos/15100360/pexels-photo-15100360.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Para desenhos, ideias e muita criatividade.' },
  { id: 4, name: 'Lápis', price: 2.50, category: 'Materiais escolares', image: 'https://images.pexels.com/photos/30583224/pexels-photo-30583224.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Essencial para estudos e anotações.' },
  { id: 5, name: 'Caneta', price: 3.50, category: 'Materiais escolares', image: 'https://images.pexels.com/photos/6187604/pexels-photo-6187604.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Caneta prática para escrever com estilo.' },
  { id: 6, name: 'Lápis de cor', price: 18.90, category: 'Materiais escolares', image: 'https://images.pexels.com/photos/39178808/pexels-photo-39178808.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Cores vibrantes para desenhar e criar.', highlight: true },
  { id: 7, name: 'Canetinhas', price: 15.90, category: 'Materiais escolares', image: 'https://images.pexels.com/photos/2327071/pexels-photo-2327071.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Canetinhas coloridas para suas criações.' },
  { id: 8, name: 'Régua', price: 4.90, category: 'Materiais escolares', image: 'https://images.pexels.com/photos/5412199/pexels-photo-5412199.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Para medições e atividades escolares.' },
  { id: 9, name: 'Borracha', price: 2.90, category: 'Materiais escolares', image: 'https://images.pexels.com/photos/5412197/pexels-photo-5412197.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Borracha macia para apagar suas anotações.' },
  { id: 10, name: 'Papel colorido', price: 8.90, category: 'Papéis', image: 'https://images.pexels.com/photos/20085501/pexels-photo-20085501.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Papéis coloridos para trabalhos e criações.' },
  { id: 11, name: 'Post-it', price: 7.90, category: 'Papéis', image: 'https://images.pexels.com/photos/6991385/pexels-photo-6991385.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Para lembretes, estudos e organização.', highlight: true },
  { id: 12, name: 'Bloco de anotações', price: 12.90, category: 'Papéis', image: 'https://images.pexels.com/photos/7967828/pexels-photo-7967828.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Tenha suas ideias sempre à mão.' },
  { id: 13, name: 'Kit de papelaria', price: 39.90, category: 'Kits', image: 'https://images.pexels.com/photos/6192514/pexels-photo-6192514.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Uma seleção especial de itens de papelaria.', highlight: true },
  { id: 14, name: 'Kit escolar', price: 49.90, category: 'Kits', image: 'https://images.pexels.com/photos/12861343/pexels-photo-12861343.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Kit para deixar a rotina escolar mais prática.' },
  { id: 15, name: 'Produtos personalizados', price: 29.90, category: 'Personalizados', image: 'https://images.pexels.com/photos/8850766/pexels-photo-8850766.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Itens personalizados para momentos especiais.', highlight: true },
  { id: 16, name: 'Caderno pontilhado', price: 27.90, category: 'Cadernos', image: 'https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Ideal para bullet journal e organização.' },
  { id: 17, name: 'Agenda colorida', price: 32.90, category: 'Cadernos', image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Organize compromissos, tarefas e ideias.' },
  { id: 18, name: 'Marcadores coloridos', price: 16.90, category: 'Materiais escolares', image: 'https://images.pexels.com/photos/15927867/pexels-photo-15927867.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Destaque informações importantes com cores.' },
  { id: 19, name: 'Kit de canetas', price: 22.90, category: 'Materiais escolares', image: 'https://images.pexels.com/photos/15927865/pexels-photo-15927865.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Várias cores para escrever e decorar.' },
  { id: 20, name: 'Estojo escolar colorido', price: 26.90, category: 'Materiais escolares', image: 'https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Para guardar seus materiais com praticidade.' },
  { id: 21, name: 'Cartolina colorida', price: 9.90, category: 'Papéis', image: 'https://images.pexels.com/photos/6444265/pexels-photo-6444265.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Perfeita para trabalhos e projetos criativos.' },
  { id: 22, name: 'Adesivos decorativos', price: 6.90, category: 'Papéis', image: 'https://images.pexels.com/photos/6444291/pexels-photo-6444291.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Dê um toque divertido às suas criações.' },
  { id: 23, name: 'Clips coloridos', price: 5.90, category: 'Papéis', image: 'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Organização com um toque de cor.' },
  { id: 24, name: 'Pasta criativa', price: 24.90, category: 'Personalizados', image: 'https://images.pexels.com/photos/5905447/pexels-photo-5905447.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Para guardar trabalhos, desenhos e papéis.' },
  { id: 25, name: 'Kit de desenho criativo', price: 44.90, category: 'Personalizados', image: 'https://images.pexels.com/photos/6444228/pexels-photo-6444228.jpeg?auto=compress&cs=tinysrgb&w=940', description: 'Kit especial para colocar a criatividade em prática.', highlight: true },
];

export const categoryFilters: ('Todos' | ProductCategory)[] = ['Todos', 'Cadernos', 'Materiais escolares', 'Papéis', 'Kits', 'Personalizados'];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
}

export function findProductByName(query: string): Product | undefined {
  const lower = query.toLowerCase().trim();
  return products.find((p) => p.name.toLowerCase().includes(lower) || p.category.toLowerCase().includes(lower));
}
