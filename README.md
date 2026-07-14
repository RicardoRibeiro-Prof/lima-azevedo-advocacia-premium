# Lima & Azevedo Advocacia — Site Premium

Site institucional demonstrativo para escritório de advocacia, desenvolvido do zero com visual leve, moderno e premium.

## Tecnologias

- Vite
- React
- JavaScript
- React Router DOM
- Lucide React
- CSS responsivo com animações nativas

## Executar localmente

```bash
npm install
npm run dev
```

## Gerar versão de produção

```bash
npm run build
npm run preview
```

A pasta final será `dist`.

## Personalização

- Telefone, WhatsApp, e-mail e endereço: `src/data/siteData.js`
- Áreas de atuação: `src/data/siteData.js`
- Profissionais: `src/data/siteData.js`
- Cores e identidade: `src/styles/variables.css`
- Textos das páginas: `src/pages/`
- Imagens: URLs nos arquivos das páginas e em `siteData.js`

## Netlify

### GitHub

1. Envie o projeto para um repositório.
2. Importe o repositório no Netlify.
3. Build command: `npm run build`
4. Publish directory: `dist`

### Netlify CLI

```bash
npm install
npx netlify login
npx netlify init
npx netlify deploy --build --prod
```

O arquivo `netlify.toml` e a regra `public/_redirects` já estão configurados para as rotas React.

## Vercel

Importe o repositório e mantenha:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

O arquivo `vercel.json` já inclui a regra para rotas internas.

## Aviso

Nomes, profissionais, registros da OAB, contatos e demais informações são fictícios e devem ser substituídos antes da publicação real. O conteúdo é institucional e não representa promessa de resultado ou aconselhamento jurídico individualizado.
