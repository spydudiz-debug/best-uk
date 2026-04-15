import type { MetadataRoute } from "next";
import type { LandingCluster } from "@/data/seo-landings/types";
import { getAllGuideSlugs } from "@/data/setup-guides";
import { getAllLandingSlugs, getLandingBySlug } from "@/data/seo-landings/registry";
import { absoluteUrl, getSiteUrl } from "@/lib/site-origin";

/**
 * Dynamic sitemap for Google Search Console.
 * - Blog routes are EXCLUDED (per project SEO rules).
 * - New keyword landings auto-appear via registry slugs.
 * - Priorities: home 1.0, main service + reseller 0.9, location 0.8, other 0.7
 */

const MAIN_SERVICE_PRIORITY = 0.9;
const RESELLER_PRIORITY = 0.9;
const LOCATION_PRIORITY = 0.8;
const OTHER_PRIORITY = 0.7;

function landingPriority(cluster: LandingCluster): number {
  switch (cluster) {
    case "reseller":
      return RESELLER_PRIORITY;
    case "regional":
      return LOCATION_PRIORITY;
    case "legal":
    case "edu":
    case "brand":
    case "sports":
      return OTHER_PRIORITY;
    default:
      return MAIN_SERVICE_PRIORITY;
  }
}

function landingChangeFreq(cluster: LandingCluster): "weekly" | "monthly" {
  return cluster === "legal" || cluster === "edu" ? "monthly" : "weekly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = getSiteUrl();

  const entries: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/setup-guide"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: MAIN_SERVICE_PRIORITY,
    },
  ];

  for (const slug of getAllGuideSlugs()) {
    entries.push({
      url: absoluteUrl(`/setup-guide/${slug}`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: MAIN_SERVICE_PRIORITY,
    });
  }

  for (const slug of getAllLandingSlugs()) {
    const def = getLandingBySlug(slug);
    const cluster = def?.cluster ?? "core";
    const pr = landingPriority(cluster);
    entries.push({
      url: absoluteUrl(`/${slug}`),
      lastModified: now,
      changeFrequency: landingChangeFreq(cluster),
      priority: pr,
    });
  }

  return entries;
}
