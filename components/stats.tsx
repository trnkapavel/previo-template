'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { MousePointer2 } from 'lucide-react';

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString('cs-CZ'));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: duration, ease: "easeOut" });
    }
  }, [inView, count, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function StatsSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 mb-4"
          >
            Nejrozšířenější hotelový systém na českém trhu
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Přidejte se k <span className="font-bold text-primary-600">4 976</span> ubytovatelům
          </motion.p>
          
          {/* Animated Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-600 animate-bounce">
              <path d="M30 5V55M30 55L10 35M30 55L50 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {/* Box 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-[3px] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow"
          >
            <div className="text-slate-500 text-sm font-medium mb-4">Za minulý měsíc jsme přijali</div>
            <div className="text-4xl lg:text-5xl font-bold font-outfit text-primary-600 mb-4">
              <Counter value={384363} />
            </div>
            <div className="text-slate-600 font-medium">online rezervací…</div>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-[3px] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow"
          >
            <div className="text-slate-500 text-sm font-medium mb-4">...z čehož jsme pomohli k</div>
            <div className="text-4xl lg:text-5xl font-bold font-outfit text-primary-600 mb-4">
              <Counter value={50040} />
            </div>
            <div className="text-slate-600 font-medium">přímým rezervacím</div>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-[3px] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow"
          >
            <div className="text-slate-500 text-sm font-medium mb-4">Šetříme čas</div>
            <div className="text-4xl lg:text-5xl font-bold font-outfit text-primary-600 mb-4">
              <Counter value={4976} />
            </div>
            <div className="text-slate-600 font-medium">ubytovatelům</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Zákazníci Previa mají až o <span className="text-slate-600 font-bold">30 % více přímých rezervací</span> a ušetří <span className="text-slate-600 font-bold">5 až 8 hodin týdně</span>.
          </p>
        </motion.div>
      </div>
      
      {/* Background decoration — hidden on mobile (blur-3xl is expensive to rasterise) */}
      <div className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-indigo-100/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
