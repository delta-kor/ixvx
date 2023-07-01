import { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';

const font = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IXVX',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
