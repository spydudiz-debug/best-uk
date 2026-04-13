import Link from "next/link";
import type { SetupGuideDevice } from "@/data/setup-guides";
import SetupGuideDeviceVisual from "@/components/setup-guide/SetupGuideDeviceVisual";

const CARD_STYLES = [
  { gradient: "from-orange-500/25 to-slate-900/90", border: "border-orange-500/25" },
  { gradient: "from-cyan-500/25 to-slate-900/90", border: "border-cyan-500/25" },
  { gradient: "from-emerald-500/20 to-slate-900/90", border: "border-emerald-500/25" },
  { gradient: "from-sky-500/25 to-slate-900/90", border: "border-sky-500/25" },
  { gradient: "from-violet-600/30 to-slate-900/90", border: "border-violet-500/30" },
] as const;

type Props = {
  guide: SetupGuideDevice;
  index: number;
  titleLevel?: "h2" | "h3";
};

export default function SetupGuideCard({
  guide,
  index,
  titleLevel = "h3",
}: Props) {
  const style = CARD_STYLES[index % CARD_STYLES.length];
  const TitleTag = titleLevel;
  const href = `/setup-guide/${guide.slug}`;

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-2xl border ${style.border} bg-gradient-to-br ${style.gradient} backdrop-blur-sm transition hover:border-white/20`}
    >
      <Link
        href={href}
        className="group flex h-full min-h-0 flex-1 flex-col p-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]"
        aria-label={`Open full IPTV setup guide for ${guide.title}`}
      >
        <div className="relative flex aspect-[16/10] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          <div className="relative text-accent-cyan drop-shadow-[0_0_12px_rgba(0,229,255,0.25)] transition group-hover:scale-105">
            <SetupGuideDeviceVisual id={guide.id} />
          </div>
        </div>

        <TitleTag className="mt-5 text-lg font-semibold leading-snug text-white group-hover:text-accent-cyan/95">
          {guide.title}
        </TitleTag>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{guide.summary}</p>
      </Link>
    </article>
  );
}
