import { profile } from "@/data";

/**
 * Person + WebSite schema so search engines can attach the right details to
 * this profile. Rendered from the same data layer as the visible page.
 */
export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: profile.name,
        jobTitle: profile.role,
        email: `mailto:${profile.email}`,
        url: profile.siteUrl,
        sameAs: profile.socials.map((social) => social.url),
      },
      {
        "@type": "WebSite",
        name: `${profile.name} — ${profile.role}`,
        url: profile.siteUrl,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}