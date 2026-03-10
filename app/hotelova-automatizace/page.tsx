import { Navbar } from '@/components/navbar';
import { ConsultationSection } from '@/components/consultation-section';
import { Footer } from '@/components/footer';
import { AutomationIllustration } from '@/components/illustrations/AutomationIllustration';

export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-primary-700 mb-4 uppercase tracking-widest">
              Automatizace provozu
            </p>
            <h1 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 mb-6 leading-tight">
              Automatizace pro hotely, penziony a apartmány
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Automatizujte provoz od check‑inu přes přístup na pokoje až po řízení vytápění. Snížíte náklady, zbavíte
              se rutinní práce a můžete se věnovat hostům nebo si užít více volného času.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Previo umožňuje propojení s řadou technologií, které vám pomohou zcela nebo částečně automatizovat
              provoz. Informace z propojených technologií uvidíte přímo v recepčním systému, který zároveň řídí jejich
              chování.
            </p>
            <button className="inline-flex px-8 py-3 rounded-[3px] bg-primary-600 text-white text-base font-medium hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20 transition-all">
              Konzultace zdarma
            </button>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-4 h-80 lg:h-auto lg:aspect-[4/3]">
            <AutomationIllustration />
          </div>
        </div>
      </section>

      {/* Pro bezobslužnou recepci – rozcestník */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold text-slate-900 mb-3">
            Pro bezobslužnou recepci
          </h2>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
            <h3 className="font-semibold text-slate-900">Chytré kliky</h3>
            <button className="self-start text-xs font-medium text-primary-600 hover:text-primary-700">
              Více o klikách
            </button>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
            <h3 className="font-semibold text-slate-900">Keyguru box</h3>
            <button className="self-start text-xs font-medium text-primary-600 hover:text-primary-700">
              Více o boxech
            </button>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
            <h3 className="font-semibold text-slate-900">Recepční kiosek</h3>
            <button className="self-start text-xs font-medium text-primary-600 hover:text-primary-700">
              Více o kiosku
            </button>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
            <h3 className="font-semibold text-slate-900">Aplikace Alfred</h3>
            <button className="self-start text-xs font-medium text-primary-600 hover:text-primary-700">
              Více o Alfredovi
            </button>
          </div>
        </div>
      </section>

      {/* Detailní podsekce */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-sm text-slate-700">
          {/* Chytré kliky */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Chytré kliky</h2>
              <p className="leading-relaxed mb-3">
                Díky chytrým klikám mohou hosté získat přístup do pokoje automaticky bez návštěvy recepce. Stačí jim
                PIN zaslaný na mobil nebo přístupová karta.
              </p>
              <p className="leading-relaxed mb-3">
                O kompletní správu přístupu se postará Previo. Doporučujeme zámkový systém Smartkey.
              </p>
              <button className="inline-flex px-4 py-2 rounded-[3px] border border-primary-600 text-primary-700 text-xs font-medium hover:bg-primary-50 transition-colors">
                Seznam integrovaných zámkových systémů
              </button>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-white h-64 flex items-center justify-center text-slate-400">
              Chytrá klika na dveřích
            </div>
          </div>

          {/* Elektronické boxy */}
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Elektronické boxy</h2>
              <p className="leading-relaxed mb-3">
                Elektronické boxy zajistí předávání klíčů a karet bez přítomnosti personálu a bez nutnosti měnit zámky
                u dveří. S oblibou se využívají pro zajištění noční recepce.
              </p>
              <p className="leading-relaxed">
                Jednotlivé přihrádky se otevírají pomocí PINu, který host obdrží před příjezdem automaticky ze systému
                Previo.
              </p>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-white h-64 flex items-center justify-center text-slate-400">
              Skříňka Keyguru na stěně
            </div>
          </div>

          {/* Recepční kiosek */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Recepční kiosek</h2>
              <p className="leading-relaxed mb-3">
                Recepční kiosek umožní hostům provést check‑in na recepci samostatně, bez přítomnosti personálu. Na
                kiosku běží intuitivní aplikace Alfred, která hosta provede celým procesem.
              </p>
              <p className="leading-relaxed text-sm">
                Uvažujete o recepčním kiosku? Ozvěte se nám – poradíme s výběrem, aby Alfred na kiosku dobře fungoval.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white h-64 flex items-center justify-center text-slate-400">
              Stojanový dotykový kiosek
            </div>
          </div>

          {/* Virtuální recepční Alfred */}
          <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Virtuální recepční Alfred
              </h2>
              <p className="leading-relaxed mb-3">
                Alfred je vrcholem automatizačních technologií. Poskytne hostům komfortní nástroj pro správu
                rezervace a provází je po celou dobu pobytu.
              </p>
              <p className="leading-relaxed mb-3">
                Online check‑in, přiobjednání služeb, online platba, otevření dveří do pokoje či zrušení úklidu
                zpříjemní hostům pobyt a vám ušetří čas a peníze.
              </p>
              <a
                href="/alfred"
                className="inline-flex px-4 py-2 rounded-[3px] border border-primary-600 text-primary-700 text-xs font-medium hover:bg-primary-50 transition-colors"
              >
                Podrobně o Alfredovi
              </a>
            </div>
            <div className="order-1 md:order-2 rounded-2xl border border-slate-200 bg-white h-64 flex items-center justify-center text-slate-400">
              Náhled aplikace Alfred
            </div>
          </div>
        </div>
      </section>

      <ConsultationSection />
      <Footer />
    </main>
  );
}

