/**
 * Canonical site origin for metadata, sitemap, and JSON-LD.
 * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://scopmedia.com).
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "https://scopmedia.com";
  const noTrail = raw.replace(/\/+$/, "");
  if (noTrail.startsWith("http://") || noTrail.startsWith("https://")) {
    return noTrail;
  }
  return `https://${noTrail}`;
}

/** Absolute URL for a path (must start with `/`). */
export function absoluteUrl(path: string): string {
  const base = getSiteUrl().replace(/\/+$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
