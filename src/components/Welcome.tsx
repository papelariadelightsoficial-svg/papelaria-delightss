import { BookOpen, Pencil, Palette, Heart, ArrowRight } from 'lucide-react';

interface Category {
  icon: typeof BookOpen;
  title: string;
  description: string;
  buttonText: string;
  targetId: string;
  color: 'red' | 'yellow' | 'blue' | 'brown';
}

const categories: Category[] = [
  { icon: BookOpen, title: 'CADERNOS', description: 'Cadernos para estudar, organizar e soltar a criatividade.', buttonText: 'VER PRODUTOS', targetId: 'produtos', color: 'red' },
  { icon: Pencil, title: 'MATERIAIS ESCOLARES', description: 'Lápis, canetas, marcadores e tudo para seus estudos.', buttonText: 'CONFERIR', targetId: 'produtos', color: 'yellow' },
  { icon: Palette, title: 'PAPÉIS & CRIATIVIDADE', description: 'Papéis e materiais para colocar suas ideias no papel.', buttonText: 'CONHECER', targetId: 'produtos', color: 'blue' },
  { icon: Heart, title: 'PERSONALIZADOS', description: 'Produtos especiais feitos para combinar com você.', buttonText: 'PERSONALIZAR', targetId: 'personalizados', color: 'brown' },
];

const colorMap = {
  red: 'bg-red/10 text-red group-hover:bg-red group-hover:text-white',
  yellow: 'bg-yellow/15 text-yellow-dark group-hover:bg-yellow group-hover:text-brown',
  blue: 'bg-blue/10 text-blue group-hover:bg-blue group-hover:text-white',
  brown: 'bg-brown/10 text-brown group-hover:bg-brown group-hover:text-white',
};

export default function Welcome() {
  const scrollTo = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="boas-vindas" className="py-16 sm:py-20 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-brown mb-5">
            Bem-vindo à Papelaria Delights!
          </h2>
          <p className="text-base sm:text-lg text-brown/70 leading-relaxed mb-4">
            Encontre tudo para deixar seus estudos, sua organização e seus momentos criativos ainda mais especiais. Trabalhamos com cadernos, papéis, materiais escolares e produtos personalizados, sempre com criatividade e carinho em cada detalhe.
          </p>
          <p className="text-base sm:text-lg font-medium text-red">
            Explore nossos produtos e encontre o seu favorito!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className="group bg-white rounded-3xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }} onClick={() => scrollTo(cat.targetId)}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${colorMap[cat.color]}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg font-bold text-brown mb-2">{cat.title}</h3>
                <p className="text-sm text-brown/70 mb-5 leading-relaxed">{cat.description}</p>
                <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-brown group-hover:text-red transition-colors">
                  {cat.buttonText}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
