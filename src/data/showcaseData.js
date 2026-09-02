export const showcaseData = {
  niches: [
    {
      id: 'arquitetura',
      label: 'Arquitetura & Interiores',
      badge: 'Case Real em Produção',
      clientName: 'Juliano Souza Interiores',
      tagline: 'Design de Interiores & Móveis Planejados de Alto Padrão em Manaus',
      headline: 'Ambientes sofisticados, funcionais e sob medida para seu imóvel.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      whatsappMsg: 'Olá Juliano! Vi sua vitrine e gostaria de solicitar um orçamento para projeto de interiores.',
      stats: {
        loadTime: '0.68s',
        score: '99/100',
        conversion: '+180% contatos',
      },
      features: ['Galeria de Cozinhas & Living', 'Fotos em Alta Resolução', 'Botão Direto WhatsApp'],
      liveUrl: 'https://juliano-souza-portfolio.vercel.app',
    },
    {
      id: 'clinicas',
      label: 'Clínicas & Saúde',
      badge: 'Modelo Demonstrativo',
      clientName: 'Dra. Larissa Martins Estética',
      tagline: 'Odontologia Estética & Harmonização Facial em Adrianópolis',
      headline: 'Transforme seu sorriso com tecnologia de ponta e conforto absoluto.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      whatsappMsg: 'Olá Dra. Larissa! Gostaria de agendar uma consulta de avaliação estética.',
      stats: {
        loadTime: '0.62s',
        score: '100/100',
        conversion: 'Agendamento Fácil',
      },
      features: ['Cardápio de Procedimentos', 'Fotos Antes/Depois', 'Agendamento Direto'],
      liveUrl: null,
    },
    {
      id: 'marcenaria',
      label: 'Marcenarias & Reformas',
      badge: 'Modelo Demonstrativo',
      clientName: 'Galpão Estúdio Criativo',
      tagline: 'Mobiliário Sob Medida & Reformas Residenciais em Manaus',
      headline: 'Do projeto 3D à montagem impecável com prazo garantido em contrato.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      whatsappMsg: 'Olá! Gostaria de enviar a planta do meu apartamento para orçamento de marcenaria.',
      stats: {
        loadTime: '0.65s',
        score: '98/100',
        conversion: 'Triagem Rápida',
      },
      features: ['Apresentação de Projetos 3D', 'Depoimentos de Clientes', 'Simulador de Orçamento'],
      liveUrl: null,
    },
    {
      id: 'consultoria',
      label: 'Engenharia & Perícias',
      badge: 'Modelo Demonstrativo',
      clientName: 'Costa & Lima Engenharia',
      tagline: 'Projetos Estruturais, Laudos Técnicos e Regularização de Imóveis',
      headline: 'Segurança técnica e conformidade jurídica para sua obra ou condomínio.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      whatsappMsg: 'Olá! Preciso de um laudo técnico de vistoria predial em Manaus.',
      stats: {
        loadTime: '0.60s',
        score: '99/100',
        conversion: 'Autoridade Imediata',
      },
      features: ['Serviços Especializados', 'Registro de ART/CREA', 'Atendimento Corporativo'],
      liveUrl: null,
    }
  ],
  packages: [
    {
      id: 'vitrine-48h',
      tag: 'Mais Procurado em Manaus',
      isPopular: true,
      title: 'Vitrine Digital Express (48h)',
      timeline: 'Entrega em até 48 horas úteis',
      headline: 'Para profissionais e empresas que precisam de presença digital de alto padrão agora.',
      deliverables: [
        'Design Dark & Gold exclusivo no seu nicho',
        'Carregamento ultra-rápido (< 0.8s no celular)',
        'Botões com mensagens personalizadas para o seu WhatsApp',
        'Galeria de projetos com fotos em alta definição',
        'Configuração de domínio próprio (.com.br) e SSL seguro',
        'Otimização completa para o Google (SEO Local Manaus)',
        'Sem mensalidades abusivas de plataformas genéricas'
      ],
      forWho: 'Arquitetos, designers de interiores, clínicas, consultórios, marcenarias e prestadores de serviço.',
      ctaText: 'Quero Minha Vitrine em 48h →'
    },
    {
      id: 'whatsapp-automation',
      tag: 'Captação 24/7',
      isPopular: false,
      title: 'Atendimento Automático no WhatsApp',
      timeline: 'Implantação em até 5 dias',
      headline: 'Nunca mais perca um orçamento fora do horário comercial ou no fim de semana.',
      deliverables: [
        'Agente inteligente configurado para o seu WhatsApp comercial',
        'Respostas instantâneas personalizadas com o vocabulário da sua empresa',
        'Triagem automática de serviços, envio de fotos e catálogo',
        'Qualificação do cliente antes de repassar para seu atendimento',
        'Rastreamento de leads e histórico de conversas organizado'
      ],
      forWho: 'Empresas com alto volume de contatos ou que perdem clientes por demora na resposta.',
      ctaText: 'Automatizar Meu WhatsApp →'
    },
    {
      id: 'custom-system',
      tag: 'Operações Críticas',
      isPopular: false,
      title: 'Sistemas & SaaS Sob Medida',
      timeline: 'Sob diagnóstico e escopo',
      headline: 'Sistemas que eliminam planilhas confusas e organizam toda a sua esteira de operação.',
      deliverables: [
        'Desenvolvimento em React, Next.js, Python e Supabase',
        'Painéis de controle de pedidos, faturamento e clientes em tempo real',
        'Automações de rotinas e integração com APIs e NFe',
        'Controle granular de acessos e segurança em nuvem fail-closed',
        'Suporte técnico direto e evolução contínua'
      ],
      forWho: 'Logística, frotas fluviais, comércios em expansão e empresas com processos complexos.',
      ctaText: 'Solicitar Diagnóstico Técnico →'
    }
  ],
  steps: [
    {
      number: '01',
      title: 'Alinhamento & Envio do Material',
      desc: 'Você escolhe o modelo e nos envia suas fotos, logotipo, serviços e o número do seu WhatsApp pelo próprio chat.'
    },
    {
      number: '02',
      title: 'Desenvolvimento Express & Teste 48h',
      desc: 'Estruturamos a vitrine com design impecável, testamos a velocidade no celular e enviamos o link demonstrativo para sua aprovação.'
    },
    {
      number: '03',
      title: 'Publicação no Ar & Clientes no WhatsApp',
      desc: 'Conectamos seu domínio oficial e seu negócio passa a receber orçamentos qualificados direto no WhatsApp todos os dias.'
    }
  ],
  faq: [
    {
      q: 'A Vitrine Digital realmente fica pronta em até 48 horas?',
      a: 'Sim! Utilizamos a Modular Showcase Engine da Cauê Systems, com toda a arquitetura de alta performance pré-estruturada. Ao receber suas fotos e dados, personalizamos 100% do design, textos e botões de WhatsApp em até 48 horas úteis.'
    },
    {
      q: 'Eu preciso já ter um domínio (.com.br) comprado?',
      a: 'Não se preocupe se ainda não tiver. Nós orientamos ou realizamos a configuração completa do seu domínio oficial e da hospedagem de alta disponibilidade sem complicação.'
    },
    {
      q: 'Qual a diferença entre uma Vitrine Cauê Systems e um agregador simples tipo Linktree?',
      a: 'Um agregador simples passa uma imagem amadora, tem menus genéricos e não valoriza o trabalho de quem vende serviços de alto valor. A Vitrine Cauê carrega em menos de 1 segundo, tem design exclusivo Dark/Gold de alto padrão e conduz o cliente diretamente para a contratação.'
    },
    {
      q: 'Como funciona o suporte e manutenção?',
      a: 'Você tem canal direto no WhatsApp com Jesiel Souza (fundador e desenvolvedor em Manaus). Qualquer ajuste de fotos, preços ou textos é atendido com agilidade e proximidade.'
    }
  ]
};
