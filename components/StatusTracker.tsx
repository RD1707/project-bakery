// Ficheiro: components/StatusTracker.tsx
"use client";

import { useState, useEffect } from 'react';

const ETAPAS = [
  { 
    nome: 'ANALISE', 
    titulo: 'Pedido Recebido', 
    descricao: 'Seu pedido foi confirmado e está sendo verificado',
    icon: '📋'
  },
  { 
    nome: 'PRODUCAO', 
    titulo: 'Em Produção', 
    descricao: 'Estamos preparando seus produtos com todo carinho',
    icon: '👨‍🍳'
  },
  { 
    nome: 'CONCLUIDO', 
    titulo: 'Saiu para Entrega', 
    descricao: 'Seu pedido está a caminho! Aproveite!',
    icon: '🚚'
  },
];

export function StatusTracker() {
  const [etapaAtiva, setEtapaAtiva] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setEtapaAtiva(1), 3000);
    const timer2 = setTimeout(() => setEtapaAtiva(2), 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mt-12">
      <div className="bg-white rounded-3xl shadow-lg p-8">
        
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
            Acompanhe seu Pedido
          </h3>
          <p className="text-gray-600">
            Veja o status em tempo real
          </p>
        </div>

        <div className="relative">
          {/* Linha de progresso de fundo */}
          <div className="absolute left-12 top-8 bottom-8 w-1 bg-gray-200 rounded-full"></div>
          
          {/* Linha de progresso colorida */}
          <div 
            className="absolute left-12 top-8 w-1 bg-gradient-to-b from-green-500 to-green-600 rounded-full transition-all duration-1000 ease-out"
            style={{ 
              height: `${(etapaAtiva / (ETAPAS.length - 1)) * 100}%` 
            }}
          ></div>

          <ul className="space-y-8 relative">
            {ETAPAS.map((etapa, index) => {
              const isCompleta = index < etapaAtiva;
              const isAtiva = index === etapaAtiva;

              return (
                <li key={etapa.nome} className="flex items-start gap-6 relative">
                  
                  {/* Ícone/Círculo */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`flex h-24 w-24 items-center justify-center rounded-full transition-all duration-500 shadow-lg
                        ${isCompleta ? 'bg-gradient-to-br from-green-500 to-green-600 scale-100' : ''}
                        ${isAtiva ? 'bg-gradient-to-br from-amber-500 to-amber-600 scale-110 animate-pulse' : ''}
                        ${!isCompleta && !isAtiva ? 'bg-gray-200 scale-90' : ''}
                      `}
                    >
                      {isCompleta ? (
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-4xl">{etapa.icon}</span>
                      )}
                    </div>
                    
                    {/* Badge de status */}
                    {isAtiva && (
                      <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                        Agora
                      </div>
                    )}
                  </div>

                  {/* Conteúdo */}
                  <div className={`flex-1 pt-3 transition-all duration-500 ${isAtiva ? 'translate-x-0' : ''}`}>
                    <div className={`
                      p-6 rounded-2xl transition-all duration-500
                      ${isAtiva ? 'bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 shadow-md' : ''}
                      ${isCompleta ? 'bg-green-50 border border-green-200' : ''}
                      ${!isCompleta && !isAtiva ? 'bg-gray-50 border border-gray-200 opacity-60' : ''}
                    `}>
                      <h3 className={`text-xl font-bold mb-2 transition-colors
                        ${isAtiva ? 'text-amber-900' : ''}
                        ${isCompleta ? 'text-green-900' : ''}
                        ${!isCompleta && !isAtiva ? 'text-gray-600' : ''}
                      `}>
                        {etapa.titulo}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed transition-colors
                        ${isAtiva ? 'text-amber-700' : ''}
                        ${isCompleta ? 'text-green-700' : ''}
                        ${!isCompleta && !isAtiva ? 'text-gray-500' : ''}
                      `}>
                        {etapa.descricao}
                      </p>

                      {/* Timestamp simulado */}
                      {(isCompleta || isAtiva) && (
                        <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {isAtiva ? 'Em andamento...' : 'Concluído'}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mensagem final quando tudo estiver completo */}
        {etapaAtiva === ETAPAS.length - 1 && (
          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 text-center animate-fade-in">
            <div className="text-4xl mb-3">🎊</div>
            <h4 className="font-bold text-green-900 text-lg mb-2">
              Pedido Completo!
            </h4>
            <p className="text-green-700 text-sm">
              Obrigado por comprar conosco. Bom apetite!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}