import React from 'react';
import { motion } from 'framer-motion';

const differentials = [
  {
    title: 'Produto em produção, não em PowerPoint',
    desc: 'Cada solução que oferecemos já foi construída e está rodando.'
  },
  {
    title: 'Zero ao ar em dias, não em meses',
    desc: 'Fluxo operacional completo de logística em um dia. CRM naval em poucos dias.'
  },
  {
    title: 'IA com propósito operacional',
    desc: 'Não adicionamos IA para impressionar. Cada agente tem função clara.'
  },
  {
    title: 'Contexto que vira produto',
    desc: 'Sistemas que falam a língua do setor. Não entregamos CRUD com logo do cliente.'
  },
  {
    title: 'Visão de sistema, não de programador',
    desc: 'Código, IA, automação, estratégia operando juntos. Capacidade instalada.'
  },
  {
    title: 'Somos de Manaus e isso importa',
    desc: 'Conhecemos a ZFM e a logística amazônica. Pensado aqui, funciona aqui.'
  }
];

export const DifferentialsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#0F1411] border-t border-[#27322B]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <p className="text-[#C68A2B] uppercase tracking-[0.16em] text-xs font-bold font-sora">
            Por que nós
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-[#EAF2EC] tracking-tight">
            O nosso rastro
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentials.map((diff, idx) => (
            <motion.article
              key={diff.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#1A221D] hover:bg-[#1F2922] border border-[#27322B] hover:border-[#2F3C34] transition-colors space-y-2"
            >
              <h3 className="text-lg font-bold font-sora text-[#EAF2EC]">
                {diff.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#8FA39A] font-light leading-relaxed">
                {diff.desc}
              </p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
