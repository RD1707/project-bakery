// Ficheiro: app/produtos/[id]/page.tsx
import Image from 'next/image';
import Link from 'next/link';

const mockProdutos = [
  {
    id: '1',
    nome: 'Pão Francês (Unidade)',
    descricao: 'Pão francês clássico, crocante por fora e macio por dentro, assado na hora.',
    preco: 0.75,
    imagemUrl: '/pao.jpg',
    tipo: 'CATALOGO',
  },
  {
    id: '2',
    nome: 'Bolo de Chocolate (Fatia)',
    descricao: 'Deliciosa fatia de bolo de chocolate com cobertura cremosa de brigadeiro.',
    preco: 8.50,
    imagemUrl: '/bolo.jpg',
    tipo: 'CATALOGO',
  },
  {
    id: '3',
    nome: 'Cento de Salgados (Sortidos)',
    descricao: 'Uma seleção com 100 dos nossos melhores salgados: coxinhas, bolinhas de queijo e mais. Perfeito para a sua festa. Encomende com antecedência.',
    preco: 120.00,
    imagemUrl: '/salgados.jpg',
    tipo: 'SOB_ENCOMENDA',
  },
  {
    id: '4',
    nome: 'Sonho de Creme',
    descricao: 'Sonho fofinho recheado com creme de baunilha tradicional e polvilhado com açúcar.',
    preco: 5.00,
    imagemUrl: '/sonho.jpg',
    tipo: 'CATALOGO',
  },
];

function getProdutoPorId(id: string) {
  return mockProdutos.find((p) => p.id === id);
}

export default function PaginaProduto({ params }: { params: { id: string } }) {
  const { id } = params;
  const produto = getProdutoPorId(id);

  if (!produto) {
    return (
      <main className="container mx-auto p-8 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <div className="text-6xl mb-4">😕</div>
        <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">Produto não encontrado</h1>
        <p className="text-gray-600 mb-8">Desculpe, não conseguimos encontrar este produto.</p>
        <Link 
          href="/" 
          className="bg-amber-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-800 transition-all hover:shadow-lg"
        >
          ← Voltar para Home
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 md:px-8 py-12">
      
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
        <Link href="/" className="hover:text-amber-900 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/" className="hover:text-amber-900 transition-colors">Produtos</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{produto.nome}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* Coluna da Imagem - Super elegante */}
        <div className="relative">
          <div className="sticky top-24">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gray-100 shadow-2xl">
              <Image
                src={produto.imagemUrl}
                alt={produto.nome}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            
            {/* Badge de tipo */}
            {produto.tipo === 'SOB_ENCOMENDA' && (
              <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                📋 Sob Encomenda
              </div>
            )}
          </div>
        </div>

        {/* Coluna de Informações */}
        <div className="flex flex-col justify-center">
          
          {/* Tag de categoria */}
          <span className="inline-block text-amber-600 font-medium text-sm uppercase tracking-widest mb-4">
            Destaque do dia
          </span>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {produto.nome}
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {produto.descricao}
          </p>

          {/* Preço destacado */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-8 border border-amber-100">
            <span className="block text-sm text-gray-600 mb-2">Preço</span>
            <span className="font-display text-5xl font-bold text-amber-900">
              {produto.preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <span className="block text-sm text-gray-500 mt-2">
              {produto.tipo === 'SOB_ENCOMENDA' ? 'Valor inicial - consulte orçamento' : 'Por unidade'}
            </span>
          </div>

          {/* Área de Ações */}
          <div className="space-y-4">
            {produto.tipo === 'SOB_ENCOMENDA' ? (
              <div className="space-y-4">
                <div>
                  <label htmlFor="detalhes" className="block font-semibold text-gray-900 mb-3">
                    Detalhes da sua encomenda
                  </label>
                  <textarea
                    id="detalhes"
                    rows={5}
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Descreva sua encomenda: sabor, tamanho, data de entrega, decoração..."
                  ></textarea>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  💬 Solicitar Orçamento
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4">
                  <label htmlFor="quantidade" className="font-semibold text-gray-900">
                    Quantidade:
                  </label>
                  <input
                    type="number"
                    id="quantidade"
                    name="quantidade"
                    defaultValue={1}
                    min={1}
                    className="w-24 px-4 py-2 border-2 border-gray-200 rounded-xl text-center text-lg font-bold focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <button className="w-full bg-gradient-to-r from-amber-900 to-amber-800 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Adicionar ao Carrinho
                </button>
              </div>
            )}
          </div>

          {/* Informações adicionais */}
          <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
            <div className="flex items-center gap-3 text-gray-700">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Feito artesanalmente</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Ingredientes selecionados</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Entrega rápida</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}