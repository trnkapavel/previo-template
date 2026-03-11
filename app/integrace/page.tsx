/* eslint-disable react/no-unescaped-entities */
'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { ConsultationSection } from '@/components/consultation-section';
import { Footer } from '@/components/footer';
import { IntegrationsScene } from '@/components/illustrations/IntegrationsScene';
import { Eyebrow, PageTitle, SectionTitle, Subheading, Body, Small } from '@/components/ui/typography';
import { ButtonLink } from '@/components/ui/button';
import { CATEGORIES, INTEGRATIONS, type Category, type Integration } from '@/data/integrations.generated';
import {
  Search,
  SlidersHorizontal,
  ExternalLink,
  CreditCard,
  KeyRound,
  UtensilsCrossed,
  Building2,
  Globe,
  Calendar,
  Plug,
  Star,
} from 'lucide-react';

function categoryIcon(category: Category) {
  switch (category) {
    case 'Platební systém':
      return CreditCard;
    case 'Zámkové systémy a boxy na klíč':
      return KeyRound;
    case 'Restaurační systémy':
      return UtensilsCrossed;
    case 'Channel manager':
      return Globe;
    default:
      return Plug;
  }
}

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('Všechny kategorie');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return INTEGRATIONS.filter((i) => {
      const matchesCategory = activeCategory === 'Všechny kategorie' || i.category === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      const haystack = [
        i.name,
        i.category,
        i.description,
        ...(i.tags ?? []),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [activeCategory, query]);

  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow className="mb-4">Marketplace integrací</Eyebrow>
            <PageTitle className="mb-6">Integrace a propojení na další systémy</PageTitle>
            <Body className="text-lg md:text-xl text-slate-700 mb-6">
              Napojte účetnictví, platby, zámky, kiosky i další nástroje – bez ručního přepisování. Vyberte integrace,
              které vám zrychlí provoz a sníží chybovost.
            </Body>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <ButtonLink href="#katalog" variant="primary" iconRight={<ExternalLink className="w-5 h-5" />}>
                Prohlédnout integrace
              </ButtonLink>
              <ButtonLink href="#konzultace" variant="secondary" className="px-6 py-3">
                Doporučit vhodné napojení
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                { label: '50+ integrací', Icon: SlidersHorizontal },
                { label: 'Rychlé nasazení', Icon: Calendar },
                { label: 'Méně ruční práce', Icon: Building2 },
              ].map(({ label, Icon }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  <Icon className="w-3.5 h-3.5 text-primary-600" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl -z-10" />
            <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-4 h-80 lg:h-auto lg:aspect-[4/3]">
              <IntegrationsScene />
            </div>
          </div>
        </div>
      </section>

      {/* Filtrace + katalog */}
      <section id="katalog" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <SectionTitle className="mb-2">Najděte integraci podle potřeby</SectionTitle>
              <Small>
                Marketplace je přehledný katalog. Vyhledejte integraci nebo ji vyfiltrujte podle kategorie.
              </Small>
            </div>

            <div className="w-full lg:w-[520px]">
              <label className="sr-only" htmlFor="integration-search">Hledat integraci</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="integration-search"
                  type="search"
                  placeholder="Hledat (např. platby, zámky, účetnictví)…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-3 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar filters (marketplace-like) */}
            <aside className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-primary-600" />
                    Filtry
                  </div>
                  <span className="text-[11px] text-slate-500">{filtered.length} výsledků</span>
                </div>

                <div className="space-y-2">
                  {CATEGORIES.map((category) => {
                    const Icon = categoryIcon(category);
                    const isActive = category === activeCategory;
                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setActiveCategory(category)}
                        className={[
                          'w-full text-left inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-colors',
                          isActive
                            ? 'bg-primary-600 text-white border-primary-600'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50',
                        ].join(' ')}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-primary-600'}`} />
                        <span className="truncate">{category}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* Main grid */}
            <div className="lg:col-span-9">
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((integration) => {
                  const Icon = categoryIcon(integration.category);
                  const href = integration.href ?? '#';
                  const key = `${href}:${integration.name}`;
                  return (
                    <article
                      key={key}
                      className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center border border-slate-200 overflow-hidden">
                          {integration.logoSrc ? (
                            <Image
                              src={integration.logoSrc}
                              alt={`${integration.name} logo`}
                              width={56}
                              height={56}
                              className="w-12 h-12 object-contain"
                            />
                          ) : (
                            <div className="h-14 w-14 rounded-2xl bg-primary-100 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-primary-600" />
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          {integration.featured ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700 mb-1 w-fit">
                              <Star className="w-3 h-3" />
                              Doporučujeme
                            </span>
                          ) : null}
                          <div className="text-sm font-semibold text-slate-900 truncate">{integration.name}</div>
                          <div className="text-[11px] uppercase tracking-widest text-slate-400 truncate">
                            {integration.category}
                          </div>
                        </div>
                      </div>

                      <Body className="text-sm flex-1">{integration.description}</Body>

                      {integration.tags?.length ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {integration.tags.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="inline-flex items-center rounded-full bg-slate-50 border border-slate-200 px-2.5 py-0.5 text-[11px] font-medium text-slate-600"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      <div className="mt-5 flex items-center justify-between gap-3">
                        <ButtonLink
                          href={href}
                          variant="secondary"
                          className="px-5 py-2.5"
                          iconRight={<ExternalLink className="w-4 h-4" />}
                        >
                          Detail
                        </ButtonLink>
                        <ButtonLink href="#konzultace" variant="ghost" className="p-0 h-auto font-medium">
                          Doporučit napojení
                        </ButtonLink>
                      </div>
                    </article>
                  );
                })}

                {/* „More coming“ card */} 
                <article className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-sm font-semibold text-slate-900 mb-2">A desítky dalších…</div>
                    <p className="text-sm text-slate-600">
                      POHODA, Money S3, GoPay, Comgate, Yieldplanet, Karta Hosta a další.
                    </p>
                  </div>
                  <div className="mt-5">
                    <ButtonLink href="#konzultace" variant="primary" iconRight={<ExternalLink className="w-5 h-5" />}>
                      Chci doporučení
                    </ButtonLink>
                  </div>
                </article>
              </div>

              {filtered.length === 0 ? (
                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <Subheading as="h3" className="text-lg mb-2">
                    Nic jsme nenašli
                  </Subheading>
                  <Body className="text-sm mb-4">
                    Zkuste upravit hledaný výraz nebo přepnout kategorii. Pokud si nejste jistí, rádi doporučíme vhodné napojení.
                  </Body>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-[3px] border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                      onClick={() => {
                        setQuery('');
                        setActiveCategory('Všechny kategorie');
                      }}
                    >
                      Reset filtrů
                    </button>
                    <ButtonLink href="#konzultace" variant="primary">
                      Doporučit napojení
                    </ButtonLink>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <ConsultationSection />
      <Footer />
    </main>
  );
}

