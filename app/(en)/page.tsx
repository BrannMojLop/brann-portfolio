import { HomeContent } from "@/components/pages/home-content";
import { StructuredData } from "@/components/structured-data";
import { buildPersonSchema, buildWebsiteSchema } from "@/lib/structured-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  locale: "en",
  title: "Software Engineer Portfolio",
  description:
    "Software Engineer portfolio of Brandon Mojica Lopez, ERP Systems Engineer and Python FastAPI Backend Engineer focused on enterprise architecture, financial platforms, and real production systems.",
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
