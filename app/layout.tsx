import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import CursorGlow from '@/components/CursorGlow';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TEKinspire — Inspired by Technology',
  description:
    'Tier 1 Technology Staffing, Consulting and Solutions firm delivering relevant, innovative, timely and affordable services across cloud, data, AI, cybersecurity and enterprise engineering.',
  keywords: [
    'IT consulting',
    'IT staffing',
    'cloud services',
    'AI ML',
    'cybersecurity',
    'data analytics',
    'TEKinspire',
    'Edison NJ',
  ],
  openGraph: {
    title: 'TEKinspire — Inspired by Technology',
    description:
      'Tier 1 Technology Staffing, Consulting and Solutions firm.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
