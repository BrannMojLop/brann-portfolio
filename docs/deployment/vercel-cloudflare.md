# Vercel + Cloudflare Deployment Runbook

This project is designed to deploy on `Vercel Hobby` with `brandonmojica.dev` as the canonical production domain.

## Target setup

- Production URL: `https://brandonmojica.dev`
- Redirect URL: `https://www.brandonmojica.dev`
- Hosting: Vercel Hobby
- DNS: Cloudflare

## Preconditions

- `pnpm build` passes locally.
- The repository is pushed to the Git provider connected to Vercel.
- The domain `brandonmojica.dev` is active in Cloudflare.

## 1. Create the Vercel project

1. Import the repository into Vercel.
2. Keep the detected framework as `Next.js`.
3. Keep the default build and output settings.
4. Set the production branch to the repository main branch.

## 2. Configure environment variables

In Vercel Project Settings -> Environment Variables, add:

```bash
NEXT_PUBLIC_SITE_URL=https://brandonmojica.dev
```

Notes:

- This variable is required in Production.
- It controls canonical URLs, Open Graph URLs, `robots.txt`, and `sitemap.xml`.
- Do not point it to `*.vercel.app` for Production.

## 3. Attach domains in Vercel

In Vercel Project Settings -> Domains:

1. Add `brandonmojica.dev`.
2. Add `www.brandonmojica.dev`.
3. Mark `brandonmojica.dev` as the primary domain.
4. Enable redirect from `www.brandonmojica.dev` to `brandonmojica.dev`.

Vercel will show the exact DNS values to create. Use those values instead of guessing if they differ from the defaults below.

## 4. Configure DNS in Cloudflare

Create or update the records requested by Vercel:

- Apex `brandonmojica.dev`: `A` or `ALIAS/ANAME` depending on what Vercel shows.
- `www`: `CNAME` to the Vercel target.

Operational rule:

- Keep the proxy disabled (`DNS only`, gray cloud) for both records during validation and the initial launch.

If Cloudflare proxy is enabled too early, domain verification and caching behavior can become harder to debug.

## 5. Deploy and verify

After Vercel detects the environment variable and domain setup:

1. Trigger a production deployment.
2. Confirm `https://brandonmojica.dev` loads successfully.
3. Confirm `https://www.brandonmojica.dev` redirects to the apex domain.
4. Confirm `robots.txt` points to `https://brandonmojica.dev/sitemap.xml`.
5. Confirm `sitemap.xml` uses `https://brandonmojica.dev` URLs.
6. Confirm page source metadata does not contain `brann-portfolio.vercel.app`.
7. Confirm Open Graph image routes respond correctly:
   - `/opengraph-image`
   - `/engineering/opengraph-image`
   - `/es/opengraph-image`
   - `/es/engineering/opengraph-image`

## 6. Smoke test checklist

Run these checks after the first production deploy:

```bash
curl -I https://brandonmojica.dev
curl -I https://www.brandonmojica.dev
curl -I https://brandonmojica.dev/robots.txt
curl -I https://brandonmojica.dev/sitemap.xml
```

Expected results:

- Apex returns `200`.
- `www` returns `301` or `308` to the apex domain.
- `robots.txt` and `sitemap.xml` return `200`.

Then manually verify:

- `/`
- `/systems`
- `/engineering`
- `/about`
- `/contact`
- `/es`
- `/es/systems`
- `/es/engineering`
- `/es/about`
- `/es/contact`

## 7. Ongoing maintenance

- Keep `NEXT_PUBLIC_SITE_URL` aligned with the production canonical domain.
- If the canonical domain changes, update Vercel first and then DNS.
- Re-run `pnpm build` before shipping major metadata or routing changes.
