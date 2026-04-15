/** Shared home FAQ copy — used by `FAQ` UI and FAQ JSON-LD on `/`. */
export type HomeFaqItem = { q: string; a: string };

export const HOME_PAGE_FAQS: HomeFaqItem[] = [
  {
    q: "What makes ScopMedia a strong choice for streaming in 2026?",
    a: "ScopMedia focuses on uptime, transparent multi-connection pricing, a deep channel and VOD catalogue, and responsive human support. Always validate performance with a short trial on your own network before committing long term.",
  },
  {
    q: "Does live streaming ever buffer?",
    a: "Occasional buffering can happen on any streaming stack, but a well-run service minimises it with optimised routes, capacity planning, and rapid maintenance. Use wired connections where possible, keep apps updated, and avoid overloading your link with many simultaneous 4K streams.",
  },
  {
    q: "Which setup works best on Firestick?",
    a: "Firestick works great with popular players like Smarters and TiviMate when configured correctly. ScopMedia provides Firestick-friendly setup guidance, compatible playlists or portals, and help tuning buffer and hardware decoding for smoother playback.",
  },
  {
    q: "Do I need a VPN?",
    a: "A VPN is not always required, but some subscribers use one for privacy on public networks or when their ISP path is unstable. If you use a VPN, pick a fast server close to you and verify speeds — routing through distant regions can reduce throughput.",
  },
  {
    q: "Can I stream on multiple TVs at once?",
    a: "Yes, if your ScopMedia plan includes multiple connections. Each active stream typically consumes one connection. Households with parallel viewing should size their plan accordingly to avoid interruptions during peak hours.",
  },
  {
    q: "How fast does activation happen?",
    a: "Most ScopMedia subscriptions activate quickly after payment confirmation. You receive app-friendly credentials and setup instructions. If you need migration from another provider, support can usually assist with a clean handover.",
  },
];
