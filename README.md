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
- Infrastructure as code, where used, is Terraform.

### Pending

- Hosting: GitHub Pages, S3 + CloudFront, or AWS Amplify Hosting. Cost is not
  the deciding factor. The question is whether showing AWS infra-as-code in
  the repo is worth the setup time.
- Static-site tooling.
- Visual design.
- Page inventory.
- Whether CritPages gets a case-study page.
- Substack link label: "Cael Lawenu" or "writing". Pick once and use the same
  label on the site, LinkedIn, and the Substack About page.

## Working style

Direct and concise. Do not generate copy or design directions unless asked;
ask questions or reflect back.
