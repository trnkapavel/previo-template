import { Navbar } from '@/components/navbar';
import { ConsultationSection } from '@/components/consultation-section';
import { Footer } from '@/components/footer';
import { ScanIdIllustration } from '@/components/illustrations/ScanIdIllustration';

export default function ScanIdPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-primary-700 mb-4 uppercase tracking-widest">
              Mobilní aplikace
            </p>
            <h1 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 mb-6 leading-tight">
              Mobilní aplikace ScanID
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Představujeme aplikaci ScanID, která vám umožní pomocí mobilního telefonu automaticky načítat osobní
              doklady. Strojové čtení občanských průkazů i pasů snižuje chybovost v zápise údajů do karty hosta.
            </p>
            <button className="inline-flex px-8 py-4 rounded-[3px] bg-primary-600 text-white text-base font-medium hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20 transition-all">
              Konzultace zdarma
            </button>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-4 h-80 lg:h-auto lg:aspect-[4/3]">
            <ScanIdIllustration />
          </div>
        </div>
      </section>

      {/* Jak to funguje */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold text-slate-900 mb-10 text-center">
            Aplikaci jednoduše ovládnete ve třech krocích
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-semibold text-primary-600 mb-2 uppercase tracking-widest">Krok 1</p>
              <p>Na plachtě otevřete detail rezervace a vyberte kartu hosta.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-semibold text-primary-600 mb-2 uppercase tracking-widest">Krok 2</p>
              <p>V kartě hosta v levém rohu klikněte na tlačítko Skener.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-semibold text-primary-600 mb-2 uppercase tracking-widest">Krok 3</p>
              <p>Spusťte aplikaci na mobilu a nascanujte strojovou část dokladu.</p>
            </div>
          </div>

          <p className="mt-8 text-sm text-slate-600 text-center max-w-3xl mx-auto">
            Pro aktivaci kontaktujte obchodního zástupce nebo klikněte na „Konzultace zdarma“, zanechte svůj kontakt a
            my se vám co nejdříve ozveme.
          </p>

          <div className="mt-8 text-center" />
        </div>
      </section>

      <ConsultationSection />
      <Footer />
    </main>
  );
}

