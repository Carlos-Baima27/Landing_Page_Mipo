# Mipo Express

Landing page institucional da Mipo Express para apresentar os serviços de motoboy e entregas expressas em Balneário Camboriú e região. O site reúne informações sobre serviços, cobertura e formas de atendimento, com contato direto pelo WhatsApp.

## Recursos

- Layout responsivo para celular e desktop.
- Apresentação dos serviços de entrega avulsa, atendimento recorrente para empresas e coleta de documentos ou encomendas.
- Informações de cobertura e atendimento.
- Links para contato pelo WhatsApp e localização no Google Maps.
- Metadados para mecanismos de busca e compartilhamento.

## Tecnologias

- [Vite](https://vite.dev/) para desenvolvimento e build.
- [TypeScript](https://www.typescriptlang.org/) para a lógica da página.
- CSS para estilos e layout responsivo.
- [Bootstrap Icons](https://icons.getbootstrap.com/) para ícones.

## Requisitos

- Node.js 22 ou superior.
- npm.

## Desenvolvimento local

Clone o repositório, acesse a pasta do projeto e instale as dependências:

```bash
npm ci
```

Inicie o servidor local:

```bash
npm run dev
```

Abra no navegador o endereço exibido pelo Vite no terminal.

## Build e pré-visualização

Gere a versão de produção:

```bash
npm run build
```

O build executa a verificação de tipos do TypeScript e gera os arquivos estáticos em `dist/`. Para executar uma pré-visualização local desse build:

```bash
npm run preview
```

Para validar os dados comerciais, os links internos, os destinos de WhatsApp e os requisitos mínimos de
responsividade registrados no código, execute:

```bash
npm test
```

## Estrutura do projeto

```text
.
├── .github/workflows/deploy.yml  # Publicação no GitHub Pages
├── public/                       # Arquivos estáticos públicos
├── src/
│   ├── assets/                   # Imagens e logotipo
│   ├── main.ts                   # Conteúdo e estrutura da página
│   └── style.css                 # Estilos e layout responsivo
├── index.html                    # Documento HTML e metadados
├── package.json                  # Dependências e comandos
├── vercel.json                   # Configuração de build da Vercel
└── vite.config.ts                # Configuração do Vite e caminho-base
```

## Publicação

### Vercel — plataforma oficial

Importe o repositório na Vercel. A configuração do projeto define:

- Framework: Vite.
- Comando de build: `npm run build`.
- Diretório de saída: `dist`.
- Comando de instalação: `npm install`.

Na Vercel, o site usa `/` como caminho-base.

### GitHub Pages

O workflow [deploy.yml](./.github/workflows/deploy.yml) publica o conteúdo de `dist/` ao enviar alterações para a branch `main`. Também pode ser iniciado manualmente pela aba **Actions** do GitHub.

Para habilitar a publicação, acesse **Settings → Pages** no repositório e selecione **GitHub Actions** como fonte de build e deploy.

No GitHub Pages, o caminho-base `/Landing_Page_Mipo/` é configurado automaticamente pelo Vite durante a execução do GitHub Actions. A página publicada fica em:

<https://carlos-baima27.github.io/Landing_Page_Mipo/>

## Manutenção do conteúdo

- Edite textos, links e seções em [`src/main.ts`](./src/main.ts).
- Atualize cores, espaçamentos e comportamento responsivo em [`src/style.css`](./src/style.css).
- Atualize título, descrição e metadados de compartilhamento em [`index.html`](./index.html).
- Os dados comerciais críticos podem ser validados com `npm run check:content`; o comando também é executado automaticamente antes do build.
- Ao substituir imagens em `src/assets/`, confira e atualize os imports correspondentes em `src/main.ts`.
