import type {Metadata} from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'STAR INTERIORS By GAURAV KESARE | Luxury Home Designers',
  description: 'Modern & Classy Interiors That Feel Like Home. Bespoke turnkey luxury execution, modular kitchens, and space optimization by Gaurav Kesare.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body suppressHydrationWarning className="font-sans bg-[#050505] text-[#e5e5e5] antialiased selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
        {children}
      </body>
    </html>
  );
}
