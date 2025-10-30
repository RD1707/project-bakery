// Ficheiro: app/carrinho/page.tsx
import { CartItem } from '@/components/CartItem';
import Link from 'next/link';

// --- DADOS FALSOS (MOCK DATA) ---
// Simulando que o utilizador já adicionou estes itens
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
// --- FIM DOS DADOS FALSOS ---

export default function PaginaCarrinho() {
  
  // Calcula o subtotal com base nos nossos itens falsos
  const subtotal = mockItensCarrinho.reduce((acc, item) => {
    return acc + (item.preco * item.quantidade);
  }, 0);
  
  const frete = 5.00; // Valor fixo para o protótipo
  const total = subtotal + frete;

  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Meu Carrinho
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Coluna 1: Lista de Itens (ocupa 2/3) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Itens</h2>
          
          {mockItensCarrinho.length > 0 ? (
            <div className="divide-y divide-gray-200">
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
            <p className="text-gray-500">Seu carrinho está vazio.</p>
          )}
        </div>

        {/* Coluna 2: Resumo do Pedido (ocupa 1/3) */}
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-semibold mb-4 border-b pb-3">
            Resumo do Pedido
          </h2>
          
          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium">
                {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Frete (Entrega)</span>
              <span className="font-medium">
                {frete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900 border-t pt-3">
              <span>Total</span>
              <span>
                {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="mt-6 block w-full text-center text-lg bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow transition-colors hover:bg-green-700"
          >
            Ir para o Checkout
          </Link>
          
          <Link
            href="/"
            className="mt-3 block w-full text-center text-amber-700 font-semibold hover:underline"
          >
            Continuar a comprar
          </Link>
        </div>
      </div>
    </main>
  );
}