import type {Metadata} from 'next';
import type {ReactNode} from 'react';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin', 'latin-ext'], 
  variable: '--font-inter' 
});

const outfit = Outfit({ 
  subsets: ['latin', 'latin-ext'], 
  variable: '--font-outfit' 
});

export const metadata: Metadata = {
  title: 'Previo | Moderní hotelový systém',
  description: 'Komplexní systém pro řízení hotelů a penzionů. PMS, channel manager, rezervační systém, Alfred a weby. Vše na jednom místě.',
  openGraph: {
    title: 'Previo | Moderní hotelový systém',
    description: 'Komplexní systém pro řízení hotelů a penzionů. Přidejte se k více než 4 000 spokojeným ubytovatelům.',
    type: 'website',
    locale: 'cs_CZ',
  },
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="cs" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased text-slate-900 bg-white selection:bg-primary-100 selection:text-primary-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
