import { Navbar } from '@/components/navbar';
import { ConsultationSection } from '@/components/consultation-section';
import { Footer } from '@/components/footer';

const CATEGORIES = [
  'Všechny kategorie',
  'Účetní systémy',
  'Restaurační systémy',
  'Zámkové systémy a boxy na klíč',
  'Samoobslužné kiosky',
  'Telefonní ústředna',
  'Čtečka dokladů',
  'Platební systém',
  'Lokální karty hostů a hlášení hostů',
  'Channel manager',
  'Řízení vytápění',
  'CRM',
  'Revenue management',
  'Řízení léčebného provozu',
  'Komunikace s hostem',
  'Parkování',
  'Housekeeping',
] as const;

type Category = (typeof CATEGORIES)[number];

interface Integration {
  name: string;
  logo: string;
  category: Category;
  description: string;
  featured?: boolean;
}

const INTEGRATIONS: Integration[] = [
  {
    name: 'ČSOB',
    logo: 'ČSOB',
    category: 'Platební systém',
    description: 'Platební terminál či platební brána od renomované banky.',
    featured: true,
  },
  {
    name: 'SmartKey',
    logo: 'SmartKey',
    category: 'Zámkové systémy a boxy na klíč',
    description: 'Česká firma specializující se na zámkové, zabezpečovací a mechatronické technologie.',
    featured: true,
  },
  {
    name: 'Keyguru',
    logo: 'Keyguru',
    category: 'Zámkové systémy a boxy na klíč',
    description: 'Samoobslužné boxy na předávání klíčů, které mohou nahradit noční recepční.',
  },
  {
    name: 'Dotykačka',
    logo: 'Dotykačka',
    category: 'Restaurační systémy',
    description: 'Pokladní systém pro restaurace a gastro provozy.',
  },
];

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 mb-6 leading-tight">
            Integrace a propojení na další systémy
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
            Abyste mohli využívat vaše oblíbené nástroje a služby, můžete Previo snadno propojit se všemi níže
            uvedenými systémy.
          </p>
        </div>
      </section>

      {/* Filtrace + katalog */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((category, idx) => (
              <button
                // jednoduchý statický filtr (zatím bez interaktivity, primárně vizuální)
                key={category}
                className={[
                  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                  idx === 0
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100',
                ].join(' ')}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTEGRATIONS.map((integration) => (
              <article
                key={integration.name}
                className="relative rounded-2xl border border-slate-200 bg-slate-50 p-5 flex flex-col gap-3"
              >
                {integration.featured ? (
                  <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700">
                    Doporučujeme
                  </span>
                ) : null}
                <div className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-[11px]">
                    {integration.logo}
                  </span>
                  {integration.name}
                </div>
                <p className="text-[11px] uppercase tracking-widest text-slate-400">{integration.category}</p>
                <p className="text-sm text-slate-600 flex-1">{integration.description}</p>
                <button className="mt-2 inline-flex self-start px-5 py-2.5 rounded-[3px] border border-primary-600 text-primary-700 text-sm font-medium hover:bg-primary-50 transition-colors">
                  Navštívit web
                </button>
              </article>
            ))}

            {/* Placeholder pro desítky dalších systémů */}
            <article className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/60 p-5 flex flex-col justify-center text-center text-sm text-slate-500">
              + desítky dalších integrací (POHODA, Money S3, GoPay, Comgate, Yieldplanet, Karta Hosta a další…)
            </article>
          </div>
        </div>
      </section>

      <ConsultationSection />
      <Footer />
    </main>
  );
}

