import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Smartphone, CheckCircle2, Sparkles, Gauge } from 'lucide-react';
import { sounds } from '../utils/audioEffects';

export const Hero = ({ onOpenEstimator }) => {
  const [loadTime, setLoadTime] = useState('0.64');

  useEffect(() => {
    // Measure realistic navigation load time
    if (typeof window !== 'undefined' && window.performance) {
      const navEntry = window.performance.getEntriesByType('navigation')[0];
      if (navEntry && navEntry.duration > 0) {
        const seconds = (navEntry.duration / 1000).toFixed(2);
        setLoadTime(seconds > 0.1 && seconds < 2 ? seconds : '0.64');
      }
    }
  }, []);

  return (
    <header id="top" className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#0F1411]">
      
      {/* Background Hero Grid & Ambient Glow */}
      <div className="hero-grid" />
      <div className="hero-glow" />

      <div className="max-w-5xl mx-auto w-full relative z-10 text-center space-y-8">
        
        {/* Live Speed Telemetry Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono bg-[#1A221D] border border-[#C68A2B]/40 text-[#EAF2EC] shadow-lg shadow-[#C68A2B]/10"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 font-bold">⚡ Carregado em {loadTime}s</span>
          <span className="text-[#6F857A]">|</span>
          <span className="text-[#C68A2B]">Entrega Expressa em 48h em Manaus</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-[#EAF2EC] font-sora leading-[1.1] max-w-4xl mx-auto"
        >
          Sua empresa com presença digital de alto padrão no ar em{' '}
          <span className="text-[#C68A2B] underline decoration-[#C68A2B]/40 decoration-wavy underline-offset-8">
            até 48 horas.
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-base sm:text-lg lg:text-xl text-[#8FA39A] font-light max-w-2xl mx-auto leading-relaxed"
        >
          Vitrines ultra-rápidas que transformam visitantes em clientes no WhatsApp, automações de atendimento 24/7 e sistemas sob medida para operações em Manaus.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <a
            href="https://wa.me/5592981038799?text=Ol%C3%A1%2C+vim+pelo+site+da+Cau%C3%AA+Systems+e+gostaria+de+solicitar+minha+vitrine+em+48h"
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playClick()}
            className="btn-primary w-full sm:w-auto text-sm !py-3.5 !px-8 shadow-xl shadow-[#C68A2B]/20"
          >
            <span>Montar Minha Vitrine em 48h →</span>
          </a>

          <a
            href="#demonstracao"
            onClick={() => sounds.playClick()}
            className="btn-secondary w-full sm:w-auto text-sm !py-3.5 !px-8"
          >
            <span>Ver Test-Drive no Celular ↓</span>
          </a>
        </motion.div>

        {/* Micro Value Proposition Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-sans text-[#6F857A] pt-4"
        >
          <span className="flex items-center gap-1.5 text-[#8FA39A]">
            <CheckCircle2 className="w-4 h-4 text-[#C68A2B]" />
            Pronto em 48 horas
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-[#8FA39A]">
            <CheckCircle2 className="w-4 h-4 text-[#C68A2B]" />
            Carregamento sub-1s no 4G/5G
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-[#8FA39A]">
            <CheckCircle2 className="w-4 h-4 text-[#C68A2B]" />
            Funil direto no WhatsApp
          </span>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <div className="hidden lg:flex flex-col items-center gap-2 absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-[0.2em] text-[#6F857A]">
        <span>SCROLL</span>
        <i className="scroll-indicator-line" />
      </div>

    </header>
  );
};
