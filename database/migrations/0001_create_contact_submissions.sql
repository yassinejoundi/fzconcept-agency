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
  status text not null default 'new'
);
