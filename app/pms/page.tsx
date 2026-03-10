import { Navbar } from '@/components/navbar';
import { ConsultationSection } from '@/components/consultation-section';
import { Footer } from '@/components/footer';
import { PmsIllustration } from '@/components/illustrations/PmsIllustration';
import { ReportingIllustration } from '@/components/illustrations/ReportingIllustration';
import { HousekeepingIllustration } from '@/components/illustrations/HousekeepingIllustration';

export default function PmsPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-primary-700 mb-4 uppercase tracking-widest">
              Hotelový software
            </p>
            <h1 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 mb-6 leading-tight">
              Recepční systém
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Previo se stane srdcem vašeho hotelu. Jedná se o on-line cloudové řešení, díky tomu můžete své
              zařízení spravovat kdykoliv a odkudkoliv. Díky Previo recepčnímu systému se pro vás každodenní provoz
              stane hračkou. Nejčastěji prováděné operace máte vždy k dispozici na pravém tlačítku myši. Vystavujte
              doklady a platby přímo z rezervace. Evidujte hosty i firmy a využijte tyto data pro váš automatizovaný
              e‑mail marketing.
            </p>
            <button className="inline-flex px-8 py-3 rounded-[3px] bg-primary-600 text-white text-base font-medium hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20 transition-all">
              KONZULTACE ZDARMA
            </button>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary-100/40 rounded-full blur-3xl -z-10" />
            <div className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
                alt="Náhled recepčního systému"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Funkce – sekce ve Z-layoutu */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold text-slate-900 mb-4">
            Vše pro každodenní chod recepce
          </h2>
          <p className="text-slate-600">
            Previo recepční systém pokrývá celý provoz – od přehledu rezervací, přes reporting až po integrace a
            automatickou komunikaci s hosty.
          </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interaktivní plachta rezervací */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Interaktivní plachta rezervací
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Jedno místo, kde máte přehledně všechny rezervace. Snadno je můžete přesouvat, prodlužovat a
                zkracovat pouhým tažením myši. Hosta ubytujete jedním kliknutím. Detailní informace o rezervaci
                získáte po najetí myši bez nutnosti rezervaci otevírat. Mimo to je možné evidovat minutový provoz,
                takže můžete spravovat i rezervace stolů v restauraci, sportovišť nebo wellness zařízení.
              </p>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-3 h-64 md:h-72">
              <PmsIllustration />
            </div>
          </div>

          {/* Dashboard */}
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Dashboard</h3>
              <p className="text-slate-600 leading-relaxed">
                Získejte kompletní přehled o vašem hotelu na jedno kliknutí, jakmile ráno usednete k počítači.
                Tržby, RevPar, ADR, nové rezervace – to vše přehledně na jednom místě.
              </p>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-3 h-64 md:h-72">
              <ReportingIllustration />
            </div>
          </div>

          {/* Legislativní povinnosti */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Na legislativní povinnosti už nemusíte myslet
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Automatické odesílání hlášení cizinců se o vše postará za vás a vy získáte více času, který můžete
                věnovat svým hostům.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs font-medium text-slate-500">
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                  Logo UbyPort
                </span>
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                  Logo ČSÚ
                </span>
              </div>
            </div>
          </div>

          {/* Reporty */}
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Reporty – data, která pracují pro vás
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Snadno zjistíte, které OTA vám přináší největší počet rezervací či jakou platební metodou vám
                přicházejí nejvyšší tržby. Jednoduše, ať řešíte provozní nebo finanční stránku vašeho zařízení, vše
                tu máte přehledně jako na dlani.
              </p>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center text-slate-400 text-sm">
              Náhled finančního reportu
            </div>
          </div>

          {/* Integrace */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Integrace</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Previo je možné napojit na další systémy, které používáte pro provoz. Restaurační, účetní, zámkové
                systémy, čtečky dokladů a další…
              </p>
              <button className="inline-flex px-6 py-2 rounded-[3px] border border-primary-600 text-primary-700 text-sm font-medium hover:bg-primary-50 transition-colors">
                Zobrazit všechny integrace
              </button>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center text-slate-400 text-sm">
              Mřížka log integrovaných systémů / API
            </div>
          </div>

          {/* Stále v pohybu */}
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Stále v pohybu</h3>
              <p className="text-slate-600 leading-relaxed">
                Váš ideální pomocník na cestách. Nezáleží na tom, jestli jedete na měsíční dovolenou, nebo pouze
                nebudete mít přes víkend notebook k dispozici, Previo mobilní aplikaci máte vždy po ruce.
              </p>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center text-slate-400 text-sm">
              Mockup mobilní aplikace Previo
            </div>
          </div>

          {/* Efektivnější úklid */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Efektivnější úklid</h3>
              <p className="text-slate-600 leading-relaxed">
                Modul úklid umožňuje zaměstnancům úklidu, kteří jsou neustále v pohybu, přístup z mobilního
                telefonu k nejaktuálnějším informacím o pokojích.
              </p>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-3 h-64 md:h-72">
              <HousekeepingIllustration />
            </div>
          </div>

          {/* Doklady a faktury */}
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Doklady a faktury</h3>
              <p className="text-slate-600 leading-relaxed">
                Mějte doklady a rezervace na jednom místě. Zálohové listy, faktury i prodejky se vytvářejí
                automaticky. Potřebujete doklady pro účetní? Využijte exportů do nejpoužívanějších účetních
                softwarů nebo vytvořte přístup vaší účetní, která uvidí do dokladů.
              </p>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center text-slate-400 text-sm">
              Vygenerovaná faktura / modul účtování
            </div>
          </div>

          {/* Drobný prodej a sklad */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Drobný prodej a kusový sklad
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Můžete vést jednoduchou skladovou evidenci prodaného zboží a prodeje přes hotelový účet, který vám
                vyřeší drobný prodej na recepci.
              </p>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center text-slate-400 text-sm">
              Náhled položek skladu
            </div>
          </div>

          {/* Automatická komunikace */}
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Automatická komunikace s hostem
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Vylepšete zážitek vašeho hosta díky automatickému potvrzení pobytu, informacím před i po pobytu.
                Popřejte mu k narozeninám nebo požádejte o recenzi. Udržujte kontakt s hostem od momentu, kdy
                vytvořil rezervaci, napořád.
              </p>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center text-slate-400 text-sm">
              Náhled uvítacího e‑mailu / SMS hostovi
            </div>
          </div>
        </div>
      </section>

      {/* Srovnání verzí */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold text-slate-900 mb-4">
            Vyberte si verzi Previa
          </h2>
          <p className="text-slate-600">
            Ať už máte malý penzion v horách nebo řídíte velký hotelový řetězec v Praze, vyberte si verzi Previa
            podle svých potřeb. Verzi LITE uvítají menší zařízení s nenáročným provozem. Previo PRO usnadní práci
            velkým hoteliérům.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          {/* LITE */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Previo LITE</h3>
            <p className="text-sm text-slate-600 mb-6">
              Ideální pro menší penziony a jednodušší provoz.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Správa rezervací a opcí</li>
              <li>• Databáze hostů a firem</li>
              <li>• Účetní doklady (fakturace)</li>
              <li>• Evidenční kniha, domovní kniha, reporty ČSÚ a MěÚ</li>
              <li>• Mobilní aplikace (správa rezervací)</li>
              <li>• Základní reporty a statistiky</li>
            </ul>
          </div>

          {/* PRO */}
          <div className="rounded-3xl border border-primary-200 bg-white p-8 shadow-md shadow-primary-100/40">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Previo PRO</h3>
            <p className="text-sm text-slate-600 mb-6">
              Kompletní řešení pro náročné hotely a řetězce.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Vše z verze LITE</li>
              <li>• Minutové rezervace (wellness, gastro, sportoviště)</li>
              <li>• Úklid pokojů, závady, úkoly</li>
              <li>• Rastry a market kódy pro reporting</li>
              <li>• Mailing, přímá komunikace (SMS, e‑mail)</li>
              <li>• Pokladna, sklad, importy z bankovnictví</li>
              <li>• Manažerské reporty a statistiky</li>
              <li>• Směnárna, významné dny, revenue management</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="inline-flex px-8 py-3 rounded-[3px] bg-primary-600 text-white text-base font-medium hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20 transition-all">
            KONZULTACE ZDARMA
          </button>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold text-slate-900 mb-3">
            Nejlepší výkon mají společně
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

