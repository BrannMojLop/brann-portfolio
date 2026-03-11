import type { Theme } from "@/lib/theme-storage";

export const themeBranding = {
  dark: {
    logo: "/brand-mark.svg",
    faviconIco: "/favicon-dark.ico",
    faviconSvg: "/favicon-dark.svg",
    faviconPng96: "/favicon-dark-96x96.png",
    appleTouchIcon: "/apple-touch-icon-dark.png",
    manifest: "/site.webmanifest",
    themeColor: "#121212",
  },
  light: {
    logo: "/brand-mark-light.svg",
    faviconIco: "/favicon-light.ico",
    faviconSvg: "/favicon-light.svg",
    faviconPng96: "/favicon-light-96x96.png",
    appleTouchIcon: "/apple-touch-icon-light.png",
    manifest: "/site-light.webmanifest",
    themeColor: "#FFFFFF",
  },
} satisfies Record<
  Theme,
  {
    logo: string;
    faviconIco: string;
    faviconSvg: string;
    faviconPng96: string;
    appleTouchIcon: string;
    manifest: string;
    themeColor: string;
  }
>;

function upsertLink(selector: string, attributes: Record<string, string>) {
  let link = document.head.querySelector<HTMLLinkElement>(selector);

  if (!link) {
    link = document.createElement("link");
    document.head.appendChild(link);
  }

  for (const [key, value] of Object.entries(attributes)) {
    link.setAttribute(key, value);
  }
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);

  if (!meta) {
    meta = document.createElement("meta");
    document.head.appendChild(meta);
  }

  for (const [key, value] of Object.entries(attributes)) {
    meta.setAttribute(key, value);
  }
}

export function applyThemeBranding(theme: Theme) {
  const assets = themeBranding[theme];

  upsertLink('link[data-branding="favicon-ico"]', {
    rel: "icon",
    href: assets.faviconIco,
    sizes: "any",
    "data-branding": "favicon-ico",
  });
  upsertLink('link[data-branding="favicon-svg"]', {
    rel: "icon",
    href: assets.faviconSvg,
    type: "image/svg+xml",
    "data-branding": "favicon-svg",
  });
  upsertLink('link[data-branding="favicon-png"]', {
    rel: "icon",
    href: assets.faviconPng96,
    sizes: "96x96",
    type: "image/png",
    "data-branding": "favicon-png",
  });
  upsertLink('link[data-branding="apple-touch-icon"]', {
    rel: "apple-touch-icon",
    href: assets.appleTouchIcon,
    sizes: "180x180",
    type: "image/png",
    "data-branding": "apple-touch-icon",
  });
  upsertLink('link[data-branding="shortcut-icon"]', {
    rel: "shortcut icon",
    href: assets.faviconIco,
    "data-branding": "shortcut-icon",
  });
  upsertLink('link[data-branding="manifest"]', {
    rel: "manifest",
    href: assets.manifest,
    "data-branding": "manifest",
  });
  upsertMeta('meta[name="theme-color"]', {
    name: "theme-color",
    content: assets.themeColor,
  });
}
