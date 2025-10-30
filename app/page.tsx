// Ficheiro: app/page.tsx
import { ProductCard } from '@/components/ProductCard';

// --- DADOS FALSOS (MOCK DATA) ---
// Mais tarde, isto virá do nosso banco de dados Supabase/Prisma
const mockProdutos = [
  {
    id: '1',
    nome: 'Pão Francês (Unidade)',
    descricao: 'Pão francês clássico, crocante por fora e macio por dentro, assado na hora.',
    preco: 0.75,
    imagemUrl: '/pao.jpg', // Caminho a partir da pasta 'public'
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
// --- FIM DOS DADOS FALSOS ---


export default function Home() {
  return (
    // Usamos 'container' e 'mx-auto' para centralizar o conteúdo
    <main className="container mx-auto p-4 md:p-8">
      {/* Banner/Chamada Principal */}
      <div className="text-center p-10 bg-amber-100 rounded-lg mb-12">
        <h1 className="text-4xl font-bold text-amber-900">
          Bem-vindo à Padaria Delícia
        </h1>
        <p className="text-xl text-gray-700 mt-2">
          O sabor artesanal que conquista.
        </p>
      </div>

      {/* Título da Seção */}
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Nossos Produtos em Destaque
      </h2>

      {/* Grelha (Grid) de Produtos */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        {/*
          Usamos .map() para "mapear" os nossos dados falsos
          e criar um <ProductCard> para cada item.
        */}
        {mockProdutos.map((produto) => (
          <ProductCard
            key={produto.id} // Chave única (key) é essencial para o React
            id={produto.id}
            nome={produto.nome}
            descricao={produto.descricao}
            preco={produto.preco}
            imagemUrl={produto.imagemUrl}
          />
        ))}

      </div>
    </main>
  );
}