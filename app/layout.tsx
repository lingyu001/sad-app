import '../styles/globals.css';
import type { Metadata } from 'next';
import { StockProvider } from '../contexts/StockContext';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StockInsight | Smart Analysis for Everyone',
  description: 'Simple stock analysis for non-experts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StockProvider>
          {children}
        </StockProvider>
      </body>
    </html>
  );
} 