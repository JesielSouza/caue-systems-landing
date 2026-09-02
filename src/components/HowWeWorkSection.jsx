import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01 Imersão',
    title: 'Operação antes do código',
    desc: 'Mapeamos como a operação funciona hoje, onde ela sangra dinheiro e trava crescimento.'
  },
  {
    step: '02 Arquitetura',
    title: 'Stack certa para o problema',
    desc: 'O que coloca o produto no ar mais rápido sem criar dívida técnica.'
  },
  {
    step: '03 Ciclos curtos',
    title: 'Produto funcionando cedo',
    desc: 'O cliente vê e usa produto real antes de estar pronto.'
  },
  {
    step: '04 IA nativa',
    title: 'IA com propósito, não decoração',
    desc: 'Cada agente tem função operacional clara: reduzir custo ou eliminar retrabalho.'
  },
  {
    step: '05 Contexto',
    title: 'Feito para o contexto amazônico',
    desc: 'Somos de Manaus. Funciona aqui porque foi pensado aqui.'
  },
  {
    step: '06 Parceria',
    title: 'Braço técnico de longo prazo',
    desc: 'Escalamos, atualizamos e integramos conforme a operação evolui.'
  }
];

export const HowWeWorkSection = () => {
  return (
    <section id="como" className="py-24 px-4 sm:px-8 lg:px-16 bg-[#0F1411]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <p className="text-[#C68A2B] uppercase tracking-[0.16em] text-xs font-bold font-sora">
            Processo
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-[#EAF2EC] tracking-tight">
            Como trabalhamos
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#27322B] rounded-2xl overflow-hidden border border-[#27322B]">
          {steps.map((s, idx) => (
            <motion.article
              key={s.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 sm:p-8 bg-[#0F1411] hover:bg-[#1A221D] transition-colors space-y-3"
            >
              <span className="text-[#C68A2B] font-sora font-semibold text-xs uppercase tracking-wider block">
                {s.step}
              </span>
              <h3 className="text-lg font-bold font-sora text-[#EAF2EC]">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#8FA39A] font-light leading-relaxed">
                {s.desc}
              </p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
