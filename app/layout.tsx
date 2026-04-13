import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IPTV UK | Best IPTV Subscription UK 2026",
  description:
    "Premium IPTV UK service with 20,000+ channels, 130,000+ VOD, 99.9% uptime and 24/7 support. Works on Smart TV, Firestick & all devices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased text-body bg-page-gradient min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
