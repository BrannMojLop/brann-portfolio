import { ContactContent } from "@/components/pages/contact-content";
import { StructuredData } from "@/components/structured-data";
import { messages } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/structured-data";

const contact = messages.es.contact;

export const metadata = createPageMetadata({
  locale: "es",
  title: contact.metadata.title,
  description: contact.metadata.description,
  path: "/contact",
});

export default function SpanishContactPage() {
  return (
    <>
      <StructuredData
        data={[
          buildCollectionPageSchema(
            "es",
            `${contact.metadata.title} con Brandon Mojica Lopez`,
            contact.metadata.description,
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
