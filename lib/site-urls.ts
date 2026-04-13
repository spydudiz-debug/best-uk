/** ScopMedia store & marketing URLs (external). */
export const SITE_URLS = {
  freeTrial:
    "https://scopmedia.com/index.php?rp=/store/free-iptv-uk-trial",
  iptvSubscriptions:
    "https://scopmedia.com/index.php?rp=/store/iptv-subscriptions",
  resellerPackages:
    "https://scopmedia.com/index.php?rp=/store/reseller-packages",
} as const;

export const externalTabProps = {
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
};
