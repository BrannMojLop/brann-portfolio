import { SystemsContent } from "@/components/pages/systems-content";
import { StructuredData } from "@/components/structured-data";
import { messages } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  locale: "en",
  title: messages.en.systems.title,
  description: messages.en.systems.description,
  path: "/systems",
});

export default function SystemsPage() {
  return (
    <>
      <StructuredData
        data={[
          buildCollectionPageSchema(
            "en",
            messages.en.systems.title,
            messages.en.systems.description,
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
