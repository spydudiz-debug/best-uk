import type { LandingCluster } from "./types";

export function hashSeed(slug: string): number {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function pick<T>(arr: readonly T[], seed: number, offset: number): T {
  return arr[(seed + offset) % arr.length]!;
}

/** ~70–110 words each — composable for long-form landings. */
export function midParagraph(keyword: string, seed: number, i: number): string {
  const k = keyword;
  const templates = [
    () =>
      `If you are comparing ${k} options for 2026, prioritise uptime during peak UK evening hours, a clear channel map, and support that answers quickly when a playlist changes or a device needs re-authorisation. The best experiences feel boring: you open the app, the guide loads, playback starts without guesswork. Write down your must-have categories (sports, kids, movies, news) and confirm they are included before you pay for a longer term.`,
    () =>
      `A strong ${k} setup also depends on your home network. Ethernet beats Wi‑Fi for 4K stability, and a modern router reduces buffer spikes when multiple people stream at once. Where Wi‑Fi is unavoidable, place the TV stick closer to the router or use a mesh node. Keep DNS simple unless you know what you are doing—mystery “speed tweaks” often create new failure modes that look like provider faults.`,
    () =>
      `For ${k}, think about onboarding: you will repeat the same steps for family members, so save a short checklist (download app → enter login or playlist URL → pick player settings → test live TV and catch‑up). Screenshots help. If you sell access or support friends, document the top three errors you see—wrong server URL, expired line, or device clock issues—and you will cut support time dramatically.`,
    () =>
      `When evaluating ${k}, look for transparent renewal rules and a fair refund or trial policy. Legitimate services explain what you get, how billing works, and how to cancel. Avoid “lifetime” promises that sound too good to be true; sustainable streaming infrastructure has ongoing costs. Treat customer support quality as a product feature, not an afterthought, especially if you watch live sports weekly.`,
    () =>
      `${k} buyers often underestimate electronic programme guides (EPGs). A clean EPG turns browsing into a ritual; a messy one makes every session feel broken. Ask whether the guide covers your favourite UK channels in a sensible order, whether series linking works for catch‑up, and whether the provider updates logos and categories regularly. Small polish signals a team that maintains the product.`,
    () =>
      `Security matters for ${k}: use unique passwords, do not share credentials in public chats, and keep apps updated. If your provider offers a dashboard, review active sessions occasionally. On shared devices, use PINs for adult sections and remove accounts when you sell or recycle hardware. Good habits prevent headaches that no bitrate upgrade can fix.`,
    () =>
      `If you travel, ${k} access can vary by network and location policies. Before you rely on mobile data, test bitrate headroom and latency. Some routers allow QoS rules so your TV box keeps priority during video calls elsewhere in the home. The goal is predictable playback: fewer spinning wheels, fewer “is it down?” messages to support.`,
    () =>
      `Audio is half the experience with ${k}. Match passthrough settings to your soundbar or AVR, and verify stereo vs surround on a known channel. Lip‑sync issues often come from TV processing—try game mode or disable motion smoothing for live feeds. When everything lines up, sport and films feel immersive instead of distracting.`,
    () =>
      `Think about household roles: kids’ profiles, favourites, and parental controls should be easy to manage for ${k}. If the app supports multiple playlists or favourites folders, use them—organisation prevents chaos when you add new channels. A tidy library also makes it obvious when something disappears or renames, which happens as sources update.`,
    () =>
      `Finally, measure value for ${k} against what you actually watch. A huge channel count sounds impressive, but reliability and support matter more than raw numbers. Pick a plan that matches your screen mix—one 4K TV and two HD sticks is a different workload than five concurrent 4K streams. Right‑sizing saves money and reduces network strain.`,
  ] as const;
  return pick(templates, seed, i)();
}

export function clusterOpening(cluster: LandingCluster, keyword: string, seed: number): string {
  const k = keyword;
  switch (cluster) {
    case "legal":
      return `This page discusses ${k} in a general, informational way. Streaming legality depends on what you watch, who owns the rights, and whether your provider is authorised to distribute that content. In the UK, copyright infringement and unlawful access can carry serious consequences; this guide does not encourage piracy or circumvention. Use it to understand risks, make safer choices, and recognise above‑board options. Always verify terms with any service you pay for, and seek professional advice if you run a business around broadcasting.`;
    case "sports":
      return `Sports fans searching for ${k} usually want low delay, stable peak‑time performance, and easy replay or catch‑up when kick‑off clashes with life. The right provider pairs a well‑maintained channel list with realistic guidance on internet speeds and device settings. In 2026, UK viewers still juggle Premier League nights, European fixtures, and pay‑per‑view style events—so clarity around what is included, and what is not, prevents disappointment after checkout.`;
    case "reseller":
      return `${k} interest often comes from entrepreneurs who want scalable delivery: credits, user management, and a panel that does not require a computer science degree. Whether you are testing a side income or building a brand, focus on activation speed, ticket response times, and transparent credit rules. Your customers will judge you on buffering during big matches and how fast you recover from playlist updates—so choose infrastructure you can support confidently.`;
    case "formats":
      return `Technical buyers exploring ${k} care about compatibility: playlists, URLs, codecs, and whether your device player handles catch‑up and multi‑connect cleanly. Modern apps accept several ingestion methods, but the best experience is always “paste credentials, watch TV.” If you maintain backups and version notes when links rotate, you will avoid the classic failure mode where one bad URL looks like a dead service.`;
    case "xtream":
      return `When people compare ${k} setups, they are usually standardising on Xtream Codes‑style logins: server URL, username, and password. That workflow powers many popular players and keeps onboarding consistent across phones, TVs, and sticks. Look for providers who explain server endpoints clearly, rotate credentials responsibly, and document what to do after password resets—small details separate smooth installs from endless troubleshooting threads.`;
    case "devices":
      return `Device‑first shoppers researching ${k} want proof that playback matches their hardware: remote behaviour, HDR paths, surround audio, and whether the UI stays fast after long sessions. Whether you use a smart TV OS, a Fire TV stick, or a dedicated Android box, the winning combo is a stable app build plus realistic bitrate expectations on your Wi‑Fi. Start with one test device, validate EPG and favourites, then roll out to the rest of the house.`;
    case "apps":
      return `App‑centric searches for ${k} are really about daily ergonomics: how quickly you reach favourites, how readable the guide is, and whether parental controls hold up in a busy household. The “best” player is the one your family will actually use—fast search, dependable resume, and settings that do not reset after updates. Pair a polished client with a provider that communicates maintenance windows and playlist changes honestly.`;
    case "regional":
      return `Regional interest in ${k} is about language packs, timezone‑friendly catch‑up, and culturally relevant channels—not just a bigger number on a brochure. diaspora audiences often want news and entertainment from home alongside UK locals. Confirm whether the provider offers the mix you need, how EPG times display, and whether popular channels are actually maintained rather than merely listed.`;
    case "quality":
      return `Quality‑focused readers comparing ${k} are tired of excuses on Saturday nights. Look for providers who publish realistic bitrate guidance, maintain CDN capacity, and explain what to do when a channel hiccups. “4K” only matters if your network and HDMI chain can sustain it end‑to‑end; otherwise prioritise stable HD with clean motion and accurate colour first.`;
    case "streaming_tv":
      return `Traditional TV viewers exploring ${k} want a familiar rhythm: browse, select, watch—without app hopping chaos. The best services mirror that simplicity with a structured guide, predictable categories, and catch‑up where licences allow. In the UK market, clarity around premium channels, sports add‑ons, and device limits helps you compare apples to apples before you commit.`;
    case "edu":
      return `Educational queries like ${k} reward plain language. IPTV is simply television delivered over the internet using apps and playlists instead of aerials or satellite dishes—though the business model behind any given service still matters for legality and reliability. Use this page as a practical primer: what to expect, what to test, and how to judge quality without getting lost in jargon.`;
    case "uk_commercial":
      return `UK buyers comparing ${k} in 2026 want transparent pricing in GBP, clear device support, and help that understands British peak times and football calendars. Look for providers who explain renewals, trials, and what happens after purchase—then validate streaming performance on your own broadband. The goal is a service that feels premium on weeknight telly, not just on marketing screenshots.`;
    case "brand":
      return `ScopMedia IPTV is positioned for viewers who want a modern streaming catalogue with responsive support and straightforward setup. If you landed here while comparing providers, focus on trial options, channel fit for your household, and how quickly you can get help when something changes. Strong services earn renewals through reliability—especially on the nights everyone is watching at once.`;
    case "subscription":
      return `Subscription shoppers researching ${k} are weighing monthly cost against churn risk: will the guide stay updated, will sports hold during peak, and will billing be predictable? Start with a short trial where possible, test your hardest channels first, and keep notes on renewal dates. The cheapest headline rarely survives contact with real‑world support needs—value transparency and uptime as highly as price.`;
    case "core":
    default: {
      const variants = [
        () =>
          `${k} continues to be one of the most searched ways to modernise home entertainment in 2026—especially for UK households that want flexible viewing across smart TVs, sticks, and phones. The commercial reality is simple: viewers reward services that start quickly, fail rarely, and explain changes plainly. Use this guide to compare features with a buyer’s mindset: prove stability first, then optimise for catalogue breadth.`,
        () =>
          `If ${k} is on your shortlist, you are probably trying to replace bloated bundles with something leaner—without sacrificing live news, sport, and family programming. The winning approach is to test end‑to‑end on your actual network, not a demo clip on perfect Wi‑Fi. Look for a provider that documents setup, offers timely support, and keeps EPG metadata in good shape so browsing feels like TV, not a spreadsheet.`,
        () =>
          `This ${k} overview is written for decision‑makers who want both performance and clarity. Start by listing must‑have channels and devices, then validate each one during a trial window. Pay attention to how the service behaves during UK prime time—especially Sunday afternoons and midweek European fixtures—because that is when infrastructure stress shows up. A polished app cannot hide a congested backbone forever.`,
      ] as const;
      return pick(variants, seed, 0)();
    }
  }
}

export function closingIntro(cluster: LandingCluster, keyword: string, seed: number): string {
  const k = keyword;
  if (cluster === "legal") {
    return `In short: treat ${k} research as risk management. Prefer services that explain rights and policies clearly, keep receipts, and avoid “too good to be true” offers that depend on anonymous payments and shifting domains. When in doubt, choose lawful mainstream options or consult a qualified adviser for your situation.`;
  }
  return pick(
    [
      `Below, you will find practical benefits, common use cases, and answers to frequent questions about ${k}. When you are ready to test a provider with documented UK support and clear plans, ScopMedia is a sensible next step—start with a trial, validate your devices, then scale your subscription with confidence.`,
      `Next, we break down what matters commercially: the outcomes you should demand from ${k}, where it shines, and what to verify before you pay annually. ScopMedia focuses on straightforward onboarding and help when playlists or apps update—use the CTAs on this page to explore plans and trials.`,
      `The sections that follow translate ${k} from a buzzword into a checklist: performance targets, household scenarios, and support expectations. If you want a provider that emphasises uptime and clear communication, try ScopMedia’s trial and judge results on your own TVs—not a salesperson’s promise.`,
    ],
    seed,
    11,
  );
}
