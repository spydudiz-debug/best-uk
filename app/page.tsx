import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DeviceSupport from "@/components/DeviceSupport";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import BlogContent from "@/components/BlogContent";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-page-gradient">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-[20%] top-0 h-[600px] w-[600px] rounded-full bg-accent-cyan/[0.07] blur-[140px]" />
        <div className="absolute left-1/3 top-[38%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-purple/[0.06] blur-[130px]" />
        <div className="absolute -right-[15%] bottom-[10%] h-[560px] w-[560px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
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
