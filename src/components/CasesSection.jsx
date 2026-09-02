import React, { useState } from 'react';
import { motion } from 'framer-motion';

const casesData = [
  {
    title: 'Portfólios & Vitrines de Alta Conversão',
    subtitle: 'Presença digital profissional para prestadores de serviço e alto padrão',
    status: 'Case Real / No Ar',
    desc: 'Desenvolvimento e entrega rápida de páginas ultra-rápidas, focadas em valorizar o trabalho do profissional, carregar instantaneamente no celular e direcionar clientes direto para o WhatsApp.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'Mobile-First', 'Conversão WhatsApp'],
    links: [
      { label: 'Ver Case Juliano Souza ↗', href: 'https://juliano-souza-portfolio.vercel.app' },
      { label: 'GitHub ↗', href: 'https://github.com/JesielSouza/juliano-souza-portfolio' }
    ]
  },
  {
    title: 'Automação de Atendimento & Triagem no WhatsApp',
    subtitle: 'Respostas 24/7, captação de orçamentos e follow-up automático',
    status: 'Disponível para Implantação',
    desc: 'Estruturação de agentes de atendimento e fluxos inteligentes para WhatsApp comercial. Evita perda de leads fora do horário comercial, responde dúvidas frequentes e envia propostas na hora.',
    stack: ['Evolution API', 'WhatsApp Business', 'Node.js', 'Webhooks', 'Automação'],
    links: []
  },
  {
    title: 'Virtus Flux (Orchestration OS)',
    subtitle: 'Camada de comando operacional, pedidos e conciliação financeira',
    status: 'SaaS em Produção',
    desc: 'Sistema de comando operacional para rastreamento de pedidos, risco financeiro, notas fiscais e exceções em tempo real para SMBs sem o peso de um ERP engessado.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Gestão'],
    links: [
      { label: 'Produção Online ↗', href: 'https://orchestration-os.vercel.app' }
    ]
  },
  {
    title: 'Ecclesia Media Manager (EMM)',
    subtitle: 'Plataforma de gestão operacional e multimídia ao vivo',
    status: 'SaaS em Produção',
    desc: 'Aplicação web completa para controle de cronogramas litúrgicos, escalas de equipes voluntárias, automação de projeção/transmissão e operação de mídia em tempo real.',
    stack: ['TypeScript', 'React', 'Tailwind', 'Node.js', 'Vercel'],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/JesielSouza/ecclesia-media-manager' }
    ]
  },
  {
    title: 'Monitoramento & Telemetria em Tempo Real',
    subtitle: 'Pipeline de ingestão contínua, visão computacional e relatórios executivos',
    status: 'Arquitetura de Alto Desempenho',
    desc: 'Engenharia de monitoramento contínuo para operações de campo: telemetria GPS em tempo real, visão computacional sanitizada e fechamentos operacionais automatizados.',
    stack: ['Python', 'OpenCV', 'APIs REST', 'Docker', 'Observabilidade'],
    links: []
  }
];

export const CasesSection = () => {
  return (
    <section id="cases" className="py-24 px-4 sm:px-8 lg:px-16 bg-[#1A221D] border-t border-[#27322B]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <p className="text-[#C68A2B] uppercase tracking-[0.16em] text-xs font-bold font-sora">
            Prova de execução
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-[#EAF2EC] tracking-tight">
            Cases reais de soluções comerciais e sistemas
          </h2>
          <p className="text-sm sm:text-base text-[#8FA39A] font-light max-w-2xl leading-relaxed">
            Do primeiro site profissional de alta conversão a sistemas de monitoramento complexos: entregamos tecnologia focada em gerar clientes, economizar tempo e profissionalizar a operação.
          </p>
        </div>

        {/* 2-Column Grid of Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {casesData.map((c, idx) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#0F1411] border border-[#27322B] hover:border-[#2F3C34] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#3A2A14] text-[#C68A2B] border border-[#C68A2B]/30 mb-4">
                  {c.status}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold font-sora text-[#EAF2EC] mb-1">
                  {c.title}
                </h3>

                <strong className="block text-sm font-sora font-semibold text-[#8FA39A] mb-3">
                  {c.subtitle}
                </strong>

                <p className="text-sm text-[#8FA39A] font-light leading-relaxed mb-6">
                  {c.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {c.stack.map((st) => (
                    <span
                      key={st}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono text-[#8FA39A] bg-[#1A221D] border border-[#2F3C34]"
                    >
                      {st}
                    </span>
                  ))}
                </div>

                {c.links.length > 0 && (
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-[#27322B] text-xs font-sora font-semibold text-[#C68A2B]">
                    {c.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#E0A040] hover:underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
