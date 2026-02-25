'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const DAYS_HEADER = ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'];
// 4 weeks × 7 days, checkin=day 10, checkout=day 14
const CHECKIN  = 10;
const CHECKOUT = 14;
const TOTAL_DAYS = 28;

function dayX(i: number) { return 42 + (i % 7) * 28 + 14; }
function dayY(i: number) { return 88 + Math.floor(i / 7) * 26 + 13; }

export function BookingIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* ── CALENDAR PANEL (left) ── */}
      <motion.rect
        x={24} y={20} width={210} height={240} rx={12}
        fill="white" stroke="#e2e8f0" strokeWidth={1.5}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
      />

      {/* Month header */}
      <motion.text
        x={129} y={50}
        textAnchor="middle" dominantBaseline="middle"
        fill="#1e293b" fontSize={12} fontWeight={700} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        Únor 2025
      </motion.text>

      {/* Nav arrows */}
      <motion.text x={40} y={50} fill="#94a3b8" fontSize={13} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.2 }}>‹</motion.text>
      <motion.text x={216} y={50} fill="#94a3b8" fontSize={13} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.2 }}>›</motion.text>

      {/* Day-of-week headers */}
      {DAYS_HEADER.map((d, i) => (
        <motion.text
          key={d}
          x={dayX(i)} y={75}
          textAnchor="middle" dominantBaseline="middle"
          fill="#94a3b8" fontSize={9} fontWeight={600} fontFamily="sans-serif"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: 0.3 + i * 0.03 }}
        >{d}</motion.text>
      ))}

      {/* Day cells */}
      {Array.from({ length: TOTAL_DAYS }, (_, i) => {
        const day  = i + 1;
        const x    = dayX(i);
        const y    = dayY(i);
        const inRange = day >= CHECKIN && day <= CHECKOUT;
        const isCI    = day === CHECKIN;
        const isCO    = day === CHECKOUT;
        return (
          <motion.g key={day}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.15, delay: 0.4 + i * 0.02 }}
          >
            {/* range highlight */}
            {inRange && !isCI && !isCO && (
              <rect x={x - 14} y={y - 12} width={28} height={24} fill="#fde8e8" />
            )}
            {/* circle for check-in / check-out */}
            {(isCI || isCO) && (
              <motion.circle cx={x} cy={y} r={12} fill="#b50000"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 300, delay: isCI ? 0.9 : 1.05 }}
                style={{ transformOrigin: `${x}px ${y}px` }}
              />
            )}
            <text
              x={x} y={y + 0.5}
              textAnchor="middle" dominantBaseline="middle"
              fill={isCI || isCO ? 'white' : inRange ? '#b50000' : '#475569'}
              fontSize={9} fontWeight={inRange ? 700 : 400} fontFamily="sans-serif"
            >{day}</text>
          </motion.g>
        );
      })}

      {/* ── ROOM CARD (right) ── */}
      <motion.rect
        x={246} y={20} width={132} height={240} rx={12}
        fill="white" stroke="#e2e8f0" strokeWidth={1.5}
        initial={{ opacity: 0, x: 10 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.5 }}
      />

      {/* Room image placeholder */}
      <motion.rect
        x={256} y={30} width={112} height={72} rx={8}
        fill="#f1f5f9"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.6 }}
      />
      {/* bed icon — simple lines */}
      <motion.g
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <rect x={286} y={52} width={52} height={32} rx={4} fill="#cbd5e1" />
        <rect x={286} y={52} width={22} height={16} rx={3} fill="#94a3b8" />
        <rect x={316} y={52} width={22} height={16} rx={3} fill="#94a3b8" />
      </motion.g>

      {/* Room name */}
      <motion.text
        x={312} y={118}
        textAnchor="middle" dominantBaseline="middle"
        fill="#1e293b" fontSize={10} fontWeight={700} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.7 }}
      >Deluxe Double</motion.text>

      {/* Stars */}
      <motion.text
        x={312} y={134}
        textAnchor="middle" fill="#f59e0b" fontSize={10} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.75 }}
      >★★★★★</motion.text>

      {/* Divider */}
      <motion.line
        x1={256} y1={145} x2={368} y2={145} stroke="#f1f5f9" strokeWidth={1}
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay: 0.8 }}
      />

      {/* Price label */}
      <motion.text
        x={312} y={162}
        textAnchor="middle" dominantBaseline="middle"
        fill="#94a3b8" fontSize={8} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.85 }}
      >cena za noc</motion.text>

      <motion.text
        x={312} y={180}
        textAnchor="middle" dominantBaseline="middle"
        fill="#b50000" fontSize={15} fontWeight={800} fontFamily="sans-serif"
        initial={{ opacity: 0, y: 4 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.9 }}
      >2 890 Kč</motion.text>

      {/* Nights info */}
      <motion.text
        x={312} y={198}
        textAnchor="middle" dominantBaseline="middle"
        fill="#64748b" fontSize={8} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.95 }}
      >4 noci · 11 560 Kč</motion.text>

      {/* CTA Button */}
      <motion.g
        initial={{ opacity: 0, y: 6 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 1.1 }}
      >
        <motion.rect
          x={256} y={218} width={112} height={30} rx={8}
          fill="#b50000"
          animate={isInView ? { opacity: [1, 0.75, 1] } : {}}
          transition={{ duration: 1.8, delay: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <text
          x={312} y={233}
          textAnchor="middle" dominantBaseline="middle"
          fill="white" fontSize={10} fontWeight={700} fontFamily="sans-serif"
        >Rezervovat →</text>
      </motion.g>
    </svg>
  );
}
