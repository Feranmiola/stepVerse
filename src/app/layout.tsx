import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "StepVerse",
  description: "StepVerse is the ultimate fitness gaming experience built on Telegram Mini App where we make staying active fun and rewarding.",
  openGraph: {
    title: "StepVerse",
    description: "StepVerse is the ultimate fitness gaming experience built on Telegram Mini App where we make staying active fun and rewarding.",
    url: 'https://stepverse.com',
    siteName: 'StepVerse',
    images: [
      {
        url: 'https://res.cloudinary.com/debiu7z1b/image/upload/v1736375946/full-shot-friends-jogging-together_1_l1htgb.png',
        width: 1200,
        height: 630,
        alt: 'StepVerse - Fitness Gaming Experience',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StepVerse',
    description: "StepVerse is the ultimate fitness gaming experience built on Telegram Mini App where we make staying active fun and rewarding.",
    images: ['https://res.cloudinary.com/debiu7z1b/image/upload/v1736375946/full-shot-friends-jogging-together_1_l1htgb.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.className} ${inter.variable}`}>
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
