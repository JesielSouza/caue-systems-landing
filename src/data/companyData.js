export const companyData = {
  name: "Cauê Systems",
  tagline: "Engenharia de Software, Inteligência Operacional & Vitrines Digitais",
  shortDescription: "Transformamos desafios operacionais complexos em software de alto desempenho, agentes autônomos e vitrines digitais de alta conversão entregues em tempo recorde.",
  location: "Manaus, AM — Brasil",
  foundedBy: "Jesiel Souza",
  status: "Operacional & Aceitando Novos Projetos",
  contact: {
    phone: "(92) 98501-4392",
    whatsappClean: "5592985014392",
    email: "jesielcosta13@gmail.com",
    github: "https://github.com/JesielSouza",
    linkedin: "https://www.linkedin.com/in/jesiel-souza-71b837155",
    siteUrl: "https://cauesystems.vercel.app"
  },
  metrics: [
    {
      value: "48h",
      label: "Entrega Expressa",
      subtext: "Para vitrines e portfólios modulares prontos para converter"
    },
    {
      value: "< 0.8s",
      label: "Tempo de Carregamento",
      subtext: "Otimização extrema em mobile e pontuação máxima no Core Web Vitals"
    },
    {
      value: "99.9%",
      label: "Resiliência Operacional",
      subtext: "Sistemas desenhados com disciplina de Centro de Controle (CCO)"
    },
    {
      value: "100%",
      label: "Human-in-the-Loop",
      subtext: "Governança estrita e guardrails para automações e IA"
    }
  ],
  services: [
    {
      id: "modular-showcase",
      icon: "Sparkles",
      badge: "Entrega em 48 Horas",
      title: "Vitrines & Portfólios de Alta Conversão",
      headline: "Modular Showcase Engine",
      description: "Desenvolvimento express de páginas ultra-rápidas para arquitetos, designers de interiores, consultórios e empresas de alto padrão em Manaus. Foco absoluto em conversão direta no WhatsApp.",
      features: [
        "Carregamento sub-segundo no celular",
        "Design Dark & Gold sofisticado e personalizado",
        "Galeria interativa com filtros de categorias",
        "Botões de ação inteligente direto para o WhatsApp",
        "Domínio próprio e hospedagem global segura"
      ],
      tag: "Vitrines Digitais"
    },
    {
      id: "saas-platforms",
      icon: "Layers",
      badge: "Sistemas Sob Medida",
      title: "SaaS & Plataformas de Comando Operacional",
      headline: "Orchestration OS & Virtus Flux",
      description: "Construção de sistemas web customizados para controle de pedidos, faturamento, logística e esteiras operacionais. Chega de planilhas confusas ou ERPs engessados.",
      features: [
        "Painéis de telemetria em tempo real e KPIs",
        "Gestão de esteiras de pedidos e faturamento",
        "Alertas de risco operacional e financeiro",
        "Arquitetura escalável com Next.js e Supabase",
        "Autenticação e controle de acesso granular"
      ],
      tag: "SaaS & Gestão"
    },
    {
      id: "ai-agents",
      icon: "Cpu",
      badge: "Arquitetura Multi-Agente",
      title: "Inteligência Artificial & Agentes Autônomos",
      headline: "Paperclip Lab & Teko AI",
      description: "Desenvolvimento de agentes de IA especializados para automatizar tarefas repetitivas, triagem de dados e síntese de informações sob rigorosa governança humana.",
      features: [
        "Agentes especializados por setor (Operações, Pesquisa, Finanças)",
        "Modo Planning-Only com aprovação humana obrigatória",
        "Integração com LLMs avançadas (Groq, Gemini, Claude)",
        "Knowledge Charters sem alucinação de dados",
        "Trilhas de auditoria completas para cada execução"
      ],
      tag: "IA & Automação"
    },
    {
      id: "operational-vision",
      icon: "ShieldAlert",
      badge: "Monitoramento Crítico",
      title: "Visão Computacional & CCO Inteligente",
      headline: "Sentinel Vision Suite",
      description: "Soluções avançadas para centros de monitoramento, segurança eletrônica e frotas fluviais/terrestres com detecção em tempo real via IA (YOLO) e auditoria visual.",
      features: [
        "Detecção de anomalias e conformidade com YOLOv8",
        "Integração com CFTV IP (Hikvision, Intelbras, RTSP)",
        "Telemetria de frotas e monitoramento de conectividade",
        "Registro de evidências auditáveis com hash de integridade",
        "Alertas automáticos para incidentes operacionais"
      ],
      tag: "Visão & CCO"
    }
  ],
  projects: [
    {
      id: "juliano-souza",
      title: "Portfólio Juliano Souza",
      subtitle: "Design de Interiores & Móveis Planejados",
      category: "showcase",
      categoryLabel: "Vitrine Express",
      status: "Em Produção",
      statusColor: "emerald",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
      description: "Vitrine de alta conversão criada para escritório de móveis sob medida em Manaus. Carrega em menos de 800ms e aumentou as solicitações de orçamento via WhatsApp.",
      metrics: "Sub-1s Load · 100% Mobile",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Vercel"],
      liveUrl: "https://juliano-souza-portfolio.vercel.app",
      highlight: "Construído sobre a Modular Showcase Engine da Cauê Systems."
    },
    {
      id: "virtus-flux",
      title: "Virtus Flux (Orchestration OS)",
      subtitle: "Sistema de Comando Operacional & Financeiro",
      category: "saas",
      categoryLabel: "SaaS / Plataforma",
      status: "Green / Produção",
      statusColor: "emerald",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      description: "Camada de controle operacional para rastreamento de pedidos, risco financeiro, notas fiscais e exceções em tempo real.",
      metrics: "Dashboard Reativo · Roteiro de 10 min",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide React", "Vercel"],
      liveUrl: "https://orchestration-os.vercel.app",
      highlight: "Interface de alta densidade com IA Command Center."
    },
    {
      id: "sentinel-vision",
      title: "Sentinel Vision CCO",
      subtitle: "Auditoria Visual & Telemetria de Frotas",
      category: "vision",
      categoryLabel: "Visão & CCO",
      status: "Operação Ativa",
      statusColor: "emerald",
      image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1000&q=80",
      description: "Pipeline de visão computacional (YOLOv8) e auditoria de CFTV em tempo real para frotas de navegação fluvial e instalações críticas.",
      metrics: "99.9% Uptime · 24/7 Monitoramento",
      tech: ["Python", "YOLOv8", "OpenCV", "Docker", "RTSP / Hikvision", "Uptime Kuma"],
      liveUrl: "https://github.com/JesielSouza",
      highlight: "Auditoria de evidências factuais e telemetria de conectividade."
    },
    {
      id: "paperclip-lab",
      title: "Paperclip Lab & Multi-Agent Org",
      subtitle: "Escritório de Agentes com Governança Humana",
      category: "ai",
      categoryLabel: "IA & Agentes",
      status: "Lab Operacional",
      statusColor: "gold",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
      description: "Ecossistema de 8 agentes autônomos (CEO, CTO, Ops Manager, Governance Lead) com regime Planning-Only e aprovação humana em gates estratégicos.",
      metrics: "8 Agentes · Human-in-the-Loop",
      tech: ["Node.js", "Groq / Gemini APIs", "Planning-Only Framework", "Tailwind CSS"],
      liveUrl: "https://github.com/JesielSouza",
      highlight: "Governança estrita: nenhum agente executa escrita sem autorização."
    },
    {
      id: "vetra-kanban",
      title: "Vetra (Ecosistema Kanban)",
      subtitle: "Gestão Operacional de Alta Densidade com IA Teko",
      category: "saas",
      categoryLabel: "SaaS / Produtividade",
      status: "Estável / Auditado",
      statusColor: "gold",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
      description: "Plataforma Kanban retro-operacional de alta densidade inspirada em centros de missão, com IA Teko para geração automática de briefings e suporte a decisões.",
      metrics: "5 Estágios Onboarding · Supabase RLS",
      tech: ["React", "Supabase", "Groq AI", "Vercel", "Tailwind CSS"],
      liveUrl: "https://ecosistema-kanban.vercel.app",
      highlight: "Design retro-operacional e persistência robusta."
    },
    {
      id: "conves-digital",
      title: "Convés Digital",
      subtitle: "Inteligência Geoespacial & Prospecção Fluvial",
      category: "vision",
      categoryLabel: "Logística / Naval",
      status: "MVP em Expansão",
      statusColor: "emerald",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
      description: "Plataforma de mapeamento de ativos náuticos e prospecção comercial fluvial em Manaus com consultas OpenStreetMap e IA para geração de abordagens.",
      metrics: "Integração Overpass · IA Groq",
      tech: ["React", "Supabase RLS", "Groq API", "Overpass API", "Railway"],
      liveUrl: "https://conves-digital.vercel.app",
      highlight: "Focado no mercado logístico fluvial da Amazônia."
    }
  ],
  methodology: [
    {
      step: "01",
      title: "Auditoria Factual & Diagnóstico",
      desc: "Análise profunda do gargalo real do seu negócio. Sem suposições, sem prometer 'IA mágica' onde uma boa arquitetura de dados resolve.",
      icon: "Search"
    },
    {
      step: "02",
      title: "Design System & Protótipo Funcional",
      desc: "Criação visual no padrão Dark Premium com foco em ergonomia visual, alta legibilidade e conversão cirúrgica.",
      icon: "Palette"
    },
    {
      step: "03",
      title: "Engenharia Modular & Alta Velocidade",
      desc: "Implementação em React, Next.js ou Python com código limpo, componentes reutilizáveis e performance extrema.",
      icon: "Code2"
    },
    {
      step: "04",
      title: "Gate de Governança & Qualidade (CI/CD)",
      desc: "Validação rigorosa de responsividade, segurança, contratos de API e testes ponta a ponta antes da liberação.",
      icon: "ShieldCheck"
    },
    {
      step: "05",
      title: "Deploy Contínuo & Telemetria Ativa",
      desc: "Lançamento em infraestrutura global (Vercel/Railway) com monitoramento contínuo de disponibilidade e suporte direto.",
      icon: "Rocket"
    }
  ],
  aboutFounder: {
    name: "Jesiel Souza",
    role: "Fundador & Arquiteto de Sistemas",
    location: "Manaus, Amazonas",
    bio: "Profissional de tecnologia com ampla vivência em Centros de Controle Operacional (CCO), monitoramento crítico de segurança, redes corporativas e engenharia de software fullstack. Combina a disciplina inegociável de operações 24/7 com o dinamismo do desenvolvimento moderno em React, Next.js, Python e Inteligência Artificial.",
    quote: "A disciplina de um Centro de Controle Operacional aplicada à engenharia de software: sistemas que não caem, interfaces sem ruído e compromisso absoluto com a verdade dos dados.",
    pillars: [
      { title: "Rigor Documental", desc: "Código documentado, contratos de API claros e rastreabilidade total." },
      { title: "Velocidade com Precisão", desc: "Entrega expressa de vitrines em 48h sem abrir mão da qualidade técnica." },
      { title: "Tecnologia Baseada em Evidências", desc: "Adoção consciente de IA e ferramentas com retorno mensurável." }
    ],
    skills: [
      "React / Next.js / Vite",
      "Tailwind CSS & Framer Motion",
      "Python / YOLOv8 / OpenCV",
      "Node.js & Supabase",
      "CFTV IP / RTSP / Hikvision",
      "Docker & Infraestrutura",
      "Arquitetura Multi-Agente",
      "Gestão de Incidentes CCO"
    ]
  },
  faq: [
    {
      q: "Como funciona a entrega de Vitrines Digitais em 48 horas?",
      a: "Utilizamos nossa Modular Showcase Engine proprietária. Com 50%+ da arquitetura de alta conversão já validada, personalizamos todo o design, imagens, textos, serviços e integrações de WhatsApp em até 48 horas úteis após o envio dos dados do seu negócio."
    },
    {
      q: "A Cauê Systems desenvolve sistemas complexos sob medida?",
      a: "Sim! Desenvolvemos plataformas completas (SaaS), painéis de controle operacional, esteiras de pedidos e automações com IA integradas a bancos de dados modernos (Supabase, PostgreSQL) e APIs customizadas."
    },
    {
      q: "O que é a metodologia 'Human-in-the-Loop' em projetos de IA?",
      a: "Garantimos que nenhum agente autônomo execute ações críticas, alterações financeiras ou envio de mensagens sem a supervisão e o gate de aprovação humana. Isso elimina riscos de alucinação e mantém a segurança total da sua operação."
    },
    {
      q: "O site já vem adaptado para celulares e otimizado para o Google?",
      a: "Com certeza. Todas as nossas aplicações são 100% responsivas (Mobile-First), com carregamento sub-segundo, tags Open Graph para compartilhamento em redes sociais e estruturação de SEO para mecanismos de busca."
    },
    {
      q: "Quais são as formas de suporte e manutenção após a entrega?",
      a: "Oferecemos planos de suporte contínuo, manutenção preventiva, hospedagem gerenciada na nuvem e acompanhamento de métricas de conversão para manter sua aplicação sempre atualizada e estável."
    }
  ]
};
