"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { SetupGuideDevice } from "@/data/setup-guides";
import SetupGuideDeviceVisual from "@/components/setup-guide/SetupGuideDeviceVisual";
import { SITE_URLS, externalTabProps } from "@/lib/site-urls";

const CARD_STYLES = [
  { gradient: "from-orange-500/25 to-slate-900/90", border: "border-orange-500/25" },
  { gradient: "from-cyan-500/25 to-slate-900/90", border: "border-cyan-500/25" },
  { gradient: "from-emerald-500/20 to-slate-900/90", border: "border-emerald-500/25" },
  { gradient: "from-sky-500/25 to-slate-900/90", border: "border-sky-500/25" },
  { gradient: "from-violet-600/30 to-slate-900/90", border: "border-violet-500/30" },
] as const;

type TitleLevel = "h2" | "h3";
type GuideHeadingLevel = "h3" | "h4";

type Props = {
  guide: SetupGuideDevice;
  index: number;
  /** Use h2 on dedicated setup page; h3 on homepage section */
  titleLevel?: TitleLevel;
  guideHeadingLevel?: GuideHeadingLevel;
};

export default function SetupGuideCard({
  guide,
  index,
  titleLevel = "h3",
  guideHeadingLevel = "h4",
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const style = CARD_STYLES[index % CARD_STYLES.length];
  const TitleTag = titleLevel;
  const GuideHeadingTag = guideHeadingLevel;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05 }}
      className={`flex flex-col overflow-hidden rounded-2xl border ${style.border} bg-gradient-to-br ${style.gradient} p-6 backdrop-blur-sm`}
    >
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        <div className="relative text-accent-cyan drop-shadow-[0_0_12px_rgba(0,229,255,0.25)]">
          <SetupGuideDeviceVisual id={guide.id} />
        </div>
      </div>

      <TitleTag className="mt-5 text-lg font-semibold leading-snug text-white">
        {guide.title}
      </TitleTag>
      <p className="mt-2 text-sm leading-relaxed text-body">{guide.summary}</p>

      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={`guide-panel-${guide.id}`}
        id={`guide-trigger-${guide.id}`}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-accent-cyan/40 hover:bg-white/[0.09]"
      >
        {isOpen ? "Hide Setup Guide" : "View Setup Guide"}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-xs text-accent-cyan"
          aria-hidden
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`guide-panel-${guide.id}`}
            role="region"
            aria-labelledby={`guide-trigger-${guide.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[0.08]"
          >
            <div className="max-h-[min(70vh,520px)] overflow-y-auto pt-4 pr-1">
              <p className="text-xs leading-relaxed text-body-muted sm:text-sm">
                {guide.guideIntro}
              </p>

              <GuideHeadingTag className="mt-6 text-base font-semibold text-white">
                {guide.guideHeading}
              </GuideHeadingTag>

              <ol className="mt-4 space-y-5 text-sm text-body">
                {guide.steps.map((step) => (
                  <li key={step.title}>
                    <p className="font-semibold text-white/95">{step.title}</p>
                    <ul className="mt-2 list-disc space-y-1.5 pl-4 marker:text-accent-cyan/80">
                      {step.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>

              {guide.screenshotHints && guide.screenshotHints.length > 0 && (
                <div className="mt-6 rounded-lg border border-dashed border-white/15 bg-black/20 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-body-muted">
                    Screenshot placeholders
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-body-muted">
                    {guide.screenshotHints.map((hint) => (
                      <li key={hint}>• {hint}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <a
                  href="mailto:support@scopmedia.com?subject=IPTV%20setup%20help"
                  className="inline-flex items-center justify-center rounded-full border border-border-subtle bg-white/[0.05] px-4 py-2 text-center text-xs font-semibold text-white transition hover:border-accent-cyan/30 hover:text-accent-cyan"
                >
                  Need help?
                </a>
                <a
                  href={SITE_URLS.iptvSubscriptions}
                  {...externalTabProps}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent-cyan/90 to-sky-600 px-4 py-2 text-center text-xs font-semibold text-[#020617]"
                >
                  View IPTV subscriptions
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
