/**
 * Landing URL slug rules:
 * lowercase, spaces → hyphens, strip quotes & most special characters.
 */
export function keywordToSlug(keyword: string): string {
  return keyword
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['"’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
