// Ficheiro: app/pedido/[id]/page.tsx
import { StatusTracker } from '@/components/StatusTracker';
import Link from 'next/link';

export default function PaginaStatusPedido({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <main className="container mx-auto px-4 md:px-8 py-12">
      
      {/* Hero de Sucesso */}
      <div className="max-w-4xl mx-auto">
        
        {/* Card de Confirmação */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-2xl overflow-hidden mb-8">
          <div className="p-12 text-center">
            
            {/* Ícone de sucesso animado */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 shadow-lg animate-bounce">
              <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pedido Confirmado!
            </h1>
            
            <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
              Recebemos seu pedido e já começamos a preparar tudo com muito carinho.
            </p>

            {/* Número do pedido com destaque */}
            <div className="inline-block bg-white rounded-2xl px-8 py-4 shadow-md border border-green-200">
              <span className="block text-sm text-gray-600 mb-1">Número do Pedido</span>
              <span className="block font-mono text-2xl font-bold text-green-700">
                #{id}
              </span>
            </div>
          </div>

          {/* Informações adicionais */}
          <div className="bg-white border-t border-green-100 px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              
              <div>
                <div className="text-3xl mb-2">⏱️</div>
                <div className="text-sm text-gray-600 mb-1">Tempo Estimado</div>
                <div className="font-bold text-gray-900">30-45 minutos</div>
              </div>

              <div>
                <div className="text-3xl mb-2">💳</div>
                <div className="text-sm text-gray-600 mb-1">Pagamento</div>
                <div className="font-bold text-gray-900">Na Entrega</div>
              </div>

              <div>
                <div className="text-3xl mb-2">📍</div>
                <div className="text-sm text-gray-600 mb-1">Entrega em</div>
                <div className="font-bold text-gray-900">Salvador, BA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Tracker */}
        <StatusTracker />

        {/* Ações */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-amber-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-amber-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Voltar para Home
          </Link>

          <a
            href={`https://wa.me/5571999999999?text=Olá! Gostaria de informações sobre o pedido ${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-green-600 text-green-600 font-semibold px-8 py-4 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar no WhatsApp
          </a>
        </div>

        {/* Dicas */}
        <div className="mt-12 bg-amber-50 rounded-2xl p-8 border border-amber-100">
          <h3 className="font-display text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <span>💡</span>
            Dicas Importantes
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Mantenha o celular por perto para receber atualizações</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Tenha o valor exato para facilitar o pagamento</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Guarde o número do pedido para futuras consultas</span>
            </li>
          </ul>
        </div>

      </div>
    </main>
  );
}