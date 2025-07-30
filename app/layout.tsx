import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AyurVeda Naturals - Ancient Healing, Modern Science | Premium Ayurvedic Medicine',
  description: '5000+ Years of Ancient Wisdom Since Vedic Times. Experience authentic Ayurvedic healing with modern scientific precision. Natural, safe, and effective herbal medicines.',
  keywords: 'AyurVeda Naturals, Ayurvedic Medicine, Herbal Medicine, Natural Healing, Ashwagandha, Turmeric, Triphala, Brahmi, Ancient Wisdom, Holistic Health',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}