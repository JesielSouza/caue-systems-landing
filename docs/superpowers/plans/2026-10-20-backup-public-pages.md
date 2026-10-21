# Páginas públicas do Cauê Backup VPS — plano de implementação

**Objetivo:** usar o site Vercel existente para apresentar o app interno e suas práticas, permitindo retomar o Google sem esperar a You Secure.
**Arquitetura:** três páginas HTML estáticas e CSS próprio em public/backup; uma ligação discreta no rodapé comercial; rotas exatas antes do fallback SPA se necessárias. Sem dependências ou mudança de serviços.
**Tecnologias:** HTML/CSS, React/Vite existente, configuração Vercel existente.
**Especificação:** pedido de Jesiel para aproveitar cauesystems.vercel.app e continuar. App Google chama-se Cauê Backup VPS, uso interno do operador, escopo drive.file. Backup real/remote/rotina ainda não estão ativos; apenas ensaio local sintético passou. Não fazer promessas de backup contínuo/retention/SLA ou conformidade jurídica auditada.

## Restrições

- Escritor das páginas: worker nativo Orca. Coordenador revisa, verifica, publica e registra memória.
- Criar public/backup/index.html, privacidade.html, termos.html e styles.css; editar somente Footer.jsx e vercel.json se preciso para links/rotas. Não tocar projeto comercial, preços ou dados de outras frentes.
- URLs finais sem extensão: https://cauesystems.vercel.app/backup, /backup/privacidade, /backup/termos. Metas canonical e links coerentes. Rotas exatas devem evitar que fallback SPA devolva a landing em vez das páginas.
- Conteúdo em português, estado em implantação, nome do app igual ao Google. Contato empresarial já público no Footer pode ser reutilizado, sem inventar contato/identidade.
- Explicar finalidade de backup/restauração, Google Drive somente arquivos criados ou explicitamente autorizados ao app, credencial sob controle do operador; website não recebe arquivos, login ou tokens.
- Política explica acesso, uso, armazenamento, compartilhamento com Google no fluxo, sem venda/publicidade/treino de IA; revogação na conta Google e exclusão pelo operador; retenção operacional a definir, sem prazo inventado. Distinguir desenho futuro de operação atual.
- Termos são condições simples de ferramenta interna sob controle de Jesiel; não assumir obrigações comerciais nem afirmar aceites humanos inexistentes.
- Site público: nenhuma informação privada, endpoint de VPS, chave, segredo, ID de projeto Google ou mídia.
- Sem novo login, API paga, instalação global, upgrade, dependência, commit/push pelo worker ou mutação no Google.

## Etapas

- [x] Worker prepara três páginas acessíveis/responsivas usando paleta existente escura/dourada, CSS legível e sem fontes/scripts externos; liga apresentação/privacidade/termos e site principal.
- [x] Worker verifica npm ci, build, lint e saída dist. Não instalar com omissão de dependências de desenvolvimento exigidas pelo build. Usar lockfile, sem atualização.
- [x] Coordenador inspeciona diff/conteúdo/rotas, reproduz build/lint, renderiza desktop/mobile e verifica links. Sem testes unitários redundantes para páginas estáticas.
- [ ] Coordenador publica somente arquivos revisados na main do repo existente, acompanha GitHub/Vercel e verifica HTTP/títulos/textos/links reais em cada URL, evitando falso HTTP200 da SPA. Preservar retorno via reversão do commit específico.
- [ ] Após páginas verificadas, retomar Branding com URLs reais e domínio cauesystems.vercel.app. Aceitação/publicação no Google só será declarada por evidência da interface; comprovação de propriedade pode requerer ação humana. Não usar vercel.app como domínio de Jesiel.
- [ ] Atualizar estados e GitHub da memória; liquidar worker_done/release/ACK nativos antes do encerramento.

## Foco da revisão

1. HTTP200 da SPA não comprova que uma página nova foi publicada.
2. Não afirmar armazenamento/rotina/criptografia de produção que ainda não existem.
3. Escopo drive.file não é acesso ao Drive inteiro e inclui arquivos explicitamente autorizados.
4. Alteração do rodapé não deve quebrar layout, mobile ou links atuais.
5. Domínio Vercel existente e páginas são aproveitáveis; Google ainda pode exigir validação de controle para produção.
## Resultado da revisão antes da publicação

- Conteúdo e build conferidos pelo coordenador; Footer.jsx passa no oxlint. Lint global tem dois erros de shebang pré-existentes em marketing, reproduzidos também no baseline isolado; arquivos/config correspondentes ficaram idênticos ao HEAD.
- A revisão retirou rewrites novos com .html, incompatíveis com cleanUrls; vercel.json permaneceu idêntico ao original. Arquivos estáticos dependem do filesystem nativo da Vercel, a verificar no deploy real.
- Páginas renderizadas no navegador do Orca em desktop e viewport 390px, sem overflow horizontal nas três. Build/lock/dependências originais preservados.
