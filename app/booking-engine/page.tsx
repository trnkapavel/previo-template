import { Navbar } from '@/components/navbar';
import { ConsultationSection } from '@/components/consultation-section';
import { Footer } from '@/components/footer';
import { BookingIllustration } from '@/components/illustrations/BookingIllustration';
import { PaymentIllustration } from '@/components/illustrations/PaymentIllustration';
import { ChannelIllustration } from '@/components/illustrations/ChannelIllustration';
import { AlfredIllustration } from '@/components/illustrations/AlfredIllustration';
import { IntegrationsScene } from '@/components/illustrations/IntegrationsScene';
import { FinanceScene } from '@/components/illustrations/FinanceScene';
import { MobileAppScene } from '@/components/illustrations/MobileAppScene';
import { Eyebrow, PageTitle, SectionTitle, Subheading, Body, Lead } from '@/components/ui/typography';
import { Button, ButtonLink } from '@/components/ui/button';

export default function BookingEnginePage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow className="mb-4">Rezervační systém</Eyebrow>
            <PageTitle className="mb-6">Online rezervační formulář</PageTitle>
            <Lead className="mb-4">
              Promyšlený rezervační formulář, který lze snadno umístit do jakýchkoliv webových stránek ubytovacího
              zařízení. Klíčovou hodnotou při vývoji a provozu byl a bude konverzní poměr návštěvníků stránek na
              hotelové hosty.
            </Lead>
            <Lead className="mb-4">
              Proto nad každou vlastností R+ důkladně přemýšlíme, abychom vám zajistili vyšší výnosy než s jakýmkoliv
              jiným systémem. Online rezervační formulář od Previa je optimalizovaný pro všechna zařízení. Vaši hosté
              mohou rezervovat odkudkoliv a zážitek bude stejný ve více jak 10 jazycích.
            </Lead>
            <p className="text-base font-semibold text-primary-700 mb-6">
              Klienti Previa získávají až o 30&nbsp;% více přímých rezervací.
            </p>
            <Button variant="primary">Vyzkoušet</Button>
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
              <Subheading className="mb-3">On-line napojení na recepční systém</Subheading>
              <Body className="mb-4">
                Zjistí dostupnost volných pokojů a správnou cenu v reálném čase, čímž poskytne návštěvníkům jistotu
                při objednávce, sníží pravděpodobnost paralelních objednávek do konkurenčních hotelů a omezí
                poptávky na obsazené termíny.
              </Body>
              <Button variant="secondary" className="px-6 py-3">
                Chci více informací
              </Button>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <IntegrationsScene />
            </div>
          </div>

          {/* Minimální počet povinných položek */}
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">Minimální počet povinných položek</Subheading>
              <Body>
                Každý krok zcela srozumitelně a intuitivně zjišťuje pouze jedinou informaci od klienta, čímž netříští
                jeho pozornost a minimalizuje možnost opuštění rezervačního procesu. Jen nezbytným počtem povinných
                položek snižuje riziko znechucení rezervujícího i možnost chyby při zadávání, čímž maximalizuje poměr
                dokončení objednávkového procesu.
              </Body>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-3 h-64 md:h-72">
              <BookingIllustration />
            </div>
          </div>

          {/* Platby */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">Platby</Subheading>
              <Body className="mb-4">
                Nenechte si zákazníka utéci v momentě, kdy je odhodlán koupit. Díky 24/7 dostupné online platební
                bráně mohou vaši hosté kdykoliv bezpečně zaplatit. Jednoduchým impulzem (např. slevou při okamžité
                platbě, non‑refundable, dopředu placeným balíčkem) můžete mít peníze na svém účtu mnohem dříve, čímž
                eliminujete riziko nedojezdů i storna.
              </Body>
              <Button variant="secondary" className="px-6 py-3">
                Chci více informací
              </Button>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-3 h-64 md:h-72">
              <PaymentIllustration />
            </div>
          </div>

          {/* Napojení na další kanály */}
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">Napojení na další online prodejní kanály</Subheading>
              <Body className="mb-4">
                Integrací na Previo váš online rezervační formulář komunikuje se všemi OTA a pokud si host u nich
                udělá rezervaci, vám se kapacita k prodeji okamžitě aktualizuje.
              </Body>
              <Button variant="secondary" className="px-6 py-3">
                Chci více informací
              </Button>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-3 h-64 md:h-72">
              <ChannelIllustration />
            </div>
          </div>

          {/* Prodej doplňkových služeb */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">Prodej doplňkových služeb</Subheading>
              <Body>
                Nabídněte vašim hostům možnost objednat si služby navíc a navyšte tím svůj příjem. Doobjednat mohou
                veškeré služby, které máte zadané v Previu.
              </Body>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <MobileAppScene />
            </div>
          </div>

          {/* Variabilní nastavení platby */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <Subheading className="mb-3">Variabilní nastavení způsobu platby</Subheading>
              <Body>
                V závislosti na sezóně můžete nejen cenou, ale i formou dokončení objednávky optimalizovat svou
                obsazenost. Nastavte pro top termíny povinnou platbu dopředu a mimo hlavní sezónu si nechte posílat
                všechny (i nezávazné) poptávky.
              </Body>
            </div>
            <div className="order-1 md:order-2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <FinanceScene />
            </div>
          </div>

          {/* Online check-in */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Subheading className="mb-3">Online check‑in</Subheading>
              <Body className="mb-4">
                Dovolte hostovi udělat check‑in z pohodlí domova a zrychlete tak jeho odbavení na recepci. Ušetříte
                tak drahocenný čas recepčních a zpříjemníte hostovi příjezd do vašeho zařízení, což se pozitivně
                projeví v celkovém hodnocení v recenzích.
              </Body>
              <Button variant="secondary" className="px-6 py-3">
                Chci více informací
              </Button>
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
          <SectionTitle as="h2" className="mb-3 text-white">
            Proč si desítky nových ubytovacích zařízení každý měsíc vybírají Previo?
          </SectionTitle>
          <Body as="p" className="text-slate-200 text-center max-w-2xl mx-auto">
            Získejte až o 30&nbsp;% více přímých rezervací díky promyšlenému rezervačnímu procesu.
          </Body>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-outfit font-semibold mb-2 text-white">329&nbsp;768</p>
            <p className="text-sm text-slate-300">
              online rezervací jsme zpracovali za minulý měsíc
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-outfit font-semibold mb-2 text-white">41&nbsp;652</p>
            <p className="text-sm text-slate-300">
              přímých rezervací jsme pomohli ubytovatelům získat
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-outfit font-semibold mb-2 text-white">4&nbsp;911</p>
            <p className="text-sm text-slate-300">ubytovatelům šetříme čas každý den</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href="#konzultace" variant="primary">
            KONZULTACE ZDARMA
          </ButtonLink>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <SectionTitle className="mb-3">Pomocníci pro úspěšné hoteliéry</SectionTitle>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
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
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left">
            <Subheading as="h3" className="mb-2 text-lg">
              Rezervační portály
            </Subheading>
            <Body as="p" className="mb-4 text-sm">
              Získejte ještě více rezervací od 350+ českých i zahraničních ubytovacích portálů.
            </Body>
            <ButtonLink href="/channel-manager" variant="ghost" className="p-0 h-auto font-medium">
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
