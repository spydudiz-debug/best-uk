"use client";

import { useId } from "react";

type ScopMediaLogoProps = {
  className?: string;
  /** Full wordmark next to icon */
  showText?: boolean;
  /** Icon pixel size */
  iconSize?: number;
};

/**
 * ScopMedia brand mark: play + signal waves inside a rounded tile, cyan → purple gradient with soft glow.
 */
export default function ScopMediaLogo({
  className = "",
  showText = true,
  iconSize = 40,
}: ScopMediaLogoProps) {
  const uid = useId();
  const gradId = `scopmedia-grad-${uid}`;
  const filterId = `scopmedia-glow-${uid}`;
  const h = iconSize;
  const w = iconSize;

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="ScopMedia"
    >
      <svg
        width={w}
        height={h}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden
      >
        <defs>
          <linearGradient
            id={gradId}
            x1="6"
            y1="8"
            x2="42"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00E5FF" />
            <stop offset="0.55" stopColor="#7C3AED" />
            <stop offset="1" stopColor="#C026D3" />
          </linearGradient>
          <filter
            id={filterId}
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
            filterUnits="objectBoundingBox"
          >
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect
          x="4"
          y="4"
          width="40"
          height="40"
          rx="12"
          stroke={`url(#${gradId})`}
          strokeWidth="1.5"
          fill="rgba(255,255,255,0.03)"
          filter={`url(#${filterId})`}
        />
        <path
          d="M21 16.5v15l12-7.5-12-7.5z"
          fill={`url(#${gradId})`}
          opacity="0.95"
        />
        <path
          d="M34 14c2 2.5 3 5.5 3 8.5s-1 6-3 8.5"
          stroke={`url(#${gradId})`}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M37 11c3 3.5 4.5 7.5 4.5 11.5S40 30.5 37 34"
          stroke={`url(#${gradId})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.45"
        />
      </svg>
      {showText && (
        <span className="text-[15px] font-semibold tracking-tight text-white sm:text-base">
          ScopMedia
        </span>
      )}
    </span>
  );
}
