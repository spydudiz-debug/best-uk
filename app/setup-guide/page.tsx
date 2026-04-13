import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SetupGuideCardsGrid from "@/components/setup-guide/SetupGuideCardsGrid";

export const metadata: Metadata = {
  title: "IPTV Setup Guide",
  description:
    "Complete IPTV setup guide for Firestick, Smart TV, Android box, Windows PC & Formuler. How to install IPTV with step-by-step instructions and Xtream or M3U login.",
};

export default function SetupGuidePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-page-gradient">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-[20%] top-0 h-[600px] w-[600px] rounded-full bg-accent-cyan/[0.07] blur-[140px]" />
        <div className="absolute left-1/3 top-[38%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-purple/[0.06] blur-[130px]" />
        <div className="absolute -right-[15%] bottom-[10%] h-[560px] w-[560px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />
      </div>

      <Navbar />
      <main className="pt-24 sm:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              This page is your <strong className="font-semibold text-white/95">IPTV setup guide</strong>{" "}
              for the most popular devices. Whether you need to know{" "}
              <strong className="font-semibold text-white/95">how to install IPTV</strong> from scratch
              or want focused help with{" "}
              <strong className="font-semibold text-white/95">IPTV on Firestick</strong>, Smart TV
              (Samsung, LG, Sony), Android TV box, Windows PC, or a Formuler receiver, use the cards
              below and open <strong className="font-semibold text-white/95">View Setup Guide</strong>{" "}
              for full instructions.
            </p>
          </header>

          <SetupGuideCardsGrid titleLevel="h2" />
        </div>

        <div className="pb-20 sm:pb-24" />
      </main>
      <Footer />
    </div>
  );
}
