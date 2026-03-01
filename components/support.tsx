'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MessageSquare, ArrowRight, Zap, Headset, Timer } from 'lucide-react';
import { useState, useEffect } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const stagger = (delay = 0, staggerChildren = 0.09) => ({
  hidden: {},
  visible: { transition: { delayChildren: delay, staggerChildren } },
});

const HOURS = [
  { day: 'Po', from: 8, to: 20 },
  { day: 'Út', from: 8, to: 20 },
  { day: 'St', from: 8, to: 20 },
  { day: 'Čt', from: 8, to: 20 },
  { day: 'Pá', from: 8, to: 20 },
  { day: 'So', from: 9, to: 17 },
  { day: 'Ne', from: 9, to: 17 },
];

const STATS = [
  { value: '7 dní', label: 'v týdnu k dispozici' },
  { value: '4 000+', label: 'spokojených klientů' },
  { value: '20 let', label: 'na trhu' },
];

export function SupportSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [todayIdx, setTodayIdx] = useState(0);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const jsToIdx = [6, 0, 1, 2, 3, 4, 5]; // Sun=0 → idx 6
      setTodayIdx(jsToIdx[day]);
      const { from, to } = HOURS[jsToIdx[day]];
      setIsOpen(hour >= from && hour < to);
    };
    check();
    const t = setInterval(check, 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="podpora">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-slate-900 rounded-3xl overflow-hidden"
        >
          {/* Background texture */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/40 via-slate-900 to-slate-900 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />
          <Headset className="absolute -bottom-10 -right-10 w-[420px] h-[420px] text-white/[0.04] -rotate-12 pointer-events-none select-none" />

          <div className="relative grid lg:grid-cols-2 gap-0">

            {/* ── Left: headline + number + stats ── */}
            <motion.div
              variants={stagger(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 md:p-14 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10"
            >
              <div>
                {/* Live status */}
                <motion.div
                  variants={fadeIn}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-8 ${
                    isOpen
                      ? 'bg-emerald-500/10 border-emerald-500/30'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <span className="relative flex h-2 w-2">
                    {isOpen && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />}
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? 'bg-emerald-400' : 'bg-slate-500'}`} />
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-wider ${isOpen ? 'text-emerald-400' : 'text-slate-400'}`}>
                    {isOpen ? 'Právě jsme online' : 'Aktuálně mimo provoz'}
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                  variants={fadeUp}
                  className="text-4xl md:text-6xl font-bold font-outfit text-white leading-[1.05] mb-6"
                >
                  Zavoláte.<br />Odpovíme.
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="text-slate-400 text-lg mb-10 max-w-sm leading-relaxed"
                >
                  Žádný chatbot, žádné čekání na e-mail. Prostě zavolejte a někdo to s vámi vyřeší.
                </motion.p>

                {/* Big phone CTA */}
                <motion.a
                  variants={fadeUp}
                  href="tel:+420251613924"
                  className="group inline-flex items-center gap-4 mb-10"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-600/30 group-hover:bg-primary-500 group-hover:scale-110 transition-all">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary-400 transition-colors tracking-tight">
                    +420 251 613 924
                  </span>
                </motion.a>

                {/* Response time */}
                <motion.div variants={fadeUp} className="flex items-center gap-2 mb-10 -mt-6">
                  <Timer className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-xs text-slate-500">Průměrná odezva <span className="text-slate-300 font-semibold">do 3 minut</span></span>
                </motion.div>

                {/* Email */}
                <motion.div variants={fadeUp} className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-slate-500" />
                  <a href="mailto:info@previo.cz" className="text-slate-400 hover:text-white transition-colors text-sm">
                    info@previo.cz
                  </a>
                </motion.div>
              </div>

              {/* Stats row */}
              <motion.div
                variants={stagger(0.55, 0.13)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-3 mt-12 pt-12 border-t border-white/10"
              >
                {STATS.map((s) => (
                  <motion.div key={s.value} variants={fadeUp}>
                    <div className="text-2xl font-bold text-white mb-1">{s.value}</div>
                    <div className="text-xs text-slate-500 leading-tight">{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right: hours + cards ── */}
            <motion.div
              variants={stagger(0.35)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 md:p-14 lg:p-16 flex flex-col justify-between"
            >
              <div>
                <motion.div variants={fadeIn} className="flex items-center gap-2 mb-6">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Provozní doba</span>
                </motion.div>

                {/* Hours grid — each day staggered */}
                <div className="relative mb-12">
                  {/* Weekend label */}
                  <motion.div
                    variants={fadeIn}
                    className="absolute -top-5 right-0 flex items-center gap-1 text-[10px] font-semibold text-primary-400/80 uppercase tracking-wider"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-400/60 inline-block" />
                    i víkendy
                  </motion.div>
                <motion.div
                  variants={stagger(0, 0.06)}
                  className="grid grid-cols-7 gap-1.5"
                >
                  {HOURS.map((h, idx) => {
                    const isToday = idx === todayIdx;
                    return (
                      <motion.div
                        key={h.day}
                        variants={{
                          hidden: { opacity: 0, y: 16 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                        }}
                        className="flex flex-col items-center gap-1.5"
                      >
                        <span className={`text-[11px] font-bold uppercase ${isToday ? 'text-primary-400' : 'text-slate-500'}`}>
                          {h.day}
                        </span>
                        <div className={`w-full rounded-lg p-2 text-center ${
                          isToday
                            ? 'bg-primary-600/20 border border-primary-600/40'
                            : 'bg-white/5 border border-white/5'
                        }`}>
                          <div className={`text-[10px] font-semibold leading-tight ${isToday ? 'text-primary-300' : 'text-slate-400'}`}>
                            {h.from}:00
                          </div>
                          <div className={`text-[10px] leading-tight ${isToday ? 'text-primary-400/70' : 'text-slate-600'}`}>
                            {h.to}:00
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
                </div>

                {/* Team note */}
                <motion.div variants={fadeUp} className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-8">
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Náš tým tvoří lidé, kteří hoteliérský provoz znají zevnitř. Víme, co to znamená, když systém nefunguje uprostřed check-inu.
                  </p>
                  <p className="text-slate-500 text-xs font-medium">Tým zákaznické podpory Previo</p>
                </motion.div>
              </div>

              {/* Quick links */}
              <motion.div
                variants={stagger(0, 0.1)}
                className="grid sm:grid-cols-2 gap-3"
              >
                <motion.button
                  variants={fadeUp}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 text-left hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <MessageSquare className="w-6 h-6 text-primary-400 mb-3" />
                  <div className="font-bold text-white text-sm mb-1">Centrum nápovědy</div>
                  <div className="text-xs text-slate-500 flex items-center gap-1 group-hover:text-slate-300 transition-colors">
                    Procházet články <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.button>
                <motion.button
                  variants={fadeUp}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 text-left hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <Zap className="w-6 h-6 text-primary-400 mb-3" />
                  <div className="font-bold text-white text-sm mb-1">Webináře</div>
                  <div className="text-xs text-slate-500 flex items-center gap-1 group-hover:text-slate-300 transition-colors">
                    Sledovat návody <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
