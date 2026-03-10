'use client';

import { TrendingUp } from 'lucide-react';

/** Abstraktní UI mini-scéna: dashboard s grafem a číselnými kartami. */
export function ReportingScene() {
  const bars = [40, 65, 50, 80, 72, 90];
  const max = Math.max(...bars);

  return (
    <div
      className="w-full h-full min-h-[200px] flex flex-col rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden p-4"
      aria-hidden
    >
      {/* Hlavička */}
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
        <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Přehled tržeb</span>
        <span className="text-[10px] text-slate-500">Měsíc</span>
      </div>

      {/* Sloupcový graf */}
      <div className="flex items-end gap-1 flex-1 min-h-0 py-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-primary-100 min-h-[4px]"
            style={{ height: `${(h / max) * 100}%` }}
          />
        ))}
      </div>

      {/* Číselné karty s TrendingUp */}
      <div className="grid grid-cols-2 gap-2 mt-2">
        {[
          { value: '94%', label: 'Obsazenost' },
          { value: '+12%', label: 'Oproti minulému' },
        ].map(({ value, label }) => (
          <div
            key={label}
            className="rounded-xl border border-slate-200 bg-slate-50 px-2 py-1.5 flex items-center justify-between"
          >
            <span className="text-[10px] text-slate-600">{label}</span>
            <span className="flex items-center gap-0.5 text-primary-600 font-semibold text-xs">
              <TrendingUp className="w-3 h-3" />
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
