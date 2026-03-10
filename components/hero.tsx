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

const slides = [
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
  },
  {
    badge: "Channel manager",
    title: "Mějte ceny a dostupnost pod kontrolou všude",
    description: "Napojte prodejní kanály do jednoho místa a spravujte ceníky i restrikce bez přepisování. Méně chyb, méně overbookingu.",
    buttonText: "Zjistěte více",
    buttonHref: "/channel-manager",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&auto=format',
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
  },
  {
    badge: "Automatizace hotelů",
    title: "Uvolněte recepci díky automatizaci",
    description: "Zautomatizujte rutiny, které berou čas: komunikaci, platby, check-in i doklady. Vy se soustředíte na hosty, ne na tabulky.",
    buttonText: "Zjistěte více",
    buttonHref: "/hotelova-automatizace",
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&auto=format',
    objectPosition: 'center 30%',
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
  },
  {
    badge: "Klientská linka",
    title: "Podpora, na kterou se dá spolehnout",
    description: "Jsme k dispozici 7 dní v týdnu. Když hoří provoz, potřebujete rychlou odpověď a člověka, který zná hotely.",
    buttonText: "+420 251 613 924",
    buttonHref: "tel:+420251613924",
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&h=800&fit=crop&auto=format',
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
  },
];

const LOGOS = ['Pytloun Hotels', 'Orea Hotels', 'Grandhotel Pupp', 'Mamaison', 'Barceló Hotels'];

const SLIDE_DURATION = 8000;

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [borderVisible, setBorderVisible] = useState(false);
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

  // Border reveal after photo loads
  useEffect(() => {
    const t = setTimeout(() => setBorderVisible(true), 1100);
    return () => clearTimeout(t);
  }, []);

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
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left column ── */}
          <div className="text-left z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.12 } }}
                transition={{ duration: 0.5 }}
              >
                {/* Badge with pulsing live dot */}
                <div className="inline-flex items-center gap-2 text-sm font-medium mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                  </span>
                  <span className="text-primary-700">{slide.badge}</span>
                </div>

                <h1
                  data-hero-title
                  className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit tracking-tight text-slate-900 mb-6 leading-[1.1]"
                >
                  {slide.title}
                </h1>

                <p
                  data-hero-description
                  className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed"
                >
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {slide.buttonHref.startsWith('/') ? (
                    <Link
                      href={slide.buttonHref}
                      data-hero-primary
                      className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-[3px] font-medium text-lg hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/20 flex items-center justify-center gap-2 group"
                    >
                      <span data-hero-primary-text>{slide.buttonText}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <a
                      href={slide.buttonHref}
                      data-hero-primary
                      className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-[3px] font-medium text-lg hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/20 flex items-center justify-center gap-2 group"
                    >
                      <span data-hero-primary-text>{slide.buttonText}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                  <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-[3px] font-medium text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group">
                    <div className="relative w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary-50 transition-colors">
                      <span className="absolute inset-0 rounded-full border border-primary-300 animate-ping opacity-0 group-hover:opacity-60" />
                      <Play className="w-3 h-3 text-slate-600 group-hover:text-primary-600 relative z-10" fill="currentColor" />
                    </div>
                    Přehrát video
                  </button>
                </div>

                {/* Feature tags */}
                <div className="mt-12 flex flex-wrap gap-6">
                  {slide.icons.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                      <div className="p-2 bg-white rounded-[3px] border border-slate-100 shadow-sm">
                        <item.icon className="w-4 h-4 text-primary-600" />
                      </div>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="mt-12 flex gap-3 items-center">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`relative h-2.5 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                    currentSlide === idx
                      ? 'w-20 bg-slate-200'
                      : 'w-8 bg-slate-200 hover:bg-slate-300 hover:w-10'
                  }`}
                >
                  {currentSlide === idx && (
                    <div
                      key={currentSlide}
                      className="absolute inset-y-0 left-0 bg-primary-600 rounded-full"
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

            {/* Logo / social proof strip */}
            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="text-xs text-slate-400 mb-3 uppercase tracking-wider">Důvěřují nám přes 4 000 ubytovacích zařízení</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
                {LOGOS.map((name) => (
                  <span key={name} className="text-slate-300 font-semibold text-sm">{name}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column — image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative lg:h-[600px] flex items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Decorative offset border */}
            <motion.div
              animate={{ opacity: borderVisible ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              style={{ x: 14, y: 14 }}
              className="absolute inset-0 rounded-tl-[114px] rounded-tr-[17px] rounded-bl-[17px] rounded-br-[114px] border-2 border-slate-300 z-0"
            />

            {/* Photo */}
            <div className="group relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[3px] rounded-br-[100px] overflow-hidden shadow-2xl shadow-slate-200/50 z-10">
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
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ objectPosition: ('objectPosition' in slide ? slide.objectPosition : 'center') as string }}
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Overlay info bubbles */}
            <div className="absolute inset-0 z-20 pointer-events-none">
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
                      initial={{ opacity: 0, x: overlay.initialX, y: overlay.initialY }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ delay: 0.7 + idx * 0.25, duration: 0.5, ease: 'easeOut' }}
                      className={`absolute ${overlay.position} bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4 min-w-[220px]`}
                    >
                      <div className={`w-12 h-12 rounded-xl ${overlay.color} flex items-center justify-center shadow-inner shrink-0`}>
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
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Decorative blurs */}
            <div className="hidden lg:block absolute -top-10 -right-10 w-64 h-64 bg-primary-100 rounded-full -z-0 blur-3xl opacity-30" />
            <div className="hidden lg:block absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-100 rounded-full -z-0 blur-3xl opacity-30" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center mt-16 gap-1 text-slate-400 cursor-default select-none"
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
