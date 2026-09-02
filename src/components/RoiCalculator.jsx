import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, AlertTriangle, CheckCircle2, ArrowRight, DollarSign } from 'lucide-react';
import { sounds } from '../utils/audioEffects';

export const RoiCalculator = ({ onOpenEstimator }) => {
  const [inquiries, setInquiries] = useState(30); // Monthly visitors / inquiries
  const [ticket, setTicket] = useState(2500); // Average sale ticket in BRL

  // Factual calculation: Slow sites lose ~40% of leads before WhatsApp
  const lostLeadsPerMonth = Math.round(inquiries * 0.38);
  const recoveredSales = Math.max(1, Math.round(lostLeadsPerMonth * 0.25));
  const recoveredRevenue = recoveredSales * ticket;

  const handleInquiriesChange = (e) => {
    sounds.playClick();
    setInquiries(Number(e.target.value));
  };

  const handleTicketChange = (e) => {
    sounds.playClick();
    setTicket(Number(e.target.value));
  };

  return (
    <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#0F1411] border-t border-[#27322B] relative overflow-hidden">
      
      {/* Background Ambient Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C68A2B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#3A2A14] text-[#C68A2B] border border-[#2F3C34]">
            <Calculator className="w-3.5 h-3.5" />
            CALCULADORA DE RETORNO
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-[#EAF2EC] tracking-tight">
            Quanto dinheiro seu negócio perde com um site lento?
          </h2>
          <p className="text-sm sm:text-base text-[#8FA39A] font-light leading-relaxed">
            Arraste os controles abaixo e veja a estimativa de faturamento que você pode recuperar fechando clientes qualificados no WhatsApp.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 rounded-3xl bg-[#1A221D] border border-[#27322B] shadow-2xl items-center">
          
          {/* Sliders (Left Side) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Slider 1: Inquiries / month */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-sora font-semibold text-[#EAF2EC]">
                  Visitas / Contatos que você recebe por mês:
                </label>
                <span className="text-sm font-mono font-bold text-[#C68A2B] bg-[#0F1411] px-3 py-1 rounded-lg border border-[#27322B]">
                  {inquiries} contatos/mês
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={inquiries}
                onChange={handleInquiriesChange}
                className="w-full h-2 bg-[#0F1411] rounded-lg appearance-none cursor-pointer accent-[#C68A2B]"
              />
              <div className="flex justify-between text-[10px] text-[#6F857A] font-mono">
                <span>10 contatos</span>
                <span>100</span>
                <span>200+ contatos</span>
              </div>
            </div>

            {/* Slider 2: Average Ticket */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-sora font-semibold text-[#EAF2EC]">
                  Ticket médio do seu serviço / projeto:
                </label>
                <span className="text-sm font-mono font-bold text-[#C68A2B] bg-[#0F1411] px-3 py-1 rounded-lg border border-[#27322B]">
                  R$ {ticket.toLocaleString('pt-BR')}
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="15000"
                step="100"
                value={ticket}
                onChange={handleTicketChange}
                className="w-full h-2 bg-[#0F1411] rounded-lg appearance-none cursor-pointer accent-[#C68A2B]"
              />
              <div className="flex justify-between text-[10px] text-[#6F857A] font-mono">
                <span>R$ 300</span>
                <span>R$ 7.500</span>
                <span>R$ 15.000+</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0F1411] border border-[#27322B] text-xs text-[#8FA39A] space-y-1 font-light">
              <span className="font-semibold text-[#EAF2EC] block mb-0.5">Como esse cálculo é feito:</span>
              <p>
                Em média, 38% dos visitantes desistem de chamar em páginas lentas ou agregadores genéricos. Uma vitrine rápida recupera parte desses contatos qualificados.
              </p>
            </div>

          </div>

          {/* Results Card (Right Side) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0F1411] border border-[#C68A2B]/40 flex flex-col justify-between space-y-6">
            
            <div>
              <span className="text-[11px] uppercase font-mono text-[#C68A2B] font-bold tracking-wider block mb-2">
                Estimativa de Retorno Mensal
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold font-sora text-[#EAF2EC] leading-tight">
                + R$ {recoveredRevenue.toLocaleString('pt-BR')}{' '}
                <span className="text-xs text-[#8FA39A] font-normal block mt-1">
                  recuperados por mês com fecho adicional
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-[#27322B] text-xs text-[#8FA39A]">
              <div className="flex items-center justify-between">
                <span>Leads que desistem com site lento:</span>
                <span className="font-mono font-bold text-red-400">~{lostLeadsPerMonth} contatos</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Novos clientes fechados com Vitrine 48h:</span>
                <span className="font-mono font-bold text-emerald-400">+{recoveredSales} cliente(s)</span>
              </div>
            </div>

            <button
              onClick={() => {
                sounds.playClick();
                onOpenEstimator();
              }}
              className="btn-primary w-full text-center text-xs font-bold"
            >
              <span>Recuperar Esses Clientes com Minha Vitrine (48h) →</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
