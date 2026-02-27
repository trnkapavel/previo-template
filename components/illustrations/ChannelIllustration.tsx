'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CX = 200;
const CY = 150;

// Portals on an oval (rx=130, ry=95) around center, starting from top, clockwise
const portals = [
  { id: 'booking',  x: 200, y: 55,  color: '#0071c2', textColor: '#fff', label: 'B', name: 'Booking.com',  delay: 0 },
  { id: 'expedia',  x: 313, y: 103, color: '#FFC20E', textColor: '#1a1a1a', label: 'E', name: 'Expedia',   delay: 0.1 },
  { id: 'airbnb',   x: 313, y: 197, color: '#FF5A5F', textColor: '#fff', label: 'A', name: 'Airbnb',       delay: 0.2 },
  { id: 'google',   x: 200, y: 245, color: '#34A853', textColor: '#fff', label: 'G', name: 'Google',       delay: 0.3 },
  { id: 'hotels',   x: 87,  y: 197, color: '#E94235', textColor: '#fff', label: 'H', name: 'Hotels.com',   delay: 0.4 },
  { id: 'direct',   x: 87,  y: 103, color: '#b50000', textColor: '#fff', label: '★', name: 'Přímé rez.',  delay: 0.5 },
];

// traveling dot for each portal -> center
// Uses CSS x/y transform instead of cx/cy attribute animation — GPU composited, no SVG repaints.
function TravelingDot({
  portal,
  isInView,
  loopDelay,
}: {
  portal: typeof portals[0];
  isInView: boolean;
  loopDelay: number;
}) {
  return (
    <motion.g
      initial={{ x: portal.x, y: portal.y, opacity: 0, scale: 0.8 }}
      animate={
        isInView
          ? {
              x: [portal.x, CX],
              y: [portal.y, CY],
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.5],
            }
          : {}
      }
      transition={{
        duration: 1.2,
        delay: loopDelay,
        repeat: Infinity,
        repeatDelay: 2.5,
        ease: 'easeInOut',
      }}
    >
      <circle r={3.5} fill={portal.color} />
    </motion.g>
  );
}

export function ChannelIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 300"
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
            cy={20 + row * 37}
            r={1.2}
            fill="#e2e8f0"
          />
        ))
      )}

      {/* Connection lines (dashed) */}
      {portals.map((portal) => (
        <motion.path
          key={`line-${portal.id}`}
          d={`M ${CX} ${CY} L ${portal.x} ${portal.y}`}
          stroke="#cbd5e1"
          strokeWidth={1.5}
          strokeDasharray="5 4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{
            pathLength: { duration: 0.5, delay: 0.3 + portal.delay, ease: 'easeOut' },
            opacity: { duration: 0.2, delay: 0.3 + portal.delay },
          }}
        />
      ))}

      {/* Hub pulse rings */}
      {[1, 2].map((i) => (
        <motion.circle
          key={`pulse-${i}`}
          cx={CX}
          cy={CY}
          r={30}
          stroke="#b50000"
          strokeWidth={1.5}
          fill="none"
          initial={{ scale: 1, opacity: 0 }}
          animate={
            isInView
              ? {
                  scale: [1, 2.4],
                  opacity: [0.5, 0],
                }
              : {}
          }
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

      {/* Hub center */}
      <motion.circle
        cx={CX}
        cy={CY}
        r={30}
        fill="#b50000"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1, type: 'spring', stiffness: 260, damping: 20 }}
        style={{ transformOrigin: `${CX}px ${CY}px` }}
      />
      <motion.text
        x={CX}
        y={CY + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize={16}
        fontWeight={700}
        fontFamily="sans-serif"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        P
      </motion.text>

      {/* Portal icons */}
      {portals.map((portal) => (
        <motion.g
          key={`portal-${portal.id}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            duration: 0.35,
            delay: 0.6 + portal.delay,
            type: 'spring',
            stiffness: 280,
            damping: 22,
          }}
          style={{ transformOrigin: `${portal.x}px ${portal.y}px` }}
        >
          {/* Shadow */}
          <circle cx={portal.x + 1} cy={portal.y + 2} r={21} fill="rgba(0,0,0,0.08)" />
          {/* Circle */}
          <circle cx={portal.x} cy={portal.y} r={21} fill={portal.color} />
          {/* Border */}
          <circle cx={portal.x} cy={portal.y} r={21} stroke="white" strokeWidth={2} fill="none" />
          {/* Label */}
          <text
            x={portal.x}
            y={portal.y + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={portal.textColor}
            fontSize={portal.label === '★' ? 14 : 13}
            fontWeight={700}
            fontFamily="sans-serif"
          >
            {portal.label}
          </text>
        </motion.g>
      ))}

      {/* Portal name labels */}
      {portals.map((portal) => {
        const isTop = portal.y < CY;
        const isBottom = portal.y > CY;
        const isLeft = portal.x < CX;
        const isRight = portal.x > CX;
        const dy = isTop ? -30 : isBottom ? 30 : 0;
        const dx = isLeft ? -4 : isRight ? 4 : 0;
        const anchor = isLeft ? 'end' : isRight ? 'start' : 'middle';
        return (
          <motion.text
            key={`label-${portal.id}`}
            x={portal.x + dx}
            y={portal.y + dy}
            textAnchor={anchor}
            fill="#64748b"
            fontSize={9}
            fontFamily="sans-serif"
            fontWeight={500}
            letterSpacing={0.3}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 1.0 + portal.delay }}
          >
            {portal.name}
          </motion.text>
        );
      })}

      {/* Traveling dots */}
      {portals.map((portal, i) => (
        <TravelingDot
          key={`dot-${portal.id}`}
          portal={portal}
          isInView={isInView}
          loopDelay={1.8 + i * 0.45}
        />
      ))}

      {/* "300+ kanálů" badge */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        <rect x={152} y={272} width={96} height={22} rx={11} fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1} />
        <text
          x={200}
          y={283}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#475569"
          fontSize={9}
          fontWeight={600}
          fontFamily="sans-serif"
        >
          300+ kanálů
        </text>
      </motion.g>
    </svg>
  );
}
