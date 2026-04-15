import Image from "next/image";
import Link from "next/link";
import BlogContentImage from "@/components/blog/BlogContentImage";
import ResellerProfitCalculator from "@/components/blog/ResellerProfitCalculator";
import {
  CREDIT_BY_MONTHS,
  PROFIT_TABLE_EXAMPLES,
  RESELLER_FAQ,
  RESELLER_PACKS,
  RESELLER_TAGS,
} from "@/data/blog-reseller-uk-2026";
import {
  RESELLER_BLOG_HERO,
  RESELLER_BLOG_INLINE_STREAMING,
  RESELLER_BLOG_INLINE_UK_SERVICE,
} from "@/lib/reseller-blog-images";
import { SITE_URLS, externalTabProps } from "@/lib/site-urls";

function CtaReseller({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href={SITE_URLS.resellerPackages}
      {...externalTabProps}
      className={`inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-cta px-8 py-3.5 text-sm font-semibold text-[#020617] shadow-glow ring-1 ring-white/10 transition hover:brightness-110 ${className}`}
    >
      {label}
    </a>
  );
}

function CtaTrial({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href={SITE_URLS.freeTrial}
      {...externalTabProps}
      className={`inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-8 py-3.5 text-sm font-semibold text-white transition hover:border-accent-cyan/40 hover:bg-white/[0.09] ${className}`}
    >
      {label}
    </a>
  );
}

export default function ResellerUk2026Article() {
  return (
    <article className="pb-4" itemScope itemType="https://schema.org/Article">
      <meta itemProp="datePublished" content="2026-04-15" />
      <header className="mb-12">
        <div className="relative aspect-[16/9] min-h-[200px] w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-slate-900/50 shadow-hero">
          <Image
            src={RESELLER_BLOG_HERO.src}
            alt={RESELLER_BLOG_HERO.alt}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/85 via-transparent to-transparent" />
        </div>

        <h1
          className="mt-8 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.35rem]"
          itemProp="headline"
        >
          Best IPTV Reseller UK 2026 — The Complete Guide
        </h1>

        <p className="mt-4 text-sm text-body-muted">
          <time dateTime="2026-04-15">April 2026</time>
          <span className="mx-2 text-white/20" aria-hidden>
            ·
          </span>
          <span>About 14 min read</span>
        </p>

        <p className="mt-6 text-lg leading-relaxed text-body sm:text-xl">
          Want a real side income stream with low stock and fast activation? A modern{" "}
          <strong className="text-white/95">IPTV reseller UK 2026</strong> playbook lets you buy
          credits once, issue customer lines from your{" "}
          <strong className="text-white/95">IPTV reseller panel UK</strong>, and reinvest profit as
          you learn what sells in London, Manchester, and beyond — without pretending earnings are
          guaranteed overnight.
        </p>
      </header>

      <div className="space-y-5 text-base leading-relaxed text-body">
        <p>
          An <strong className="text-white/95">IPTV reseller business</strong> means you purchase
          wholesale access (usually as credits) from a provider, then retail subscriptions to
          viewers who want flexible viewing on smart TVs, Firesticks, and mobiles. In 2026, UK
          audiences continue cutting traditional bundles; that shift keeps demand high for a{" "}
          <strong className="text-white/95">cheap IPTV UK subscription</strong> positioned with clear
          support and stable streams — especially when you pair{" "}
          <strong className="text-white/95">IPTV vs cable TV UK</strong> savings stories with honest
          setup help.
        </p>
        <p>
          When people search{" "}
          <strong className="text-white/95">buy IPTV reseller credits</strong> or{" "}
          <strong className="text-white/95">IPTV reseller panel buy</strong>, they are comparing{" "}
          <strong className="text-white/95">IPTV reseller subscription price</strong>, panel ease, and
          whether the <strong className="text-white/95">IPTV reseller server UK</strong> route can
          handle peak football nights. ScopMedia-style infrastructure — UK-oriented delivery, quick
          activation, and a panel that does not feel like a science project — is what separates a
          hobby from a business you can repeat month after month.
        </p>
        <p>
          Passive income is never zero-effort: you still answer tickets, chase renewals, and tune
          apps. But the model scales because you are not warehousing boxes — you are moving{" "}
          <strong className="text-white/95">IPTV channels UK list</strong> value through software.
          If you want operational depth, pair this article with our{" "}
          <Link href="/setup-guide" className="font-medium text-accent-cyan underline-offset-4 hover:underline">
            IPTV setup guide step by step
          </Link>{" "}
          so customers stop blaming Wi‑Fi for every <strong className="text-white/95">IPTV not working fix</strong>{" "}
          request before you do.
        </p>
      </div>

      <BlogContentImage {...RESELLER_BLOG_INLINE_STREAMING} className="mt-10 mb-10" />

      <section className="mt-14" aria-labelledby="what-is-heading">
        <h2 id="what-is-heading" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          What is an IPTV reseller?
        </h2>
        <p className="mt-5">
          You are the account owner: you <strong className="text-white/95">buy IPTV reseller package</strong>{" "}
          tiers that refill credits, then you create end-user logins or MAC lines depending on panel
          features. Your buyers get app-friendly access; you manage renewals and support. That is the
          core of any <strong className="text-white/95">best IPTV reseller service</strong> positioning —
          transparent pricing, working EPG, and adults who actually answer chat.
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-accent-cyan/80">
          <li>
            <strong className="text-white/95">IPTV reseller panel</strong> access to create, suspend,
            and extend customers without shipping hardware.
          </li>
          <li>
            Credits act as inventory — you consume them when you allocate subscription length (see the
            credit table below).
          </li>
          <li>
            Margins come from the gap between your wholesale credit cost and the retail price you
            charge — track it like any IPTV business profit in UK spreadsheet.
          </li>
          <li>
            Success still requires basics: explain{" "}
            <strong className="text-white/95">best IPTV app for smart TV</strong> choices, share buffer
            tips, and document <strong className="text-white/95">IPTV buffering solution</strong> steps.
          </li>
        </ul>
      </section>

      <section className="mt-14" aria-labelledby="how-works-heading">
        <h2 id="how-works-heading" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          How IPTV reseller works
        </h2>
        <ol className="mt-6 list-decimal space-y-4 pl-5 marker:text-accent-cyan/90">
          <li>
            <strong className="text-white/95">Buy credits</strong> — choose a reseller bundle that
            matches your expected volume; cheaper cost-per-credit usually means less panic when you
            comp a month for retention.
          </li>
          <li>
            <strong className="text-white/95">Create users</strong> — provision lines in your panel,
            match duration to credits, and send app credentials with a clear onboarding link.
          </li>
          <li>
            <strong className="text-white/95">Sell subscriptions</strong> — invoice weekly, monthly, or
            per season; automate reminders so churn does not silently eat IPTV reseller earning proof
            you thought you had.
          </li>
          <li>
            <strong className="text-white/95">Earn profit</strong> — reinvest into ads, support tools,
            or the next credit block once your net margin proves repeatable.
          </li>
        </ol>
      </section>

      <BlogContentImage {...RESELLER_BLOG_INLINE_UK_SERVICE} className="mt-12 mb-10" />

      <section className="mt-14" aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Reseller pricing (example packs)
        </h2>
        <p className="mt-5">
          Ready to <strong className="text-white/95">buy IPTV reseller package</strong> inventory? The
          numbers below are structured examples — confirm live{" "}
          <strong className="text-white/95">IPTV reseller UK price</strong> on the store before you
          checkout.{" "}
          <strong className="text-white/95">Cheap IPTV reseller panel</strong> does not mean
          cutting support: it means lean credit math.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {RESELLER_PACKS.map((p) => (
            <div
              key={p.id}
              className="flex flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-slate-950/80 p-6 shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-accent-cyan">{p.name}</p>
              <p className="mt-3 text-3xl font-bold text-white">
                £{p.priceGbp}
                <span className="text-base font-normal text-body"> / pack</span>
              </p>
              <p className="mt-2 text-sm text-body">{p.credits} credits included</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-body">{p.blurb}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CtaReseller label="Buy Reseller Package" />
          <span className="text-xs text-body-muted">
            Opens ScopMedia reseller store — compare before you commit.
          </span>
        </div>
      </section>

      <section className="mt-16" aria-labelledby="credits-heading">
        <h2 id="credits-heading" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          How credits work
        </h2>
        <p className="mt-5">
          Credits are the currency inside your <strong className="text-white/95">IPTV reseller account for sale</strong>{" "}
          workflow: longer customer plans consume more credits. Use the table to quote confidently when
          someone asks for a custom duration.
        </p>
        <div className="mt-8 overflow-x-auto rounded-xl border border-white/[0.08]">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-xs font-semibold uppercase tracking-wide text-body-muted">
                <th className="px-4 py-3">Customer plan length</th>
                <th className="px-4 py-3">Credits used</th>
              </tr>
            </thead>
            <tbody className="text-body">
              {CREDIT_BY_MONTHS.map((row) => (
                <tr key={row.months} className="border-b border-white/[0.06]">
                  <td className="px-4 py-3 text-white">{row.label}</td>
                  <td className="px-4 py-3">{row.credits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16" aria-labelledby="profit-heading">
        <h2 id="profit-heading" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Profit calculator &amp; example table
        </h2>
        <p className="mt-5">
          Model <strong className="text-white/95">IPTV business profit in UK</strong> scenarios before
          you promise friends a yacht. The static table shows illustrative retail ideas; your market
          might be higher or lower depending on support load and brand trust.
        </p>

        <div className="mt-8 overflow-x-auto rounded-xl border border-white/[0.08]">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-xs font-semibold uppercase tracking-wide text-body-muted">
                <th className="px-4 py-3">Plan</th>
                <th className="px-4 py-3">Cost price (illustrative)</th>
                <th className="px-4 py-3">Selling price</th>
                <th className="px-4 py-3">Profit</th>
              </tr>
            </thead>
            <tbody className="text-body">
              {PROFIT_TABLE_EXAMPLES.map((row) => (
                <tr key={row.plan} className="border-b border-white/[0.06]">
                  <td className="px-4 py-3 text-white">{row.plan}</td>
                  <td className="px-4 py-3">{row.costPrice}</td>
                  <td className="px-4 py-3">{row.sellingPrice}</td>
                  <td className="px-4 py-3 text-emerald-400/95">{row.profit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <ResellerProfitCalculator />
        </div>
      </section>

      <section
        className="mt-14 rounded-2xl border border-accent-cyan/25 bg-gradient-to-br from-accent-cyan/[0.08] to-slate-900/90 p-8 text-center sm:p-10"
        aria-labelledby="mid-cta-heading"
      >
        <h2 id="mid-cta-heading" className="text-2xl font-bold text-white sm:text-3xl">
          Start IPTV Reseller Now
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-body">
          If you are serious about <strong className="text-white/95">start IPTV business reseller</strong>{" "}
          growth, grab a package, learn the panel tonight, and message your first five prospects with
          a clean offer — momentum beats another week of research tabs.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaReseller label="Buy IPTV reseller panel now" />
        </div>
      </section>

      <section className="mt-16" aria-labelledby="best-heading">
        <h2 id="best-heading" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          What makes us a strong partner
        </h2>
        <ul className="mt-6 space-y-3 text-body">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
            <span>
              <strong className="text-white/95">UK servers &amp; routing tuned for local peaks</strong>{" "}
              — helps you defend quality claims for <strong className="text-white/95">IPTV service London</strong>{" "}
              buyers and nationwide sports fans alike.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
            <span>
              <strong className="text-white/95">Fast activation</strong> so your first customers do not
              ghost you while credits sit unused.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
            <span>
              <strong className="text-white/95">24/7 support</strong> for escalations you cannot solve
              inside the panel — critical when you pitch{" "}
              <strong className="text-white/95">best IPTV reseller panel 2026</strong> credibility.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
            <span>
              <strong className="text-white/95">High-quality streams</strong> with realistic bitrate
              expectations — fewer refund chats, more renewals.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
            <span>
              <strong className="text-white/95">Easy panel workflows</strong> so you spend minutes,
              not hours, when you <strong className="text-white/95">install IPTV on Android TV</strong>{" "}
              test devices for clients.
            </span>
          </li>
        </ul>
      </section>

      <section className="mt-14" aria-labelledby="steps-heading">
        <h2 id="steps-heading" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          How to start (four moves)
        </h2>
        <p className="mt-5">
          If you are mapping{" "}
          <strong className="text-white/95">how to start IPTV reseller business in UK</strong>{" "}
          without guesswork, treat the checklist below as your launch sequence — credits first, panel
          second, customers third, then iterate on pricing.
        </p>
        <ol className="mt-6 list-decimal space-y-4 pl-5 marker:font-semibold marker:text-accent-cyan">
          <li>
            <strong className="text-white/95">Buy reseller package</strong> — align credits with the
            audience size you can actually onboard this month.
          </li>
          <li>
            <strong className="text-white/95">Get panel access</strong> — secure your login, enable 2FA if
            offered, and label test accounts clearly.
          </li>
          <li>
            <strong className="text-white/95">Create users</strong> — start with friends-and-family
            pricing to gather testimonials and iron out{" "}
            <strong className="text-white/95">how to install IPTV on Android TV</strong> instructions.
          </li>
          <li>
            <strong className="text-white/95">Start selling</strong> — publish your offer, collect
            payments, and schedule renewals before credits expire on idle trials.
          </li>
        </ol>
        <p className="mt-8 text-sm text-body-muted">
          Need a consumer-facing angle too? Mention{" "}
          <Link href="/blog/iptv-box-2026" className="text-accent-cyan hover:underline">
            IPTV hardware picks
          </Link>{" "}
          when buyers ask which box to buy — it keeps your consultative positioning credible.
        </p>
      </section>

      <section className="mt-16" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-8 space-y-3">
          {RESELLER_FAQ.map((item) => (
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
              <p className="mt-3 border-t border-white/[0.06] pt-3 text-sm leading-relaxed text-body">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section
        className="mt-16 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-slate-900/90 to-[#020617] p-8 text-center sm:p-12"
        aria-labelledby="final-cta-heading"
      >
        <h2 id="final-cta-heading" className="text-2xl font-bold text-white sm:text-3xl">
          Ready to Start Your IPTV Reseller Business?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-body">
          <strong className="text-white/95">Contact us for reseller account</strong> questions through
          official ScopMedia channels after you review packages — bring your target retail price and we
          can help sanity-check credit usage. When you are ready,{" "}
          <strong className="text-white/95">buy IPTV reseller panel now</strong> or trial the viewer
          experience first.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaReseller label="Buy Now" />
          <CtaTrial label="Get Free Trial" />
        </div>
      </section>

      <footer className="mt-14 border-t border-white/[0.06] pt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-body-muted">Tags</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {RESELLER_TAGS.map((tag) => (
            <li key={tag}>
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-body">
                #{tag}
              </span>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
}
