// Ficheiro: app/page.tsx
import { ProductCard } from '@/components/ProductCard';

const mockProdutos = [
  {
    id: '1',
    nome: 'Pão Francês (Unidade)',
    descricao: 'Pão francês clássico, crocante por fora e macio por dentro, assado na hora.',
    preco: 0.75,
    imagemUrl: '/pao.jpg',
  },
  {
    id: '2',
    nome: 'Bolo de Chocolate (Fatia)',
    descricao: 'Deliciosa fatia de bolo de chocolate com cobertura cremosa de brigadeiro.',
    preco: 8.50,
    imagemUrl: '/bolo.jpg',
  },
  {
    id: '3',
    nome: 'Cento de Salgados (Sortidos)',
    descricao: 'Uma seleção com 100 dos nossos melhores salgados: coxinhas, bolinhas de queijo e mais.',
    preco: 120.00,
    imagemUrl: '/salgados.jpg',
  },
  {
    id: '4',
    nome: 'Sonho de Creme',
    descricao: 'Sonho fofinho recheado com creme de baunilha tradicional e polvilhado com açúcar.',
    preco: 5.00,
    imagemUrl: '/sonho.jpg',
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 md:px-8">
      
      {/* Hero Section - Elegante e impactante */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 via-orange-50/30 to-amber-100/50 rounded-3xl -z-10"></div>
        
        <div className="relative z-10">
          <span className="inline-block text-amber-600 font-medium text-sm uppercase tracking-widest mb-4">
            Desde 1985
          </span>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-amber-950 mb-6 leading-tight">
            Bem-vindo à
            <span className="block text-amber-700 mt-2">Padaria Delícia</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light mb-8">
            O sabor artesanal que conquista gerações.
            <span className="block text-lg mt-2 text-amber-600">Fresquinho todos os dias.</span>
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="#produtos" 
              className="bg-amber-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Ver Produtos
            </a>
            <a 
              href="/carrinho" 
              className="border-2 border-amber-900 text-amber-900 px-8 py-4 rounded-full font-semibold hover:bg-amber-900 hover:text-white transition-all duration-300"
            >
              Fazer Pedido
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Destaques */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="text-5xl mb-4">🥐</div>
            <h3 className="font-display text-xl font-bold text-gray-900 mb-2">100% Artesanal</h3>
            <p className="text-gray-600 text-sm">Feito com dedicação e ingredientes selecionados</p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Entrega Rápida</h3>
            <p className="text-gray-600 text-sm">Receba fresquinho na sua casa</p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Qualidade Premium</h3>
            <p className="text-gray-600 text-sm">Tradição e sabor em cada mordida</p>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section id="produtos" className="py-16">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-medium text-sm uppercase tracking-widest">
            Nosso Cardápio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra nossos produtos mais queridos, feitos com carinho e dedicação.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {mockProdutos.map((produto) => (
            <ProductCard
              key={produto.id}
              id={produto.id}
              nome={produto.nome}
              descricao={produto.descricao}
              preco={produto.preco}
              imagemUrl={produto.imagemUrl}
            />
          ))}
        </div>
      </section>

    </main>
  );
}