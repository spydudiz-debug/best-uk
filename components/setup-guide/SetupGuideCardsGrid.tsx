import { SETUP_GUIDES } from "@/data/setup-guides";
import SetupGuideCard from "@/components/setup-guide/SetupGuideCard";

type Props = {
  className?: string;
  titleLevel?: "h2" | "h3";
};

export default function SetupGuideCardsGrid({
  className = "mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3",
  titleLevel = "h3",
}: Props) {
  return (
    <div className={className}>
      {SETUP_GUIDES.map((guide, index) => (
        <SetupGuideCard key={guide.slug} guide={guide} index={index} titleLevel={titleLevel} />
      ))}
    </div>
  );
}
