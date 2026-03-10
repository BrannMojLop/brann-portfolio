import { EngineeringContent } from "@/components/pages/engineering-content";
import { StructuredData } from "@/components/structured-data";
import { getAllEngineeringPosts } from "@/lib/engineering";
import { createPageMetadata } from "@/lib/metadata";
import { messages } from "@/lib/i18n";
import { buildBreadcrumbSchema, buildCollectionPageSchema } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  locale: "en",
  title: messages.en.engineering.title,
  description: messages.en.engineering.description,
  path: "/engineering",
  imagePath: "/engineering/opengraph-image",
});

export default async function EngineeringPage() {
  const posts = await getAllEngineeringPosts("en");

  return (
    <>
      <StructuredData
        data={[
          buildCollectionPageSchema(
            "en",
            messages.en.engineering.title,
            messages.en.engineering.description,
            "/engineering",
          ),
          buildBreadcrumbSchema("en", [
            { name: "Home", path: "/" },
            { name: "Engineering", path: "/engineering" },
          ]),
        ]}
      />
      <EngineeringContent posts={posts} />
    </>
  );
}
