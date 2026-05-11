# Rafael Freitas Portfolio

Personal portfolio for Rafael Freitas, built as a static frontend project with HTML, CSS and JavaScript.

## Technologies

- HTML5
- CSS3
- JavaScript
- Vercel Web Analytics
- Vercel Speed Insights

## Run Locally

Open `index.html` in the browser or serve the folder with any static file server.

No framework, bundler or build step is required.

## Deploy On Vercel

Deploy the repository as a static site on Vercel.

- Build command: leave empty
- Output directory: leave empty or use the project root

## Verify Vercel Speed Insights

1. Deploy the site to production on Vercel.
2. In the Vercel dashboard, enable Speed Insights for the project.
3. Open the published production URL.
4. Navigate through a few sections of the portfolio.
5. Inspect the deployed HTML and confirm the `/_vercel/speed-insights/script.js` script is present.
6. Wait for the data to appear in the Vercel dashboard under Speed Insights.

Speed Insights data may not appear in local development. Production traffic is the reliable place to validate metrics.

## Vercel Analytics

Este projeto usa:

- Vercel Web Analytics para visitantes e page views.
- Vercel Speed Insights para métricas de performance.

Como validar:

1. Fazer deploy em produção na Vercel.
2. Acessar o domínio publicado.
3. Navegar por algumas seções do site.
4. Aguardar alguns minutos para os dados aparecerem no painel da Vercel.
5. Conferir no DevTools > Network se os scripts abaixo estão carregando:
   - `/_vercel/insights/script.js`
   - `/_vercel/speed-insights/script.js`

Observação: os scripts da Vercel podem não funcionar corretamente em ambiente local, porque as rotas `/_vercel/...` dependem do ambiente publicado na Vercel.
