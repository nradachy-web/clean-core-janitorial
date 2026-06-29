# Clean Core Janitorial

Marketing site for Clean Core Janitorial (commercial cleaning, Grand Rapids / West
Michigan). Next.js 16 static export, deployed to GitHub Pages, built by Modern Apex
Strategies.

## Develop
```
npm ci
npm run dev      # http://localhost:3000/clean-core-janitorial
npm run build    # static export to ./out
```

## Deploy
Pushing to `main` triggers `.github/workflows/deploy.yml` (build + GitHub Pages).
Set the repo Actions variable `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` for the quote form.

## Domain cutover (cleancorejanitorial.com)
Set `basePath` to `""` in `next.config.ts`, `lib/imageLoader.ts`, and `lib/asset.ts`,
add `public/CNAME` with the domain, then point DNS at GitHub Pages.
