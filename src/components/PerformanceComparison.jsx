import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gauge, Zap, AlertTriangle, CheckCircle2, ArrowRight, Smartphone, ShieldCheck, Sparkles } from 'lucide-react';
import { sounds } from '../utils/audioEffects';

export const PerformanceComparison = ({ onOpenEstimator }) => {
  const [activeView, setActiveView] = useState('caue'); // 'traditional' vs 'caue'

  const handleToggle = (view) => {
    sounds.playBeep();
    setActiveView(view);
  };

  return (
    <section className="py-24 relative bg-brand-surface/40 border-y border-brand-border/70 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-brand-gold/30 text-xs font-mono text-brand-gold">
            <Gauge className="w-3.5 h-3.5" />
            BENCHMARK FACTUAL & RETENÇÃO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Por que um site lento custa clientes todos os dias?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            No mercado de Manaus, cada segundo a mais para abrir uma página no 4G/5G reduz em até 40% a chance do cliente chamar no WhatsApp.
          </p>

          {/* Interactive Switcher Buttons */}
          <div className="inline-flex items-center p-1.5 rounded-2xl glass-panel border border-brand-border bg-brand-void mt-4">
            <button
              onClick={() => handleToggle('traditional')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeView === 'traditional'
                  ? 'bg-red-500/20 text-red-400 border border-red-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Site Comum / Agregador de Links
            </button>
            <button
              onClick={() => handleToggle('caue')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                activeView === 'caue'
                  ? 'bg-brand-gold text-slate-950 shadow-md shadow-brand-gold/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              Vitrine Cauê Systems (48h)
            </button>
          </div>
        </div>

        {/* Dynamic Comparison Card Container */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeView === 'caue' ? (
              <motion.div
                key="caue-view"
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl glass-panel border border-brand-emerald/50 bg-gradient-to-br from-brand-card/95 via-brand-surface/90 to-brand-void p-6 sm:p-10 shadow-2xl shadow-emerald-950/30 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  
                  {/* Left Specs */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-brand-emerald/15 border border-brand-emerald/40 text-xs font-mono font-bold text-brand-emerald">
                        Padrão de Engenharia Cauê
                      </span>
                      <span className="text-xs font-mono text-slate-400">Mobile First & Sub-1s</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Engenharia Otimizada para <span className="text-gradient-gold">Conversão Imediata</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-mono text-slate-400">Carregamento</span>
                          <span className="text-sm font-mono font-bold text-brand-emerald">0.68s</span>
                        </div>
                        <div className="w-full bg-brand-void h-2 rounded-full overflow-hidden">
                          <div className="bg-brand-emerald h-full w-[95%]" />
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Abre instantaneamente no 4G</span>
                      </div>

                      <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-mono text-slate-400">Score Google</span>
                          <span className="text-sm font-mono font-bold text-brand-emerald">99 / 100</span>
                        </div>
                        <div className="w-full bg-brand-void h-2 rounded-full overflow-hidden">
                          <div className="bg-brand-emerald h-full w-[99%]" />
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Zero penalidade no Google</span>
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                        <span><strong>Design Dark & Gold Impecável:</strong> Causa impacto visual de alto padrão.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                        <span><strong>Funil Direto no WhatsApp:</strong> O cliente escolhe o serviço e clica sem rodeios.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                        <span><strong>Hospedagem Edge Global:</strong> Servidores em alta disponibilidade com certificado SSL.</span>
                      </li>
                    </ul>

                    <div className="pt-2">
                      <button
                        onClick={onOpenEstimator}
                        className="px-6 py-3 rounded-xl bg-brand-gold hover:bg-brand-goldLight text-slate-950 font-bold text-xs tracking-wide transition-all shadow-lg shadow-brand-gold/20 flex items-center gap-2"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Quero uma Vitrine nesse Padrão (48h)</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Phone Mockup Preview */}
                  <div className="w-full lg:w-72 shrink-0 p-4 rounded-3xl bg-brand-void border-2 border-brand-emerald/40 shadow-2xl space-y-3 font-mono text-[11px]">
                    <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                      <span className="text-brand-emerald font-bold">● ONLINE</span>
                      <span className="text-slate-500">juliano-souza...</span>
                    </div>

                    <div className="p-3 rounded-xl bg-brand-surface border border-brand-border/70 space-y-1">
                      <span className="text-brand-gold font-bold block text-xs">Juliano Souza</span>
                      <span className="text-slate-400 text-[10px] block">Móveis Planejados Manaus</span>
                    </div>

                    <div className="h-28 rounded-xl bg-brand-surface/80 border border-brand-border/60 p-2 flex flex-col justify-between">
                      <span className="text-[10px] text-brand-emerald font-semibold">⚡ Carregado em 680ms</span>
                      <div className="w-full py-2 bg-emerald-600 rounded-lg text-center text-white font-bold text-[10px] flex items-center justify-center gap-1">
                        <span>Pedir Orçamento WhatsApp</span>
                      </div>
                    </div>

                    <div className="text-center text-[10px] text-brand-emerald">
                      +180% de taxa de conversão
                    </div>
                  </div>

                </div>
              </motion.div>
            ) : (
              <motion.div
                key="traditional-view"
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl glass-panel border border-red-500/40 bg-gradient-to-br from-brand-card/95 via-brand-surface/90 to-brand-void p-6 sm:p-10 shadow-2xl shadow-red-950/20 relative overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  
                  {/* Left Specs */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-red-500/15 border border-red-500/40 text-xs font-mono font-bold text-red-400">
                        Padrão Genérico / Antigo
                      </span>
                      <span className="text-xs font-mono text-slate-400">Agregadores simples & Templates pesados</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Perda de Clientes por <span className="text-red-400">Lentidão e Falta de Autoridade</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-mono text-slate-400">Carregamento</span>
                          <span className="text-sm font-mono font-bold text-red-400">3.8s a 5.2s</span>
                        </div>
                        <div className="w-full bg-brand-void h-2 rounded-full overflow-hidden">
                          <div className="bg-red-500 h-full w-[35%]" />
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">53% dos usuários desistem antes de abrir</span>
                      </div>

                      <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-mono text-slate-400">Score Google</span>
                          <span className="text-sm font-mono font-bold text-red-400">42 / 100</span>
                        </div>
                        <div className="w-full bg-brand-void h-2 rounded-full overflow-hidden">
                          <div className="bg-red-500 h-full w-[42%]" />
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Penalizado no tráfego orgânico e pago</span>
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                        <span><strong>Visual Genérico:</strong> Aparência amadora que não justifica preços de alto padrão.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                        <span><strong>Menu Confuso:</strong> O visitante se perde entre vários links e não entra em contato.</span>
                      </li>
                    </ul>

                    <div className="pt-2">
                      <button
                        onClick={() => handleToggle('caue')}
                        className="px-6 py-3 rounded-xl bg-brand-surface hover:bg-brand-card text-slate-200 font-bold text-xs border border-brand-border transition-all flex items-center gap-2"
                      >
                        <span>Ver a Solução da Cauê Systems</span>
                        <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
                      </button>
                    </div>
                  </div>

                  {/* Right Phone Mockup Preview */}
                  <div className="w-full lg:w-72 shrink-0 p-4 rounded-3xl bg-brand-void border-2 border-red-500/40 shadow-2xl space-y-3 font-mono text-[11px] opacity-80">
                    <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                      <span className="text-red-400 font-bold">⚠️ CARREGANDO...</span>
                      <span className="text-slate-500">msha.ke/...</span>
                    </div>

                    <div className="p-3 rounded-xl bg-brand-surface border border-brand-border/70 space-y-1">
                      <span className="text-slate-400 font-bold block text-xs">Linktree Genérico</span>
                      <span className="text-slate-500 text-[10px] block">Sem identidade própria</span>
                    </div>

                    <div className="h-28 rounded-xl bg-brand-surface/80 border border-brand-border/60 p-2 flex flex-col justify-center items-center text-center space-y-2">
                      <div className="w-6 h-6 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
                      <span className="text-[10px] text-slate-400">Aguardando scripts externos...</span>
                    </div>

                    <div className="text-center text-[10px] text-red-400">
                      Alta taxa de abandono
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
