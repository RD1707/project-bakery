// Ficheiro: components/Header.tsx
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-amber-800 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo/Nome */}
        <Link href="/" className="text-2xl font-bold hover:opacity-80">
          Padaria Delícia
        </Link>

        {/* Links de Navegação */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="hover:text-amber-200">
            Home
          </Link>
          <Link href="/produtos" className="hover:text-amber-200">
            Produtos
          </Link>
          <Link href="/carrinho" className="bg-amber-600 px-4 py-2 rounded-md font-medium hover:bg-amber-500">
            Carrinho (0)
          </Link>
        </div>
      </nav>
    </header>
  );
}