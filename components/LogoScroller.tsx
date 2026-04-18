import Image from "next/image";
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

const LOGO_WIDTH = 160;
const LOGO_HEIGHT = 56;

function LogoTile({ item }: { item: LogoScrollerItem }) {
  return (
    <div
      className="group/tile relative shrink-0 select-none"
      title={item.name}
    >
      <div className="relative flex h-9 w-[120px] items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition-[transform,box-shadow,filter] duration-300 ease-out will-change-transform sm:h-10 sm:w-[136px] md:h-11 md:w-[152px] md:rounded-2xl">
        <Image
          src={item.src}
          alt=""
          width={LOGO_WIDTH}
          height={LOGO_HEIGHT}
          sizes="(max-width: 640px) 120px, (max-width: 768px) 136px, 152px"
          loading="lazy"
          decoding="async"
          unoptimized
          className="h-full w-auto max-w-full object-contain object-center grayscale opacity-85 transition-[filter,opacity,transform] duration-300 ease-out group-hover/tile:scale-[1.06] group-hover/tile:opacity-100 group-hover/tile:grayscale-0 group-hover/tile:drop-shadow-[0_0_18px_rgba(0,229,255,0.22)]"
        />
      </div>
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
      className={`flex w-max flex-nowrap items-center gap-6 sm:gap-8 md:gap-10 ${
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
        Channel logos shown for illustration: {names}.
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
