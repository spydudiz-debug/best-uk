"use client";

import { motion } from "framer-motion";

export default function BlogContent() {
  return (
    <section id="blog" className="relative border-t border-white/[0.04] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            IPTV UK: How to Choose the Best IPTV Subscription in 2026
          </h2>
          <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
            The IPTV market moves fast. In 2026, the best IPTV subscription in the
            UK is not just about channel count — it is about stream stability,
            transparent pricing, device compatibility, and support you can actually
            reach when kick-off is five minutes away.
          </p>

          <h3 className="mt-10 text-xl font-semibold text-white">
            Start with reliability, not hype
          </h3>
          <p className="mt-4 text-base leading-relaxed text-body">
            Look for providers that publish realistic uptime expectations, offer
            trial periods, and explain how traffic is routed during peak hours. A
            premium IPTV UK service should feel boringly consistent: predictable
            playback, clean audio, and quick recovery if a route degrades.
          </p>

          <h3 className="mt-10 text-xl font-semibold text-white">
            Match the plan to your household
          </h3>
          <p className="mt-4 text-base leading-relaxed text-body">
            If you watch mostly on one TV, a single connection may be enough. If you
            share a household with different schedules, multi-connection plans reduce
            friction and keep everyone streaming without compromise.
          </p>

          <ul className="mt-6 space-y-3 text-body">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
              <span>
                <strong className="font-semibold text-white">Content fit:</strong>{" "}
                confirm sports, kids, cinema, and international packages align with
                what you watch weekly — not just what looks good on a feature list.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
              <span>
                <strong className="font-semibold text-white">Device workflow:</strong>{" "}
                choose a provider with clear setup paths for Firestick, Smart TV, and
                mobile — including recommended apps and sane defaults.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
              <span>
                <strong className="font-semibold text-white">Support quality:</strong>{" "}
                prioritise teams that respond in minutes, not days, especially during
                live events.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
              <span>
                <strong className="font-semibold text-white">Privacy posture:</strong>{" "}
                understand billing, data handling, and what optional protections (like
                VPNs) mean for your setup.
              </span>
            </li>
          </ul>

          <h3 className="mt-10 text-xl font-semibold text-white">
            Final checklist before you subscribe
          </h3>
          <p className="mt-4 text-base leading-relaxed text-body">
            Ask for a trial, test your exact devices, and measure performance at peak
            times — evenings and weekends. The right subscription should feel
            effortless on day one and stay dependable through the season.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
