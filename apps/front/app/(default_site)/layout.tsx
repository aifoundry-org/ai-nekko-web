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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
