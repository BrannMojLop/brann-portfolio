import { SystemsContent } from "@/components/pages/systems-content";
import { StructuredData } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  locale: "en",
  title: "Enterprise Systems Architecture",
  description:
    "Architecture case studies for Businext ERP and the TR0V1 Credit Platform, covering business context, domain boundaries, backend design, and operational reliability.",
  path: "/systems",
});

export default function SystemsPage() {
  return (
    <>
      <StructuredData
        data={[
          buildCollectionPageSchema(
            "en",
            "Enterprise Systems Architecture",
            "Architecture case studies for ERP and financial platforms built for real operations.",
            "/systems",
          ),
          buildBreadcrumbSchema("en", [
            { name: "Home", path: "/" },
            { name: "Systems", path: "/systems" },
          ]),
        ]}
      />
      <SystemsContent />
    </>
  );
}
