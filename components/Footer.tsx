"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const subscriptions = [
  { label: "1 Month Plan", href: "#pricing" },
  { label: "3 Month Plan", href: "#pricing" },
  { label: "6 Month Plan", href: "#pricing" },
  { label: "12 Month Plan", href: "#pricing" },
];

const quick = [
  { label: "Home", href: "#home" },
  { label: "Pricing", href: "#pricing" },
  { label: "IPTV UK", href: "#iptv-uk" },
  { label: "Setup Guide", href: "#setup" },
  { label: "Blog", href: "#blog" },
];

const support = [
  { label: "Contact", href: "mailto:support@iptvukprovider.example" },
  { label: "WhatsApp", href: "https://wa.me/447000000000" },
  { label: "Status", href: "#home" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#010409]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#home" className="flex items-center gap-2.5 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-cyan/30 to-accent-purple/40 ring-1 ring-white/10">
                <span className="text-sm font-bold text-accent-cyan">UK</span>
              </span>
              <span className="text-sm font-semibold tracking-[0.12em]">
                IPTVUKPROVIDER
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-body">
              Premium IPTV UK streaming with transparent plans, multi-device
              flexibility, and support that stays responsive when it matters most.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-body-muted">
              Subscriptions
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-body">
              {subscriptions.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="transition hover:text-accent-cyan">
                    {s.label}
                  </Link>
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
              href="#pricing"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-cta py-3 text-sm font-semibold text-[#020617] shadow-glow sm:w-auto sm:px-6"
            >
              Get Started
            </motion.a>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 border-t border-white/[0.06] pt-10 opacity-80">
          {["Visa", "Mastercard", "PayPal", "Amex", "Apple Pay"].map((brand) => (
            <div
              key={brand}
              className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-body-muted"
            >
              {brand}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-body-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} IPTV UK Provider. All rights reserved.
          </p>
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
