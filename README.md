# chrisdabel.com

Personal engineering site for Chris Dabel, data engineer/architect.

## Purpose

A professional hub whose primary subject is data-architecture work. It should
give a holistic picture of an engineer/architect/builder, not a developer-only
portfolio. The site supports an active job search.

## Domain and DNS

- Domain: chrisdabel.com, registered 2026-10-23 via Route 53.
- DNS: Route 53 hosted zone.
- To verify in the Registered domains console: auto-renew on, privacy
  protection on. Transfer lock runs about 60 days; no plan to move registrars.

## Decisions

### Made

- Data-architecture work is the dominant frame.
- Outbound links live in a short "Elsewhere" block, not full sections:
  - CritPages (critpages.com): Chris's own product, an app for sharing
    unpublished work for critique. One sentence on stack and what was built.
    Under development.
  - Substack (enternyxus.com): fiction, poetry, essays under the pen name
    Cael Lawenu. Pen name may be publicly linked to the real name.
- Hosting: GitHub Pages, built by GitHub Actions (`.github/workflows/deploy.yml`)
  on every push to `main`. Decided 2026-10-23.
- Static-site tooling: Astro. Decided 2026-10-23.
- DNS records live in Route 53 and are managed by Terraform in `terraform/`.
  DNS stays per-site: each site repo owns its own hosted zone, as critpages.com
  and raisingandconnecting.com already do. Decided 2026-10-23.
- Repo is public from the start.
- Thesis, decided 2026-10-23: both "I build the data layer AI runs on" and
  "I work with AI as a multiplier", in that order. The home page carries it;
  the CV leads with the AI entries.
- Substack link is labeled "Writing", with the pen name Cael Lawenu in the
  description sentence. Use the same label on LinkedIn and the Substack About.
- Where LinkedIn and the September 2026 resumes disagree on dates and titles,
  the resumes win, since they are the document that gets verified. LinkedIn
  should be aligned to them: Lifetime Value is Senior ETL Engineer II, Jane.com
  ends Jan 2022, UnitedHealth Group ends Jan 2020. Finally title is Founding
  Senior Data Engineer everywhere.
- Neurodivergence is owned on the home page through the hyperfocus line as
  written on LinkedIn. Naming a diagnosis outright is a disclosure only Chris
  makes, so the site implies rather than states until he says otherwise.
- The Finally recommendation is quoted on the CV page, trimmed to one
  contiguous sentence and attributed by name as it is on LinkedIn. Give the
  author a heads-up.
- Visual design, decided 2026-10-23: Young Serif for H1s and for the stat
  numbers on the CV, IBM Plex Sans for everything else, both self-hosted via
  fontsource. Cool off-white and ink palette with a petrol teal for links,
  mirrored in dark mode. Single left-aligned column, about 40rem.
- CV figures for Finally come from the two September 2026 resumes and the
  Data Engineering Dossier compiled 2 Sep 2026 (local, not in the repo).
  Caveats it carries: the 72% figure overlaps an April 2026 restructuring, so
  the 86% query-volume and DPD numbers are the fully attributable ones; the
  12.6M corpus is the model's target size; the RAG serving service was built
  by colleagues, Chris authored the retrieval architecture and corpus.
- Page inventory: `/` (thesis and Elsewhere block), `/cv/` (accomplishments
  and timeline), `/finally/` (platform case study from the dossier and
  resumes), `/critpages/` (case study from the private repos' history).
- Raising & Connecting (WordPress) is listed in the Elsewhere block only.

### Pending

- CritPages case study decisions are drawn from the commit history of the two
  private repos (CritPages/critpages and CritPages/critpages-web) as of
  2026-10-07.
- Borrowing-base entry on the CV. The ~$500K figure is Chris's recollection,
  not a record; it may have been higher. Still to confirm if possible: whether
  the companies were absent from the tape or present with disqualifying
  fields, the root-cause category, where in the pipeline the fix landed, and
  how many companies were affected.

## Development

```sh
npm install
npm run dev      # local server
npm run build    # static output in dist/
```

## Working style

Direct and concise. Do not generate copy or design directions unless asked;
ask questions or reflect back.
