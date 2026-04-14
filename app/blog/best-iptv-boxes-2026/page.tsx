import type { Metadata } from "next";
import SetupGuideShell from "@/components/setup-guide/SetupGuideShell";
import IptvBoxes2026Article from "@/components/blog/IptvBoxes2026Article";

export const metadata: Metadata = {
  title: "Best IPTV Boxes in 2026 – Top Streaming Devices",
  description:
    "Discover the best IPTV boxes in 2026. Compare Firestick, Nvidia Shield, Formuler & more. Start streaming today.",
  openGraph: {
    title: "Best IPTV Boxes in 2026 – Top Streaming Devices",
    description:
      "Discover the best IPTV boxes in 2026. Compare Firestick, Nvidia Shield, Formuler & more. Start streaming today.",
    type: "article",
  },
};

export default function BestIptvBoxes2026Page() {
  return (
    <SetupGuideShell maxWidthClass="max-w-3xl">
      <IptvBoxes2026Article />
    </SetupGuideShell>
  );
}
