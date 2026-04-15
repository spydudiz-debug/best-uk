"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScopMediaLogo from "@/components/ScopMediaLogo";
import PaymentMethodsBar from "@/components/PaymentMethodsBar";
import { SITE_URLS, externalTabProps } from "@/lib/site-urls";

const subscriptions = [
  { label: "1 Month Plan", href: SITE_URLS.iptvSubscriptions },
  { label: "3 Month Plan", href: SITE_URLS.iptvSubscriptions },
  { label: "6 Month Plan", href: SITE_URLS.iptvSubscriptions },
  { label: "12 Month Plan", href: SITE_URLS.iptvSubscriptions },
];

const quick = [
  { label: "Home", href: "/#home" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Platform", href: "/#platform" },
  { label: "Setup Guide", href: "/setup-guide" },
  { label: "Blog", href: "/blog" },
];

/** Internal SEO topic landings + reseller store (external). */
const topicLinks: { label: string; href: string; external?: boolean }[] = [
  { label: "UK IPTV", href: "/uk-iptv" },
  { label: "IPTV subscription", href: "/iptv-subscription" },
  { label: "IPTV Reseller UK", href: "/iptv-reseller-uk" },
  { label: "IPTV trial & free info", href: "/iptv-trial" },
  { label: "IPTV reseller packages", href: SITE_URLS.resellerPackages, external: true },
];

const support = [
  { label: "Contact", href: "mailto:support@scopmedia.com" },
  { label: "WhatsApp", href: "https://wa.me/447000000000" },
  { label: "Status", href: "/#home" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#010409]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <Link href="/#home" className="inline-block text-white">
              <ScopMediaLogo iconSize={40} />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-body">
              ScopMedia is a leading IPTV service providing high-quality streaming,
              live channels, and on-demand content worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-body-muted">
              Subscriptions
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-body">
              {subscriptions.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    {...externalTabProps}
                    className="transition hover:text-accent-cyan"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-body-muted">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-body">
              {quick.map((q) => (
                <li key={q.label}>
                  <Link href={q.href} className="transition hover:text-accent-cyan">
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-body-muted">
              Popular topics
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-body">
              {topicLinks.map((t) => (
                <li key={t.label}>
                  {t.external ? (
                    <a
                      href={t.href}
                      {...externalTabProps}
                      className="transition hover:text-accent-cyan"
                    >
                      {t.label}
                    </a>
                  ) : (
                    <Link href={t.href} className="transition hover:text-accent-cyan">
                      {t.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-body-muted">
              Support
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-body">
              {support.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="transition hover:text-accent-cyan"
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <motion.a
              href={SITE_URLS.freeTrial}
              {...externalTabProps}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-cta py-3 text-sm font-semibold text-[#020617] shadow-glow sm:w-auto sm:px-6"
            >
              Start Free Trial
            </motion.a>
          </div>
        </div>

        <PaymentMethodsBar />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-body-muted sm:flex-row">
          <p>© {new Date().getFullYear()} ScopMedia. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-border-subtle bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-body-muted">
              v2.0
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Status: Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
