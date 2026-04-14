import { IPTV_BLOG_CARD_IMAGE } from "@/lib/iptv-blog-images";

export type BlogPostListItem = {
  slug: string;
  title: string;
  excerpt: string;
  datePublished: string;
  readTime: string;
  image: { src: string; alt: string };
  metaTitle: string;
  metaDescription: string;
};

/** Published posts (order = display order on /blog). */
export const BLOG_POSTS: BlogPostListItem[] = [
  {
    slug: "iptv-box-2026",
    title: "The Best IPTV Boxes in 2026 – Complete Streaming Guide",
    excerpt:
      "Compare Fire TV, Nvidia Shield, Formuler, BuzzTV, MAG, and Mi Box-class hardware. Learn what to buy for 4K IPTV, portal workflows, and Android TV in one full guide.",
    datePublished: "2026-04-13",
    readTime: "12 min read",
    image: IPTV_BLOG_CARD_IMAGE,
    metaTitle: "Best IPTV Boxes in 2026 – Top Streaming Devices",
    metaDescription:
      "Discover the best IPTV boxes in 2026. Compare Firestick, Nvidia Shield, Formuler & more. Start streaming today.",
  },
];

export function getBlogPostBySlug(slug: string): BlogPostListItem | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
