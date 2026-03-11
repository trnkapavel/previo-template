import { Navbar } from '@/components/navbar';
import { ConsultationSection } from '@/components/consultation-section';
import { Footer } from '@/components/footer';
import { WebsiteIllustration } from '@/components/illustrations/WebsiteIllustration';

export default function WebsitesPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-primary-700 mb-4 uppercase tracking-widest">
              Webové stránky pro ubytování
            </p>
            <h1 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 mb-6 leading-tight">
              Webové stránky pro hotel, apartmán i penzion
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Získejte webové stránky speciálně navržené pro ubytovací zařízení, které vám pomohou zaujmout více
              hostů a přinesou vám tak více přímých rezervací.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Webové stránky jsou základním nástrojem pro vlastní propagaci a získávání přímých rezervací. Pro váš
              úspěch je proto klíčové, jak vypadají a fungují. Vytvoříme web s ověřeným designem, který s úspěchem
              využívají stovky ubytovacích zařízení.
            </p>
            <button className="inline-flex px-8 py-4 rounded-[3px] bg-primary-600 text-white text-base font-medium hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20 transition-all">
              Nezávazně poptat
            </button>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl -z-10" />
            <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-4 h-80 lg:h-auto lg:aspect-[4/3]">
              <WebsiteIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Proč web od Previa */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold text-slate-900 mb-6 text-center">
            Proč webové stránky od Previa?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-slate-700">
            <p>• Jsme z oboru – vyvíjíme nejpoužívanější hotelový systém v ČR a víme, co hosty zajímá.</p>
            <p>
              • Ušetříme vám práci – popisy pokojů, fotografie, balíčky, recenze, ceny i obsazenost se automaticky
              propisují z Previa.
            </p>
            <p>• Online rezervační formulář je součástí webu – získáte více přímých rezervací.</p>
            <p>• Stránky jsou responzivní pro počítače, tablety i mobilní telefony.</p>
            <p>• Zabezpečení SSL certifikátem a webhosting jsou samozřejmostí a v ceně.</p>
            <p>• Základní SEO optimalizace, aby byl váš web ve vyhledávačích vidět.</p>
            <p>• Nasazení měřicích kódů a analytiky.</p>
            <p>• Jednoduchá správa díky WordPressu – obsah si zvládnete upravovat sami.</p>
            <p>• Naučíme vás s webem pracovat a poskytneme podporu a poradenství.</p>
          </div>
        </div>
      </section>

      {/* Proces tvorby */}
      <section className="py-14 md:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold text-slate-900 mb-10 text-center">
            Jak probíhá tvorba webu
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <p className="text-xs font-semibold text-primary-600 mb-2 uppercase tracking-widest">Krok 1</p>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Vyberte si vzhled a strukturu webu
              </h3>
              <p>
                Máme desítky bloků, ze kterých si můžete poskládat web, nebo návrh necháte na našich konzultantech.
                Inspirujte se referenčními weby.
              </p>
              <button className="mt-4 inline-flex px-6 py-3 rounded-[3px] border border-primary-600 text-primary-700 text-sm font-medium hover:bg-primary-50 transition-colors">
                Prohlédnout referenční weby
              </button>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <p className="text-xs font-semibold text-primary-600 mb-2 uppercase tracking-widest">Krok 2</p>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Doplníme obsah na web</h3>
              <p>
                Připravíte obsah pro svůj web a my z něj poskládáme atraktivní prezentaci vašeho ubytovacího
                zařízení.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <p className="text-xs font-semibold text-primary-600 mb-2 uppercase tracking-widest">Krok 3</p>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Finišujeme</h3>
              <p>
                Vaše nové stránky jsou hotové. Hosté vidí ceny a obsazenost v reálném čase a všechny rezervace
                vytvořené na webu se automaticky přenáší do Previa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reference – pouze struktura */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold text-slate-900 mb-8 text-center">
            Referenční webové stránky
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-slate-700">
            {[
              'Hrad Vildštejn',
              'Aura Wellness Apartment',
              'Chata Zverovka',
              'Château Josefův Důl',
              'Hotel Petrovy Kameny',
              'Apartmány na Vlně',
            ].map((name) => (
              <article
                key={name}
                className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex flex-col"
              >
                <div className="h-32 bg-slate-200" />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">{name}</h3>
                  <button className="mt-auto text-xs font-medium text-primary-600 hover:text-primary-700">
                    Prohlédnout
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-4 text-center text-xs text-slate-500">
            +617 dalších referenčních webů z různých typů ubytovacích zařízení.
          </div>
        </div>
      </section>

      {/* Ceník */}
      <section className="py-14 md:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold text-slate-900 mb-3">
            Ceník webových stránek
          </h2>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Web z předdefinovaných bloků</h3>
            <p className="text-3xl font-outfit font-bold text-slate-900 mb-1">34&nbsp;990 Kč</p>
          </div>
          <div className="rounded-3xl border border-primary-200 bg-white p-8 text-center shadow-md shadow-primary-100/40">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Individuální design webu</h3>
            <p className="text-3xl font-outfit font-bold text-slate-900 mb-1">49&nbsp;990 Kč</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="inline-flex px-8 py-4 rounded-[3px] bg-primary-600 text-white text-base font-medium hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20 transition-all">
            Nezávazně poptat
          </button>
        </div>
      </section>

      <ConsultationSection />
      <Footer />
    </main>
  );
}

