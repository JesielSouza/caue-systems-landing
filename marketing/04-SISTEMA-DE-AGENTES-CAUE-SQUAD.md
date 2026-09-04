# 🤖 Manual Operacional — Squad de Agentes da Cauê Systems

> **Conceito:** O ecossistema de agentes foi desenhado para atuar como uma equipe completa de consultores e executores para Jesiel Souza (CEO / Board). Cada agente possui um papel específico e nenhum executa ações externas sem aprovação humana (Governança Human-in-the-Loop).

---

## 👥 Mapa dos Agentes Registrados no Sistema

| Agente | Tipo | Responsabilidade Primária | Entrada Típica | Saída Típica |
| :--- | :--- | :--- | :--- | :--- |
| **`caue_content_strategist`** | Marketing | Calendário de postagens, pautas da semana, seleção de ganchos magnéticos. | Tema da semana ou nova feature lançada. | Cronograma de 3 a 5 posts com objetivo claro. |
| **`caue_tech_copywriter`** | Conteúdo | Escrita final dos posts, carrosséis (slide a slide) e roteiros de vídeo. | Pauta aprovada pelo Estrategista. | Texto 100% pronto para copiar, colar e postar. |
| **`caue_visual_director`** | Arte & Design | Direção estética Dark/Gold (Nimbuu UI), layout de carrosséis e mockups. | Roteiro do copywriter. | Especificação visual para design e prompts. |
| **`caue_b2b_hunter`** | Prospecção | Abordagens de alto valor para empresas em Manaus, Cold DMs e follow-ups. | Nicho (arquitetura, clínicas, marcenarias). | Mensagens personalizadas baseadas em auditoria. |
| **`caue_commercial_lead`** | Vendas | Formatação de propostas comerciais, quebra de objeções e termos contratuais. | Dados do prospect e escopo desejado. | Proposta pronta para WhatsApp e PDF. |
| **`caue_product_operator`** | Produto | Checklist de onboarding de clientes, preenchimento de `site.config.js`. | Fotos, textos e dados enviados pelo cliente. | Configuração pronta da vitrine para deploy. |

---

## 🔄 Fluxo de Trabalho Semanal (Rotina de 15 Minutos do Fundador)

1. **Segunda-feira (Geração de Pautas - 5 min):**
   * Você aciona o `caue_content_strategist`: *"Gere 3 ideias de postagens para esta semana com foco em escritórios de arquitetura e clínicas em Manaus."*
   * O agente entrega o cronograma com os ganchos.

2. **Segunda-feira (Redação Final - 5 min):**
   * O `caue_tech_copywriter` gera os textos completos, com emojis, espaçamento e hashtags.
   * Você revisa e programa no LinkedIn / Instagram.

3. **Quarta-feira (Prospecção Local - 5 min):**
   * O `caue_b2b_hunter` analisa 5 perfis locais que você selecionou e entrega as abordagens com auditoria rápida já personalizadas.
   * Você dispara pelo direct do Instagram ou WhatsApp.

4. **Fechamento e Entrega (48h):**
   * O `caue_commercial_lead` envia a proposta irrecusável.
   * Fechado o contrato (sinal de 50%), o `caue_product_operator` monta a vitrine e gera o deploy na Vercel.

---

## 🛡️ Regras de Governança Inegociáveis

1. **Zero Disparo Cego:** Nenhuma mensagem é enviada sem que Jesiel leia e aprove.
2. **Dados Protegidos:** Nenhum dado sensível de cliente (senhas, documentos confidenciais) é exposto em prompts públicos ou repositórios abertos.
3. **Factualidade:** Todas as métricas comunicadas (ex: 0.68s, 48h úteis) são baseadas em medições reais do código e testes do Google PageSpeed.
