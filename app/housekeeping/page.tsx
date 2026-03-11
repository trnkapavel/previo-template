import { Navbar } from '@/components/navbar';
import { ConsultationSection } from '@/components/consultation-section';
import { Footer } from '@/components/footer';
import { HousekeepingIllustration } from '@/components/illustrations/HousekeepingIllustration';

export default function HousekeepingPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-primary-700 mb-4 uppercase tracking-widest">
              Mobilní aplikace
            </p>
            <h1 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 mb-6 leading-tight">
              Mobilní aplikace Housekeeping
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Mobilní housekeepingová aplikace bude vaší prodlouženou rukou při správě úklidu vašich ubytovacích
              prostor. Úklidová služba může jednoduše a intuitivně nahlašovat uklizené pokoje přímo do webové verze
              Previa.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Aplikace umožňuje také reportování závad na pokojích včetně fotografií, takže máte o stavu pokojů vždy
              přesnou a aktuální informaci.
            </p>
            <button className="inline-flex px-8 py-4 rounded-[3px] bg-primary-600 text-white text-base font-medium hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20 transition-all">
              Konzultace zdarma
            </button>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-4 h-80 lg:h-auto lg:aspect-[4/3]">
            <HousekeepingIllustration />
          </div>
        </div>
      </section>

      {/* Hlavní výhody */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold text-slate-900 mb-6">
            Hlavní výhody aplikace
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>• Hlášení úklidu pokojů přímo z „terénu“.</li>
            <li>
              • Recepce má aktuální přehled o stavu uklizenosti pokojů a ví, které hosty lze ubytovat a které zatím ne.
            </li>
            <li>• Přiřazování úklidu konkrétních pokojů konkrétním uživatelům.</li>
            <li>
              • Hlášení závad na pokojích – včetně nahrávání fotografií a popisků, aby technik přesně věděl, co je
              potřeba opravit.
            </li>
            <li>• Podrobnější modul úklidů a závad v „klasickém“ Previu.</li>
          </ul>

          <p className="mt-6 text-sm text-slate-600">
            Aplikaci otevřete na adrese <span className="font-mono">housekeeping.previo.app</span>. Podrobnější
            informace o aplikaci naleznete v našem manuálu.
          </p>
        </div>
      </section>

      <ConsultationSection />
      <Footer />
    </main>
  );
}

