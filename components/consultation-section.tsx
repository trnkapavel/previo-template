'use client';

import { useState } from 'react';
import { submitConsultation } from '@/app/actions/consultation';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const REGIONS = [
  { value: '', label: 'Vyberte kraj' },
  { value: 'praha', label: 'Praha' },
  { value: 'stredocesky', label: 'Středočeský kraj' },
  { value: 'jihocesky', label: 'Jihočeský kraj' },
  { value: 'plzensky', label: 'Plzeňský kraj' },
  { value: 'karlovarsky', label: 'Karlovarský kraj' },
  { value: 'ustecky', label: 'Ústecký kraj' },
  { value: 'liberecky', label: 'Liberecký kraj' },
  { value: 'kralovehradecky', label: 'Královéhradecký kraj' },
  { value: 'pardubicky', label: 'Pardubický kraj' },
  { value: 'vysocina', label: 'Vysočina' },
  { value: 'jihomoravsky', label: 'Jihomoravský kraj' },
  { value: 'olomoucky', label: 'Olomoucký kraj' },
  { value: 'moravskoslezsky', label: 'Moravskoslezský kraj' },
  { value: 'zlinsky', label: 'Zlínský kraj' },
] as const;

export function ConsultationSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(formData: FormData) {
    setStatus('loading');
    setErrorMessage('');

    const result = await submitConsultation({
      name: (formData.get('name') as string)?.trim() ?? '',
      phone: (formData.get('phone') as string)?.trim() ?? '',
      email: (formData.get('email') as string)?.trim() ?? '',
      propertyName: (formData.get('propertyName') as string)?.trim() ?? '',
      language: (formData.get('language') as string) ?? 'cs',
      region: (formData.get('region') as string) ?? '',
      consent: formData.get('consent') === 'on',
    });

    if (result.ok) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(result.error);
    }
  }

  return (
    <section
      id="konzultace"
      aria-labelledby="consultation-heading"
      className="relative py-16 md:py-20 bg-slate-900 text-white overflow-hidden"
    >
      {/* Dekorativní pozadí */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[min(100%,480px)] h-72 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-700/30 rounded-full blur-3xl" />
        <svg className="absolute top-8 right-8 w-24 h-24 text-slate-700/50" viewBox="0 0 100 100" fill="none" aria-hidden>
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
        <svg className="absolute bottom-12 left-12 w-16 h-16 text-slate-700/40" viewBox="0 0 64 64" fill="none" aria-hidden>
          <path d="M32 8 L56 32 L32 56 L8 32 Z" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 id="consultation-heading" className="text-2xl md:text-3xl font-outfit font-bold mb-3">
            Získejte bezplatnou konzultaci
          </h2>
          <p className="text-sm md:text-base text-slate-200 max-w-xl mx-auto">
            Vyplňte své kontaktní údaje a my se vám co nejdříve ozveme. Dohodneme termín konzultace a probereme, jak Previo pomůže právě vašemu ubytování.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-slate-950/40 border border-emerald-800/50 rounded-2xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-outfit font-bold text-white mb-2">Děkujeme za zprávu</h3>
            <p className="text-slate-300 text-sm md:text-base max-w-md mx-auto">
              Vaše žádost o konzultaci byla odeslána. Ozveme se vám co nejdříve na zadaný e-mail nebo telefon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await handleSubmit(new FormData(e.currentTarget));
            }}
            className="bg-slate-950/40 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6"
          >
            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="consult-name" className="block text-xs font-medium text-slate-300 mb-1">
                  Jméno <span className="text-red-400">*</span>
                </label>
                <input
                  id="consult-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jan Novák"
                  disabled={status === 'loading'}
                  className="w-full rounded-[4px] border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:opacity-60"
                />
              </div>
              <div>
                <label htmlFor="consult-phone" className="block text-xs font-medium text-slate-300 mb-1">
                  Telefon <span className="text-red-400">*</span>
                </label>
                <input
                  id="consult-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+420 123 456 789"
                  disabled={status === 'loading'}
                  className="w-full rounded-[4px] border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:opacity-60"
                />
              </div>
              <div>
                <label htmlFor="consult-email" className="block text-xs font-medium text-slate-300 mb-1">
                  E‑mail <span className="text-red-400">*</span>
                </label>
                <input
                  id="consult-email"
                  name="email"
                  type="email"
                  required
                  placeholder="jan@hotel.cz"
                  disabled={status === 'loading'}
                  className="w-full rounded-[4px] border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:opacity-60"
                />
              </div>
              <div>
                <label htmlFor="consult-property" className="block text-xs font-medium text-slate-300 mb-1">
                  Název ubytovacího zařízení <span className="text-red-400">*</span>
                </label>
                <input
                  id="consult-property"
                  name="propertyName"
                  type="text"
                  required
                  placeholder="Penzion U Lesa"
                  disabled={status === 'loading'}
                  className="w-full rounded-[4px] border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:opacity-60"
                />
              </div>
              <div>
                <label htmlFor="consult-language" className="block text-xs font-medium text-slate-300 mb-1">
                  Jazyk <span className="text-red-400">*</span>
                </label>
                <select
                  id="consult-language"
                  name="language"
                  required
                  disabled={status === 'loading'}
                  className="w-full rounded-[4px] border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:opacity-60"
                  defaultValue="cs"
                >
                  <option value="cs">Čeština</option>
                  <option value="en">English</option>
                  <option value="pl">Polski</option>
                  <option value="hu">Magyar</option>
                  <option value="ro">Română</option>
                </select>
              </div>
              <div>
                <label htmlFor="consult-region" className="block text-xs font-medium text-slate-300 mb-1">
                  Region <span className="text-red-400">*</span>
                </label>
                <select
                  id="consult-region"
                  name="region"
                  required
                  disabled={status === 'loading'}
                  className="w-full rounded-[4px] border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:opacity-60"
                  defaultValue=""
                >
                  {REGIONS.map((r) => (
                    <option key={r.value || 'empty'} value={r.value} disabled={r.value === ''}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <label className="flex items-start gap-2 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                required
                disabled={status === 'loading'}
                className="mt-0.5 h-3.5 w-3.5 rounded border-slate-600 bg-slate-900/60 text-primary-500 focus:ring-primary-500 disabled:opacity-60"
              />
              <span>
                Odesláním formuláře souhlasíte se{' '}
                <a href="#" className="text-primary-400 hover:text-primary-300 underline">zpracováním osobních údajů</a>.
              </span>
            </label>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-[3px] bg-primary-500 text-white text-base font-medium hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Odesílám…
                  </>
                ) : (
                  'Odeslat žádost'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
