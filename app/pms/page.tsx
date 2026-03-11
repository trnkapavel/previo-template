import { Navbar } from '@/components/navbar';
import { ConsultationSection } from '@/components/consultation-section';
import { Footer } from '@/components/footer';
import { PmsIllustration } from '@/components/illustrations/PmsIllustration';
import { ReportingIllustration } from '@/components/illustrations/ReportingIllustration';
import { HousekeepingIllustration } from '@/components/illustrations/HousekeepingIllustration';
import { IllustrationPlaceholder } from '@/components/illustrations/IllustrationPlaceholder';
import { ReportingScene } from '@/components/illustrations/ReportingScene';
import { IntegrationsScene } from '@/components/illustrations/IntegrationsScene';
import { FinanceScene } from '@/components/illustrations/FinanceScene';
import { MobileAppScene } from '@/components/illustrations/MobileAppScene';
import { Eyebrow, PageTitle, SectionTitle, Subheading, Body } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function PmsPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-100 selection:text-primary-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow className="mb-4">Hotelový software</Eyebrow>
            <PageTitle className="mb-6">Recepční systém</PageTitle>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
              Previo se stane srdcem vašeho hotelu. Jedná se o on‑line cloudové řešení, díky tomu můžete své zařízení
              spravovat kdykoliv a odkudkoliv. Nejčastěji prováděné operace máte vždy k dispozici na pravém tlačítku
              myši. Vystavujte doklady a platby přímo z rezervace a evidujte hosty i firmy pro automatizovaný
              e‑mail marketing.
            </p>
            <Button variant="primary">
              KONZULTACE ZDARMA
            </Button>
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
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <SectionTitle className="mb-4">
            Vše pro každodenní chod recepce
          </SectionTitle>
          <Body>
            Previo recepční systém pokrývá celý provoz – od přehledu rezervací, přes reporting až po integrace a
            automatickou komunikaci s hosty.
          </Body>
        </div>

        <div className="space-y-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interaktivní plachta rezervací */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">
                Interaktivní plachta rezervací
              </Subheading>
              <Body>
                Jedno místo, kde máte přehledně všechny rezervace. Snadno je můžete přesouvat, prodlužovat a
                zkracovat pouhým tažením myši. Hosta ubytujete jedním kliknutím. Detailní informace o rezervaci
                získáte po najetí myši bez nutnosti rezervaci otevírat. Mimo to je možné evidovat minutový provoz,
                takže můžete spravovat i rezervace stolů v restauraci, sportovišť nebo wellness zařízení.
              </Body>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-3 h-64 md:h-72">
              <PmsIllustration />
            </div>
          </div>

          {/* Dashboard */}
          <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">Dashboard</Subheading>
              <Body>
                Získejte kompletní přehled o vašem hotelu na jedno kliknutí, jakmile ráno usednete k počítači.
                Tržby, RevPar, ADR, nové rezervace – to vše přehledně na jednom místě.
              </Body>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-3 h-64 md:h-72">
              <ReportingIllustration />
            </div>
          </div>

          {/* Legislativní povinnosti */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">
                Na legislativní povinnosti už nemusíte myslet
              </Subheading>
              <Body>
                Automatické odesílání hlášení cizinců se o vše postará za vás a vy získáte více času, který můžete
                věnovat svým hostům.
              </Body>
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
          <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">
                Reporty – data, která pracují pro vás
              </Subheading>
              <Body>
                Snadno zjistíte, které OTA vám přináší největší počet rezervací či jakou platební metodou vám
                přicházejí nejvyšší tržby. Jednoduše, ať řešíte provozní nebo finanční stránku vašeho zařízení, vše
                tu máte přehledně jako na dlani.
              </Body>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <ReportingScene />
            </div>
          </div>

          {/* Integrace */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">Integrace</Subheading>
              <Body className="mb-4">
                Previo je možné napojit na další systémy, které používáte pro provoz. Restaurační, účetní, zámkové
                systémy, čtečky dokladů a další…
              </Body>
              <Button
                variant="secondary"
                className="px-6 py-3"
              >
                Zobrazit všechny integrace
              </Button>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <IntegrationsScene />
            </div>
          </div>

          {/* Stále v pohybu */}
          <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">Stále v pohybu</Subheading>
              <Body>
                Váš ideální pomocník na cestách. Nezáleží na tom, jestli jedete na měsíční dovolenou, nebo pouze
                nebudete mít přes víkend notebook k dispozici, Previo mobilní aplikaci máte vždy po ruce.
              </Body>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <MobileAppScene />
            </div>
          </div>

          {/* Efektivnější úklid */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">Efektivnější úklid</Subheading>
              <Body>
                Modul úklid umožňuje zaměstnancům úklidu, kteří jsou neustále v pohybu, přístup z mobilního
                telefonu k nejaktuálnějším informacím o pokojích.
              </Body>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center p-3 h-64 md:h-72">
              <HousekeepingIllustration />
            </div>
          </div>

          {/* Doklady a faktury */}
          <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">Doklady a faktury</Subheading>
              <Body>
                Mějte doklady a rezervace na jednom místě. Zálohové listy, faktury i prodejky se vytvářejí
                automaticky. Potřebujete doklady pro účetní? Využijte exportů do nejpoužívanějších účetních
                softwarů nebo vytvořte přístup vaší účetní, která uvidí do dokladů.
              </Body>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <FinanceScene />
            </div>
          </div>

          {/* Drobný prodej a sklad */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">
                Drobný prodej a kusový sklad
              </Subheading>
              <Body>
                Můžete vést jednoduchou skladovou evidenci prodaného zboží a prodeje přes hotelový účet, který vám
                vyřeší drobný prodej na recepci.
              </Body>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <IllustrationPlaceholder label="Náhled položek skladu" />
            </div>
          </div>

          {/* Automatická komunikace */}
          <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
            <div className="md:w-1/2">
              <Subheading className="mb-3">
                Automatická komunikace s hostem
              </Subheading>
              <Body>
                Vylepšete zážitek vašeho hosta díky automatickému potvrzení pobytu, informacím před i po pobytu.
                Popřejte mu k narozeninám nebo požádejte o recenzi. Udržujte kontakt s hostem od momentu, kdy
                vytvořil rezervaci, napořád.
              </Body>
            </div>
            <div className="md:w-1/2 rounded-2xl border border-slate-200 bg-slate-50 h-64 md:h-72 flex items-center justify-center overflow-hidden">
              <IllustrationPlaceholder label="Náhled uvítacího e‑mailu / SMS hostovi" />
            </div>
          </div>
        </div>
      </section>

      {/* Srovnání verzí */}
      <section className="py-14 md:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <SectionTitle className="mb-4">
            Vyberte si verzi Previa
          </SectionTitle>
          <Body>
            Ať už máte malý penzion v horách nebo řídíte velký hotelový řetězec v Praze, vyberte si verzi Previa
            podle svých potřeb. Verzi LITE uvítají menší zařízení s nenáročným provozem. Previo PRO usnadní práci
            velkým hoteliérům.
          </Body>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          {/* LITE */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <Subheading as="h3" className="mb-2 text-xl">
              Previo LITE
            </Subheading>
            <Body as="p" className="mb-6 text-sm">
              Ideální pro menší penziony a jednodušší provoz.
            </Body>
            <ul className="space-y-2 text-sm text-slate-700">
              {[
                'Správa rezervací a opcí',
                'Databáze hostů a firem',
                'Účetní doklady (fakturace)',
                'Evidenční kniha, domovní kniha, reporty ČSÚ a MěÚ',
                'Mobilní aplikace (správa rezervací)',
                'Základní reporty a statistiky',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PRO */}
          <div className="rounded-3xl border border-primary-200 bg-white p-8 shadow-md shadow-primary-100/40">
            <Subheading as="h3" className="mb-2 text-xl">
              Previo PRO
            </Subheading>
            <Body as="p" className="mb-6 text-sm">
              Kompletní řešení pro náročné hotely a řetězce.
            </Body>
            <ul className="space-y-2 text-sm text-slate-700">
              {[
                'Vše z verze LITE',
                'Minutové rezervace (wellness, gastro, sportoviště)',
                'Úklid pokojů, závady, úkoly',
                'Rastry a market kódy pro reporting',
                'Mailing, přímá komunikace (SMS, e‑mail)',
                'Pokladna, sklad, importy z bankovnictví',
                'Manažerské reporty a statistiky',
                'Směnárna, významné dny, revenue management',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button variant="primary">
            KONZULTACE ZDARMA
          </Button>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="py-14 md:py-16 bg-white">
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

