// Ficheiro: app/checkout/page.tsx
import Link from 'next/link';

const subtotal = 15.00 + 20.00;
const frete = 5.00;
const total = subtotal + frete;

export default function PaginaCheckout() {
  return (
    <main className="container mx-auto px-4 md:px-8 py-12">
      
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Finalizar Pedido
        </h1>
        <p className="text-gray-600">
          Estamos quase lá! Preencha seus dados para completar a compra
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {/* Coluna 1: Formulário */}
        <div className="lg:col-span-2">
          <form className="space-y-8">
            
            {/* Seção 1: Dados Pessoais */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-8 py-6 border-b border-amber-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-900 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Seus Dados
                  </h2>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-gray-900 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Ex: Maria Silva"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Telefone (WhatsApp) *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="(71) 99999-9999"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Seção 2: Endereço de Entrega */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-8 py-6 border-b border-amber-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-900 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Endereço de Entrega
                  </h2>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div>
                  <label htmlFor="endereco" className="block text-sm font-semibold text-gray-900 mb-2">
                    Endereço Completo *
                  </label>
                  <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Rua das Flores, 123, Centro"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="complemento" className="block text-sm font-semibold text-gray-900 mb-2">
                    Complemento <span className="text-gray-400 font-normal">(Opcional)</span>
                  </label>
                  <input
                    type="text"
                    id="complemento"
                    name="complemento"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Apto 201, Bloco B"
                  />
                </div>
              </div>
            </div>
            
            {/* Seção 3: Observações */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-8 py-6 border-b border-amber-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-900 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Observações
                  </h2>
                </div>
              </div>
              
              <div className="p-8">
                <label htmlFor="observacoes" className="block text-sm font-semibold text-gray-900 mb-2">
                  Algum pedido especial? <span className="text-gray-400 font-normal">(Opcional)</span>
                </label>
                <textarea
                  id="observacoes"
                  name="observacoes"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                  placeholder="Ex: Deixar na portaria, pão com pouca manteiga..."
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        {/* Coluna 2: Resumo */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden sticky top-24">
            
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-6">
              <h2 className="text-xl font-bold text-white">
                Resumo Final
              </h2>
            </div>
            
            <div className="p-6 space-y-6">
              
              {/* Itens resumidos */}
              <div className="space-y-3 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">20x Pão Francês</span>
                  <span className="font-semibold text-gray-900">R$ 15,00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">4x Sonho de Creme</span>
                  <span className="font-semibold text-gray-900">R$ 20,00</span>
                </div>
              </div>

              {/* Totais */}
              <div className="space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">
                    {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700 pb-4 border-b border-gray-200">
                  <span>Entrega</span>
                  <span className="font-semibold">
                    {frete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="font-display text-3xl font-bold text-green-600">
                    {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                </div>
              </div>

              {/* Botão de finalizar */}
              <Link
                href="/pedido/12345-prototipo"
                className="block w-full text-center text-lg bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mt-6"
              >
                🎉 Finalizar Pedido
              </Link>

              {/* Info de segurança */}
              <div className="pt-4 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Pagamento seguro
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}