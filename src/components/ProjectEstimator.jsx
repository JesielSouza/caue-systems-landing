import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { sounds } from '../utils/audioEffects';

export const ProjectEstimator = ({ currentPlan, onPlanChange }) => {
  const [selectedPlan, setSelectedPlan] = useState(currentPlan || 'vitrine-48h');
  const [niche, setNiche] = useState('Arquitetura e interiores');
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [urgency, setUrgency] = useState('48h');

  useEffect(() => {
    if (currentPlan) {
      setSelectedPlan(currentPlan);
    }
  }, [currentPlan]);

  const plans = [
    {
      id: 'vitrine-48h',
      title: 'Vitrine Express (48h)',
      desc: 'Página ultra-rápida focada no WhatsApp',
      badge: 'Mais pedido ⚡',
    },
    {
      id: 'whatsapp-automation',
      title: 'Automação WhatsApp 24/7',
      desc: 'Atendimento e triagem automática de leads',
      badge: 'Captação 24/7',
    },
    {
      id: 'custom-system',
      title: 'Sistema sob medida',
      desc: 'Painel operacional, pedidos e telemetria',
      badge: 'Personalizado',
    },
  ];

  const niches = [
    'Arquitetura e interiores',
    'Clínica / odontologia / saúde',
    'Marcenaria e móveis planejados',
    'Engenharia e perícias',
    'Advocacia e consultoria',
    'Comércio e serviços locais',
  ];

  const handleSendBriefing = (e) => {
    e.preventDefault();

    sounds.playSuccess();

    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#C68A2B', '#E0A040', '#10B981', '#FFFFFF']
    });

    const chosenPlanName = plans.find((p) => p.id === selectedPlan)?.title || 'Vitrine Express';

    const message = `Olá Jesiel! Vim pelo site da Cauê Systems e gostaria de solicitar uma proposta:

*Nome:* ${clientName || 'Não informado'}
*Empresa / Negócio:* ${clientCompany || 'Não informado'}
*Segmento:* ${niche}
*Plano de Interesse:* ${chosenPlanName}
*Prazo Desejado:* ${urgency === '48h' ? 'Até 48 horas (Imediato)' : 'Próximos dias'}

Gostaria de ver como podemos iniciar!`;

    const whatsappUrl = `https://wa.me/5592981038799?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 450);
  };

  return (
    <section id="simulador" className="py-24 px-4 sm:px-8 lg:px-16 bg-[#1A221D] border-t border-[#27322B]">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header (Nimbuu RUI + PUI: Sentence case, clean line length) */}
        <div className="text-center space-y-3">
          <p className="text-[#C68A2B] uppercase tracking-[0.16em] text-xs font-bold font-sora">
            Configurador rápido
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-[#EAF2EC] tracking-tight">
            Monte seu briefing em 30 segundos
          </h2>
          <p className="text-base text-[#8FA39A] font-light max-w-xl mx-auto leading-relaxed">
            Selecione o plano desejado e seu nicho para gerar a mensagem pronta diretamente no WhatsApp de Jesiel Souza.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#0F1411] border border-[#27322B] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          <form onSubmit={handleSendBriefing} className="space-y-8">
            
            {/* 1. Escolha o Plano */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-mono text-[#C68A2B] font-bold tracking-wider block">
                1. Selecione o que você precisa:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {plans.map((p) => {
                  const isSelected = selectedPlan === p.id;
                  return (
                    <motion.div
                      key={p.id}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        sounds.playClick();
                        setSelectedPlan(p.id);
                        if (onPlanChange) onPlanChange(p.id);
                      }}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all min-h-[90px] flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#1A221D] border-[#C68A2B] shadow-lg shadow-[#C68A2B]/15'
                          : 'bg-[#0F1411] border-[#27322B] hover:border-[#2F3C34]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-[#C68A2B] font-bold">
                          {p.badge}
                        </span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#C68A2B]" />}
                      </div>
                      <h4 className="font-sora font-bold text-sm text-[#EAF2EC] mb-1">
                        {p.title}
                      </h4>
                      <p className="text-xs text-[#8FA39A] font-light">
                        {p.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* 2. Selecione o Nicho (Touch targets >= 48px, minimum 8pt spacing) */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-mono text-[#C68A2B] font-bold tracking-wider block">
                2. Qual o segmento do seu negócio?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {niches.map((n) => {
                  const isSelected = niche === n;
                  return (
                    <motion.button
                      type="button"
                      key={n}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        sounds.playClick();
                        setNiche(n);
                      }}
                      className={`min-h-[48px] py-2.5 px-4 rounded-xl text-left text-xs font-sans transition-all border cursor-pointer ${
                        isSelected
                          ? 'bg-[#1A221D] border-[#C68A2B] text-[#EAF2EC] font-semibold'
                          : 'bg-[#0F1411] border-[#27322B] text-[#8FA39A] hover:text-[#EAF2EC]'
                      }`}
                    >
                      {n}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* 3. Dados Básicos (Labels above fields - PUI Non-negotiable) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-sora font-medium text-[#EAF2EC] block">
                  Seu nome:
                </label>
                <input
                  type="text"
                  placeholder="Ex: Juliano Souza"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#1A221D] border border-[#2F3C34] text-[#EAF2EC] placeholder-[#8FA39A]/60 text-xs focus:outline-none focus:border-[#C68A2B] focus:ring-1 focus:ring-[#C68A2B]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-sora font-medium text-[#EAF2EC] block">
                  Nome da sua empresa / marca:
                </label>
                <input
                  type="text"
                  placeholder="Ex: Studio de Interiores"
                  value={clientCompany}
                  onChange={(e) => setClientCompany(e.target.value)}
                  className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#1A221D] border border-[#2F3C34] text-[#EAF2EC] placeholder-[#8FA39A]/60 text-xs focus:outline-none focus:border-[#C68A2B] focus:ring-1 focus:ring-[#C68A2B]"
                />
              </div>
            </div>

            {/* Submit Action (Fitts's Law large touch target >= 54px) */}
            <div className="pt-4 border-t border-[#27322B] space-y-3">
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full min-h-[54px] py-4 px-6 rounded-2xl bg-[#C68A2B] hover:bg-[#E0A040] text-[#0F1411] font-sora font-extrabold text-sm tracking-wide shadow-xl shadow-[#C68A2B]/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar briefing no WhatsApp de Jesiel Souza</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <p className="text-xs text-center text-[#8FA39A] font-sans">
                Sem compromisso • Atendimento direto em Manaus.
              </p>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
