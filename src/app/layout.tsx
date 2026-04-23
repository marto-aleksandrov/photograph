import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import './globals.css';

const displayFont = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-display' });
const bodyFont = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: {
    default: 'Photograph Agency | Photo, Video & Rentals',
    template: '%s | Photograph Agency'
  },
  description:
    'Premium creative production agency offering portfolio production, studio rental, and equipment leasing with inquiry-based booking.',
  openGraph: {
    title: 'Photograph Agency',
    description: 'Photo, video and editing agency with studio and equipment rental flows.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
