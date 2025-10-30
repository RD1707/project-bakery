// Ficheiro: components/CartItem.tsx
import Image from 'next/image';
import Link from 'next/link';

// As propriedades que este componente espera
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
    <div className="flex items-center gap-4 border-b border-gray-200 py-4">
      {/* Imagem */}
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={imagemUrl}
          alt={nome}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      {/* Detalhes do Produto */}
      <div className="flex-1">
        <Link href={`/produtos/${id}`} className="font-semibold text-gray-900 hover:text-amber-700">
          {nome}
        </Link>
        <p className="text-sm text-gray-500">
          {preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} (cada)
        </p>

        {/* Controlo de Quantidade (Visual) */}
        <div className="flex items-center gap-2 mt-2">
          <button className="h-6 w-6 rounded-full border text-gray-600 hover:bg-gray-100">-</button>
          <span className="w-10 text-center font-medium">{quantidade}</span>
          <button className="h-6 w-6 rounded-full border text-gray-600 hover:bg-gray-100">+</button>
        </div>
      </div>

      {/* Subtotal e Remover */}
      <div className="flex flex-col items-end">
        <span className="font-semibold text-gray-900">
          {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
        <button className="mt-1 text-sm font-medium text-red-600 hover:text-red-500">
          Remover
        </button>
      </div>
    </div>
  );
}