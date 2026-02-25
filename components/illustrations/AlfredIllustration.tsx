'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const FEATURES = [
  { icon: '🔑', label: 'Digitální klíče',    color: '#3b82f6' },
  { icon: '💳', label: 'Online platby',       color: '#22c55e' },
  { icon: '📅', label: 'Kalendář rezervací',  color: '#f97316' },
  { icon: '👥', label: 'Správa hostů',        color: '#8b5cf6' },
];

export function AlfredIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  // Phone dimensions
  const PX = 145, PY = 18, PW = 110, PH = 210, PR = 18;

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 252"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* ── Phone body ── */}
      <motion.rect
        x={PX} y={PY} width={PW} height={PH} rx={PR}
        fill="#1e293b" stroke="#334155" strokeWidth={2}
        initial={{ opacity: 0, y: 16, scale: 0.92 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 200 }}
        style={{ transformOrigin: `${PX + PW / 2}px ${PY + PH / 2}px` }}
      />

      {/* Screen bezel */}
      <motion.rect
        x={PX + 6} y={PY + 10} width={PW - 12} height={PH - 20} rx={12}
        fill="#0f172a"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.4 }}
      />

      {/* Notch */}
      <motion.rect
        x={PX + PW / 2 - 18} y={PY + 10} width={36} height={10} rx={5}
        fill="#1e293b"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay: 0.5 }}
      />

      {/* ── App content ── */}

      {/* Status bar time */}
      <motion.text
        x={PX + PW / 2} y={PY + 30}
        textAnchor="middle" dominantBaseline="middle"
        fill="#94a3b8" fontSize={8} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay: 0.5 }}
      >9:41</motion.text>

      {/* Alfred brand name */}
      <motion.text
        x={PX + PW / 2} y={PY + 48}
        textAnchor="middle" dominantBaseline="middle"
        fill="white" fontSize={13} fontWeight={800} fontFamily="sans-serif"
        letterSpacing={1}
        initial={{ opacity: 0, y: 4 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.55 }}
      >Alfred</motion.text>

      {/* Greeting */}
      <motion.text
        x={PX + PW / 2} y={PY + 64}
        textAnchor="middle" dominantBaseline="middle"
        fill="#64748b" fontSize={8} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.65 }}
      >Dobrý den, Jan ✦</motion.text>

      {/* Digital key card */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        <rect x={PX + 12} y={PY + 76} width={PW - 24} height={52} rx={8} fill="#1d4ed8" />
        {/* Card chip */}
        <rect x={PX + 18} y={PY + 86} width={14} height={10} rx={2} fill="#fbbf24" />
        {/* NFC waves — animated */}
        {[1, 2, 3].map((i) => (
          <motion.path
            key={`nfc-${i}`}
            d={`M ${PX + 88} ${PY + 91} a ${i * 6} ${i * 6} 0 0 1 0 ${i * 4}`}
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            fill="none"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={isInView ? {
              opacity: [0, 0.9, 0],
              pathLength: [0, 1, 1],
            } : {}}
            transition={{
              duration: 1.2,
              delay: 1.2 + i * 0.15,
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          />
        ))}
        <text
          x={PX + 18} y={PY + 118}
          fill="rgba(255,255,255,0.6)" fontSize={7} fontFamily="sans-serif"
        >DIGITÁLNÍ KLÍČ · pokoj 302</text>
      </motion.g>

      {/* Feature tiles 2×2 */}
      {FEATURES.map((f, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const tx = PX + 12 + col * ((PW - 24 - 6) / 2 + 6);
        const ty = PY + 140 + row * 36;
        const tw = (PW - 24 - 6) / 2;
        return (
          <motion.g
            key={f.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.9 + i * 0.1, type: 'spring', stiffness: 260 }}
            style={{ transformOrigin: `${tx + tw / 2}px ${ty + 14}px` }}
          >
            <rect x={tx} y={ty} width={tw} height={28} rx={6} fill="#1e293b" />
            <rect x={tx} y={ty} width={3} height={28} rx={2} fill={f.color} />
            <text
              x={tx + 10} y={ty + 14}
              dominantBaseline="middle"
              fill="white" fontSize={7} fontWeight={600} fontFamily="sans-serif"
            >{f.label}</text>
          </motion.g>
        );
      })}

      {/* Home indicator */}
      <motion.rect
        x={PX + PW / 2 - 18} y={PY + PH - 14} width={36} height={4} rx={2}
        fill="#334155"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay: 0.6 }}
      />

      {/* ── Side feature cards ── */}

      {/* Left: "Check-in dnes" */}
      <motion.g
        initial={{ opacity: 0, x: -12 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: 1.3 }}
      >
        <rect x={16} y={80} width={114} height={48} rx={10} fill="white" stroke="#e2e8f0" strokeWidth={1.5} />
        <circle cx={34} cy={104} r={10} fill="#fef3c7" />
        <text x={34} y={104} textAnchor="middle" dominantBaseline="middle" fontSize={11}>📋</text>
        <text x={52} y={97} fill="#1e293b" fontSize={9} fontWeight={700} fontFamily="sans-serif">Check-in dnes</text>
        <text x={52} y={111} fill="#64748b" fontSize={8} fontFamily="sans-serif">12 hostů · pokoj 101–112</text>
      </motion.g>

      {/* Right: "Platba přijata" */}
      <motion.g
        initial={{ opacity: 0, x: 12 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: 1.45 }}
      >
        <rect x={270} y={80} width={114} height={48} rx={10} fill="white" stroke="#e2e8f0" strokeWidth={1.5} />
        <circle cx={288} cy={104} r={10} fill="#dcfce7" />
        <text x={288} y={104} textAnchor="middle" dominantBaseline="middle" fontSize={11}>✅</text>
        <text x={306} y={97} fill="#1e293b" fontSize={9} fontWeight={700} fontFamily="sans-serif">Platba přijata</text>
        <text x={306} y={111} fill="#64748b" fontSize={8} fontFamily="sans-serif">3 490 Kč · pokoj 205</text>
      </motion.g>

      {/* Left bottom: "Správa hostů" */}
      <motion.g
        initial={{ opacity: 0, x: -12 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: 1.6 }}
      >
        <rect x={16} y={152} width={114} height={48} rx={10} fill="white" stroke="#e2e8f0" strokeWidth={1.5} />
        <circle cx={34} cy={176} r={10} fill="#ede9fe" />
        <text x={34} y={176} textAnchor="middle" dominantBaseline="middle" fontSize={11}>👤</text>
        <text x={52} y={169} fill="#1e293b" fontSize={9} fontWeight={700} fontFamily="sans-serif">Správa hostů</text>
        <text x={52} y={183} fill="#64748b" fontSize={8} fontFamily="sans-serif">4 aktiv. rezervace</text>
      </motion.g>

      {/* Right bottom: "Kalendář" */}
      <motion.g
        initial={{ opacity: 0, x: 12 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: 1.75 }}
      >
        <rect x={270} y={152} width={114} height={48} rx={10} fill="white" stroke="#e2e8f0" strokeWidth={1.5} />
        <circle cx={288} cy={176} r={10} fill="#fee2e2" />
        <text x={288} y={176} textAnchor="middle" dominantBaseline="middle" fontSize={11}>📆</text>
        <text x={306} y={169} fill="#1e293b" fontSize={9} fontWeight={700} fontFamily="sans-serif">Kalendář</text>
        <text x={306} y={183} fill="#64748b" fontSize={8} fontFamily="sans-serif">94 % obsazenost</text>
      </motion.g>
    </svg>
  );
}
