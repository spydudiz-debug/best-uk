/** TV / network logos under `/public/logos` (Wikimedia Commons + Simple Icons). */
export type ChannelLogo = {
  name: string;
  src: string;
};

export const CHANNEL_LOGOS: ChannelLogo[] = [
  { name: "BBC", src: "/logos/bbc.svg" },
  { name: "BBC One", src: "/logos/bbc-one.svg" },
  { name: "BBC Two", src: "/logos/bbc-two.svg" },
  { name: "ITV", src: "/logos/itv.svg" },
  { name: "Channel 4", src: "/logos/channel4.svg" },
  { name: "Channel 5", src: "/logos/channel5.svg" },
  { name: "Sky Sports", src: "/logos/sky-sports.svg" },
  { name: "Sky News", src: "/logos/sky-news.svg" },
  { name: "TNT Sports", src: "/logos/tnt-sports.svg" },
  { name: "Netflix", src: "/logos/netflix.svg" },
  { name: "Amazon Prime Video", src: "/logos/prime-video.svg" },
  { name: "Disney+", src: "/logos/disney-plus.svg" },
  { name: "HBO", src: "/logos/hbo.svg" },
  { name: "National Geographic", src: "/logos/natgeo.svg" },
  { name: "Discovery Channel", src: "/logos/discovery.svg" },
  { name: "Cartoon Network", src: "/logos/cartoon-network.svg" },
];
