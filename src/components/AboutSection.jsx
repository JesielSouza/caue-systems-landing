import React from 'react';
import { motion } from 'framer-motion';

const badges = [
  'TI em Manaus',
  'Sistemas web',
  'Automação de processos',
  'Ferramentas digitais',
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-4 sm:px-8 lg:px-16 bg-[#1A221D] border-t border-[#27322B]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-[#C68A2B] uppercase tracking-[0.16em] text-xs font-bold font-sora">
            Sobre
          </p>

          <blockquote className="caue-quote">
            Cauê Systems é a operação de tecnologia de Jesiel Souza para criar sistemas, automações e ferramentas digitais com foco em resultado prático.
          </blockquote>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {badges.map((b) => (
              <span
                key={b}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-[#0F1411] border border-[#2F3C34] text-[#8FA39A]"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-5 text-sm sm:text-base text-[#B8CBBF] font-light leading-relaxed pt-2"
        >
          <p>
            A proposta é simples: entender processos reais, transformar controles soltos em sistemas organizados e entregar soluções que possam ser usadas no dia a dia.
          </p>
          <p>
            Atuação em Manaus, com experiência em TI, suporte, infraestrutura, sistemas internos e desenvolvimento web.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
