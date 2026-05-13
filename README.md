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
- Supabase for anonymous portfolio discovery responses

## Structure

```txt
src/
  app/
    api/contact/route.ts
    api/discovery-response/route.ts
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
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

- `RESEND_API_KEY` must be created in the Resend dashboard.
- `CONTACT_TO_EMAIL` receives portfolio form messages.
- `CONTACT_FROM_EMAIL` is optional, but should use a verified Resend domain in production.
- If `CONTACT_FROM_EMAIL` is not set, the API route falls back to `Portfolio <onboarding@resend.dev>`.
- `SUPABASE_URL` is the Supabase project URL.
- `SUPABASE_SERVICE_ROLE_KEY` is used only by the backend API route. Never expose it with a `NEXT_PUBLIC_` prefix.

## Contact Form

The contact form sends a `POST` request to `/api/contact`.

Sensitive email logic runs server-side in `src/app/api/contact/route.ts`. API keys are never exposed to frontend components.

## Discovery Form

The discovery section asks anonymously how visitors found the portfolio and which country they are accessing from. It sends a `POST` request to `/api/discovery-response`, and the server saves the response in Supabase table `portfolio_discovery_responses`.

Create the table in Supabase before enabling the form in production:

```sql
create table if not exists public.portfolio_discovery_responses (
  id uuid primary key default gen_random_uuid(),
  source text not null,
  source_other text,
  country text not null,
  country_other text,
  page_path text,
  browser_language text,
  created_at timestamptz not null default now()
);
```

The form does not ask for name, email, phone, or manual IP collection. The Supabase service role key must stay only in `.env.local` and Vercel environment variables.

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
