import { Navbar } from '@/components/navbar';
import { ConsultationSection } from '@/components/consultation-section';
import { Footer } from '@/components/footer';
import { ChannelIllustration } from '@/components/illustrations/ChannelIllustration';

export default function ChannelManagerPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-primary-700 mb-4 uppercase tracking-widest">
              Distribuce na portály
            </p>
            <h1 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 mb-6 leading-tight">
              Channel manager
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Rozšiřte počet svých prodejních kanálů a navyšte si obsazenost. Previo channel manager se za vás postará
              o distribuci na rezervační portály jako Booking.com, Airbnb, Expedia, Hotel.cz a desítky dalších, se
              kterými můžete spolupracovat. Vše z jednoho systému.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl -z-10" />
            <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-4 h-80 lg:h-auto lg:aspect-[4/3]">
              <ChannelIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Sekce funkcí */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Více portálů, více rezervací */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Získejte větší počet rezervací prodejem na více portálech
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Své příjmy můžete zvýšit, pokud své kapacity budete nabízet ve více rezervačních systémech najednou.
                Přitom se nemusíte bát přebookování kapacity. Previo channel manager okamžitě sám aktualizuje počet
                volných pokojů na všech portálech.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#portaly"
                  className="inline-flex px-6 py-2 rounded-[3px] border border-primary-600 text-primary-700 text-sm font-medium hover:bg-primary-50 transition-colors"
                >
                  Seznam portálů
                </a>
                <a
                  href="#kontakt"
                  className="inline-flex px-6 py-2 rounded-[3px] bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors"
                >
                  Konzultace zdarma
                </a>
              </div>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center text-slate-400 text-sm">
              Schéma Previo &rarr; portály
            </div>
          </div>

          {/* Automatický přenos dat */}
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Automatický přenos dat</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Po změně ceny nebo obsazenosti v Previu jsou automaticky odeslány nové údaje na všechny portály, se
                kterými spolupracujete. Nové, změněné i stornované rezervace jsou automaticky staženy do Previa.
                Notifikace o všech rezervacích vám navíc přijde i do e‑mailové schránky.
              </p>
              <ul className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
                  Úspora času
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
                  Minimalizace overbooku
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
                  Více rezervací
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
                  Omezení chyb
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center text-slate-400 text-sm">
              Tok dat mezi portály a Previem
            </div>
          </div>

          {/* Ceny a obsazenost z jednoho místa */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Ceny a obsazenost z jednoho místa
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Už nikdy více zdlouhavé přihlašování se a ruční zapisování všech změn do jednotlivých extranetů
                několikrát denně. Obsazenost, ceny i restrikce nastavujete pouze v Previu pro všechny portály
                najednou.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center text-slate-400 text-sm">
              Náhled nastavení cenových plánů v Previu
            </div>
          </div>

          {/* Revenue management */}
          <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Více času na Revenue management
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Revenue management vám pomůže snadno zvyšovat nebo snižovat cenu v reakci na aktuální obsazenost. Díky
                přehledným reportům můžete snadno získat praktické informace a sledovat, které prodejní kanály vám
                přináší nejvyšší tržby.
              </p>
              <a
                href="#kontakt"
                className="inline-flex px-6 py-2 rounded-[3px] bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                Konzultace zdarma
              </a>
            </div>
            <div className="order-1 md:order-2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center text-slate-400 text-sm">
              Dashboard pro revenue management
            </div>
          </div>
        </div>
      </section>

      {/* TOP 15 portálů */}
      <section id="portaly" className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold text-slate-900 mb-3">
            TOP 15 nejžádanějších portálů
          </h2>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center text-xs font-medium text-slate-600">
          {[
            'Booking.com',
            'Airbnb',
            'Expedia',
            'Agoda',
            'Hotel.cz',
            'HRS',
            'Trivago',
            'Hotels.com',
            'Google Hotel Ads',
            'Tripadvisor',
            'Slevomat',
            'Lastminute',
            'Kayak',
            'eHotel',
            'Další…',
          ].map((name) => (
            <div
              key={name}
              className="rounded-full border border-slate-200 bg-white px-3 py-2 flex items-center justify-center"
            >
              {name}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center" id="kontakt">
          <button className="inline-flex px-8 py-3 rounded-[3px] bg-primary-600 text-white text-base font-medium hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20 transition-all">
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
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Rezervační systém</h3>
            <p className="text-sm text-slate-600 mb-4">
              Proměňte návštěvníky na zákazníky pomocí rezervačního systému ve vašem vlastním webu.
            </p>
            <a href="/booking-engine" className="text-sm font-medium text-primary-600 hover:text-primary-700">
              Více informací
            </a>
          </div>
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
        </div>
      </section>

      <ConsultationSection />
      <Footer />
    </main>
  );
}

