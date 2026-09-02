import React from 'react';
import { motion } from 'framer-motion';
import { showcaseData } from '../data/showcaseData';

export const StepsSection = () => {
  return (
    <section id="como-funciona" className="py-24 px-4 sm:px-8 lg:px-16 bg-[#1A221D] border-t border-[#27322B]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <p className="text-[#C68A2B] uppercase tracking-[0.16em] text-xs font-bold font-sora">
            Processo Ágil
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-[#EAF2EC] tracking-tight">
            Como funciona a entrega em 3 passos
          </h2>
          <p className="text-sm sm:text-base text-[#8FA39A] font-light max-w-2xl leading-relaxed">
            Zero burocracia. Você não perde tempo com reuniões desnecessárias e tem seu projeto no ar em tempo recorde.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showcaseData.steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#0F1411] border border-[#27322B] hover:border-[#2F3C34] transition-all space-y-4 relative overflow-hidden group"
            >
              <div className="text-4xl font-extrabold font-sora text-[#3A2A14] group-hover:text-[#C68A2B] transition-colors">
                {step.number}
              </div>

              <h3 className="text-lg font-bold font-sora text-[#EAF2EC]">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#8FA39A] font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
