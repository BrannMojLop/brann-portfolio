import { EngineeringContent } from "@/components/pages/engineering-content";
import { StructuredData } from "@/components/structured-data";
import { getAllEngineeringPosts } from "@/lib/engineering";
import { createPageMetadata } from "@/lib/metadata";
import { messages } from "@/lib/i18n";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  locale: "es",
  title: messages.es.engineering.title,
  description: messages.es.engineering.description,
  path: "/engineering",
  imagePath: "/engineering/opengraph-image",
});

export default async function SpanishEngineeringPage() {
  const posts = await getAllEngineeringPosts("es");

  return (
    <>
      <StructuredData
        data={[
          buildCollectionPageSchema(
            "es",
            messages.es.engineering.title,
            messages.es.engineering.description,
            "/engineering",
          ),
          buildBreadcrumbSchema("es", [
            { name: "Inicio", path: "/" },
            { name: "Ingeniería", path: "/engineering" },
          ]),
        ]}
      />
      <EngineeringContent posts={posts} />
    </>
  );
}
