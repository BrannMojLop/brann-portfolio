import { AboutContent } from "@/components/pages/about-content";
import { StructuredData } from "@/components/structured-data";
import { messages } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { buildAboutPageSchema, buildBreadcrumbSchema } from "@/lib/structured-data";

const about = messages.es.about;

export const metadata = createPageMetadata({
  locale: "es",
  title: about.metadata.title,
  description: about.metadata.description,
  path: "/about",
});

export default function SpanishAboutPage() {
  return (
    <>
      <StructuredData
        data={[
          buildAboutPageSchema("es", about.metadata.title, about.metadata.description),
          buildBreadcrumbSchema("es", [
            { name: "Inicio", path: "/" },
            { name: "Sobre mí", path: "/about" },
          ]),
        ]}
      />
      <AboutContent />
    </>
  );
}
