#!/usr/bin/env node
/**
 * Export Next.js static HTML sections to plain HTML + CSS.
 *
 * Použití:
 * 1) BUILD_FOR_WP=1 npx next build  (nebo npm run build:wp – pokud necháš stávající skript)
 * 2) node scripts/export-blocks.js   (nebo npm run export:blocks)
 *
 * Výstup:
 * - exports/sections/<section>.html  – čisté HTML pro danou sekci (navbar, hero, …)
 * - exports/assets/app.css          – CSS bundle z Next buildu (Tailwind + fonty)
 *
 * Můžeš to pak vložit do libovolného systému, který umí HTML/CSS (např. jiné CMS).
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'out');
const OUT_HTML = path.join(OUT_DIR, 'index.html');

const EXPORT_SECTIONS_DIR = path.join(ROOT, 'exports', 'sections');
const EXPORT_ASSETS_DIR = path.join(ROOT, 'exports', 'assets');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function extractSections(html) {
  const sections = [];
  const re = /<(section|header|footer|div)[^>]*\sdata-export-section="([^"]+)"[^>]*>/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    const tagName = match[1].toLowerCase();
    const sectionId = match[2];
    const startIndex = match.index;
    const openTagEnd = html.indexOf('>', startIndex) + 1;
    const closeTag = `</${tagName}>`;
    let depth = 1;
    let pos = openTagEnd;
    while (depth > 0 && pos < html.length) {
      const nextOpen = html.indexOf(`<${tagName}`, pos);
      const nextClose = html.indexOf(closeTag, pos);
      if (nextClose === -1) break;
      if (nextOpen !== -1 && nextOpen < nextClose) {
        depth++;
        pos = nextOpen + 1;
      } else {
        depth--;
        if (depth === 0) {
          const endIndex = nextClose + closeTag.length;
          const outer = html.slice(startIndex, endIndex);
          sections.push({ id: sectionId, html: outer });
          break;
        }
        pos = nextClose + closeTag.length;
      }
    }
  }
  return sections;
}

function normalizeNextImages(html) {
  // přemapujeme src="/_next/image?url=..." na originální URL
  html = html.replace(/src="\/_next\/image\?url=([^"&]+)[^"]*"/g, (match, encoded) => {
    try {
      const decoded = decodeURIComponent(encoded);
      return `src="${decoded}"`;
    } catch {
      return match;
    }
  });

  // odstraníme srcSet odkazující na /_next/image
  html = html.replace(/\s+srcSet="\/_next\/image[^"]*"/g, '');

  return html;
}

function removeInlineAnimationStyles(html) {
  // style="opacity:0;transform:..." → pryč
  html = html.replace(/style="opacity:0;transform:[^"]*"/g, '');
  // obecně jakýkoli style s opacity:0 → pryč
  html = html.replace(/style="[^"]*opacity\s*:\s*0[^"]*"/g, () => '');
  return html;
}

function makeSvgAndHiddenVisible(html) {
  return html.replace(/opacity="0"/g, 'opacity="1"');
}

function copyCssBundle() {
  const cssDir = path.join(OUT_DIR, '_next', 'static', 'css');
  if (!fs.existsSync(cssDir)) {
    console.warn('Nenalezen adresář s CSS bundly:', cssDir);
    return;
  }

  const files = fs.readdirSync(cssDir).filter((file) => file.endsWith('.css'));
  if (files.length === 0) {
    console.warn('V adresáři CSS nebyly nalezeny žádné .css soubory.');
    return;
  }

  const sourceCssPath = path.join(cssDir, files[0]);
  ensureDir(EXPORT_ASSETS_DIR);
  const targetCssPath = path.join(EXPORT_ASSETS_DIR, 'app.css');
  fs.copyFileSync(sourceCssPath, targetCssPath);
  console.log('CSS bundle →', targetCssPath.replace(ROOT + path.sep, ''));
}

function main() {
  if (!fs.existsSync(OUT_HTML)) {
    console.error('Chybí out/index.html. Nejdřív spusťte: BUILD_FOR_WP=1 npx next build (nebo npm run build:wp).');
    process.exit(1);
  }

  const html = fs.readFileSync(OUT_HTML, 'utf8');
  const sections = extractSections(html);

  if (sections.length === 0) {
    console.warn('Žádné sekce s data-export-section v out/index.html nenalezeny.');
    process.exit(0);
  }

  ensureDir(EXPORT_SECTIONS_DIR);

  for (const { id, html: rawHtml } of sections) {
    const withoutAnimations = removeInlineAnimationStyles(rawHtml);
    const normalizedHtml = normalizeNextImages(withoutAnimations);
    const visibleHtml = makeSvgAndHiddenVisible(normalizedHtml);
    const safeName = id.replace(/[^a-z0-9-_]/gi, '-').toLowerCase();
    const filePath = path.join(EXPORT_SECTIONS_DIR, `${safeName}.html`);
    fs.writeFileSync(filePath, visibleHtml.trim() + '\n', 'utf8');
    console.log('Sekce →', filePath.replace(ROOT + path.sep, ''));
  }

  copyCssBundle();

  console.log('Export bloků dokončen: %d sekcí do exports/sections + CSS do exports/assets/app.css', sections.length);
}

main();

