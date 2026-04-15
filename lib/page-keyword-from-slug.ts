/**
 * Converts a URL slug into a readable page keyword (Title Case + common IPTV acronyms).
 * Example: "iptv-4k-streaming-uk" → "IPTV 4K Streaming UK"
 */
const TOKEN_MAP: Record<string, string> = {
  iptv: "IPTV",
  uk: "UK",
  usa: "USA",
  uae: "UAE",
  ufc: "UFC",
  bt: "BT",
  tv: "TV",
  vod: "VOD",
  pc: "PC",
  hd: "HD",
  m3u: "M3U",
  m3u8: "M3U8",
  ios: "iOS",
  mac: "Mac",
  android: "Android",
  windows: "Windows",
  xtream: "Xtream",
  xciptv: "XCIPTV",
  scopmedia: "ScopMedia",
  tivimate: "TiviMate",
  smarters: "Smarters",
  firestick: "Firestick",
  firetv: "Fire TV",
  smart: "Smart",
  bein: "beIN",
  sky: "Sky",
};

function formatToken(token: string): string {
  const lower = token.toLowerCase();
  if (TOKEN_MAP[lower]) {
    return TOKEN_MAP[lower]!;
  }
  if (lower === "4k") {
    return "4K";
  }
  if (/^\d{4}$/.test(token)) {
    return token;
  }
  if (/^\d+k$/i.test(token)) {
    return token.replace(/k$/i, "K");
  }
  if (token.length === 0) {
    return token;
  }
  return token.charAt(0).toUpperCase() + token.slice(1).toLowerCase();
}

export function slugToPageKeyword(slug: string): string {
  const trimmed = slug.trim();
  if (!trimmed) {
    return "";
  }
  return trimmed
    .split("-")
    .filter(Boolean)
    .map(formatToken)
    .join(" ");
}
