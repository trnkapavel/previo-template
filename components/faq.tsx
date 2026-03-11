'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Jak dlouho trvá nasazení systému do provozu?',
    answer: 'Nasazení systému je velmi rychlé. Základní nastavení zvládneme během několika hodin. Následné zaškolení personálu trvá obvykle 1-2 dny v závislosti na velikosti ubytovacího zařízení a zvolených modulech.'
  },
  {
    question: 'Je systém vhodný i pro malé penziony nebo apartmány?',
    answer: 'Ano, Previo je plně modulární. Můžete si vybrat pouze ty funkce, které skutečně využijete. Díky tomu je systém cenově dostupný a efektivní jak pro malé rodinné penziony, tak pro velké hotelové komplexy.'
  },
  {
    question: 'Jak funguje propojení s portály jako Booking.com nebo Expedia?',
    answer: 'Náš Channel Manager zajišťuje obousměrnou synchronizaci v reálném čase. Jakmile přijde rezervace z Booking.com, okamžitě se propíše do vaší plachty v Previu a zároveň se sníží dostupná kapacita na všech ostatních napojených portálech. Tím se efektivně brání overbookingu.'
  },
  {
    question: 'Mohu si systém vyzkoušet zdarma?',
    answer: 'Samozřejmě. Nabízíme nezávaznou zkušební verzi na 30 dní zdarma. Během této doby vám bude plně k dispozici naše technická podpora, která vám pomůže se základním nastavením.'
  },
  {
    question: 'Co se stane, když mi vypadne internet?',
    answer: 'Previo je cloudové řešení, takže pro plnohodnotný chod potřebujete připojení k internetu. Nicméně systém je optimalizován i pro mobilní data, takže v případě výpadku pevné linky můžete snadno pokračovat v práci přes mobilní hotspot.'
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section data-export-section="faq" className="py-20 bg-white relative overflow-hidden" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 mb-4">
            Často kladené otázky
          </h2>
          <p className="text-lg text-slate-600">
            Odpovědi na nejčastější dotazy ohledně nasazení a používání systému Previo.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                openIndex === index ? 'border-primary-200 bg-primary-50/50' : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-primary-700' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-primary-600' : 'text-slate-400'
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
