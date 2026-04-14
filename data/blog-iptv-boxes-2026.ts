/** Image URLs: Unsplash (optimized via next/image sizes). */

export const IPTV_BOXES_HERO_IMAGE = {
  src: "https://images.unsplash.com/photo-1593784991095-a2050694700e?auto=format&fit=crop&w=1600&q=80",
  alt: "Living room with large TV streaming at night — IPTV viewing setup",
};

export type IptvBoxReview = {
  slug: string;
  name: string;
  intro: string;
  features: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  image: { src: string; alt: string };
};

export const IPTV_BOX_REVIEWS: IptvBoxReview[] = [
  {
    slug: "fire-tv-stick-4k",
    name: "Amazon Fire TV Stick 4K",
    intro:
      "The Fire TV Stick 4K remains one of the easiest entry points into IPTV-style streaming. It hides behind your TV, supports HDR10+ where available, and pairs with Alexa for hands-free control—ideal if you want a compact IPTV streaming device without rebuilding your entertainment centre.",
    features: [
      "4K Ultra HD with HDR10+ and Dolby Vision support (content and display dependent)",
      "Wi‑Fi 6 on newer variants for steadier throughput in busy homes",
      "Fire OS with broad app coverage and sideload paths for third-party players",
      "Voice remote with preset app shortcuts",
    ],
    pros: [
      "Low upfront cost and widely available",
      "Huge app ecosystem plus mature remote experience",
      "Strong choice for bedroom or secondary TVs",
    ],
    cons: [
      "Amazon-first interface may feel busy if you prefer stock Android TV",
      "Heavy skins can push storage limits on base models",
    ],
    bestFor: "Viewers who want an affordable, plug-and-play IPTV streaming device with minimal setup friction.",
    image: {
      src: "https://images.unsplash.com/photo-1616469829581-739039680349?auto=format&fit=crop&w=1200&q=80",
      alt: "Streaming media player remote and compact TV device on a table",
    },
  },
  {
    slug: "nvidia-shield-tv-pro",
    name: "Nvidia Shield TV Pro",
    intro:
      "The Shield TV Pro is the performance ceiling for many Android TV IPTV box setups. With robust AI upscaling, generous connectivity, and enough headroom for Plex or game streaming, it keeps navigation snappy even when playlists and EPG data grow large.",
    features: [
      "Tegra-class SoC tuned for sustained media workloads",
      "AI upscaling for HD sources on compatible displays",
      "USB ports for DVR storage or peripherals",
      "Dolby Vision and Dolby Atmos passthrough where supported",
    ],
    pros: [
      "Class-leading speed and long software support cadence",
      "Excellent for mixed use: IPTV, local media, light gaming",
      "Ethernet onboard—critical for buffer-free 4K",
    ],
    cons: [
      "Premium price versus sticks and compact boxes",
      "Larger footprint than a typical dongle",
    ],
    bestFor: "Power users who want the fastest Android TV IPTV box experience and plan to keep the hardware for years.",
    image: {
      src: "https://images.unsplash.com/photo-1593359677879-bc4516c8e8f7?auto=format&fit=crop&w=1200&q=80",
      alt: "Modern smart TV with vivid picture in a contemporary living room",
    },
  },
  {
    slug: "formuler-z11-pro-max",
    name: "Formuler Z11 Pro Max",
    intro:
      "Formuler hardware is purpose-built for operator-style IPTV experiences. MYTVOnline pairs tightly with portal workflows, while the remote feels tuned for channel surfing rather than app hopping—exactly what many live-TV-first households expect from a dedicated IPTV streaming device.",
    features: [
      "MYTVOnline ecosystem with polished STB-style navigation",
      "Strong codec support for live and VOD libraries",
      "Ethernet and Wi‑Fi options depending on SKU",
      "Regular firmware attention from the vendor line",
    ],
    pros: [
      "Interface optimised for live TV and EPG workflows",
      "Reliable choice when portal-based IPTV is the priority",
      "Hardware controls feel responsive during long sessions",
    ],
    cons: [
      "Less “general Android” flexibility than open Android TV boxes",
      "Premium tier pricing compared with mass-market sticks",
    ],
    bestFor: "Households that prioritise STB-style IPTV with a remote-first workflow and stable live playback.",
    image: {
      src: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1200&q=80",
      alt: "Set-top box style device with remote near a television",
    },
  },
  {
    slug: "buzztv-x5",
    name: "BuzzTV X5",
    intro:
      "BuzzTV positions the X5 series as a balanced mid-tier Android TV IPTV box—enough performance for demanding IPTV apps, flexible storage expansion, and a remote layout that mirrors what enthusiasts expect from enthusiast-grade streaming hardware.",
    features: [
      "Android TV foundation with sideload-friendly posture",
      "Expandable storage options on many configurations",
      "Thermal design aimed at sustained playback sessions",
      "Broad Bluetooth remote compatibility",
    ],
    pros: [
      "Solid middle ground between budget sticks and flagship shields",
      "Community familiarity for IPTV app tuning",
      "Often strong codec coverage out of the box",
    ],
    cons: [
      "Brand awareness varies by region—check local warranty paths",
      "Software polish depends on image updates—verify before purchase",
    ],
    bestFor: "Users who want Android TV IPTV box flexibility without jumping straight to the highest price tier.",
    image: {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      alt: "Person using remote control while watching streaming content on TV",
    },
  },
  {
    slug: "mag-box",
    name: "MAG Box",
    intro:
      "MAG boxes earned their reputation in STB-focused IPTV deployments. They are deliberately simple: lean OS paths, predictable remote mappings, and hardware tuned for long uptime—appealing when you want a single-purpose IPTV streaming device rather than a general app platform.",
    features: [
      "STB-optimised software stacks for portal workflows",
      "Low attack surface compared with full Android tablets",
      "Ethernet-first models common for wired stability",
      "Straightforward remote learning curve for non-technical viewers",
    ],
    pros: [
      "Predictable behaviour for portal-centric IPTV",
      "Often favoured in commercial or multi-room rollouts",
      "Minimal distractions if you only need live TV and VOD",
    ],
    cons: [
      "Less flexible for sideloading niche Android apps",
      "UI can feel dated next to modern Android TV skins",
    ],
    bestFor: "Installations where portal-style IPTV must “just work” with minimal app-store exploration.",
    image: {
      src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
      alt: "Flat-screen television on a media console in a living room",
    },
  },
  {
    slug: "xiaomi-mi-box-s",
    name: "Xiaomi Mi Box S",
    intro:
      "The Mi Box S (and refreshed variants) packages Android TV into a wallet-friendly footprint. For many international viewers, it is the quickest way to get Google Play, Chromecast built-in, and a credible Android TV IPTV box experience without importing exotic hardware.",
    features: [
      "Official Android TV with Play Store access",
      "Compact puck form factor for tight HDMI bays",
      "Chromecast built-in for casting from phones and laptops",
      "Voice remote on supported SKUs",
    ],
    pros: [
      "Strong value for casual IPTV and mainstream apps",
      "Easy onboarding for Android TV newcomers",
      "Travels well between TVs thanks to small size",
    ],
    cons: [
      "Not the fastest silicon—heavy skins may need tuning",
      "Storage can fill quickly if you install many apps",
    ],
    bestFor: "Budget-minded shoppers who still want legitimate Android TV IPTV box credentials and Play Store apps.",
    image: {
      src: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=80",
      alt: "Gaming and entertainment controllers near a screen",
    },
  },
];

export const IPTV_BOXES_FAQ: { q: string; a: string }[] = [
  {
    q: "What is the best IPTV box in 2026?",
    a: "There is no single winner: the best IPTV boxes in 2026 depend on your budget, whether you need Android TV sideloading, and if you prefer portal-style STB hardware. Match CPU headroom, wired networking, and app support to how you actually watch—live sports, VOD, or both.",
  },
  {
    q: "Is IPTV legal?",
    a: "IPTV is a technology for delivering TV over the internet. Legality depends on the provider and the rights they hold for the content you access. Choose licensed services and follow local regulations; ScopMedia is positioned as a legitimate subscription path when you pair compliant hardware with authorised access.",
  },
  {
    q: "Do IPTV boxes need a subscription?",
    a: "The hardware is a one-time purchase, but premium channel line-ups typically require an active IPTV subscription from a provider. Your box is simply the playback endpoint—credentials and entitlements come from the service you choose.",
  },
  {
    q: "Which IPTV box is fastest?",
    a: "Flagship Android TV devices with strong SoCs, ample RAM, and Ethernet—such as premium Shield-class hardware—usually feel fastest for large playlists and heavy EPG. Thermal headroom and wired networking matter as much as raw GHz numbers for sustained 4K playback.",
  },
];
