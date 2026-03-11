import { HomeContent } from "@/components/pages/home-content";
import { StructuredData } from "@/components/structured-data";
import { buildPersonSchema, buildWebsiteSchema } from "@/lib/structured-data";
import { createPageMetadata } from "@/lib/metadata";
import { localizedSiteMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  locale: "es",
  title: localizedSiteMetadata.es.title,
  description: localizedSiteMetadata.es.description,
  path: "/",
});

export default function SpanishHomePage() {
  return (
    <>
      <StructuredData data={[buildPersonSchema("es"), buildWebsiteSchema("es")]} />
      <HomeContent />
    </>
  );
}
