import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Zap, ArrowRight, MessageSquare, ExternalLink, CheckCircle2, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';
import { showcaseData } from '../data/showcaseData';
import { sounds } from '../utils/audioEffects';

export const ShowcaseTestDrive = ({ onOpenEstimator }) => {
  const [activeNicheId, setActiveNicheId] = useState('arquitetura');
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);

  const activeNiche = showcaseData.niches.find((n) => n.id === activeNicheId) || showcaseData.niches[0];

  const handleNicheChange = (id) => {
    sounds.playBeep();
    setActiveNicheId(id);
  };

  const handleSimulateWhatsApp = () => {
    sounds.playClick();
    setShowWhatsappModal(true);
    setTimeout(() => {
      sounds.playSuccess();
    }, 350);
  };

  return (
    <section id="demonstracao" className="py-24 px-4 sm:px-8 lg:px-16 bg-[#1A221D] border-t border-[#27322B] relative overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C68A2B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#3A2A14] text-[#C68A2B] border border-[#2F3C34]">
            <Sparkles className="w-3.5 h-3.5" />
            TEST-DRIVE INTERATIVO
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-[#EAF2EC] tracking-tight">
            Veja como fica o seu negócio em uma Vitrine Cauê Systems
          </h2>
          <p className="text-sm sm:text-base text-[#8FA39A] font-light leading-relaxed">
            Selecione o seu segmento abaixo e experimente a velocidade, o visual de alto padrão e o fluxo direto para o seu WhatsApp.
          </p>

          {/* Niche Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {showcaseData.niches.map((niche) => {
              const isSelected = activeNicheId === niche.id;
              return (
                <motion.button
                  key={niche.id}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleNicheChange(niche.id)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-sora font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#C68A2B] text-[#0F1411] shadow-lg shadow-[#C68A2B]/20 scale-105'
                      : 'bg-[#0F1411] text-[#8FA39A] hover:text-[#EAF2EC] border border-[#27322B] hover:border-[#2F3C34]'
                  }`}
                >
                  {niche.label}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Live Smartphone Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0F1411] border border-[#27322B] rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#3A2A14] text-[#C68A2B] border border-[#C68A2B]/30">
                {activeNiche.badge}
              </span>
              <span className="text-xs font-mono text-[#8FA39A] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Carregado em {activeNiche.stats.loadTime}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-sora text-[#EAF2EC] mb-2">
                {activeNiche.clientName}
              </h3>
              <p className="text-sm font-sora text-[#C68A2B] font-semibold mb-3">
                {activeNiche.tagline}
              </p>
              <p className="text-sm text-[#8FA39A] font-light leading-relaxed">
                {activeNiche.headline}
              </p>
            </div>

            {/* Performance Metric Badges */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#1A221D] border border-[#27322B]">
              <div className="text-center">
                <span className="text-xs font-mono text-[#6F857A] uppercase block">Velocidade</span>
                <span className="text-base sm:text-lg font-mono font-bold text-emerald-400">{activeNiche.stats.loadTime}</span>
              </div>
              <div className="text-center border-x border-[#27322B]">
                <span className="text-xs font-mono text-[#6F857A] uppercase block">Score Google</span>
                <span className="text-base sm:text-lg font-mono font-bold text-[#C68A2B]">{activeNiche.stats.score}</span>
              </div>
              <div className="text-center">
                <span className="text-xs font-mono text-[#6F857A] uppercase block">Conversão</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#EAF2EC]">{activeNiche.stats.conversion}</span>
              </div>
            </div>

            {/* Key Deliverables Checkmarks */}
            <div className="space-y-2 text-xs sm:text-sm text-[#EAF2EC]">
              {activeNiche.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C68A2B] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  sounds.playClick();
                  onOpenEstimator();
                }}
                className="btn-primary"
              >
                Quero Uma Vitrine Nesse Padrão (48h) →
              </motion.button>

              {activeNiche.liveUrl && (
                <a
                  href={activeNiche.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary flex items-center gap-1.5"
                >
                  <span>Abrir Site Real</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C68A2B]" />
                </a>
              )}
            </div>

          </div>

          {/* Right Smartphone Screen Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[320px] rounded-[38px] bg-[#1A221D] p-3 border-4 border-[#2F3C34] shadow-2xl relative">
              
              {/* Dynamic Island / Notch */}
              <div className="w-24 h-4 bg-[#0F1411] rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1A221D] mr-2" />
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>

              {/* Screen Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNiche.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#0F1411] rounded-[28px] overflow-hidden border border-[#27322B] p-4 flex flex-col justify-between h-[470px] text-xs font-sans relative"
                >
                  {/* Mock Navbar */}
                  <div className="flex items-center justify-between border-b border-[#27322B] pb-2">
                    <span className="font-sora font-bold text-[#EAF2EC] text-[11px] truncate max-w-[150px]">
                      {activeNiche.clientName}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      ● {activeNiche.stats.loadTime}
                    </span>
                  </div>

                  {/* Mock Image & Hero with Draggable Experience */}
                  <div className="my-auto space-y-3">
                    <motion.div
                      drag="x"
                      dragConstraints={{ left: -10, right: 10 }}
                      className="relative h-32 rounded-xl overflow-hidden border border-[#27322B] cursor-grab active:cursor-grabbing group"
                    >
                      <img
                        src={activeNiche.image}
                        alt={activeNiche.clientName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1411] via-transparent to-transparent opacity-80 pointer-events-none" />
                      <span className="absolute bottom-2 left-2 text-[10px] font-mono text-[#C68A2B] bg-[#0F1411]/80 px-2 py-0.5 rounded backdrop-blur-sm border border-[#27322B] pointer-events-none">
                        Projeto em Manaus
                      </span>
                    </motion.div>

                    <div>
                      <h4 className="font-sora font-bold text-xs text-[#EAF2EC] line-clamp-2">
                        {activeNiche.headline}
                      </h4>
                      <p className="text-[11px] text-[#8FA39A] line-clamp-2 mt-1 font-light">
                        {activeNiche.tagline}
                      </p>
                    </div>

                    {/* Simulated Interactive WhatsApp CTA inside the phone */}
                    <motion.button
                      whileTap={{ scale: 0.94 }}
                      onClick={handleSimulateWhatsApp}
                      className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-sora font-bold text-[11px] shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Pedir Orçamento no WhatsApp</span>
                    </motion.button>
                  </div>

                  {/* WhatsApp Simulation Modal */}
                  <AnimatePresence>
                    {showWhatsappModal && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute inset-x-2 bottom-2 p-3 rounded-2xl bg-[#1A221D] border border-emerald-500/60 shadow-2xl z-20 space-y-2"
                      >
                        <div className="flex items-center justify-between text-[10px] text-emerald-400 font-mono">
                          <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                            Mensagem Pré-Formatada
                          </span>
                          <button
                            onClick={() => setShowWhatsappModal(false)}
                            className="text-[#8FA39A] hover:text-white"
                          >
                            ✕
                          </button>
                        </div>
                        <div className="p-2 rounded-xl bg-[#0F1411] border border-[#27322B] text-[10px] text-[#EAF2EC] font-mono leading-relaxed">
                          &ldquo;{activeNiche.whatsappMsg}&rdquo;
                        </div>
                        <span className="text-[9px] text-[#8FA39A] block text-center">
                          O cliente clica e já cai no seu WhatsApp com o pedido pronto!
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Mock Footer info */}
                  <div className="pt-2 border-t border-[#27322B] flex items-center justify-between text-[9px] text-[#6F857A] font-mono">
                    <span>Manaus / AM</span>
                    <span className="text-[#C68A2B]">Powered by Cauê Systems</span>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
