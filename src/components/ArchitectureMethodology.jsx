import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Code2, ShieldCheck, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

const iconMap = {
  Search: Search,
  Palette: Palette,
  Code2: Code2,
  ShieldCheck: ShieldCheck,
  Rocket: Rocket,
};

export const ArchitectureMethodology = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="metodologia" className="py-24 relative bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-brand-gold/30 text-xs font-mono text-brand-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
            O MÉTODO CAUÊ SYSTEMS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Disciplina Operacional do Diagnóstico ao Deploy
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Eliminamos surpresas, atrasos e alucinações técnicas com uma esteira padronizada de engenharia e governança.
          </p>
        </div>

        {/* 5 Steps Interactive Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Steps List (Left Side) */}
          <div className="lg:col-span-5 space-y-3">
            {companyData.methodology.map((step, idx) => {
              const Icon = iconMap[step.icon] || Code2;
              const isActive = activeStep === idx;

              return (
                <motion.div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  whileHover={{ scale: 1.01 }}
                  className={`cursor-pointer p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex items-start gap-4 ${
                    isActive
                      ? 'bg-brand-card border-brand-gold/50 shadow-lg shadow-brand-gold/10'
                      : 'bg-brand-surface/60 border-brand-border/60 hover:border-brand-border hover:bg-brand-surface'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-mono font-bold text-xs ${
                    isActive
                      ? 'bg-brand-gold text-slate-950'
                      : 'bg-brand-surface text-slate-400 border border-brand-border'
                  }`}>
                    {step.step}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className={`text-sm sm:text-base font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {step.title}
                      </h4>
                      {isActive && <ArrowRight className="w-4 h-4 text-brand-gold" />}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Highlight Card (Right Side) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl p-6 sm:p-10 glass-panel border border-brand-border overflow-hidden bg-brand-void/80 shadow-2xl">
              
              {/* Background ambient ring */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                <div className="flex items-center justify-between border-b border-brand-border/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                      {React.createElement(iconMap[companyData.methodology[activeStep].icon] || Code2, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-brand-gold uppercase tracking-wider block">
                        Etapa {companyData.methodology[activeStep].step} de 05
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                        {companyData.methodology[activeStep].title}
                      </h3>
                    </div>
                  </div>

                  <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-xs font-mono text-brand-emerald">
                    Fase Verificada
                  </span>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {companyData.methodology[activeStep].desc}
                </p>

                {/* Technical highlights for the active step */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-brand-surface border border-brand-border">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Garantia Técnica</span>
                    <span className="text-xs font-bold text-slate-200 mt-0.5 block">
                      {activeStep === 0 && 'Zero premissas falsas no escopo'}
                      {activeStep === 1 && 'Dark Theme & Ergonomia Mobile'}
                      {activeStep === 2 && 'Componentização modular e tipada'}
                      {activeStep === 3 && 'Aprovação humana e testes E2E'}
                      {activeStep === 4 && 'Monitoramento 24/7 e telemetria'}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-brand-surface border border-brand-border">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Entregável da Etapa</span>
                    <span className="text-xs font-bold text-brand-gold mt-0.5 block">
                      {activeStep === 0 && 'Dossiê de Requisitos & Diagnóstico'}
                      {activeStep === 1 && 'Protótipo e Design System'}
                      {activeStep === 2 && 'Código limpo & Build sem erros'}
                      {activeStep === 3 && 'Gate de Homologação'}
                      {activeStep === 4 && 'Aplicação ao vivo no domínio'}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="pt-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span>Progresso da Esteira</span>
                    <span className="text-brand-gold">{((activeStep + 1) * 20)}% Concluído</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-brand-surface overflow-hidden border border-brand-border/60">
                    <motion.div
                      className="h-full bg-gradient-to-r from-brand-goldDark to-brand-gold"
                      initial={{ width: 0 }}
                      animate={{ width: `${(activeStep + 1) * 20}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
