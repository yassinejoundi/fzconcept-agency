# FZ Concept — Luxury Interior Design Website

Premium marketing website for **FZ Concept**, a Moroccan interior redesign agency. Built with a brown primary palette and gold accents, with a luxury-first UI system and smooth motion.

## Tech Stack

- **Next.js (App Router)** + **React**
- **Tailwind CSS** (CSS variables) + **shadcn/ui**
- **motion** (animations)
- **Supabase** (contact submissions + admin login)

## Routes

**Public**

- `/` Home
- `/services` Services
- `/portfolio` Portfolio
- `/about` About
- `/contact` Contact (submits to `/api/contact`)
- `/privacy-policy` Privacy Policy
- `/terms-of-service` Terms of Service

**Admin**

- `/admin` Admin login
- `/admin/dashboard` Admin dashboard (protected)

## API Routes

- `POST /api/contact` Save contact form submissions to Supabase
- `POST /api/admin/login` Login via Supabase Auth and set an HTTP-only session cookie
- `POST /api/admin/logout` Clear session cookie
- `GET /api/admin/messages` Fetch latest contact submissions (requires admin session cookie)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Environment Variables

Create a `.env` file at the project root (it’s ignored by Git via `.gitignore`).

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=

# Recommended server-only keys
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Admin auth (server-only)
ADMIN_SESSION_SECRET=
ADMIN_EMAIL_ALLOWLIST=

# Optional hardening (comma-separated origins)
ALLOWED_ORIGINS=
```

Notes:

- `ADMIN_SESSION_SECRET` must be set for admin login to work.
- `SUPABASE_SERVICE_ROLE_KEY` must be server-only and is used for admin reads.
- Never expose or commit `SUPABASE_SERVICE_ROLE_KEY`. If it was ever pasted into chat or logged, rotate it in Supabase.

## Supabase Setup

### 1) Create the table

Run this in Supabase SQL editor:

```sql
create extension if not exists pgcrypto;

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  reason text,
  location text,
  message text not null,
  website text,
  ip_address text,
  user_agent text,
  page_url text,
  status text default 'new'
);

alter table public.contact_submissions enable row level security;
```

### 2) RLS policy

This project saves contact form submissions through the Next API route. The recommended approach is:

- Use `SUPABASE_SERVICE_ROLE_KEY` server-side to insert/select (bypasses RLS), and keep RLS enabled for safety.

If you decide to insert with an anon key instead, you must create an `INSERT` policy for `anon`.

### 3) Create an admin user

Create an admin user in Supabase Auth (Email/Password). Then allow it in one of two ways:

- Set `ADMIN_EMAIL_ALLOWLIST` (recommended), e.g. `admin@fzconcept.com`
- Or leave `ADMIN_EMAIL_ALLOWLIST` empty to allow any valid Supabase user to log in

## Admin Dashboard

- Login at `/admin` with Supabase Auth credentials.
- Dashboard loads messages from `/api/admin/messages` and displays the latest submissions.

## Deployment

Deploy to Vercel (recommended):

- Set environment variables in the Vercel dashboard (do not rely on local `.env`).
- Ensure server-only variables are not prefixed with `NEXT_PUBLIC_`.

## Contact

- Twitter/X: `@mee_yassine`
- Instagram: `@yassine_joundi`
- LinkedIn: `Yassine Joundi`
- Email: `joundiyassine@outlook.com`

⭐ Star this repo if you find it helpful!
