export function LogoCloud() {
  return (
    <section className="py-10 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-wider">
          Důvěřuje nám více než 3 500 ubytovacích zařízení
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Abstract logos representing hotel chains/clients */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-300"></div>
              <div className="h-5 w-24 bg-slate-300 rounded-sm"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
