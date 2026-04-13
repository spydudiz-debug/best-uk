"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Switched after months of flaky streams elsewhere. Picture is stable on match days and the team actually replies on WhatsApp — huge upgrade.",
    name: "James R.",
    place: "Toronto, Canada",
    initial: "JR",
    tint: "from-sky-500/40 to-cyan-400/30",
  },
  {
    quote:
      "Firestick setup took under ten minutes with their guide. EPG is accurate and the on-demand library is deeper than I expected for the price.",
    name: "Aisha K.",
    place: "Berlin, Germany",
    initial: "AK",
    tint: "from-violet-500/40 to-fuchsia-500/30",
  },
  {
    quote:
      "We run three TVs at home — no more arguing over bandwidth. Connections work as advertised and renewals are straightforward.",
    name: "Daniel M.",
    place: "São Paulo, Brazil",
    initial: "DM",
    tint: "from-emerald-500/40 to-teal-500/30",
  },
];

export default function Testimonials() {
  return (
    <section className="relative border-t border-white/[0.04] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by 10,000+ ScopMedia subscribers
          </h2>
          <p className="mt-4 text-body">
            Real households. Real devices. Results you can feel during primetime.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-2xl border border-border-subtle bg-surface-card p-6 backdrop-blur-md"
            >
              <div className="flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, si) => (
                  <svg
                    key={si}
                    viewBox="0 0 20 20"
                    className="h-4 w-4 fill-current"
                    aria-hidden
                  >
                    <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.7L10 14.9l-5.2 2.7 1-5.7-4.2-4.1 5.8-.8L10 1.5z" />
                  </svg>
                ))}
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-white sm:text-base">
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.tint} text-xs font-bold text-white ring-1 ring-white/10`}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-body-muted">{t.place}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
