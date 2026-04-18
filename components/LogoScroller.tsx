"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";

export type LogoScrollerItem = {
  name: string;
  src: string;
};

export type LogoScrollerProps = {
  logos: LogoScrollerItem[];
  /** Seconds for one full loop (medium default). */
  durationSec?: number;
  /** Optional different duration for row 2 (only when `rows` is 2). */
  secondRowDurationSec?: number;
  /** Pause the strip while hovering the block. */
  pauseOnHover?: boolean;
  /** Left/right gradient fade into page background. */
  maskEdges?: boolean;
  /** Single row or premium dual row with opposite motion. */
  rows?: 1 | 2;
  /** When `rows` is 2, scroll the second strip in the opposite direction. Default true. */
  reverseSecondRow?: boolean;
  className?: string;
};

const IMG_WIDTH = 200;
const IMG_HEIGHT = 80;

function LogoTile({ item }: { item: LogoScrollerItem }) {
  const [broken, setBroken] = useState(false);

  return (
    <div
      className="group/tile flex w-[132px] shrink-0 flex-col items-center gap-1.5 sm:w-[148px] md:w-[164px]"
      title={item.name}
    >
      <div className="relative flex h-11 w-full items-center justify-center overflow-hidden rounded-xl border border-black/[0.08] bg-white/[0.94] px-2 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-[transform,box-shadow,filter] duration-300 ease-out will-change-transform sm:h-12 md:h-[3.25rem] md:rounded-2xl">
        {broken ? (
          <span className="line-clamp-3 text-center text-[9px] font-semibold leading-snug text-slate-900 sm:text-[10px]">
            {item.name}
          </span>
        ) : (
          <Image
            src={item.src}
            alt={item.name}
            width={IMG_WIDTH}
            height={IMG_HEIGHT}
            sizes="(max-width: 640px) 132px, (max-width: 768px) 148px, 164px"
            loading="lazy"
            decoding="async"
            unoptimized
            onError={() => setBroken(true)}
            className="h-full w-auto max-h-full max-w-full object-contain object-center grayscale opacity-90 transition-[filter,opacity,transform] duration-300 ease-out group-hover/tile:scale-[1.05] group-hover/tile:opacity-100 group-hover/tile:grayscale-0 group-hover/tile:drop-shadow-[0_2px_12px_rgba(15,23,42,0.12)]"
          />
        )}
      </div>
      <span className="max-w-full truncate text-center text-[9px] font-medium leading-tight text-body-muted sm:text-[10px] md:text-xs">
        {item.name}
      </span>
    </div>
  );
}

function MarqueeTrack({
  logos,
  reverse,
  durationSec,
  pauseOnHover,
}: {
  logos: LogoScrollerItem[];
  reverse: boolean;
  durationSec: number;
  pauseOnHover: boolean;
}) {
  const extended = [...logos, ...logos];

  return (
    <div
      className={`flex w-max flex-nowrap items-start gap-5 sm:gap-7 md:gap-8 ${
        reverse ? "animate-scroll-marquee-reverse" : "animate-scroll-marquee"
      } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""} will-change-transform motion-reduce:!animate-none`}
      style={
        {
          "--marquee-duration": `${durationSec}s`,
        } as CSSProperties
      }
    >
      {extended.map((item, index) => (
        <LogoTile key={`${item.name}-${item.src}-${index}`} item={item} />
      ))}
    </div>
  );
}

export default function LogoScroller({
  logos,
  durationSec = 38,
  secondRowDurationSec,
  pauseOnHover = true,
  maskEdges = true,
  rows = 2,
  reverseSecondRow = true,
  className = "",
}: LogoScrollerProps) {
  if (!logos.length) return null;

  const row2Duration = secondRowDurationSec ?? durationSec + 6;
  const names = logos.map((l) => l.name).join(", ");

  return (
    <section
      className={`group relative ${className}`}
      aria-label={`Featured channels: ${names}`}
    >
      <p className="sr-only">
        Channel logos: {names}.
      </p>

      <div className="relative overflow-hidden py-2 sm:py-3">
        {maskEdges ? (
          <>
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-12 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent sm:w-16 md:w-24"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-12 bg-gradient-to-l from-[#020617] via-[#020617]/90 to-transparent sm:w-16 md:w-24"
              aria-hidden
            />
          </>
        ) : null}

        <div
          className={
            rows === 2
              ? "flex flex-col gap-5 sm:gap-6 md:gap-7"
              : undefined
          }
        >
          <div className="overflow-hidden">
            <MarqueeTrack
              logos={logos}
              reverse={false}
              durationSec={durationSec}
              pauseOnHover={pauseOnHover}
            />
          </div>

          {rows === 2 ? (
            <div className="overflow-hidden opacity-95">
              <MarqueeTrack
                logos={logos}
                reverse={reverseSecondRow}
                durationSec={row2Duration}
                pauseOnHover={pauseOnHover}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
