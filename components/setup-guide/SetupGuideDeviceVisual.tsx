/** Simple inline icons (24 viewBox) for device “image” area */
export default function SetupGuideDeviceVisual({ id }: { id: string }) {
  const common = "h-10 w-10 sm:h-12 sm:w-12";
  switch (id) {
    case "firestick":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.2l5.5 3.3v6.6L12 17.4l-5.5-3.3V7.5L12 4.2z" />
        </svg>
      );
    case "smart-tv":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
          <path d="M4 5h16v11H4V5zm2 2v7h12V7H6zm-2 12h16v2H4v-2z" />
        </svg>
      );
    case "android-box":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
          <path d="M6 18h12v2H6v-2zm-2-2V8h16v8H4zm2-6h2v4H6v-4zm8 0h2v4h-2v-4zM7.5 4.5L6 3l-1.5 1.5L6 6l1.5-1.5zm9 0L15 3l-1.5 1.5L15 6l1.5-1.5z" />
        </svg>
      );
    case "windows":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
          <path d="M3 5.5l7-1v7.6H3V5.5zm7 8.4H3v7.1l7 1v-8.1zm1.5-9.4L21 3v8.5h-9.5V4.5zM21 21h-9.5v-8.1H21V21z" />
        </svg>
      );
    case "formuler":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
          <path d="M5 4h14v12H5V4zm2 2v8h10V6H7zm-2 14h14v2H5v-2z" />
        </svg>
      );
    default:
      return null;
  }
}
