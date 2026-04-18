import type { Metadata } from "next";
import HomeFaqJsonLd from "@/components/seo/HomeFaqJsonLd";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoScroller from "@/components/LogoScroller";
import CompatibilitySection from "@/components/CompatibilitySection";
import { CHANNEL_LOGOS } from "@/data/channel-logos";
import DeviceSupport from "@/components/DeviceSupport";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import BlogContent from "@/components/BlogContent";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-page-gradient">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-[20%] top-0 h-[600px] w-[600px] rounded-full bg-accent-cyan/[0.07] blur-[140px]" />
        <div className="absolute left-1/3 top-[38%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-purple/[0.06] blur-[130px]" />
        <div className="absolute -right-[15%] bottom-[10%] h-[560px] w-[560px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />
      </div>

      <HomeFaqJsonLd />
      <Navbar />
      <main>
        <Hero />
        <section className="relative border-y border-white/[0.06] bg-slate-950/40 backdrop-blur-[2px]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-1 pt-8 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-body-muted sm:mb-2 sm:pt-10">
              Included channels &amp; networks
            </p>
            <p className="mx-auto mb-6 max-w-xl text-center text-sm text-body sm:mb-8">
              A sample of live channels and apps you can stream — smooth playback,
              premium layout.
            </p>
            <LogoScroller logos={CHANNEL_LOGOS} />
            <div className="h-8 sm:h-10" aria-hidden />
          </div>
        </section>
        <CompatibilitySection />
        <DeviceSupport />
        <Features />
        <Pricing />
        <BlogContent />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
