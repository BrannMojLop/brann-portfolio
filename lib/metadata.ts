import type { Metadata } from "next";

import type { Locale } from "@/lib/i18n";
import { getLanguageAlternates, getLocalizedUrl } from "@/lib/routing";
import { siteConfig } from "@/lib/site";

type CreatePageMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  imagePath?: string;
  type?: "website" | "article";
};

export function createPageMetadata({
  locale,
  title,
  description,
  path,
  imagePath = siteConfig.ogImage,
  type = "website",
}: CreatePageMetadataInput): Metadata {
  const fullTitle = `${title} | ${siteConfig.shortName}`;
  const canonical = getLocalizedUrl(locale, path);
  const imageUrl = imagePath.startsWith("http")
    ? imagePath
    : getLocalizedUrl(locale, imagePath);

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords],
    alternates: {
      canonical,
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.shortName,
      type,
      locale: locale === "en" ? "en_US" : "es_MX",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.shortName} OpenGraph image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    category: title,
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.shortName,
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    other: {
      "content-language": locale === "en" ? "en-US" : "es-MX",
    },
  };
}
