import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const handwriting = Great_Vibes({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "A Celebration of Excellence | Light & Catherine",
  description: "Honoring the resilience, discipline, and achievement of Light Leonard Kita and Catherine Godbless Kisanga.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${handwriting.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
