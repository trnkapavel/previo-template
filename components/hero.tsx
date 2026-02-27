'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Play, CheckCircle2, Hotel, Home, Building2, UserCheck, Clock, ShieldCheck,
  Globe, ClipboardCheck, Layers, Tag, RefreshCw, Send, Zap, Headphones, Phone,
  Smartphone, TrendingUp, BarChart2, MessageSquare, CalendarCheck, Users,
} from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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
    buttonHref: "#",
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=800&fit=crop&auto=format',
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
    buttonHref: "#",
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=800&fit=crop&auto=format',
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
    buttonHref: "#",
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format',
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
    buttonHref: "#",
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
    buttonHref: "#",
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

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements & Shapes */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/50 via-white to-white"></div>

      {/* Subtle Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 border border-primary-200 rounded-full"></div>
        <div className="absolute top-[20%] right-[10%] w-96 h-96 border border-indigo-100 rounded-full"></div>
        <div className="absolute bottom-[10%] left-[15%] w-48 h-48 border border-primary-100 rotate-45"></div>
        <svg className="absolute top-[40%] left-[2%] text-primary-200 w-24 h-24" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="hidden md:block absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.12 } }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 text-slate-400 text-sm font-medium mb-8">
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                  <span className="text-primary-700">{slide.badge}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit tracking-tight text-slate-900 mb-6 leading-[1.1]">
                  {slide.title}
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={slide.buttonHref}
                    className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-[3px] font-medium text-lg hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/20 flex items-center justify-center gap-2 group"
                  >
                    {slide.buttonText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-[3px] font-medium text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary-50 transition-colors">
                      <Play className="w-3 h-3 text-slate-600 group-hover:text-primary-600" fill="currentColor" />
                    </div>
                    Přehrát video
                  </button>
                </div>

                {/* SVG Animations / Icons */}
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

            {/* Slider Controls */}
            <div className="mt-12 flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all ${currentSlide === idx ? 'w-8 bg-primary-600' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Slider Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative lg:h-[600px] flex items-center"
          >
            {/* Decorative border offset layer */}
            <div className="absolute inset-0 translate-x-[14px] translate-y-[14px] rounded-tl-[114px] rounded-tr-[17px] rounded-bl-[17px] rounded-br-[114px] border-2 border-slate-300 z-0" />

            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-tl-[100px] rounded-tr-[3px] rounded-bl-[3px] rounded-br-[100px] overflow-hidden shadow-2xl shadow-slate-200/50 z-10">
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
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    style={{ objectPosition: ('objectPosition' in slide ? slide.objectPosition : 'center') as string }}
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Overlay Info Boxes - Moved outside overflow-hidden to protrude */}
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
                        <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400">{overlay.title}</div>
                        <div className="text-base font-bold text-slate-900">{overlay.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Decorative background patterns — hidden on mobile (blur-3xl is expensive to rasterise) */}
            <div className="hidden lg:block absolute -top-10 -right-10 w-64 h-64 bg-primary-100 rounded-full -z-0 blur-3xl opacity-30"></div>
            <div className="hidden lg:block absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-100 rounded-full -z-0 blur-3xl opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
