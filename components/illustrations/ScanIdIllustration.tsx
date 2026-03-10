'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const FIELDS = [
  { label: 'Příjmení:', value: 'KOVÁŘ' },
  { label: 'Jméno:', value: 'Marek' },
  { label: 'Datum nar.:', value: '12.03.1985' },
  { label: 'St. příslušnost:', value: 'CZE' },
];

export function ScanIdIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const PX = 130, PY = 12, PW = 140, PH = 228, PR = 20;
  const SX = PX + 8, SY = PY + 12, SW = PW - 16, SH = PH - 24;

  // Viewfinder
  const VX = SX + 8, VY = SY + 32, VW = SW - 16, VH = 70;

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 262"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Phone body */}
      <motion.rect
        x={PX} y={PY} width={PW} height={PH} rx={PR}
        fill="#1e293b" stroke="#334155" strokeWidth={2}
        initial={{ opacity: 0, y: 16, scale: 0.92 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 200 }}
        style={{ transformOrigin: `${PX + PW / 2}px ${PY + PH / 2}px` }}
      />
      {/* Screen */}
      <motion.rect
        x={SX} y={SY} width={SW} height={SH} rx={12}
        fill="#0f172a"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.4 }}
      />
      {/* Notch */}
      <motion.rect
        x={PX + PW / 2 - 16} y={PY + 12} width={32} height={8} rx={4}
        fill="#1e293b"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay: 0.45 }}
      />

      {/* App header */}
      <motion.text
        x={PX + PW / 2} y={SY + 22}
        textAnchor="middle" dominantBaseline="middle"
        fill="white" fontSize={12} fontWeight={800} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.55 }}
      >ScanID</motion.text>
      <motion.text
        x={PX + PW / 2} y={SY + 34}
        textAnchor="middle" dominantBaseline="middle"
        fill="#64748b" fontSize={7} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.6 }}
      >Přiložte doklad ke kameře</motion.text>

      {/* Camera viewfinder frame */}
      <motion.rect
        x={VX} y={VY} width={VW} height={VH} rx={6}
        fill="#0a1628" stroke="#22c55e" strokeWidth={1.5} strokeDasharray="8 4"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.65 }}
      />
      {/* Corner markers */}
      {[
        [VX, VY, 8, 0], [VX, VY, 0, 8],
        [VX + VW, VY, -8, 0], [VX + VW, VY, 0, 8],
        [VX, VY + VH, 8, 0], [VX, VY + VH, 0, -8],
        [VX + VW, VY + VH, -8, 0], [VX + VW, VY + VH, 0, -8],
      ].map(([cx, cy, dx, dy], i) => (
        <motion.line
          key={i}
          x1={cx} y1={cy} x2={cx + dx} y2={cy + dy}
          stroke="#22c55e" strokeWidth={2.5} strokeLinecap="round"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: 0.7 + i * 0.03 }}
        />
      ))}

      {/* ID card inside viewfinder */}
      <motion.rect
        x={VX + 8} y={VY + 8} width={VW - 16} height={VH - 16} rx={4}
        fill="#1e3a5f"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.75 }}
      />
      {/* Photo placeholder */}
      <motion.rect
        x={VX + 14} y={VY + 14} width={20} height={26} rx={3}
        fill="#2d5a8e"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay: 0.8 }}
      />
      <motion.circle
        cx={VX + 24} cy={VY + 23} r={6} fill="#4a90c4"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay: 0.85 }}
      />
      {/* ID text lines */}
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x={VX + 42} y={VY + 16 + i * 9} width={VW - 66 - (i === 2 ? 8 : 0)} height={5} rx={2.5}
          fill="#334155"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: 0.88 + i * 0.05 }}
        />
      ))}
      {/* MRZ zone */}
      <motion.rect
        x={VX + 12} y={VY + VH - 20} width={VW - 24} height={10} rx={2}
        fill="#070e1a"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay: 0.95 }}
      />
      <motion.text
        x={VX + 14} y={VY + VH - 15} dominantBaseline="middle"
        fill="#22c55e" fontSize={4.5} fontFamily="monospace"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 1.0 }}
      >{'P<CZEKOVAR<<MAREK<<<<<<<<<<<<<<<<'}</motion.text>

      {/* Scan line (animated via group y transform) */}
      <motion.g
        animate={isInView ? { y: [0, VH - 8, 0] } : { y: 0 }}
        transition={{ duration: 1.6, delay: 1.1, repeat: Infinity, repeatDelay: 0.8, ease: 'easeInOut' }}
      >
        <line
          x1={VX + 2} x2={VX + VW - 2} y1={VY + 4} y2={VY + 4}
          stroke="#22c55e" strokeWidth={2} strokeLinecap="round"
          style={{ filter: 'drop-shadow(0 0 4px #22c55e88)' }}
        />
      </motion.g>

      {/* Extracted fields */}
      {FIELDS.map((field, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, x: -6 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.3, delay: 1.6 + i * 0.18 }}
        >
          <rect
            x={SX + 8} y={SY + 112 + i * 22} width={SW - 16} height={18} rx={4}
            fill="#1e293b"
          />
          <text
            x={SX + 14} y={SY + 121 + i * 22} dominantBaseline="middle"
            fill="#64748b" fontSize={7} fontFamily="sans-serif"
          >{field.label}</text>
          <text
            x={SX + 72} y={SY + 121 + i * 22} dominantBaseline="middle"
            fill="#e2e8f0" fontSize={7} fontWeight={600} fontFamily="sans-serif"
          >{field.value}</text>
          <motion.circle
            cx={SX + SW - 16} cy={SY + 121 + i * 22} r={4} fill="#22c55e"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 1.75 + i * 0.18, type: 'spring', stiffness: 300 }}
            style={{ transformOrigin: `${SX + SW - 16}px ${SY + 121 + i * 22}px` }}
          />
        </motion.g>
      ))}

      {/* Save CTA */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 2.4, type: 'spring', stiffness: 280 }}
        style={{ transformOrigin: `${PX + PW / 2}px ${SY + 204}px` }}
      >
        <rect x={SX + 14} y={SY + 194} width={SW - 28} height={22} rx={11} fill="#22c55e" />
        <text
          x={PX + PW / 2} y={SY + 205}
          textAnchor="middle" dominantBaseline="middle"
          fill="white" fontSize={9} fontWeight={700} fontFamily="sans-serif"
        >✓ Uložit do karty hosta</text>
      </motion.g>

      {/* Home bar */}
      <motion.rect
        x={PX + PW / 2 - 18} y={PY + PH - 10} width={36} height={4} rx={2}
        fill="#334155"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay: 0.6 }}
      />

      {/* Left side card */}
      <motion.g
        initial={{ opacity: 0, x: -12 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: 1.4 }}
      >
        <rect x={8} y={74} width={110} height={44} rx={9} fill="white" stroke="#e2e8f0" strokeWidth={1.5} />
        <circle cx={27} cy={96} r={10} fill="#dbeafe" />
        <text x={27} y={96} textAnchor="middle" dominantBaseline="middle" fontSize={12}>🪪</text>
        <text x={44} y={89} fill="#1e293b" fontSize={8} fontWeight={700} fontFamily="sans-serif">Strojové čtení</text>
        <text x={44} y={102} fill="#64748b" fontSize={7} fontFamily="sans-serif">OP i cestovní pas</text>
      </motion.g>

      {/* Right side card */}
      <motion.g
        initial={{ opacity: 0, x: 12 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: 1.6 }}
      >
        <rect x={282} y={74} width={110} height={44} rx={9} fill="white" stroke="#e2e8f0" strokeWidth={1.5} />
        <circle cx={301} cy={96} r={10} fill="#dcfce7" />
        <text x={301} y={96} textAnchor="middle" dominantBaseline="middle" fontSize={12}>⚡</text>
        <text x={318} y={89} fill="#1e293b" fontSize={8} fontWeight={700} fontFamily="sans-serif">0 chyb</text>
        <text x={318} y={102} fill="#64748b" fontSize={7} fontFamily="sans-serif">při přenosu dat</text>
      </motion.g>
    </svg>
  );
}
