import React from 'react';
import { motion } from 'framer-motion';

const stack = [
  'Python',
  'FastAPI',
  'OpenCV',
  'React',
  'TypeScript',
  'Node.js',
  'Docker',
  'Pytest',
  'LLMs Locais',
  'Supabase',
  'Vercel',
  'Git/GitHub',
];

const proofPoints = [
  'Desenvolvimento de agentes autônomos e sistemas com modelos de IA 100% locais e privados.',
  'Arquitetura de telemetria contínua, visão computacional sanitizada e automação de rotinas críticas.',
  'Operação e engenharia de software com foco em segurança fail-closed, observabilidade e robustez.',
];

export const TechnicalProofSection = () => {
  return (
    <section id="base-tecnica" className="py-24 px-4 sm:px-8 lg:px-16 bg-[#0F1411]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <p className="text-[#C68A2B] uppercase tracking-[0.16em] text-xs font-bold font-sora">
            Base técnica
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-[#EAF2EC] tracking-tight">
            Experiência prática para tirar sistemas do papel
          </h2>
        </div>

        {/* Proof Grid (2 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card Jesiel */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#1A221D] border border-[#27322B] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold font-sora text-[#EAF2EC] mb-3">
                Jesiel Da Costa Souza
              </h3>
              <p className="text-sm text-[#8FA39A] font-light leading-relaxed mb-6">
                Desenvolvedor e especialista em automação e sistemas de IA na Cauê Systems, com atuação em engenharia de software, monitoramento de operações e agentes autônomos.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-[#27322B] text-xs font-sora font-semibold text-[#C68A2B]">
              <a href="mailto:jesielcosta13@gmail.com" className="hover:underline">E-mail profissional</a>
              <a href="https://www.linkedin.com/in/jesiel-souza-71b837155" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              <a href="https://github.com/JesielSouza" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
            </div>
          </motion.article>

          {/* Card Stack */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#1A221D] border border-[#27322B] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold font-sora text-[#EAF2EC] mb-4">
                Stack recorrente
              </h3>
              <div className="flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-xs font-mono text-[#8FA39A] bg-[#0F1411] border border-[#2F3C34]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

        </div>

        {/* 3 Proof Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#27322B] rounded-2xl overflow-hidden border border-[#27322B]">
          {proofPoints.map((pt, idx) => (
            <div key={idx} className="p-6 bg-[#1A221D] space-y-2">
              <span className="text-[#C68A2B] font-sora font-semibold text-xs">
                0{idx + 1}
              </span>
              <p className="text-xs sm:text-sm text-[#8FA39A] font-light leading-relaxed">
                {pt}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
