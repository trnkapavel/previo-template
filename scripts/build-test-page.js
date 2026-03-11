#!/usr/bin/env node
/**
 * Sestaví testovaci-stranka.html z exports/sections/*.html
 * v pořadí: navbar, hero, stats, product-cards, testimonial, support, why-previo, faq, footer
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SECTIONS_DIR = path.join(ROOT, 'exports', 'sections');
const ORDER = [
  'navbar',
  'hero',
  'stats',
  'product-cards',
  'testimonial',
  'support',
  'why-previo',
  'faq',
  'footer',
];

const parts = [];
for (const name of ORDER) {
  const file = path.join(SECTIONS_DIR, `${name}.html`);
  if (fs.existsSync(file)) {
    parts.push(fs.readFileSync(file, 'utf8').trim());
  }
}

const bodySections = parts.join('\n\n');

const html = `<!doctype html>
<html lang="cs">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Previo – export pro WP (zdroj: Next.js)</title>
    <link rel="stylesheet" href="./exports/assets/app.css" />
    <link rel="stylesheet" href="./exports/assets/navbar-scroll.css" />
    <script src="./exports/assets/navbar-scroll.js" defer></script>
    <script src="./exports/assets/hero-slider-light.js" defer></script>
    <script src="./exports/assets/testimonial-slider-light.js" defer></script>
    <script src="./exports/assets/stats-counters.js" defer></script>
    <script src="./exports/assets/faq-toggle.js" defer></script>
  </head>
  <body class="bg-white min-h-screen font-sans antialiased text-slate-900">
    <main class="min-h-screen">
${bodySections}
    </main>
  </body>
</html>
`;

const outPath = path.join(ROOT, 'testovaci-stranka.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('→', outPath.replace(ROOT + path.sep, ''));
console.log('Sekcí vloženo:', ORDER.length);