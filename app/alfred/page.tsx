import { Navbar } from '@/components/navbar';
import { ConsultationSection } from '@/components/consultation-section';
import { Footer } from '@/components/footer';
import { AlfredIllustration } from '@/components/illustrations/AlfredIllustration';

export default function AlfredPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-primary-700 mb-4 uppercase tracking-widest">
              Virtuální recepční
            </p>
            <h1 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 mb-6 leading-tight">
              Virtuální recepční Alfred
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Aplikace Alfred poskytne vašim hostům komfortní nástroj pro správu jejich rezervace. Online check‑in,
              přiobjednání služeb, online platba, otevření dveří do pokoje či zrušení úklidu zpříjemní hostům pobyt a
              vám ušetří čas i peníze.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Ideální pomocník pro hosta na cestách. Nezáleží na tom, jestli jede do práce nebo sedí v pohodlí domova.
              Host vyplní povinné údaje kdykoliv se mu to hodí.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-medium mb-6">
              {['Online check‑in', 'Digitální podpis', 'Online platba', 'Propojení na Previo'].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full bg-white border border-slate-200 px-3 py-1 text-slate-700"
                >
                  {label}
                </span>
              ))}
            </div>
            <button className="inline-flex px-8 py-3 rounded-[3px] bg-primary-600 text-white text-base font-medium hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20 transition-all">
              Konzultace zdarma
            </button>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl -z-10" />
            <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-4 h-80 lg:h-auto lg:aspect-[4/3]">
              <AlfredIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Funkce */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Online check‑in */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Online check‑in</h2>
              <p className="text-slate-600 leading-relaxed">
                Dovolte hostovi udělat check‑in z pohodlí domova a zrychlete tak jeho odbavení na recepci. Ušetříte
                drahocenný čas recepčních a zpříjemníte hostovi příjezd do vašeho zařízení, což se pozitivně projeví v
                recenzích.
              </p>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 flex items-center justify-center text-slate-400 text-sm">
              Formulář online check‑inu v mobilu
            </div>
          </div>

          {/* Digitální podpis */}
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Digitální podpis</h2>
              <p className="text-slate-600 leading-relaxed">
                Díky digitálnímu podpisu se pro vás stane check‑in hračkou. Žádné čekání na tisk papíru pro jeden
                podpis – vše se vyřeší z domova nebo rychle a bezkontaktně na recepci. Podpis se automaticky přenese
                do karty hosta v Previu.
              </p>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 flex items-center justify-center text-slate-400 text-sm">
              Podepisování na displeji telefonu / tabletu
            </div>
          </div>

          {/* Klíč od pokoje */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Klíč od pokoje</h2>
              <p className="text-slate-600 leading-relaxed">
                Bluetooth zámky nebo PIN kód ke schránce s klíčem či kartou od pokoje – pro Alfreda hračka. Stačí
                jedno kliknutí a host je v pohodlí pokoje. Pokud chcete, Alfred hosta bez zaplacení dovnitř nepustí.
              </p>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 flex items-center justify-center text-slate-400 text-sm">
              Otevírání dveří přes mobil
            </div>
          </div>

          {/* Dokoupení služeb */}
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Dokoupení služeb</h2>
              <p className="text-slate-600 leading-relaxed">
                Co takhle snídani na pokoj, masáž nebo zapůjčení kola? Hotelové služby si lze snadno objednat pomocí
                aplikace Alfred přímo z mobilu na pokoji.
              </p>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 flex items-center justify-center text-slate-400 text-sm">
              Výběr služeb v aplikaci
            </div>
          </div>

          {/* Platby */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Platby</h2>
              <p className="text-slate-600 leading-relaxed">
                Za pobyt a služby zaplatí host pomocí Alfreda snadno. Aplikace vystaví a odešle účetní doklad do
                e‑mailu hosta, který může rovnou uhradit online. Podle nastaveného typu platby v Previu rozhodujete,
                kdy vám host platí.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 h-64 flex items-center justify-center text-slate-400 text-sm">
              Platební brána v aplikaci
            </div>
          </div>

          {/* Hotel a okolí */}
          <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Hotel a okolí</h2>
              <p className="text-slate-600 leading-relaxed">
                Tipy na výlet v okolí, restaurace, atrakce a zajímavosti, konkrétní výlety i kulturní akce – veškeré
                informace o vašem hotelu má host vždy po ruce.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-2xl border border-slate-200 bg-slate-50 h-64 flex items-center justify-center text-slate-400 text-sm">
              Tipy na výlety v Alfredovi
            </div>
          </div>

          {/* Green Option */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Green Option – myslíme na budoucnost
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Myslíme i na planetu – každý odložený úklid pomáhá šetřit zdroje. Alfred hosta vyzve ke zrušení
                průběžného úklidu s motivací například ve formě zasazení stromu.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 h-64 flex items-center justify-center text-slate-400 text-sm">
              Green Option – zrušení úklidu v aplikaci
            </div>
          </div>

          {/* Jedna technologie více možností */}
          <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Jedna technologie, více možností
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Alfred si rozumí se všemi druhy zařízení. Můžete jej používat v tabletu, mobilu nebo i na recepci v
                moderním kiosku.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                Uvažujete o recepčním kiosku? Ozvěte se nám – poradíme vám s výběrem, aby Alfred na kiosku dobře
                fungoval.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-2xl border border-slate-200 bg-slate-50 h-64 flex items-center justify-center text-slate-400 text-sm">
              Samoobslužný recepční kiosek
            </div>
          </div>
        </div>
      </section>

      {/* Statistická sekce */}
      <section className="py-20 md:py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold mb-3">Alfred se postaral o</h2>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl md:text-3xl font-outfit font-semibold mb-1">1&nbsp;551&nbsp;600</p>
            <p className="text-xs text-slate-300">check‑inů</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-outfit font-semibold mb-1">428&nbsp;960</p>
            <p className="text-xs text-slate-300">podpisů</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-outfit font-semibold mb-1">241&nbsp;mil. Kč</p>
            <p className="text-xs text-slate-300">v zaplacených rezervacích</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-outfit font-semibold mb-1">4&nbsp;382</p>
            <p className="text-xs text-slate-300">hotelů</p>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-slate-300">
          Podrobnější informace o aplikaci naleznete v našem manuálu.
        </div>
        <div className="mt-8 text-center" />
      </section>

      <ConsultationSection />
      <Footer />
    </main>
  );
}

