import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  /** Hero / first meaningful image */
  priority?: boolean;
  /** Figure spacing (default: bottom margin for article rhythm) */
  className?: string;
};

/**
 * Consistent 16:10 blog figure: rounded, bordered, lazy by default.
 */
export default function BlogContentImage({
  src,
  alt,
  priority = false,
  className = "mb-10",
}: Props) {
  return (
    <figure className={className}>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-slate-900/40">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover"
        />
      </div>
    </figure>
  );
}
