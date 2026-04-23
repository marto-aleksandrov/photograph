# Photograph Agency Web App

Premium Next.js 14 App Router starter for a photo/video/editing agency with conversion-first UX.

## Stack Choice and Rationale
- **Framework:** Next.js 14 App Router for hybrid rendering, metadata API, route handlers, and easy Vercel deployment.
- **Styling:** Tailwind CSS with reusable UI primitives for fast iteration and a polished dark cinematic visual system.
- **Animation:** Framer Motion-ready architecture (Phase 1 scaffolding complete; deeper interactions in Phase 2+).
- **Email (Phase 2):** Resend + React Email templates.
- **Cart State (Phase 3):** Zustand.
- **Availability (Phase 2/3):** `react-day-picker` + Upstash/Vercel KV availability layer.
- **Deployment:** Vercel.

## Delivery Plan
1. **Phase 1 (this commit):** Foundation, design system, high-converting landing page, legal placeholders, SEO base.
2. **Phase 2:** Studio booking modal flow, availability management, admin auth, owner/client emails.
3. **Phase 3:** Equipment catalog, filters, cart workflow, equipment availability admin, emails.
4. **Phase 4:** Final SEO polish, JSON-LD, Lighthouse optimization, accessibility hardening.

## Environment Variables (Phase 2+)
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
RESEND_API_KEY=
OWNER_NOTIFICATION_EMAIL=
FROM_EMAIL=
ADMIN_PASSWORD_HASH=
KV_REST_API_URL=
KV_REST_API_TOKEN=
```

## Run Locally
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Quality Gates Per Phase
- `npm run typecheck`
- `npm run lint`
- `npm run build`
- Mobile/Desktop checks at 375px / 768px / 1440px
