# WordPress šablona – Audit & Strategie

> Dokument pro meeting. Stav k: březen 2026.

---

## 1. Co aktuálně existuje

### Technická architektura

```
Next.js (source of truth)
  └─ npm run build          → statický HTML export (out/)
  └─ npm run export:wp      → parsuje out/index.html
                               extrahuje sekce dle data-export-section=""
                               zapisuje do wordpress-theme/previo/patterns/*.html
```

### Co je vygenerováno

| Pattern | Stav | Poznámka |
|---|---|---|
| `navbar.html` | 27 řádků | Navigace, logo |
| `hero.html` | 1 řádek (minified) | Hlavní hero sekce |
| `stats.html` | 1 řádek | Statistiky |
| `product-cards.html` | 1 řádek | Sticky scroll karty |
| `testimonial.html` | 1 řádek | Karusel referencí |
| `support.html` | 1 řádek | Podpora sekce |
| `why-previo.html` | 1 řádek | Proč Previo |
| `faq.html` | 1 řádek | Accordion FAQ |
| `footer.html` | 27 řádků | Patička |

### Co theme obsahuje

- `theme.json` – plný design systém (barvy, typografie, spacing)
- `functions.php` – registrace patterns, enqueue CSS, navbar scroll script
- `assets/app.css` – Tailwind CSS (z Next.js buildu)
- Zip archiv připravený k instalaci

---

## 2. Identifikované problémy (Audit)

### Kritické

**A) Interaktivita nefunguje**
- `testimonial` – karusel (framer-motion, useState) → v HTML jen statický první slide
- `product-cards` – sticky scroll animace (framer-motion, useScroll) → statické karty
- `faq` – accordion (useState) → všechny položky rozbalené nebo jen statický HTML
- `navbar` – scroll efekt funguje (vanilla JS v functions.php) ✓

**B) Patterns nejsou editovatelné v Gutenbergu**
- Vložené jako raw HTML → klient nemůže změnit text, obrázek ani barvu přes editor
- Z pohledu WP editoru je to jeden neprostupný blok

**C) CSS závislost**
- Tailwind třídy fungují jen pokud se načte `assets/app.css`
- Pokud klient změní téma nebo deaktivuje šablonu, vše se rozbije
- CSS je minifikované, neobsahuje purgované třídy pro dynamický WP obsah

### Střední závažnost

**D) Synchronizace je manuální**
- Každá změna v Next.js vyžaduje: build → export:wp → zip → reinstalace v WP
- Neexistuje automatická pipeline ani verzování WP šablony zvlášť

**E) Obrázky**
- Patterns odkazují na Unsplash/randomuser.me CDN URL (nehosted lokálně)
- WP hostitelé mohou mít omezení na externí zdroje obrázků

**F) WordPress.com vs self-hosted**
- FSE téma vyžaduje WP 5.9+ a Gutenberg editor
- Na WordPress.com je instalace vlastního tématu jen v Business+ tarifu

---

## 3. Strategické možnosti

### Varianta A: Static HTML Showcase (nejjednodušší)
> WP šablona jako "prezentační" web – nelze editovat přes Gutenberg

- **Vhodné pro:** Centrálně spravované weby Previem
- **Výhody:** Rychlá implementace, pixel-perfect design
- **Nevýhody:** Klient nemůže nic editovat sám, každá změna jde přes Previo
- **Co chybí:** Nic zásadního – jen potvrdit, že editovatelnost není požadavek

### Varianta B: Gutenberg Blocks (nejflexibilnější)
> Přepsat každou sekci jako registrovaný Gutenberg blok (PHP + JSON attributes)

- **Vhodné pro:** Weby kde klient edituje obsah sám
- **Výhody:** Plná editovatelnost textu, obrázků, barev přes editor
- **Nevýhody:** Velký development effort (každý blok = samostatný PHP/JS balíček)
- **Co chybí:** Build tooling pro WP bloky (wp-scripts), registrace atributů

### Varianta C: Hybridní – Core Blocks + ACF (doporučeno)
> Zachovat design systém, ale obsah plnit přes Advanced Custom Fields nebo Core bloky

- **Vhodné pro:** Balance mezi editovatelností a rychlostí implementace
- **Výhody:** Klient mění texty/obrázky, design zůstává konzistentní
- **Nevýhody:** Závislost na ACF pluginu, nutno přepsat patterns na PHP templates

### Varianta D: Headless WP (nejmodernější)
> WP jen jako CMS (obsah), Next.js jako frontend přes WP REST API / WPGraphQL

- **Vhodné pro:** Pokud Next.js zůstává primárním frontendem
- **Výhody:** Plná kontrola nad frontendem, obsah editovatelný přes WP admin
- **Nevýhody:** Vyžaduje hostování obou (WP + Next.js), složitější setup
- **Poznámka:** Toto je nejblíže současné architektuře

---

## 4. Klíčové otázky pro meeting

1. **Kdo edituje obsah?** Hoteliér sám vs. Previo tým
2. **Jak časté jsou aktualizace designu?** (frekvence sync Next.js → WP)
3. **Kolik WP instalací?** Jeden centrální web vs. každý klient má vlastní WP
4. **Jaký je WP hosting?** Self-hosted / wordpress.com / spravovaný (Kinsta, WP Engine)
5. **Je potřeba vícejazyčnost?** (WPML, Polylang)
6. **Rezervační formulář** – plugin (Previo Booking Widget), iframe, nebo custom block?

---

## 5. Doporučený next step (bez ohledu na strategii)

Bez ohledu na zvolenou variantu, toto je třeba udělat jako první:

1. **Opravit interaktivitu** – testimonial karusel a FAQ accordion přepsat na vanilla JS (bez framer-motion) nebo WordPress Block s vlastním JS
2. **Vyčistit CSS** – zajistit, že `app.css` obsahuje všechny potřebné třídy
3. **Otestovat instalaci** – nainstalovat zip na reálný WP testovací server a zkontrolovat výsledek
4. **Rozhodnout o editovatelnosti** – podle odpovědi na otázku č. 1 výše zvolit Variantu A, C nebo D

---

## 6. Odhadovaný effort

| Varianta | Effort | Timeline |
|---|---|---|
| A – Static showcase | ~1–2 dny | Opravit JS, otestovat |
| C – Hybridní ACF | ~2–3 týdny | Přepsat sekce na PHP templates |
| B – Gutenberg Blocks | ~4–6 týdnů | Plný block development |
| D – Headless WP | ~1–2 týdny | WP setup + GraphQL/REST napojení |
