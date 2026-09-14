import { ContactContent } from "@/components/pages/contact-content";
import { StructuredData } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  locale: "es",
  title: "Contacto",
  description:
    "Me interesan conversaciones sobre arquitectura de software, sistemas backend, plataformas empresariales, flujos financieros, integridad de datos y mantenibilidad.",
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
            "Me interesan conversaciones sobre arquitectura de software, sistemas backend, plataformas empresariales, flujos financieros, integridad de datos y mantenibilidad.",
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
