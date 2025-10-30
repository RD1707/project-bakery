// Ficheiro: app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Fonte para o corpo do texto - moderna e legível
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

// Fonte para títulos - elegante e sofisticada
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Padaria Delícia - O sabor artesanal que conquista',
  description: 'Produtos artesanais fresquinhos todos os dias',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans flex flex-col min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <Header />
        
        <div className="flex-grow">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}