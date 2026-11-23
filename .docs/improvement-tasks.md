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

- [ ] **M004 — Personalizar mensagens dos CTAs por tipo de serviço** (PRD: REQ-002 a REQ-004). Fazer os CTAs de entregas avulsas e contratos empresariais iniciarem mensagens adequadas ao contexto, mantendo o mesmo número oficial e o contato visível como alternativa.
  **Pré-requisito:** M001.
  **Aprovação:** cada CTA abre o número correto com a mensagem correspondente corretamente codificada; o número continua acessível como texto se o WhatsApp não abrir.

- [ ] **M005 — Validar conteúdo, responsividade, acessibilidade e build** (PRD: SYS-002 a SYS-009 e §13). Executar o build e revisar links e âncoras, conteúdo em viewport de 320 px, navegação por teclado, foco visível, contraste, textos alternativos e comportamento dos CTAs. Acrescentar verificações automatizadas leves para as informações críticas, sem introduzir dependências desnecessárias.
  **Pré-requisitos:** M002, M003 e M004.
  **Aprovação:** `npm run build` conclui sem erros; não há divergências nos dados comerciais nem links/âncoras inválidos; a página funciona a partir de 320 px sem rolagem horizontal causada pelo layout; verificações de teclado e foco são aprovadas; as checagens automatizadas falham se as informações críticas forem alteradas incorretamente.
