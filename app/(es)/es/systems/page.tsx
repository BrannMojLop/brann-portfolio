import { SystemsContent } from "@/components/pages/systems-content";
import { StructuredData } from "@/components/structured-data";
import { messages } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  locale: "es",
  title: messages.es.systems.title,
  description: messages.es.systems.description,
  path: "/systems",
});

export default function SpanishSystemsPage() {
  return (
    <>
      <StructuredData
        data={[
          buildCollectionPageSchema(
            "es",
            messages.es.systems.title,
            messages.es.systems.description,
            "/systems",
          ),
          buildBreadcrumbSchema("es", [
            { name: "Inicio", path: "/" },
            { name: "Sistemas", path: "/systems" },
          ]),
        ]}
      />
      <SystemsContent />
    </>
  );
}
