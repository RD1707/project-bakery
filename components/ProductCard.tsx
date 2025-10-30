// Ficheiro: components/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagemUrl: string;
};

export function ProductCard({ id, nome, descricao, preco, imagemUrl }: ProductCardProps) {
  return (
    <Link 
      href={`/produtos/${id}`} 
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      {/* Container da Imagem com overlay sutil */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-100">
        <Image
          src={imagemUrl}
          alt={nome}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay escuro sutil no hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Badge flutuante */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-amber-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Ver detalhes →
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-900 transition-colors">
          {nome}
        </h3>
        
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
          {descricao}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="block text-xs text-gray-500 mb-1">A partir de</span>
            <span className="text-2xl font-bold text-amber-900">
              {preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
          
          <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-900 transition-colors duration-300">
            <svg 
              className="w-5 h-5 text-amber-900 group-hover:text-white transition-colors duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}