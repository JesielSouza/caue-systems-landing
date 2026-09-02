import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const capabilities = [
  {
    number: '01',
    title: 'Zero ao ar em dias',
    desc: 'Um sistema operacional completo para logística construído e validado em produção em um único dia de trabalho. Esse é o nosso ritmo real.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C68A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#C68A2B" stroke="none" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Operação real, não só código',
    desc: 'O sistema para o setor naval fala a língua dos estaleiros. O de logística foi semeado com empresas reais da Amazônia. Contexto não é detalhe.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C68A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" fill="#C68A2B" stroke="none" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Múltiplas camadas em paralelo',
    desc: 'Código, IA, automação, estratégia comercial operando juntos. Não vendemos horas de desenvolvimento. Vendemos capacidade instalada.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C68A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" fill="#C68A2B" stroke="none" />
        <rect x="3" y="14" width="7" height="7" rx="1" fill="#C68A2B" stroke="none" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    )
  }
];

const CapabilityCard = ({ number, title, desc, icon }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformPerspective: 600,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="caue-card flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between text-[#6F857A] font-sora font-semibold text-xs mb-6">
          <span>{number}</span>
          <i>{icon}</i>
        </div>
        <h3 className="text-xl font-bold font-sora text-[#EAF2EC] mb-3">
          {title}
        </h3>
      </div>
      <p className="text-sm text-[#8FA39A] font-light leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
};

export const CapabilitiesSection = () => {
  return (
    <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#0F1411]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <p className="text-[#C68A2B] uppercase tracking-[0.16em] text-xs font-bold font-sora">
            O que fazemos de verdade
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-[#EAF2EC] tracking-tight">
            Três capacidades que nos definem
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <CapabilityCard key={cap.number} {...cap} />
          ))}
        </div>

      </div>
    </section>
  );
};
