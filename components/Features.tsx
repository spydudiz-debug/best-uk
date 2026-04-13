"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "20,000+ Live Channels",
    desc: "UK, EU, and worldwide channels with smooth HD and 4K streams where available.",
    iconWrap: "bg-sky-500/15 text-sky-400 ring-sky-500/25",
    icon: (
      <path d="M12 3L4 9v12h16V9l-8-6zm0 2.2l5.5 4.1H6.5L12 5.2zM6 11h12v8H6v-8zm3 2v4h6v-4H9z" />
    ),
  },
  {
    title: "99.9% Uptime Guarantee",
    desc: "Enterprise-grade infrastructure with monitoring, redundancy, and rapid failover.",
    iconWrap: "bg-amber-500/15 text-amber-400 ring-amber-500/25",
    icon: (
      <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm.5 3v5l4 2.5-.8 1.2L11 13V7h1.5z" />
    ),
  },
  {
    title: "Easy Device Support",
    desc: "Firestick, Smart TV, MAG, mobiles, and desktop — we help you get set up fast.",
    iconWrap: "bg-violet-500/15 text-violet-300 ring-violet-500/25",
    icon: (
      <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21 8 14.4 2 9.8h7.6L12 2z" />
    ),
  },
  {
    title: "Live Sports, News & Entertainment",
    desc: "Premier League, PPV events, kids, cinema, and international news — all in one place.",
    iconWrap: "bg-rose-500/15 text-rose-400 ring-rose-500/25",
    icon: (
      <path d="M4 6h16v12H4V6zm2 2v8h12V8H6zm2 2h8v4H8v-4z" />
    ),
  },
  {
    title: "130,000+ Movies & Series",
    desc: "Huge on-demand library with frequent updates — binge-ready whenever you are.",
    iconWrap: "bg-cyan-500/15 text-accent-cyan ring-cyan-500/25",
    icon: (
      <path d="M4 5h16v4H4V5zm0 6h10v8H4v-8zm12 0h4v8h-4v-8zM8 15h4v2H8v-2zm8 0h2v2h-2v-2z" />
    ),
  },
  {
    title: "Trusted UK IPTV Provider Since 2022",
    desc: "Transparent plans, responsive support, and a subscriber-first approach you can rely on.",
    iconWrap: "bg-emerald-500/15 text-emerald-400 ring-emerald-500/25",
    icon: (
      <path d="M12 2l2.2 4.5L19 7l-3.5 3.4L16.5 17 12 14.2 7.5 17 8.5 10.4 5 7l4.8-.5L12 2z" />
    ),
  },
];

export default function Features() {
  return (
    <section id="iptv-uk" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you expect from a premium IPTV UK service
          </h2>
          <p className="mt-4 text-body">
            Performance, content depth, and support — engineered for real-world streaming.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{
                y: -6,
                boxShadow: "0 0 36px rgba(0, 229, 255, 0.12)",
              }}
              className="group rounded-2xl border border-border-subtle bg-surface-card p-6 backdrop-blur-md transition-colors hover:border-white/15"
            >
              <div
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${f.iconWrap}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden
                >
                  {f.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{f.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
