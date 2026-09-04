#!/usr/bin/env node

/**
 * Cauê Systems — Marketing & Outbound Helper CLI
 * Uso:
 *   node generator.mjs --list-posts
 *   node generator.mjs --post 1
 *   node generator.mjs --audit https://exemplo.com.br
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);

console.log("🏛️  CAUÊ SYSTEMS — MARKETING & OUTBOUND ENGINE");
console.log("-----------------------------------------------");

if (args.length === 0 || args.includes('--help')) {
  console.log(`
Comandos disponíveis:
  --list-posts         Lista todos os posts prontos do acervo.
  --post <numero>      Exibe o texto completo do post selecionado pronto para copiar.
  --audit <url>        Executa teste rápido de tempo de resposta HTTP em um site de lead.
  --status             Exibe status dos arquivos de marketing e esteira.
  `);
  process.exit(0);
}

if (args.includes('--list-posts')) {
  const file = path.join(__dirname, '01-CALENDARIO-EDITORIAL-POSTS-PRONTOS.md');
  if (!fs.existsSync(file)) {
    console.error("Arquivo de posts não encontrado.");
    process.exit(1);
  }
  const content = fs.readFileSync(file, 'utf-8');
  const postHeaders = content.match(/### Post \d+ [^\n]+/g) || [];
  console.log(`Encontrados ${postHeaders.length} posts prontos no acervo:\n`);
  postHeaders.forEach(h => console.log(`  • ${h.replace('### ', '')}`));
  console.log(`\nPara ver o texto de um post: node generator.mjs --post <numero>`);
  process.exit(0);
}

if (args.includes('--post')) {
  const index = args.indexOf('--post');
  const postNum = args[index + 1];
  if (!postNum) {
    console.error("Por favor informe o número do post. Ex: --post 1");
    process.exit(1);
  }
  const file = path.join(__dirname, '01-CALENDARIO-EDITORIAL-POSTS-PRONTOS.md');
  const content = fs.readFileSync(file, 'utf-8');
  const regex = new RegExp(`(### Post 0?${postNum} [\\s\\S]*?)(?=### Post|## 🎨|$)`, 'g');
  const match = regex.exec(content);
  if (match) {
    console.log(`\n--- POST ${postNum} (PRONTO PARA COPIAR E COLAR) ---\n`);
    console.log(match[1].trim());
    console.log(`\n----------------------------------------------------\n`);
  } else {
    console.log(`Post número ${postNum} não encontrado.`);
  }
  process.exit(0);
}

if (args.includes('--audit')) {
  const index = args.indexOf('--audit');
  const targetUrl = args[index + 1];
  if (!targetUrl) {
    console.error("Informe a URL para auditoria. Ex: --audit https://exemplo.com.br");
    process.exit(1);
  }

  let validUrl = targetUrl;
  if (!validUrl.startsWith('http')) {
    validUrl = 'https://' + validUrl;
  }

  console.log(`Iniciando auditoria técnica relâmpago para: ${validUrl} ...\n`);
  const startTime = Date.now();

  try {
    const res = await fetch(validUrl, { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) CaueSystemsAuditor/1.0' } });
    const loadMs = Date.now() - startTime;
    const status = res.status;
    const isHttps = validUrl.startsWith('https://');

    console.log(`📊 RESULTADOS DA AUDITORIA FACTUAL:`);
    console.log(`  • Status HTTP: ${status} ${res.statusText}`);
    console.log(`  • Tempo de Resposta: ${loadMs} ms (${(loadMs / 1000).toFixed(2)}s)`);
    console.log(`  • Certificado SSL Seguro: ${isHttps ? '✅ Sim (HTTPS)' : '❌ Não seguro (HTTP)'}`);
    
    if (loadMs > 2500) {
      console.log(`\n⚠️  DIAGNÓSTICO COMERCIAL:`);
      console.log(`  O site levou mais de 2.5 segundos apenas para responder. No 4G de um celular,`);
      console.log(`  a renderização visual provavelmente ultrapassa 5 a 7 segundos.`);
      console.log(`  👉 Argumento para o lead: "Identificamos que seu site demora mais de ${(loadMs/1000).toFixed(1)}s para responder no celular, gerando desistência imediata de clientes."`);
    } else {
      console.log(`\n⚡ Tempo de resposta aceitável no servidor. Avaliar design mobile e conversão para WhatsApp.`);
    }
  } catch (err) {
    console.error(`❌ Erro ao conectar na URL: ${err.message}`);
    console.log(`👉 Argumento para o lead: "Tentamos acessar o site oficial da sua empresa e a página apresentou erro de carregamento/DNS. Seu cliente pode estar enfrentando o mesmo problema."`);
  }
  process.exit(0);
}

if (args.includes('--status')) {
  console.log("Arquivos gerados no diretório marketing:\n");
  const files = fs.readdirSync(__dirname);
  files.forEach(f => {
    const stats = fs.statSync(path.join(__dirname, f));
    console.log(`  • ${f.padEnd(45)} (${(stats.size / 1024).toFixed(1)} KB)`);
  });
  process.exit(0);
}
