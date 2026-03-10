'use client';

import { ImageIcon } from 'lucide-react';

interface IllustrationPlaceholderProps {
  /** Krátký popis místa pro budoucí ilustraci (zobrazí se pod ikonou) */
  label?: string;
  /** Volitelná dodatečná třída pro obal */
  className?: string;
}

/**
 * Placeholder pro chybějící SVG ilustrace. Jednotný vzhled napříč stránkami.
 */
export function IllustrationPlaceholder({ label, className = '' }: IllustrationPlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 p-6 text-slate-400 ${className}`}
      aria-hidden="true"
    >
      <div className="rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/80 p-6 flex items-center justify-center">
        <ImageIcon className="w-12 h-12 text-slate-300" strokeWidth={1.5} />
      </div>
      {label ? (
        <span className="text-xs sm:text-sm text-slate-400 text-center font-medium max-w-[200px] leading-snug">
          {label}
        </span>
      ) : null}
    </div>
  );
}
