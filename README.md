# FZ Concept — Luxury Interior Design Website

Premium marketing website for **FZ Concept**, a Moroccan interior redesign agency. Built with a brown primary palette and gold accents, with a luxury-first UI system and smooth motion.

## Tech Stack

- **Next.js (App Router)** + **React**
- **Tailwind CSS** (CSS variables) + **shadcn/ui**
- **motion** (animations)
- **Neon Postgres** (contact submissions + managed admin auth)

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

- `POST /api/contact` Save contact form submissions to Neon Postgres
- `/api/auth/*` Neon Managed Auth handler
- `GET /api/admin/session` Check admin access
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

Use `.env.local` for local values (it’s ignored by Git via `.gitignore`).

```bash
# Neon (neon deploy supplies DATABASE_URL and NEON_AUTH_BASE_URL)
DATABASE_URL=
NEON_AUTH_BASE_URL=
NEON_AUTH_COOKIE_SECRET=

# Admin auth (server-only)
ADMIN_EMAIL_ALLOWLIST=

# Optional hardening (comma-separated origins)
ALLOWED_ORIGINS=
```

Notes:

- `NEON_AUTH_COOKIE_SECRET` must be at least 32 characters. Keep it server-only.
- Set `ADMIN_EMAIL_ALLOWLIST` to the comma-separated admin addresses. An empty allowlist denies dashboard access.
- Never commit database credentials or auth secrets.

## Neon Setup

Link this project to the Neon project and production branch, then configure Managed Auth:

```bash
neon link --project-id calm-shape-11505688 --branch production -y
neon config init --services auth
neon deploy
```

`neon deploy` pulls `DATABASE_URL` and `NEON_AUTH_BASE_URL` into `.env.local`. Add a random `NEON_AUTH_COOKIE_SECRET` of at least 32 characters there and set the same variable in the app host.

### Create the contact table

Run the checked-in migration against the linked branch with `npm run db:migrate`. It uses Neon’s direct connection when `DATABASE_URL_UNPOOLED` is available and is safe to rerun.

This migration creates an empty Neon table. Existing Supabase contact submissions are not copied.

### Admin account

Create the admin account in Neon Auth, then include its email in `ADMIN_EMAIL_ALLOWLIST`:

```bash
neon neon-auth user create --email you@example.com --name "Your Name"
```

Supabase Auth password hashes and sessions do not transfer. Set a new Neon Auth password for each moved account.

## Admin Dashboard

- Login at `/admin` with Neon Auth credentials.
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
