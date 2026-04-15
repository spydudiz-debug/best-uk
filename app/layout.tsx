import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  buildMetaTitle,
  HOME_PAGE_META_KEYWORD,
} from "@/lib/site-meta-title";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: buildMetaTitle(HOME_PAGE_META_KEYWORD),
  description:
    "ScopMedia — premium IPTV streaming worldwide. 20,000+ channels, 130,000+ VOD, 99.9% uptime and 24/7 support. Smart TV, Firestick, mobile & more.",
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
