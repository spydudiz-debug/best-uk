export type ResellerPack = {
  id: string;
  name: string;
  priceGbp: number;
  credits: number;
  blurb: string;
};

export const RESELLER_PACKS: ResellerPack[] = [
  {
    id: "basic",
    name: "Basic",
    priceGbp: 100,
    credits: 16,
    blurb: "Ideal to test demand and learn your IPTV reseller panel before you scale.",
  },
  {
    id: "premium",
    name: "Premium",
    priceGbp: 200,
    credits: 35,
    blurb: "Balanced IPTV reseller subscription price point for growing UK sellers.",
  },
  {
    id: "gold",
    name: "Gold",
    priceGbp: 300,
    credits: 80,
    blurb: "Best cost-per-credit when you are ready to push volume and protect margin.",
  },
];

/** Credits consumed per customer subscription length. */
export const CREDIT_BY_MONTHS: { label: string; months: number; credits: number }[] = [
  { label: "1 Month", months: 1, credits: 1 },
  { label: "3 Month", months: 3, credits: 2 },
  { label: "6 Month", months: 6, credits: 3 },
  { label: "12 Month", months: 12, credits: 4 },
];

export type ProfitExampleRow = {
  plan: string;
  costPrice: string;
  sellingPrice: string;
  profit: string;
};

/** Illustrative economics — not financial advice. */
export const PROFIT_TABLE_EXAMPLES: ProfitExampleRow[] = [
  {
    plan: "1 Month sub (Gold pack economics)",
    costPrice: "£3.75 (1 credit @ £300÷80)",
    sellingPrice: "£14.99",
    profit: "£11.24",
  },
  {
    plan: "3 Month sub (Premium pack economics)",
    costPrice: "£11.42 (2 credits @ £200÷35)",
    sellingPrice: "£34.99",
    profit: "£23.57",
  },
  {
    plan: "12 Month sub (Basic pack economics)",
    costPrice: "£25.00 (4 credits @ £100÷16)",
    sellingPrice: "£89.99",
    profit: "£64.99",
  },
];

export const RESELLER_FAQ: { q: string; a: string }[] = [
  {
    q: "Is IPTV reseller legal in the UK?",
    a: "Reselling access to television content is legal only when your upstream provider holds the appropriate rights and you comply with UK consumer law, VAT rules where applicable, and platform terms. Treat this guide as operational education — verify licensing with your supplier and seek professional advice for your business model.",
  },
  {
    q: "How much can I earn?",
    a: "Earnings depend on your selling price, credit usage, churn, and support overhead. Many sellers start part-time; scale follows consistent marketing and service quality. Use the profit table and calculator above with conservative retail assumptions rather than best-case hype.",
  },
  {
    q: "Which package is best?",
    a: "If you are validating demand, Basic keeps capital low. If you already have buyers lined up, Gold usually offers the cheapest cost-per-credit so you can protect margin when IPTV UK best service expectations rise. Premium sits in the middle for steady growth.",
  },
];

export const RESELLER_TAGS = [
  "IPTVResellerUK",
  "BuyIPTVReseller",
  "IPTVPanel",
  "IPTVBusiness",
  "IPTVUK",
  "IPTVStreaming",
  "IPTVSetup",
  "IPTV2026",
] as const;
