'use client';

import { CheckCircle } from 'lucide-react';

/** Abstraktní UI mini-scéna: výpis faktur/plateb a jedna „otevřená“ platba s potvrzením. */
export function FinanceScene() {
  const lines = [1, 2, 3, 4];

  return (
    <div
      className="w-full h-full min-h-[200px] flex rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden"
      aria-hidden
    >
      {/* Levý panel – seznam (řádky jako šedé pruhy) */}
      <div className="w-1/2 flex flex-col border-r border-slate-200 p-2">
        <div className="h-4 rounded bg-slate-200 w-3/4 mb-2" />
        {lines.map((i) => (
          <div key={i} className="flex items-center gap-2 py-1.5 border-b border-slate-100 last:border-0">
            <div className="h-2 flex-1 rounded bg-slate-100 max-w-[90%]" />
            <div className="h-2 w-8 rounded bg-slate-200" />
          </div>
        ))}
      </div>

      {/* Pravý panel – detail platby s CheckCircle */}
      <div className="w-1/2 flex flex-col p-3 bg-slate-50">
        <div className="h-2 rounded bg-slate-200 w-4/5 mb-2" />
        <div className="h-2 rounded bg-slate-100 w-3/5 mb-4" />
        <div className="mt-auto flex items-center gap-2 rounded-xl border border-primary-200 bg-primary-50 px-2 py-2">
          <CheckCircle className="w-5 h-5 shrink-0 text-primary-600" />
          <span className="text-xs font-semibold text-primary-700">Platba přijata</span>
        </div>
      </div>
    </div>
  );
}
