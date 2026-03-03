# Export Next.js → WordPress (Gutenberg)

Plán: projekt zůstává v **Next.js** pro vývoj a vylepšení; vedle toho průběžně generovaná **WordPress šablona** s Gutenberg bloky a patterns.

---

## Cíl

- **Next.js** = zdroj pravdy (design, komponenty, Tailwind).
- **WordPress theme** = exportovaná šablona s Gutenberg patterns, aby WP vypadal stejně jako Next.

---

## Struktura repa

```
previo-template/
├── app/                    # Next.js (beze změny)
├── components/
├── lib/
├── wordpress-theme/
│   └── previo/             # WP theme složka
│       ├── style.css
│       ├── functions.php
│       ├── theme.json      # barvy, fonty, spacing (z Tailwind)
│       ├── patterns/       # Gutenberg patterns
│       │   ├── hero.html
│       │   ├── features.html
│       │   ├── pricing.html
│       │   └── ...
│       └── templates/
│           ├── front-page.html
│           └── page.html
└── scripts/
    └── export-to-wp.js     # (nebo .mjs) – rozřezání out/*.html na patterns
```

---

## Workflow: Next → WordPress

1. **Vývoj** – vše dál v Next.js (Tailwind, React komponenty). Sekce mají `data-export-section="…"` pro export.
2. **Export pro WP** – při releasu pro WordPress:
   ```bash
   npm run build:wp
   ```
   nebo zvlášť:
   ```bash
   npm run build
   npm run export:wp
   ```
   (Pro export se použije `BUILD_FOR_WP=1`, takže `next build` vytvoří statickou složku `out/`; skript z ní vygeneruje patterny. Běžný `npm run build` zůstává bez exportu.)
3. **Skript `scripts/export-to-wp.js`**:
   - načte `out/index.html`,
   - najde elementy s atributem `data-export-section="…"`,
   - vyřízne jejich HTML a zapíše do `wordpress-theme/previo/patterns/<section>.html`.
4. **WordPress** – theme v `wordpress-theme/previo/` automaticky registruje všechny `.html` soubory z `patterns/` jako Gutenberg patterny (kategorie „Previo“).

---

## Sdílený design systém

- **Tailwind config** = zdroj pravdy pro barvy, fonty, spacing.
- Do **`theme.json`** zanést stejné hodnoty:
  - barvy (primary, secondary, background, text),
  - font family, font sizes, line-height,
  - border radius, spacing škála.

Tím Gutenberg bloky vizuálně odpovídají Next komponentám.

---

## Co je hotové

- [x] Složka `wordpress-theme/previo/` s `style.css`, `functions.php`, `theme.json`, `templates/`, `patterns/`.
- [x] V Next komponentách **markery** `data-export-section="…"` (navbar, hero, stats, product-cards, testimonial, support, why-previo, faq, footer).
- [x] Skript `scripts/export-to-wp.js` – z `out/index.html` generuje soubory do `patterns/`.
- [x] V `theme.json` zapsané barvy a fonty odpovídající Tailwind/globals.css.
- [x] V `next.config.ts` nastaveno `output: 'export'` pro statický export.

## Co případně doplnit

- [ ] Otestovat theme ve WordPressu (nahrát `wordpress-theme/previo` jako theme, spustit build:wp a zkontrolovat patterny).
- [ ] V WP doplnit template parts (header, footer), pokud chcete plnou shodu s Next (např. z exportu navbar/footer).
- [ ] Pro plný vzhled v Gutenbergu možná doplnit CSS z Tailwind (např. z buildu nebo ručně vybrané utility).

---

*Poslední úprava: březen 2025*
