"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SETUP_GUIDES } from "@/data/setup-guides";
import { SITE_URLS, externalTabProps } from "@/lib/site-urls";

const CARD_STYLES = [
  { gradient: "from-orange-500/25 to-slate-900/90", border: "border-orange-500/25" },
  { gradient: "from-cyan-500/25 to-slate-900/90", border: "border-cyan-500/25" },
  { gradient: "from-emerald-500/20 to-slate-900/90", border: "border-emerald-500/25" },
  { gradient: "from-sky-500/25 to-slate-900/90", border: "border-sky-500/25" },
  { gradient: "from-violet-600/30 to-slate-900/90", border: "border-violet-500/30" },
] as const;

/** Simple inline icons (24 viewBox) for device “image” area */
function DeviceVisual({ id }: { id: string }) {
  const common = "h-10 w-10 sm:h-12 sm:w-12";
  switch (id) {
    case "firestick":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.2l5.5 3.3v6.6L12 17.4l-5.5-3.3V7.5L12 4.2z" />
        </svg>
      );
    case "smart-tv":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
          <path d="M4 5h16v11H4V5zm2 2v7h12V7H6zm-2 12h16v2H4v-2z" />
        </svg>
      );
    case "android-box":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
          <path d="M6 18h12v2H6v-2zm-2-2V8h16v8H4zm2-6h2v4H6v-4zm8 0h2v4h-2v-4zM7.5 4.5L6 3l-1.5 1.5L6 6l1.5-1.5zm9 0L15 3l-1.5 1.5L15 6l1.5-1.5z" />
        </svg>
      );
    case "windows":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
          <path d="M3 5.5l7-1v7.6H3V5.5zm7 8.4H3v7.1l7 1v-8.1zm1.5-9.4L21 3v8.5h-9.5V4.5zM21 21h-9.5v-8.1H21V21z" />
        </svg>
      );
    case "formuler":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
          <path d="M5 4h14v12H5V4zm2 2v8h10V6H7zm-2 14h14v2H5v-2z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function DeviceSupport() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="setup"
      className="relative border-t border-white/[0.04] py-20 sm:py-24"
      aria-labelledby="setup-guide-heading"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="setup-guide-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            IPTV Setup Guide — How to Install IPTV on Any Device
          </h2>
          <p className="mt-4 text-base text-body sm:text-lg">
            Complete IPTV setup guides for Firestick, Smart TV, Android TV box,
            Windows, and Formuler. Learn how to install IPTV apps, use Xtream Codes
            or M3U URLs, and start streaming with ScopMedia.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {SETUP_GUIDES.map((guide, index) => {
            const style = CARD_STYLES[index % CARD_STYLES.length];
            const isOpen = openId === guide.id;

            return (
              <motion.article
                key={guide.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.05 }}
                className={`flex flex-col overflow-hidden rounded-2xl border ${style.border} bg-gradient-to-br ${style.gradient} p-6 backdrop-blur-sm`}
              >
                {/* Image / visual area — same card weight as before */}
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  <div className="relative text-accent-cyan drop-shadow-[0_0_12px_rgba(0,229,255,0.25)]">
                    <DeviceVisual id={guide.id} />
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-semibold leading-snug text-white">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{guide.summary}</p>

                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : guide.id)}
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

                        <h4 className="mt-6 text-base font-semibold text-white">
                          {guide.guideHeading}
                        </h4>

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
          })}
        </div>
      </div>
    </section>
  );
}
