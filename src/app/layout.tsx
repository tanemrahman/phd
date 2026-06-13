import './globals.css';
import type {ReactNode} from 'react';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=location.pathname.split('/')[1];document.documentElement.lang=(s==='bn')?'bn':'en';})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
