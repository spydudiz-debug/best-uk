"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

type Tier = "standard" | "premium";

const basePlans = [
  {
    id: "1m",
    label: "1 Month",
    months: 1,
    price: 11.99,
  },
  {
    id: "3m",
    label: "3 Months",
    months: 3,
    price: 24.99,
  },
  {
    id: "6m",
    label: "6 Months",
    months: 6,
    price: 39.99,
    popular: true,
  },
  {
    id: "12m",
    label: "12 Months",
    months: 12,
    price: 59.99,
  },
] as const;

const featureLines = [
  "Full HD & 4K streams",
  "EPG + catch-up (where available)",
  "Anti-freeze optimised routes",
  "Instant activation",
  "24/7 UK support",
];

function formatMoney(n: number) {
  return n.toFixed(2);
}

export default function Pricing() {
  const [tier, setTier] = useState<Tier>("standard");
  const [connections, setConnections] = useState(1);

  const multiplier = tier === "premium" ? 1.15 : 1;

  const plans = useMemo(() => {
    return basePlans.map((p) => ({
      ...p,
      display: Number(
        (p.price * connections * multiplier).toFixed(2),
      ),
    }));
  }, [connections, multiplier]);

  return (
    <section id="pricing" className="relative scroll-mt-28 py-20 sm:py-28">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent-cyan/8 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-20 h-[420px] w-[420px] translate-x-1/3 rounded-full bg-accent-purple/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
            IPTV UK Plans &amp; Pricing
          </h2>
          <p className="mt-4 text-base text-body sm:text-lg">
            Pick Standard for everyday streaming, or Premium for higher bitrates
            and priority support. Select your connections — pricing scales fairly per
            screen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mx-auto mt-10 flex flex-col items-center gap-6"
        >
          <div className="inline-flex rounded-full border border-border-subtle bg-white/[0.04] p-1 backdrop-blur-md">
            {(["standard", "premium"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTier(t)}
                className={`relative rounded-full px-6 py-2 text-sm font-semibold transition ${
                  tier === t ? "text-[#020617]" : "text-body hover:text-white"
                }`}
              >
                {tier === t && (
                  <motion.span
                    layoutId="tier-pill"
                    className="absolute inset-0 rounded-full bg-gradient-cta shadow-glow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 capitalize">{t}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="mr-1 hidden text-sm text-body-muted sm:inline">
              Connections
            </span>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setConnections(n)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  connections === n
                    ? "border-emerald-500/50 bg-emerald-500/15 text-emerald-300 shadow-[0_0_24px_rgba(16,185,129,0.2)]"
                    : "border-border-subtle bg-white/[0.03] text-body hover:border-white/15 hover:text-white"
                }`}
              >
                {n} Device{n > 1 ? "s" : ""}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-4 lg:items-end">
          <AnimatePresence mode="popLayout">
            {plans.map((plan) => {
              const popular = "popular" in plan && plan.popular;
              return (
                <motion.article
                  key={`${plan.id}-${tier}-${connections}`}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className={`relative flex flex-col rounded-2xl border bg-surface-card p-6 backdrop-blur-xl ${
                    popular
                      ? "border-accent-cyan/45 shadow-card-popular lg:-translate-y-2 lg:scale-[1.03]"
                      : "border-border-subtle"
                  }`}
                >
                  {popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-accent-cyan/40 bg-[#020617] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-cyan shadow-glow-sm">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-white">{plan.label}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-sm font-medium text-body-muted">£</span>
                    <motion.span
                      key={plan.display}
                      initial={{ opacity: 0.4, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl font-bold tracking-tight text-emerald-400"
                    >
                      {formatMoney(plan.display)}
                    </motion.span>
                  </div>
                  <p className="mt-2 text-xs text-body-muted">
                    {tier === "premium" ? "Premium tier" : "Standard tier"} ·{" "}
                    {connections} connection{connections > 1 ? "s" : ""}
                  </p>

                  <ul className="mt-6 flex flex-col gap-3 text-sm text-body">
                    {featureLines.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span
                          className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400"
                          aria-hidden
                        >
                          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor">
                            <path d="M13.5 4.5L6 12 2.5 8.5l1.4-1.4L6 9.2l6.1-6.1 1.4 1.4z" />
                          </svg>
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-col gap-3">
                    <motion.a
                      href="https://wa.me/447000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-500 px-4 text-sm font-semibold text-[#020617] shadow-[0_0_28px_rgba(16,185,129,0.35)] ring-1 ring-white/10"
                    >
                      Order via WhatsApp
                    </motion.a>
                    <motion.a
                      href="mailto:support@iptvukprovider.example"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-accent-cyan to-sky-600 px-4 text-sm font-semibold text-[#020617] shadow-glow-sm ring-1 ring-white/10"
                    >
                      Order via Email
                    </motion.a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
