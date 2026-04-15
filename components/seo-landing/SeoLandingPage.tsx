import type { LandingBuiltContent } from "@/data/seo-landings/types";
import { SITE_URLS, externalTabProps } from "@/lib/site-urls";

type Props = {
  content: LandingBuiltContent;
};

export default function SeoLandingPage({ content }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: content.h1,
    description: content.metaDescription,
    isPartOf: { "@type": "WebSite", name: "ScopMedia" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content={content.h1} />
        <meta itemProp="description" content={content.metaDescription} />

        <header className="border-b border-white/[0.06] pb-10">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.1rem]">
            {content.h1}
          </h1>
          <p className="mt-3 text-sm text-body-muted">Commercial guide · updated for 2026</p>
        </header>

        <section className="mt-10 space-y-5 text-base leading-relaxed text-body" aria-labelledby="intro-heading">
          <h2 id="intro-heading" className="sr-only">
            Introduction
          </h2>
          {content.introParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        <section className="mt-14" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Features &amp; benefits
          </h2>
          <ul className="mt-8 space-y-8">
            {content.featureItems.map((f) => (
              <li key={f.title} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-3 text-body">{f.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14" aria-labelledby="use-cases-heading">
          <h2 id="use-cases-heading" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Use cases
          </h2>
          <div className="mt-8 space-y-6 text-body">
            {content.useCaseParagraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            FAQ
          </h2>
          <div className="mt-8 space-y-3">
            {content.faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 transition hover:border-white/15"
              >
                <summary className="cursor-pointer list-none font-semibold text-white [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-3">
                    {item.q}
                    <span className="text-accent-cyan transition group-open:rotate-180" aria-hidden>
                      ▼
                    </span>
                  </span>
                </summary>
                <p className="mt-3 border-t border-white/[0.06] pt-3 text-sm leading-relaxed text-body">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          className="mt-16 rounded-2xl border border-accent-cyan/25 bg-gradient-to-br from-accent-cyan/[0.08] to-slate-900/90 p-8 text-center sm:p-10"
          aria-labelledby="cta-heading"
        >
          <h2 id="cta-heading" className="text-2xl font-bold text-white sm:text-3xl">
            Start with ScopMedia
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body">
            Try the service on your own devices, then pick a plan that matches your screens. Transparent renewals,
            UK-friendly support, and straightforward setup.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={SITE_URLS.iptvSubscriptions}
              {...externalTabProps}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-cta px-8 py-3.5 text-sm font-semibold text-[#020617] shadow-glow ring-1 ring-white/10 transition hover:brightness-110"
            >
              View IPTV subscriptions
            </a>
            <a
              href={SITE_URLS.freeTrial}
              {...externalTabProps}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-8 py-3.5 text-sm font-semibold text-white transition hover:border-accent-cyan/40 hover:bg-white/[0.09]"
            >
              Get free trial
            </a>
          </div>
        </section>
      </article>
    </>
  );
}
