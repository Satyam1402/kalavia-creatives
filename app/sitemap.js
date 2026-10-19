import site from "@/data/site";

export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: site.seo.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
