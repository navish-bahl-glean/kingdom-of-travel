# KingdomOfTravel

A mock travel rewards website modelled on [princeoftravel.com](https://princeoftravel.com/), built as a static HTML/CSS site. Hosted on Vercel.

**Live site:** https://kingdom-of-travel.vercel.app

---

## Purpose

This site is part of a Glean networking lab. It exists to be indexed by a Glean SaaS instance (`support-lab`) via the Web connector, demonstrating content discovery, sitemap crawling, and search indexing against a realistic multi-page website.

---

## Pages

| URL | Description |
|---|---|
| `/` | Homepage — hero, featured article, card picks, destinations |
| `/credit-cards` | Credit card rankings with earn rates and welcome bonuses |
| `/destinations` | Redemption guides for Japan, Europe, Maldives, Australia |
| `/about` | About page and editorial standards |
| `/guides/points-101` | Beginner's guide to travel rewards |
| `/articles/best-credit-cards-2025` | Tiered card ranking article |

Sitemap: `/sitemap.xml` · Robots: `/robots.txt`

---

## Stack

- Pure HTML/CSS — no framework, no build step
- `vercel.json` enables clean URLs (no `.html` extension)
- Navy/gold design system in `assets/style.css`

---

## Deploying to Vercel

1. Import this repo at [vercel.com/new](https://vercel.com/new)
2. Leave all build settings blank — Vercel auto-detects it as a static site
3. Deploy

After deploying, update the domain in `sitemap.xml` and `robots.txt` if your Vercel URL differs from the placeholder:

```bash
sed -i 's|kingdom-of-travel.vercel.app|YOUR-URL.vercel.app|g' sitemap.xml robots.txt
git add sitemap.xml robots.txt && git commit -m "Update sitemap with Vercel URL" && git push
```

---

## Related

- **[nb-glean-networking-lab](https://github.com/navish-bahl-glean/nb-glean-networking-lab)** — private EC2-hosted version of this site, used for testing the Glean Web connector against a privately networked server. Includes a `docker-compose.yml` for WordPress + the Glean WordPress connector path.
