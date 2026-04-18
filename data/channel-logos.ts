/** Sample TV / network logos for the homepage marquee (paths under /public). */
export type ChannelLogo = {
  name: string;
  src: string;
};

export const CHANNEL_LOGOS: ChannelLogo[] = [
  { name: "BBC", src: "/logos/bbc.svg" },
  { name: "Sky Sports", src: "/logos/sky.svg" },
  { name: "ITV", src: "/logos/itv.svg" },
  { name: "Channel 4", src: "/logos/channel4.svg" },
  { name: "BT Sport", src: "/logos/bt.svg" },
  { name: "Eurosport", src: "/logos/eurosport.svg" },
  { name: "Prime Video", src: "/logos/prime.svg" },
  { name: "Disney+", src: "/logos/disney.svg" },
];
