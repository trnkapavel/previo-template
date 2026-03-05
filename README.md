# Previo Web

Next.js projekt (React 19, Tailwind CSS).

## Spuštění

```bash
npm install
npm run dev
```

Aplikace běží na [http://localhost:3000](http://localhost:3000).

## Export bloků (HTML + CSS)

Každá hlavní sekce stránky (`navbar`, `hero`, `stats`, `product-cards`, `testimonial`, `support`, `why-previo`, `faq`, `footer`) má atribut `data-export-section="…"`, takže ji lze vyexportovat jako samostatný HTML blok:

```bash
# build se statickým exportem (vytvoří složku out/)
npm run build:blocks

# nebo zvlášť
BUILD_FOR_WP=1 npx next build
npm run export:blocks
```

Výstup:

- `exports/sections/*.html` – čisté HTML pro jednotlivé sekce,
- `exports/assets/app.css` – CSS bundle (Tailwind + fonty), který stačí připojit do stránky.

## WordPress export

Projekt slouží jako zdroj pravdy pro design; vedle toho lze generovat WordPress šablonu s Gutenberg bloky a patterns.

**→ [docs/WORDPRESS-EXPORT.md](docs/WORDPRESS-EXPORT.md)** – plán, struktura a workflow (Next.js → WP theme).
