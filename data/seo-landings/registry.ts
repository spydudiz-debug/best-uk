import { keywordToSlug } from "@/lib/keyword-to-slug";
import type { LandingCluster, LandingDefinition } from "./types";

type Row = { keyword: string; cluster: LandingCluster };

/** Source keyword list → cluster (SEO landing intent). Slugs derived via keywordToSlug(). */
const RAW: Row[] = [
  { keyword: "IPTV", cluster: "core" },
  { keyword: "Best IPTV", cluster: "core" },
  { keyword: "Free IPTV", cluster: "subscription" },
  { keyword: "IPTV m3u", cluster: "formats" },
  { keyword: "IPTV playlist", cluster: "formats" },
  { keyword: "IPTV m3u8", cluster: "formats" },
  { keyword: "IPTV links", cluster: "formats" },
  { keyword: "Live TV IPTV", cluster: "core" },
  { keyword: "IPTV channels list", cluster: "core" },
  { keyword: "IPTV subscription", cluster: "subscription" },
  { keyword: "Best IPTV subscription", cluster: "subscription" },
  { keyword: "Best IPTV subscription UK", cluster: "uk_commercial" },
  { keyword: "Best IPTV service", cluster: "core" },
  { keyword: "Premium IPTV", cluster: "subscription" },
  { keyword: "IPTV server", cluster: "subscription" },
  { keyword: "IPTV trial", cluster: "subscription" },
  { keyword: "Android IPTV", cluster: "devices" },
  { keyword: "Smart TV IPTV", cluster: "devices" },
  { keyword: "Firestick IPTV", cluster: "devices" },
  { keyword: "IPTV app", cluster: "apps" },
  { keyword: "Best IPTV app", cluster: "apps" },
  { keyword: "Xtream IPTV", cluster: "xtream" },
  { keyword: "Xtream codes", cluster: "xtream" },
  { keyword: "IPTV panel", cluster: "reseller" },
  { keyword: "IPTV reseller", cluster: "reseller" },
  { keyword: "Best IPTV reseller", cluster: "reseller" },
  { keyword: "IPTV reseller UK", cluster: "reseller" },
  { keyword: "Best IPTV reseller UK", cluster: "reseller" },
  { keyword: "IPTV reseller provider 2026", cluster: "reseller" },
  { keyword: "Sports IPTV", cluster: "sports" },
  { keyword: "Live football IPTV", cluster: "sports" },
  { keyword: "Cricket IPTV", cluster: "sports" },
  { keyword: "Bein Sports IPTV", cluster: "sports" },
  { keyword: "Sky Sports IPTV", cluster: "sports" },
  { keyword: "Indian IPTV", cluster: "regional" },
  { keyword: "Pakistani IPTV", cluster: "regional" },
  { keyword: "UK IPTV", cluster: "regional" },
  { keyword: "USA IPTV", cluster: "regional" },
  { keyword: "Arabic IPTV", cluster: "regional" },
  { keyword: "4K IPTV", cluster: "quality" },
  { keyword: "4K IPTV UK", cluster: "quality" },
  { keyword: "Buffer-free IPTV", cluster: "quality" },
  { keyword: "Stable IPTV", cluster: "quality" },
  { keyword: "Cheap IPTV", cluster: "subscription" },
  { keyword: "Best Cheap IPTV", cluster: "subscription" },
  { keyword: "IPTV streaming", cluster: "core" },
  { keyword: "IPTV provider", cluster: "core" },
  { keyword: "IPTV box", cluster: "devices" },
  { keyword: "Is IPTV legal", cluster: "legal" },
  { keyword: "IPTV legal UK", cluster: "legal" },
  { keyword: "IPTV legality", cluster: "legal" },
  { keyword: "IPTV safe or not", cluster: "legal" },
  { keyword: "Legal IPTV UK", cluster: "legal" },
  { keyword: "IPTV risks", cluster: "legal" },
  { keyword: "IPTV piracy", cluster: "legal" },
  { keyword: "Illegal IPTV", cluster: "legal" },
  { keyword: "Copyright streaming", cluster: "legal" },
  { keyword: "UK TV streaming", cluster: "streaming_tv" },
  { keyword: "British TV online", cluster: "streaming_tv" },
  { keyword: "UK live TV", cluster: "streaming_tv" },
  { keyword: "UK sports streaming", cluster: "sports" },
  { keyword: "BT Sports IPTV", cluster: "sports" },
  { keyword: "UK premium channels", cluster: "streaming_tv" },
  { keyword: "Live sports streaming", cluster: "sports" },
  { keyword: "Football IPTV", cluster: "sports" },
  { keyword: "Premier League IPTV", cluster: "sports" },
  { keyword: "UFC IPTV", cluster: "sports" },
  { keyword: "Boxing IPTV", cluster: "sports" },
  { keyword: "IPTV Firestick", cluster: "devices" },
  { keyword: "IPTV Android", cluster: "devices" },
  { keyword: "IPTV Smart TV", cluster: "devices" },
  { keyword: "IPTV iOS", cluster: "devices" },
  { keyword: "IPTV Windows", cluster: "devices" },
  { keyword: "IPTV Mac", cluster: "devices" },
  { keyword: "TiviMate", cluster: "apps" },
  { keyword: "IPTV Smarters", cluster: "apps" },
  { keyword: "XCIPTV", cluster: "apps" },
  { keyword: "What is IPTV", cluster: "edu" },
  { keyword: "How IPTV works", cluster: "edu" },
  { keyword: "IPTV guide", cluster: "edu" },
  { keyword: "IPTV explained", cluster: "edu" },
  { keyword: "IPTV pros and cons", cluster: "edu" },
  { keyword: "IPTV review", cluster: "edu" },
  { keyword: "IPTV facts", cluster: "edu" },
  { keyword: "IPTV truth", cluster: "edu" },
  { keyword: "IPTV UK guide", cluster: "edu" },
  { keyword: "IPTV Subscription UK", cluster: "uk_commercial" },
  { keyword: "Buy IPTV UK", cluster: "uk_commercial" },
  { keyword: "IPTV Service UK", cluster: "uk_commercial" },
  { keyword: "UK IPTV Provider", cluster: "uk_commercial" },
  { keyword: "Buy IPTV Subscription", cluster: "subscription" },
  { keyword: "Premium IPTV UK", cluster: "uk_commercial" },
  { keyword: "Reliable IPTV UK", cluster: "uk_commercial" },
  { keyword: "Affordable IPTV UK", cluster: "uk_commercial" },
  { keyword: "Top IPTV Service UK", cluster: "uk_commercial" },
  { keyword: "IPTV for Sale UK", cluster: "uk_commercial" },
  { keyword: "IPTV Deals UK", cluster: "uk_commercial" },
  { keyword: "IPTV for Android TV", cluster: "devices" },
  { keyword: "IPTV for Firestick UK", cluster: "devices" },
  { keyword: "IPTV for Smart TV", cluster: "devices" },
  { keyword: "IPTV Streaming UK", cluster: "uk_commercial" },
  { keyword: "Internet TV UK", cluster: "streaming_tv" },
  { keyword: "Best IPTV Subscription in UK 2026", cluster: "uk_commercial" },
  { keyword: "How to Choose IPTV UK", cluster: "edu" },
  { keyword: "IPTV Setup Guide UK", cluster: "edu" },
  { keyword: "Best IPTV for UK Users", cluster: "uk_commercial" },
  { keyword: "IPTV UK 2026", cluster: "uk_commercial" },
  { keyword: "ScopMedia IPTV", cluster: "brand" },
];

function dedupeBySlug(rows: Row[]): LandingDefinition[] {
  const map = new Map<string, LandingDefinition>();
  for (const row of rows) {
    const slug = keywordToSlug(row.keyword);
    if (!slug) continue;
    if (!map.has(slug)) {
      map.set(slug, { keyword: row.keyword, slug, cluster: row.cluster });
    }
  }
  return [...map.values()];
}

export const LANDING_PAGES: LandingDefinition[] = dedupeBySlug(RAW);

const BY_SLUG = new Map(LANDING_PAGES.map((p) => [p.slug, p]));

export function getLandingBySlug(slug: string): LandingDefinition | undefined {
  return BY_SLUG.get(slug);
}

export function getAllLandingSlugs(): string[] {
  return LANDING_PAGES.map((p) => p.slug);
}
