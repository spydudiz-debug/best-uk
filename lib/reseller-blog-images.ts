/** Wikimedia Commons — IPTV hardware / UI (CC-licensed). Used for reseller guide visuals. */

function wm(path: string): string {
  return `https://upload.wikimedia.org/wikipedia/commons${path}`;
}

export type ResellerBlogImage = { src: string; alt: string };

/** Hero: 4K IP set-top with on-screen UI — reads as IPTV / panel context. */
export const RESELLER_BLOG_HERO: ResellerBlogImage = {
  src: wm("/3/39/Topway_4K_IP_set-top-boxBy_Skyworth_digital_E900V21C.jpg"),
  alt: "4K IPTV set-top box with on-screen programme guide — IPTV reseller UK 2026 business guide",
};

export const RESELLER_BLOG_INLINE_STREAMING: ResellerBlogImage = {
  src: wm("/d/d6/Mview_IPTV.jpg"),
  alt: "IPTV streaming set-top box and remote — buy IPTV reseller credits and sell subscriptions",
};

export const RESELLER_BLOG_INLINE_UK_SERVICE: ResellerBlogImage = {
  src: wm("/7/7c/Deutsche_Telekom_Media_Receiver_400-5956.jpg"),
  alt: "IPTV media receiver — IPTV reseller server UK style hardware and panel access",
};
