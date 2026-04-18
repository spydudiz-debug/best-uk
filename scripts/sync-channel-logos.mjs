/**
 * Downloads channel SVGs from Wikimedia Commons + copies Simple Icons where used.
 * Run: node scripts/sync-channel-logos.mjs
 * Requires network. Respects Wikimedia User-Agent policy.
 */
import fs from "node:fs/promises";
import https from "node:https";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "logos");

const UA = "ScopMediaLogoSync/1.0 (+https://github.com/spydudiz-debug/best-uk)";

/** @type {{ dest: string; url: string }[]} */
const downloads = [
  {
    dest: "bbc.svg",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/41/BBC_Logo_2021.svg",
  },
  {
    dest: "bbc-one.svg",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8b/BBC_One_logo_2021.svg",
  },
  {
    dest: "bbc-two.svg",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/15/BBC_Two_logo_2021.svg",
  },
  {
    dest: "itv.svg",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/92/ITV_logo_2013.svg",
  },
  {
    dest: "channel5.svg",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/57/Channel_5_logo_2011.svg",
  },
  {
    dest: "sky-sports.svg",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Sky_Sports_2007_logo.svg",
  },
  {
    dest: "sky-news.svg",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Sky_News_2026.svg",
  },
  {
    dest: "tnt-sports.svg",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/TNT_Sports_2021_logo.svg",
  },
  {
    dest: "netflix.svg",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    dest: "prime-video.svg",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg",
  },
  {
    dest: "disney-plus.svg",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
  },
  {
    dest: "hbo.svg",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/de/HBO_logo.svg",
  },
  {
    dest: "natgeo.svg",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/13/National_Geographic_Channel.svg",
  },
  {
    dest: "discovery.svg",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/27/Discovery_Channel_-_Logo_2019.svg",
  },
  {
    dest: "cartoon-network.svg",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/80/Cartoon_Network_2010_logo.svg",
  },
];

/** Copy from simple-icons package (CC0). */
const copies = [{ dest: "channel4.svg", from: "channel4.svg" }];

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": UA } }, (res) => {
        if (
          res.statusCode &&
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          fetchBuffer(new URL(res.headers.location, url).href)
            .then(resolve)
            .catch(reject);
          res.resume();
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          res.resume();
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      })
      .on("error", reject);
  });
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });

  for (const { dest, url } of downloads) {
    const target = path.join(outDir, dest);
    process.stdout.write(`GET ${dest} … `);
    const buf = await fetchBuffer(url);
    await fs.writeFile(target, buf);
    console.log(`${buf.length} bytes`);
  }

  const siIcons = path.join(root, "node_modules", "simple-icons", "icons");
  for (const { dest, from } of copies) {
    const src = path.join(siIcons, from);
    const target = path.join(outDir, dest);
    process.stdout.write(`COPY ${dest} … `);
    await fs.copyFile(src, target);
    const st = await fs.stat(target);
    console.log(`${st.size} bytes`);
  }

  console.log("Done. Files in public/logos/");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
