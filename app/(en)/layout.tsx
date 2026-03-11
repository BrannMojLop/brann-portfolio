import type { Metadata } from "next";

import { SiteShell } from "@/components/site-shell";
import { siteConfig } from "@/lib/site";
import "./../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-dark.ico", sizes: "any" },
      { url: "/favicon-dark.svg", type: "image/svg+xml" },
      { url: "/favicon-dark-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon-dark.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon-dark.ico"],
  },
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
