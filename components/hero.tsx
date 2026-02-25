'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Hotel, Home, Building2, UserCheck, Clock, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const slides = [
  {
    badge: "Hotelový systém",
    title: "Spravujte svůj hotel, penzion i apartmány z jednoho místa",
    description: "Přidejte se k více jak 4 000 spokojeným klientům. Previo je nejpoužívanější hotelový systém v Česku.",
    buttonText: "Zjistěte více",
    image: 'https://picsum.photos/id/10/1200/800',
    icons: [
      { icon: Hotel, label: "Hotely" },
      { icon: Building2, label: "Penziony" },
      { icon: Home, label: "Apartmány" }
    ],
    overlays: [
      { title: "Obsazenost", value: "94% dnes", icon: Clock, color: "bg-primary-600" },
      { title: "Rezervace", value: "Nová objednávka", icon: CheckCircle2, color: "bg-green-500" }
    ]
  },
  {
    badge: "Virtuální recepční Alfred",
    title: "Pořiďte si majordoma, který pracuje nonstop.",
    description: "Ulehčete své recepci automatizací check-in a check-out. Nechte webovou aplikaci Alfred pracovat za Vás.",
    buttonText: "Zjistěte více",
    image: 'https://picsum.photos/id/20/1200/800',
    icons: [
      { icon: UserCheck, label: "Self check-in" },
      { icon: ShieldCheck, label: "Bezpečné platby" },
      { icon: Clock, label: "24/7 dostupnost" }
    ],
    overlays: [
      { title: "Alfred", value: "Check-in dokončen", icon: UserCheck, color: "bg-blue-600" },
      { title: "Platba", value: "Uhrazeno online", icon: ShieldCheck, color: "bg-indigo-600" }
    ]
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

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

      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 text-slate-400 text-sm font-medium mb-8">
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                  <span className="text-primary-700">{slides[currentSlide].badge}</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-outfit tracking-tight text-slate-900 mb-6 leading-[1.1]">
                  {slides[currentSlide].title}
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                  {slides[currentSlide].description}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-[3px] font-medium text-lg hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/20 flex items-center justify-center gap-2 group">
                    {slides[currentSlide].buttonText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-[3px] font-medium text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary-50 transition-colors">
                      <Play className="w-3 h-3 text-slate-600 group-hover:text-primary-600" fill="currentColor" />
                    </div>
                    Přehrát video
                  </button>
                </div>

                {/* SVG Animations / Icons */}
                <div className="mt-12 flex flex-wrap gap-6">
                  {slides[currentSlide].icons.map((item, idx) => (
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
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 z-10">
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
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    fill
                    className="object-cover"
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
                  {slides[currentSlide].overlays.map((overlay, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: idx === 0 ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + (idx * 0.2) }}
                      className={`absolute ${idx === 0 ? '-top-6 -right-6' : '-bottom-6 -left-6'} bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4 min-w-[220px]`}
                    >
                      <div className={`w-12 h-12 rounded-xl ${overlay.color} flex items-center justify-center shadow-inner`}>
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

            {/* Decorative background patterns */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-100 rounded-full -z-0 blur-3xl opacity-30"></div>
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-100 rounded-full -z-0 blur-3xl opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
