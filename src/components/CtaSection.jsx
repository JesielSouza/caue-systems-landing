import React from 'react';
import { motion } from 'framer-motion';
import { sounds } from '../utils/audioEffects';

export const CtaSection = () => {
  return (
    <section id="contato" className="py-28 px-4 sm:px-8 lg:px-16 bg-[#1A221D] border-t border-[#27322B] text-center relative overflow-hidden">
      
      {/* Glow Effect */}
      <div className="cta-glow" />

      <div className="max-w-3xl mx-auto relative z-10 space-y-6">
        
        <p className="text-[#C68A2B] uppercase tracking-[0.16em] text-xs font-bold font-sora">
          Próximo passo
        </p>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-[#EAF2EC] tracking-tight leading-tight">
          Pronto para profissionalizar sua presença digital ou automatizar sua rotina?
        </h2>

        <p className="text-sm sm:text-base text-[#8FA39A] font-light leading-relaxed max-w-2xl mx-auto">
          Seja para criar sua vitrine digital de alta conversão, automatizar o atendimento do seu WhatsApp ou construir um sistema sob medida, fale conosco diretamente no WhatsApp.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="https://wa.me/5592981038799?text=Ol%C3%A1%2C+vim+pelo+site+da+Cau%C3%AA+Systems+e+gostaria+de+um+or%C3%A7amento"
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playClick()}
            className="btn-primary"
          >
            Conversar no WhatsApp →
          </a>

          <a
            href="https://www.linkedin.com/in/jesiel-souza-71b837155"
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playClick()}
            className="btn-secondary"
          >
            Ver LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
};
