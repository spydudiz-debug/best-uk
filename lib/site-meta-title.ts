/**
 * Shared suffix for `<title>` on non-blog routes:
 * `[Page Keyword] - Best IPTV Provider UK 2026 - IPTV Reseller or IPTV Trial Now`
 */
export const SITE_META_TITLE_SUFFIX =
  "Best IPTV Provider UK 2026 - IPTV Reseller or IPTV Trial Now" as const;

/** Home page (`/`) — matches Hero brand emphasis; not a slug-derived keyword. */
export const HOME_PAGE_META_KEYWORD = "ScopMedia" as const;

/** Setup guide hub (`/setup-guide`) — matches page H1. */
export const SETUP_GUIDE_HUB_KEYWORD = "IPTV Setup Guide" as const;

/**
 * Builds a single clean document title. Avoid string concatenation bugs by using this only.
 */
export function buildMetaTitle(pageKeyword: string): string {
  const k = pageKeyword.trim();
  if (!k) {
    return SITE_META_TITLE_SUFFIX;
  }
  return `${k} - ${SITE_META_TITLE_SUFFIX}`;
}
