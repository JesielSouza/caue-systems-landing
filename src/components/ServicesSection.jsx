import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Cpu, ShieldAlert, Check, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

const iconMap = {
  Sparkles: Sparkles,
  Layers: Layers,
  Cpu: Cpu,
  ShieldAlert: ShieldAlert,
};

export const ServicesSection = ({ onSelectService }) => {
  return (
    <section id="solucoes" className="py-24 relative bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-brand-emerald/30 text-xs font-mono text-brand-emerald">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
            PILARESS ESTRATÉGICOS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engenharia de Software sob medida para cada escala de operação
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Combinamos velocidade de entrega para negócios locais com o rigor arquitetural exigido por sistemas corporativos críticos.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {companyData.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            const isHighlight = service.id === 'modular-showcase';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-8 glass-panel glass-panel-hover flex flex-col justify-between overflow-hidden group ${
                  isHighlight ? 'border-brand-gold/50 shadow-xl shadow-brand-gold/5' : ''
                }`}
              >
                {/* Ambient Top Glow */}
                <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl -z-10 transition-opacity duration-500 opacity-20 group-hover:opacity-40 ${
                  isHighlight ? 'bg-brand-gold' : 'bg-brand-emerald'
                }`} />

                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-gold group-hover:border-brand-gold/60 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-surface border border-brand-border text-brand-goldLight">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tag */}
                  <span className="text-xs font-mono uppercase tracking-wider text-brand-emerald font-semibold block mb-1">
                    {service.headline}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features Bullet List */}
                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                        <div className="w-4 h-4 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 flex items-center justify-center shrink-0 mt-0.5 text-brand-emerald">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-4 border-t border-brand-border/60">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full py-3 px-4 rounded-xl bg-brand-surface hover:bg-brand-gold text-slate-200 hover:text-slate-950 font-bold text-xs tracking-wide border border-brand-border hover:border-brand-gold transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Solicitar Este Serviço</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
