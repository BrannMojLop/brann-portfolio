# Brandon Mojica Portfolio

Personal engineering portfolio built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, and MDX.

## Local setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

`NEXT_PUBLIC_SITE_URL` is optional for local development. In Vercel Production it must be set to the canonical domain.

## Environment variables

```bash
NEXT_PUBLIC_SITE_URL=https://brandonmojica.dev
```

## Scripts

```bash
pnpm dev
pnpm build
pnpm lint
```

## Deployment

Production is intended for Vercel Hobby with:

- Primary domain: `brandonmojica.dev`
- Redirect domain: `www.brandonmojica.dev`
- DNS managed in Cloudflare with Vercel records set to `DNS only` during validation

See the full runbook in [docs/deployment/vercel-cloudflare.md](/Users/brandonmojicalopez/Projects/brann-portfolio/docs/deployment/vercel-cloudflare.md).

## SEO implementation

- English primary routes at `/`
- Spanish indexable routes at `/es`
- Canonical and `hreflang` metadata on all pages
- `robots.txt` and `sitemap.xml`
- JSON-LD for `Person`, `WebSite`, `CollectionPage`, `AboutPage`, `Article`, and `BreadcrumbList`
- Open Graph images for homepage and engineering content
