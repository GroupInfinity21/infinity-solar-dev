import Script from 'next/script';
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
      <body className={inter.className}>{children}

      <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1065589662062053');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}