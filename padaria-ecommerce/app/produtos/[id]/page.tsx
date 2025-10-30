// Ficheiro: app/produtos/[id]/page.tsx
import Image from 'next/image';
import Link from 'next/link';

// --- COPIANDO OS DADOS FALSOS ---
// Por enquanto, vamos copiar os dados para cá.
// No futuro, vamos buscar isto de um local único.
const mockProdutos = [
  {
    id: '1',
    nome: 'Pão Francês (Unidade)',
    descricao: 'Pão francês clássico, crocante por fora e macio por dentro, assado na hora.',
    preco: 0.75,
    imagemUrl: '/pao.jpg',
    tipo: 'CATALOGO',
  },
  {
    id: '2',
    nome: 'Bolo de Chocolate (Fatia)',
    descricao: 'Deliciosa fatia de bolo de chocolate com cobertura cremosa de brigadeiro.',
    preco: 8.50,
    imagemUrl: '/bolo.jpg',
    tipo: 'CATALOGO',
  },
  {
    id: '3',
    nome: 'Cento de Salgados (Sortidos)',
    descricao: 'Uma seleção com 100 dos nossos melhores salgados: coxinhas, bolinhas de queijo e mais. Perfeito para a sua festa. Encomende com antecedência.',
    preco: 120.00,
    imagemUrl: '/salgados.jpg',
    tipo: 'SOB_ENCOMENDA',
  },
  {
    id: '4',
    nome: 'Sonho de Creme',
    descricao: 'Sonho fofinho recheado com creme de baunilha tradicional e polvilhado com açúcar.',
    preco: 5.00,
    imagemUrl: '/sonho.jpg',
    tipo: 'CATALOGO',
  },
];
// --- FIM DOS DADOS FALSOS ---

// Esta é a função que busca os dados de UM produto.
// Ela simula a busca no "banco de dados" (nosso array).
function getProdutoPorId(id: string) {
  return mockProdutos.find((p) => p.id === id);
}


// --- O Componente da Página ---
// O Next.js passa os parâmetros da URL (o [id]) para a página
// através da prop 'params'.
export default function PaginaProduto({ params }: { params: { id: string } }) {
  
  // 1. Pegamos o ID da URL
  const { id } = params;

  // 2. Buscamos o produto correspondente
  const produto = getProdutoPorId(id);

  // 3. Lidamos com o caso de produto não encontrado
  if (!produto) {
    return (
      <main className="container mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold">Produto não encontrado!</h1>
        <Link href="/" className="mt-4 inline-block text-amber-700 hover:underline">
          Voltar para a página inicial
        </Link>
      </main>
    );
  }

  // 4. Se encontrou, renderiza a página do produto
  return (
    <main className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-lg">
        
        {/* Coluna da Imagem */}
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={produto.imagemUrl}
            alt={produto.nome}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-md"
            priority // Prioriza o carregamento desta imagem, pois é o foco da página
          />
        </div>

        {/* Coluna de Informações */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900">{produto.nome}</h1>
          
          <p className="text-lg text-gray-600 my-4">
            {produto.descricao}
          </p>

          <span className="text-4xl font-extrabold text-amber-900 mb-6">
            {produto.preco.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>

          {/* Área de Ações */}
          <div className="flex flex-col gap-4">
            {/* Se for encomenda, o botão é diferente */}
            {produto.tipo === 'SOB_ENCOMENDA' ? (
              <div className="flex flex-col gap-2">
                <label htmlFor="detalhes" className="font-semibold text-gray-700">
                  Detalhes da Encomenda (Ex: sabor, data, etc.):
                </label>
                <textarea
                  id="detalhes"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  placeholder="Ex: Bolo de 2kg, recheio de ninho, escrever 'Parabéns'"
                ></textarea>
                <button className="w-full text-lg bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow transition-colors hover:bg-blue-700">
                  Solicitar Orçamento
                </button>
              </div>
            ) : (
              // Se for produto normal, mostra quantidade e "Adicionar"
              <div className="flex items-center gap-4">
                <label htmlFor="quantidade" className="font-semibold text-gray-700">Qtd:</label>
                <input
                  type="number"
                  id="quantidade"
                  name="quantidade"
                  defaultValue={1}
                  min={1}
                  className="w-20 p-2 border border-gray-300 rounded-md text-center focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
                <button className="flex-1 text-lg bg-amber-700 text-white font-bold py-3 px-6 rounded-lg shadow transition-colors hover:bg-amber-600">
                  Adicionar ao Carrinho
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}