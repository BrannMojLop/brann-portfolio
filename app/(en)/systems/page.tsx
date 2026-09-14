import { SystemsContent } from "@/components/pages/systems-content";
import { StructuredData } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  locale: "en",
  title: "Systems shaped by operational constraints",
  description:
    "I describe each system through its context, my responsibility, architecture decisions, constraints, and current verified state.",
  path: "/systems",
});

export default function SystemsPage() {
  return (
    <>
      <StructuredData
        data={[
          buildCollectionPageSchema(
            "en",
            "Systems shaped by operational constraints",
            "I describe each system through its context, my responsibility, architecture decisions, constraints, and current verified state.",
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
