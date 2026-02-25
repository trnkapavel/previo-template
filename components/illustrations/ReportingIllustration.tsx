'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

const MONTHS = ['Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čer'];
// occupancy % per month
const OCC    = [62, 71, 68, 84, 91, 87];
// revenue in thousands CZK
const REV    = [180, 214, 196, 268, 312, 284];

const CHART_X = 44;
const CHART_Y = 168;
const CHART_W = 320;
const CHART_H = 80;
const BAR_W   = 36;
const BAR_GAP = (CHART_W - MONTHS.length * BAR_W) / (MONTHS.length + 1);

function AnimatedNumber({
  target, suffix, isInView, delay, fontSize, fill, fontWeight,
  x, y,
}: {
  target: number; suffix: string; isInView: boolean; delay: number;
  fontSize: number; fill: string; fontWeight: number; x: number; y: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v).toLocaleString('cs-CZ')}${suffix}`);
  const ref = useRef<SVGTextElement>(null);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, target, {
      duration: 1.4, delay, ease: 'easeOut',
    });
    return controls.stop;
  }, [isInView, target, delay, count]);

  return (
    <motion.text
      ref={ref}
      x={x} y={y}
      textAnchor="middle" dominantBaseline="middle"
      fill={fill} fontSize={fontSize} fontWeight={fontWeight} fontFamily="sans-serif"
    >
      <motion.tspan>{rounded}</motion.tspan>
    </motion.text>
  );
}

export function ReportingIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const maxRev = Math.max(...REV);

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* ── KPI cards ── */}
      {/* Card 1: Obsazenost */}
      <motion.rect
        x={24} y={18} width={164} height={72} rx={12}
        fill="white" stroke="#e2e8f0" strokeWidth={1.5}
        initial={{ opacity: 0, y: 8 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
      />
      <motion.text
        x={40} y={36} dominantBaseline="middle"
        fill="#94a3b8" fontSize={9} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.2 }}
      >Obsazenost · tento měsíc</motion.text>

      {isInView && (
        <AnimatedNumber
          target={87} suffix=" %" isInView={isInView} delay={0.5}
          fontSize={28} fill="#b50000" fontWeight={800} x={88} y={66}
        />
      )}
      <motion.text
        x={40} y={80} dominantBaseline="middle"
        fill="#22c55e" fontSize={9} fontWeight={600} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.9 }}
      >↑ +12 % vs. loňský rok</motion.text>

      {/* Card 2: Tržby */}
      <motion.rect
        x={212} y={18} width={164} height={72} rx={12}
        fill="white" stroke="#e2e8f0" strokeWidth={1.5}
        initial={{ opacity: 0, y: 8 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
      <motion.text
        x={228} y={36} dominantBaseline="middle"
        fill="#94a3b8" fontSize={9} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.3 }}
      >Tržby · tento měsíc</motion.text>

      {isInView && (
        <AnimatedNumber
          target={284} suffix=" tis. Kč" isInView={isInView} delay={0.6}
          fontSize={20} fill="#1e293b" fontWeight={800} x={294} y={62}
        />
      )}
      <motion.text
        x={228} y={80} dominantBaseline="middle"
        fill="#22c55e" fontSize={9} fontWeight={600} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 1.0 }}
      >↑ +18 % vs. loňský rok</motion.text>

      {/* ── Bar chart ── */}
      <motion.text
        x={CHART_X} y={108} dominantBaseline="middle"
        fill="#1e293b" fontSize={11} fontWeight={700} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.3 }}
      >Obsazenost po měsících (%)</motion.text>

      {/* Y-axis grid lines */}
      {[0, 25, 50, 75, 100].map((v) => {
        const y = CHART_Y - (v / 100) * CHART_H;
        return (
          <g key={v}>
            <line x1={CHART_X} y1={y} x2={CHART_X + CHART_W} y2={y}
              stroke="#f1f5f9" strokeWidth={1} />
            <text x={CHART_X - 4} y={y} textAnchor="end" dominantBaseline="middle"
              fill="#cbd5e1" fontSize={8} fontFamily="sans-serif">{v}</text>
          </g>
        );
      })}

      {/* Bars */}
      {MONTHS.map((month, i) => {
        const barH  = (OCC[i] / 100) * CHART_H;
        const bx    = CHART_X + BAR_GAP + i * (BAR_W + BAR_GAP);
        const by    = CHART_Y - barH;
        const isLast = i === MONTHS.length - 1;
        return (
          <motion.g key={month}>
            <motion.rect
              x={bx} y={CHART_Y} width={BAR_W} height={0} rx={4}
              fill={isLast ? '#b50000' : '#cbd5e1'}
              animate={isInView ? { y: by, height: barH } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: 'easeOut' }}
            />
            {/* value label on top */}
            <motion.text
              x={bx + BAR_W / 2} y={by - 6}
              textAnchor="middle" dominantBaseline="middle"
              fill={isLast ? '#b50000' : '#94a3b8'}
              fontSize={8} fontWeight={isLast ? 700 : 400} fontFamily="sans-serif"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
            >{OCC[i]}%</motion.text>
            {/* month label */}
            <text
              x={bx + BAR_W / 2} y={CHART_Y + 14}
              textAnchor="middle" dominantBaseline="middle"
              fill="#94a3b8" fontSize={8} fontFamily="sans-serif"
            >{month}</text>
          </motion.g>
        );
      })}

      {/* Baseline */}
      <line
        x1={CHART_X} y1={CHART_Y} x2={CHART_X + CHART_W} y2={CHART_Y}
        stroke="#e2e8f0" strokeWidth={1.5}
      />

      {/* Trend line over bars */}
      <motion.polyline
        points={MONTHS.map((_, i) => {
          const x = CHART_X + BAR_GAP + i * (BAR_W + BAR_GAP) + BAR_W / 2;
          const y = CHART_Y - (OCC[i] / 100) * CHART_H;
          return `${x},${y}`;
        }).join(' ')}
        stroke="#b50000"
        strokeWidth={2}
        strokeDasharray="4 3"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 0.6 } : {}}
        transition={{ duration: 1, delay: 1.4, ease: 'easeInOut' }}
      />
    </svg>
  );
}
