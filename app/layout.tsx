import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalJsonLd from "@/components/seo/GlobalJsonLd";
import {
  buildMetaTitle,
  HOME_PAGE_META_KEYWORD,
} from "@/lib/site-meta-title";
import { DEFAULT_SITE_DESCRIPTION } from "@/lib/seo-defaults";
import { getSiteUrl } from "@/lib/site-origin";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const homeTitle = buildMetaTitle(HOME_PAGE_META_KEYWORD);

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: homeTitle,
  description: DEFAULT_SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "ADD_CODE_HERE",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "ScopMedia",
    title: homeTitle,
    description: DEFAULT_SITE_DESCRIPTION,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: DEFAULT_SITE_DESCRIPTION,
  },
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
        <GlobalJsonLd />
        {children}
      </body>
    </html>
  );
}
