import type { Locale } from "@/lib/i18n";
import { getLocalizedUrl } from "@/lib/routing";
import { siteConfig } from "@/lib/site";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type ArticleInput = {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  keywords?: string[];
};

export function buildPersonSchema(locale: Locale) {
  const sameAs = [siteConfig.links.linkedin, siteConfig.links.github];

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}#person`,
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.jobTitle,
    description: siteConfig.description,
    url: getLocalizedUrl(locale, "/about"),
    email: siteConfig.links.email.replace("mailto:", ""),
    knowsAbout: siteConfig.keywords,
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "UTEL",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: siteConfig.author.company,
    },
    sameAs,
  };
}

export function buildWebsiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    name: siteConfig.shortName,
    alternateName: siteConfig.name,
    url: getLocalizedUrl(locale, "/"),
    inLanguage: locale === "en" ? "en-US" : "es-MX",
    author: {
      "@id": `${siteConfig.url}#person`,
    },
  };
}

export function buildCollectionPageSchema(
  locale: Locale,
  title: string,
  description: string,
  path: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: getLocalizedUrl(locale, path),
    inLanguage: locale === "en" ? "en-US" : "es-MX",
    isPartOf: {
      "@id": `${siteConfig.url}#website`,
    },
    about: {
      "@id": `${siteConfig.url}#person`,
    },
  };
}

export function buildAboutPageSchema(locale: Locale, title: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: title,
    description,
    url: getLocalizedUrl(locale, "/about"),
    inLanguage: locale === "en" ? "en-US" : "es-MX",
    mainEntity: {
      "@id": `${siteConfig.url}#person`,
    },
  };
}

export function buildBreadcrumbSchema(locale: Locale, items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getLocalizedUrl(locale, item.path),
    })),
  };
}

export function buildArticleSchema({
  locale,
  title,
  description,
  path,
  datePublished,
  dateModified,
  keywords,
}: ArticleInput) {
  const articleUrl = getLocalizedUrl(locale, path);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    inLanguage: locale === "en" ? "en-US" : "es-MX",
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    image: getLocalizedUrl(locale, siteConfig.engineeringOgImage),
    author: {
      "@id": `${siteConfig.url}#person`,
    },
    publisher: {
      "@type": "Person",
      "@id": `${siteConfig.url}#person`,
    },
    keywords,
  };
}
