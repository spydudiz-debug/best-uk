import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetaTitle } from "@/lib/site-meta-title";
import { slugToPageKeyword } from "@/lib/page-keyword-from-slug";
import SetupGuideShell from "@/components/setup-guide/SetupGuideShell";
import SeoLandingPage from "@/components/seo-landing/SeoLandingPage";
import { buildLandingContent } from "@/data/seo-landings/build-landing-copy";
import { getAllLandingSlugs, getLandingBySlug } from "@/data/seo-landings/registry";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** Only prebuilt keyword landings resolve; unknown slugs 404. */
export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const def = getLandingBySlug(slug);
  const keyword = def ? def.keyword : slugToPageKeyword(slug);
  const fullTitle = buildMetaTitle(keyword);
  if (!def) {
    return { title: fullTitle };
  }
  const c = buildLandingContent(def);
  return {
    title: fullTitle,
    description: c.metaDescription,
    openGraph: {
      title: fullTitle,
      description: c.metaDescription,
      type: "website",
    },
  };
}

export default async function KeywordLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const def = getLandingBySlug(slug);
  if (!def) {
    notFound();
  }
  const content = buildLandingContent(def);
  return (
    <SetupGuideShell maxWidthClass="max-w-3xl">
      <SeoLandingPage content={content} />
    </SetupGuideShell>
  );
}
