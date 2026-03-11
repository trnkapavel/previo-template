import { Navbar } from '@/components/navbar';
import { ConsultationSection } from '@/components/consultation-section';
import { Footer } from '@/components/footer';
import { AlfredIllustration } from '@/components/illustrations/AlfredIllustration';
import { FinanceScene } from '@/components/illustrations/FinanceScene';
import { MobileAppScene } from '@/components/illustrations/MobileAppScene';
import { Eyebrow, PageTitle, SectionTitle, Subheading, Body, Lead, Small } from '@/components/ui/typography';
import { ButtonLink } from '@/components/ui/button';

const HERO_BADGES = ['Online check‑in', 'Digitální podpis', 'Online platba', 'Propojení na Previo'];

export default function AlfredPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow className="mb-4">Virtuální recepční</Eyebrow>
            <PageTitle className="mb-6">Virtuální recepční Alfred</PageTitle>
            <Lead className="mb-4">
              Aplikace Alfred poskytne vašim hostům komfortní nástroj pro správu jejich rezervace. Online check‑in,
              přiobjednání služeb, online platba, otevření dveří do pokoje či zrušení úklidu zpříjemní hostům pobyt a
              vám ušetří čas i peníze.
            </Lead>
            <Body className="mb-4">
              Ideální pomocník pro hosta na cestách. Nezáleží na tom, jestli jede do práce nebo sedí v pohodlí domova.
              Host vyplní povinné údaje kdykoliv se mu to hodí.
            </Body>
            <div className="flex flex-wrap gap-2 text-xs font-medium mb-6">
              {HERO_BADGES.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full bg-white border border-slate-200 px-3 py-1 text-slate-700"
                >
                  {label}
                </span>
              ))}
            </div>
            <ButtonLink href="#konzultace" variant="primary">
              Konzultace zdarma
            </ButtonLink>
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Online check‑in */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">Online check‑in</Subheading>
              <Body>
                Dovolte hostovi udělat check‑in z pohodlí domova a zrychlete tak jeho odbavení na recepci. Ušetříte
                drahocenný čas recepčních a zpříjemníte hostovi příjezd do vašeho zařízení, což se pozitivně projeví v
                recenzích.
              </Body>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <MobileAppScene />
            </div>
          </div>

          {/* Digitální podpis */}
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">Digitální podpis</Subheading>
              <Body>
                Díky digitálnímu podpisu se pro vás stane check‑in hračkou. Žádné čekání na tisk papíru pro jeden
                podpis – vše se vyřeší z domova nebo rychle a bezkontaktně na recepci. Podpis se automaticky přenese
                do karty hosta v Previu.
              </Body>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <MobileAppScene />
            </div>
          </div>

          {/* Klíč od pokoje */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">Klíč od pokoje</Subheading>
              <Body>
                Bluetooth zámky nebo PIN kód ke schránce s klíčem či kartou od pokoje – pro Alfreda hračka. Stačí
                jedno kliknutí a host je v pohodlí pokoje. Pokud chcete, Alfred hosta bez zaplacení dovnitř nepustí.
              </Body>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <MobileAppScene />
            </div>
          </div>

          {/* Dokoupení služeb */}
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">Dokoupení služeb</Subheading>
              <Body>
                Co takhle snídani na pokoj, masáž nebo zapůjčení kola? Hotelové služby si lze snadno objednat pomocí
                aplikace Alfred přímo z mobilu na pokoji.
              </Body>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <MobileAppScene />
            </div>
          </div>

          {/* Platby */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Subheading className="mb-3">Platby</Subheading>
              <Body>
                Za pobyt a služby zaplatí host pomocí Alfreda snadno. Aplikace vystaví a odešle účetní doklad do
                e‑mailu hosta, který může rovnou uhradit online. Podle nastaveného typu platby v Previu rozhodujete,
                kdy vám host platí.
              </Body>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <FinanceScene />
            </div>
          </div>

          {/* Hotel a okolí */}
          <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1">
              <Subheading className="mb-3">Hotel a okolí</Subheading>
              <Body>
                Tipy na výlet v okolí, restaurace, atrakce a zajímavosti, konkrétní výlety i kulturní akce – veškeré
                informace o vašem hotelu má host vždy po ruce.
              </Body>
            </div>
            <div className="order-1 md:order-2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <MobileAppScene />
            </div>
          </div>

          {/* Green Option */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Subheading className="mb-3">Green Option – myslíme na budoucnost</Subheading>
              <Body>
                Myslíme i na planetu – každý odložený úklid pomáhá šetřit zdroje. Alfred hosta vyzve ke zrušení
                průběžného úklidu s motivací například ve formě zasazení stromu.
              </Body>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <MobileAppScene />
            </div>
          </div>

          {/* Jedna technologie více možností */}
          <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1">
              <Subheading className="mb-3">Jedna technologie, více možností</Subheading>
              <Body className="mb-3">
                Alfred si rozumí se všemi druhy zařízení. Můžete jej používat v tabletu, mobilu nebo i na recepci v
                moderním kiosku.
              </Body>
              <Small>
                Uvažujete o recepčním kiosku? Ozvěte se nám – poradíme vám s výběrem, aby Alfred na kiosku dobře
                fungoval.
              </Small>
            </div>
            <div className="order-1 md:order-2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <MobileAppScene />
            </div>
          </div>
        </div>
      </section>

      {/* Statistická sekce */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <SectionTitle as="h2" className="mb-3 text-white">
            Alfred se postaral o
          </SectionTitle>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl md:text-3xl font-outfit font-semibold mb-1 text-white">1&nbsp;551&nbsp;600</p>
            <Small as="p" className="text-slate-300">check‑inů</Small>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-outfit font-semibold mb-1 text-white">428&nbsp;960</p>
            <Small as="p" className="text-slate-300">podpisů</Small>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-outfit font-semibold mb-1 text-white">241&nbsp;mil. Kč</p>
            <Small as="p" className="text-slate-300">v zaplacených rezervacích</Small>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-outfit font-semibold mb-1 text-white">4&nbsp;382</p>
            <Small as="p" className="text-slate-300">hotelů</Small>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-slate-300">
          Podrobnější informace o aplikaci naleznete v našem manuálu.
        </p>
        <div className="mt-10 text-center">
          <ButtonLink href="#konzultace" variant="primary">
            KONZULTACE ZDARMA
          </ButtonLink>
        </div>
      </section>

      <ConsultationSection />
      <Footer />
    </main>
  );
}
