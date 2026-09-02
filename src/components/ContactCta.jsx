import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Sparkles, ArrowRight, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { companyData } from '../data/companyData';

export const ContactCta = ({ onOpenEstimator }) => {
  return (
    <section className="py-20 relative bg-brand-bg overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl p-8 sm:p-14 glass-panel border border-brand-gold/40 bg-gradient-to-b from-brand-card/90 to-brand-void shadow-2xl overflow-hidden text-center">
          
          {/* Ambient Glows */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-emerald/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-brand-emerald/40 text-xs font-mono text-brand-emerald">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
              SLOTS ABERTOS PARA ESTA SEMANA
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Pronto para transformar sua presença digital ou operação técnica?
            </h2>

            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed">
              De vitrines express entregues em 48h a sistemas corporativos complexos em Manaus. Fale diretamente com Jesiel Souza e receba um diagnóstico técnico sem compromisso.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenEstimator}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-goldDark via-brand-gold to-brand-goldLight text-slate-950 font-extrabold text-sm tracking-wide shadow-xl shadow-brand-gold/30 hover:shadow-brand-gold/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Simular Proposta Agora</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${companyData.contact.whatsappClean}?text=${encodeURIComponent('Olá Jesiel! Gostaria de conversar sobre uma solução para o meu negócio.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-slate-200 hover:text-brand-emerald hover:border-brand-emerald/60 font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-4 h-4 text-brand-emerald" />
                <span>Chamar no WhatsApp Direto</span>
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                Manaus, AM — Brasil
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald" />
                Contratos Seguros & Nota Fiscal
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
