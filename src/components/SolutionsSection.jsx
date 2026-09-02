import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
  {
    tag: 'Conversão',
    title: 'Vitrines Digitais & Portfólios de Alta Conversão',
    featured: true,
    desc: 'Criamos páginas ultra-rápidas para profissionais e empresas locais, focadas em valorizar o serviço e converter visitantes diretamente em conversas no WhatsApp.',
    points: [
      'Design exclusivo e adaptado ao seu nicho',
      'Carregamento instantâneo no celular (sub-1s)',
      'Botão direto para o seu WhatsApp',
      'Entrega e deploy em produção em 48h'
    ]
  },
  {
    tag: 'Atendimento',
    title: 'Atendimento Automático no WhatsApp 24/7',
    featured: false,
    desc: 'Não perca orçamentos à noite ou em fins de semana. Agentes e fluxos que atendem, tiram dúvidas e qualificam o cliente antes de passar para você.',
    points: [
      'Respostas instantâneas personalizadas',
      'Triagem de orçamentos e serviços',
      'Envio automático de portfólio e fotos',
      'Sem custos de contratação'
    ]
  },
  {
    tag: 'Sistemas',
    title: 'Sistemas de Gestão & Operação Sob Medida',
    featured: false,
    desc: 'Sistemas construídos exatamente para o seu fluxo de trabalho: sem as limitações e mensalidades abusivas de ERPs genéricos.',
    points: [
      'Fluxo adaptado ao seu vocabulário',
      'Painéis e relatórios em tempo real',
      'Autenticação e controle de acessos',
      'Deploy seguro em nuvem'
    ]
  },
  {
    tag: 'Monitoramento',
    title: 'Monitoramento & Telemetria em Tempo Real',
    featured: false,
    desc: 'Engenharia de alta disponibilidade para rastreamento de frotas, visão computacional e relatórios operacionais automáticos.',
    points: [
      'Ingestão de dados contínua sem travamento',
      'Visão computacional e detecção de exceções',
      'Geração e despacho automático de relatórios'
    ]
  }
];

export const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-24 px-4 sm:px-8 lg:px-16 bg-[#1A221D] border-t border-[#27322B]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <p className="text-[#C68A2B] uppercase tracking-[0.16em] text-xs font-bold font-sora">
            O que entregamos
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-[#EAF2EC] tracking-tight">
            Soluções práticas para gerar resultados
          </h2>
          <p className="text-sm sm:text-base text-[#8FA39A] font-light max-w-2xl leading-relaxed">
            Estruturas digitais focadas em atrair clientes, eliminar gargalos manuais e dar visibilidade total à sua operação.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((sol, idx) => (
            <motion.article
              key={sol.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                sol.featured
                  ? 'md:col-span-2 bg-[#1F2922] border-[#2F3C34] shadow-xl'
                  : 'bg-[#0F1411] border-[#27322B] hover:border-[#2F3C34]'
              }`}
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#3A2A14] text-[#C68A2B] border border-[#2F3C34] mb-4">
                {sol.tag}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold font-sora text-[#EAF2EC] mb-3">
                {sol.title}
              </h3>

              <p className="text-sm text-[#8FA39A] font-light leading-relaxed mb-6">
                {sol.desc}
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[#EAF2EC]">
                {sol.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-[#C68A2B] font-bold shrink-0">→</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
