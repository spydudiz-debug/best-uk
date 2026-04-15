import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetaTitle } from "@/lib/site-meta-title";
import { slugToPageKeyword } from "@/lib/page-keyword-from-slug";
import {
  getAllGuideSlugs,
  getGuideBySlug,
  type SetupGuideSlug,
} from "@/data/setup-guides";
import SetupGuideShell from "@/components/setup-guide/SetupGuideShell";
import SetupGuideDeviceArticle from "@/components/setup-guide/SetupGuideDeviceArticle";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams(): Promise<{ slug: SetupGuideSlug }[]> {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  const fullTitle = guide
    ? buildMetaTitle(guide.title)
    : buildMetaTitle(slugToPageKeyword(slug));
  if (!guide) {
    return { title: fullTitle };
  }
  return {
    title: fullTitle,
    description: guide.page.metaDescription,
    openGraph: {
      title: fullTitle,
      description: guide.page.metaDescription,
      type: "website",
    },
  };
}

export default async function SetupGuideDevicePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) {
    notFound();
  }

  return (
    <SetupGuideShell maxWidthClass="max-w-3xl">
      <SetupGuideDeviceArticle guide={guide} />
    </SetupGuideShell>
  );
}
