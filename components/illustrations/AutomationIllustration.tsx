'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CX = 200;
const CY = 148;

const devices = [
  { id: 'lock',    x: 200, y: 50,  color: '#3b82f6', label: '🔒', name: 'Chytré kliky',  delay: 0 },
  { id: 'thermo',  x: 316, y: 98,  color: '#f97316', label: '🌡', name: 'Vytápění',       delay: 0.1 },
  { id: 'keyguru', x: 316, y: 198, color: '#22c55e', label: '📦', name: 'Keyguru box',    delay: 0.2 },
  { id: 'alfred',  x: 200, y: 246, color: '#8b5cf6', label: '📱', name: 'Alfred app',     delay: 0.3 },
  { id: 'kiosk',   x: 84,  y: 198, color: '#0ea5e9', label: '🖥', name: 'Kiosek',         delay: 0.4 },
  { id: 'light',   x: 84,  y: 98,  color: '#ec4899', label: '💡', name: 'Osvětlení',      delay: 0.5 },
];

function TravelingDot({
  device,
  isInView,
  loopDelay,
}: {
  device: typeof devices[0];
  isInView: boolean;
  loopDelay: number;
}) {
  return (
    <motion.g
      initial={{ x: device.x, y: device.y, opacity: 0, scale: 0.8 }}
      animate={
        isInView
          ? {
              x: [device.x, CX],
              y: [device.y, CY],
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.5],
            }
          : {}
      }
      transition={{
        duration: 1.0,
        delay: loopDelay,
        repeat: Infinity,
        repeatDelay: 3.0,
        ease: 'easeInOut',
      }}
    >
      <circle r={3} fill={device.color} />
    </motion.g>
  );
}

export function AutomationIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 296"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Background grid dots */}
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 11 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={20 + col * 36}
            cy={20 + row * 36}
            r={1.2}
            fill="#e2e8f0"
          />
        ))
      )}

      {/* Connection lines */}
      {devices.map((d) => (
        <motion.path
          key={`line-${d.id}`}
          d={`M ${CX} ${CY} L ${d.x} ${d.y}`}
          stroke="#cbd5e1"
          strokeWidth={1.5}
          strokeDasharray="5 4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{
            pathLength: { duration: 0.5, delay: 0.3 + d.delay, ease: 'easeOut' },
            opacity: { duration: 0.2, delay: 0.3 + d.delay },
          }}
        />
      ))}

      {/* Hub pulse rings */}
      {[1, 2].map((i) => (
        <motion.circle
          key={`pulse-${i}`}
          cx={CX}
          cy={CY}
          r={32}
          stroke="#b50000"
          strokeWidth={1.5}
          fill="none"
          initial={{ scale: 1, opacity: 0 }}
          animate={isInView ? { scale: [1, 2.2], opacity: [0.5, 0] } : {}}
          transition={{
            duration: 2,
            delay: 1.5 + i * 0.8,
            repeat: Infinity,
            repeatDelay: 0.4,
            ease: 'easeOut',
          }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        />
      ))}

      {/* Hub */}
      <motion.circle
        cx={CX}
        cy={CY}
        r={32}
        fill="#b50000"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1, type: 'spring', stiffness: 260, damping: 20 }}
        style={{ transformOrigin: `${CX}px ${CY}px` }}
      />
      <motion.text
        x={CX}
        y={CY - 6}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize={10}
        fontWeight={700}
        fontFamily="sans-serif"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        Previo
      </motion.text>
      <motion.text
        x={CX}
        y={CY + 8}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="rgba(255,255,255,0.7)"
        fontSize={7.5}
        fontFamily="sans-serif"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.45 }}
      >
        automatizace
      </motion.text>

      {/* Device icons */}
      {devices.map((d) => (
        <motion.g
          key={`dev-${d.id}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            duration: 0.35,
            delay: 0.6 + d.delay,
            type: 'spring',
            stiffness: 280,
            damping: 22,
          }}
          style={{ transformOrigin: `${d.x}px ${d.y}px` }}
        >
          <circle cx={d.x + 1} cy={d.y + 2} r={21} fill="rgba(0,0,0,0.08)" />
          <circle cx={d.x} cy={d.y} r={21} fill="white" stroke={d.color} strokeWidth={2} />
          <text
            x={d.x}
            y={d.y + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={16}
          >
            {d.label}
          </text>
        </motion.g>
      ))}

      {/* Device labels */}
      {devices.map((d) => {
        const isTop = d.y < CY;
        const isBottom = d.y > CY;
        const isLeft = d.x < CX;
        const isRight = d.x > CX;
        const dy = isTop ? -30 : isBottom ? 30 : 0;
        const dx = isLeft ? -4 : isRight ? 4 : 0;
        const anchor = isLeft ? 'end' : isRight ? 'start' : 'middle';
        return (
          <motion.text
            key={`lbl-${d.id}`}
            x={d.x + dx}
            y={d.y + dy}
            textAnchor={anchor}
            fill="#64748b"
            fontSize={9}
            fontFamily="sans-serif"
            fontWeight={500}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 1.0 + d.delay }}
          >
            {d.name}
          </motion.text>
        );
      })}

      {/* Traveling dots */}
      {devices.map((d, i) => (
        <TravelingDot
          key={`dot-${d.id}`}
          device={d}
          isInView={isInView}
          loopDelay={1.8 + i * 0.5}
        />
      ))}

      {/* Badge */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        <rect x={140} y={274} width={120} height={22} rx={11} fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1} />
        <text
          x={200}
          y={285}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#475569"
          fontSize={9}
          fontWeight={600}
          fontFamily="sans-serif"
        >
          Bezobslužná recepce
        </text>
      </motion.g>
    </svg>
  );
}
