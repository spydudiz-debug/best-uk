/** Outline-style icons (24×24) for device compatibility grid */

export function IconSmartTV({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 5h16v11H4V5zm2 2v7h12V7H6zm-2 13h16v2H4v-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconFirestick({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="9" y="2" width="6" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M11 17h2v3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M10 21h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconAndroidBox({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M8 4l-1 2M16 4l1 2M6 18h12v2H6v-2zm-2-2V8h16v8H4zm2-6h2v4H6v-4zm10 0h2v4h-2v-4z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconPhoneTablet({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="7"
        y="2"
        width="10"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M11 18h2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function IconLaptop({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 6h16v10H4V6zm2 2v6h12V8H6zM2 18h20v2H2v-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMagBox({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="4"
        y="6"
        width="16"
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M8 19h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="8.5" cy="11" r="0.75" fill="currentColor" />
      <circle cx="12" cy="11" r="0.75" fill="currentColor" />
      <circle cx="15.5" cy="11" r="0.75" fill="currentColor" />
    </svg>
  );
}

export function IconAppPlay({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M8 5v14l11-7-11-7z" fill="currentColor" />
    </svg>
  );
}

export function IconAppLayers({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconAppMonitor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="4" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
