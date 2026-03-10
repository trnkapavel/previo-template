import { Navbar } from '@/components/navbar';
import { ConsultationSection } from '@/components/consultation-section';
import { Footer } from '@/components/footer';
import { PaymentIllustration } from '@/components/illustrations/PaymentIllustration';
import { MobileAppScene } from '@/components/illustrations/MobileAppScene';
import { Eyebrow, PageTitle, SectionTitle, Subheading, Body, Lead } from '@/components/ui/typography';
import { ButtonLink } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const GATEWAY_BENEFITS = [
  'Odešlete instrukce k platbě z Previa přímo hostovi na e‑mail.',
  'Hosté mohou rezervaci i doplňkové služby zaplatit ihned při online rezervaci.',
  'Podpora platby ve více měnách.',
  'Rychlá, moderní a bezpečná platba.',
];

const TERMINAL_BENEFITS = [
  'Získejte výhodné podmínky pro provoz platebního terminálu.',
  'Rozšiřte platební možnosti, které nabízíte klientům.',
  'Mějte peníze pod kontrolou – platby vidíte v extranetu brány i v Previu.',
  'U zaručených rezervací snadno provedete ověření či předautorizaci.',
];

export default function PaymentsPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow className="mb-4">Platby a inkaso</Eyebrow>
            <PageTitle className="mb-6">Platební brána a platební terminál</PageTitle>
            <Lead className="mb-4">
              Poskytněte svým klientům moderní způsob platby. Zbavte se zbytečné práce s kontrolou plateb a ušetřete
              na poplatcích. Napojte si platební bránu či platební terminál přímo na Previo.
            </Lead>
            <Body className="mb-6">
              Vaši stávající platební bránu nebo platební terminál napojíme na systém Previo. Po zaplacení účtu
              klientem se tak platba automaticky propíše do konkrétní rezervace a vy se již o nic dalšího nemusíte
              starat. Nemáte ještě platební bránu ani platební terminál? Nevadí – díky spolupráci s ČSOB nabízíme
              komplexní řešení akceptace platebních karet za velmi příznivých podmínek.
            </Body>
            <ButtonLink href="#konzultace" variant="primary">
              Konzultace zdarma
            </ButtonLink>
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
            <Subheading className="mb-4">Výhody platební brány</Subheading>
            <ul className="space-y-3 text-sm text-slate-700">
              {GATEWAY_BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Subheading className="mb-4">Výhody terminálu</Subheading>
            <ul className="space-y-3 text-sm text-slate-700">
              {TERMINAL_BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Terminál z mobilu */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle className="mb-4">Terminál z mobilu</SectionTitle>
            <Body className="mb-4">
              Previo lze propojit nejen s klasickým platebním terminálem, ale díky aplikaci GP tom je možné jako
              terminál využít i mobilní telefon se systémem Android, který má v sobě NFC čip.
            </Body>
            <Body as="p" className="mb-6 text-sm">
              Inkaso plateb tak můžete mít všude s sebou – od recepce přes restauraci až po konferenční sál.
            </Body>
            <ButtonLink href="#konzultace" variant="primary">
              Konzultace zdarma
            </ButtonLink>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white shadow-xl h-72 md:h-80 flex items-center justify-center overflow-hidden">
            <MobileAppScene />
          </div>
        </div>
      </section>

      <ConsultationSection />
      <Footer />
    </main>
  );
}
