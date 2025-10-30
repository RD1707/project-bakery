// Ficheiro: components/StatusTracker.tsx
"use client"; // Diz ao Next.js que este é um Componente de Cliente

import { useState, useEffect } from 'react'; // Apenas uma importação

// Nossos status
const ETAPAS = [
  { nome: 'ANALISE', titulo: 'Pedido em Análise', descricao: 'Recebemos seu pedido e estamos verificando.' },
  { nome: 'PRODUCAO', titulo: 'Em Produção', descricao: 'Seu pedido já está sendo preparado pela nossa equipe.' },
  { nome: 'CONCLUIDO', titulo: 'Pronto para Entrega', descricao: 'Seu pedido está pronto para ser entregue ou retirado!' },
];

// Apenas UMA declaração da função
export function StatusTracker() {
  const [etapaAtiva, setEtapaAtiva] = useState(0); // Começa na etapa 0

  useEffect(() => {
    // Simula a passagem para "Produção" após 3 segundos
    const timer1 = setTimeout(() => setEtapaAtiva(1), 3000);
    // Simula a passagem para "Concluído" após 6 segundos
    const timer2 = setTimeout(() => setEtapaAtiva(2), 6000);

    return () => { // Limpa os timers
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []); // Roda só uma vez

  return (
    <div className="w-full max-w-lg mx-auto mt-8">
      <ul className="space-y-4">
        {ETAPAS.map((etapa, index) => {
          const isCompleta = index < etapaAtiva;
          const isAtiva = index === etapaAtiva;

          return (
            <li key={etapa.nome} className="flex items-start gap-4">
              {/* O Círculo e a Linha */}
              <div className="flex flex-col items-center h-full">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 flex-shrink-0
                    ${isCompleta ? 'bg-green-600' : ''}
                    ${isAtiva ? 'bg-amber-600 scale-110' : ''}
                    ${!isCompleta && !isAtiva ? 'bg-gray-300' : ''}
                  `}
                >
                  {isCompleta ? (
                    <span className="text-white font-bold">✔</span> // Check
                  ) : (
                    <span className="text-white font-bold">{index + 1}</span>
                  )}
                </div>
                {/* Linha vertical (não aparece no último) */}
                {index < ETAPAS.length - 1 && (
                  <div className={`w-0.5 h-full min-h-16 my-2 transition-colors duration-500
                    ${isCompleta ? 'bg-green-600' : 'bg-gray-300'}
                  `}></div>
                )}
              </div>

              {/* O Texto */}
              <div className={`pt-1 text-left ${isAtiva ? '' : 'opacity-70'}`}>
                <h3 className={`text-lg font-semibold ${isAtiva ? 'text-amber-700' : 'text-gray-900'}`}>
                  {etapa.titulo}
                </h3>
                <p className="text-gray-600">{etapa.descricao}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}