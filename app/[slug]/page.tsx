import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetaTitle } from "@/lib/site-meta-title";
import { slugToPageKeyword } from "@/lib/page-keyword-from-slug";
import SetupGuideShell from "@/components/setup-guide/SetupGuideShell";
import SeoLandingPage from "@/components/seo-landing/SeoLandingPage";
import { buildLandingContent } from "@/data/seo-landings/build-landing-copy";
import { getAllLandingSlugs, getLandingBySlug } from "@/data/seo-landings/registry";
import { absoluteUrl } from "@/lib/site-origin";

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
    return {
      title: fullTitle,
      alternates: { canonical: `/${slug}` },
      robots: { index: true, follow: true },
    };
  }
  const c = buildLandingContent(def);
  const path = `/${slug}`;
  return {
    title: fullTitle,
    description: c.metaDescription,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description: c.metaDescription,
      type: "website",
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: c.metaDescription,
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
  const canonicalUrl = absoluteUrl(`/${slug}`);
  return (
    <SetupGuideShell maxWidthClass="max-w-3xl">
      <SeoLandingPage content={content} canonicalUrl={canonicalUrl} />
    </SetupGuideShell>
  );
}
