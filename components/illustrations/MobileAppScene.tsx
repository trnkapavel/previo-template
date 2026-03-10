'use client';

import { CheckSquare } from 'lucide-react';

/** Abstraktní UI mini-scéna: silueta mobilu s notifikacemi nebo checklistem (Housekeeping / mobilní app). */
export function MobileAppScene() {
  return (
    <div className="w-full h-full min-h-[200px] flex items-center justify-center p-4" aria-hidden>
      {/* Silueta telefonu – obdélník na výšku, zaoblené rohy */}
      <div className="h-full max-h-[280px] aspect-[9/19] rounded-[2rem] border-2 border-slate-200 bg-white shadow-lg flex flex-col overflow-hidden">
        {/* Notch / horní pruh */}
        <div className="h-6 bg-slate-100 flex-shrink-0" />

        {/* Obsah: notifikační proužky + checklist */}
        <div className="flex-1 p-2 flex flex-col gap-2 overflow-hidden">
          <div className="rounded-lg bg-slate-100 h-8 w-full" />
          <div className="rounded-lg bg-slate-50 border border-slate-200 p-2 space-y-1.5">
            {['Pokoj 101', 'Pokoj 102', 'Pokoj 103'].map((room, i) => (
              <div key={room} className="flex items-center gap-2">
                <CheckSquare
                  className={`w-4 h-4 shrink-0 ${i === 0 ? 'text-primary-600' : 'text-slate-300'}`}
                  strokeWidth={2}
                />
                <span className="text-[10px] text-slate-600 truncate">{room}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
