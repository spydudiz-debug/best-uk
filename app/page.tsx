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
            <header className="pt-8 text-center sm:pt-10">
              <h2 className="mx-auto max-w-4xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl sm:leading-snug lg:text-4xl lg:leading-tight">
                Premium IPTV Channels List – Sports, Movies &amp; Entertainment
              </h2>
              <h3 className="mx-auto mt-3 max-w-3xl text-lg font-medium leading-snug text-body sm:mt-4 sm:text-xl lg:mt-5 lg:text-2xl lg:leading-relaxed">
                Watch Netflix, Amazon Prime, Disney+, HBO &amp; 10,000+ Channels
                Worldwide
              </h3>
            </header>
            <div className="mt-8 sm:mt-10">
              <LogoScroller logos={CHANNEL_LOGOS} />
            </div>
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
