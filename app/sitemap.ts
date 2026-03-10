import type { MetadataRoute } from "next";

import { getEngineeringPostSlugs } from "@/lib/engineering";
import { getLocalizedUrl } from "@/lib/routing";

const basePaths = ["/", "/systems", "/engineering", "/about", "/contact"] as const;
const locales = ["en", "es"] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getEngineeringPostSlugs();
  const now = new Date();

  const staticEntries = locales.flatMap((locale) =>
    basePaths.map((path) => ({
      url: getLocalizedUrl(locale, path),
      lastModified: now,
      alternates: {
        languages: {
          "en-US": getLocalizedUrl("en", path),
          "es-MX": getLocalizedUrl("es", path),
        },
      },
    })),
  );

  const postEntries = locales.flatMap((locale) =>
    posts.map((slug) => {
      const path = `/engineering/${slug}`;

      return {
        url: getLocalizedUrl(locale, path),
        lastModified: now,
        alternates: {
          languages: {
            "en-US": getLocalizedUrl("en", path),
            "es-MX": getLocalizedUrl("es", path),
          },
        },
      };
    }),
  );

  return [...staticEntries, ...postEntries];
}
