'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MessageSquare, ArrowRight, Zap, Headset } from 'lucide-react';
import { useState, useEffect } from 'react';

export function SupportSection() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hour = now.getHours();

      // Po - Pá 8:00 - 20:00
      if (day >= 1 && day <= 5) {
        if (hour >= 8 && hour < 20) {
          setIsOpen(true);
          return;
        }
      }
      // So - Ne 9:00 - 17:00
      if (day === 0 || day === 6) {
        if (hour >= 9 && hour < 17) {
          setIsOpen(true);
          return;
        }
      }
      setIsOpen(false);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="podpora">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f3f3f3] rounded-3xl overflow-hidden relative shadow-xl border border-slate-200">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50 skew-x-12 translate-x-1/4"></div>
          <Headset className="absolute -bottom-12 -right-12 w-96 h-96 text-slate-200 -rotate-12 pointer-events-none" />
          
          <div className="relative grid lg:grid-cols-2 gap-0">
            {/* Left side: Contact Info */}
            <div className="p-8 md:p-16 lg:p-20 border-b lg:border-b-0 lg:border-r border-slate-200">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
                  <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    {isOpen ? 'Jsme online' : 'Aktuálně mimo provoz'}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 mb-6">
                  Call center
                </h2>
                <p className="text-xl text-slate-600 mb-10 max-w-md">
                  Naše klientská linka je tu pro vás každý den. Rádi vám pomůžeme s nastavením i dotazy.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-600/20 group-hover:scale-110 transition-transform">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">Klientská linka</div>
                      <a href="tel:+420251613924" className="text-2xl md:text-3xl font-bold text-slate-900 hover:text-primary-600 transition-colors">
                        +420 251 613 924
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 group-hover:bg-slate-50 transition-colors">
                      <Clock className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">Provozní doba</div>
                      <div className="text-lg text-slate-700">
                        <span className="font-bold text-slate-900">Po - Pá</span> 8:00 - 20:00
                      </div>
                      <div className="text-lg text-slate-700">
                        <span className="font-bold text-slate-900">So - Ne</span> 9:00 - 17:00
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side: Email & CTA */}
            <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-6 h-6 text-primary-600" />
                    <h3 className="text-xl font-bold text-slate-900">Máte další otázky?</h3>
                  </div>
                  <p className="text-slate-600 text-lg mb-6">
                    Napište nám na <a href="mailto:info@previo.cz" className="text-primary-600 font-bold hover:underline">info@previo.cz</a>, rádi Vám poradíme s čímkoliv.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <button className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-left hover:shadow-md hover:-translate-y-1 transition-all group">
                    <MessageSquare className="w-8 h-8 text-primary-600 mb-4" />
                    <div className="font-bold text-slate-900 mb-1">Nápověda</div>
                    <div className="text-sm text-slate-500 flex items-center gap-1 group-hover:text-primary-600 transition-colors">
                      Přejít do centra nápovědy <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                  
                  <button className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-left hover:shadow-md hover:-translate-y-1 transition-all group">
                    <Zap className="w-8 h-8 text-primary-600 mb-4" />
                    <div className="font-bold text-slate-900 mb-1">Webináře</div>
                    <div className="text-sm text-slate-500 flex items-center gap-1 group-hover:text-primary-600 transition-colors">
                      Sledujte naše návody <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-primary-50 border border-primary-100">
                  <p className="text-primary-800 text-sm italic">
                    &quot;Naše podpora je hodnocena jako jedna z nejlepších na trhu. Průměrná doba odezvy na e-mail je pod 2 hodiny.&quot;
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
