'use client';

import { motion, useScroll, useTransform, useReducedMotion, useMotionValueEvent } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  ArrowRight, RefreshCw, TrendingUp, MousePointer2, ShieldCheck,
  Key, CreditCard, BarChart3, FileDown, Clock,
} from 'lucide-react';
import { PmsIllustration }          from './illustrations/PmsIllustration';
import { ChannelIllustration }       from './illustrations/ChannelIllustration';
import { BookingIllustration }       from './illustrations/BookingIllustration';
import { AlfredIllustration }        from './illustrations/AlfredIllustration';
import { ReportingIllustration }     from './illustrations/ReportingIllustration';
import { HousekeepingIllustration }  from './illustrations/HousekeepingIllustration';

const ILLUSTRATIONS: Record<string, React.ReactNode> = {
  pms:         <PmsIllustration />,
  channel:     <ChannelIllustration />,
  booking:     <BookingIllustration />,
  alfred:      <AlfredIllustration />,
  reporting:   <ReportingIllustration />,
  housekeeping:<HousekeepingIllustration />,
};

const products = [
  {
    id: 'pms',
    href: '/pms',
    title: 'Recepční systém PMS',
    description: 'Celý hotel přehledně na jedné obrazovce.',
    features: [
      {
        title: 'Plachta pokojů v reálném čase',
        text: 'Přehledný vizuální kalendář rezervací — vidíte okamžitě, co se děje na každém pokoji a kdy.',
        icon: RefreshCw,
      },
      {
        title: 'Rychlý check-in a check-out',
        text: 'Odbavte hosty za pár vteřin. Od dokladů přes přiřazení pokoje až po platbu — vše na jednom místě.',
        icon: TrendingUp,
      },
    ],
    accent: 'text-primary-600',
  },
  {
    id: 'channel',
    href: '/channel-manager',
    title: 'Channel Manager nové generace',
    description: '300+ portálů. Jedna změna. Vše synchronizováno.',
    features: [
      {
        title: 'Synchronizace v reálném čase',
        text: 'Dostupnost a ceny se okamžitě aktualizují na všech 300+ portálech. Bez prodlev, bez ručního zadávání.',
        icon: RefreshCw,
      },
      {
        title: 'Nulový risk overbookingu',
        text: 'Inteligentní správa kapacit zabrání dvojitým rezervacím i při prodeji přes desítky kanálů najednou.',
        icon: TrendingUp,
      },
    ],
    accent: 'text-indigo-600',
  },
  {
    id: 'booking',
    href: '/booking-engine',
    title: 'Rezervační systém',
    description: 'Každá rezervace z webu je vaše. Bez provize.',
    features: [
      {
        title: 'Vyšší konverze návštěvníků',
        text: 'Přehledný formulář s jasnými kroky a transparentními cenami snižuje počet opuštěných rezervací.',
        icon: MousePointer2,
      },
      {
        title: 'Přímé rezervace bez provize',
        text: 'Každá rezervace přes váš web vám ušetří 15–20 % provizi oproti OTA portálům jako Booking.com.',
        icon: ShieldCheck,
      },
    ],
    accent: 'text-blue-600',
  },
  {
    id: 'alfred',
    href: '/alfred',
    title: 'Alfred, moderní správa vašeho hotelu',
    description: 'Check-in bez recepce. Hosté přijedou, usadí se a zaplatí sami.',
    features: [
      {
        title: 'Digitální klíče',
        text: 'Hosté otevírají dveře chytrým telefonem bez nutnosti fyzické karty.',
        icon: Key,
      },
      {
        title: 'Online platby',
        text: 'Bezpečné zpracování plateb přímo v aplikaci. Podpora Apple Pay a Google Pay.',
        icon: CreditCard,
      },
    ],
    accent: 'text-emerald-600',
  },
  {
    id: 'reporting',
    href: '/prehled-a-analytika',
    title: 'Přehledy a analytika',
    description: 'Víte přesně, kolik vyděláváte a proč.',
    features: [
      {
        title: 'Přehled tržeb v reálném čase',
        text: 'Sledujte obsazenost, průměrné ceny a výnosy přehledně na jednom místě.',
        icon: BarChart3,
      },
      {
        title: 'Exporty a sdílení',
        text: 'Generujte reporty pro majitele nebo účetní jedním kliknutím.',
        icon: FileDown,
      },
    ],
    accent: 'text-amber-600',
  },
  {
    id: 'housekeeping',
    href: '/housekeeping',
    title: 'Inteligentní správa úklidu',
    description: 'Pokoj připravený včas. Bez telefonování, bez papírů.',
    features: [
      {
        title: 'Automatické přiřazování úkolů',
        text: 'Systém sám rozdělí pokoje pokojským podle obsazenosti a priorit — bez ranních porad a papírových listů.',
        icon: Clock,
      },
      {
        title: 'Přehled kvality v reálném čase',
        text: 'Pokojské reportují stav pokoje přímo z mobilu. Manažer má okamžitý přehled bez telefonování.',
        icon: ShieldCheck,
      },
    ],
    accent: 'text-rose-600',
  },
];

export function ProductCards() {
  return (
    <section data-export-section="product-cards" className="py-20 bg-slate-50 relative" id="produkty">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 mb-6"
          >
            Vše pod kontrolou. Od první rezervace až po spokojený odjezd.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Komplexní řešení pro hotely, penziony i apartmány. Vše v jednom balení, které se přizpůsobí vašim potřebám.
          </motion.p>
        </div>

        <div className="relative">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} isLast={index === products.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index, isLast }: { product: typeof products[0]; index: number; isLast: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isLg, setIsLg] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    setIsLg(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsLg(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isLg && !prefersReducedMotion ? [1, 0.95] : [1, 1],
  );

  // Shadow: same style as testimonials. Switch it off via a CSS class change (not per-frame JS)
  // when the card reaches its sticky position so stacked cards don't compound shadows.
  const shadowOpacity = useTransform(scrollYProgress, [0.85, 1], isLast ? [1, 1] : [1, 0]);
  const [hasShadow, setHasShadow] = useState(true);
  useMotionValueEvent(shadowOpacity, 'change', (v) => setHasShadow(v > 0.5));

  return (
    <div
      ref={cardRef}
      className="relative lg:sticky mb-0 lg:min-h-[600px]"
      style={{ top: '72px', zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale, willChange: 'transform' }}
        className={`relative overflow-hidden rounded-3xl bg-white p-6 md:p-12 lg:p-16 lg:h-full transition-shadow duration-300 ${isLast ? '' : 'border border-slate-200'} ${
          hasShadow ? 'shadow-xl shadow-slate-200/50' : 'shadow-none'
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-6 items-center lg:h-full">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-widest font-bold text-primary-600 mb-4">
                {product.title}
              </h3>
              <h4 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-6">
                {product.description}
              </h4>
            </div>

            <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-10">
              {product.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex gap-4 group/feature">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover/feature:bg-white group-hover/feature:shadow-md transition-all">
                    <feature.icon className={`w-6 h-6 ${product.accent}`} />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-slate-900 mb-1">{feature.title}</h5>
                    <p className="text-slate-600 leading-relaxed">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={product.href}
              className="inline-flex px-8 py-4 bg-primary-600 text-white rounded-[3px] font-medium text-lg hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/20 items-center gap-2 group"
            >
              Zjistit více
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Illustration */}
          <div className="order-1 lg:order-2 relative h-52 lg:h-auto lg:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-4">
            {ILLUSTRATIONS[product.id]}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
