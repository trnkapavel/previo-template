#!/usr/bin/env node
/**
 * Export Next.js static HTML to WordPress Gutenberg patterns.
 * Run after: npm run build (output: 'export' → out/)
 *
 * Reads out/index.html, finds elements with data-export-section="...",
 * extracts their HTML and writes wordpress-theme/previo/patterns/<section>.html
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'out');
const OUT_HTML = path.join(OUT_DIR, 'index.html');
const PATTERNS_DIR = path.join(ROOT, 'wordpress-theme', 'previo', 'patterns');
const THEME_ASSETS_DIR = path.join(ROOT, 'wordpress-theme', 'previo', 'assets');
const TEMPLATES_DIR = path.join(ROOT, 'wordpress-theme', 'previo', 'templates');

/** Pořadí sekcí na front page – každá jako samostatný blok pro editaci v Gutenbergu */
const FRONT_PAGE_SECTIONS = [
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

/**
 * Next.js Image komponenta generuje <img> se src="/_next/image?url=...".
 * Ve WordPressu tato route neexistuje, takže obrázky nefungují.
 * Tady přemapujeme src na původní (dekódovanou) URL a odstraníme srcSet na _next/image.
 */
function normalizeNextImages(html) {
  // Přemapujeme src atributy z /_next/image na originální URL z parametru ?url=
  html = html.replace(/src="\/_next\/image\?url=([^"&]+)[^"]*"/g, (match, encoded) => {
    try {
      const decoded = decodeURIComponent(encoded);
      return `src="${decoded}"`;
    } catch {
      return match;
    }
  });

  // Odstraníme srcSet, které ukazuje na /_next/image (ve WP by stejně nefungovalo)
  html = html.replace(/\s+srcSet="\/_next\/image[^"]*"/g, '');

  return html;
}

/**
 * V komponentách jsou animace přes inline styly (opacity:0; transform:...),
 * které se v Nextu rozanimují JavaScriptem. Ve WordPressu JS nemáme,
 * takže prvky zůstávají neviditelné. Tady tyto opacity/transform styly odstraníme.
 */
function removeInlineAnimationStyles(html) {
  // Styl přesně "opacity:0;transform:..." nahradíme prázdným style
  html = html.replace(/style="opacity:0;transform:[^"]*"/g, '');

  // Obecně jakýkoli style obsahující opacity:0 odstraníme (jen pro bezpečnost)
  html = html.replace(/style="[^"]*opacity\s*:\s*0[^"]*"/g, (match) => {
    return '';
  });

  return html;
}

/**
 * V exportovaném HTML jsou SVG a další prvky s opacity="0" (animace z Nextu).
 * Ve WordPressu bez JS zůstávají neviditelné – nastavíme opacity="1".
 */
function makeSvgAndHiddenVisible(html) {
  return html.replace(/opacity="0"/g, 'opacity="1"');
}

/**
 * Sestaví front-page.html tak, že každá sekce je jeden blok (wp:html).
 * V Gutenbergu pak jde každou sekci samostatně vybrat a editovat.
 */
function buildFrontPageTemplate() {
  ensureDir(TEMPLATES_DIR);
  const lines = [
    '<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->',
    '<main class="wp-block-group">',
  ];

  for (const sectionId of FRONT_PAGE_SECTIONS) {
    const safeName = sectionId.replace(/[^a-z0-9-_]/gi, '-').toLowerCase();
    const patternPath = path.join(PATTERNS_DIR, `${safeName}.html`);
    if (!fs.existsSync(patternPath)) {
      console.warn('  Pattern pro front page chybí:', patternPath);
      continue;
    }
    const content = fs.readFileSync(patternPath, 'utf8').trim();
    lines.push('<!-- wp:html -->');
    lines.push(content);
    lines.push('<!-- /wp:html -->');
  }

  lines.push('</main>');
  lines.push('<!-- /wp:group -->');

  const outPath = path.join(TEMPLATES_DIR, 'front-page.html');
  fs.writeFileSync(outPath, lines.join('\n') + '\n', 'utf8');
  console.log('  →', outPath.replace(ROOT + path.sep, ''));
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
  ensureDir(THEME_ASSETS_DIR);
  const targetCssPath = path.join(THEME_ASSETS_DIR, 'app.css');
  fs.copyFileSync(sourceCssPath, targetCssPath);
  console.log('  →', targetCssPath.replace(ROOT + path.sep, ''));
}

function main() {
  if (!fs.existsSync(OUT_HTML)) {
    console.error('Chybí out/index.html. Nejdřív spusťte: npm run build');
    process.exit(1);
  }

  const html = fs.readFileSync(OUT_HTML, 'utf8');
  const sections = extractSections(html);

  if (sections.length === 0) {
    console.warn('Žádné sekce s data-export-section v out/index.html nenalezeny.');
    process.exit(0);
  }

  ensureDir(PATTERNS_DIR);

  for (const { id, html } of sections) {
    const withoutAnimations = removeInlineAnimationStyles(html);
    const normalizedHtml = normalizeNextImages(withoutAnimations);
    const visibleHtml = makeSvgAndHiddenVisible(normalizedHtml);
    const safeName = id.replace(/[^a-z0-9-_]/gi, '-').toLowerCase();
    const filePath = path.join(PATTERNS_DIR, `${safeName}.html`);
    fs.writeFileSync(filePath, visibleHtml.trim() + '\n', 'utf8');
    console.log('  →', filePath.replace(ROOT + path.sep, ''));
  }

  console.log('Export dokončen: %d patternů zapsáno do wordpress-theme/previo/patterns/', sections.length);

  // Šablona front-page s každou sekcí jako editovatelný blok (wp:html)
  buildFrontPageTemplate();

  // Zkopírujeme hlavní CSS bundle z Next buildu do WP šablony,
  // aby se na WP načetly stejné styly jako na Next webu.
  copyCssBundle();
}

main();
