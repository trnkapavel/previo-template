import { Navbar } from '@/components/navbar';
import { ConsultationSection } from '@/components/consultation-section';
import { Footer } from '@/components/footer';
import { BookingIllustration } from '@/components/illustrations/BookingIllustration';
import { PaymentIllustration } from '@/components/illustrations/PaymentIllustration';
import { ChannelIllustration } from '@/components/illustrations/ChannelIllustration';
import { AlfredIllustration } from '@/components/illustrations/AlfredIllustration';

export default function BookingEnginePage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-primary-700 mb-4 uppercase tracking-widest">
              Rezervační systém
            </p>
            <h1 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 mb-6 leading-tight">
              Online rezervační formulář
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Promyšlený rezervační formulář, který lze snadno umístit do jakýchkoliv webových stránek ubytovacího
              zařízení. Klíčovou hodnotou při vývoji a provozu byl a bude konverzní poměr návštěvníků stránek na
              hotelové hosty.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Proto nad každou vlastností R+ důkladně přemýšlíme, abychom vám zajistili vyšší výnosy než s jakýmkoliv
              jiným systémem. Online rezervační formulář od Previa je optimalizovaný pro všechna zařízení. Vaši hosté
              mohou rezervovat odkudkoliv a zážitek bude stejný ve více jak 10 jazycích.
            </p>
            <p className="text-base font-semibold text-primary-700 mb-6">
              Klienti Previa získávají až o 30&nbsp;% více přímých rezervací.
            </p>
            <button className="inline-flex px-8 py-3 rounded-[3px] bg-primary-600 text-white text-base font-medium hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20 transition-all">
              Vyzkoušet
            </button>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl -z-10" />
            <div className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                alt="Náhled online rezervačního formuláře"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sekce funkcí */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* On-line napojení */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                On-line napojení na recepční systém
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Zjistí dostupnost volných pokojů a správnou cenu v reálném čase, čímž poskytne návštěvníkům jistotu
                při objednávce, sníží pravděpodobnost paralelních objednávek do konkurenčních hotelů a omezí
                poptávky na obsazené termíny.
              </p>
              <button className="inline-flex px-6 py-2 rounded-[3px] border border-primary-600 text-primary-700 text-sm font-medium hover:bg-primary-50 transition-colors">
                Chci více informací
              </button>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center text-slate-400 text-sm">
              Znázornění propojení rezervace a plachty
            </div>
          </div>

          {/* Minimální počet povinných položek */}
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Minimální počet povinných položek
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Každý krok zcela srozumitelně a intuitivně zjišťuje pouze jedinou informaci od klienta, čímž netříští
                jeho pozornost a minimalizuje možnost opuštění rezervačního procesu. Jen nezbytným počtem povinných
                položek snižuje riziko znechucení rezervujícího i možnost chyby při zadávání, čímž maximalizuje poměr
                dokončení objednávkového procesu.
              </p>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-3 h-64 md:h-72">
              <BookingIllustration />
            </div>
          </div>

          {/* Platby */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Platby</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Nenechte si zákazníka utéci v momentě, kdy je odhodlán koupit. Díky 24/7 dostupné online platební
                bráně mohou vaši hosté kdykoliv bezpečně zaplatit. Jednoduchým impulzem (např. slevou při okamžité
                platbě, non‑refundable, dopředu placeným balíčkem) můžete mít peníze na svém účtu mnohem dříve, čímž
                eliminujete riziko nedojezdů i storna.
              </p>
              <button className="inline-flex px-6 py-2 rounded-[3px] border border-primary-600 text-primary-700 text-sm font-medium hover:bg-primary-50 transition-colors">
                Chci více informací
              </button>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-3 h-64 md:h-72">
              <PaymentIllustration />
            </div>
          </div>

          {/* Napojení na další kanály */}
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Napojení na další online prodejní kanály
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Integrací na Previo váš online rezervační formulář komunikuje se všemi OTA a pokud si host u nich
                udělá rezervaci, vám se kapacita k prodeji okamžitě aktualizuje.
              </p>
              <button className="mt-4 inline-flex px-6 py-2 rounded-[3px] border border-primary-600 text-primary-700 text-sm font-medium hover:bg-primary-50 transition-colors">
                Chci více informací
              </button>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-3 h-64 md:h-72">
              <ChannelIllustration />
            </div>
          </div>

          {/* Prodej doplňkových služeb */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Prodej doplňkových služeb</h2>
              <p className="text-slate-600 leading-relaxed">
                Nabídněte vašim hostům možnost objednat si služby navíc a navyšte tím svůj příjem. Doobjednat mohou
                veškeré služby, které máte zadané v Previu.
              </p>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center text-slate-400 text-sm">
              Krok „přidat snídani / masáž“ v rezervaci
            </div>
          </div>

          {/* Variabilní nastavení platby */}
          <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Variabilní nastavení způsobu platby
              </h2>
              <p className="text-slate-600 leading-relaxed">
                V závislosti na sezóně můžete nejen cenou, ale i formou dokončení objednávky optimalizovat svou
                obsazenost. Nastavte pro top termíny povinnou platbu dopředu a mimo hlavní sezónu si nechte posílat
                všechny (i nezávazné) poptávky.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center text-slate-400 text-sm">
              Konfigurace platebních podmínek
            </div>
          </div>

          {/* Online check-in */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Online check‑in</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Dovolte hostovi udělat check‑in z pohodlí domova a zrychlete tak jeho odbavení na recepci. Ušetříte
                tak drahocenný čas recepčních a zpříjemníte hostovi příjezd do vašeho zařízení, což se pozitivně
                projeví v celkovém hodnocení v recenzích.
              </p>
              <button className="inline-flex px-6 py-2 rounded-[3px] border border-primary-600 text-primary-700 text-sm font-medium hover:bg-primary-50 transition-colors">
                Chci více informací
              </button>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-3 h-64 md:h-72">
              <AlfredIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Statistická sekce */}
      <section className="py-20 md:py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold mb-3">
            Proč si desítky nových ubytovacích zařízení každý měsíc vybírají Previo?
          </h2>
          <p className="text-slate-200">
            Získejte až o 30&nbsp;% více přímých rezervací díky promyšlenému rezervačnímu procesu.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-outfit font-semibold mb-2">329&nbsp;768</p>
            <p className="text-sm text-slate-300">
              online rezervací jsme zpracovali za minulý měsíc
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-outfit font-semibold mb-2">41&nbsp;652</p>
            <p className="text-sm text-slate-300">
              přímých rezervací jsme pomohli ubytovatelům získat
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-outfit font-semibold mb-2">4&nbsp;911</p>
            <p className="text-sm text-slate-300">ubytovatelům šetříme čas každý den</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="inline-flex px-8 py-3 rounded-[3px] bg-primary-500 text-white text-base font-medium hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/20 transition-all">
            KONZULTACE ZDARMA
          </button>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold text-slate-900 mb-3">
            Pomocníci pro úspěšné hoteliéry
          </h2>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Virtuální recepční Alfred</h3>
            <p className="text-sm text-slate-600 mb-4">
              Alfred poskytne vašim hostům komfortní nástroj pro správu jejich rezervace.
            </p>
            <a href="/alfred" className="text-sm font-medium text-primary-600 hover:text-primary-700">
              Více informací
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Recepční software</h3>
            <p className="text-sm text-slate-600 mb-4">
              Získejte kompletní přehled o provozu a automatizujte každodenní agendu recepce.
            </p>
            <a href="/pms" className="text-sm font-medium text-primary-600 hover:text-primary-700">
              Více informací
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Rezervační portály</h3>
            <p className="text-sm text-slate-600 mb-4">
              Získejte ještě více rezervací od 350+ českých i zahraničních ubytovacích portálů.
            </p>
            <a href="/channel-manager" className="text-sm font-medium text-primary-600 hover:text-primary-700">
              Více informací
            </a>
          </div>
        </div>
      </section>

      <ConsultationSection />
      <Footer />
    </main>
  );
}

