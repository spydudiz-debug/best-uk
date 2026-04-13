/**
 * IPTV setup guides — listing cards + full detail pages.
 * Keywords: IPTV setup guide, how to install IPTV, IPTV on Firestick, etc.
 */

export const SETUP_GUIDE_SLUGS = [
  "firestick",
  "smart-tv",
  "android-box",
  "windows-pc",
  "formuler",
] as const;

export type SetupGuideSlug = (typeof SETUP_GUIDE_SLUGS)[number];

/** Visual key for `SetupGuideDeviceVisual` (unchanged asset ids) */
export type SetupGuideVisualId = "firestick" | "smart-tv" | "android-box" | "windows" | "formuler";

export type SetupGuidePageContent = {
  metaTitle: string;
  metaDescription: string;
  /** Shown under H1; include natural keywords */
  intro: string;
  /** Used in H1 after "How to Set Up IPTV on …" */
  h1DeviceName: string;
  requirements: string[];
  /** Five fixed step titles with device-specific bullets */
  steps: {
    title: string;
    bullets: string[];
  }[];
  troubleshooting: string[];
  tips: string[];
};

export type SetupGuideDevice = {
  id: SetupGuideVisualId;
  slug: SetupGuideSlug;
  title: string;
  summary: string;
  page: SetupGuidePageContent;
};

const STEP_TITLES = [
  "Step 1: Install IPTV app",
  "Step 2: Open app",
  "Step 3: Enter Xtream Codes or M3U",
  "Step 4: Load channels",
  "Step 5: Start streaming",
] as const;

function steps(
  bulletsPerStep: [string[], string[], string[], string[], string[]]
): SetupGuidePageContent["steps"] {
  return STEP_TITLES.map((title, i) => ({
    title,
    bullets: bulletsPerStep[i],
  }));
}

export const SETUP_GUIDES: SetupGuideDevice[] = [
  {
    id: "firestick",
    slug: "firestick",
    title: "Amazon Firestick / Fire TV",
    summary:
      "IPTV on Firestick: enable Unknown Sources, install via Downloader, then log in with Xtream Codes or M3U.",
    page: {
      metaTitle: "IPTV on Firestick — Setup Guide | ScopMedia",
      metaDescription:
        "IPTV setup guide for Amazon Fire TV & Firestick: Unknown Sources, Downloader, IPTV Smarters, Xtream Codes or M3U. Step-by-step Firestick IPTV instructions.",
      intro:
        "This IPTV setup guide covers IPTV on Firestick and Fire TV: how to install IPTV safely with Downloader, enable installs from unknown sources where needed, and complete your Xtream Codes or M3U login for ScopMedia.",
      h1DeviceName: "Amazon Firestick / Fire TV",
      requirements: [
        "Amazon Fire TV Stick, Fire TV Cube, or compatible Fire OS device",
        "Stable Wi‑Fi (or Ethernet adapter where supported)",
        "Active ScopMedia IPTV subscription with Xtream Codes API or M3U playlist details",
        "Downloader app from the Amazon Appstore (for sideloading APKs)",
      ],
      steps: steps([
        [
          "Enable Unknown Sources (or per-app install permission): Settings → My Fire TV → Developer options.",
          "Install Downloader from the Amazon Appstore.",
          "In Downloader, enter the URL provided by ScopMedia for IPTV Smarters Pro (or your chosen IPTV app) and install the APK.",
        ],
        [
          "Open the IPTV app from Your Apps & Channels (or App Library).",
          "If prompted, allow storage or network access so the app can save profiles and load playlists.",
        ],
        [
          "Choose Login with Xtream Codes API or Load with M3U URL — match the format ScopMedia sent you.",
          "Enter server URL, username, and password exactly (no extra spaces). For M3U, paste the full playlist link.",
        ],
        [
          "Save the profile and wait for categories and channels to load — first sync may take several minutes.",
          "If categories are empty, recheck credentials or VPN/firewall settings on your network.",
        ],
        [
          "Pick a channel and start streaming.",
          "If the app freezes after a big update, restart the Firestick from Settings → My Fire TV → Restart.",
        ],
      ]),
      troubleshooting: [
        "App won’t install: confirm Unknown Sources / install permission for Downloader, then retry the APK download.",
        "Login failed: verify username, password, and server URL; copy-paste instead of typing when possible.",
        "Buffering: use 5 GHz Wi‑Fi, move the router closer, or lower the stream quality in the app settings.",
        "Black screen: update the IPTV app, clear app cache (if available), or reinstall the app.",
      ],
      tips: [
        "Keep Fire OS updated for better codec support and security.",
        "Pin the IPTV app to the home row for quicker access.",
        "Use a wired Ethernet adapter on Fire TV Cube or models that support it for the most stable playback.",
      ],
    },
  },
  {
    id: "smart-tv",
    slug: "smart-tv",
    title: "Smart TV (Samsung, LG, Sony)",
    summary:
      "Install IPTV from your TV’s app store (Samsung, LG Content Store, or Google TV) and sign in with Xtream or M3U.",
    page: {
      metaTitle: "IPTV on Smart TV (Samsung, LG, Sony) — Setup Guide | ScopMedia",
      metaDescription:
        "How to install IPTV on Smart TV: Samsung Tizen, LG webOS, Sony Google TV. App store install, Xtream Codes or M3U, and streaming tips.",
      intro:
        "Learn how to install IPTV on Smart TV sets from Samsung, LG, and Sony. This IPTV setup guide walks through the correct app store, Xtream Codes or M3U entry, and playback on the big screen.",
      h1DeviceName: "Smart TV (Samsung, LG, Sony)",
      requirements: [
        "Samsung (Tizen), LG (webOS), or Sony (Google TV / Android TV) with current firmware",
        "Working remote or keyboard for long URLs and passwords",
        "ScopMedia credentials (Xtream Codes API or M3U URL)",
        "IPTV app available in your region’s store (or sideload path if supported)",
      ],
      steps: steps([
        [
          "Open your TV’s app store: Samsung App Store, LG Content Store, or Google Play on Sony/Android TVs.",
          "Search for IPTV Smarters Pro, Smart IPTV, or the app name ScopMedia recommends.",
          "Install the IPTV app and wait for installation to finish.",
        ],
        [
          "Launch the app from the apps list or home launcher.",
          "Accept terms and any permission prompts needed for network access.",
        ],
        [
          "Select Xtream Codes API, M3U URL, or Portal depending on your subscription.",
          "Enter username, password, and server URL using the on-screen keyboard — go slowly to avoid typos.",
        ],
        [
          "Confirm and let the app download the channel and VOD lists.",
          "If progress stalls, check internet speed and retry from the app’s settings menu.",
        ],
        [
          "Browse categories or EPG and start streaming.",
          "For regional store limits, contact ScopMedia about supported apps or alternate install methods for your model.",
        ],
      ]),
      troubleshooting: [
        "App not in store: your TV model or region may differ — try another approved app or ask support for a compatible package.",
        "Keyboard errors: use a USB or Bluetooth keyboard if the TV supports it for long URLs.",
        "Playback stutter: use Ethernet (if available), or reduce resolution in the app.",
      ],
      tips: [
        "Enable automatic app updates so IPTV players stay compatible with new codecs.",
        "Place the TV on a wired connection when possible for 4K or high-bitrate channels.",
      ],
    },
  },
  {
    id: "android-box",
    slug: "android-box",
    title: "Android Box / TV Box",
    summary:
      "Use Google Play or sideload an APK on your Android TV box, then add Xtream Codes or M3U for IPTV.",
    page: {
      metaTitle: "IPTV on Android TV Box — Setup Guide | ScopMedia",
      metaDescription:
        "IPTV setup guide for Android boxes: Play Store or APK install, Xtream Codes or M3U, channel sync, and streaming tips.",
      intro:
        "Android TV boxes are flexible for IPTV — install from Google Play or a trusted APK, then complete your Xtream Codes or M3U login. This guide keeps the process clear for generic Android TV / TV box hardware.",
      h1DeviceName: "Android Box / TV Box",
      requirements: [
        "Android TV or Android-based TV box with network access",
        "Google Play (preferred) or permission to install unknown apps for APK sideloading",
        "ScopMedia Xtream Codes or M3U details",
        "Optional: USB keyboard for faster text entry",
      ],
      steps: steps([
        [
          "Prefer Google Play: search for IPTV Smarters or your ScopMedia-recommended player and install.",
          "If sideloading: enable Install unknown apps for your browser or file manager, then download the APK from a trusted link.",
        ],
        [
          "Open the IPTV app from the app drawer.",
          "Grant storage/network permissions if asked so playlists can cache correctly.",
        ],
        [
          "Pick Xtream Codes or M3U playlist to match your ScopMedia subscription.",
          "Enter host, username, and password — or paste the full M3U URL.",
        ],
        [
          "Wait for the channel list to populate; large playlists can take several minutes on first load.",
        ],
        [
          "Select a channel and stream; adjust buffer or hardware decoding in settings if needed.",
          "Use Ethernet on the box when possible for the most stable IPTV experience.",
        ],
      ]),
      troubleshooting: [
        "Parse errors: confirm the M3U URL is complete and has not expired.",
        "Install blocked: re-check Install unknown apps for the correct app (browser vs file manager).",
        "Overheating: ensure ventilation; thermal throttling can cause stutter.",
      ],
      tips: [
        "Close background apps to free RAM on low-end boxes.",
        "Match the app’s time zone to your EPG for accurate programme guides.",
      ],
    },
  },
  {
    id: "windows",
    slug: "windows-pc",
    title: "Windows PC",
    summary:
      "Stream IPTV on Windows with VLC or a dedicated IPTV app — M3U or Xtream Codes supported.",
    page: {
      metaTitle: "IPTV on Windows PC — Setup Guide | ScopMedia",
      metaDescription:
        "How to install IPTV on Windows: VLC or IPTV software, M3U and Xtream Codes, loading channels, and desktop streaming tips.",
      intro:
        "Use this IPTV setup guide for Windows desktops and laptops: VLC for M3U playlists or a dedicated IPTV app for Xtream Codes, plus practical tips for smooth playback.",
      h1DeviceName: "Windows PC",
      requirements: [
        "Windows 10 or 11 (64-bit recommended)",
        "VLC Media Player and/or an IPTV app that supports your credential type",
        "ScopMedia M3U URL or Xtream Codes (username, password, server URL)",
        "Stable broadband connection",
      ],
      steps: steps([
        [
          "Install VLC (videolan.org) for M3U use, and/or install a Windows IPTV app from the vendor or Microsoft Store that supports Xtream Codes.",
        ],
        [
          "Open VLC (Media → Open Network Stream) for M3U URLs, or launch your IPTV app for API login.",
        ],
        [
          "For Xtream: enter username, password, and server URL in the app’s fields.",
          "For M3U in VLC: paste the full playlist URL — it may embed credentials in one line.",
        ],
        [
          "Allow the player to parse the playlist and load channels and groups.",
        ],
        [
          "Select a channel and stream; enable hardware decoding in VLC or the app if CPU usage is high.",
          "Adjust video output settings if you see tearing on high refresh monitors.",
        ],
      ]),
      troubleshooting: [
        "No audio/video: install current GPU drivers and try a different output module in VLC.",
        "Xtream login fails: rule out VPN mismatches and verify server URL format (http/https).",
        "Stutter on 4K: lower resolution or enable hardware acceleration.",
      ],
      tips: [
        "For testing, bookmark working M3U links in a text file — never share publicly.",
        "Close heavy browser tabs while streaming 4K IPTV.",
      ],
    },
  },
  {
    id: "formuler",
    slug: "formuler",
    title: "Formuler Device",
    summary:
      "Use MYTVOnline or MYTVOnline 2 on Formuler with portal or Xtream details for pro IPTV playback.",
    page: {
      metaTitle: "IPTV on Formuler (MYTVOnline) — Setup Guide | ScopMedia",
      metaDescription:
        "Formuler IPTV setup with MYTVOnline: portal or Xtream Codes, credentials, loading channels, and streaming on Formuler receivers.",
      intro:
        "Formuler receivers pair with MYTVOnline for polished IPTV. This page explains portal and Xtream-style setup so you can complete your IPTV setup guide path on Formuler hardware.",
      h1DeviceName: "Formuler Device",
      requirements: [
        "Formuler set-top box with MYTVOnline or MYTVOnline 2",
        "Network connection (Ethernet recommended)",
        "Portal URL and/or MAC details, or Xtream Codes from ScopMedia",
        "Remote control for portal and credential entry",
      ],
      steps: steps([
        [
          "Ensure MYTVOnline (or MYTVOnline 2) is available on your firmware; update the box if the app is outdated.",
          "No separate “install” is needed if the app is preloaded — otherwise follow Formuler’s official update path.",
        ],
        [
          "From the home screen, open MYTVOnline.",
        ],
        [
          "Choose Add Portal with your portal URL if your provider uses MAC-based portals, or select Xtream Codes / API.",
          "Enter username, password, and server URL exactly as ScopMedia provided.",
        ],
        [
          "Save and let the receiver fetch bouquets, channels, and VOD categories.",
        ],
        [
          "Open Live TV or VOD from the MYTVOnline UI and start streaming.",
          "Prefer Ethernet and keep firmware updated for best stability.",
        ],
      ]),
      troubleshooting: [
        "Portal won’t connect: verify DNS/portal URL and that your MAC is registered if required.",
        "Authentication error: double-check Xtream fields and caps lock on the remote entry screen.",
        "EPG missing: enable EPG URL in the app if your subscription includes it.",
      ],
      tips: [
        "Use wired LAN for 4K and high-bitrate channels.",
        "Back up portal settings before factory reset.",
      ],
    },
  },
];

const guideBySlug = new Map<SetupGuideSlug, SetupGuideDevice>(
  SETUP_GUIDES.map((g) => [g.slug, g])
);

export function getGuideBySlug(slug: string): SetupGuideDevice | undefined {
  return guideBySlug.get(slug as SetupGuideSlug);
}

export function getAllGuideSlugs(): SetupGuideSlug[] {
  return [...SETUP_GUIDE_SLUGS];
}
