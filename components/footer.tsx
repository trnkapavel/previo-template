import Link from 'next/link';
import { PrevioLogo } from './previo-logo';

export function Footer() {
  return (
    <footer data-export-section="footer" className="bg-slate-100 text-slate-600 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <PrevioLogo className="h-10 w-auto" />
            </Link>
            <p className="text-slate-500 max-w-sm mb-6">
              Inovativní cloudový systém pro řízení hotelů, penzionů a apartmánů. Zjednodušujeme život hoteliérům od roku 2006.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Produkty</h4>
            <ul className="space-y-3">
              <li><Link href="/pms" className="hover:text-primary-600 transition-colors">Recepce (PMS)</Link></li>
              <li><Link href="/booking-engine" className="hover:text-primary-600 transition-colors">Booking Engine</Link></li>
              <li><Link href="/channel-manager" className="hover:text-primary-600 transition-colors">Channel Manager</Link></li>
              <li><Link href="/platebni-brana-a-terminal" className="hover:text-primary-600 transition-colors">Previo Pay</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4">Společnost</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-primary-600 transition-colors">O nás</Link></li>
              <li><Link href="/" className="hover:text-primary-600 transition-colors">Kariéra</Link></li>
              <li><Link href="/#konzultace" className="hover:text-primary-600 transition-colors">Kontakt / Konzultace</Link></li>
              <li><Link href="/" className="hover:text-primary-600 transition-colors">Partneři</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4">Zdroje</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-primary-600 transition-colors">Blog</Link></li>
              <li><Link href="/" className="hover:text-primary-600 transition-colors">Nápověda</Link></li>
              <li><Link href="/" className="hover:text-primary-600 transition-colors">Webináře</Link></li>
              <li><Link href="/integrace" className="hover:text-primary-600 transition-colors">Integrace & API</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Previo. Všechna práva vyhrazena.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-primary-600 transition-colors">Ochrana osobních údajů</Link>
            <Link href="#" className="hover:text-primary-600 transition-colors">Obchodní podmínky</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
