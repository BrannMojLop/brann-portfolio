import { AboutContent } from "@/components/pages/about-content";
import { StructuredData } from "@/components/structured-data";
import { messages } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { buildAboutPageSchema, buildBreadcrumbSchema } from "@/lib/structured-data";

const about = messages.en.about;

export const metadata = createPageMetadata({
  locale: "en",
  title: about.metadata.title,
  description: about.metadata.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={[
          buildAboutPageSchema("en", about.metadata.title, about.metadata.description),
          buildBreadcrumbSchema("en", [
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <AboutContent />
    </>
  );
}
