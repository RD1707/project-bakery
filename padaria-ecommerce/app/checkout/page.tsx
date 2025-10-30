// Ficheiro: app/checkout/page.tsx
import Link from 'next/link';

// --- DADOS FALSOS (MOCK) ---
// Vamos simular os totais do carrinho.
// Numa app real, estes dados viriam do estado do carrinho.
const subtotal = 15.00 + 20.00; // (20x pão + 4x sonho)
const frete = 5.00;
const total = subtotal + frete;
// --- FIM DOS DADOS FALSOS ---

export default function PaginaCheckout() {
  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Finalizar Pedido
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Coluna 1: Formulário de Checkout (ocupa 2/3) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">
            1. Seus Dados
          </h2>
          
          {/*
            Usamos <form> aqui. Num protótipo, o 'action' não faz nada.
            Numa app real, ele chamaria a nossa API.
          */}
          <form className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
                Telefone (WhatsApp)
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                placeholder="(XX) 9XXXX-XXXX"
              />
            </div>
            
            <h2 className="text-xl font-semibold mb-4 pt-6">
              2. Endereço de Entrega
            </h2>

            <div>
              <label htmlFor="endereco" className="block text-sm font-medium text-gray-700">
                Endereço (Rua, Número, Bairro)
              </label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                placeholder="Ex: Rua das Flores, 123, Centro"
              />
            </div>

            <div>
              <label htmlFor="complemento" className="block text-sm font-medium text-gray-700">
                Complemento (Opcional)
              </label>
              <input
                type="text"
                id="complemento"
                name="complemento"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                placeholder="Apto, casa, referência"
              />
            </div>
            
            <h2 className="text-xl font-semibold mb-4 pt-6">
              3. Observações
            </h2>

            <div>
              <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700">
                Observações do Pedido (Opcional)
              </label>
              <textarea
                id="observacoes"
                name="observacoes"
                rows={3}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                placeholder="Ex: Pão com pouca manteiga, trocar algo..."
              ></textarea>
            </div>
          </form>
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
              <span>Total a Pagar</span>
              <span>
                {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            </div>
          </div>

          {/* Este Link simula a finalização do pedido.
            Ele leva o utilizador para a página de Status,
            com um ID de pedido falso.
          */}
          <Link
            href="/pedido/12345-prototipo"
            className="mt-6 block w-full text-center text-lg bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow transition-colors hover:bg-green-700"
          >
            Finalizar Pedido
          </Link>
        </div>
      </div>
    </main>
  );
}