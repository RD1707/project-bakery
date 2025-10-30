// Ficheiro: app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Vamos usar a fonte Inter
import './globals.css';
import { Header } from '@/components/Header'; // Importa o Header
import { Footer } from '@/components/Footer'; // Importa o Footer

// Configura a fonte
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Padaria Delícia - Protótipo',
  description: 'Protótipo de E-commerce para padaria',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* A fonte Inter é aplicada aqui.
        Adicionamos 'flex flex-col min-h-screen' para garantir
        que o Footer fique no fim da página, mesmo em páginas curtas.
      */}
      <body className={`${inter.variable} font-sans flex flex-col min-h-screen bg-gray-50`}>
        <Header /> {/* O Header aparecerá em todas as páginas */}
        
        {/* 'flex-grow' faz o conteúdo principal empurrar o footer para baixo */}
        <div className="flex-grow">
          {children} {/* Aqui é onde a página (ex: page.tsx) será renderizada */}
        </div>

        <Footer /> {/* O Footer aparecerá em todas as páginas */}
      </body>
    </html>
  );
}