import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { showcaseData } from '../data/showcaseData';
import { sounds } from '../utils/audioEffects';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    sounds.playClick();
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-8 lg:px-16 bg-[#0F1411] border-t border-[#27322B]">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <p className="text-[#C68A2B] uppercase tracking-[0.16em] text-xs font-bold font-sora">
            Dúvidas Comuns
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-[#EAF2EC] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-[#8FA39A] font-light max-w-xl mx-auto leading-relaxed">
            Respostas diretas sobre prazos, domínio, WhatsApp e manutenção.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {showcaseData.faq.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-2xl bg-[#1A221D] border border-[#27322B] overflow-hidden"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#1F2922] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold font-sora text-[#EAF2EC]">
                    {item.q}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all ${
                    isOpen ? 'bg-[#C68A2B] text-[#0F1411] border-[#C68A2B]' : 'bg-[#0F1411] text-[#8FA39A] border-[#27322B]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#8FA39A] font-light leading-relaxed border-t border-[#27322B] pt-4"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
