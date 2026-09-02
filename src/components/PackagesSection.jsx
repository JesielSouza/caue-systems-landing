import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { showcaseData } from '../data/showcaseData';
import { sounds } from '../utils/audioEffects';

export const PackagesSection = ({ onSelectPlan }) => {
  return (
    <section id="solucoes" className="py-24 px-4 sm:px-8 lg:px-16 bg-[#0F1411] border-t border-[#27322B]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header - Sentence case, clear hierarchy (Nimbuu RUI + PUI) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-[#C68A2B] uppercase tracking-[0.16em] text-xs font-bold font-sora">
            Soluções e entregáveis
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-[#EAF2EC] tracking-tight">
            Transparência total em prazos e escopo
          </h2>
          <p className="text-base text-[#8FA39A] font-light leading-relaxed max-w-xl mx-auto">
            Sem contratos engessados e sem mensalidades abusivas. Você sabe exatamente o que recebe e quando.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {showcaseData.packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between border relative transition-all ${
                pkg.isPopular
                  ? 'bg-[#1A221D] border-[#C68A2B] shadow-2xl shadow-[#C68A2B]/10 lg:-translate-y-2'
                  : 'bg-[#0F1411] border-[#27322B] hover:border-[#2F3C34]'
              }`}
            >
              {/* Popular Flag */}
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C68A2B] text-[#0F1411] font-sora font-extrabold text-[11px] uppercase tracking-wider shadow-md">
                  ★ Mais solicitado em Manaus
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#3A2A14] text-[#C68A2B] border border-[#2F3C34]">
                    {pkg.tag}
                  </span>
                  <span className="text-xs font-mono text-[#8FA39A] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C68A2B]" />
                    {pkg.timeline.split(' ')[0]} {pkg.timeline.split(' ')[1]}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-sora text-[#EAF2EC] mb-2">
                  {pkg.title}
                </h3>
                
                <p className="text-xs font-mono text-[#C68A2B] mb-4">
                  {pkg.timeline}
                </p>

                <p className="text-sm text-[#8FA39A] font-light leading-relaxed mb-6">
                  {pkg.headline}
                </p>

                {/* Deliverables Checklist (Nimbuu PUI 8pt spacing) */}
                <div className="space-y-2.5 mb-8 border-t border-[#27322B] pt-6">
                  <span className="text-[11px] uppercase font-mono font-bold text-[#8FA39A] block mb-3">
                    O que está incluso:
                  </span>
                  {pkg.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#EAF2EC]">
                      <CheckCircle2 className="w-4 h-4 text-[#C68A2B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Target Audience & Trigger (Min 48px target) */}
              <div className="space-y-4 pt-4 border-t border-[#27322B]">
                <p className="text-xs text-[#8FA39A] leading-relaxed">
                  <strong className="text-[#EAF2EC]">Ideal para:</strong> {pkg.forWho}
                </p>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    sounds.playClick();
                    onSelectPlan(pkg.id);
                  }}
                  className={`w-full min-h-[48px] ${
                    pkg.isPopular ? 'btn-primary' : 'btn-secondary'
                  } text-xs font-sora font-bold text-center !py-3 cursor-pointer`}
                >
                  {pkg.ctaText}
                </motion.button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
