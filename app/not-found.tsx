import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 px-4">
      <h2 className="text-4xl font-bold font-outfit mb-4">Stránka nenalezena</h2>
      <p className="text-lg text-slate-600 mb-8 text-center max-w-md">
        Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla přesunuta.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
      >
        Zpět na hlavní stránku
      </Link>
    </div>
  );
}
