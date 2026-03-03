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
const OUT_HTML = path.join(ROOT, 'out', 'index.html');
const PATTERNS_DIR = path.join(ROOT, 'wordpress-theme', 'previo', 'patterns');

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
    const safeName = id.replace(/[^a-z0-9-_]/gi, '-').toLowerCase();
    const filePath = path.join(PATTERNS_DIR, `${safeName}.html`);
    fs.writeFileSync(filePath, html.trim() + '\n', 'utf8');
    console.log('  →', filePath.replace(ROOT + path.sep, ''));
  }

  console.log('Export dokončen: %d patternů zapsáno do wordpress-theme/previo/patterns/', sections.length);
}

main();
