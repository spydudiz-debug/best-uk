"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ScopMediaLogo from "@/components/ScopMediaLogo";
import { SITE_URLS, externalTabProps } from "@/lib/site-urls";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#platform", label: "Platform" },
  { href: "/setup-guide", label: "Setup Guide" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[#020617]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/#home"
          className="text-white"
          onClick={() => setOpen(false)}
        >
          <ScopMediaLogo iconSize={36} />
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="transition hover:text-accent-cyan"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <motion.a
            href={SITE_URLS.freeTrial}
            {...externalTabProps}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-cta px-5 py-2.5 text-sm font-semibold text-[#020617] shadow-glow ring-1 ring-white/10"
          >
            Start Free Trial
          </motion.a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-white/[0.03] text-white md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-b border-border-subtle bg-[#020617]/95 px-4 pb-4 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-3 pt-2 text-sm font-medium text-white/90">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-2"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={SITE_URLS.freeTrial}
                {...externalTabProps}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-cta py-3 text-center text-sm font-semibold text-[#020617] shadow-glow"
                onClick={() => setOpen(false)}
              >
                Start Free Trial
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
