// Ficheiro: components/CartItem.tsx
import Image from 'next/image';
import Link from 'next/link';

type CartItemProps = {
  id: string;
  nome: string;
  preco: number;
  imagemUrl: string;
  quantidade: number;
};

export function CartItem({ id, nome, preco, imagemUrl, quantidade }: CartItemProps) {
  const subtotal = preco * quantidade;

  return (
    <div className="flex items-center gap-6 p-6 hover:bg-amber-50/30 transition-colors duration-300">
      
      {/* Imagem do Produto */}
      <Link 
        href={`/produtos/${id}`}
        className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100 shadow-md hover:shadow-lg transition-shadow group"
      >
        <Image
          src={imagemUrl}
          alt={nome}
          fill
          sizes="96px"
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </Link>

      {/* Detalhes do Produto */}
      <div className="flex-1 min-w-0">
        <Link 
          href={`/produtos/${id}`} 
          className="font-semibold text-gray-900 hover:text-amber-900 transition-colors text-lg block mb-1"
        >
          {nome}
        </Link>
        
        <p className="text-sm text-gray-500 mb-3">
          {preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} por unidade
        </p>

        {/* Controle de Quantidade - Estiloso */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Quantidade:</span>
          <div className="flex items-center gap-2 bg-gray-50 rounded-full px-1 py-1 border border-gray-200">
            <button 
              className="h-8 w-8 rounded-full bg-white text-gray-700 hover:bg-amber-100 hover:text-amber-900 font-bold transition-all shadow-sm hover:shadow flex items-center justify-center"
              aria-label="Diminuir quantidade"
            >
              −
            </button>
            <span className="w-12 text-center font-bold text-gray-900">{quantidade}</span>
            <button 
              className="h-8 w-8 rounded-full bg-white text-gray-700 hover:bg-amber-100 hover:text-amber-900 font-bold transition-all shadow-sm hover:shadow flex items-center justify-center"
              aria-label="Aumentar quantidade"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Preço e Ações */}
      <div className="flex flex-col items-end gap-3">
        <div className="text-right">
          <div className="text-xs text-gray-500 mb-1">Subtotal</div>
          <span className="font-display text-2xl font-bold text-gray-900">
            {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        
        <button 
          className="flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700 hover:underline transition-colors"
          aria-label="Remover item"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Remover
        </button>
      </div>
    </div>
  );
}