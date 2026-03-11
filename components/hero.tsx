'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Play, CheckCircle2, Hotel, Home, Building2, UserCheck, Clock, ShieldCheck,
  Globe, ClipboardCheck, Layers, Tag, RefreshCw, Send, Zap, Headphones, Phone,
  Smartphone, TrendingUp, BarChart2, MessageSquare, CalendarCheck, Users, ChevronDown,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

type Overlay = {
  title: string;
  value: string;
  icon: React.ElementType;
  color: string;
  position: string;
  initialX: number;
  initialY: number;
};

type HeroKpi = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  sub?: string;
  percent: number;
};

const slides: Array<{
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  image: string;
  icons: Array<{ icon: React.ElementType; label: string }>;
  overlays: Overlay[];
  kpis: [HeroKpi, HeroKpi, HeroKpi];
}> = [
  {
    badge: "Hotelový systém",
    title: "Spravujte svůj hotel, penzion i apartmány z jednoho místa",
    description: "Přidejte se k více jak 4 000 spokojeným klientům. Previo je nejpoužívanější hotelový systém v Česku.",
    buttonText: "Zjistěte více",
    buttonHref: "/pms",
    image: '/img/hero-1.png',
    icons: [
      { icon: Hotel, label: "Hotely" },
      { icon: Building2, label: "Penziony" },
      { icon: Home, label: "Apartmány" },
    ],
    overlays: [
      { title: "Obsazenost", value: "94% dnes", icon: Clock, color: "bg-primary-600",
        position: "-top-6 -right-6", initialX: 24, initialY: 0 },
      { title: "Rezervace", value: "Nová objednávka", icon: CheckCircle2, color: "bg-green-500",
        position: "-bottom-6 -left-6", initialX: -24, initialY: 0 },
    ] as Overlay[],
    kpis: [
      { label: "Spokojenost hotelů", value: 98, suffix: "%", percent: 98 },
      { label: "Ušetřený čas", value: 6, sub: "HOD/DEN", percent: 25 },
      { label: "Nárůst tržeb", value: 12, prefix: "+", suffix: "%", percent: 12 },
    ],
  },
  {
    badge: "Virtuální recepční Alfred",
    title: "Pořiďte si majordoma, který pracuje nonstop.",
    description: "Ulehčete své recepci automatizací check-in a check-out. Nechte webovou aplikaci Alfred pracovat za Vás.",
    buttonText: "Zjistěte více",
    buttonHref: "/alfred",
    image: '/img/hero-2.png',
    icons: [
      { icon: UserCheck, label: "Self check-in" },
      { icon: ShieldCheck, label: "Bezpečné platby" },
      { icon: Clock, label: "24/7 dostupnost" },
    ],
    overlays: [
      { title: "Alfred", value: "Check-in dokončen", icon: UserCheck, color: "bg-blue-600",
        position: "-top-6 -left-6", initialX: -24, initialY: 0 },
      { title: "Platba", value: "Uhrazeno online", icon: ShieldCheck, color: "bg-indigo-600",
        position: "-bottom-6 -right-6", initialX: 24, initialY: 0 },
    ] as Overlay[],
    kpis: [
      { label: "Spokojenost hotelů", value: 98, suffix: "%", percent: 98 },
      { label: "Ušetřený čas", value: 6, sub: "HOD/DEN", percent: 25 },
      { label: "Check-inů ročně", value: 1500, suffix: "k+", percent: 85 },
    ],
  },
  {
    badge: "Weby pro hotely",
    title: "Zvyšte přímé rezervace z vlastního webu",
    description: "Rychlý web a rezervační systém, který hostům nekomplikuje cestu. Vyšší konverze, méně provizí.",
    buttonText: "Zjistěte více",
    buttonHref: "/webove-stranky",
    image: '/img/hero-3.png',
    icons: [
      { icon: Globe, label: "Vlastní web" },
      { icon: Smartphone, label: "Mobilní rezervace" },
      { icon: TrendingUp, label: "Vyšší konverze" },
    ],
    overlays: [
      { title: "Rezervace", value: "Přímá rezervace potvrzena", icon: ClipboardCheck, color: "bg-green-600",
        position: "-top-6 -right-6", initialX: 24, initialY: 0 },
      { title: "Web", value: "Dostupnost ověřena online", icon: Globe, color: "bg-primary-600",
        position: "-bottom-6 -left-6", initialX: -24, initialY: 0 },
    ] as Overlay[],
    kpis: [
      { label: "Přímé rezervace", value: 30, suffix: "%", percent: 30 },
      { label: "Vyšší konverze", value: 25, suffix: "%", percent: 25 },
      { label: "Méně provizí", value: 20, suffix: "%", percent: 20 },
    ],
  },
  {
    badge: "Channel manager",
    title: "Mějte ceny a dostupnost pod kontrolou všude",
    description: "Napojte prodejní kanály do jednoho místa a spravujte ceníky i restrikce bez přepisování. Méně chyb, méně overbookingu.",
    buttonText: "Zjistěte více",
    buttonHref: "/channel-manager",
    image: '/img/hero-4.png',
    icons: [
      { icon: Layers, label: "Více kanálů" },
      { icon: BarChart2, label: "Přehled cen" },
      { icon: RefreshCw, label: "Synchronizace" },
    ],
    overlays: [
      { title: "Kanály", value: "Dostupnost synchronizována", icon: Layers, color: "bg-violet-600",
        position: "-bottom-6 -right-6", initialX: 24, initialY: 0 },
      { title: "Ceník", value: "Ceny aktualizovány všude", icon: Tag, color: "bg-primary-600",
        position: "-top-6 -left-6", initialX: -24, initialY: 0 },
    ] as Overlay[],
    kpis: [
      { label: "Propojených kanálů", value: 50, suffix: "+", percent: 80 },
      { label: "Synchronizace", value: 24, sub: "hodin denně", percent: 100 },
      { label: "Méně chyb", value: 90, suffix: "%", percent: 90 },
    ],
  },
  {
    badge: "Automatizace hotelů",
    title: "Uvolněte recepci díky automatizaci",
    description: "Zautomatizujte rutiny, které berou čas: komunikaci, platby, check-in i doklady. Vy se soustředíte na hosty, ne na tabulky.",
    buttonText: "Zjistěte více",
    buttonHref: "/hotelova-automatizace",
    image: '/img/hero-5.png',
    icons: [
      { icon: Zap, label: "Automatizace" },
      { icon: MessageSquare, label: "Komunikace" },
      { icon: CalendarCheck, label: "Check-in" },
    ],
    overlays: [
      { title: "Komunikace", value: "Instrukce odeslány automaticky", icon: Send, color: "bg-amber-500",
        position: "-top-6 -right-6", initialX: 24, initialY: 0 },
      { title: "Provoz", value: "Méně ručních kroků", icon: Zap, color: "bg-primary-600",
        position: "-bottom-6 -left-6", initialX: -24, initialY: 0 },
    ] as Overlay[],
    kpis: [
      { label: "Ušetřený čas", value: 6, sub: "HOD/DEN", percent: 25 },
      { label: "Automatizovaných úkonů", value: 80, suffix: "%", percent: 80 },
      { label: "Spokojenost", value: 97, suffix: "%", percent: 97 },
    ],
  },
  {
    badge: "Klientská linka",
    title: "Podpora, na kterou se dá spolehnout",
    description: "Jsme k dispozici 7 dní v týdnu. Když hoří provoz, potřebujete rychlou odpověď a člověka, který zná hotely.",
    buttonText: "+420 251 613 924",
    buttonHref: "tel:+420251613924",
    image: '/img/hero-6.png',
    icons: [
      { icon: Headphones, label: "7/7 podpora" },
      { icon: Phone, label: "Telefon" },
      { icon: Users, label: "Odborníci" },
    ],
    overlays: [
      { title: "Podpora", value: "K dispozici 7 dní v týdnu", icon: Headphones, color: "bg-teal-600",
        position: "-top-6 -left-6", initialX: -24, initialY: 0 },
      { title: "Telefon", value: "Zavolejte a vyřešíme to", icon: Phone, color: "bg-primary-600",
        position: "-bottom-6 -right-6", initialX: 24, initialY: 0 },
    ] as Overlay[],
    kpis: [
      { label: "Dostupnost", value: 7, sub: "dní v týdnu", percent: 100 },
      { label: "Průměrná odpověď", value: 30, sub: "minut", percent: 100 },
      { label: "Spokojených klientů", value: 4000, suffix: "+", percent: 95 },
    ],
  },
];

const LOGOS = ['Pytloun Hotels', 'Orea Hotels', 'Grandhotel Pupp', 'Mamaison', 'Barceló Hotels'];

const SLIDE_DURATION = 8000;

function HeroKpiDonut({ kpi }: { kpi: HeroKpi }) {
  const [count, setCount] = useState(0);
  const size = 100;
  const strokeWidth = 8;
  const r = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  const strokeDashoffset = circumference * (1 - kpi.percent / 100);

  useEffect(() => {
    const duration = 1000;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - t) * (1 - t);
      setCount(Math.round(eased * kpi.value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [kpi.value]);

  return (
    <div className="flex flex-col items-center">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
        {kpi.label}
      </p>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="rotate-[-90deg]" aria-hidden>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-slate-200"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-primary-600"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold font-outfit text-slate-900">
            {kpi.prefix ?? ''}{kpi.suffix ? `${count}${kpi.suffix}` : count}
          </span>
          {kpi.sub && <span className="text-[10px] font-medium text-slate-500 mt-0.5">{kpi.sub}</span>}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  // Auto-advance — pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 50)  setCurrentSlide((prev) => (prev + 1) % slides.length);
    if (delta < -50) setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section
      data-export-section="hero"
      data-hero-slider="light"
      className="relative pt-24 pb-12 md:pt-28 md:pb-20 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white" />

      {/* Subtle background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 border border-primary-200 rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-96 h-96 border border-indigo-100 rounded-full" />
        <div className="absolute bottom-[10%] left-[15%] w-48 h-48 border border-primary-100 rotate-45" />
        <svg className="absolute top-[40%] left-[2%] text-primary-200 w-24 h-24" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="hidden md:block absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Na mobilu grid bez bočního paddingu = červený blok + obrázek celou šířkou */}
        <div className="grid lg:grid-cols-2 gap-y-0 lg:gap-x-0 items-stretch lg:min-h-[480px] lg:h-[520px] -mx-4 sm:-mx-6 lg:mx-0">
          {/* ── Left column: červený blok – na mobilu nahoře zaoblený, dole rovný (navazuje obrázek) ── */}
          <div className="bg-primary-600 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none lg:rounded-br-none px-6 md:px-10 lg:px-10 lg:pr-4 py-8 md:py-14 lg:py-16 flex flex-col justify-center z-20 min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.12 } }}
                transition={{ duration: 0.5 }}
                className="text-left"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 text-sm font-medium mb-4 md:mb-5 text-white/90">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/80 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                  <span>{slide.badge}</span>
                </div>

                <h1
                  data-hero-title
                  className="text-3xl md:text-4xl lg:text-5xl font-bold font-outfit tracking-tight text-white mb-4 md:mb-5 leading-[1.1] h-[2.2em] overflow-hidden line-clamp-2"
                >
                  {slide.title}
                </h1>

                <p
                  data-hero-description
                  className="text-base md:text-lg text-white/90 mb-6 md:mb-7 leading-relaxed"
                >
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {slide.buttonHref.startsWith('/') ? (
                    <Link
                      href={slide.buttonHref}
                      data-hero-primary
                      className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-[3px] font-semibold text-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group"
                    >
                      <span data-hero-primary-text>{slide.buttonText}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <a
                      href={slide.buttonHref}
                      data-hero-primary
                      className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-[3px] font-semibold text-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group"
                    >
                      <span data-hero-primary-text>{slide.buttonText}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                  {currentSlide === 0 && (
                    <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/30 rounded-[3px] font-medium text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 group">
                      <div className="relative w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        <Play className="w-3 h-3 text-white relative z-10" fill="currentColor" />
                      </div>
                      Přehrát video
                    </button>
                  )}
                </div>

                {/* Feature tags – bílé ikony a text, hover animace */}
                <div className="mt-5 md:mt-6 lg:mt-8 flex flex-wrap gap-4 lg:gap-5">
                  {slide.icons.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2 text-white text-sm font-medium cursor-default"
                      whileHover={{ y: -2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    >
                      <motion.span
                        className="flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      >
                        <item.icon className="w-5 h-5 shrink-0 text-white" strokeWidth={2} />
                      </motion.span>
                      <span>{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots – pouze desktop; na mobilu je málo místa, ovládání swipe ── */}
            <div className="hidden lg:flex mt-6 gap-3 items-center">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`relative h-2.5 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                    currentSlide === idx
                      ? 'w-20 bg-white/30'
                      : 'w-8 bg-white/20 hover:bg-white/25 hover:w-10'
                  }`}
                >
                  {currentSlide === idx && (
                    <div
                      key={currentSlide}
                      className="absolute inset-y-0 left-0 bg-white rounded-full"
                      style={{
                        width: '100%',
                        transformOrigin: 'left',
                        animation: `heroProgress ${SLIDE_DURATION}ms linear forwards`,
                        animationPlayState: isPaused ? 'paused' : 'running',
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ── Right column — na mobilu obrázek celou šířkou pod červeným blokem, na desktopu panel vedle ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative bg-white flex flex-col px-0 lg:px-10 lg:pl-4 py-0 h-full min-h-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Photo – na mobilu celá šířka, lehký rozestup od červeného bloku; na desktopu jako dřív */}
            <div className="group relative w-full flex-1 min-h-[240px] sm:min-h-[280px] min-w-0 overflow-hidden rounded-none rounded-b-2xl lg:rounded-[3px] shadow-2xl shadow-slate-200/50 z-10 mt-2 lg:mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    data-hero-image
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top md:object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Overlay info bubbles – jen na desktopu, na mobilu by překrývaly */}
            <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0"
                >
                  {slide.overlays.map((overlay, idx) => (
                    <motion.div
                      key={idx}
                      className={`absolute ${overlay.position}`}
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        y: {
                          duration: 5 + idx * 0.3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        },
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: overlay.initialX, y: overlay.initialY }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.7 + idx * 0.25, duration: 0.5, ease: 'easeOut' }}
                        className="bg-white p-4 rounded-[3px] shadow-2xl border border-slate-100 flex items-center gap-4 min-w-[220px]"
                      >
                        <div className={`w-12 h-12 rounded-[3px] ${overlay.color} flex items-center justify-center shadow-inner shrink-0`}>
                          <overlay.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div
                            data-hero-overlay-title-index={idx}
                            className="text-[10px] uppercase tracking-wider font-bold text-slate-400"
                          >
                            {overlay.title}
                          </div>
                          <div
                            data-hero-overlay-value-index={idx}
                            className="text-base font-bold text-slate-900"
                          >
                            {overlay.value}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Decorative blurs */}
            <div className="hidden lg:block absolute -top-10 -right-10 w-64 h-64 bg-primary-100 rounded-full -z-0 blur-3xl opacity-30" />
            <div className="hidden lg:block absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-100 rounded-full -z-0 blur-3xl opacity-30" />
          </motion.div>
        </div>

        {/* KPI sekce – animované grafy podle aktivního slidu */}
        <div className="bg-white pt-10 pb-8 md:pt-12 md:pb-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center mb-8">
              <AnimatePresence mode="wait">
                {slide.kpis.map((kpi, idx) => (
                  <motion.div
                    key={`${currentSlide}-${idx}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="cursor-default rounded-2xl p-4 -m-4 transition-colors hover:bg-slate-50/80"
                  >
                    <HeroKpiDonut kpi={kpi} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <p className="text-center text-slate-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Důvěřují nám přes 4 000 ubytovacích zařízení
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-500 font-medium text-sm">
              {LOGOS.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center mt-8 gap-1 text-slate-400 cursor-default select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <span className="text-xs tracking-widest uppercase">Posunout dolů</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
