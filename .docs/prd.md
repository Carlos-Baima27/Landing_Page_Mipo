# PRD — Landing Page Mipo

**Status:** Rascunho para validação  
**Data:** 25/10/2026  
**Produto:** Página institucional e de conversão da Mipo Express
**Mercado inicial:** Balneário Camboriú e Camboriú, Santa Catarina

## 1. Resumo do produto

A Mipo terá uma landing page responsiva para apresentar seu serviço de motoboy e entregas expressas e transformar visitantes em contatos pelo WhatsApp. A página atenderá tanto empresas que precisam de entregas recorrentes ou avulsas quanto pessoas físicas com necessidades pontuais.

O caminho principal deve ser direto: entender o serviço e a cobertura, tocar em uma chamada para ação (CTA) e iniciar uma conversa no WhatsApp com uma mensagem de cotação já preenchida. A página não fará cotações automáticas, pagamentos ou agendamentos online.

## 2. Contexto e estado atual

O material de descoberta descreve a proposta comercial, o público, as seções desejadas e alguns dados operacionais. A inspeção do workspace mostra que o site ainda não foi implementado: o código atual é o scaffold padrão do Vite, com conteúdo de demonstração e sem funcionalidades da Mipo.

### Fatos observados no workspace

- O projeto usa Vite e TypeScript; a interface inicial é gerada em `src/main.ts` e estilizada em `src/style.css`.
- O comando de build configurado executa `tsc` e, em seguida, `vite build`.
- Tailwind CSS não está listado nas dependências atuais. A escolha de usar CSS simples ou adicionar Tailwind não está tomada; este PRD considera CSS simples como a opção inicial, sem introduzir uma dependência não necessária.
- `index.html` ainda tem idioma `en`, título “pagemipo” e metadados padrão/incompletos para o negócio.
- As imagens e ícones existentes são recursos do scaffold e não constituem identidade visual ou fotografia da Mipo.

## 3. Objetivos

1. Gerar contatos e pedidos de cotação pelo WhatsApp.
2. Explicar rapidamente os serviços, os diferenciais e a área atendida.
3. Comunicar informações operacionais de forma clara e confiável.
4. Oferecer uma experiência consistente em celular, tablet e desktop.
5. Preparar a página para descoberta em buscas locais e compartilhamento em redes sociais.

### Indicadores de sucesso

- O CTA principal abre uma conversa com o número oficial e uma mensagem inicial preenchida em todos os dispositivos suportados.
- Uma pessoa visitante consegue identificar o serviço, as cidades confirmadas e como solicitar uma entrega sem precisar navegar para outra página.
- Todos os links e controles podem ser usados por toque, teclado e leitor de tela.
- A página não apresenta depoimentos, avaliações ou métricas sem evidência e autorização para publicação.
- A página é utilizável em larguras a partir de 320 px sem rolagem horizontal causada pelo layout.

## 4. Público e necessidades

### Empresas e comércio local

Restaurantes, lojas, farmácias, escritórios e e-commerces que precisam de entregas avulsas ou de uma solução recorrente. Precisam entender rapidamente como contratar e iniciar uma conversa para solicitar uma cotação ou discutir um contrato.

### Pessoas físicas

Pessoas que precisam enviar ou retirar documentos, chaves ou encomendas na região. Precisam confirmar se a cidade é atendida e pedir o serviço com poucos passos.

## 5. Escopo

### Dentro do escopo

- Landing page de uma página, em português do Brasil.
- Apresentação dos serviços avulsos e recorrentes.
- Apresentação dos benefícios e da cobertura confirmada.
- CTAs para iniciar contato pelo WhatsApp.
- FAQ com informações operacionais confirmadas.
- Endereço, horário, formas de pagamento e links de contato no rodapé.
- Metadados básicos para mecanismos de busca e compartilhamento social.
- Layout responsivo e acessível.
- Uso temporário de placeholders claramente identificados até a entrega de fotos reais.

### Fora do escopo inicial

- Cadastro, login ou área do cliente.
- Checkout, cobrança ou pagamento dentro do site.
- Cotação automática, cálculo de preço, rastreamento ou gestão de entregas.
- Formulário que armazene dados pessoais ou pedidos no próprio site.
- Painel administrativo ou integração com sistema de logística.
- Publicação de avaliações, depoimentos ou métricas ainda não verificados.
- Promessa de prazo de coleta/entrega, seguro, rastreio ou cobertura adicional sem confirmação comercial.

## 6. Informações comerciais confirmadas

| Informação                          | Valor / regra                                             |
| ----------------------------------- | --------------------------------------------------------- |
| Nome do negócio                     | Mipo                                                      |
| WhatsApp de atendimento             | +55 47 99762-8214                                         |
| Horário                             | Todos os dias, das 07h às 00h                             |
| Formas de pagamento                 | Dinheiro, Pix e Cartão                                    |
| Endereço informado                  | R. 1950, 321 - Centro, Balneário Camboriú - SC            |
| Cidades confirmadas para divulgação | Balneário Camboriú e Camboriú                             |
| Outras cidades                      | Não divulgar até confirmação                              |
| Fotos reais                         | Serão fornecidas posteriormente; usar placeholders até lá |
| Depoimentos e métricas              | Omitir até existirem conteúdos verificáveis e autorizados |
| Identidade visual                   | Direção visual e paleta proposta aprovadas; logo e fotos reais ainda não fornecidos |

## 7. Jornadas principais

### Jornada A — Pessoa física solicita uma entrega (P1)

1. A pessoa acessa a página, geralmente pelo celular.
2. Entende que a Mipo realiza entregas expressas e identifica se sua cidade está na cobertura divulgada.
3. Toca em “Pedir motoboy pelo WhatsApp”.
4. O WhatsApp abre uma conversa com a Mipo e uma mensagem inicial preenchida.
5. A pessoa completa os detalhes e envia a mensagem pelo próprio WhatsApp.

**Critério de aceite:** o link abre o número correto e o texto aparece preenchido sem exigir cadastro no site.

### Jornada B — Empresa avalia contratação recorrente (P1)

1. A empresa consulta a seção de serviços e identifica a opção de contrato fixo/mensal.
2. Consulta as informações de atendimento e pagamento disponíveis.
3. Usa o CTA de contato para conversar com a Mipo sobre sua necessidade.

**Critério de aceite:** a página diferencia claramente serviço avulso de contratação recorrente e oferece um caminho de contato para ambos.

### Jornada C — Visitante confirma informações operacionais (P2)

1. A pessoa consulta cobertura, horário, pagamento e FAQ.
2. Se a informação atender à sua necessidade, inicia a conversa pelo WhatsApp.
3. Se a dúvida não estiver respondida, pode contatar a Mipo pelo mesmo canal.

**Critério de aceite:** as informações confirmadas aparecem em texto legível e não dependem exclusivamente de ícones ou imagens.

## 8. Requisitos funcionais

- **REQ-001 — Apresentação da proposta:** a página deve explicar que a Mipo oferece serviço de motoboy/entregas expressas na região de Balneário Camboriú.
- **REQ-002 — Contato por WhatsApp:** os CTAs de contato devem apontar para o número `+55 47 99762-8214` e abrir uma mensagem pré-preenchida, por exemplo: “Olá! Gostaria de cotar uma entrega com a Mipo.”
- **REQ-003 — CTA consistente:** o CTA principal deve ser visível na primeira dobra em telas comuns e deve haver acesso ao contato após as seções de serviços e informações finais.
- **REQ-004 — Serviços:** a página deve apresentar entregas expressas avulsas, contratos fixos/mensais para empresas e coleta/entrega de documentos ou encomendas.
- **REQ-005 — Diferenciais:** a página deve explicar agilidade no atendimento, segurança no manuseio/entrega e cobertura regional, sem afirmar tempos, garantias ou resultados não confirmados.
- **REQ-006 — Área de cobertura:** a página deve listar Balneário Camboriú e Camboriú como cidades confirmadas. Outras localidades só podem ser incluídas após confirmação da Mipo.
- **REQ-007 — Informações operacionais:** a página deve informar atendimento todos os dias, das 07h às 00h, e pagamento em dinheiro, Pix ou Cartão.
- **REQ-008 — FAQ:** a página deve responder, no mínimo, como solicitar uma entrega, quais cidades estão confirmadas e quais formas de pagamento são aceitas. Dúvidas sem resposta confirmada devem direcionar a pessoa ao WhatsApp, sem inventar políticas.
- **REQ-009 — Contato e localização:** o rodapé deve apresentar o endereço informado, o horário e um link para o WhatsApp. Endereço e dados de contato devem ser texto selecionável, não parte de uma imagem.
- **REQ-010 — Prova social:** depoimentos, avaliações, números de entregas e tempos médios não devem ser exibidos enquanto não forem fornecidos, verificados e autorizados.
- **REQ-011 — Imagens temporárias:** antes da entrega de fotos reais, placeholders devem preservar a composição visual sem sugerir que representam a frota ou a equipe real.
- **REQ-012 — Metadados de compartilhamento:** a página deve ter título, descrição e metadados Open Graph coerentes com a Mipo e com o serviço local.
- **REQ-013 — Navegação por seções:** se houver navegação interna, os links devem levar às seções correspondentes e funcionar em telas pequenas, teclado e tecnologias assistivas.

## 9. Requisitos de sistema e qualidade

- **SYS-001 — Plataforma:** entregar como site estático, sem exigir servidor de aplicação para renderizar as informações públicas.
- **SYS-002 — Navegadores:** funcionar nas versões atuais dos principais navegadores móveis e desktop (Chrome, Safari, Firefox e Edge).
- **SYS-003 — Responsividade:** suportar viewport a partir de 320 px; adaptar navegação, tipografia, espaçamento, imagens e CTAs para celular, tablet e desktop.
- **SYS-004 — Acessibilidade:** buscar conformidade WCAG 2.2 nível AA, com contraste adequado, estrutura semântica, foco visível, operação por teclado, textos alternativos úteis e rótulos acessíveis.
- **SYS-005 — Desempenho:** evitar dependências e imagens desnecessariamente pesadas. Como objetivo inicial, buscar LCP ≤ 2,5 s, INP ≤ 200 ms e CLS ≤ 0,1 em condições representativas; reavaliar com dados reais de uso quando houver tráfego.
- **SYS-006 — Privacidade:** não coletar nem persistir informações de entrega na landing page. A pessoa decide o que enviar diretamente pelo WhatsApp.
- **SYS-007 — Integridade do conteúdo:** dados comerciais, cobertura e alegações devem corresponder às informações aprovadas pela Mipo. Não usar conteúdo demonstrativo do scaffold em produção.
- **SYS-008 — SEO local:** usar idioma `pt-BR`, título e descrição próprios, conteúdo textual rastreável e referências naturais a Balneário Camboriú e Camboriú. Não criar páginas ou marcações de localidade para cidades não confirmadas.
- **SYS-009 — Falhas de integração:** se o WhatsApp não puder ser aberto pelo navegador, o número e uma alternativa copiável/visível devem continuar acessíveis na página.

## 10. Diretrizes técnicas

### Base observada e abordagem recomendada

- Manter Vite e TypeScript, que já existem no projeto.
- Implementar a página em HTML semântico criado pelo entry point atual, seguindo os padrões já usados no projeto.
- Usar CSS simples e tokens CSS para cores, tipografia, espaçamento e estados. Tailwind não está instalado; só deve ser adicionado se houver decisão explícita de adotá-lo.
- Evitar backend, banco de dados, bibliotecas de UI ou dependências de formulário, pois o escopo inicial é uma página estática cujo contato acontece no WhatsApp.
- Substituir os elementos de demonstração do Vite (título, logos, contador e conteúdo de documentação) antes de publicar.
- Atualizar o título, idioma, descrição, favicon e metadados do `index.html`. O favicon/ícone final depende da identidade aprovada.
- Hospedagem estática escolhida: Vercel. Para este projeto Vite, usar `npm run build` como comando de build e `dist` como diretório de saída; não há configuração `vite.config.*` personalizada no workspace.

### Link de contato

- Usar link no formato oficial `https://wa.me/5547997628214` e codificar corretamente a mensagem pré-preenchida.
- Não incluir espaços, parênteses ou hífens no número usado no caminho do link.
- Testar o destino em celular com WhatsApp instalado e em desktop, incluindo o comportamento de fallback quando o aplicativo não estiver disponível.
- Manter o contato visível também como texto acessível, não apenas como ícone.

### SEO e compartilhamento

- Definir título e descrição em português, mencionando o serviço e a região sem repetição artificial de palavras-chave.
- Incluir Open Graph com título, descrição e imagem de compartilhamento aprovada; enquanto não houver imagem da marca, usar um fallback neutro sem simular fotografia real.
- Garantir que o conteúdo essencial esteja presente no HTML renderizado pelo site estático e que os links tenham rótulos descritivos.
- Não publicar dados estruturados de avaliações, classificações ou endereço comercial como estabelecimento local sem confirmar os requisitos e a exatidão dos dados.

## 11. Instruções visuais

### Direção visual aprovada

A direção e a paleta abaixo foram aprovadas para orientar a landing page. Isso não significa que exista um logo ou que os placeholders representem a equipe ou a frota reais:

- **Personalidade:** ágil, confiável, próxima e urbana; evitar aparência genérica de aplicativo de entrega ou estética excessivamente tecnológica.
- **Paleta aprovada:** fundo claro `#FFFDF8`, texto principal azul-marinho/grafite `#17212B`, cor de ação laranja `#F26A21` e superfície secundária `#F2F4F5`. Verificar contraste antes de publicar; logo, fotos reais e demais aplicações de marca ainda não foram fornecidos.
- **Tipografia candidata:** fonte sans-serif legível e de ampla disponibilidade; títulos com peso forte, corpo com tamanho confortável e hierarquia clara.
- **Composição:** conteúdo em blocos curtos e escaneáveis, largura controlada para leitura, bastante respiro e alinhamento consistente. Evitar excesso de cartões, sombras e elementos decorativos.
- **Cabeçalho:** nome/logo da Mipo, navegação para serviços, cobertura e FAQ (se houver espaço) e CTA de WhatsApp destacado.
- **Hero:** mensagem direta sobre entrega expressa na região, complemento curto que explique o benefício, CTA primário “Pedir motoboy pelo WhatsApp” e área reservada para foto real ou placeholder ilustrativo identificado.
- **Benefícios e serviços:** separar claramente vantagens e modalidades; usar ícones simples apenas como apoio a títulos e texto.
- **Cobertura:** dar destaque às cidades confirmadas; não mostrar mapa ou raio de atendimento que sugira cobertura não aprovada.
- **Prova social:** omitir a seção por padrão até receber avaliações ou métricas comprováveis. Não usar nomes, rostos, estrelas, logos de clientes ou números fictícios.
- **FAQ:** perguntas curtas com respostas objetivas; controles expansíveis, se usados, devem ser operáveis por teclado e anunciados corretamente por leitores de tela.
- **Rodapé:** repetir contato, horário, formas de pagamento, endereço e links sociais somente quando os perfis oficiais forem confirmados.
- **Mobile:** priorizar leitura e CTA acessível com o polegar, sem cobrir conteúdo; empilhar seções, manter áreas de toque confortáveis e evitar menus ou animações que atrasem o contato.
- **Estados e movimento:** definir estados de hover, foco e pressionado para links e botões. Movimento deve ser discreto, não essencial à compreensão e respeitar `prefers-reduced-motion`.
- **Imagens:** substituir placeholders por fotos reais da equipe/frota quando fornecidas e autorizadas. Otimizar dimensões e formato sem cortar elementos importantes; fornecer texto alternativo contextual.

## 12. Conteúdo e estrutura sugeridos

1. Cabeçalho e navegação.
2. Hero com proposta de valor e CTA para WhatsApp.
3. Diferenciais: agilidade, cuidado/segurança e atendimento regional.
4. Serviços: entrega avulsa, contrato recorrente e coleta/entrega.
5. Cobertura confirmada: Balneário Camboriú e Camboriú.
6. FAQ: solicitação, cidades atendidas e pagamentos.
7. Contato final com CTA.
8. Rodapé com endereço, horário, pagamentos e links oficiais confirmados.

Não incluir seção de depoimentos ou métricas até que conteúdo verificável seja disponibilizado.

## 13. Critérios de aceite

- [ ] O site apresenta a Mipo como serviço de motoboy/entrega expressa, não como o template Vite.
- [ ] O CTA principal abre o WhatsApp `+55 47 99762-8214` com mensagem de cotação preenchida.
- [ ] As modalidades avulsa e recorrente são distintas e compreensíveis.
- [ ] Balneário Camboriú e Camboriú são as únicas cidades apresentadas como confirmadas.
- [ ] Horário (todos os dias, 07h–00h), dinheiro, Pix e Cartão aparecem sem divergência entre seções.
- [ ] Endereço exibido corresponde a R. 1950, 321 - Centro, Balneário Camboriú - SC.
- [ ] Não existem depoimentos, métricas, avaliações ou imagens que aparentem ser reais sem validação.
- [ ] A página funciona em telas de 320 px ou maiores, sem conteúdo essencial cortado ou rolagem horizontal.
- [ ] Navegação e CTAs são utilizáveis por teclado e têm foco visível; conteúdo essencial tem contraste e semântica adequados.
- [ ] Metadados, idioma e título foram atualizados e o build de produção conclui sem erros.

## 14. Pendências e decisões

1. Aprovar ou substituir a direção visual proposta; fornecer logo, cores, fontes e eventuais referências.
2. Fornecer fotos reais da equipe/frota e autorizar seu uso.
3. Confirmar outras cidades, se houver, antes de anunciá-las como cobertas.
4. Fornecer perfis oficiais de redes sociais, caso devam aparecer no rodapé.
5. Revisar textos comerciais finais, especialmente alegações sobre agilidade e segurança, para confirmar que refletem a operação real.
