// Ficheiro: components/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';

// Definimos os "tipos" de dados que este componente espera receber.
// Isto é a magia do TypeScript: ele ajuda-nos a não esquecer nenhuma informação.
type ProductCardProps = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagemUrl: string;
};

// Este é o nosso componente.
// Ele recebe as "props" (propriedades) e desenha o card.
export function ProductCard({ id, nome, descricao, preco, imagemUrl }: ProductCardProps) {
  return (
    // Usamos Link para que o card inteiro seja um link para a página do produto
    <Link href={`/produtos/${id}`} className="group block overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        {/*
          Componente de Imagem do Next.js para otimização automática.
          Usamos 'fill' e 'object-cover' para a imagem preencher o espaço.
        */}
        <Image
          src={imagemUrl}
          alt={nome}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Conteúdo do Card */}
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-900">{nome}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
          {descricao}
        </p>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-amber-900">
            {/* Formata o preço para Reais (BRL) */}
            {preco.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
          <span className="rounded-full bg-amber-700 px-3 py-1 text-sm font-semibold text-white transition-colors group-hover:bg-amber-600">
            Ver detalhes
          </span>
        </div>
      </div>
    </Link>
  );
}