import type { Metadata } from "next";
import "../globals.css";
import Header from '@/components/header/main';
import Footer from '@/components/home/footer/main';

export const metadata: Metadata = {
  title: "Ainekko",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
