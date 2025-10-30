// Ficheiro: components/Header.tsx
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo com fonte elegante */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="text-3xl">🥖</div>
          <div>
            <span className="block font-display text-2xl font-bold text-amber-900 tracking-tight group-hover:text-amber-700 transition-colors">
              Padaria Delícia
            </span>
            <span className="block text-xs text-amber-600 tracking-wider uppercase">
              Sabor Artesanal
            </span>
          </div>
        </Link>

        {/* Links de navegação - clean e espaçados */}
        <div className="flex items-center gap-8">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-amber-900 font-medium transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-900 group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <Link 
            href="/produtos" 
            className="text-gray-700 hover:text-amber-900 font-medium transition-colors relative group"
          >
            Produtos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-900 group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <Link 
            href="/carrinho" 
            className="flex items-center gap-2 bg-amber-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-amber-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Carrinho
            <span className="bg-white text-amber-900 text-xs font-bold px-2 py-0.5 rounded-full">
              0
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}