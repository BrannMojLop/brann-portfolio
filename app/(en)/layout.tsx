import type { Metadata } from "next";

import { SiteShell } from "@/components/site-shell";
import { siteConfig } from "@/lib/site";
import "./../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
