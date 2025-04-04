import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Infinity solar share',
  description: 'Invista em energia solar e obtenha rendimentos mensais',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link 
          href="https://fonts.cdnfonts.com/css/ethnocentric" 
          rel="stylesheet" 
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon-16x16.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}