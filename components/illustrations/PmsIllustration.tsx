'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ROOMS = ['101', '102', '103', '104', '105'];
const DAYS = ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'];

const CW = 46;
const CH = 26;
const LM = 52;
const TM = 62;
const RH = 32;

// [roomIdx, dayStart, daySpan, color, label, isNew]
const reservations: [number, number, number, string, string, boolean][] = [
  [0, 0, 3, '#3b82f6', 'Novák',   false],
  [0, 4, 2, '#22c55e', 'Smith',   false],
  [1, 1, 4, '#f97316', 'Kovář',   false],
  [2, 0, 2, '#8b5cf6', 'Brown',   false],
  [2, 3, 3, '#b50000', 'Novotný', true],
  [3, 2, 2, '#22c55e', 'Lee',     false],
  [4, 1, 3, '#3b82f6', 'García',  false],
];

export function PmsIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Grid background */}
      {ROOMS.map((_, ri) =>
        DAYS.map((_, di) => (
          <rect
            key={`cell-${ri}-${di}`}
            x={LM + di * CW + 1}
            y={TM + ri * RH + 1}
            width={CW - 2}
            height={CH}
            rx={3}
            fill={ri % 2 === 0 ? '#f8fafc' : '#f1f5f9'}
          />
        ))
      )}

      {/* Vertical grid lines */}
      {DAYS.map((_, di) => (
        <line
          key={`vline-${di}`}
          x1={LM + di * CW} y1={TM - 4}
          x2={LM + di * CW} y2={TM + ROOMS.length * RH}
          stroke="#e2e8f0" strokeWidth={1}
        />
      ))}
      <line
        x1={LM + DAYS.length * CW} y1={TM - 4}
        x2={LM + DAYS.length * CW} y2={TM + ROOMS.length * RH}
        stroke="#e2e8f0" strokeWidth={1}
      />

      {/* Day headers */}
      {DAYS.map((day, di) => (
        <motion.text
          key={`day-${di}`}
          x={LM + di * CW + CW / 2} y={TM - 12}
          textAnchor="middle" dominantBaseline="middle"
          fill="#94a3b8" fontSize={10} fontWeight={600} fontFamily="sans-serif"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: 0.1 + di * 0.05 }}
        >{day}</motion.text>
      ))}

      {/* Room labels */}
      {ROOMS.map((room, ri) => (
        <motion.g
          key={`room-${ri}`}
          initial={{ opacity: 0, x: -8 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.2 + ri * 0.07 }}
        >
          <rect x={4} y={TM + ri * RH + 1} width={44} height={CH} rx={4} fill="#f1f5f9" />
          <text
            x={26} y={TM + ri * RH + CH / 2 + 1}
            textAnchor="middle" dominantBaseline="middle"
            fill="#475569" fontSize={10} fontWeight={700} fontFamily="sans-serif"
          >{room}</text>
        </motion.g>
      ))}

      {/* Reservation blocks */}
      {reservations.map(([ri, ds, span, color, label, isNew], i) => {
        const x = LM + ds * CW + 2;
        const y = TM + ri * RH + 3;
        const w = span * CW - 4;
        const h = CH - 6;
        return (
          <motion.g
            key={`res-${i}`}
            initial={isNew ? { opacity: 0, scaleX: 0 } : { opacity: 0, x: -6 }}
            animate={isInView ? { opacity: 1, scaleX: 1, x: 0 } : {}}
            style={isNew ? { transformOrigin: `${x}px ${y + h / 2}px` } : undefined}
            transition={isNew
              ? { duration: 0.5, delay: 1.2, type: 'spring', stiffness: 200 }
              : { duration: 0.35, delay: 0.4 + i * 0.08 }
            }
          >
            <rect x={x} y={y} width={w} height={h} rx={3} fill={color} opacity={0.85} />
            {w > 30 && (
              <text
                x={x + w / 2} y={y + h / 2 + 0.5}
                textAnchor="middle" dominantBaseline="middle"
                fill="white" fontSize={8} fontWeight={600} fontFamily="sans-serif"
              >{label}</text>
            )}
          </motion.g>
        );
      })}

      {/* "+ Nová rezervace" badge */}
      <motion.g
        initial={{ opacity: 0, y: 6 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 1.6 }}
      >
        <rect x={270} y={214} width={120} height={24} rx={12} fill="#b50000" />
        <text
          x={330} y={226}
          textAnchor="middle" dominantBaseline="middle"
          fill="white" fontSize={9} fontWeight={600} fontFamily="sans-serif"
        >+ Nová rezervace</text>
      </motion.g>

      {/* Title */}
      <motion.text
        x={LM} y={22}
        fill="#1e293b" fontSize={11} fontWeight={700} fontFamily="sans-serif"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.1 }}
      >Plachta pokojů — tento týden</motion.text>
    </svg>
  );
}
