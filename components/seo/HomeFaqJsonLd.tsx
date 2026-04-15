import { HOME_PAGE_FAQS } from "@/data/home-faqs";
import { absoluteUrl } from "@/lib/site-origin";

/** FAQPage JSON-LD for the home page FAQ section. */
export default function HomeFaqJsonLd() {
  const mainEntity = HOME_PAGE_FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  }));

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: absoluteUrl("/"),
    mainEntity,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
