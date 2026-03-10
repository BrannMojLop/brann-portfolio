import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export const localePrefixMap: Record<Locale, string> = {
  en: "",
  es: "/es",
};

export function localizePath(locale: Locale, path: string) {
  if (path === "/") {
    return localePrefixMap[locale] || "/";
  }

  return `${localePrefixMap[locale]}${path}`.replace(/\/{2,}/g, "/");
}

export function getLocalizedUrl(locale: Locale, path: string) {
  return `${siteConfig.url}${localizePath(locale, path)}`;
}

export function stripLocalePrefix(pathname: string) {
  if (pathname === "/es" || pathname.startsWith("/es/")) {
    const stripped = pathname.slice(3);
    return stripped ? stripped : "/";
  }

  return pathname || "/";
}

export function switchLocalePath(pathname: string, locale: Locale) {
  return localizePath(locale, stripLocalePrefix(pathname));
}

export function getLanguageAlternates(path: string) {
  return {
    "en-US": getLocalizedUrl("en", path),
    "es-MX": getLocalizedUrl("es", path),
    "x-default": getLocalizedUrl("en", path),
  };
}
