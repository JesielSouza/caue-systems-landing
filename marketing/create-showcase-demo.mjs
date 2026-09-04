#!/usr/bin/env node

/**
 * Cauê Systems — Gerador Express de site.config.js
 * Uso:
 *   node create-showcase-demo.mjs --niche arquitetura --client "Causa Arquitetura"
 *   node create-showcase-demo.mjs --niche marcenaria --client "Portela Woods"
 *   node create-showcase-demo.mjs --niche clinica --client "Dra. Larissa Martins"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);

function getArg(flag, defaultVal = '') {
  const idx = args.indexOf(flag);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : defaultVal;
}

const niche = getArg('--niche', 'arquitetura').toLowerCase();
const clientName = getArg('--client', 'Cliente Demonstração');
const whatsapp = getArg('--whatsapp', '5592981038799');

console.log(`🏛️  CAUÊ SYSTEMS — SHOWCASE GENERATOR 48H`);
console.log(`Gerando configuração para: ${clientName} (Nicho: ${niche})...\n`);

let template = {};

if (niche === 'marcenaria') {
  template = {
    business: {
      name: clientName,
      tagline: 'Decks, Pergolados & Móveis Sob Medida de Alto Padrão',
      description: 'Projetos sofisticados em madeira nobre e acabamento fino para áreas residenciais e corporativas em Manaus.',
      city: 'Manaus, AM',
      whatsapp: whatsapp,
      whatsappDefaultMessage: `Olá! Vim pela vitrine da ${clientName} e gostaria de solicitar um orçamento para o meu imóvel.`,
      instagram: 'https://instagram.com',
      email: 'contato@cliente.com.br'
    },
    theme: {
      heroVariant: 'split',
      primaryColor: '#C68A2B',
      primaryDarkColor: '#A5701E'
    },
    hero: {
      badge: 'Acabamento Fino em Manaus',
      title: 'Estruturas nobres em madeira que valorizam cada metro do seu imóvel.',
      subtitle: 'Decks, pergolados e projetos sob medida executados com pontualidade e matéria-prima selecionada.',
      primaryButtonText: 'Pedir Orçamento no WhatsApp',
      secondaryButtonText: 'Ver Obras Realizadas',
      heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    },
    services: [
      { title: 'Decks de Piscina & Varanda', description: 'Madeira nobre tratada resistente a intempéries e umidade da região amazônica.', icon: 'LayoutGrid' },
      { title: 'Pergolados & Gazebos', description: 'Ambientes externos acolhedores com cobertura termoacústica e design contemporâneo.', icon: 'Building2' },
      { title: 'Painéis Ripados & Brises', description: 'Revestimentos sofisticados para fachadas e livings de alto padrão.', icon: 'Tv' },
      { title: 'Móveis & Bancadas Rústicas', description: 'Peças exclusivas esculpidas em toras certificadas com acabamento de luxo.', icon: 'BedDouble' }
    ]
  };
} else if (niche === 'clinica') {
  template = {
    business: {
      name: clientName,
      tagline: 'Odontologia Estética & Harmonização Facial',
      description: 'Tecnologia avançada, conforto absoluto e tratamentos de alta precisão no Adrianópolis.',
      city: 'Manaus, AM',
      whatsapp: whatsapp,
      whatsappDefaultMessage: `Olá! Gostaria de agendar uma consulta de avaliação estética na ${clientName}.`,
      instagram: 'https://instagram.com',
      email: 'contato@clinica.com.br'
    },
    theme: {
      heroVariant: 'centered',
      primaryColor: '#10B981',
      primaryDarkColor: '#059669'
    },
    hero: {
      badge: 'Atendimento Personalizado em Adrianópolis',
      title: 'A harmonia perfeita para o seu sorriso com tecnologia de ponta.',
      subtitle: 'Ambiente planejado para o seu conforto, com tratamentos estéticos e funcionais de última geração.',
      primaryButtonText: 'Agendar Consulta no WhatsApp',
      secondaryButtonText: 'Conhecer Procedimentos',
      heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80'
    },
    services: [
      { title: 'Lentes de Contato Dental', description: 'Correção precisa de cor e formato com facetas ultrafinas em porcelana.', icon: 'Sparkles' },
      { title: 'Harmonização Facial', description: 'Procedimentos seguros e naturais para rejuvenescimento e contorno estético.', icon: 'Heart' },
      { title: 'Implantes Guiados por IA', description: 'Cirurgia guiada digitalmente com recuperação rápida e máxima previsibilidade.', icon: 'ShieldCheck' },
      { title: 'Clareamento a Laser', description: 'Tecnologia de ativação fotônica sem sensibilidade dental.', icon: 'Smile' }
    ]
  };
} else {
  // Arquitetura
  template = {
    business: {
      name: clientName,
      tagline: 'Arquitetura Contemporânea & Design de Interiores',
      description: 'Projetos residenciais e comerciais de alta densidade estética e funcional em Manaus.',
      city: 'Manaus, AM',
      whatsapp: whatsapp,
      whatsappDefaultMessage: `Olá! Vim pelo portfólio da ${clientName} e gostaria de conversar sobre um projeto arquitetônico.`,
      instagram: 'https://instagram.com',
      email: 'contato@arquiteto.com.br'
    },
    theme: {
      heroVariant: 'split',
      primaryColor: '#C68A2B',
      primaryDarkColor: '#A5701E'
    },
    hero: {
      badge: 'Arquitetura Autoral em Manaus',
      title: 'Projetos arquitetônicos que traduzem a sua identidade com sofisticação.',
      subtitle: 'Concepção do projeto 3D, aprovação legal e acompanhamento executivo de obras de alto padrão.',
      primaryButtonText: 'Iniciar Conversa no WhatsApp',
      secondaryButtonText: 'Explorar Galeria de Obras',
      heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    },
    services: [
      { title: 'Projetos Residenciais', description: 'Casas contemporâneas integradas à natureza com ventilação e iluminação eficientes.', icon: 'LayoutGrid' },
      { title: 'Design de Interiores', description: 'Especificação fina de acabamentos, marcenaria e layout funcional para imóveis.', icon: 'Tv' },
      { title: 'Projetos Comerciais', description: 'Espaços corporativos e clínicas projetados para encantar clientes e reter talentos.', icon: 'Building2' },
      { title: 'Acompanhamento de Obra', description: 'Fiscalização técnica rigorosa para garantir fidelidade total ao projeto aprovado.', icon: 'ShieldCheck' }
    ]
  };
}

const fileContent = `/**
 * =================================================================
 * CONFIGURAÇÃO GERADA AUTOMATICAMENTE PELA CAUÊ SYSTEMS
 * Cliente: ${clientName}
 * Gerado em: ${new Date().toISOString()}
 * =================================================================
 */
export const siteConfig = ${JSON.stringify(template, null, 2)};
`;

const outputPath = path.join(__dirname, `site.config.${niche}.demo.js`);
fs.writeFileSync(outputPath, fileContent, 'utf-8');

console.log(`✅ Arquivo gerado com sucesso:`);
console.log(`   ${outputPath}`);
console.log(`\nPara aplicar no site-cliente-novo:`);
console.log(`   Copy-Item "${outputPath}" "C:\\Users\\monit\\site-cliente-novo\\src\\site.config.js" -Force`);
