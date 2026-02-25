'use client';

import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl font-outfit">P</span>
            </div>
            <span className="text-2xl font-bold font-outfit tracking-tight text-slate-900">
              Previo
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 ml-auto mr-8">
            <Link href="#produkty" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Produkty
            </Link>
            <Link href="#reference" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Reference
            </Link>
            <Link href="#cenik" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Ceník
            </Link>
            <Link href="#o-nas" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              O nás
            </Link>
            <Link href="#akademie" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Akademie
            </Link>
            <Link href="#kontakty" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Kontakty
            </Link>
            <Link href="#blog" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Blog
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="#login" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-[3px] hover:bg-slate-50 transition-colors">
              Přihlásit
            </Link>
            <Link
              href="#demo"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-[3px] hover:bg-primary-700 transition-colors"
            >
              Vyzkoušet zdarma
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg lg:hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <Link href="#produkty" className="text-base font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Produkty</Link>
              <Link href="#reference" className="text-base font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Reference</Link>
              <Link href="#cenik" className="text-base font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Ceník</Link>
              <Link href="#o-nas" className="text-base font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>O nás</Link>
              <Link href="#akademie" className="text-base font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Akademie</Link>
              <Link href="#kontakty" className="text-base font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Kontakty</Link>
              <Link href="#blog" className="text-base font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
              <hr className="border-slate-100 my-2" />
              <Link href="#login" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-slate-700 bg-white border border-slate-300 rounded-[3px]">Přihlásit</Link>
              <Link
                href="#demo"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-primary-600 rounded-[3px]"
              >
                Vyzkoušet zdarma
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
