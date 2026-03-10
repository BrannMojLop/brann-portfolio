import { ContactContent } from "@/components/pages/contact-content";
import { StructuredData } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  locale: "en",
  title: "Contact",
  description:
    "Contact Brandon Mojica Lopez about backend engineering, ERP systems, FastAPI architecture, and enterprise software opportunities.",
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
            "Contact page for architecture, backend engineering, ERP systems, and product opportunities.",
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
