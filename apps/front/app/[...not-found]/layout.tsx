import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/components/header/main';
import IMGOGHome from '@/public/imgs/og/og_home.png'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AINekko",
    description: "Ainekko is building. An open source composable stack from inference to hardware to bring freedom of choice to the AI Market.",
    openGraph: {
      title: "AINekko",
      description: "Ainekko is building. An open source composable stack from inference to hardware to bring freedom of choice to the AI Market.",
      images: [IMGOGHome.src],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "AINekko",
      description: "Ainekko is building. An open source composable stack from inference to hardware to bring freedom of choice to the AI Market.",
      images: [IMGOGHome.src],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header hideAnnouncement />
        {children}
      </body>
    </html>
  );
}
