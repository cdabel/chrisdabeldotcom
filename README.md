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

### Pending

- Visual design.
- Page inventory.
- Whether CritPages gets a case-study page.
- Substack link label: "Cael Lawenu" or "writing". Pick once and use the same
  label on the site, LinkedIn, and the Substack About page.

## Development

```sh
npm install
npm run dev      # local server
npm run build    # static output in dist/
```

## Working style

Direct and concise. Do not generate copy or design directions unless asked;
ask questions or reflect back.
