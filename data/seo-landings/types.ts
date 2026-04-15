export type LandingCluster =
  | "core"
  | "formats"
  | "subscription"
  | "devices"
  | "apps"
  | "xtream"
  | "reseller"
  | "sports"
  | "regional"
  | "quality"
  | "legal"
  | "streaming_tv"
  | "edu"
  | "uk_commercial"
  | "brand";

export type LandingDefinition = {
  keyword: string;
  slug: string;
  cluster: LandingCluster;
};

export type LandingFAQItem = { q: string; a: string };

export type LandingBuiltContent = {
  keyword: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  introParagraphs: string[];
  featureItems: { title: string; body: string }[];
  useCaseParagraphs: string[];
  faq: LandingFAQItem[];
  wordCountApprox: number;
};
