import type {Metadata} from 'next';
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
  description: 'Komplexní systém pro řízení hotelů a penzionů. Vše, co potřebujete pro úspěšné řízení ubytování.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="cs" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased text-slate-900 bg-white selection:bg-primary-100 selection:text-primary-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
