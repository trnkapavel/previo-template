/* eslint-disable no-console */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import * as cheerio from 'cheerio';

const SOURCE_URL = 'https://www.previo.cz/integrace/';
const OUT_DIR = path.resolve(process.cwd(), 'public', 'integrations');
const OUT_DATA = path.resolve(process.cwd(), 'data', 'integrations.generated.ts');

function slugify(input) {
  return input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60);
}

function sha1(buf) {
  return crypto.createHash('sha1').update(buf).digest('hex').slice(0, 10);
}

async function fetchText(url) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`Fetch failed ${res.status} for ${url}`);
  return await res.text();
}

async function fetchBinary(url) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`Fetch failed ${res.status} for ${url}`);
  const contentType = res.headers.get('content-type') ?? '';
  const buf = Buffer.from(await res.arrayBuffer());
  return { buf, contentType, finalUrl: res.url };
}

function pickExt(contentType, finalUrl) {
  if (contentType.includes('image/svg')) return 'svg';
  if (contentType.includes('image/webp')) return 'webp';
  if (contentType.includes('image/png')) return 'png';
  if (contentType.includes('image/jpeg')) return 'jpg';
  const m = finalUrl.match(/\.(svg|png|webp|jpe?g)(\?|#|$)/i);
  return m ? m[1].toLowerCase().replace('jpeg', 'jpg') : 'png';
}

function absolutize(url, base) {
  try {
    return new URL(url, base).toString();
  } catch {
    return null;
  }
}

function uniqBy(arr, keyFn) {
  const seen = new Set();
  const out = [];
  for (const item of arr) {
    const k = keyFn(item);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(item);
  }
  return out;
}

function extractListing(html) {
  const $ = cheerio.load(html);

  const items = [];

  // Previo web má integrace v #filter-app a .integrations__grid
  $('.integrations__grid .integration').each((_, el) => {
    const card = $(el);
    const a = card.find('a.integration__content').first();
    const detailUrl = a.attr('href') ? absolutize(a.attr('href'), SOURCE_URL) : null;
    const name = card.find('.integration__title').first().text().trim();
    const categoryText = card.find('.integration__category').first().text().trim();
    const category = categoryText.replace(/^Kategorie:\s*/i, '').trim();
    const featured = card.hasClass('recommended') || card.find('.partner-recommend').length > 0;
    const img = card.find('.integration__logo img').first();
    const logoUrl = img.attr('data-src') || img.attr('src');

    if (!name || !detailUrl) return;

    items.push({
      name,
      category,
      featured,
      detailUrl,
      logoUrl: logoUrl ? absolutize(logoUrl, SOURCE_URL) : null,
    });
  });

  return uniqBy(items, (i) => i.detailUrl);
}

function extractCategories(html) {
  const $ = cheerio.load(html);
  const cats = $('#filter-app .filter select option')
    .map((_, el) => $(el).text().trim())
    .get()
    .filter(Boolean);

  const unique = Array.from(new Set(cats));
  const withoutAll = unique.filter((c) => c !== 'Všechny kategorie');
  return ['Všechny kategorie', ...withoutAll];
}

async function enrichFromDetail(item) {
  try {
    const html = await fetchText(item.detailUrl);
    const $ = cheerio.load(html);

    // "Navštívit web" link (může být externí)
    const external = $('a')
      .filter((_, el) => $(el).text().trim().toLowerCase().includes('navšt'))
      .first()
      .attr('href');
    const websiteUrl = external ? absolutize(external, item.detailUrl) : null;

    // Popis: nejdřív meta description, pak první smysluplný odstavec z obsahu
    const metaDesc =
      $('meta[property="og:description"]').attr('content') ||
      $('meta[name="description"]').attr('content') ||
      '';

    const firstParagraph = $('main p, article p, .content p, .page-content p')
      .map((_, el) => $(el).text().trim())
      .get()
      .find((t) => t && t.length > 40) || '';

    const desc = (metaDesc && metaDesc.length > 20 ? metaDesc : firstParagraph).replace(/\s+/g, ' ').trim();

    // Logo: zkusíme najít první <img> v hlavičce/obsahu, fallback na og:image
    let logoUrl = item.logoUrl;
    if (!logoUrl) {
      const og = $('meta[property="og:image"]').attr('content');
      const img = $('img').first().attr('src');
      logoUrl = absolutize(og || img, item.detailUrl);
    }

    return { ...item, websiteUrl, logoUrl, description: desc };
  } catch {
    return item;
  }
}

async function downloadLogo(logoUrl, slugBase) {
  if (!logoUrl) return null;
  try {
    const { buf, contentType, finalUrl } = await fetchBinary(logoUrl);
    const ext = pickExt(contentType, finalUrl);
    const hash = sha1(buf);
    const filename = `${slugBase}-${hash}.${ext}`;
    const outPath = path.join(OUT_DIR, filename);
    await writeFile(outPath, buf);
    return `/integrations/${filename}`;
  } catch (e) {
    console.warn(`Logo download failed: ${logoUrl}`, e?.message ?? e);
    return null;
  }
}

function toTs(categories, integrations) {
  const catUnion = categories.map((c) => `'${c.replace(/'/g, "\\'")}'`).join(' | ') || 'string';
  const catArray = categories.map((c) => `  '${c.replace(/'/g, "\\'")}',`).join('\n');
  const integrationsArray = integrations
    .map((i) => {
      const tags = i.tags?.length ? `[${i.tags.map((t) => `'${t.replace(/'/g, "\\'")}'`).join(', ')}]` : 'undefined';
      return `  {\n    name: '${i.name.replace(/'/g, "\\'")}',\n    category: '${i.category.replace(/'/g, "\\'")}',\n    description: '${(i.description || '').replace(/'/g, "\\'")}',\n    featured: ${Boolean(i.featured)},\n    href: ${i.href ? `'${i.href}'` : 'undefined'},\n    websiteUrl: ${i.websiteUrl ? `'${i.websiteUrl}'` : 'undefined'},\n    logoSrc: ${i.logoSrc ? `'${i.logoSrc}'` : 'undefined'},\n    tags: ${tags},\n  },`;
    })
    .join('\n');

  return `/* This file is generated by scripts/sync-integrations.mjs */\n\nexport const CATEGORIES = [\n${catArray}\n] as const;\n\nexport type Category = ${catUnion};\n\nexport interface Integration {\n  name: string;\n  category: Category;\n  description: string;\n  featured?: boolean;\n  href?: string;\n  websiteUrl?: string;\n  logoSrc?: string;\n  tags?: string[];\n}\n\nexport const INTEGRATIONS: Integration[] = [\n${integrationsArray}\n];\n`;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  await mkdir(path.dirname(OUT_DATA), { recursive: true });

  console.log(`Fetching listing: ${SOURCE_URL}`);
  const listingHtml = await fetchText(SOURCE_URL);

  const categories = extractCategories(listingHtml);
  const listing = extractListing(listingHtml);

  console.log(`Found ${listing.length} integrations (listing). Enriching from detail pages…`);
  const enriched = [];
  for (const item of listing) {
    enriched.push(await enrichFromDetail(item));
  }

  // Minimal seed descriptions if missing (detail pages have full description; listing often short)
  const integrations = [];
  for (const it of enriched) {
    const slug = slugify(it.name) || 'integration';
    const logoSrc = await downloadLogo(it.logoUrl, slug);
    integrations.push({
      name: it.name,
      category: it.category || 'Všechny kategorie',
      description: it.description || '',
      featured: Boolean(it.featured),
      href: it.detailUrl ? new URL(it.detailUrl).pathname : undefined,
      websiteUrl: it.websiteUrl ?? undefined,
      logoSrc: logoSrc ?? undefined,
      tags: undefined,
    });
  }

  console.log(`Writing data: ${OUT_DATA}`);
  await writeFile(OUT_DATA, toTs(categories, integrations), 'utf8');
  console.log('Done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

