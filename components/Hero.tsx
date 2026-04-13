"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "20,000+", label: "Channels" },
  { value: "130,000+", label: "VOD Titles" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-accent-cyan/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[380px] w-[380px] rounded-full bg-accent-purple/15 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-cyan/35 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm sm:text-sm"
          >
            <span aria-hidden>🔥</span>
            <span>Premium Streaming — ScopMedia 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06]"
          >
            <span className="bg-gradient-cyan-purple bg-clip-text text-transparent">
              ScopMedia
            </span>{" "}
            <span className="text-white">| Best IPTV Subscription in 2026</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg"
          >
            Premium IPTV Streaming Experience by ScopMedia. Stream live channels
            worldwide in crystal-clear HD and 4K — built for reliability, with sports,
            movies, and on-demand libraries plus instant activation and responsive
            support when you need it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-10 grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:gap-10"
          >
            {stats.map((s) => (
              <div key={s.label} className="min-w-[120px]">
                <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-body-muted">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.02, boxShadow: "0 0 48px rgba(0,229,255,0.35)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-12 min-h-[48px] items-center justify-center rounded-full bg-gradient-cta px-8 text-sm font-semibold text-[#020617] shadow-glow ring-1 ring-white/10 sm:px-10"
            >
              Start Free Trial
            </motion.a>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-12 min-h-[48px] items-center justify-center rounded-full border border-border-subtle bg-white/[0.03] px-8 text-sm font-semibold text-white backdrop-blur-sm sm:px-10"
            >
              View Plans
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-[520px] mx-auto lg:mx-0 lg:ml-auto"
        >
          <div className="relative group w-full max-w-[520px]">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[0_0_40px_rgba(0,229,255,0.15)] transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/hero-new.jpg"
                alt="ScopMedia IPTV Streaming"
                width={520}
                height={320}
                className="h-auto w-full max-w-full object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-cyan/20 via-transparent to-accent-magenta/15 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
