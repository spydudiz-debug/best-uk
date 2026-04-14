import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SetupGuideShell from "@/components/setup-guide/SetupGuideShell";
import IptvBoxes2026Article from "@/components/blog/IptvBoxes2026Article";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/data/blog-posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Blog" };
  }
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }

  switch (slug) {
    case "iptv-box-2026":
      return (
        <SetupGuideShell maxWidthClass="max-w-3xl">
          <IptvBoxes2026Article />
        </SetupGuideShell>
      );
    default:
      notFound();
  }
}
