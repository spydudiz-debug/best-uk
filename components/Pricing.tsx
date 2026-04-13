"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { SITE_URLS, externalTabProps } from "@/lib/site-urls";

type Tier = "standard" | "premium";

const TIER_LABELS: Record<Tier, string> = {
  standard: "IPTV Subscription",
  premium: "IPTV Reseller",
};

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
  "24/7 global support",
];

/** Shared credit rules for Reseller plans (Premium & Gold reference same structure). */
const resellerCreditRules = [
  "24 Hours Free Trial = 0 Credit",
  "1 Month = 1 Credit",
  "3 Month = 2 Credits",
  "6 Month = 3 Credits",
  "12 Month = 4 Credits",
] as const;

type ResellerPlan = {
  id: string;
  title: string;
  price: number;
  lines: string[];
  highlighted?: boolean;
};

const resellerPlans: ResellerPlan[] = [
  {
    id: "basic",
    title: "Basic",
    price: 100,
    lines: [
      "Give 16 credits",
      "No Sub-Reseller",
      ...resellerCreditRules,
      "Activation can take up to 24 hours",
    ],
  },
  {
    id: "premium",
    title: "Premium",
    price: 200,
    highlighted: true,
    lines: [
      "Give 35 credits",
      "No Sub-Reseller",
      ...resellerCreditRules,
    ],
  },
  {
    id: "gold",
    title: "Gold",
    price: 300,
    lines: [
      "Give 80 credits",
      "No Sub-Reseller",
      ...resellerCreditRules,
    ],
  },
];

function formatMoney(n: number) {
  return n.toFixed(2);
}

function OrderNowLink({ variant }: { variant: "subscription" | "reseller" }) {
  const href =
    variant === "subscription"
      ? SITE_URLS.iptvSubscriptions
      : SITE_URLS.resellerPackages;

  return (
    <motion.a
      href={href}
      {...externalTabProps}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex h-11 w-full max-w-[240px] items-center justify-center rounded-full bg-gradient-to-r from-accent-cyan to-sky-600 px-6 text-sm font-semibold text-[#020617] shadow-glow-sm ring-1 ring-white/10 sm:max-w-[260px] sm:px-8"
    >
      Order Now
    </motion.a>
  );
}

export default function Pricing() {
  const [tier, setTier] = useState<Tier>("standard");

  const subscriptionPlans = useMemo(() => {
    return basePlans.map((p) => ({
      ...p,
      display: Number(p.price.toFixed(2)),
    }));
  }, []);

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
            ScopMedia Plans &amp; Pricing
          </h2>
          <p className="mt-4 text-base text-body sm:text-lg">
            Choose IPTV Subscription for everyday streaming, or IPTV Reseller for
            credit packs and priority support with ScopMedia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mx-auto mt-10 flex justify-center"
        >
          <div className="inline-flex max-w-full rounded-full border border-border-subtle bg-white/[0.04] p-1 backdrop-blur-md">
            {(["standard", "premium"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTier(t)}
                className={`relative min-w-0 rounded-full px-3 py-2 text-center text-xs font-semibold transition sm:px-5 sm:text-sm ${
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
                <span className="relative z-10 whitespace-nowrap">
                  {TIER_LABELS[t]}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {tier === "standard" ? (
            <motion.div
              key="subscription"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-end"
            >
              {subscriptionPlans.map((plan) => {
                const popular = "popular" in plan && plan.popular;
                return (
                  <motion.article
                    key={plan.id}
                    layout
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
                      <span className="text-4xl font-bold tracking-tight text-emerald-400">
                        {formatMoney(plan.display)}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-body-muted">IPTV Subscription tier</p>

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

                    <div className="mt-8 flex w-full justify-center">
                      <OrderNowLink variant="subscription" />
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="reseller"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-12"
            >
              <p className="mb-8 text-center text-sm text-body sm:text-base">
                Reseller credit packs — choose a plan that matches your volume.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
                {resellerPlans.map((plan) => (
                  <motion.article
                    key={plan.id}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 0 36px rgba(0, 229, 255, 0.12)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 26 }}
                    className={`relative flex flex-col rounded-2xl border bg-surface-card p-6 backdrop-blur-xl ${
                      plan.highlighted
                        ? "border-accent-cyan/45 shadow-card-popular md:scale-[1.02]"
                        : "border-border-subtle"
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-accent-cyan/40 bg-[#020617] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-cyan shadow-glow-sm">
                        Popular
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-white">{plan.title}</h3>
                    <div className="mt-4">
                      <p className="text-xs font-medium uppercase tracking-wider text-body-muted">
                        Price
                      </p>
                      <div className="mt-1 flex flex-wrap items-baseline gap-x-1.5 gap-y-0">
                        <span className="text-sm font-medium text-body-muted">£</span>
                        <span className="text-3xl font-bold tracking-tight text-emerald-400 sm:text-4xl">
                          {formatMoney(plan.price)}
                        </span>
                        <span className="text-sm text-body-muted">GBP</span>
                      </div>
                    </div>

                    <ul className="mt-6 flex flex-1 flex-col gap-2.5 text-sm leading-relaxed text-body">
                      {plan.lines.map((line) => (
                        <li key={line} className="flex gap-2">
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/80"
                            aria-hidden
                          />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex w-full justify-center">
                      <OrderNowLink variant="reseller" />
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
