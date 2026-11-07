import { ContactContent } from "@/components/pages/contact-content";
import { StructuredData } from "@/components/structured-data";
import { messages } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/structured-data";

const contact = messages.en.contact;

export const metadata = createPageMetadata({
  locale: "en",
  title: contact.metadata.title,
  description: contact.metadata.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={[
          buildCollectionPageSchema(
            "en",
            `${contact.metadata.title} Brandon Mojica Lopez`,
            contact.metadata.description,
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
