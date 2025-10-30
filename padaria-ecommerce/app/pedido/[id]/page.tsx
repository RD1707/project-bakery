// Ficheiro: app/pedido/[id]/page.tsx
import { StatusTracker } from '@/components/StatusTracker';

export default function PaginaStatusPedido({ params }: { params: { id: string } }) {
  
  // O ID do pedido vem da URL (ex: "12345-prototipo")
  const { id } = params;

  return (
    <main className="container mx-auto p-4 md:p-8">
      <div className="bg-white max-w-2xl mx-auto p-8 rounded-lg shadow-md text-center">
        
        <span className="text-6xl">🎉</span>
        
        <h1 className="text-3xl font-bold text-gray-900 mt-4">
          Obrigado pelo seu pedido!
        </h1>
        
        <p className="text-lg text-gray-600 mt-2">
          O seu pedido foi recebido e está sendo processado.
        </p>
        
        <p className="text-sm text-gray-500 mt-2">
          Número do Pedido: <span className="font-semibold text-gray-700">{id}</span>
        </p>

        {/* Aqui chamamos o nosso componente dinâmico!
          O Next.js permite usar Client Components (como o StatusTracker)
          dentro de Server Components (como esta página).
        */}
        <StatusTracker />
      </div>
    </main>
  );
}