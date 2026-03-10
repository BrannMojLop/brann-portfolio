"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { localizePath } from "@/lib/routing";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const { locale, t } = useLanguage();

  return (
    <footer className="border-t border-border/70 py-8 md:py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p className="leading-6">
          © {new Date().getFullYear()} Brandon Mojica Lopez. {t.footer.copy}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
            {t.footer.linkedin}
          </Link>
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
            {t.footer.github}
          </Link>
          <Link href={localizePath(locale, "/contact")} className="transition-colors hover:text-foreground">
            {t.footer.email}
          </Link>
        </div>
      </div>
    </footer>
  );
}
