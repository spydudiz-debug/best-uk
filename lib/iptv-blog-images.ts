/**
 * Curated Unsplash images for the IPTV boxes 2026 article.
 * URLs use auto=format, fit=crop, w, q for CDN optimization (pairs with next/image).
 * Each asset is chosen to match the device or section topic—not unrelated stock.
 */

const Q = "75";
const W_HERO = "1600";
const W_SECTION = "1200";

function u(photoId: string, w: string): string {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&q=${Q}`;
}

/** Short title fragment for consistent alt text (SEO). */
export const IPTV_BLOG_ALT_PREFIX = "Best IPTV Boxes 2026";

export type BlogImageAsset = {
  src: string;
  alt: string;
};

/** Fallback: living-room IPTV / smart TV context (same family as hero). */
export const IPTV_BLOG_IMAGE_FALLBACK: BlogImageAsset = {
  src: u("photo-1593784991095-a2050694700e", W_SECTION),
  alt: `${IPTV_BLOG_ALT_PREFIX} — IPTV streaming setup with smart TV in a modern living room`,
};

export const IPTV_BLOG_HERO: BlogImageAsset = {
  src: u("photo-1593784991095-a2050694700e", W_HERO),
  alt: `${IPTV_BLOG_ALT_PREFIX} complete streaming guide — 4K smart TV and home theater hardware`,
};

/** Featured image for /blog index card. */
export const IPTV_BLOG_CARD_IMAGE = IPTV_BLOG_HERO;

/**
 * Device review images — keyed by `IptvBoxReview.slug`.
 * Alts include device name + “IPTV streaming device” context for SEO.
 */
export const IPTV_BOX_DEVICE_IMAGES: Record<string, BlogImageAsset> = {
  "fire-tv-stick-4k": {
    src: u("photo-1577587310899-1588baa4e8f4", W_SECTION),
    alt: `${IPTV_BLOG_ALT_PREFIX} — Amazon Fire TV Stick 4K IPTV streaming device with remote aimed at television screen`,
  },
  "nvidia-shield-tv-pro": {
    src: u("photo-1542751371-adc38448a05e", W_SECTION),
    alt: `${IPTV_BLOG_ALT_PREFIX} — Nvidia Shield TV Pro IPTV Android TV box style 4K gaming and streaming setup`,
  },
  "formuler-z11-pro-max": {
    src: u("photo-1574375927938-d5a98e8ffe85", W_SECTION),
    alt: `${IPTV_BLOG_ALT_PREFIX} — Formuler Z11 Pro Max IPTV set-top box with remote beside television`,
  },
  "buzztv-x5": {
    src: u("photo-1616469829581-739039680349", W_SECTION),
    alt: `${IPTV_BLOG_ALT_PREFIX} — BuzzTV X5 Android TV IPTV box style streaming hardware and remote on desk`,
  },
  "mag-box": {
    src: u("photo-1593305841991-05c297ba4575", W_SECTION),
    alt: `${IPTV_BLOG_ALT_PREFIX} — MAG IPTV box style compact streamer with entertainment controllers near display`,
  },
  "xiaomi-mi-box-s": {
    src: u("photo-1509281373149-efbc7b3fef10", W_SECTION),
    alt: `${IPTV_BLOG_ALT_PREFIX} — Xiaomi Mi Box S style Android TV IPTV streaming puck with home cinema screen`,
  },
};

/** Section blocks (H2) — stable ids used in the article layout. */
export const IPTV_BLOG_SECTION_IMAGES: Record<string, BlogImageAsset> = {
  "what-is": {
    src: u("photo-1544197150-b99a580bb7a8", W_SECTION),
    alt: `${IPTV_BLOG_ALT_PREFIX} — What is an IPTV box: HDMI and home network cables for internet television streaming`,
  },
  "top-boxes-intro": {
    src: u("photo-1522869635100-9f4c5e86aa37", W_SECTION),
    alt: `${IPTV_BLOG_ALT_PREFIX} — Top IPTV boxes 2026 overview: live sports and streaming on a big-screen television`,
  },
  cheap: {
    src: u("photo-1554224155-6726b3ff858f", W_SECTION),
    alt: `${IPTV_BLOG_ALT_PREFIX} — Cheap budget IPTV boxes and affordable streaming device options`,
  },
  premium: {
    src: u("photo-1593359677879-bc4516c8e8f7", W_SECTION),
    alt: `${IPTV_BLOG_ALT_PREFIX} — Premium high-end IPTV boxes and flagship 4K HDR television playback`,
  },
  "vs-smart-tv": {
    src: u("photo-1485846234645-a62644f84728", W_SECTION),
    alt: `${IPTV_BLOG_ALT_PREFIX} — IPTV box versus smart TV: external streaming device compared to built-in TV apps`,
  },
  "how-to-choose": {
    src: u("photo-1460925895917-afdab827c52f", W_SECTION),
    alt: `${IPTV_BLOG_ALT_PREFIX} — How to choose an IPTV box: research CPU, RAM, and storage for streaming hardware`,
  },
  faq: {
    src: u("photo-1556742049-0cfed4f6a45d", W_SECTION),
    alt: `${IPTV_BLOG_ALT_PREFIX} — IPTV FAQ: remote control and television for legal streaming and subscription questions`,
  },
};

export function normalizeBlogImageKey(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Alt pattern: article + section + keyword context (for dynamic headings). */
export function buildDynamicSectionAlt(sectionTitle: string, keywordContext: string): string {
  const clean = sectionTitle.replace(/\s+/g, " ").trim();
  return `${IPTV_BLOG_ALT_PREFIX} — ${clean}: ${keywordContext}`;
}

export function getDeviceImageForSlug(deviceSlug: string): BlogImageAsset {
  return IPTV_BOX_DEVICE_IMAGES[deviceSlug] ?? IPTV_BLOG_IMAGE_FALLBACK;
}

export function getSectionImageById(sectionId: string): BlogImageAsset {
  return IPTV_BLOG_SECTION_IMAGES[sectionId] ?? IPTV_BLOG_IMAGE_FALLBACK;
}

export function sectionHeadingToId(heading: string): string | undefined {
  const n = heading.toLowerCase();
  if (n.includes("what is an iptv")) return "what-is";
  if (n.includes("top iptv boxes")) return "top-boxes-intro";
  if (n.includes("cheap iptv")) return "cheap";
  if (n.includes("premium iptv")) return "premium";
  if (n.includes("iptv box vs smart tv") || n.includes("vs smart tv")) return "vs-smart-tv";
  if (n.includes("how to choose")) return "how-to-choose";
  if (n.includes("frequently asked") || n.includes("faq")) return "faq";
  return undefined;
}

export function resolveImageFromHeading(heading: string): BlogImageAsset {
  const id = sectionHeadingToId(heading);
  if (id) return getSectionImageById(id);
  const key = normalizeBlogImageKey(heading);
  return IPTV_BLOG_SECTION_IMAGES[key] ?? IPTV_BLOG_IMAGE_FALLBACK;
}
