"use client";

import { motion } from "framer-motion";
import { SITE_URLS, externalTabProps } from "@/lib/site-urls";

const devices = [
  {
    label: "Smart TV",
    icon: (
      <path d="M4 6h16v10H4V6zm2 2v6h12V8H6zm-2 12h16v2H4v-2z" />
    ),
  },
  {
    label: "Firestick",
    icon: (
      <path d="M12 3c-1.5 2.5-4 4.2-4 7a4 4 0 108 0c0-2.8-2.5-4.5-4-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM6 19h12v2H6v-2z" />
    ),
  },
  {
    label: "Android",
    icon: (
      <path d="M6 10v8h3v-8H6zm9 0v8h3v-8h-3zM7.5 4.5L6 3 4.5 4.5 6 6l1.5-1.5zm9 0L15 3l-1.5 1.5L15 6l1.5-1.5zM12 5c-2.8 0-5 2.2-5 5h10c0-2.8-2.2-5-5-5z" />
    ),
  },
  {
    label: "iOS",
    icon: (
      <path d="M16.5 13.5c-.3-2.8 2.1-4.2 2.1-4.2-1.2-1.8-3.1-2-3.8-2-1.6 0-3.2 1-4 1-.8 0-2.2-1-3.6-1-1.9 0-3.6 1.1-4.6 2.8-2 3.4-.5 8.4 1.4 11.2 1 1.4 2.2 3 3.8 3 1.4 0 2-.9 3.7-.9 1.8 0 2.3.9 3.7.9 1.6 0 2.7-1.4 3.7-2.8.6-.8 1.1-1.7 1.5-2.6-2.7-1-3.7-4.7-1.7-7.2zM13.3 4.2c.9-1 1.5-2.4 1.3-3.8-1.3.1-2.5.9-3.3 1.9-.8 1-1.5 2.5-1.3 3.9 1.4.1 2.7-.7 3.3-2z" />
    ),
  },
  {
    label: "MAG Box",
    icon: (
      <path d="M5 5h14v4H5V5zm0 6h14v8H5v-8zm2 2v4h10v-4H7z" />
    ),
  },
  {
    label: "Windows/Mac",
    icon: (
      <path d="M4 6h7v5H4V6zm9 0h7v5h-7V6zM4 12h7v6H4v-6zm9 0h7v6h-7v-6z" />
    ),
  },
];

const cards = [
  {
    title: "Smart Streaming Apps",
    desc: "Install leading streaming apps on your TV in minutes with step-by-step guides.",
    gradient: "from-cyan-500/25 to-slate-900/90",
    border: "border-cyan-500/25",
    icon: (
      <path d="M4 5h16v11H4V5zm2 2v7h12V7H6zm8 14H6v2h8v-2z" fill="currentColor" />
    ),
  },
  {
    title: "Smarters Pro",
    desc: "A polished player experience with EPG, catch-up, and multi-screen layouts.",
    gradient: "from-violet-600/30 to-slate-900/90",
    border: "border-violet-500/30",
    icon: (
      <path d="M4 4h16v12H4V4zm2 2v8h12V6H6zm2 14h8v2H8v-2z" fill="currentColor" />
    ),
  },
  {
    title: "Multi Device",
    desc: "Watch at home or on the go — phones, tablets, TV boxes, and desktops.",
    gradient: "from-emerald-500/20 to-slate-900/90",
    border: "border-emerald-500/25",
    icon: (
      <path d="M7 3h10v8H7V3zm2 2v4h6V5H9zM4 13h16v2H4v-2zm2 4h12v4H6v-4z" fill="currentColor" />
    ),
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function DeviceSupport() {
  return (
    <section
      id="setup"
      className="relative border-t border-white/[0.04] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Works on Smart TV, Firestick &amp; Streaming Devices
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 flex flex-wrap items-start justify-center gap-x-10 gap-y-8 sm:gap-x-12"
        >
          {devices.map((d) => (
            <motion.div
              key={d.label}
              variants={item}
              className="flex w-[100px] flex-col items-center gap-3 text-center sm:w-[110px]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border-subtle bg-white/[0.03] text-white shadow-inner">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="currentColor"
                  aria-hidden
                >
                  {d.icon}
                </svg>
              </div>
              <span className="text-xs font-medium text-body sm:text-sm">
                {d.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {cards.map((c) => (
            <motion.article
              key={c.title}
              whileHover={{
                y: -6,
                boxShadow: "0 0 40px rgba(0, 229, 255, 0.12)",
              }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className={`group relative overflow-hidden rounded-2xl border ${c.border} bg-gradient-to-br ${c.gradient} p-6 backdrop-blur-sm`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-accent-cyan">
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                  {c.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{c.desc}</p>
              <a
                href={SITE_URLS.iptvSubscriptions}
                {...externalTabProps}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-cyan transition group-hover:gap-2"
              >
                Learn more
                <span aria-hidden>→</span>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
