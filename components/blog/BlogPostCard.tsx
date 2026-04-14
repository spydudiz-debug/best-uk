import Image from "next/image";
import Link from "next/link";
import type { BlogPostListItem } from "@/data/blog-posts";

type Props = {
  post: BlogPostListItem;
};

export default function BlogPostCard({ post }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition hover:border-accent-cyan/25 hover:bg-white/[0.05]">
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-1 flex-col outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]"
        aria-label={`Read more: ${post.title}`}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900/50">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="text-xs text-body-muted">
            <time dateTime={post.datePublished}>
              {new Date(post.datePublished).toLocaleDateString("en-GB", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span className="mx-2 text-white/20" aria-hidden>
              ·
            </span>
            {post.readTime}
          </p>
          <h2 className="mt-3 text-lg font-semibold leading-snug text-white transition group-hover:text-accent-cyan/95 sm:text-xl">
            {post.title}
          </h2>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{post.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-cyan">
            Read more
            <span aria-hidden className="transition group-hover:translate-x-0.5">
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
