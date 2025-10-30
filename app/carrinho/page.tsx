// Ficheiro: app/carrinho/page.tsx
import { CartItem } from '@/components/CartItem';
import Link from 'next/link';

const mockItensCarrinho = [
  {
    id: '1',
    nome: 'Pão Francês (Unidade)',
    preco: 0.75,
    imagemUrl: '/pao.jpg',
    quantidade: 20,
  },
  {
    id: '4',
    nome: 'Sonho de Creme',
    preco: 5.00,
    imagemUrl: '/sonho.jpg',
    quantidade: 4,
  },
];

export default function PaginaCarrinho() {
  const subtotal = mockItensCarrinho.reduce((acc, item) => {
    return acc + (item.preco * item.quantidade);
  }, 0);
  
  const frete = 5.00;
  const total = subtotal + frete;

  return (
    <main className="container mx-auto px-4 md:px-8 py-12">
      
      {/* Header da página */}
      <div className="mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Meu Carrinho
        </h1>
        <p className="text-gray-600">
          Revise seus produtos antes de finalizar o pedido
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {/* Coluna 1: Lista de Itens */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            
            {/* Header do card */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-8 py-6 border-b border-amber-100">
              <h2 className="text-xl font-bold text-gray-900">
                Itens do Carrinho ({mockItensCarrinho.length})
              </h2>
            </div>

            {/* Lista de produtos */}
            {mockItensCarrinho.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {mockItensCarrinho.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    nome={item.nome}
                    preco={item.preco}
                    imagemUrl={item.imagemUrl}
                    quantidade={item.quantidade}
                  />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center">
                <div className="text-6xl mb-4">🛒</div>
                <p className="text-gray-500 text-lg mb-6">Seu carrinho está vazio</p>
                <Link 
                  href="/"
                  className="inline-block bg-amber-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-800 transition-all"
                >
                  Começar a comprar
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Coluna 2: Resumo do Pedido */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden sticky top-24">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-900 to-amber-800 px-6 py-6">
              <h2 className="text-xl font-bold text-white">
                Resumo do Pedido
              </h2>
            </div>

            {/* Detalhes */}
            <div className="p-6 space-y-4">
              
              <div className="flex justify-between items-center text-gray-700">
                <span>Subtotal</span>
                <span className="font-semibold text-lg">
                  {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
              </div>

              <div className="flex justify-between items-center text-gray-700 pb-4 border-b border-gray-200">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  Entrega
                </span>
                <span className="font-semibold text-lg">
                  {frete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="font-display text-3xl font-bold text-amber-900">
                  {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
              </div>

              {/* Botões */}
              <div className="space-y-3 pt-6">
                <Link
                  href="/checkout"
                  className="block w-full text-center text-lg bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Finalizar Compra →
                </Link>
                
                <Link
                  href="/"
                  className="block w-full text-center text-amber-900 font-semibold py-3 hover:text-amber-700 transition-colors"
                >
                  ← Continuar comprando
                </Link>
              </div>

              {/* Selos de confiança */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Compra segura
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                    </svg>
                    Entrega rápida
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}