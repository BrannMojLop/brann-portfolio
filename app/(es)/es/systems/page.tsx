import { SystemsContent } from "@/components/pages/systems-content";
import { StructuredData } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  locale: "es",
  title: "Sistemas definidos por restricciones operativas",
  description:
    "Describo cada sistema a partir de su contexto, mi responsabilidad, las decisiones de arquitectura, las restricciones y su estado actual verificable.",
  path: "/systems",
});

export default function SpanishSystemsPage() {
  return (
    <>
      <StructuredData
        data={[
          buildCollectionPageSchema(
            "es",
            "Sistemas definidos por restricciones operativas",
            "Describo cada sistema a partir de su contexto, mi responsabilidad, las decisiones de arquitectura, las restricciones y su estado actual verificable.",
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
