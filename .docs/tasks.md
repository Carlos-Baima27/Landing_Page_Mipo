# Tarefas de implementação — Landing page Mipo

Este checklist decompõe o [PRD da landing page Mipo](../.docs/prd.md). Consulte o PRD para contexto, conteúdo comercial, requisitos completos e critérios gerais; este documento registra somente a sequência de execução e como aprovar cada entrega.

## Como executar

- Implemente uma tarefa por vez, na ordem abaixo, e marque `[x]` somente depois de cumprir seu critério de aprovação.
- Respeite os pré-requisitos indicados. Se uma tarefa depender de uma decisão comercial ou de marca ainda não aprovada, mantenha-a pendente e peça a confirmação necessária; não invente informações.
- Os IDs e referências apontam para os requisitos e seções do PRD, que continua sendo a fonte de verdade.

## Fase 1 — Decisões e preparação

- [x] **T001 — Resolver a divergência sobre formas de pagamento** (PRD: §6, REQ-007, §13). Confirmar com a Mipo se cartão é aceito e corrigir o PRD para que a informação seja única antes de implementá-la.
  **Aprovação:** o PRD informa a mesma lista de formas de pagamento em todas as seções relevantes; a decisão está confirmada pela Mipo e não foi presumida pelo agente.
  **Decisão confirmada:** dinheiro, Pix e cartão são aceitos. Informação alinhada no PRD.

- [x] **T002 — Aprovar a direção visual e verificar os materiais de marca** (PRD: §6, §11, REQ-011). Registrar se a paleta e a direção visual propostas estão aprovadas e quais logos/fotos reais podem ser usados. Se ainda não houver materiais autorizados, planejar placeholders neutros e identificáveis.
  **Aprovação:** existe uma decisão registrada sobre a direção visual e os materiais; nenhum placeholder ou recurso do scaffold é apresentado como foto, equipe ou frota real.
  **Decisão confirmada:** direção e paleta candidatas aprovadas. Logo e fotos reais ainda não foram fornecidos; usar placeholders neutros, claramente ilustrativos e identificados. PRD atualizado.

- [x] **T003 — Escolher a hospedagem estática** (PRD: §10, SYS-001). Confirmar a plataforma de hospedagem e seus requisitos de publicação para o projeto Vite.
  **Aprovação:** a plataforma está nomeada e suas configurações necessárias para publicar o build estático estão documentadas ou confirmadas.
  **Decisão confirmada:** Vercel. Build: `npm run build`; diretório de saída: `dist`, padrão do Vite. Não foi encontrada configuração `vite.config.*` personalizada.

## Fase 2 — Base da página e contato

- [ ] **T004 — Remover o conteúdo de demonstração do Vite e preparar a estrutura da página** (PRD: §2, §10, REQ-001, SYS-001, SYS-007). Atualizar `src/main.ts` e os arquivos necessários para estabelecer a landing page em HTML semântico, com âncoras para as seções previstas.
  **Aprovação:** o site não exibe logos, contador, instruções ou qualquer outro conteúdo de demonstração do Vite; o conteúdo público é renderizado pelo site estático e as âncoras das seções apontam para destinos existentes.

- [ ] **T005 — Criar a base visual responsiva** (PRD: §11, SYS-003, SYS-004, SYS-005). Definir tokens CSS e estilos globais em `src/style.css`, aplicando somente a direção visual aprovada em T002.
  **Aprovação:** cores, tipografia, espaçamento e estados de foco têm regras consistentes; a base se adapta a celular, tablet e desktop, sem introduzir dependências de UI ou CSS não aprovadas.

- [ ] **T006 — Implementar o contato compartilhado pelo WhatsApp** (PRD: REQ-002, REQ-003, SYS-009; §10). Preparar o link oficial `https://wa.me/5547997628214`, codificar a mensagem pré-preenchida e manter número/alternativa de contato visíveis como texto acessível.
  **Aprovação:** todos os CTAs usam o número correto e uma mensagem pré-preenchida; o link não contém espaços ou pontuação no número, e o número continua legível e selecionável mesmo quando o WhatsApp não abre.

## Fase 3 — Conteúdo e jornadas

- [ ] **T007 — Implementar cabeçalho e navegação por seções** (PRD: §11, §12, REQ-003, REQ-013). Criar o cabeçalho em `src/main.ts` e seus estilos em `src/style.css`, com links para serviços, cobertura e FAQ e CTA de contato.
  **Aprovação:** cada link leva à seção correta; navegação e CTA são operáveis por teclado, têm rótulos claros e foco visível; o cabeçalho continua utilizável em telas pequenas.

- [ ] **T008 — Implementar o hero e seu placeholder visual** (PRD: §11, §12, REQ-001, REQ-002, REQ-003, REQ-011). Apresentar a proposta de entrega expressa regional, um complemento curto e o CTA principal. Usar imagem real somente se aprovada em T002; caso contrário, usar placeholder explicitamente ilustrativo.
  **Aprovação:** em telas comuns, a primeira dobra comunica o serviço e mostra o CTA principal; o CTA abre o contato definido em T006; nenhuma imagem sugere representar a equipe ou a frota real sem autorização.

- [ ] **T009 — Apresentar serviços e diferenciais** (PRD: §4, §11, §12, REQ-004, REQ-005). Distinguir entregas avulsas, contratos fixos/mensais para empresas e coleta/entrega de documentos ou encomendas; apresentar agilidade, cuidado/segurança e cobertura regional sem promessas não confirmadas.
  **Aprovação:** visitantes conseguem diferenciar as modalidades e identificar um caminho de contato; não há prazos, garantias ou resultados operacionais inventados.

- [ ] **T010 — Apresentar cobertura e informações operacionais** (PRD: §6, §7, REQ-006, REQ-007, SYS-007). Exibir as cidades confirmadas, horário, pagamentos e endereço somente em conformidade com as informações aprovadas.
  **Pré-requisito:** T001.
  **Aprovação:** Balneário Camboriú e Camboriú são as únicas cidades apresentadas como confirmadas; horário e pagamentos coincidem com o PRD corrigido; o endereço, quando exibido, é “R. 1950, 321 - Centro, Balneário Camboriú - SC”.

- [ ] **T011 — Implementar o FAQ** (PRD: §7, §11, §12, REQ-008). Responder como solicitar uma entrega, quais cidades são atendidas e quais formas de pagamento são aceitas. Direcionar dúvidas sem resposta confirmada ao WhatsApp, sem criar políticas.
  **Pré-requisito:** T001 e T010.
  **Aprovação:** as três perguntas mínimas têm respostas coerentes com o conteúdo da página; dúvidas não confirmadas levam ao contato; controles expansíveis, se usados, funcionam por teclado e têm rótulos acessíveis.

- [ ] **T012 — Implementar contato final e rodapé** (PRD: §6, §11, §12, REQ-003, REQ-009). Repetir CTA e dados de contato no rodapé em `src/main.ts`, mantendo estilos consistentes em `src/style.css`.
  **Pré-requisito:** T001 e T006.
  **Aprovação:** o rodapé apresenta endereço, horário, formas de pagamento e link para WhatsApp coerentes com as demais seções; dados de endereço e contato são texto selecionável; links sociais só aparecem se os perfis oficiais tiverem sido confirmados.

## Fase 4 — Metadados, qualidade e publicação

- [ ] **T013 — Atualizar metadados, idioma e ícone da página** (PRD: §10, REQ-012, SYS-008). Atualizar `index.html` com `pt-BR`, título, descrição e metadados Open Graph coerentes com o negócio e a região; atualizar `public/favicon.svg` com ícone aprovado ou fallback neutro; usar imagem de compartilhamento aprovada ou fallback neutro.
  **Aprovação:** título, descrição, idioma e favicon não são os valores/recursos de demonstração do scaffold; metadados de compartilhamento estão presentes e não usam imagem ou alegação não aprovada; não há marcação de cidades não confirmadas nem dados estruturados de avaliações.

- [ ] **T014 — Validar responsividade, acessibilidade, conteúdo e build** (PRD: §3, §9, §13, SYS-002 a SYS-009). Verificar a página em larguras móveis e desktop, teclado e tecnologias assistivas, principais navegadores atuais e fluxo de contato; corrigir problemas encontrados.
  **Aprovação:** `npm run build` conclui sem erros; em viewport de 320 px ou maior não há rolagem horizontal causada pelo layout nem conteúdo essencial cortado; foco, semântica, rótulos, textos alternativos e contraste atendem ao objetivo WCAG 2.2 AA; WhatsApp abre o destino correto e o número permanece acessível; não há coleta/persistência de dados de entrega, prova social não autorizada ou cidades não confirmadas. Registrar resultados das verificações e, quando mensurável, comparar LCP, INP e CLS aos objetivos do PRD.

- [ ] **T015 — Configurar e verificar a publicação estática** (PRD: §1, §10, SYS-001).
  **Pré-requisito:** T003 e T014.
  **Aprovação:** o build estático é publicado na plataforma escolhida sem exigir servidor de aplicação; a URL de preview/produção carrega a página e seus recursos, e os CTAs de contato continuam funcionando.
