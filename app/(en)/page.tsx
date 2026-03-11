import { HomeContent } from "@/components/pages/home-content";
import { StructuredData } from "@/components/structured-data";
import { buildPersonSchema, buildWebsiteSchema } from "@/lib/structured-data";
import { createPageMetadata } from "@/lib/metadata";
import { localizedSiteMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  locale: "en",
  title: localizedSiteMetadata.en.title,
  description: localizedSiteMetadata.en.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <StructuredData data={[buildPersonSchema("en"), buildWebsiteSchema("en")]} />
      <HomeContent />
    </>
  );
}
