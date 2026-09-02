import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl rounded-3xl glass-panel border border-brand-border bg-brand-void p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-brand-surface hover:bg-brand-card text-slate-400 hover:text-white border border-brand-border transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-surface border border-brand-border text-brand-gold">
              {project.categoryLabel}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald">
              ● {project.status}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-brand-goldLight mb-6">
            {project.subtitle}
          </p>

          {/* Project Image */}
          <div className="relative rounded-2xl overflow-hidden border border-brand-border mb-6 h-56 sm:h-72 w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-void via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="px-3 py-1 rounded-lg bg-brand-void/80 backdrop-blur-md border border-brand-border text-xs font-mono text-slate-300">
                {project.metrics}
              </span>
            </div>
          </div>

          {/* Detailed Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xs uppercase font-mono text-slate-400 mb-2 font-bold tracking-wider">
                Visão Geral & Solução
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border/80">
              <div className="flex items-center gap-2 text-brand-gold text-xs font-mono font-bold mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Destaque de Engenharia Cauê Systems</span>
              </div>
              <p className="text-xs text-slate-300">
                {project.highlight}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs uppercase font-mono text-slate-400 mb-2 font-bold tracking-wider">
                Tecnologias Utilizadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-brand-surface border border-brand-border text-xs font-mono text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-brand-border flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-brand-gold hover:bg-brand-goldLight text-slate-950 font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-gold/20"
                >
                  <span>Acessar Projeto Online</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="py-3 px-5 rounded-xl bg-brand-surface hover:bg-brand-card text-slate-300 font-bold text-xs border border-brand-border transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
