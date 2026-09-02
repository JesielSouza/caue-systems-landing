import React from 'react';

const marqueeItems = [
  'Cauê Systems',
  'Clareira Operacional',
  'Sistemas Verticais',
  'IA Nativa',
  'Automação Real',
  'Manaus, AM',
  'Zero ao Ar',
  'Operação Precisa',
  'Decisão Inteligente',
  'Região Norte',
];

export const MarqueeTrack = () => {
  return (
    <section className="marquee-container py-3">
      <div className="marquee-track animate-marquee">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <span
            key={idx}
            className="flex items-center gap-4 px-6 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#8FA39A] whitespace-nowrap font-sans"
          >
            <span>{item}</span>
            <b className="text-[#C68A2B] font-bold">✦</b>
          </span>
        ))}
      </div>
    </section>
  );
};
