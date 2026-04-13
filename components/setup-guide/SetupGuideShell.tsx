import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
  /** Inner content max width — index uses wide grid; device pages use prose width */
  maxWidthClass?: string;
};

export default function SetupGuideShell({
  children,
  maxWidthClass = "max-w-7xl",
}: Props) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-page-gradient">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-[20%] top-0 h-[600px] w-[600px] rounded-full bg-accent-cyan/[0.07] blur-[140px]" />
        <div className="absolute left-1/3 top-[38%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-purple/[0.06] blur-[130px]" />
        <div className="absolute -right-[15%] bottom-[10%] h-[560px] w-[560px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />
      </div>

      <Navbar />
      <main className="pt-24 sm:pt-28">
        <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClass}`}>{children}</div>
        <div className="pb-20 sm:pb-24" />
      </main>
      <Footer />
    </div>
  );
}
