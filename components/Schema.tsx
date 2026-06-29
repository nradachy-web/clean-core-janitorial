import { site, services } from "@/lib/site";

/** LocalBusiness JSON-LD. aggregateRating intentionally omitted: with only 5 reviews
 *  at 4.2, we don't surface a thin star count (lead with named clients instead). */
export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: site.name,
    description:
      "Commercial janitorial and office cleaning across Grand Rapids and West Michigan. Family and Latino-owned, bilingual, trained and insured.",
    telephone: site.phone,
    email: site.email,
    url: `https://${site.domain}`,
    areaServed: ["Grand Rapids", "Lansing", "Jackson", "Flint", "Midland", "Ann Arbor"].map((c) => ({
      "@type": "City",
      name: `${c}, MI`,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Grand Rapids",
      addressRegion: "MI",
      addressCountry: "US",
    },
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name },
    })),
    sameAs: [site.social.facebook],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
