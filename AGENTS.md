# Agent guide — FZ Concept

Read `DESIGN.md` before changing any UI. Use `.project/FZ flare.pdf` as the source for the agency's positioning, services, process, and voice. Use `.project/images` for project imagery; publish optimized assets from there under `public/images`.

## Build rules

- Preserve Next.js App Router, Tailwind, the existing English/French locale flow, and working routes.
- For public pages, navbar, and footer, use semantic HTML and CSS. Do not add shadcn components. Use Font Awesome for icons.
- For admin pages, follow the compact workspace direction in `DESIGN.md`. Preserve auth checks and the messages API. Use native controls and Font Awesome rather than shadcn elements.
- Keep the interface editorial: oxblood, paper, sand, muted brass, large photography, Fraunces headlines, Satoshi body text, and ample spacing. Follow `DESIGN.md` tokens and journey.
- Write specific, truthful copy. No invented project counts, awards, testimonials, or service claims. Use only the PDF's labelled photos as completed projects; other supplied images are atmospheric.
- Keep navigation, CTAs, legal links, and contact routes functional. Support keyboard access, visible focus, reduced motion, alt text, 44px touch targets, and 320px mobile width.
- Prefer small changes and existing patterns. Run lint/build and inspect the rendered page at mobile and desktop widths after visual edits.
- Keep commits focused. Do not stage unrelated user changes.
