import { getSiteUrl } from "@/lib/site-origin";

/**
 * Organization + WebSite JSON-LD for all pages (injected from root layout).
 */
export default function GlobalJsonLd() {
  const base = getSiteUrl();
  const orgId = `${base}/#organization`;
  const webId = `${base}/#website`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "ScopMedia",
        url: base,
      },
      {
        "@type": "WebSite",
        "@id": webId,
        name: "ScopMedia",
        url: base,
        inLanguage: "en-GB",
        publisher: { "@id": orgId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
