'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function PaymentIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* ── Payment Terminal (left) ── */}
      <motion.rect
        x={28} y={36} width={144} height={196} rx={16}
        fill="#1e293b" stroke="#334155" strokeWidth={2}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 200 }}
      />
      {/* Screen */}
      <motion.rect
        x={38} y={52} width={124} height={84} rx={8}
        fill="#0f172a"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.4 }}
      />
      <motion.text
        x={100} y={76} textAnchor="middle" dominantBaseline="middle"
        fill="#94a3b8" fontSize={8} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.6 }}
      >K platbě</motion.text>
      <motion.text
        x={100} y={100} textAnchor="middle" dominantBaseline="middle"
        fill="white" fontSize={22} fontWeight={800} fontFamily="sans-serif"
        initial={{ opacity: 0, y: 4 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.7 }}
      >2 490 Kč</motion.text>
      <motion.text
        x={100} y={120} textAnchor="middle" dominantBaseline="middle"
        fill="#64748b" fontSize={7.5} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.8 }}
      >Pokoj 302 · 2 noci</motion.text>

      {/* NFC waves */}
      {[1, 2, 3].map((i) => (
        <motion.path
          key={`nfc-${i}`}
          d={`M ${90 + i * 6} ${152} a ${i * 8} ${i * 10} 0 0 1 0 ${i * 7}`}
          stroke="#22c55e"
          strokeWidth={1.5}
          strokeLinecap="round"
          fill="none"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={isInView ? { opacity: [0, 0.9, 0], pathLength: [0, 1, 1] } : {}}
          transition={{
            duration: 1.0,
            delay: 1.2 + i * 0.12,
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        />
      ))}

      <motion.text
        x={100} y={182} textAnchor="middle" dominantBaseline="middle"
        fill="#64748b" fontSize={7} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.9 }}
      >Přiložte kartu nebo telefon</motion.text>

      {/* Keypad dots */}
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2].map((col) => (
          <motion.rect
            key={`key-${row}-${col}`}
            x={46 + col * 32} y={200 + row * 8} width={24} height={5} rx={2.5}
            fill="#334155"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.1, delay: 0.5 + row * 0.05 + col * 0.02 }}
          />
        ))
      )}

      {/* ── Card (right top) ── */}
      <motion.rect
        x={216} y={42} width={152} height={92} rx={12}
        fill="#1d4ed8"
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 180 }}
      />
      <motion.rect
        x={230} y={60} width={18} height={14} rx={3}
        fill="#fbbf24"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay: 0.8 }}
      />
      <motion.text
        x={292} y={108} textAnchor="middle" dominantBaseline="middle"
        fill="rgba(255,255,255,0.7)" fontSize={9} fontFamily="monospace" letterSpacing={1}
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.9 }}
      >•••• •••• •••• 4829</motion.text>
      {/* Contactless symbol */}
      {[6, 10, 14].map((r, i) => (
        <motion.path
          key={`ct-${i}`}
          d={`M ${350} ${72} a ${r} ${r} 0 0 1 0 ${r}`}
          stroke="rgba(255,255,255,0.7)"
          strokeWidth={1.5}
          strokeLinecap="round"
          fill="none"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: 0.85 + i * 0.05 }}
        />
      ))}

      {/* ── Phone (right bottom) ── */}
      <motion.text
        x={292} y={150} textAnchor="middle" dominantBaseline="middle"
        fill="#94a3b8" fontSize={9} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 1.0 }}
      >nebo</motion.text>

      <motion.rect
        x={248} y={162} width={88} height={90} rx={12}
        fill="#1e293b" stroke="#334155" strokeWidth={1.5}
        initial={{ opacity: 0, y: 14 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.9, type: 'spring', stiffness: 200 }}
      />
      <motion.rect
        x={254} y={170} width={76} height={76} rx={8}
        fill="#0f172a"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay: 1.1 }}
      />
      <motion.text
        x={292} y={196} textAnchor="middle" dominantBaseline="middle"
        fill="white" fontSize={9} fontWeight={700} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 1.2 }}
      >Apple Pay</motion.text>
      <motion.text
        x={292} y={210} textAnchor="middle" dominantBaseline="middle"
        fill="#64748b" fontSize={7.5} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 1.25 }}
      >Google Pay</motion.text>
      {/* Touch indicator */}
      <motion.circle
        cx={292} cy={230} r={10}
        stroke="#64748b" strokeWidth={1.5} fill="none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 1.3, type: 'spring', stiffness: 300 }}
        style={{ transformOrigin: '292px 230px' }}
      />
      <motion.circle
        cx={292} cy={230} r={5}
        fill="#475569"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.2, delay: 1.35 }}
      />

      {/* ── Success badge ── */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 2.0, type: 'spring', stiffness: 300 }}
        style={{ transformOrigin: '148px 252px' }}
      >
        <rect x={52} y={240} width={192} height={26} rx={13} fill="#22c55e" />
        <text
          x={148} y={253}
          textAnchor="middle" dominantBaseline="middle"
          fill="white" fontSize={10} fontWeight={700} fontFamily="sans-serif"
        >✓ Platba přijata · 2 490 Kč</text>
      </motion.g>

      {/* Previo sync label */}
      <motion.g
        initial={{ opacity: 0, y: 6 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 2.3 }}
      >
        <text
          x={344} y={248} textAnchor="middle" dominantBaseline="middle"
          fill="#94a3b8" fontSize={7} fontFamily="sans-serif"
        >Auto-sync do</text>
        <text
          x={344} y={260} textAnchor="middle" dominantBaseline="middle"
          fill="#b50000" fontSize={8} fontWeight={600} fontFamily="sans-serif"
        >Previo PMS</text>
      </motion.g>
    </svg>
  );
}
