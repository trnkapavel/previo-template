'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Room grid: 2 rows × 4 rooms
const ROOMS_GRID = [
  { id: '101', row: 0, col: 0 },
  { id: '102', row: 0, col: 1 },
  { id: '103', row: 0, col: 2 },
  { id: '104', row: 0, col: 3 },
  { id: '201', row: 1, col: 0 },
  { id: '202', row: 1, col: 1 },
  { id: '203', row: 1, col: 2 },
  { id: '204', row: 1, col: 3 },
];

// Cleaning sequence (room indices, 0-based)
const CLEAN_ORDER = [0, 1, 4, 5, 2, 3, 6, 7];

const RW = 72, RH = 58, RGX = 10, RGY = 10;
const COLS = 4;
const GRID_START_X = 24;
const GRID_START_Y = 44;

function roomX(col: number) { return GRID_START_X + col * (RW + RGX); }
function roomY(row: number) { return GRID_START_Y + row * (RH + RGY); }
function roomCX(col: number) { return roomX(col) + RW / 2; }
function roomCY(row: number) { return roomY(row) + RH / 2; }

type RoomStatus = 'dirty' | 'cleaning' | 'clean';

const STATUS_COLOR: Record<RoomStatus, string> = {
  dirty:   '#fee2e2',
  cleaning:'#fef9c3',
  clean:   '#dcfce7',
};
const STATUS_BORDER: Record<RoomStatus, string> = {
  dirty:   '#fca5a5',
  cleaning:'#fde047',
  clean:   '#86efac',
};
const STATUS_ICON: Record<RoomStatus, string> = {
  dirty:   '🛏',
  cleaning:'🧹',
  clean:   '✓',
};

export function HousekeepingIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [statuses, setStatuses] = useState<RoomStatus[]>(Array(8).fill('dirty'));
  const [cleanCount, setCleanCount] = useState(0);
  const [cartRoom, setCartRoom] = useState<number | null>(null);

  useEffect(() => {
    if (!isInView) return;
    let step = 0;
    const loop = () => {
      if (step >= CLEAN_ORDER.length) return;
      const roomIdx = CLEAN_ORDER[step];
      // Mark as cleaning
      setCartRoom(roomIdx);
      setStatuses((prev) => {
        const next = [...prev];
        next[roomIdx] = 'cleaning';
        return next;
      });
      setTimeout(() => {
        // Mark as clean
        setStatuses((prev) => {
          const next = [...prev];
          next[roomIdx] = 'clean';
          return next;
        });
        setCleanCount((c) => c + 1);
        setCartRoom(null);
        step++;
        setTimeout(loop, 400);
      }, 900);
    };
    const t = setTimeout(loop, 800);
    return () => clearTimeout(t);
  }, [isInView]);

  const cartRoomData = cartRoom !== null ? ROOMS_GRID[cartRoom] : null;

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Title */}
      <motion.text
        x={200} y={22}
        textAnchor="middle" dominantBaseline="middle"
        fill="#1e293b" fontSize={11} fontWeight={700} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        Přehled pokojů — 2. patro
      </motion.text>

      {/* Room grid */}
      {ROOMS_GRID.map((room, i) => {
        const x  = roomX(room.col);
        const y  = roomY(room.row);
        const st = statuses[i];
        return (
          <motion.g
            key={room.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.35, delay: 0.2 + i * 0.07, type: 'spring', stiffness: 220 }}
            style={{ transformOrigin: `${x + RW / 2}px ${y + RH / 2}px` }}
          >
            {/* Room card */}
            <rect
              x={x} y={y} width={RW} height={RH} rx={8}
              fill={STATUS_COLOR[st]}
              stroke={STATUS_BORDER[st]}
              strokeWidth={1.5}
              style={{ transition: 'fill 0.4s ease, stroke 0.4s ease' }}
            />
            {/* Room number */}
            <text
              x={x + 8} y={y + 14}
              dominantBaseline="middle"
              fill="#475569" fontSize={9} fontWeight={700} fontFamily="sans-serif"
            >{room.id}</text>
            {/* Status icon */}
            <text
              x={x + RW / 2} y={y + RH / 2 + 4}
              textAnchor="middle" dominantBaseline="middle"
              fontSize={20}
              style={{ transition: 'all 0.4s ease' }}
            >{STATUS_ICON[st]}</text>
            {/* Clean checkmark ring */}
            {st === 'clean' && (
              <motion.circle
                cx={x + RW - 12} cy={y + 12} r={8}
                fill="#22c55e"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0 }}
                style={{ transformOrigin: `${x + RW - 12}px ${y + 12}px` }}
              />
            )}
            {st === 'clean' && (
              <text
                x={x + RW - 12} y={y + 13}
                textAnchor="middle" dominantBaseline="middle"
                fill="white" fontSize={9} fontWeight={700} fontFamily="sans-serif"
              >✓</text>
            )}
          </motion.g>
        );
      })}

      {/* Cleaning cart (moves to current room) */}
      {cartRoomData && (
        <motion.g
          animate={{
            x: roomCX(cartRoomData.col) + 18,
            y: roomCY(cartRoomData.row) - 10,
          }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          <circle r={14} fill="#b50000" />
          <text
            textAnchor="middle" dominantBaseline="middle"
            fontSize={14}
          >🧹</text>
        </motion.g>
      )}

      {/* Progress bar */}
      <motion.rect
        x={24} y={214} width={352} height={8} rx={4}
        fill="#f1f5f9"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.5 }}
      />
      <motion.rect
        x={24} y={214} width={352 * (cleanCount / 8)} height={8} rx={4}
        fill="#22c55e"
        style={{ transition: 'width 0.4s ease' }}
      />

      {/* Progress text */}
      <motion.text
        x={24} y={236}
        dominantBaseline="middle"
        fill="#475569" fontSize={9} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        {`Uklizeno ${cleanCount} / 8 pokojů`}
      </motion.text>
      <motion.text
        x={376} y={236}
        textAnchor="end" dominantBaseline="middle"
        fill="#22c55e" fontSize={9} fontWeight={600} fontFamily="sans-serif"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        {`${Math.round((cleanCount / 8) * 100)} %`}
      </motion.text>
    </svg>
  );
}
