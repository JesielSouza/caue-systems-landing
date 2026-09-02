import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldCheck, Eye, Cpu, Layers, CheckCircle2, Play, RefreshCw, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { sounds } from '../utils/audioEffects';

export const InteractiveTerminal = () => {
  const [activeTab, setActiveTab] = useState('sentinel');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const tabs = [
    { id: 'sentinel', name: 'Sentinel Vision (CCO)', icon: Eye, badge: 'Visão & YOLOv8' },
    { id: 'virtus', name: 'Virtus Flux (SaaS)', icon: Layers, badge: 'Comando Operacional' },
    { id: 'paperclip', name: 'Paperclip Lab (IA)', icon: Cpu, badge: 'Multi-Agente' },
    { id: 'showcase', name: 'Showcase Engine (48h)', icon: Terminal, badge: 'Vitrine Express' },
  ];

  const handleTabChange = (tabId) => {
    sounds.playBeep();
    setActiveTab(tabId);
  };

  const triggerSimulation = () => {
    sounds.playClick();
    setIsSimulating(true);
    setSimStep(0);
    const interval = setInterval(() => {
      setSimStep((prev) => {
        sounds.playBeep();
        if (prev >= 3) {
          clearInterval(interval);
          setIsSimulating(false);
          sounds.playSuccess();
          return 3;
        }
        return prev + 1;
      });
    }, 650);
  };

  useEffect(() => {
    setSimStep(0);
  }, [activeTab]);

  return (
    <div className="w-full rounded-2xl glass-panel border border-brand-border/90 overflow-hidden shadow-2xl shadow-black/80">
      
      {/* Terminal Title Bar */}
      <div className="bg-brand-void/90 px-4 py-3 border-b border-brand-border flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block border border-red-400/30"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block border border-yellow-400/30"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-400/30"></span>
          </div>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-brand-gold" />
            caue-systems-console@manaus-ops:~$
          </span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-brand-surface/80 p-1 rounded-xl border border-brand-border/60">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
                  isActive
                    ? 'bg-brand-card text-brand-gold border border-brand-gold/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span className="hidden sm:inline">{tab.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-6 bg-brand-bg/95 font-mono text-xs sm:text-sm text-slate-300 min-h-[340px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {/* 1. Sentinel Vision View */}
          {activeTab === 'sentinel' && (
            <motion.div
              key="sentinel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                <span className="text-brand-emerald font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
                  [SENTINEL-VISION] CCTV & IA Telemetry Feed Active
                </span>
                <span className="text-[11px] text-slate-500">Modelo: YOLOv8-NOC · Stream: RTSP-Manaus</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border/70">
                  <span className="text-[10px] text-slate-500 uppercase block">Alvo Monitorado</span>
                  <span className="text-white font-semibold text-xs">Frota Fluvial & NVRs CCO</span>
                  <span className="text-[11px] text-brand-emerald block mt-1">● 14 Canais Sincronizados</span>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border/70">
                  <span className="text-[10px] text-slate-500 uppercase block">Auditoria de Evidência</span>
                  <span className="text-brand-gold font-semibold text-xs">SHA-256 Hash Integrity</span>
                  <span className="text-[11px] text-slate-400 block mt-1">Direct Proof: 100% Validado</span>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border/70">
                  <span className="text-[10px] text-slate-500 uppercase block">Latência de Inferência</span>
                  <span className="text-brand-emerald font-semibold text-xs">18.4ms / frame</span>
                  <span className="text-[11px] text-slate-400 block mt-1">Zero perda de pacotes</span>
                </div>
              </div>

              <div className="bg-brand-void p-3 rounded-lg border border-brand-border/50 text-[11px] space-y-1 text-slate-400 overflow-x-auto">
                <p className="text-emerald-400">&gt; [INFO] Conectado ao stream NVR_CCO_01 via TCP socket seguro.</p>
                <p>&gt; [YOLO] Detectado: Embarcação Carga Pesada (Conf: 0.96) · BoundingBox: [340, 110, 890, 640]</p>
                <p>&gt; [TELEMETRIA] Coordenadas GPS sincronizadas: 03°06&apos;47&quot;S 60°01&apos;31&quot;W (Rio Negro/Amazonas)</p>
                {simStep >= 1 && <p className="text-yellow-400">&gt; [AUDITORIA] Snapshot capturado e assinado com hash de integridade factual.</p>}
                {simStep >= 2 && <p className="text-emerald-400">&gt; [CCO] Status do Turno: Operação Segura. Nenhuma violação de perímetro detectada.</p>}
              </div>
            </motion.div>
          )}

          {/* 2. Virtus Flux View */}
          {activeTab === 'virtus' && (
            <motion.div
              key="virtus"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                <span className="text-brand-gold font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                  [VIRTUS-FLUX] Orchestration OS — Operational Command
                </span>
                <span className="text-[11px] text-slate-500">Pipeline: Order-to-Cash</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border/70">
                  <span className="text-[10px] text-slate-500 uppercase block">Exposição Financeira</span>
                  <span className="text-white font-semibold text-xs">R$ 142.800,00</span>
                  <span className="text-[11px] text-brand-emerald block mt-1">Risco mitigado em 94%</span>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border/70">
                  <span className="text-[10px] text-slate-500 uppercase block">Esteira de Pedidos</span>
                  <span className="text-brand-gold font-semibold text-xs">28 Pedidos em Trânsito</span>
                  <span className="text-[11px] text-slate-400 block mt-1">0 gargalos críticos</span>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border/70">
                  <span className="text-[10px] text-slate-500 uppercase block">Tempo de Ciclo</span>
                  <span className="text-brand-emerald font-semibold text-xs">3.2 dias (-42%)</span>
                  <span className="text-[11px] text-slate-400 block mt-1">Automação de faturamento</span>
                </div>
              </div>

              <div className="bg-brand-void p-3 rounded-lg border border-brand-border/50 text-[11px] space-y-1 text-slate-400 overflow-x-auto">
                <p className="text-brand-gold">&gt; [ORCHESTRATION] Sincronização de pedidos e NF-e ativa.</p>
                <p>&gt; [AI COMMAND] Exceção #EX-409 analisada: Pedido liberado após conciliação bancária automática.</p>
                {simStep >= 1 && <p className="text-emerald-400">&gt; [PIPELINE] NF-e emitida e despachada para transportadora em 4.1s.</p>}
                {simStep >= 2 && <p className="text-cyan-400">&gt; [TELEMETRIA] Saldo a receber conciliado no módulo financeiro.</p>}
              </div>
            </motion.div>
          )}

          {/* 3. Paperclip Lab View */}
          {activeTab === 'paperclip' && (
            <motion.div
              key="paperclip"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  [PAPERCLIP-LAB] Multi-Agent Org · Human Approval Gate
                </span>
                <span className="text-[11px] text-slate-500">Regime: Planning-Only</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border/70">
                  <span className="text-[10px] text-slate-500 uppercase block">Agentes Ativos</span>
                  <span className="text-white font-semibold text-xs">8 Especialistas</span>
                  <span className="text-[11px] text-cyan-400 block mt-1">CEO, CTO, Risk, Finance</span>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border/70">
                  <span className="text-[10px] text-slate-500 uppercase block">Modo de Operação</span>
                  <span className="text-brand-gold font-semibold text-xs">Planning-Only</span>
                  <span className="text-[11px] text-slate-400 block mt-1">Zero ações sem supervisão</span>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border/70">
                  <span className="text-[10px] text-slate-500 uppercase block">Human Gate</span>
                  <span className="text-brand-emerald font-semibold text-xs">Aprovação Obrigatória</span>
                  <span className="text-[11px] text-slate-400 block mt-1">100% de conformidade</span>
                </div>
              </div>

              <div className="bg-brand-void p-3 rounded-lg border border-brand-border/50 text-[11px] space-y-1 text-slate-400 overflow-x-auto">
                <p className="text-cyan-400">&gt; [CEO-AGENT] Iniciando análise estratégica de requisitos...</p>
                <p>&gt; [RISK-LEAD] Knowledge Charter verificado. Nenhuma referência externa sem fonte confiável.</p>
                {simStep >= 1 && <p className="text-yellow-400">&gt; [GATE] Solicitação de aprovação enviada para o Board Humano (Jesiel Souza).</p>}
                {simStep >= 2 && <p className="text-emerald-400">&gt; [BOARD] Decisão aprovada: Execução liberada com sucesso!</p>}
              </div>
            </motion.div>
          )}

          {/* 4. Showcase Engine View */}
          {activeTab === 'showcase' && (
            <motion.div
              key="showcase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                <span className="text-brand-emerald font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
                  [SHOWCASE-ENGINE] Modular Rapid Delivery (48h Protocol)
                </span>
                <span className="text-[11px] text-slate-500">Case: juliano-souza-portfolio</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border/70">
                  <span className="text-[10px] text-slate-500 uppercase block">Google Lighthouse</span>
                  <span className="text-brand-emerald font-semibold text-xs">99 / 100 Performance</span>
                  <span className="text-[11px] text-slate-400 block mt-1">Zero layout shift</span>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border/70">
                  <span className="text-[10px] text-slate-500 uppercase block">Tempo de Deploy</span>
                  <span className="text-brand-gold font-semibold text-xs">Sob Demanda (48h)</span>
                  <span className="text-[11px] text-slate-400 block mt-1">Config central: site.config.js</span>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border/70">
                  <span className="text-[10px] text-slate-500 uppercase block">Conversão WhatsApp</span>
                  <span className="text-brand-emerald font-semibold text-xs">+180% em cliques</span>
                  <span className="text-[11px] text-slate-400 block mt-1">Mensagens pré-configuradas</span>
                </div>
              </div>

              <div className="bg-brand-void p-3 rounded-lg border border-brand-border/50 text-[11px] space-y-1 text-slate-400 overflow-x-auto">
                <p className="text-emerald-400">&gt; [ENGINE] Configuração carregada: site.config.js (Juliano Souza Interiores).</p>
                <p>&gt; [BUILD] Vite 5 + Tailwind 3.4 compilado em 480ms. Imagens otimizadas em WebP.</p>
                {simStep >= 1 && <p className="text-yellow-400">&gt; [DEPLOY] Vercel Edge Network: Deploy finalizado em https://juliano-souza-portfolio.vercel.app</p>}
                {simStep >= 2 && <p className="text-emerald-400">&gt; [CONVERSÃO] Leads de Manaus/AM sendo direcionados diretamente para o WhatsApp do cliente.</p>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer controls & interactive simulation button */}
        <div className="pt-4 border-t border-brand-border/70 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
            <span className="text-brand-gold">●</span> Status do Ambiente: <span className="text-brand-emerald">ESTÁVEL & VERIFICADO</span>
          </div>

          <button
            onClick={triggerSimulation}
            disabled={isSimulating}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-surface hover:bg-brand-card text-brand-gold hover:text-brand-goldLight border border-brand-gold/30 text-xs font-mono font-medium transition-all shadow-sm"
          >
            {isSimulating ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Simulando Evento...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Testar Pipeline</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
};
