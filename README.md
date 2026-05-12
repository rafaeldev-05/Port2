# Rafael Freitas Portfolio

Personal portfolio for Rafael Freitas, migrated to Next.js with App Router and TypeScript while preserving the original visual identity.

## Stack

- Next.js App Router
- TypeScript
- React
- Global CSS
- Vercel Analytics
- Vercel Speed Insights
- Vercel Serverless API Route for contact form email

## Structure

```txt
src/
  app/
    api/contact/route.ts
    globals.css
    layout.tsx
    page.tsx
  components/
  lib/
  types/
public/
  assets/
    profile-rafael.webp
    background-rafael.webp
    rafael.webp
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Create `.env.local` based on `.env.example`:

```txt
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=rafaelfreitas1009@gmail.com
CONTACT_FROM_EMAIL=Portfolio <noreply@yourdomain.com>
```

- `RESEND_API_KEY` must be created in the Resend dashboard.
- `CONTACT_TO_EMAIL` receives portfolio form messages.
- `CONTACT_FROM_EMAIL` is optional, but should use a verified Resend domain in production.
- If `CONTACT_FROM_EMAIL` is not set, the API route falls back to `Portfolio <onboarding@resend.dev>`.

## Contact Form

The contact form sends a `POST` request to `/api/contact`.

Sensitive email logic runs server-side in `src/app/api/contact/route.ts`. API keys are never exposed to frontend components.

## Vercel

Deploy as a Next.js project on Vercel.

Configure the environment variables in:

`Vercel > Project Settings > Environment Variables`

After changing environment variables, redeploy the project.

Vercel Analytics and Speed Insights are rendered in `src/app/layout.tsx` through:

- `@vercel/analytics/next`
- `@vercel/speed-insights/next`

## Security Notes

Frontend code is always visible in the browser. Sensitive logic must stay in API Routes, Server Components, server actions, webhooks, or other server-side boundaries.

This project keeps secrets in environment variables and validates/sanitizes contact form input on the server.

Basic security headers are configured in `next.config.ts`:

- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`

## Future SaaS Evolution

This architecture is ready to grow toward SaaS features such as:

- authentication
- dashboard
- checkout
- webhooks
- database integration
- members area
- terms and privacy pages

These features are intentionally not implemented yet.

## Author

Rafael Freitas
