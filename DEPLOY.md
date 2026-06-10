# GEEK GHOUL — Deployment Guide

**Domain:** `https://www.geekghoul.com`  
**Description:** Tech & gaming cleaning products

---

## Build

```bash
npm install
npm run build
```

Output: `dist/` (Vite static build)

## Deploy

### Cloudflare Pages (Recommended)

```bash
npx wrangler pages deploy dist --project-name=geekghoul-com --branch=main
```

### GitHub Actions

Pushes to `main` auto-deploy via `.github/workflows/deploy.yml`.

### DNS

- `www.geekghoul.com` → CNAME → `geekghoul-com.pages.dev`
- `geekghoul.com` → CNAME → `geekghoul-com.pages.dev`

Managed in Cloudflare DNS.

---

*Part of the GHOULVERSE ecosystem. See root `DEPLOY.md` for ecosystem-wide deployment.*
