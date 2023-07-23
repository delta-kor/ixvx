import './globals.css';
import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const font = Montserrat({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Analytics
          beforeSend={(event) => {
            if (!event.url.includes('skycon.kr')) return null;
            return event;
          }}
        />
      </body>
    </html>
  );
}
