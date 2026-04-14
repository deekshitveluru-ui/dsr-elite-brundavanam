import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DSR Elite Brundavanam | Ultra-Luxury Real Estate",
  description: "A premium, ultra-luxury residential and resort township located in Anantapur (NH-44).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth antialiased bg-white text-gray-900`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
