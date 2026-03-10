import { Navbar } from '@/components/navbar';
import { ConsultationSection } from '@/components/consultation-section';
import { Footer } from '@/components/footer';
import { PaymentIllustration } from '@/components/illustrations/PaymentIllustration';

export default function PaymentsPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-primary-700 mb-4 uppercase tracking-widest">
              Platby a inkaso
            </p>
            <h1 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 mb-6 leading-tight">
              Platební brána a platební terminál
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Poskytněte svým klientům moderní způsob platby. Zbavte se zbytečné práce s kontrolou plateb a ušetřete
              na poplatcích. Napojte si platební bránu či platební terminál přímo na Previo.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Vaši stávající platební bránu nebo platební terminál napojíme na systém Previo. Po zaplacení účtu
              klientem se tak platba automaticky propíše do konkrétní rezervace a vy se již o nic dalšího nemusíte
              starat. Nemáte ještě platební bránu ani platební terminál? Nevadí – díky spolupráci s ČSOB nabízíme
              komplexní řešení akceptace platebních karet za velmi příznivých podmínek.
            </p>
            <button className="inline-flex px-8 py-3 rounded-[3px] bg-primary-600 text-white text-base font-medium hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20 transition-all">
              Konzultace zdarma
            </button>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl -z-10" />
            <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-4 h-80 lg:h-auto lg:aspect-[4/3]">
              <PaymentIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Výhody */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">Výhody platební brány</h2>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>• Odešlete instrukce k platbě z Previa přímo hostovi na e‑mail.</li>
              <li>• Hosté mohou rezervaci i doplňkové služby zaplatit ihned při online rezervaci.</li>
              <li>• Podpora platby ve více měnách.</li>
              <li>• Rychlá, moderní a bezpečná platba.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">Výhody terminálu</h2>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>• Získejte výhodné podmínky pro provoz platebního terminálu.</li>
              <li>• Rozšiřte platební možnosti, které nabízíte klientům.</li>
              <li>• Mějte peníze pod kontrolou – platby vidíte v extranetu brány i v Previu.</li>
              <li>• U zaručených rezervací snadno provedete ověření či předautorizaci.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Terminál z mobilu */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-outfit font-bold text-slate-900 mb-4">Terminál z mobilu</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Previo lze propojit nejen s klasickým platebním terminálem, ale díky aplikaci GP tom je možné jako
              terminál využít i mobilní telefon se systémem Android, který má v sobě NFC čip.
            </p>
            <p className="text-slate-600 text-sm mb-6">
              Inkaso plateb tak můžete mít všude s sebou – od recepce přes restauraci až po konferenční sál.
            </p>
            <button className="inline-flex px-8 py-3 rounded-[3px] bg-primary-600 text-white text-base font-medium hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20 transition-all">
              Konzultace zdarma
            </button>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white shadow-xl h-72 md:h-80 flex items-center justify-center text-slate-400 text-sm">
            Mobilní telefon přikládaný k jinému zařízení / bezkontaktní platba
          </div>
        </div>
      </section>

      <ConsultationSection />
      <Footer />
    </main>
  );
}

