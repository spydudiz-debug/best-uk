import type { Metadata } from "next";
import SetupGuideShell from "@/components/setup-guide/SetupGuideShell";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { BLOG_POSTS } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog | ScopMedia — IPTV Guides & Streaming Tips",
  description:
    "Read ScopMedia guides on IPTV devices, subscriptions, setup, and streaming in 2026. Expert tips for Firestick, Smart TV, Android TV, and more.",
  openGraph: {
    title: "Blog | ScopMedia — IPTV Guides & Streaming Tips",
    description:
      "Read ScopMedia guides on IPTV devices, subscriptions, setup, and streaming in 2026.",
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <SetupGuideShell maxWidthClass="max-w-6xl">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Blog
        </h1>
        <p className="mt-4 text-base text-body sm:text-lg">
          Guides and articles on IPTV hardware, subscriptions, and getting the most from your
          streaming setup.
        </p>
      </header>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </SetupGuideShell>
  );
}
