import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
  if (!guide) {
    return { title: "Setup Guide" };
  }
  return {
    title: guide.page.metaTitle,
    description: guide.page.metaDescription,
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
