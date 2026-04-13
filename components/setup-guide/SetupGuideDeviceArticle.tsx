import type { SetupGuideDevice } from "@/data/setup-guides";
import SetupGuideBreadcrumb from "@/components/setup-guide/SetupGuideBreadcrumb";
import { SITE_URLS, externalTabProps } from "@/lib/site-urls";

type Props = {
  guide: SetupGuideDevice;
};

export default function SetupGuideDeviceArticle({ guide }: Props) {
  const { page: p } = guide;

  return (
    <>
      <SetupGuideBreadcrumb currentLabel={guide.title} />

      <article className="max-w-none">
        <header className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.35rem] md:leading-tight">
            How to Set Up IPTV on {p.h1DeviceName}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-body sm:text-lg">{p.intro}</p>
        </header>

        <section className="mb-12" aria-labelledby="requirements-heading">
          <h2
            id="requirements-heading"
            className="mb-4 text-xl font-semibold tracking-tight text-white sm:text-2xl"
          >
            Requirements
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-accent-cyan/80">
            {p.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12" aria-labelledby="steps-heading">
          <h2
            id="steps-heading"
            className="mb-6 text-xl font-semibold tracking-tight text-white sm:text-2xl"
          >
            Step-by-step setup
          </h2>
          <div className="space-y-10">
            {p.steps.map((step, stepIndex) => (
              <section
                key={step.title}
                aria-labelledby={`step-${guide.slug}-${stepIndex}`}
              >
                <h3
                  id={`step-${guide.slug}-${stepIndex}`}
                  className="scroll-mt-28 text-lg font-semibold text-white"
                >
                  {step.title}
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-accent-cyan/80">
                  {step.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="mb-12" aria-labelledby="troubleshooting-heading">
          <h2
            id="troubleshooting-heading"
            className="mb-4 text-xl font-semibold tracking-tight text-white sm:text-2xl"
          >
            Troubleshooting
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-accent-cyan/80">
            {p.troubleshooting.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12" aria-labelledby="tips-heading">
          <h2 id="tips-heading" className="mb-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Tips
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-accent-cyan/80">
            {p.tips.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/[0.08] pt-8 sm:flex-row sm:flex-wrap">
          <a
            href="mailto:support@scopmedia.com?subject=IPTV%20setup%20help"
            className="inline-flex items-center justify-center rounded-full border border-border-subtle bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-accent-cyan/30 hover:text-accent-cyan"
          >
            Need help?
          </a>
          <a
            href={SITE_URLS.iptvSubscriptions}
            {...externalTabProps}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent-cyan/90 to-sky-600 px-5 py-2.5 text-sm font-semibold text-[#020617]"
          >
            View IPTV subscriptions
          </a>
        </footer>
      </article>
    </>
  );
}
