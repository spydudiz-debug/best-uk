"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HOME_PAGE_FAQS } from "@/data/home-faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Frequently Asked Questions
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-body">
          Straight answers about performance, devices, VPNs, and what to expect from
          ScopMedia.
        </p>

        <div className="mt-12 flex flex-col gap-3">
          {HOME_PAGE_FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.04 }}
                className="overflow-hidden rounded-2xl border border-border-subtle bg-white/[0.02] backdrop-blur-md"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-white transition hover:bg-white/[0.03] sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-subtle text-lg text-body"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="border-t border-white/[0.06]"
                    >
                      <p className="px-5 py-4 text-sm leading-relaxed text-body sm:px-6 sm:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
