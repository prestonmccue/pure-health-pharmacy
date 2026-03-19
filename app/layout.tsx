import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pure Health RX | B2B Compounding Solutions',
  description:
    'Pure Health RX helps doctors, clinics, med spas, and telehealth teams streamline prescription fulfillment with fast turnaround and nationwide shipping.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
