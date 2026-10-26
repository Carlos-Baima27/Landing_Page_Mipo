# Landing Page Mipo Express

Landing page institucional da Mipo Express, com informações sobre serviços, área de atendimento e contato pelo WhatsApp. O projeto usa Vite e TypeScript e é publicado como site estático no GitHub Pages.

## Tecnologias

- Vite
- TypeScript
- CSS

## Requisitos

- Node.js 22 ou superior
- npm

## Executar localmente

Instale as dependências:

```bash
npm ci
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador.

## Build de produção

Gere os arquivos estáticos:

```bash
npm run build
```

O site compilado fica no diretório `dist`. Para visualizar o build localmente:

```bash
npm run preview
```

## Publicação no GitHub Pages

O workflow em `.github/workflows/deploy.yml` executa o build e publica o diretório `dist` quando há um push para a branch `main`. Também é possível iniciar a publicação manualmente pela aba **Actions** do GitHub.

No repositório, configure:

1. Acesse **Settings → Pages**.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Envie as alterações para a branch `main` ou execute manualmente o workflow **Deploy to GitHub Pages**.

O endereço público esperado é:

<https://carlos-baima27.github.io/Landing_Page_Mipo/>

O caminho base `/Landing_Page_Mipo/` está configurado em `vite.config.ts` para que os arquivos do site funcionem no endereço de projeto do GitHub Pages.
