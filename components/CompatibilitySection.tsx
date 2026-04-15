"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconAndroidBox,
  IconAppLayers,
  IconAppMonitor,
  IconAppPlay,
  IconFirestick,
  IconLaptop,
  IconMagBox,
  IconPhoneTablet,
  IconSmartTV,
} from "@/components/compatibility/compatibility-icons";

const devices: {
  id: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
}[] = [
  { id: "smart-tv", label: "Smart TV", Icon: IconSmartTV },
  { id: "firestick", label: "Firestick", Icon: IconFirestick },
  { id: "android-box", label: "Android Box", Icon: IconAndroidBox },
  { id: "iphone-ipad", label: "iPhone / iPad", Icon: IconPhoneTablet },
  { id: "pc-mac", label: "PC / Mac", Icon: IconLaptop },
  { id: "mag-box", label: "MAG Box", Icon: IconMagBox },
];

const apps: {
  title: string;
  subtitle: string;
  gradient: string;
  border: string;
  icon: "play" | "layers" | "monitor";
}[] = [
  {
    title: "Smart IPTV",
    subtitle: "Popular on Samsung, LG & webOS TVs",
    gradient: "from-cyan-500/25 via-slate-900/80 to-slate-950/95",
    border: "border-cyan-500/20",
    icon: "monitor",
  },
  {
    title: "IPTV Smarters Pro",
    subtitle: "Fire TV, Android, iOS & Windows",
    gradient: "from-violet-600/30 via-slate-900/85 to-slate-950/95",
    border: "border-violet-500/25",
    icon: "layers",
  },
  {
    title: "IBO Player",
    subtitle: "Apple TV, iPhone & iPad friendly",
    gradient: "from-sky-600/20 via-slate-900/90 to-[#020617]",
    border: "border-sky-500/20",
    icon: "play",
  },
];

function AppIconVisual({ kind }: { kind: "play" | "layers" | "monitor" }) {
  const common = "h-10 w-10 sm:h-11 sm:w-11";
  if (kind === "play") return <IconAppPlay className={`${common} text-accent-cyan`} />;
  if (kind === "layers") return <IconAppLayers className={`${common} text-violet-300`} />;
  return <IconAppMonitor className={`${common} text-cyan-300`} />;
}

export default function CompatibilitySection() {
  return (
    <section
      id="compatibility"
      className="relative border-t border-white/[0.04] py-16 sm:py-20"
      aria-labelledby="compatibility-heading"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-cyan/25 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <p className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-cyan/95">
            Compatibility
          </p>
          <h2
            id="compatibility-heading"
            className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Works on Smart TV, Firestick &amp; All IPTV Boxes
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-body sm:text-lg">
            Our IPTV subscription works on every device you own. Smart TV, Amazon Firestick,
            Android IPTV Box, iPhone, iPad and PC. Install Smart IPTV, IPTV Smarters Pro or IBO
            Player and start watching in minutes. See our{" "}
            <Link
              href="/setup-guide"
              className="font-semibold text-accent-cyan underline decoration-accent-cyan/40 underline-offset-4 transition hover:text-white hover:decoration-white"
            >
              setup guide
            </Link>{" "}
            for full instructions.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {devices.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="group flex flex-col items-center rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-6 text-center backdrop-blur-sm transition duration-300 hover:scale-[1.03] hover:border-accent-cyan/35 hover:bg-white/[0.06] hover:shadow-[0_0_32px_rgba(0,229,255,0.12)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-black/25 text-accent-cyan transition group-hover:border-accent-cyan/30 group-hover:text-white">
                <d.Icon className="h-7 w-7" />
              </div>
              <p className="mt-4 text-sm font-semibold text-white">{d.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, i) => (
            <motion.article
              key={app.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.06 }}
              className={`flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-br ${app.gradient} ${app.border} p-6 shadow-lg transition duration-300 hover:scale-[1.02] hover:shadow-glow-sm`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                <AppIconVisual kind={app.icon} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white sm:text-xl">{app.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{app.subtitle}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
