import type { Metadata } from "next";
import { SITE_META_TITLE } from "@/lib/site-meta-title";
import SetupGuideShell from "@/components/setup-guide/SetupGuideShell";
import SetupGuideCardsGrid from "@/components/setup-guide/SetupGuideCardsGrid";

export const metadata: Metadata = {
  title: SITE_META_TITLE,
  description:
    "Complete IPTV setup guide for Firestick, Smart TV, Android box, Windows PC & Formuler. How to install IPTV with step-by-step instructions and Xtream or M3U login.",
};

export default function SetupGuidePage() {
  return (
    <SetupGuideShell maxWidthClass="max-w-7xl">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          IPTV Setup Guide
        </h1>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Complete IPTV Setup Guide for All Devices
        </h2>
        <p className="mt-4 text-base text-body sm:text-lg">
          Follow step-by-step instructions to set up IPTV on any device بسهولة.
        </p>
        <p className="mt-5 text-left text-sm leading-relaxed text-body sm:text-center">
          This hub is your IPTV setup guide for the most popular devices. Choose a device below to open
          the full guide — including how to install IPTV, IPTV on Firestick, Smart TV app stores,
          Android TV boxes, Windows with VLC or IPTV apps, and Formuler MYTVOnline.
        </p>
      </header>

      <SetupGuideCardsGrid titleLevel="h2" />
    </SetupGuideShell>
  );
}
