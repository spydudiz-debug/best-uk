import type { LandingCluster, LandingDefinition, LandingBuiltContent, LandingFAQItem } from "./types";
import {
  clusterOpening,
  closingIntro,
  hashSeed,
  midParagraph,
} from "./copy-blocks";

function wc(text: string): number {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function buildMeta(keyword: string, slug: string, cluster: LandingCluster): { title: string; description: string } {
  const baseBrand = "ScopMedia";
  let title = `${keyword} — ${baseBrand} (2026)`;
  if (title.length > 62) {
    title = `${keyword} | ${baseBrand}`;
  }
  if (title.length > 62) {
    title = title.slice(0, 59).trimEnd() + "…";
  }

  const descVariants = [
    `${keyword}: UK-focused IPTV guide for 2026—features to demand, devices to test, FAQs, and how to start with ${baseBrand}.`,
    `Explore ${keyword} with a commercial, practical lens: streaming quality, UK peak-time performance, setup tips, and ${baseBrand} next steps.`,
    `${keyword} explained for buyers: what to verify, common pitfalls, sports and family use cases, plus ${baseBrand} trials and subscriptions.`,
  ];
  const description = descVariants[hashSeed(slug) % descVariants.length]!;
  const clean = description.length > 160 ? description.slice(0, 157).trimEnd() + "…" : description;
  if (cluster === "legal") {
    const legalDesc = `${keyword}: informational UK overview—rights, risks, and lawful choices. Not legal advice; verify providers and seek professional guidance.`;
    return { title, description: legalDesc.length > 160 ? legalDesc.slice(0, 157) + "…" : legalDesc };
  }
  return { title, description: clean };
}

function featureItems(keyword: string, seed: number) {
  const k = keyword;
  const bodies = [
    `Viewers evaluating ${k} should expect stable playback when UK networks are busiest—typically early evenings and major sports slots. Ask how capacity is managed during spikes and what the provider communicates when a channel needs maintenance. Reliability beats raw channel counts when you are trying to enjoy TV instead of troubleshooting it.`,
    `Modern households rarely watch on a single screen. A strong ${k} experience follows you from smart TV to tablet without forcing you to relearn the interface. Confirm how many concurrent connections you can run fairly, and whether kids’ profiles and favourites sync sensibly across devices.`,
    `A clean electronic programme guide turns ${k} from a technical exercise into something your whole household can browse. Look for accurate start times, sensible categories, and logos that help you recognise channels quickly—especially for news and sports where speed matters.`,
    `Support is part of the product. When playlists rotate or apps update, you want ${k} help that responds with clear steps—not copy‑pasted scripts. Providers who publish status updates and maintenance notes earn trust; mystery downtime erodes it fast.`,
    `Onboarding should be repeatable: download the app, authenticate, and confirm live TV plus catch‑up on your hardest device first. Good ${k} documentation includes screenshots for popular players and guidance for common router tweaks without risky hacks.`,
    `Finally, compare ${k} value against your real watch list. If you mostly need UK locals plus a handful of premium channels, optimise for those outcomes instead of paying for a giant catalogue you never open. The best deal is the one you renew because it works every week.`,
  ];
  const titles = [
    "Prime-time performance",
    "Multi-device workflow",
    "Guide quality & discovery",
    "Support & communication",
    "Setup you can repeat",
    "Value versus old-school TV",
  ];
  const n = titles.length;
  const offset = seed % n;
  return Array.from({ length: n }, (_, i) => {
    const idx = (i + offset) % n;
    return { title: titles[idx]!, body: bodies[idx]! };
  });
}

function useCases(keyword: string, seed: number): string[] {
  const k = keyword;
  const u1 = [
    `Families use ${k} to centralise entertainment: kids’ channels in one app, adults’ news and films in another profile, and parental controls that survive updates. The practical win is fewer subscriptions scattered across siloed apps—provided the guide stays organised and support answers quickly when a device needs re‑authorisation.`,
    `Sports-heavy households lean on ${k} for weekend fixtures and midweek European ties—where delay and smooth zapping matter. Test on the TV you actually watch, and verify audio sync on soundbars. If you record or rely on catch‑up, confirm those features behave the way your routine expects.`,
    `Renters and students often choose ${k} because hardware is portable: move the stick, keep the subscription. The trade‑off is network dependency—shared buildings mean Wi‑Fi contention—so plan for ethernet where possible and realistic bitrate expectations where it is not.`,
  ];
  const u2 = [
    `Working professionals pair ${k} with catch‑up and mobile viewing on commutes. The winning setup is reliable favourites, quick resume, and notifications that do not spam you—just enough awareness when something changes in the lineup.`,
    `Bilingual and diaspora viewers explore ${k} to combine UK channels with international news and entertainment. Validate language audio tracks, subtitle availability, and whether prime-time schedules align with how you actually watch—not just how channels are marketed on a list.`,
    `Tech enthusiasts treat ${k} as a hobby: better players, tuned buffers, and home-lab networking. Keep experiments reversible—note baseline settings—so you can roll back when a “tweak” causes more problems than it solves.`,
  ];
  const pickSet = seed % 2 === 0 ? u1 : u2;
  return pickSet;
}

function faqItems(keyword: string, cluster: LandingCluster): LandingFAQItem[] {
  const k = keyword;
  const general: LandingFAQItem[] = [
    {
      q: `What should I verify first when comparing ${k}?`,
      a: `Start with your must-have channels and devices, then run a short trial during UK peak hours. Confirm EPG quality, audio sync, and support responsiveness. Price matters, but renewal friction and downtime cost more long term than a small monthly difference.`,
    },
    {
      q: `Will ${k} work on my Wi‑Fi?`,
      a: `Often yes—especially for HD—but 4K and busy households benefit from ethernet or a strong mesh network. Reduce interference, avoid double NAT where possible, and test on the TV that matters most before you commit annually.`,
    },
    {
      q: `How do I reduce buffering with ${k}?`,
      a: `Use wired connections where you can, pick realistic bitrates, close background downloads, and keep apps updated. If only one channel stutters, it may be source-side; if everything stutters, suspect the network path or router CPU load.`,
    },
    {
      q: `Can I use ${k} while travelling?`,
      a: `Sometimes, depending on provider terms and network policies. Expect mobile data to be more variable than home fibre. Download provider guidance and test before you rely on it for important events.`,
    },
    {
      q: `Where does ScopMedia fit if I want ${k}?`,
      a: `ScopMedia focuses on clear plans, UK-friendly support, and straightforward setup. Use the trial to validate your devices, then choose a subscription that matches how many screens you truly use at once.`,
    },
  ];

  const legalExtra: LandingFAQItem[] = [
    {
      q: `Is ${k} lawful in the UK?`,
      a: `It depends on the service and whether the provider has rights to the content you watch. Unauthorised redistribution can infringe copyright and carry serious consequences. Prefer transparent providers, read terms, and seek professional advice for business use cases.`,
    },
    {
      q: `What are the main risks people ignore?`,
      a: `Payment scams, malware from sketchy installers, unstable streams, and accounts that disappear overnight. If something is anonymous, unusually cheap, and constantly rebranding, treat it as high risk—not a bargain.`,
    },
    {
      q: `How do I stay on the right side of copyright rules?`,
      a: `Choose services that explain licensing, use normal payment methods with receipts, and avoid offers that depend on secrecy. When unsure, stick to lawful mainstream distribution models.`,
    },
    {
      q: `Why do rights matter for streaming quality?`,
      a: `Authorised sources can invest in capacity and support; unauthorised feeds often chase short-term uptime. The practical difference shows up on big match nights—precisely when you care most.`,
    },
    {
      q: `Does a VPN make unauthorised streams “safe”?`,
      a: `A VPN does not turn unauthorised content into authorised content. It may change network routing, but it does not fix copyright issues. Evaluate legality on its own terms.`,
    },
  ];

  const sportsExtra: LandingFAQItem[] = [
    {
      q: `Is ${k} good for live football?`,
      a: `It can be—if your provider maintains sports channels with enough headroom for peak audiences. Test delay against your preferences (some viewers tolerate a few seconds; others hate spoilers). Verify audio options for commentary choices where available.`,
    },
    {
      q: `What internet speed should I aim for?`,
      a: `HD often needs a stable ~10–25 Mbps to the device; 4K wants more headroom and consistent latency. Measure with a wired test near the TV, not only on a phone at the router.`,
    },
    {
      q: `Do pay-per-view events always work on IPTV?`,
      a: `Not necessarily—events can be restricted separately from normal channels. Read what your package includes and avoid assumptions on fight nights or special broadcasts.`,
    },
    {
      q: `How do I avoid spoilers during big matches?`,
      a: `Use low-delay modes where available, disable notifications from social apps, and pick a player that starts streams quickly from favourites.`,
    },
    {
      q: `Can I record sports with ${k}?`,
      a: `Depends on provider features and app support. If recording matters, confirm it before purchase—not every lineup includes catch-up or DVR-style behaviour.`,
    },
  ];

  if (cluster === "legal") return legalExtra;
  if (cluster === "sports") return sportsExtra;
  return general;
}

function expandIntro(keyword: string, seed: number): string[] {
  const extra: string[] = [];
  let i = 0;
  while (i < 8) {
    extra.push(midParagraph(keyword, seed, 10 + i));
    i += 1;
    const draft = extra.join(" ");
    if (wc(draft) >= 320) break;
  }
  return extra;
}

export function buildLandingContent(def: LandingDefinition): LandingBuiltContent {
  const seed = hashSeed(def.slug);
  const { title: metaTitle, description: metaDescription } = buildMeta(def.keyword, def.slug, def.cluster);

  const introParagraphs: string[] = [
    clusterOpening(def.cluster, def.keyword, seed),
    midParagraph(def.keyword, seed, 3),
    midParagraph(def.keyword, seed, 4),
    closingIntro(def.cluster, def.keyword, seed),
  ];

  const featureList = featureItems(def.keyword, seed);
  const useCaseParagraphs = useCases(def.keyword, seed);
  const faq = faqItems(def.keyword, def.cluster);

  const assemble = () =>
    [
      ...introParagraphs,
      ...featureList.map((f) => `${f.title} ${f.body}`),
      ...useCaseParagraphs,
      ...faq.map((f) => `${f.q} ${f.a}`),
    ].join(" ");

  let total = wc(assemble());
  if (total < 800) {
    introParagraphs.splice(introParagraphs.length - 1, 0, ...expandIntro(def.keyword, seed));
  }
  total = wc(assemble());
  let guard = 0;
  while (total < 800 && guard < 12) {
    introParagraphs.push(midParagraph(def.keyword, seed, 20 + guard));
    total = wc(assemble());
    guard += 1;
  }

  return {
    keyword: def.keyword,
    slug: def.slug,
    metaTitle,
    metaDescription,
    h1: def.keyword,
    introParagraphs,
    featureItems: featureList,
    useCaseParagraphs,
    faq,
    wordCountApprox: wc(assemble()),
  };
}
