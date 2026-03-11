import { Navbar } from '@/components/navbar';
import { ConsultationSection } from '@/components/consultation-section';
import { Footer } from '@/components/footer';
import { ChannelIllustration } from '@/components/illustrations/ChannelIllustration';
import { ReportingScene } from '@/components/illustrations/ReportingScene';
import { IntegrationsScene } from '@/components/illustrations/IntegrationsScene';
import { Eyebrow, PageTitle, SectionTitle, Subheading, Body, Lead } from '@/components/ui/typography';
import { Button, ButtonLink } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const BENEFITS = [
  'Úspora času',
  'Minimalizace overbooku',
  'Více rezervací',
  'Omezení chyb',
];

const TOP_PORTALS = [
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
];

export default function ChannelManagerPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow className="mb-4">Distribuce na portály</Eyebrow>
            <PageTitle className="mb-6">Channel manager</PageTitle>
            <Lead>
              Rozšiřte počet svých prodejních kanálů a navyšte si obsazenost. Previo channel manager se za vás postará
              o distribuci na rezervační portály jako Booking.com, Airbnb, Expedia, Hotel.cz a desítky dalších, se
              kterými můžete spolupracovat. Vše z jednoho systému.
            </Lead>
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
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Více portálů, více rezervací */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">
                Získejte větší počet rezervací prodejem na více portálech
              </Subheading>
              <Body className="mb-4">
                Své příjmy můžete zvýšit, pokud své kapacity budete nabízet ve více rezervačních systémech najednou.
                Přitom se nemusíte bát přebookování kapacity. Previo channel manager okamžitě sám aktualizuje počet
                volných pokojů na všech portálech.
              </Body>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="#portaly" variant="secondary" className="px-6 py-3">
                  Seznam portálů
                </ButtonLink>
                <ButtonLink href="#konzultace" variant="primary" className="px-6 py-3">
                  Konzultace zdarma
                </ButtonLink>
              </div>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <IntegrationsScene />
            </div>
          </div>

          {/* Automatický přenos dat */}
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">Automatický přenos dat</Subheading>
              <Body className="mb-4">
                Po změně ceny nebo obsazenosti v Previu jsou automaticky odeslány nové údaje na všechny portály, se
                kterými spolupracujete. Nové, změněné i stornované rezervace jsou automaticky staženy do Previa.
                Notifikace o všech rezervacích vám navíc přijde i do e‑mailové schránky.
              </Body>
              <ul className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                {BENEFITS.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <IntegrationsScene />
            </div>
          </div>

          {/* Ceny a obsazenost z jednoho místa */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Subheading className="mb-3">Ceny a obsazenost z jednoho místa</Subheading>
              <Body>
                Už nikdy více zdlouhavé přihlašování se a ruční zapisování všech změn do jednotlivých extranetů
                několikrát denně. Obsazenost, ceny i restrikce nastavujete pouze v Previu pro všechny portály
                najednou.
              </Body>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <ReportingScene />
            </div>
          </div>

          {/* Revenue management */}
          <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1">
              <Subheading className="mb-3">Více času na Revenue management</Subheading>
              <Body className="mb-4">
                Revenue management vám pomůže snadno zvyšovat nebo snižovat cenu v reakci na aktuální obsazenost. Díky
                přehledným reportům můžete snadno získat praktické informace a sledovat, které prodejní kanály vám
                přináší nejvyšší tržby.
              </Body>
              <ButtonLink href="#konzultace" variant="primary" className="px-6 py-3">
                Konzultace zdarma
              </ButtonLink>
            </div>
            <div className="order-1 md:order-2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <ReportingScene />
            </div>
          </div>
        </div>
      </section>

      {/* TOP 15 portálů */}
      <section id="portaly" className="py-14 md:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <SectionTitle className="mb-3">TOP 15 nejžádanějších portálů</SectionTitle>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center text-xs font-medium text-slate-600">
          {TOP_PORTALS.map((name) => (
            <div
              key={name}
              className="rounded-full border border-slate-200 bg-white px-3 py-2 flex items-center justify-center"
            >
              {name}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center" id="kontakt">
          <ButtonLink href="#konzultace" variant="primary">
            KONZULTACE ZDARMA
          </ButtonLink>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <SectionTitle className="mb-3">Pomocníci pro úspěšné hoteliéry</SectionTitle>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left">
            <Subheading as="h3" className="mb-2 text-lg">
              Rezervační systém
            </Subheading>
            <Body as="p" className="mb-4 text-sm">
              Proměňte návštěvníky na zákazníky pomocí rezervačního systému ve vašem vlastním webu.
            </Body>
            <ButtonLink href="/booking-engine" variant="ghost" className="p-0 h-auto font-medium">
              Více informací
            </ButtonLink>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left">
            <Subheading as="h3" className="mb-2 text-lg">
              Virtuální recepční Alfred
            </Subheading>
            <Body as="p" className="mb-4 text-sm">
              Alfred poskytne vašim hostům komfortní nástroj pro správu jejich rezervace.
            </Body>
            <ButtonLink href="/alfred" variant="ghost" className="p-0 h-auto font-medium">
              Více informací
            </ButtonLink>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left">
            <Subheading as="h3" className="mb-2 text-lg">
              Recepční software
            </Subheading>
            <Body as="p" className="mb-4 text-sm">
              Získejte kompletní přehled o provozu a automatizujte každodenní agendu recepce.
            </Body>
            <ButtonLink href="/pms" variant="ghost" className="p-0 h-auto font-medium">
              Více informací
            </ButtonLink>
          </div>
        </div>
      </section>

      <ConsultationSection />
      <Footer />
    </main>
  );
}
