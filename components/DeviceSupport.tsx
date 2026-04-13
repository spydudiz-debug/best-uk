"use client";

import { motion } from "framer-motion";
import SetupGuideCardsGrid from "@/components/setup-guide/SetupGuideCardsGrid";

export default function DeviceSupport() {
  return (
    <section
      id="setup"
      className="relative border-t border-white/[0.04] py-20 sm:py-24"
      aria-labelledby="setup-guide-heading"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="setup-guide-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            IPTV Setup Guide — How to Install IPTV on Any Device
          </h2>
          <p className="mt-4 text-base text-body sm:text-lg">
            Complete IPTV setup guides for Firestick, Smart TV, Android TV box,
            Windows, and Formuler. Learn how to install IPTV apps, use Xtream Codes
            or M3U URLs, and start streaming with ScopMedia.
          </p>
        </motion.div>

        <SetupGuideCardsGrid titleLevel="h3" />
      </div>
    </section>
  );
}
