# ⚠️ DO NOT PUBLISH THIS SITE — every word of its content is fictional

**Status (2026-09-08):** never deployed, never used, and flagged by the 2026-09-06
portfolio audit as a candidate for deletion. **Deleting it is Alex's decision** —
this file exists so nobody deploys it by accident in the meantime.

## What this folder is

A `create-next-app` demo ("APEX Consulting", Next.js 16 + Tailwind 4 + framer-motion)
generated on 2026-06-08 as a design exercise. Two commits, nothing since.

## Why it must not go live as-is

Everything in `lib/constants.ts` is invented placeholder copy, not facts about
Kpakpo's Consulting or any real client:

| Section | Fabricated content |
|---|---|
| `STATS` | "200+ clients served", "$2B+ revenue generated", "94% client retention", "16+ years" |
| `CASE_STUDIES` | "Rebuilding a $4B bank", "40 hospital systems", "42% productivity gain" — no such engagements exist |
| `TEAM` | "Kwame Asante", "Isabelle Laurent" ("Former McKinsey"), "Marcus Webb" — people who do not exist |
| `TESTIMONIALS` | "Sarah Chen, CEO NorthStar Capital", "Thomas Brandt, CTO Meridian Health Group", "Amara Diallo, COO Vantage Industries" — invented people at invented companies |

Publishing invented testimonials, client counts and revenue figures under a
consulting brand is a misrepresentation problem, not a styling problem.

Also: the contact form in `components/sections/CTA.tsx` does
`onSubmit={(e) => e.preventDefault()}` — it submits **nowhere**. Any lead who
filled it in would be silently discarded.

## Where it lives

- Local: this folder (`~/Document on MAC/Kpakpo's Consulting/apex-consulting`)
- Remote: `https://github.com/NiiKpakpoe/Kpakpo-sconsulting` — **PUBLIC**, in sync
  with local `main` (last push 2026-06-08). The fictional content is therefore
  already visible on GitHub, though only as source, not as a running site.
- Deploy: none found — no `vercel.json`, no `.vercel/`, no `.github/workflows`,
  no `netlify.toml`. (Whether a Vercel/Netlify project was ever attached in a
  dashboard cannot be determined from this machine.)

## Options for Alex

1. **Delete** — `rm -rf` this folder and archive or delete the GitHub repo
   (`gh repo delete NiiKpakpoe/Kpakpo-sconsulting` or Settings → Danger Zone).
   Nothing else in the portfolio depends on it (0 references to `apex-consulting`
   in any other project's code).
2. **Keep as a design reference only** — leave it, keep this file, make the
   GitHub repo private (Settings → Danger Zone → Change visibility).
3. **Repurpose** into a real Kpakpo's Consulting site — replace every entry in
   `lib/constants.ts` with true content, wire the CTA form to a real endpoint
   (the audit's suggestion was Formaloo + TidyCal, the same stack sentinel-ra
   already uses), and only then think about deploying.

Until one of those happens: **do not deploy, do not link to it, do not share it.**
