'use client';

import Link from 'next/link';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { PrevioLogo } from './previo-logo';
import { PmsIllustration } from './illustrations/PmsIllustration';
import { AlfredIllustration } from './illustrations/AlfredIllustration';
import { BlogIllustration } from './illustrations/BlogIllustration';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FeaturedCard = {
  title: string;
  description: string;
  href: string;
  gradientClass: string;
  watermark: string;
  illustration?: React.ReactNode;
};

type LinkItem = { label: string; href: string };
type LinkGroup = { heading: string; links: LinkItem[] };

type MegaMenuContent = {
  type: 'mega';
  featuredCards: FeaturedCard[];
  groups: LinkGroup[];
};

type SimpleDropdownContent = {
  type: 'simple';
  links: LinkItem[];
};

type NavItem = {
  label: string;
  href?: string;
  dropdown?: MegaMenuContent | SimpleDropdownContent;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Produkty',
    dropdown: {
      type: 'mega',
      featuredCards: [
        {
          title: 'Recepční systém',
          description: 'Kompletní správa hotelu na jednom místě',
          href: '/pms',
          gradientClass: 'from-primary-600 to-primary-800',
          watermark: 'PMS',
          illustration: <PmsIllustration />,
        },
        {
          title: 'Virtuální recepční Alfred',
          description: 'Chytrý asistent pro vaše hosty v mobilu i kiosku',
          href: '/alfred',
          gradientClass: 'from-emerald-500 to-emerald-700',
          watermark: 'ALF',
          illustration: <AlfredIllustration />,
        },
      ],
      groups: [
        {
          heading: 'Hlavní produkty',
          links: [
            { label: 'Recepční systém (Hotelový software)', href: '/pms' },
            { label: 'Rezervační systém', href: '/booking-engine' },
            { label: 'Channel manager', href: '/channel-manager' },
          ],
        },
        {
          heading: 'Další řešení',
          links: [
            { label: 'Integrace', href: '/integrace' },
            { label: 'Platební brána a terminál', href: '/platebni-brana-a-terminal' },
            { label: 'Webové stránky', href: '/webove-stranky' },
            { label: 'Virtuální recepční Alfred', href: '/alfred' },
            { label: 'Mobilní aplikace Housekeeping', href: '/housekeeping' },
            { label: 'ScanID aplikace', href: '/scanid-aplikace' },
            { label: 'Hotelová automatizace', href: '/hotelova-automatizace' },
          ],
        },
      ],
    },
  },
  { label: 'Reference', href: '#reference' },
  { label: 'Ceník', href: '#cenik' },
  {
    label: 'O nás',
    dropdown: {
      type: 'simple',
      links: [
        { label: 'Firemní údaje', href: '/o-nas' },
        { label: 'Ke stažení', href: '/ke-stazeni' },
        { label: 'Kariéra', href: '/kariera' },
      ],
    },
  },
  {
    label: 'Akademie',
    dropdown: {
      type: 'mega',
      featuredCards: [
        {
          title: 'Blog',
          description: 'Tipy a trendy z hotelového světa',
          href: '/blog',
          gradientClass: 'from-amber-400 to-amber-600',
          watermark: 'BLOG',
          illustration: <BlogIllustration />,
        },
      ],
      groups: [
        {
          heading: 'Vzdělávání',
          links: [
            { label: 'Akademie', href: '/akademie' },
            { label: 'Videa', href: '/videa' },
            { label: 'Webináře', href: '/webinare' },
          ],
        },
        {
          heading: 'Komunita',
          links: [
            { label: 'Blog', href: '/blog' },
            { label: 'Případové studie', href: '/referencni-prehled' },
            { label: 'Newsletter', href: '/newsletter' },
            { label: 'Podpora', href: '/podpora' },
          ],
        },
      ],
    },
  },
  { label: 'Kontakty', href: '#kontakty' },
  { label: 'Blog', href: '#blog' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const openMenu = (label: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveMenu(label);
  };

  const closeMenu = () => {
    closeTimerRef.current = setTimeout(() => setActiveMenu(null), 80);
  };

  const activeMegaItem = NAV_ITEMS.find(
    (i) => i.label === activeMenu && i.dropdown?.type === 'mega'
  );

  return (
    <header
      data-export-section="navbar"
      onMouseLeave={closeMenu}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white md:bg-white/80 md:backdrop-blur-md border-b border-slate-200/50 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <PrevioLogo className="h-11 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 ml-auto mr-8">
            {NAV_ITEMS.map((item) => {
              const isOpen = activeMenu === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => (item.dropdown ? openMenu(item.label) : closeMenu())}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                      {item.label}
                      {item.dropdown && (
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.15, ease: 'easeOut' }}
                          className="inline-flex"
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </motion.span>
                      )}
                    </button>
                  )}

                  {/* Simple dropdown (O nás) */}
                  {item.dropdown?.type === 'simple' && (
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.15, ease: 'easeOut' }}
                          className="absolute top-full left-0 mt-1 w-52 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50"
                          onMouseEnter={() => openMenu(item.label)}
                        >
                          {(item.dropdown as SimpleDropdownContent).links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-4 py-2 transition-colors"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
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

      {/* Mega Menu Panels */}
      <AnimatePresence>
        {activeMegaItem && (
          <motion.div
            key={activeMenu}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl shadow-slate-200/60 z-40"
            onMouseEnter={() => openMenu(activeMegaItem.label)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex gap-8">
                {/* Featured Cards Column */}
                <div className="w-[280px] shrink-0 flex flex-col gap-3">
                  {(activeMegaItem.dropdown as MegaMenuContent).featuredCards.map((card) => (
                    <Link
                      key={card.href}
                      href={card.href}
                      className="group block rounded-lg overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
                    >
                      {card.illustration ? (
                        <div className="relative h-[140px] overflow-hidden bg-white">
                          <div className="relative w-full" style={{ paddingBottom: '64%' }}>
                            <div className="absolute inset-0">
                              {card.illustration}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className={`relative h-[88px] bg-gradient-to-br ${card.gradientClass} flex items-center justify-center overflow-hidden`}>
                          <span className="absolute font-black text-[56px] text-white/10 tracking-tighter select-none leading-none">
                            {card.watermark}
                          </span>
                        </div>
                      )}
                      <div className="px-4 py-3">
                        <div className="text-sm font-semibold text-slate-900">{card.title}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{card.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Vertical separator */}
                <div className="w-px bg-slate-100 shrink-0" />

                {/* Link Groups */}
                <div className="flex flex-1">
                  {(activeMegaItem.dropdown as MegaMenuContent).groups.map((group, index, arr) => (
                    <div
                      key={group.heading}
                      className={`flex-1 ${index < arr.length - 1 ? 'border-r border-slate-100 pr-6 mr-6' : ''}`}
                    >
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-2">
                        {group.heading}
                      </div>
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded px-2 py-1.5 transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
