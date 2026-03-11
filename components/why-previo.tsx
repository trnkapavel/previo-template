'use client';

import { motion } from 'framer-motion';
import { GraduationCap, ShieldCheck, Settings } from 'lucide-react';

const features = [
  {
    title: 'Školení a technická podpora',
    description: 'Nabízíme zaškolení do systému a kvalitní technickou podporu dostupnou 7 dnů v týdnu, která ochotně poradí při jakémkoliv dotazu.',
    icon: GraduationCap,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100'
  },
  {
    title: 'Bezpečnost a dostupnost',
    description: 'Zálohujeme každou minutu. Servery fungují s dostupností 99,97 %. Data jsou přenášena šifrovaně, takže se nemusíte obávat krádeže.',
    icon: ShieldCheck,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100'
  },
  {
    title: 'Prověřený systém',
    description: 'Vyvíjíme od roku 2004. Všechny funkce jsou sestaveny tak, aby maximálně vycházely vstříc požadavkům z praxe a novým trendům.',
    icon: Settings,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-100'
  }
];

export function WhyPrevio() {
  return (
    <section data-export-section="why-previo" className="py-20 bg-white relative overflow-hidden" id="proc-previo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">
                Málem jsme zapomněli
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 mb-6 leading-tight">
                Proč on-line hotelový systém? Proč od Previa?
              </h3>
              <div className="prose prose-lg text-slate-600 mb-10">
                <p>
                  V dnešní době je každý on-line. I vaši klienti vás dnes hledají zásadně na internetu. 
                  V současnosti je již více než 50 % rezervací vytvářeno přes internet, proč tedy on-line 
                  nespravovat i váš hotel?
                </p>
                <p>
                  Vše je dostupné odkudkoliv, z jakéhokoliv zařízení 24 hodin denně. Není třeba žádné 
                  instalace, žádná nutnost provádět aktualizace nebo zálohy. O vše se postaráme my.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-2">Vyzkoušet</h4>
                <a href="#cenik" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors mb-6 group">
                  Kolik to všechno vlastně stojí?
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                
                <hr className="border-slate-200 mb-6" />
                
                <h4 className="text-lg font-bold text-slate-900 mb-1">Máte další otázky?</h4>
                <p className="text-slate-600">
                  Napište nám na <a href="mailto:info@previo.cz" className="text-primary-600 font-medium hover:underline">info@previo.cz</a>, rádi Vám poradíme.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Feature Boxes */}
          <div className="lg:col-span-7">
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${feature.bgColor} ${feature.borderColor} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
