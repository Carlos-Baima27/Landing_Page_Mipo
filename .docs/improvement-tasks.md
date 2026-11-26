# Tarefas de melhoria — Landing page Mipo

Lista de próximas etapas baseada na revisão do PRD e da implementação atual. O PRD continua sendo a referência para o escopo; informações comerciais só devem ser alteradas após confirmação da Mipo.

## Como executar

- Execute as tarefas em ordem e marque `[x]` apenas depois de cumprir os critérios de aceite.
- Não publique horários, cidades atendidas ou alegações comerciais que ainda não tenham sido confirmados.
- Preserve o escopo de site estático e contato direto pelo WhatsApp.

## Fase 1 — Confirmar informações comerciais

- [x] **M001 — Confirmar horário, cobertura e alegações comerciais** (PRD: §6, §9, §13 e SYS-007). Validar com a Mipo o horário de atendimento, as cidades atendidas e o texto permitido sobre agilidade e segurança. Resolver especialmente a divergência entre 07h–00h no PRD e “24 horas” no site, e entre as cidades confirmadas e a expressão “e Região”.
  **Aprovação:** há confirmação registrada para cada informação; nenhuma dúvida é resolvida por suposição.

### Confirmação registrada — M001

- **Data da confirmação:** 22/11/2026
- **Fonte:** Confirmação direta da Mipo pelo WhatsApp
- **Horário:** Todos os dias, 24h
- **Cobertura pública:** Balneário Camboriú e região
- **Alegação aprovada sobre agilidade:** Agilidade na entrega
- **Alegação aprovada sobre segurança:** Cuidado e segurança no manuseio e na entrega
- **Telefone oficial:** +55 47 99762-8214
- **Endereço publicado:** R. 1950, 321 - Centro, Balneário Camboriú - SC, 88330-470

## Fase 2 — Alinhar conteúdo e documentação

- [x] **M002 — Sincronizar as informações públicas com os dados confirmados** (PRD: REQ-005 a REQ-009, SYS-007 e SYS-008). Atualizar a página, FAQ, rodapé, metadados e dados estruturados em `src/main.ts` e `index.html`. Reduzir a duplicação de informações comerciais ou adicionar uma verificação que detecte divergências entre esses locais.
  **Pré-requisito:** M001.
  **Aprovação:** todas as ocorrências de horário, cobertura, telefone, endereço e alegações correspondem às confirmações; os dados estruturados não contradizem o conteúdo visível.

- [x] **M003 — Atualizar a documentação para o estado atual do projeto** (PRD: §2 e §10; README; `.docs/tasks.md`). Corrigir a descrição de scaffold não implementado, revisar o status do PRD e esclarecer qual plataforma de hospedagem é a oficial, mantendo documentação de plataformas alternativas somente se ainda forem suportadas.
  **Pré-requisito:** M001.
  **Aprovação:** PRD, tarefas e README descrevem de forma coerente o estado implementado e o processo de publicação vigente.

## Fase 3 — Melhorar o contato e validar a entrega

- [x] **M004 — Personalizar mensagens dos CTAs por tipo de serviço** (PRD: REQ-002 a REQ-004). Fazer os CTAs de entregas avulsas e contratos empresariais iniciarem mensagens adequadas ao contexto, mantendo o mesmo número oficial e o contato visível como alternativa.
  **Pré-requisito:** M001.
  **Aprovação:** cada CTA abre o número correto com a mensagem correspondente corretamente codificada; o número continua acessível como texto se o WhatsApp não abrir.

- [x] **M005 — Validar conteúdo, responsividade, acessibilidade e build** (PRD: SYS-002 a SYS-009 e §13). Executar o build e revisar links e âncoras, conteúdo em viewport de 320 px, navegação por teclado, foco visível, contraste, textos alternativos e comportamento dos CTAs. Acrescentar verificações automatizadas leves para as informações críticas, sem introduzir dependências desnecessárias.
  **Pré-requisitos:** M002, M003 e M004.
  **Aprovação:** `npm run build` conclui sem erros; não há divergências nos dados comerciais nem links/âncoras inválidos; a página funciona a partir de 320 px sem rolagem horizontal causada pelo layout; verificações de teclado e foco são aprovadas; as checagens automatizadas falham se as informações críticas forem alteradas incorretamente.

## Fase 4 — Planejar a nova identidade visual

- [ ] **M006 — Aprovar a direção de arte 3D e o plano de ativos** (PRD: §11, “Evolução visual proposta”). Definir referências de estilo para uma identidade 3D urbana, quais elementos serão ilustrados e se haverá fotos ou vídeos reais. Fotos e vídeos da operação só podem ser usados se fornecidos e autorizados; sem esse material, a cena deve ser claramente estilizada e não sugerir que retrata a equipe ou a frota real.
  **Pré-requisitos:** M005.
  **Aprovação:** direção de arte e fontes dos ativos estão registradas; há uma alternativa visual definida para mídias reais indisponíveis; paleta, conteúdo comercial e escopo estático continuam preservados.

- [ ] **M007 — Preparar e otimizar os ativos visuais** (PRD: §11, “Imagens” e “Evolução visual proposta”; SYS-005). Criar ou selecionar a ilustração 3D principal e, se aprovados e disponíveis, os vídeos e imagens de apoio. Preparar versões responsivas, pôster estático para vídeo, textos alternativos quando informativos e fallback para mídia indisponível. Não adicionar dependências pesadas sem necessidade demonstrada.
  **Pré-requisito:** M006.
  **Aprovação:** ativos e permissões de uso estão confirmados; imagens e vídeos estão otimizados; cada vídeo tem fallback estático e nenhum ativo apresenta placeholder como registro real da operação.

## Fase 5 — Implementar a experiência visual

- [ ] **M008 — Modernizar o hero com composição 3D** (PRD: §11, “Hero” e “Evolução visual proposta”). Atualizar a composição do hero para integrar a cena 3D aprovada com o título, a descrição e o CTA de WhatsApp, mantendo hierarquia clara, contraste e carregamento eficiente em desktop e celular.
  **Pré-requisito:** M007.
  **Aprovação:** a cena se integra à identidade visual aprovada; o CTA permanece imediatamente identificável; em telas estreitas o conteúdo não é cortado nem causa rolagem horizontal; há fallback quando o ativo não carregar.

- [ ] **M009 — Adicionar revelações e movimento vinculados à rolagem** (PRD: §11, “Movimento ao rolar” e “Acessibilidade e controle”; SYS-003 a SYS-005). Implementar aparições progressivas de seções e movimento sutil dos elementos visuais aprovados. O movimento deve ser decorativo, não bloquear navegação ou foco, e ser reduzido ou removido quando `prefers-reduced-motion` estiver ativo.
  **Pré-requisito:** M008.
  **Aprovação:** conteúdo continua disponível sem animação; preferência por movimento reduzido é respeitada; movimento não causa deslocamentos de layout, prejudica leitura ou interação, nem introduz rolagem horizontal.

- [ ] **M010 — Integrar vídeo de apoio com fallback** (PRD: §11, “Vídeo” e “Desempenho e responsividade”; SYS-005). Integrar vídeos curtos somente se houver mídia aprovada e otimizada. Usar reprodução sem áudio automático, pôster estático, carregamento eficiente e alternativa para dispositivos ou contextos em que o vídeo não seja reproduzido. Se não houver vídeo aprovado, manter a composição estática/3D definida em M007 e registrar a tarefa como não aplicável, sem bloquear a conclusão visual.
  **Pré-requisito:** M007; pode ser executada após M009.
  **Aprovação:** vídeo, se presente, não é necessário para entender a página, não toca áudio automaticamente, tem fallback visível e não degrada de forma relevante o carregamento; sem ativo aprovado, a alternativa estática permanece funcional.

## Fase 6 — Validar e concluir a evolução

- [ ] **M011 — Revisar a experiência visual em dispositivos e acessibilidade** (PRD: §11, “Acessibilidade e controle” e “Desempenho e responsividade”; SYS-002 a SYS-005). Validar hero, movimento e eventuais vídeos em larguras a partir de 320 px, navegação por teclado, foco, leitores de tela, contraste e `prefers-reduced-motion`. Verificar carregamento com mídia lenta ou indisponível e corrigir problemas introduzidos pelas tarefas visuais.
  **Pré-requisitos:** M008, M009 e M010.
  **Aprovação:** não há conteúdo essencial inacessível, controles continuam operáveis, a versão com movimento reduzido é utilizável, a página não apresenta rolagem horizontal indevida e o build/testes existentes passam.
