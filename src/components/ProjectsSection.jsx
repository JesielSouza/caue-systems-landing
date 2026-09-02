import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { companyData } from '../data/companyData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'showcase', label: 'Vitrines Express (48h)' },
    { id: 'saas', label: 'SaaS & Operações' },
    { id: 'vision', label: 'Visão & CCO' },
    { id: 'ai', label: 'IA & Agentes' },
  ];

  const filteredProjects = filter === 'all' 
    ? companyData.projects 
    : companyData.projects.filter(p => p.category === filter);

  return (
    <section id="cases" className="py-24 relative bg-brand-surface/30 border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-brand-gold/30 text-xs font-mono text-brand-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
              PORTFÓLIO & CASES REAIS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Software em Produção e Engenharia Verificada
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Explore projetos reais entregues e operando com alta velocidade, estabilidade e resultados mensuráveis.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl glass-panel border border-brand-border self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                  filter === cat.id
                    ? 'bg-brand-gold text-slate-950 font-bold shadow-md shadow-brand-gold/20'
                    : 'text-slate-400 hover:text-white hover:bg-brand-surface'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group rounded-3xl glass-panel glass-panel-hover border border-brand-border/80 overflow-hidden flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-brand-surface">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/30 to-transparent" />
                  
                  {/* Category & Status Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-brand-void/80 backdrop-blur-md border border-brand-border text-[11px] font-mono text-brand-gold font-medium">
                      {project.categoryLabel}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-brand-void/80 backdrop-blur-md border border-brand-emerald/40 text-[11px] font-mono text-brand-emerald flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse"></span>
                      {project.status}
                    </span>
                  </div>

                  {/* Performance Metric Pill */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg bg-brand-void/90 backdrop-blur-md border border-brand-border text-[10px] font-mono text-slate-300">
                      {project.metrics}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack chips */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.slice(0, 3).map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-brand-surface border border-brand-border/60 text-[10px] font-mono text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md bg-brand-surface border border-brand-border/60 text-[10px] font-mono text-slate-500">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Card Actions */}
                    <div className="flex items-center gap-2 pt-3 border-t border-brand-border/60">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 py-2 px-3 rounded-lg bg-brand-surface hover:bg-brand-card text-slate-200 hover:text-white text-xs font-mono font-medium border border-brand-border transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5 text-brand-gold" />
                        <span>Ver Detalhes</span>
                      </button>
                      
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-brand-surface hover:bg-brand-gold text-slate-300 hover:text-slate-950 border border-brand-border hover:border-brand-gold transition-colors"
                          title="Acessar link externo"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
