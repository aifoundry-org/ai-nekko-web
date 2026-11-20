import type { Metadata, Viewport } from 'next';
import './coming-soon.css';

export const metadata: Metadata = {
  title: 'Ainekko — Coming soon',
  description: 'Ainekko — something new is being built. Coming soon.',
  icons: { icon: { url: '/coming-soon/favicon.png', type: 'image/png' } },
  openGraph: {
    title: 'Ainekko — Coming soon',
    description: 'Ainekko — something new is being built. Coming soon.',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F6EFE4',
};

export default function ComingSoonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/coming-soon/fonts/big-shoulders-display.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
