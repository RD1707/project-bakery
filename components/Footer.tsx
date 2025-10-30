// Ficheiro: components/Footer.tsx

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-950 to-amber-900 text-amber-50 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Coluna 1 - Sobre */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Padaria Delícia</h3>
            <p className="text-amber-200 text-sm leading-relaxed">
              Produtos artesanais feitos com carinho e ingredientes selecionados. 
              O sabor de verdade, fresquinho todos os dias.
            </p>
          </div>

          {/* Coluna 2 - Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 text-amber-200 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/produtos" className="hover:text-white transition-colors">Produtos</a>
              </li>
              <li>
                <a href="/carrinho" className="hover:text-white transition-colors">Carrinho</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3 text-amber-200 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(71) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Salvador, Bahia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-amber-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-amber-300 text-sm">
            <p>&copy; 2025 Padaria Delícia. Todos os direitos reservados.</p>
            <p className="text-xs">Protótipo desenvolvido com Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
}