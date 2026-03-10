import { ContactContent } from "@/components/pages/contact-content";
import { StructuredData } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  locale: "es",
  title: "Contacto",
  description:
    "Contacto de Brandon Mojica Lopez para conversar sobre arquitectura backend, sistemas ERP, FastAPI y oportunidades remotas en producto.",
  path: "/contact",
});

export default function SpanishContactPage() {
  return (
    <>
      <StructuredData
        data={[
          buildCollectionPageSchema(
            "es",
            "Contacto con Brandon Mojica Lopez",
            "Página de contacto para conversaciones sobre backend engineering, ERP, sistemas financieros y producto.",
            "/contact",
          ),
          buildBreadcrumbSchema("es", [
            { name: "Inicio", path: "/" },
            { name: "Contacto", path: "/contact" },
          ]),
        ]}
      />
      <ContactContent />
    </>
  );
}
