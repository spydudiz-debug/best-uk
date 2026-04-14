/**
 * IPTV “Best IPTV Boxes 2026” article — real product / hardware photography only.
 *
 * Sources: Wikimedia Commons (CC BY-SA / CC BY / CC0 / GFDL as per each file).
 * Device sections use the closest available Commons photo for that product; where
 * no exact model exists, alt text states the article heading and names the actual
 * hardware shown (or “same class as …”) — never unrelated abstract stock.
 *
 * Optional local filenames (for CMS / exports): see `localFilename` on each asset.
 */

export type BlogImageAsset = {
  src: string;
  alt: string;
};

export type TaggedImage = BlogImageAsset & { localFilename: string };

function pickAsset(t: TaggedImage): BlogImageAsset {
  return { src: t.src, alt: t.alt };
}

/** Base path on upload.wikimedia.org */
function wm(path: string): string {
  return `https://upload.wikimedia.org/wikipedia/commons${path}`;
}

/** Short title fragment for SEO alt text */
export const IPTV_BLOG_ALT_PREFIX = "Best IPTV Boxes 2026";

function img(asset: TaggedImage): TaggedImage {
  return asset;
}

/** When no slug matches (should not happen if data stays in sync). */
export const IPTV_BLOG_IMAGE_FALLBACK: TaggedImage = img({
  src: wm("/2/21/Remote_controll_%26_Amazon_Stick_4K_Max_%26_HDMI_Extension_cable.jpg"),
  alt: "Amazon Fire TV Stick 4K Max with Alexa Voice Remote and HDMI extension — IPTV streaming hardware",
  localFilename: "fire-tv-stick-4k-max-remote-hdmi-wikimedia.jpg",
});

/** Hero + /blog card: multi-piece real setup (stick, remote, HDMI) — matches guide theme. */
export const IPTV_BLOG_HERO: TaggedImage = img({
  src: wm("/2/21/Remote_controll_%26_Amazon_Stick_4K_Max_%26_HDMI_Extension_cable.jpg"),
  alt: `${IPTV_BLOG_ALT_PREFIX} — Amazon Fire TV Stick 4K Max, Alexa Voice Remote, and HDMI cable (real IPTV streaming hardware)`,
  localFilename: "hero-iptv-boxes-2026-firestick-remote-hdmi.jpg",
});

export const IPTV_BLOG_CARD_IMAGE: BlogImageAsset = pickAsset(IPTV_BLOG_HERO);

/**
 * Device review images — real product photos keyed by `IptvBoxReview.slug`.
 * Note: Nvidia uses Shield TV 2017 console (Pro shares the same product line on Commons).
 * Formuler / BuzzTV: Commons has no official packshots; we use the closest real IPTV STB photos and state that in alt text.
 */
export const IPTV_BOX_DEVICE_IMAGES: Record<string, TaggedImage> = {
  "fire-tv-stick-4k": img({
    src: wm("/b/b3/Amazon_Fire_TV_4k.jpg"),
    alt: "Amazon Fire TV 4K streaming player — Fire TV Stick 4K class IPTV device (product photo)",
    localFilename: "firestick-iptv-2026-amazon-fire-tv-4k-wikimedia.jpg",
  }),
  "nvidia-shield-tv-pro": img({
    src: wm("/e/e2/NVIDIA_SHIELD_TV_main_console.jpg"),
    alt: "Nvidia Shield TV console — Shield TV Pro class Android TV IPTV 4K HDR streaming box (product photo)",
    localFilename: "nvidia-shield-tv-pro-console-wikimedia.jpg",
  }),
  "formuler-z11-pro-max": img({
    src: wm("/3/39/Topway_4K_IP_set-top-boxBy_Skyworth_digital_E900V21C.jpg"),
    alt: "4K IP IPTV set-top box with on-screen UI — same STB class as Formuler Z11 Pro Max MYTVOnline hardware (Wikimedia product photo, Topway / Skyworth)",
    localFilename: "formuler-class-4k-iptv-stb-skyworth-wikimedia.jpg",
  }),
  "buzztv-x5": img({
    src: wm("/d/d6/Mview_IPTV.jpg"),
    alt: "Mview IPTV Android set-top box — retail IPTV streamer same category as BuzzTV X5 Android TV box (Wikimedia product photo)",
    localFilename: "buzztv-class-mview-iptv-box-wikimedia.jpg",
  }),
  "mag-box": img({
    src: wm("/f/fc/Motorola_IPTV.jpg"),
    alt: "Motorola IP IPTV set-top box — MAG-style operator IPTV receiver with front panel (Wikimedia product photo)",
    localFilename: "mag-class-motorola-iptv-stb-wikimedia.jpg",
  }),
  "xiaomi-mi-box-s": img({
    src: wm("/d/d1/Xiaomi_Mi_Box_S.jpg"),
    alt: "Xiaomi Mi Box S Android TV streamer with voice remote — IPTV-capable Android TV box (Wikimedia product photo)",
    localFilename: "xiaomi-mi-box-s-remote-wikimedia.jpg",
  }),
};

/** Section (H2) illustrations — all real hardware / connectivity, no abstract stock. */
export const IPTV_BLOG_SECTION_IMAGES: Record<string, TaggedImage> = {
  "what-is": img({
    src: wm("/1/17/Amazon_Fire_TV_Stick_HDMI.jpg"),
    alt: "Amazon Fire TV Stick with HDMI connector — what is an IPTV box: HDMI streaming stick hardware",
    localFilename: "what-is-iptv-fire-tv-stick-hdmi-wikimedia.jpg",
  }),
  "top-boxes-intro": img({
    src: wm("/5/5f/Fire-TV_Stick_and_Remote.jpg"),
    alt: "Amazon Fire TV Stick with Alexa Voice Remote — top IPTV boxes 2026 streaming hardware line-up",
    localFilename: "top-iptv-boxes-fire-tv-stick-remote-wikimedia.jpg",
  }),
  cheap: img({
    src: wm("/1/14/XIAOMI_HD_Internet_TV_Box.jpg"),
    alt: "Xiaomi HD Internet TV Box — budget Android IPTV streamer class hardware (Wikimedia product photo)",
    localFilename: "cheap-iptv-xiaomi-hd-box-wikimedia.jpg",
  }),
  premium: img({
    src: wm("/6/68/NVIDIA_SHIELD_TV_2017ver_console.jpg"),
    alt: "Nvidia Shield TV (2017) console — premium 4K IPTV Android TV flagship hardware (Wikimedia product photo)",
    localFilename: "premium-nvidia-shield-tv-console-wikimedia.jpg",
  }),
  "vs-smart-tv": img({
    src: wm("/7/7c/Deutsche_Telekom_Media_Receiver_400-5956.jpg"),
    alt: "Deutsche Telekom Media Receiver 400 IPTV set-top — external IPTV box vs built-in smart TV apps (Wikimedia product photo)",
    localFilename: "iptv-box-vs-smart-tv-telekom-receiver-wikimedia.jpg",
  }),
  "how-to-choose": img({
    src: wm("/d/d1/Xiaomi_Mi_Box_S.jpg"),
    alt: "Xiaomi Mi Box S with remote — choosing CPU, storage, and app support on an Android TV IPTV box (Wikimedia product photo)",
    localFilename: "how-to-choose-xiaomi-mi-box-s-wikimedia.jpg",
  }),
  faq: img({
    src: wm("/2/21/Remote_controll_%26_Amazon_Stick_4K_Max_%26_HDMI_Extension_cable.jpg"),
    alt: "Amazon Fire TV Stick 4K Max with remote — IPTV subscription, devices, and legal streaming FAQ",
    localFilename: "faq-iptv-firestick-remote-hdmi-wikimedia.jpg",
  }),
};

export function normalizeBlogImageKey(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function buildDynamicSectionAlt(sectionTitle: string, keywordContext: string): string {
  const clean = sectionTitle.replace(/\s+/g, " ").trim();
  return `${IPTV_BLOG_ALT_PREFIX} — ${clean}: ${keywordContext}`;
}

export function getDeviceImageForSlug(deviceSlug: string): BlogImageAsset {
  return pickAsset(IPTV_BOX_DEVICE_IMAGES[deviceSlug] ?? IPTV_BLOG_IMAGE_FALLBACK);
}

export function getSectionImageById(sectionId: string): BlogImageAsset {
  return pickAsset(IPTV_BLOG_SECTION_IMAGES[sectionId] ?? IPTV_BLOG_IMAGE_FALLBACK);
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
  const raw = IPTV_BLOG_SECTION_IMAGES[key];
  return raw ? pickAsset(raw) : pickAsset(IPTV_BLOG_IMAGE_FALLBACK);
}
