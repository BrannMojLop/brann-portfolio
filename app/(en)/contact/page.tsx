import { ContactContent } from "@/components/pages/contact-content";
import { StructuredData } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  locale: "en",
  title: "Contact",
  description:
    "I welcome conversations about software architecture, backend systems, enterprise platforms, financial workflows, data integrity, and maintainability.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={[
          buildCollectionPageSchema(
            "en",
            "Contact Brandon Mojica Lopez",
            "I welcome conversations about software architecture, backend systems, enterprise platforms, financial workflows, data integrity, and maintainability.",
            "/contact",
          ),
          buildBreadcrumbSchema("en", [
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <ContactContent />
    </>
  );
}
