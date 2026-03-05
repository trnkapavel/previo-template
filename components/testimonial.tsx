'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Přechod na Previo bylo to nejlepší rozhodnutí pro náš hotel.",
    text: "Díky automatizaci jsme ušetřili desítky hodin měsíčně na administrativě. Channel manager funguje bezchybně a přímé rezervace přes náš web stouply o 40 %. Systém je navíc neuvěřitelně intuitivní, takže zaškolení nových recepčních trvá zlomek času.",
    name: "Jan Novák",
    role: "Ředitel",
    hotel: "Grand Hotel Praha",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    logo: "https://picsum.photos/seed/logo1/200/100",
    stat: "+40%",
    statText: "Nárůst přímých rezervací během prvního půl roku",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
  },
  {
    id: 2,
    quote: "Konečně máme všechny rezervace přehledně na jednom místě.",
    text: "Dříve jsme řešili overbookingy a ruční přepisování dat z různých portálů. S Previem je vše plně automatizované. Recepční systém je rychlý a přehledný, což nám umožňuje věnovat více času samotným hostům místo papírování.",
    name: "Petra Svobodová",
    role: "Provozní manažerka",
    hotel: "Penzion U Lesa",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    logo: "https://picsum.photos/seed/logo2/200/100",
    stat: "0",
    statText: "Overbookingů od nasazení Previa",
    image: "https://images.unsplash.com/photo-1762719300018-3a8c7af6d60b?w=800&q=80"
  },
  {
    id: 3,
    quote: "Skvělá technická podpora a neustálý vývoj nových funkcí.",
    text: "Na Previu si nejvíce ceníme jejich přístupu k zákazníkům. Kdykoliv potřebujeme s něčím poradit, podpora reaguje okamžitě. Navíc systém neustále vylepšují a přidávají nové funkce, které nám pomáhají zvyšovat tržby a zefektivňovat provoz.",
    name: "Tomáš Kučera",
    role: "Majitel",
    hotel: "Boutique Hotel centrum",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    logo: "https://picsum.photos/seed/logo3/200/100",
    stat: "24/7",
    statText: "Dostupnost profesionální podpory",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80"
  },
  {
    id: 4,
    quote: "Previo Pay nám neuvěřitelně zjednodušilo platby.",
    text: "Automatické strhávání plateb z karet hostů nám ušetřilo spoustu starostí s nezaplacenými rezervacemi. Vše je plně integrované přímo v recepčním systému, takže máme okamžitý přehled o všech transakcích bez nutnosti kontrolovat bankovní účet.",
    name: "Lucie Dvořáková",
    role: "Finanční ředitelka",
    hotel: "Resort & Spa Riviéra",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    logo: "https://picsum.photos/seed/logo4/200/100",
    stat: "100%",
    statText: "Automatizace platebních procesů",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80"
  }
];

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleNextClick = () => {
    nextSlide();
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 6000); // Change slide every 6 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const current = testimonials[currentIndex];

  return (
    <section data-export-section="testimonial" className="py-24 bg-slate-50 overflow-hidden relative" id="reference">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 mb-4">
            Co o nás říkají hoteliéři
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Přidejte se k tisícům spokojených ubytovatelů, kteří již zefektivnili svůj provoz s Previem.
          </p>
        </div>

        <div className="relative bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-12">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary-600 hover:scale-110 transition-all z-10"
            aria-label="Předchozí reference"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary-600 hover:scale-110 transition-all z-10"
            aria-label="Další reference"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Left side: Content */}
              <div className="relative">
                <Quote className="absolute -top-6 -left-8 w-24 h-24 text-primary-50 opacity-50 -z-10 rotate-180" />
                
                <h3 className="text-2xl md:text-3xl font-bold font-outfit text-slate-900 mb-6 relative z-10">
                  &quot;{current.quote}&quot;
                </h3>
                <blockquote className="text-lg text-slate-600 leading-relaxed mb-10 relative z-10">
                  „{current.text}“
                </blockquote>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 justify-between border-t border-slate-100 pt-8">
                  <div className="flex items-center gap-5">
                    <div className="w-24 h-24 rounded-full overflow-hidden relative bg-slate-200 shadow-md border-2 border-white">
                      <Image 
                        src={current.avatar} 
                        alt={current.name} 
                        fill 
                        className="object-cover"
                        referrerPolicy="no-referrer"
                        unoptimized
                      />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">{current.name}</div>
                      <div className="text-slate-500">{current.role}</div>
                      <div className="text-primary-600 font-medium mt-1">{current.hotel}</div>
                    </div>
                  </div>
                  
                  <div className="hidden sm:block w-32 h-16 relative opacity-60 grayscale hover:grayscale-0 transition-all">
                    <Image 
                      src={current.logo} 
                      alt={`Logo ${current.hotel}`} 
                      fill 
                      className="object-contain object-right"
                      referrerPolicy="no-referrer"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* Right side: Image & Stat */}
              <div className="relative">
                <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden relative shadow-lg">
                  <Image 
                    src={current.image} 
                    alt={`Hotel ${current.hotel}`} 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
                </div>
                
                {/* Floating Stat Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]"
                >
                  <div className="text-4xl font-bold text-primary-600 font-outfit mb-2">{current.stat}</div>
                  <div className="text-sm text-slate-600 font-medium leading-snug">{current.statText}</div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-primary-600 w-8' : 'bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Přejít na referenci ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
