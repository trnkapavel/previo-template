'use client';

import { motion, useInView } from 'framer-motion';
import { useId, useRef } from 'react';

const BODY_LINES: { y: number; w: number }[] = [
  { y: 148, w: 272 },
  { y: 161, w: 240 },
  { y: 174, w: 264 },
  { y: 187, w: 200 },
];

export function BlogIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const uid = useId().replace(/:/g, '');

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${uid}hg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id={`${uid}sh`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity={0} />
          <stop offset="50%" stopColor="white" stopOpacity={0.3} />
          <stop offset="100%" stopColor="white" stopOpacity={0} />
        </linearGradient>
      </defs>

      {/* ── Header amber band ── */}
      <motion.rect
        x={0} y={0} width={400} height={90}
        fill={`url(#${uid}hg)`}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.1 }}
      />

      {/* "BLOG" watermark */}
      <motion.text
        x={200} y={50}
        textAnchor="middle" dominantBaseline="middle"
        fill="white" fillOpacity={0.12}
        fontSize={58} fontWeight={900} fontFamily="sans-serif"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.15 }}
      >BLOG</motion.text>

      {/* Category badge */}
      <motion.g
        initial={{ opacity: 0, scale: 0.85 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ type: 'spring', stiffness: 280, delay: 0.28 }}
        style={{ transformOrigin: '60px 26px' }}
      >
        <rect x={16} y={16} width={88} height={20} rx={10} fill="rgba(255,255,255,0.22)" />
        <text x={60} y={26} textAnchor="middle" dominantBaseline="middle"
          fill="white" fontSize={9} fontWeight={700} fontFamily="sans-serif">
          Tipy &amp; trendy
        </text>
      </motion.g>

      {/* Reading time */}
      <motion.text
        x={384} y={26} textAnchor="end" dominantBaseline="middle"
        fill="white" fillOpacity={0.75}
        fontSize={9} fontFamily="sans-serif"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.35 }}
      >5 min čtení</motion.text>

      {/* Shimmer sweep */}
      <motion.rect
        y={0} width={400} height={90}
        fill={`url(#${uid}sh)`}
        initial={{ x: -400 }}
        animate={isInView ? { x: ['-100%', '200%'] } : {}}
        transition={{ duration: 0.65, delay: 0.45, ease: 'easeInOut' }}
      />

      {/* ── White content area ── */}
      <rect x={0} y={90} width={400} height={166} fill="white" />

      {/* Title bar 1 */}
      <motion.rect
        x={16} y={106} width={256} height={14} rx={4} fill="#1e293b"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        style={{ transformOrigin: '16px 113px' }}
        transition={{ duration: 0.45, delay: 0.5, ease: 'easeOut' }}
      />

      {/* Title bar 2 */}
      <motion.rect
        x={16} y={125} width={172} height={14} rx={4} fill="#1e293b"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        style={{ transformOrigin: '16px 132px' }}
        transition={{ duration: 0.32, delay: 0.67, ease: 'easeOut' }}
      />

      {/* Blinking cursor */}
      <motion.rect
        x={192} y={123} width={2} height={16} rx={1} fill="#f59e0b"
        animate={isInView ? { opacity: [1, 1, 0, 0] } : { opacity: 0 }}
        transition={{ duration: 1.05, repeat: Infinity, ease: 'linear', delay: 0.95 }}
      />

      {/* Body text lines */}
      {BODY_LINES.map((line, i) => (
        <motion.rect
          key={i}
          x={16} y={line.y} width={line.w} height={8} rx={4} fill="#e2e8f0"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          style={{ transformOrigin: `16px ${line.y + 4}px` }}
          transition={{ duration: 0.35, delay: 0.78 + i * 0.1, ease: 'easeOut' }}
        />
      ))}

      {/* Divider */}
      <motion.line
        x1={16} y1={208} x2={384} y2={208}
        stroke="#f1f5f9" strokeWidth={1}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
      />

      {/* Author row */}
      <motion.g
        initial={{ opacity: 0, y: 4 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.35, delay: 1.25 }}
      >
        <circle cx={28} cy={222} r={10} fill="#fbbf24" />
        <text x={28} y={222} textAnchor="middle" dominantBaseline="middle"
          fill="white" fontSize={9} fontWeight={800} fontFamily="sans-serif">P</text>
        <text x={44} y={219} fill="#1e293b" fontSize={10} fontWeight={600}
          fontFamily="sans-serif">Pavel Novák</text>
        <text x={44} y={230} fill="#94a3b8" fontSize={8.5} fontFamily="sans-serif">23. 2. 2025</text>
      </motion.g>

      {/* View count */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.3 }}
      >
        <text x={384} y={219} textAnchor="end" fill="#94a3b8"
          fontSize={9} fontFamily="sans-serif">1 248 přečtení</text>
      </motion.g>

      {/* "Číst →" button */}
      <motion.g
        initial={{ opacity: 0, scale: 0.85 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 1.45, type: 'spring', stiffness: 250 }}
        style={{ transformOrigin: '335px 235px' }}
      >
        <rect x={304} y={224} width={62} height={22} rx={11} fill="#f59e0b" />
        <text x={335} y={235} textAnchor="middle" dominantBaseline="middle"
          fill="white" fontSize={9} fontWeight={700} fontFamily="sans-serif">Číst →</text>
      </motion.g>
    </svg>
  );
}
