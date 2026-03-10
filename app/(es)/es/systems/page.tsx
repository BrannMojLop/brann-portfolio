import { SystemsContent } from "@/components/pages/systems-content";
import { StructuredData } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  locale: "es",
  title: "Arquitectura de Sistemas Empresariales",
  description:
    "Casos de arquitectura de Businext ERP y TR0V1 Credit Platform con contexto de negocio, decisiones de dominio, diseño backend y confiabilidad operativa.",
  path: "/systems",
});

export default function SpanishSystemsPage() {
  return (
    <>
      <StructuredData
        data={[
          buildCollectionPageSchema(
            "es",
            "Arquitectura de Sistemas Empresariales",
            "Casos de arquitectura de plataformas ERP y financieras construidas para operación real.",
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
