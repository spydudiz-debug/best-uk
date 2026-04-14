import { SITE_URLS, externalTabProps } from "@/lib/site-urls";

type Props = {
  label?: string;
  className?: string;
};

/** Centered store CTA matching site gradient button style. */
export default function BlogSubscriptionCta({
  label = "Buy IPTV Subscription",
  className = "",
}: Props) {
  return (
    <div className={`my-12 flex justify-center px-2 ${className}`}>
      <a
        href={SITE_URLS.iptvSubscriptions}
        {...externalTabProps}
        className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-cta px-8 py-3.5 text-sm font-semibold text-[#020617] shadow-glow ring-1 ring-white/10 transition hover:brightness-110 hover:shadow-glow-sm"
      >
        {label}
      </a>
    </div>
  );
}
