import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Terminal, MapPin, Mail, MessageSquare, CheckCircle, Code, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { companyData } from '../data/companyData';

export const AboutJesiel = () => {
  const { aboutFounder } = companyData;

  return (
    <section id="sobre" className="py-24 relative bg-brand-surface/20 border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl p-6 sm:p-8 glass-panel border border-brand-border bg-brand-void/90 shadow-2xl overflow-hidden group">
              
              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/15 rounded-full blur-2xl -z-10" />

              {/* Profile Monogram / Visual Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-card to-brand-surface border-2 border-brand-gold/40 flex items-center justify-center font-mono font-black text-2xl text-brand-gold shadow-lg shadow-brand-gold/20">
                  <span>JS</span>
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-emerald border-2 border-brand-void"></span>
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-white">
                    {aboutFounder.name}
                  </h3>
                  <p className="text-xs font-mono text-brand-gold font-medium">
                    {aboutFounder.role}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-brand-emerald" />
                    <span>{aboutFounder.location}</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="p-4 rounded-2xl bg-brand-surface/80 border border-brand-border/80 text-xs sm:text-sm text-slate-300 italic mb-6 leading-relaxed relative">
                <span className="text-2xl text-brand-gold absolute -top-2 left-2 font-serif opacity-50">&ldquo;</span>
                <p className="relative z-10 pl-2">
                  {aboutFounder.quote}
                </p>
              </blockquote>

              {/* Skills Tags Grid */}
              <div className="mb-6">
                <span className="text-[10px] uppercase font-mono text-slate-400 font-bold block mb-2">
                  Stack & Competências
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {aboutFounder.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-brand-surface border border-brand-border/80 text-[11px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-brand-border/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Conectar:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={companyData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-brand-surface hover:bg-brand-card text-slate-300 hover:text-white border border-brand-border transition-colors"
                    title="GitHub de Jesiel"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={companyData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-brand-surface hover:bg-brand-card text-slate-300 hover:text-[#0A66C2] border border-brand-border transition-colors"
                    title="LinkedIn de Jesiel"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="p-2 rounded-xl bg-brand-surface hover:bg-brand-card text-slate-300 hover:text-brand-gold border border-brand-border transition-colors"
                    title="Enviar Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://wa.me/${companyData.contact.whatsappClean}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-brand-emerald/10 hover:bg-brand-emerald text-brand-emerald hover:text-slate-950 border border-brand-emerald/30 transition-colors"
                    title="Conversar no WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Founder Narrative & Core Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-brand-emerald/30 text-xs font-mono text-brand-emerald">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
              A MENTE POR TRÁS DA CAUÊ SYSTEMS
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              A disciplina de um Centro de Controle aplicada à Engenharia de Software
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {aboutFounder.bio}
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Na Cauê Systems, cada projeto é tratado com a mesma seriedade de um ambiente operacional 24/7. Isso significa que você não recebe código amador ou promessas vazias, mas sim arquiteturas sólidas, interfaces refinadas e prazos cumpridos à risca.
            </p>

            {/* 3 Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {aboutFounder.pillars.map((pillar, pIdx) => (
                <div
                  key={pIdx}
                  className="p-4 rounded-2xl glass-panel border border-brand-border hover:border-brand-gold/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-surface flex items-center justify-center text-brand-gold mb-3 border border-brand-border">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-snug">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
