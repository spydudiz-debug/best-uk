/**
 * SEO-oriented copy for the Setup Guide (#setup) section.
 * Keywords: IPTV setup guide, how to install IPTV, IPTV on Firestick, etc.
 */

export type SetupGuideDevice = {
  id: string;
  /** Card heading + accordion H3 */
  title: string;
  /** One-line intro under title (meta-friendly) */
  summary: string;
  /** Shown inside accordion as lead */
  guideIntro: string;
  /** H2-style line inside panel (visible to users & outline) */
  guideHeading: string;
  steps: {
    title: string;
    bullets: string[];
  }[];
  /** Optional screenshot placeholders (labels only) */
  screenshotHints?: string[];
};

export const SETUP_GUIDES: SetupGuideDevice[] = [
  {
    id: "firestick",
    title: "Amazon Firestick / Fire TV",
    summary:
      "Step-by-step IPTV setup on Firestick: install IPTV Smarters or similar, enable Unknown Sources, and log in with Xtream Codes or M3U.",
    guideIntro:
      "This IPTV setup guide walks you through how to install IPTV on Firestick and Fire TV sticks safely. Follow each step in order for the smoothest experience.",
    guideHeading: "How to Set Up IPTV on Amazon Firestick / Fire TV",
    steps: [
      {
        title: "Step 1: Prepare your Fire TV device",
        bullets: [
          "Open Settings → My Fire TV → Developer options.",
          "Turn on Apps from Unknown Sources (or enable the specific app you will use, on newer OS versions).",
          "Install the Downloader app from the Amazon Appstore (search “Downloader”).",
        ],
      },
      {
        title: "Step 2: Install your IPTV app",
        bullets: [
          "Open Downloader and enter the URL provided by ScopMedia for IPTV Smarters Pro (or your chosen player).",
          "Download and install the APK, then open the app from Your Apps & Channels.",
        ],
      },
      {
        title: "Step 3: Choose login method",
        bullets: [
          "Open the app and select Login with Xtream Codes API or Load with M3U URL — use the method your subscription uses.",
        ],
      },
      {
        title: "Step 4: Enter login details",
        bullets: [
          "Enter your username, password, and server URL exactly as supplied (no extra spaces).",
          "If using M3U, paste the full playlist URL and name your list.",
        ],
      },
      {
        title: "Step 5: Load channels & stream",
        bullets: [
          "Wait for categories and channels to load — first sync can take a few minutes.",
          "Pick a channel and start streaming. Reboot the stick if the app freezes after a large update.",
        ],
      },
    ],
    screenshotHints: ["Downloader search screen", "IPTV app login screen"],
  },
  {
    id: "smart-tv",
    title: "Smart TV (Samsung, LG, Sony)",
    summary:
      "How to install IPTV on Smart TV: use Samsung Tizen, LG WebOS, or Android TV app stores to add IPTV Smarters, Smart IPTV, or similar apps.",
    guideIntro:
      "Samsung, LG, and Sony Smart TVs each use different stores (Tizen, WebOS, Google TV). This guide covers the common IPTV setup path for all three.",
    guideHeading: "How to Set Up IPTV on Samsung, LG & Sony Smart TVs",
    steps: [
      {
        title: "Step 1: Open your TV’s app store",
        bullets: [
          "Samsung (Tizen): Samsung App Store / Apps.",
          "LG (webOS): LG Content Store.",
          "Sony (Google TV / Android TV): Google Play Store.",
        ],
      },
      {
        title: "Step 2: Install an IPTV app",
        bullets: [
          "Search for IPTV Smarters Pro, Smart IPTV, or the app name ScopMedia recommends for your region.",
          "Install and launch the application.",
        ],
      },
      {
        title: "Step 3: Select login method",
        bullets: [
          "Choose Xtream Codes API, M3U URL, or Portal depending on your subscription format.",
        ],
      },
      {
        title: "Step 4: Enter credentials",
        bullets: [
          "Type your username, password, and server URL carefully using the on-screen keyboard.",
          "Save the profile and allow the app to download the channel list.",
        ],
      },
      {
        title: "Step 5: Start streaming",
        bullets: [
          "Browse categories, open the EPG if available, and play a channel.",
          "If the app is not listed in your store, your TV may support sideloading via USB or a linked phone — contact support for model-specific help.",
        ],
      },
    ],
    screenshotHints: ["App store search", "Xtream login form on TV"],
  },
  {
    id: "android-box",
    title: "Android Box / TV Box",
    summary:
      "IPTV setup on Android TV boxes: install from Google Play or sideload an APK, then add your Xtream or M3U details.",
    guideIntro:
      "Android boxes offer flexible IPTV installation — ideal if you want a dedicated streaming device with Play Store or manual APK installs.",
    guideHeading: "How to Set Up IPTV on an Android TV Box",
    steps: [
      {
        title: "Step 1: Enable installation",
        bullets: [
          "Open Settings → Security (or Privacy) and allow Install unknown apps for your browser or file manager if you sideload APKs.",
          "Prefer Google Play when the IPTV app is listed there.",
        ],
      },
      {
        title: "Step 2: Install the IPTV app",
        bullets: [
          "From Play Store, search IPTV Smarters or your recommended player and install.",
          "Or download the APK from a trusted link, open it with a file manager, and install.",
        ],
      },
      {
        title: "Step 3: Login method",
        bullets: [
          "Launch the app and pick Xtream Codes or M3U playlist to match your ScopMedia credentials.",
        ],
      },
      {
        title: "Step 4: Enter details",
        bullets: [
          "Input username, password, and host URL (or paste the M3U link).",
          "Confirm time zone and EPG options if prompted.",
        ],
      },
      {
        title: "Step 5: Sync & watch",
        bullets: [
          "Wait for the channel list to populate; large playlists may take several minutes.",
          "Use Ethernet if possible for the most stable **IPTV** streaming on Android boxes.",
        ],
      },
    ],
    screenshotHints: ["Unknown sources toggle", "App list after install"],
  },
  {
    id: "windows",
    title: "Windows PC",
    summary:
      "IPTV on Windows: use VLC, dedicated IPTV apps, or players that support M3U and Xtream logins for desktop streaming.",
    guideIntro:
      "Windows is great for testing playlists and watching in a browser or desktop player. This IPTV setup guide covers VLC and generic IPTV apps.",
    guideHeading: "How to Set Up IPTV on Windows PC",
    steps: [
      {
        title: "Step 1: Install a player",
        bullets: [
          "Install VLC Media Player (videolan.org) for M3U playlists, or download a Windows IPTV app that supports Xtream Codes if you have API credentials.",
          "Some users prefer dedicated IPTV Windows apps from the Microsoft Store.",
        ],
      },
      {
        title: "Step 2: Open your playlist or app",
        bullets: [
          "VLC: Media → Open Network Stream → paste your M3U URL, or open the .m3u file.",
          "Xtream-style apps: open the app and choose API / Xtream login.",
        ],
      },
      {
        title: "Step 3: Choose login type",
        bullets: [
          "Select M3U URL or Xtream Codes depending on what ScopMedia provided.",
        ],
      },
      {
        title: "Step 4: Enter login details",
        bullets: [
          "Enter username, password, and server URL in the app’s fields.",
          "For VLC with M3U only, the single URL may embed credentials — paste exactly as given.",
        ],
      },
      {
        title: "Step 5: Load and stream",
        bullets: [
          "Wait for channels to parse; VLC may show a flat list — use group titles if your playlist includes them.",
          "Adjust hardware decoding in settings if you notice stutter during HD or 4K playback.",
        ],
      },
    ],
    screenshotHints: ["VLC open network", "Xtream fields in desktop app"],
  },
  {
    id: "formuler",
    title: "Formuler Device",
    summary:
      "Formuler IPTV setup: use MYTVOnline (or MYTVOnline 2) with your portal or Xtream details for a polished STB experience.",
    guideIntro:
      "Formuler boxes are popular for IPTV thanks to MYTVOnline. This guide explains how to install IPTV-style portals and start streaming quickly.",
    guideHeading: "How to Set Up IPTV on a Formuler Device",
    steps: [
      {
        title: "Step 1: Open MYTVOnline",
        bullets: [
          "From the home screen, launch MYTVOnline or MYTVOnline 2 (depending on your model and firmware).",
        ],
      },
      {
        title: "Step 2: Add portal or Xtream",
        bullets: [
          "Choose Add Portal and enter the portal URL if your provider uses a MAC-based portal.",
          "Or select Xtream Codes / API and prepare your username, password, and server URL.",
        ],
      },
      {
        title: "Step 3: Confirm login method",
        bullets: [
          "Match the login type to what ScopMedia issued — portal DNS, Xtream API, or Stalker — so the device can authenticate.",
        ],
      },
      {
        title: "Step 4: Enter credentials",
        bullets: [
          "Fill in all required fields; double-check for typos in the server address.",
          "Save and allow the receiver to fetch bouquets and VOD.",
        ],
      },
      {
        title: "Step 5: Stream",
        bullets: [
          "Open Live TV, VOD, or Series from the MYTVOnline interface.",
          "Use Ethernet for best results; update Formuler firmware when prompted for security and codec support.",
        ],
      },
    ],
    screenshotHints: ["MYTVOnline portal screen", "Xtream login on Formuler"],
  },
];
