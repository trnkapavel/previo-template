'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-600"></div>
      {/* Decorative background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-500/20 skew-x-12 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-primary-700/30 -skew-x-12 -translate-x-1/4"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-outfit text-white mb-6"
        >
          Jste připraveni posunout svůj hotel na další úroveň?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto"
        >
          Připojte se k tisícům spokojených hoteliérů a vyzkoušejte si Previo na 30 dní zdarma. Bez závazků a kreditní karty.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-primary-600 rounded-[3px] font-bold text-lg hover:bg-primary-50 transition-colors flex items-center justify-center gap-2 group">
            Začít zdarma
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-primary-700/50 text-white border border-primary-400/30 rounded-[3px] font-medium text-lg hover:bg-primary-700 transition-colors">
            Kontaktovat obchod
          </button>
        </motion.div>
      </div>
    </section>
  );
}
