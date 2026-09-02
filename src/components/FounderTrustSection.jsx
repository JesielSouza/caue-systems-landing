import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageSquare, ShieldCheck, Code, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { sounds } from '../utils/audioEffects';

export const FounderTrustSection = () => {
  return (
    <section id="sobre" className="py-24 px-4 sm:px-8 lg:px-16 bg-[#0F1411] border-t border-[#27322B]">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl p-6 sm:p-8 bg-[#1A221D] border border-[#27322B] shadow-2xl space-y-6 relative overflow-hidden">
              
              {/* Monogram Badge */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0F1411] border-2 border-[#C68A2B] flex items-center justify-center font-sora font-extrabold text-xl text-[#C68A2B] shadow-lg">
                  JS
                </div>
                <div>
                  <h3 className="text-xl font-bold font-sora text-[#EAF2EC]">
                    Jesiel Da Costa Souza
                  </h3>
                  <p className="text-xs font-mono text-[#C68A2B]">
                    Fundador & Arquiteto de Software
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-[#8FA39A] mt-1">
                    <MapPin className="w-3 h-3 text-[#C68A2B]" />
                    <span>Manaus, Amazonas</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="p-4 rounded-2xl bg-[#0F1411] border border-[#27322B] text-xs sm:text-sm text-[#8FA39A] italic leading-relaxed">
                &ldquo;Trabalho com foco em código limpo, velocidade real e entrega rápida. Quando você fecha um projeto com a Cauê Systems, você fala direto comigo.&rdquo;
              </blockquote>

              {/* Stack Chips */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono text-[#6F857A] font-bold block">
                  Especialidades:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Vitrines Modulares 48h', 'React / Next.js', 'Automação WhatsApp', 'Python & CCO', 'Supabase'].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-lg bg-[#0F1411] border border-[#2F3C34] text-[11px] font-mono text-[#EAF2EC]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#27322B] flex items-center justify-between text-xs font-sora">
                <span className="text-[#6F857A]">Contato Direto:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/JesielSouza"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#8FA39A] hover:text-white transition-colors"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jesiel-souza-71b837155"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#8FA39A] hover:text-[#0A66C2] transition-colors"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/5592981038799"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#C68A2B] hover:text-[#E0A040] font-semibold flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Trust & Relationship Points */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-[#C68A2B] uppercase tracking-[0.16em] text-xs font-bold font-sora">
              Quem Desenvolve
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sora text-[#EAF2EC] tracking-tight leading-tight">
              Atendimento direto com quem programa a sua solução
            </h2>
            <p className="text-sm sm:text-base text-[#8FA39A] font-light leading-relaxed">
              Muitas agências cobram caro por equipes inchadas e entregam sites lentos que demoram meses para sair do papel. Na Cauê Systems, operamos com engenharia enxuta: você trata diretamente com o desenvolvedor, alinha as demandas em minutos e tem suporte contínuo em Manaus.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#1A221D] border border-[#27322B] space-y-1.5">
                <div className="text-[#C68A2B] font-bold text-xs font-sora flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Suporte Local em Manaus</span>
                </div>
                <p className="text-xs text-[#8FA39A] font-light">
                  Atendimento ágil no fuso de Manaus (UTC-4) pelo WhatsApp.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1A221D] border border-[#27322B] space-y-1.5">
                <div className="text-[#C68A2B] font-bold text-xs font-sora flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Código Próprio e Rápido</span>
                </div>
                <p className="text-xs text-[#8FA39A] font-light">
                  Desenvolvimento moderno sem depender de plugins pesados de WordPress.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/5592981038799?text=Ol%C3%A1+Jesiel%21+Vim+pelo+site+da+Cau%C3%AA+Systems+e+gostaria+de+conversar+sobre+uma+solu%C3%A7%C3%A3o."
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playClick()}
                className="btn-primary"
              >
                Falar com Jesiel no WhatsApp →
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
