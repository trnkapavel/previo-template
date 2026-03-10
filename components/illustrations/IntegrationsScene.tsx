'use client';

import { Database, Globe, CreditCard, Calendar } from 'lucide-react';

/** Abstraktní UI mini-scéna: centrální uzel a propojení na další systémy. */
export function IntegrationsScene() {
  const nodes: { Icon: typeof Globe; label: string; top: string; left: string }[] = [
    { Icon: Globe, label: 'Portály', top: '15%', left: '50%' },
    { Icon: CreditCard, label: 'Platby', top: '55%', left: '15%' },
    { Icon: Calendar, label: 'Rezervace', top: '55%', left: '85%' },
  ];

  return (
    <div
      className="w-full h-full min-h-[200px] flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 relative overflow-hidden"
      aria-hidden
    >
      {/* Spojnice – čáry od středu k uzlům */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
        <line x1="50%" y1="50%" x2="50%" y2="22%" stroke="rgb(203 213 225)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="50%" y1="50%" x2="22%" y2="62%" stroke="rgb(203 213 225)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="50%" y1="50%" x2="78%" y2="62%" stroke="rgb(203 213 225)" strokeWidth="1.5" strokeDasharray="4 3" />
      </svg>

      {/* Centrální bod */}
      <div className="absolute left-1/2 top-1/2 w-14 h-14 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-primary-600 shadow-md flex items-center justify-center z-10">
        <Database className="w-7 h-7 text-white" strokeWidth={2} />
      </div>

      {/* Vnější uzly */}
      {nodes.map(({ Icon, label, top, left }) => (
        <div
          key={label}
          className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-xl border-2 border-slate-200 bg-white shadow-sm flex items-center justify-center z-10"
          style={{ top, left }}
        >
          <Icon className="w-4 h-4 text-primary-600" strokeWidth={2} />
        </div>
      ))}
    </div>
  );
}
