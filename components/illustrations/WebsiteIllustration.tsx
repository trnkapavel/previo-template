'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function WebsiteIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  // Browser
  const BX = 14, BY = 18, BW = 280, BH = 212;
  // Mobile phone
  const PHX = 308, PHY = 58, PHW = 72, PHH = 124, PHR = 10;

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* ── Browser frame ── */}
      <motion.rect
        x={BX} y={BY} width={BW} height={BH} rx={12}
        fill="white" stroke="#e2e8f0" strokeWidth={1.5}
        initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
      />
      {/* Browser chrome */}
      <motion.rect
        x={BX} y={BY} width={BW} height={32} rx={12}
        fill="#f8fafc"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay: 0.2 }}
      />
      <rect x={BX} y={BY + 20} width={BW} height={12} fill="#f8fafc" />
      {/* Traffic lights */}
      {['#ef4444', '#f59e0b', '#22c55e'].map((c, i) => (
        <motion.circle
          key={i}
          cx={BX + 16 + i * 14} cy={BY + 16} r={4}
          fill={c}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: 0.3 + i * 0.05 }}
        />
      ))}
      {/* URL bar */}
      <motion.rect
        x={BX + 60} y={BY + 8} width={BW - 80} height={16} rx={8}
        fill="#f1f5f9" stroke="#e2e8f0" strokeWidth={1}
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.4 }}
      />
      <motion.text
        x={BX + 80} y={BY + 16} dominantBaseline="middle"
        fill="#94a3b8" fontSize={7} fontFamily="monospace"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.5 }}
      >hotel-vrchlabi.cz</motion.text>

      {/* Website content area */}
      {/* Hero image */}
      <motion.rect
        x={BX + 8} y={BY + 36} width={BW - 16} height={82} rx={6}
        fill="#1e3a5f"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.5 }}
      />
      {/* Mountain silhouette */}
      <motion.path
        d={`M ${BX + 8} ${BY + 118} L ${BX + 68} ${BY + 70} L ${BX + 130} ${BY + 88} L ${BX + 196} ${BY + 55} L ${BX + BW - 8} ${BY + 82} L ${BX + BW - 8} ${BY + 118} Z`}
        fill="#2d5a8e"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.6 }}
      />
      {/* Hotel name overlay */}
      <motion.text
        x={BX + BW / 2} y={BY + 76}
        textAnchor="middle" dominantBaseline="middle"
        fill="white" fontSize={14} fontWeight={800} fontFamily="sans-serif"
        initial={{ opacity: 0, y: 4 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.7 }}
      >Hotel Vrchlabí</motion.text>
      <motion.text
        x={BX + BW / 2} y={BY + 93}
        textAnchor="middle" dominantBaseline="middle"
        fill="rgba(255,255,255,0.7)" fontSize={7.5} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.8 }}
      >Krkonoše · 4★ · SPA & Wellness</motion.text>

      {/* Booking CTA button */}
      <motion.g
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.9, type: 'spring', stiffness: 300 }}
        style={{ transformOrigin: `${BX + BW / 2}px ${BY + 108}px` }}
      >
        <motion.rect
          x={BX + BW / 2 - 48} y={BY + 100} width={96} height={20} rx={4}
          fill="#b50000"
          animate={isInView ? { opacity: [1, 0.75, 1] } : {}}
          transition={{ duration: 2, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <text
          x={BX + BW / 2} y={BY + 110}
          textAnchor="middle" dominantBaseline="middle"
          fill="white" fontSize={8} fontWeight={700} fontFamily="sans-serif"
        >Rezervovat pobyt →</text>
      </motion.g>

      {/* Content cards row */}
      {[
        { label: 'Pokoje & apartmány', x: BX + 10 },
        { label: 'SPA & wellness', x: BX + 100 },
        { label: 'Ceník a balíčky', x: BX + 190 },
      ].map((card, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
        >
          <rect
            x={card.x} y={BY + 126} width={78} height={56} rx={6}
            fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1}
          />
          <rect x={card.x + 4} y={BY + 130} width={70} height={32} rx={4} fill="#e2e8f0" />
          <text
            x={card.x + 39} y={BY + 172}
            textAnchor="middle" dominantBaseline="middle"
            fill="#475569" fontSize={6.5} fontFamily="sans-serif"
          >{card.label}</text>
        </motion.g>
      ))}

      {/* Footer bar */}
      <motion.rect
        x={BX + 8} y={BY + 190} width={BW - 16} height={14} rx={4}
        fill="#f1f5f9"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 1.1 }}
      />
      <motion.text
        x={BX + 18} y={BY + 197} dominantBaseline="middle"
        fill="#94a3b8" fontSize={6} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 1.2 }}
      >© 2025 Hotel Vrchlabí · Webové stránky od Previo</motion.text>

      {/* ── Mobile phone ── */}
      <motion.rect
        x={PHX} y={PHY} width={PHW} height={PHH} rx={PHR}
        fill="#1e293b" stroke="#334155" strokeWidth={1.5}
        initial={{ opacity: 0, x: 20, scale: 0.9 }}
        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.7, type: 'spring', stiffness: 200 }}
        style={{ transformOrigin: `${PHX + PHW / 2}px ${PHY + PHH / 2}px` }}
      />
      <motion.rect
        x={PHX + 5} y={PHY + 8} width={PHW - 10} height={PHH - 16} rx={7}
        fill="#0f172a"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay: 0.9 }}
      />
      {/* Mini hero */}
      <motion.rect
        x={PHX + 7} y={PHY + 10} width={PHW - 14} height={44} rx={5}
        fill="#1e3a5f"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 1.0 }}
      />
      <motion.text
        x={PHX + PHW / 2} y={PHY + 26}
        textAnchor="middle" dominantBaseline="middle"
        fill="white" fontSize={7} fontWeight={700} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 1.1 }}
      >Hotel Vrchlabí</motion.text>
      <motion.text
        x={PHX + PHW / 2} y={PHY + 38}
        textAnchor="middle" dominantBaseline="middle"
        fill="rgba(255,255,255,0.6)" fontSize={5.5} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay: 1.15 }}
      >★★★★</motion.text>
      {/* Mini booking CTA */}
      <motion.rect
        x={PHX + 10} y={PHY + 58} width={PHW - 20} height={14} rx={3}
        fill="#b50000"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 1.2 }}
      />
      <motion.text
        x={PHX + PHW / 2} y={PHY + 65}
        textAnchor="middle" dominantBaseline="middle"
        fill="white" fontSize={5.5} fontWeight={700} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay: 1.3 }}
      >Rezervovat →</motion.text>
      {/* Mini content lines */}
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={i}
          x={PHX + 10} y={PHY + 78 + i * 10} width={PHW - 24 - (i % 2 === 1 ? 10 : 0)} height={5} rx={2.5}
          fill="#334155"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: 1.2 + i * 0.05 }}
        />
      ))}

      {/* Connector dashes */}
      <motion.path
        d={`M ${BX + BW + 6} ${BY + BH / 2} Q ${PHX - 8} ${BY + BH / 2 - 10} ${PHX} ${PHY + PHH / 2}`}
        stroke="#cbd5e1" strokeWidth={1.5} strokeDasharray="4 3" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.1 }}
      />

      {/* Responsive badge */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 1.5 }}
      >
        <rect x={306} y={192} width={84} height={22} rx={11} fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1} />
        <text
          x={348} y={203}
          textAnchor="middle" dominantBaseline="middle"
          fill="#475569" fontSize={8} fontWeight={600} fontFamily="sans-serif"
        >Responzivní</text>
      </motion.g>

      {/* SEO badge */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 1.7 }}
      >
        <rect x={306} y={220} width={84} height={22} rx={11} fill="#fef3c7" stroke="#fde68a" strokeWidth={1} />
        <text
          x={348} y={231}
          textAnchor="middle" dominantBaseline="middle"
          fill="#92400e" fontSize={8} fontWeight={600} fontFamily="sans-serif"
        >SEO optimalizace</text>
      </motion.g>
    </svg>
  );
}
