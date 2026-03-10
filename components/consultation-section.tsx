export function ConsultationSection() {
  return (
    <section className="py-16 md:py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold mb-3">
            Získat bezplatnou konzultaci
          </h2>
          <p className="text-sm md:text-base text-slate-200">
            Vyplňte, prosím, své kontaktní údaje. My se vám co nejdříve ozveme a dohodneme s vámi termín konzultace.
          </p>
        </div>

        <form className="bg-slate-950/40 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Jméno <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full rounded-[4px] border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Telefon <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                required
                className="w-full rounded-[4px] border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                E‑mail <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full rounded-[4px] border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Název ubytovacího zařízení <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full rounded-[4px] border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Jazyk <span className="text-red-400">*</span>
              </label>
              <select
                required
                className="w-full rounded-[4px] border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Region <span className="text-red-400">*</span>
              </label>
              <select
                required
                className="w-full rounded-[4px] border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Vyberte kraj
                </option>
                <option value="praha">Praha</option>
                <option value="stredocesky">Středočeský kraj</option>
                <option value="jihocesky">Jihočeský kraj</option>
                <option value="plzensky">Plzeňský kraj</option>
                <option value="karlovarsky">Karlovarský kraj</option>
                <option value="ustecky">Ústecký kraj</option>
                <option value="liberecky">Liberecký kraj</option>
                <option value="kralovehradecky">Královéhradecký kraj</option>
                <option value="pardubicky">Pardubický kraj</option>
                <option value="vysocina">Vysočina</option>
                <option value="jihomoravsky">Jihomoravský kraj</option>
                <option value="olomoucky">Olomoucký kraj</option>
                <option value="moravskoslezsky">Moravskoslezský kraj</option>
                <option value="zlinsky">Zlínský kraj</option>
              </select>
            </div>
          </div>

          <label className="flex items-start gap-2 text-xs text-slate-300">
            <input
              type="checkbox"
              required
              className="mt-0.5 h-3.5 w-3.5 rounded border-slate-600 bg-slate-900/60 text-primary-500 focus:ring-primary-500"
            />
            <span>
              Odesláním formuláře souhlasíte se zpracováním osobních údajů.
            </span>
          </label>

          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex px-8 py-3 rounded-[3px] bg-primary-500 text-white text-base font-medium hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/20 transition-all"
            >
              Odeslat
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

