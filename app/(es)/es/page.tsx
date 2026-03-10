import { HomeContent } from "@/components/pages/home-content";
import { StructuredData } from "@/components/structured-data";
import { buildPersonSchema, buildWebsiteSchema } from "@/lib/structured-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  locale: "es",
  title: "Portafolio de Ingeniero de Software",
  description:
    "Portafolio de Brandon Mojica Lopez, ingeniero de software, arquitecto de sistemas y especialista en ERP, FastAPI y plataformas empresariales construidas para operación real.",
  path: "/",
});

export default function SpanishHomePage() {
  return (
    <>
      <StructuredData data={[buildPersonSchema("es"), buildWebsiteSchema("es")]} />
      <HomeContent />
    </>
  );
}
