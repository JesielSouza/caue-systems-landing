# Project: Cauê Systems — Engenharia de Software, Inteligência Operacional & Estratégia Manaus

## Architecture
Cauê Systems é uma empresa e ecossistema de engenharia de software e inteligência operacional sediada em Manaus/AM, fundada por Jesiel Da Costa Souza. A arquitetura de sistemas e ativos da empresa está organizada em camadas modulares de software, infraestrutura de monitoramento e governança:

1. **Camada Institucional & Motor de Conversão**:
   - Diretório Local: `C:\Users\monit\caue-systems-landing`
   - Repositório Git: `https://github.com/JesielSouza/caue-systems-landing.git` (Branch `main`, Commit canônico `66c75b3`)
   - Stack: React 19.2.8, Vite 8.2.2, Tailwind CSS 3.4.19, Framer Motion 13.1.1, Lucide React 1.39.0, Canvas Confetti 1.9.4.
   - Design System: Nimbuu UI/UX (Paleta Dark Obsidian `#0B0F17` & Dourado `#C68A2B`, tipografia Sora + DM Sans, feedback sonoro dinâmico via Web Audio API, simulador de briefing com webhook/WhatsApp).
   - Produção Vercel: `https://cauesystems.vercel.app` (com headers de segurança, cache imutável e rewrites SPA).

2. **Camada de Produto Express & Modular Showcase Engine**:
   - Diretório Local: `C:\Users\monit\site-cliente-novo`
   - Repositório Git: `https://github.com/JesielSouza/modular-showcase-engine.git` (Branch `main`)
   - Stack: React 18.2.0, Vite 5.1.4, Tailwind CSS 3.4.1, Framer Motion 11.0.0, Lucide React 0.350.0.
   - Arquitetura de Dados: Declarativa e desacoplada em `src/site.config.js` (seções `business`, `theme`, `hero`, `services`, `portfolio`, `differentials`, `testimonials`).
    - SLA de Produção: 15 a 45 minutos para configuração técnica; SLA comercial baseline de 72 a 96 horas úteis para publicação em domínio próprio com DNS configurado (com SLA Express 48h disponível como add-on pago opcional para preservação da capacidade cognitiva do fundador solo).
    - Case Âncora em Produção: Juliano Souza Interiores (`https://juliano-souza-portfolio.vercel.app`, repo `JesielSouza/juliano-souza-portfolio`, carregamento móvel em 0.68s, renders 3D de alto padrão e projetos corporativos).

3. **Camada de Automação Comercial & Ferramentas CLI**:
   - Diretório: `C:\Users\monit\caue-systems-landing\marketing\`
   - `generator.mjs`: CLI em Node.js com auditor de latência HTTP/SSL em tempo real (`--audit <url>`), catálogo de 15 posts autorais (`--list-posts`, `--post <n>`) e status de ativos.
   - `create-showcase-demo.mjs`: CLI em Node.js para geração instantânea de arquivos `site.config.<niche>.demo.js` pré-parametrizados para Arquitetura, Marcenaria e Clínicas.
   - Acervo de Vendas: Playbook Outbound Manaus, 12 posts prontos, 3 carrosséis, 5 roteiros de vídeo para o fundador, minuta de contrato e mapeamento de 6 leads qualificados em Adrianópolis e Ponta Negra.

4. **Camada de Governança, SOPs e Memória Operacional**:
   - Diretório Local: `C:\Users\monit\Documents\Obsidian Vault\Semper-Vincit-Vault\PESSOAL\Caue-Systems\01-Caue-Ops`
   - Repositório Git: `https://github.com/JesielSouza/caue-ops` (Privado)
   - Conteúdo: Mesa diária `TODAY.md`, 13 decisões estratégicas ativas em `decisions/active-decisions.md`, rituais de sessão (`start-session.md`, `end-session.md`), perfis de hardware (`casa-xeon`, `termux`, `trabalho-unip`) e fichas técnicas de 8 projetos em `projects/`.
   - Agente CLI: `agents/caue-ops-reader/index.mjs` para consolidação local de status operacional.

5. **Camada Corporativa de CCO, Telemetria & Visão Computacional**:
   - Diretório Local: `C:\Users\monit\Sentinel-Vision-CCO`
   - Stack Operacional Atual: Python 3.10+, puro NumPy (`numpy>=2.1`), captura de desktop do software de CFTV EZStation 3.0 / streams RTSP e telemetria Uptime Kuma. Motor determinístico leve e resiliente de análise de luminância média (detecção de tela preta/queda de sinal) e diferença temporal média de quadros (detecção de congelamento de câmera/link).
   - Roadmap de Expansão (Horizonte 3 / R&D Corporativo): OpenCV, detecção perimetral com YOLOv8 (pesos em `C:\Users\monit\yolov8n.pt`), variância Laplaciana, assinatura criptográfica pericial SHA-256 e bots de alerta via Telegram/WhatsApp (conforme especificado em `docs/SDD-001-piloto-monitoramento-visual.md`, Seção 2.2).
   - Propósito: Auditoria e monitoramento contínuo de telas e fluxos de vídeo em Centros de Controle Operacional (CCO) e plantas fabris do PIM.

6. **Soluções em Incubação / Status Controlado**:
   - `Virtus Flux` (`https://orchestration-os.vercel.app`): ERP/Orquestrador em Next.js. Status técnico: Green (estável); Status comercial: Bloqueado por governança societária humana (Decisão 1 de `active-decisions.md`).
   - `Vetra` (`https://ecosistema-kanban.vercel.app`): SaaS Kanban colaborativo em React + Supabase. Status: Pausado / Pré-lançamento.
   - `Convés Digital` (`https://conves-digital.vercel.app`): Plataforma de inteligência naval e fluvial. Status: Bloqueado temporariamente por conflito de dependências (Tailwind v4 / Dependabot).

---

## Feature Inventory

| # | Funcionalidade / Ativo | Descrição Técnica & Escopo | Status Atual | Localização / URL |
|---|---|---|---|---|
| 1 | **Landing Institucional Cauê Systems** | SPA de alta conversão com seletor de briefing, simulador sonoro Web Audio, cálculo de ROI e integração direta para WhatsApp comercial `(92) 98103-8799`. | 🟢 Pronto / Produção | `caue-systems-landing` / `cauesystems.vercel.app` |
| 2 | **Modular Showcase Engine** | Motor componentizado em React 18 / Vite 5 orientado a configuração declarativa `site.config.js` para entrega de vitrines em 72-96h úteis (SLA Express 48h opcional). | 🟡 Requer Ajuste Leve | `site-cliente-novo` / `github.com/JesielSouza/modular-showcase-engine` |
| 3 | **Portfólio Juliano Souza (Case Âncora)** | Vitrine de alto padrão com renders 3D, projetos corporativos (BIC), carregamento 0.68s e canal WhatsApp integrado. | 🟢 Pronto / Produção | `juliano-souza-portfolio.vercel.app` |
| 4 | **Script `generator.mjs`** | CLI para auditoria relâmpago de latência HTTP/TTFB de prospects e extração de publicações do calendário editorial. | 🟢 Operacional | `caue-systems-landing/marketing/generator.mjs` |
| 5 | **Script `create-showcase-demo.mjs`** | Gerador de configurações de vitrines express para demonstrações em 15 minutos (Arquitetura, Marcenaria, Clínicas). | 🟡 Requer Correção de Contrato | `caue-systems-landing/marketing/create-showcase-demo.mjs` |
| 6 | **Acervo Comercial Outbound Manaus** | Playbook de abordagem outbound para Adrianópolis/Vieiralves, roteiros de abordagem, propostas comerciais com contratos e 6 alvos mapeados. | 🟢 Pronto para Execução | `caue-systems-landing/marketing/` e `01-Caue-Ops/` |
| 7 | **Repositório Operacional `caue-ops`** | Base de governança com SOPs, 13 decisões ativas, rituais diários e fichas de projetos no Obsidian Vault. | 🟡 Requer `projects.json` | `Semper-Vincit-Vault/.../01-Caue-Ops` |
| 8 | **Sentinel Vision CCO** | Motor determinístico em Python e NumPy puro (luminância/diferença temporal via EZStation/RTSP). Expansão com YOLOv8, OpenCV e SHA-256 no roadmap H3 (`docs/SDD-001`). | 🟡 Protótipo Funcional | `C:\Users\monit\Sentinel-Vision-CCO` |
| 9 | **Frente Nova 1: Cauê Ops Desk** | Hub de triagem inteligente WhatsApp + Vitrine + Mini Kanban. Setup R$ 3.850 a R$ 4.900 + MRR R$ 450 a R$ 550/mês. Marco Gated: início condicionado a 3 vitrines entregues. | 🔵 Planejado (M2/M3 - Gated) | Especificação técnica completa no Relatório Executivo |
| 10 | **Frente Nova 2: Cauê Sentinel CCO & Fleet** | Auditoria visual contínua e telemetria para CCOs industriais do PIM e benchmarking interno. Setup R$ 8.500 a R$ 16.000 + MRR R$ 1.800 a R$ 3.800/mês. | 🔵 Planejado (M3) | Especificação técnica completa no Relatório Executivo |
| 11 | **Virtus Flux (Orchestration OS)** | Sistema operacional de orquestração empresarial em Next.js. | 🔴 Bloqueado Societariamente | `orchestration-os.vercel.app` |
| 12 | **Vetra / Convés Digital / CRM** | Módulos em stand-by / reserva técnica para fases posteriores. | ⚪ Stand-by | Diversos repositórios |

---

## Milestones

| Milestone | Escopo & Objetivos | Entregáveis Críticos | Dependências | Status |
|---|---|---|---|---|
| **M1: Auditoria Factual de Ativos & Infraestrutura** | Mapeamento exaustivo de repositórios, builds, commits, dependências e status factual de todos os ativos locais e remotos. | Relatórios técnicos detalhados de survey (Frontend, Ops/Scripts e Comercial). | Nenhuma | 🟢 CONCLUÍDO |
| **M2: Matriz de Maturidade & Resolução de Gaps** | Avaliação quantitativa de prontidão (0-10), identificação de gargalos técnicos (quebra de contrato, ícones fixos) e correção comercial de precificação. | Matriz de 5 critérios, erradicação da âncora de R$ 450, fixação da tabela oficial (R$ 1.850 / R$ 2.850 / R$ 149 MRR). | M1 | 🟢 CONCLUÍDO |
| **M3: Modelagem de Novas Frentes & Estratégia Manaus** | Proposição fundamentada de 2 novas verticais de alta margem (Cauê Ops Desk e Cauê Sentinel CCO & Fleet) e roadmap em 3 horizontes (7d, 30d, 90d). | Modelagem de ICP, precificação (setup + MRR), arquitetura de entrega e scripts com contatos reais de Manaus. | M2 | 🟢 CONCLUÍDO |
| **M4: Publicação do Relatório Executivo & Governança** | Autorização e publicação de `PROJECT.md` e `RELATORIO_EXECUTIVO_CAUE_SYSTEMS.md` na raiz do repositório para consumo imediato pela liderança. | Relatório master estruturado em 6 seções, plano de 7 dias para Jesiel Souza e handoffs auditados. | M1, M2, M3 | 🟢 EM CONCLUSÃO |

---

## Interface Contracts

### 1. Contrato da Showcase Engine (`modular-showcase-engine` ↔ `site.config.js`)
O arquivo de configuração `src/site.config.js` deve satisfazer obrigatoriamente a seguinte assinatura tipada para não causar exceções de renderização:
```typescript
interface SiteConfig {
  business: {
    name: string;
    tagline: string;
    shortDescription?: string;
    city: string;
    whatsapp: string;                  // Formato: 55929XXXXXXXX
    whatsappDefaultMessage: string;     // Harmonizado com JSX (business.whatsappDefaultMessage)
    instagram?: string;
    email?: string;
  };
  theme: {
    heroVariant: 'split' | 'centered';
    primaryColor: string;               // Hexadecimal (ex: #C68A2B ou #10B981)
    primaryDarkColor: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryButtonText: string;          // Harmonizado com JSX (hero.primaryButtonText)
    ctaSecondaryText?: string;
    heroImage: string;
    features?: string[];
  };
  services: Array<{
    title: string;
    description: string;
    icon: string;                      // Identificador Lucide React
  }>;
  portfolio: Array<{                   // MANDATÓRIO (não pode ser undefined)
    title: string;
    category: string;
    image: string;
    description: string;
  }>;
  differentials: Array<{               // MANDATÓRIO (não pode ser undefined)
    number: string;
    title: string;
    desc: string;                      // Harmonizado com JSX (item.desc)
  }>;
  testimonials: Array<{                // MANDATÓRIO (não pode ser undefined)
    text: string;                      // Harmonizado com JSX (t.text)
    name: string;                      // Harmonizado com JSX (t.name)
    role: string;
  }>;
}
```

#### Regras de Resiliência nos Componentes Apresentacionais:
- Em `PortfolioGallery.jsx`, `DifferentialsSection.jsx` e `TestimonialsSection.jsx`, aplicar desestruturação defensiva:
  `const { portfolio = [], differentials = [], testimonials = [] } = config;`
- Em `ServicesSection.jsx`, o título e subtítulo devem ser parametrizados por `config.servicesTitle || "Serviços Especializados"` em vez de texto estático de marcenaria.
- O componente `index.html` deve sincronizar seu `<title>` e meta tags dinamicamente via `useEffect` no `App.jsx`.

### 2. Contrato Comercial & Política de Precificação Inegociável
- **Âncora Proibida:** O valor de **R$ 450,00 está formalmente revogado e proibido** de qualquer comunicação externa, proposta ou mensagem comercial da Cauê Systems.
- **Tabela Comercial Oficial:**
  - **Vitrine Modular (Showcase Engine):** **R$ 1.850,00** à vista (ou 2x de R$ 990,00 no cartão). Piso mínimo promocional de fechamento relâmpago: **R$ 1.450,00** (apenas com contrapartida de depoimento em vídeo/texto). SLA padrão de entrega: **72 a 96 horas úteis** a partir do recebimento dos dados (com opção de "SLA Express 48h" mediante taxa adicional de prioridade de +R$ 350,00 para proteger a capacidade cognitiva do fundador solo).
  - **Cauê Ops Desk (Vitrine Modular + Triagem WhatsApp + Mini Kanban):** Setup de **R$ 3.850,00 a R$ 4.900,00** (piso promocional de setup: R$ 3.450,00 para os 3 primeiros parceiros) + Mensalidade (MRR) de **R$ 450,00 a R$ 550,00/mês**. *Marco Gated Obrigatório:* O desenvolvimento do Cauê Ops Desk só terá início após a validação, venda e entrega de pelo menos 3 Vitrines Modulares pagas.
  - **Cauê Sentinel CCO & Fleet:** Diagnóstico e Implantação de **R$ 8.500,00 a R$ 16.000,00** + Contrato Mensal de Monitoramento e SLA de **R$ 1.800,00 a R$ 3.800,00/mês**.
  - **Suporte de Infraestrutura, Hospedagem em Nuvem, SSL, Monitoramento Ativo de Uptime e Backup Contínuo:** **R$ 149,00 / mês**. Atualizações de conteúdo (fotos/textos) são gerenciadas via formulário de autosserviço padronizado ou faturadas separadamente a R$ 120,00/hora técnica avulsa.

### 3. Contrato de Governança Operacional (Human-in-the-Loop & Sigilo de PI)
- Nenhuma automação, agente autônomo de software ou script tem autorização para realizar deploys não supervisionados, disparar mensagens comerciais sem revisão do fundador ou assumir compromissos jurídicos.
- Todas as comunicações outbound e propostas são assinadas e validadas pessoalmente por **Jesiel Da Costa Souza**.
- O ativo **Virtus Flux** permanece com trava societária absoluta, sem menção pública ou comercial até liberação formal em ata.
- **Proteção de Propriedade Intelectual e Sigilo (Semper Vincit):** Todas as referências a ativos proprietários da Semper Vincit (incluindo os empurradores `CT-90`, `CT-14`, base de dados `cco_database.db` e relatórios de monitoramento naval) constituem estritamente dados internos de benchmark e experimentação técnica. É TERMINANTEMENTE PROIBIDO divulgar, expor ou utilizar esses dados, embarcações ou telemetria em propostas comerciais externas a armadores concorrentes ou quaisquer terceiros em Manaus (em estrito cumprimento à Lei de Propriedade Industrial nº 9.279/96).

---

## Code Layout

```text
C:\Users\monit\
├── caue-systems-landing\                           # Repositório Principal & Landing Institucional
│   ├── index.html                                 # Ponto de entrada SPA
│   ├── package.json                               # React 19, Vite 8, Tailwind 3.4, Framer Motion
│   ├── vercel.json                                # Configuração de deploy, headers de segurança e rewrites
│   ├── PROJECT.md                                 # Este arquivo (Arquitetura & Governança)
│   ├── RELATORIO_EXECUTIVO_CAUE_SYSTEMS.md        # Relatório Executivo Master Consolidado
│   ├── src\
│   │   ├── App.jsx                                # Funil linear de 14 seções de alta conversão
│   │   ├── main.jsx                               # Bootstrap React 19
│   │   ├── index.css                              # Design tokens Nimbuu Dark/Gold
│   │   ├── components\                            # 14 seções ativas + componentes enterprise
│   │   │   ├── Navbar.jsx                         # Header blur + relógio Manaus UTC-4
│   │   │   ├── Hero.jsx                           # Headline de alto impacto + velocímetro
│   │   │   ├── ShowcaseTestDrive.jsx              # Simulador interativo multi-nicho
│   │   │   ├── RoiCalculator.jsx                  # Calculadora de perda de faturamento
│   │   │   ├── PackagesSection.jsx                # Tabela de pacotes oficiais transparentes
│   │   │   ├── FounderTrustSection.jsx            # Perfil e autoridade de Jesiel Souza
│   │   │   ├── ProjectEstimator.jsx               # Briefing interativo + Web Audio + Confetes
│   │   │   └── FloatingWhatsApp.jsx               # Gatilho de conversão direta
│   │   ├── data\
│   │   │   ├── companyData.js                     # Informações cadastrais e pilares da Cauê Systems
│   │   │   └── showcaseData.js                    # Dados de projetos e cases reais
│   │   └── utils\
│   │       ├── audioEffects.js                    # Síntese Web Audio API nativa
│   │       └── cn.js                              # Utilitário tailwind-merge + clsx
│   ├── marketing\                                 # Acervo Comercial e Ferramentas CLI
│   │   ├── generator.mjs                          # CLI de auditoria de latência e posts
│   │   ├── create-showcase-demo.mjs               # Gerador de demonstrações express
│   │   ├── 01-CALENDARIO-EDITORIAL-POSTS-PRONTOS.md
│   │   ├── 02-PLAYBOOK-PROSPECCAO-OUTBOUND-MANAUS.md
│   │   ├── 03-PROPOSTA-COMERCIAL-E-CONTRATO-48H.md
│   │   ├── 04-SISTEMA-DE-AGENTES-CAUE-SQUAD.md
│   │   └── 05-CARROSSEL-01-SLIDES-DESIGN.md
│   └── .agents\                                   # Metadados do Sistema Multi-Agente
│       ├── orchestrator\                          # Planos e handoffs do orquestrador
│       ├── explorer_survey_1\                     # Auditoria técnica frontend
│       ├── explorer_survey_2\                     # Auditoria técnica ops, scripts e portfólios
│       ├── explorer_survey_3\                     # Auditoria comercial e mercado Manaus
│       └── worker_report\                         # Redação e publicação dos entregáveis master
│
├── site-cliente-novo\                              # Modular Showcase Engine (Vitrines Express)
│   ├── package.json                               # React 18, Vite 5, Tailwind 3.4
│   ├── index.html                                 # Template HTML da vitrine do cliente
│   └── src\
│       ├── site.config.js                         # Configuração central declarativa da vitrine
│       ├── App.jsx                                # Montagem das seções da vitrine
│       └── components\                            # Heroes, Services, Portfolio, Differentials, Testimonials
│
├── Sentinel-Vision-CCO\                            # Núcleo de Análise Determinística de Vídeo & Telemetria
│   ├── README.md                                  # Visão geral da solução de CCO
│   ├── src\sentinel_vision\                       # Motor em Python/NumPy (luminância e diferença de quadros)
│   ├── docs\SDD-001-piloto-monitoramento-visual.md# Documento de design de arquitetura (escopo H3)
│   └── specs\SPEC-001-core-contracts.md           # Contratos canônicos de telemetria
│
├── audit_vessels.py                               # Script local de auditoria de embarcações (C:\Users\monit\)
├── yolov8n.pt                                     # Pesos pré-treinados YOLOv8 (6.5 MB, C:\Users\monit\)
│
└── Documents\Obsidian Vault\Semper-Vincit-Vault\PESSOAL\Caue-Systems\01-Caue-Ops\  # Governança
    ├── TODAY.md                                   # Mesa de controle diária
    ├── plano-prospeccao-primeiro-cliente-manaus.md# Mapeamento tático dos 6 alvos
    ├── decisions\active-decisions.md              # 13 decisões ativas
    ├── rituals\                                   # Procedimentos operacionais padrão
    └── projects\                                  # Fichas técnicas dos projetos
```
