import React from 'react';
import { motion } from 'framer-motion';

const svgProps = {
  width: "22",
  height: "22",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#C68A2B",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const segments = [
  {
    title: 'Transporte & Logística',
    desc: 'Operações críticas',
    icon: (
      <svg {...svgProps}>
        <rect x="3" y="8" width="12" height="7" rx="1" />
        <path d="M15 10h3l3 3v2h-6z" />
        <circle cx="7" cy="18" r="2" fill="#C68A2B" stroke="none" />
        <circle cx="17" cy="18" r="2" fill="#C68A2B" stroke="none" />
      </svg>
    )
  },
  {
    title: 'Naval & Portuário',
    desc: 'Fluxos especializados',
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v12M7 10h10M5 16c2 3 5 4 7 4s5-1 7-4M7 16l-2-2M17 16l2-2" />
      </svg>
    )
  },
  {
    title: 'Saúde & Clínicas',
    desc: 'Atendimento e gestão',
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M7 12h10" />
      </svg>
    )
  },
  {
    title: 'Jurídico',
    desc: 'Rotinas e captação',
    icon: (
      <svg {...svgProps}>
        <path d="M12 4v16M6 7h12M8 7l-4 7h8zM16 7l-4 7h8z" />
      </svg>
    )
  },
  {
    title: 'Comércio & Serviços',
    desc: 'Vendas e operação',
    icon: (
      <svg {...svgProps}>
        <circle cx="6" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <path d="M8 7.5 19 18M8 16.5 19 6" />
      </svg>
    )
  },
  {
    title: 'Campanhas & Organizações',
    desc: 'Coordenação em escala',
    icon: (
      <svg {...svgProps}>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4h6v3H9zM8 11h8M8 15h6" />
      </svg>
    )
  },
  {
    title: 'Desenvolvedores & Times',
    desc: 'IA para execução',
    icon: (
      <svg {...svgProps}>
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M8 10l-2 2 2 2M16 10l2 2-2 2M10 19h4" />
      </svg>
    )
  }
];

export const SegmentsSection = () => {
  return (
    <section id="segmentos" className="py-24 px-4 sm:px-8 lg:px-16 bg-[#1A221D] border-t border-[#27322B] overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12 mb-12">
        
        {/* Header */}
        <div className="space-y-3">
          <p className="text-[#C68A2B] uppercase tracking-[0.16em] text-xs font-bold font-sora">
            Atuação
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-[#EAF2EC] tracking-tight">
            Segmentos onde atuamos
          </h2>
        </div>

      </div>

      {/* Infinite Reverse Scroll */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-4 animate-marquee-reverse hover:[animation-play-state:paused] w-max">
          {[...segments, ...segments, ...segments].map((seg, idx) => (
            <article
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-[#0F1411] border border-[#27322B] hover:border-[#2F3C34] transition-colors min-w-[220px] shrink-0 space-y-3"
            >
              <div className="text-2xl">{seg.icon}</div>
              <h4 className="text-sm font-bold font-sora text-[#EAF2EC]">
                {seg.title}
              </h4>
              <p className="text-xs text-[#6F857A] font-light">
                {seg.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
