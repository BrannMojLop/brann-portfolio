"use client";

import Link from "next/link";

import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/components/language-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { localizePath } from "@/lib/routing";

export function SiteHeader() {
  const { locale, t } = useLanguage();

  const navigation = [
    { href: localizePath(locale, "/"), label: t.nav.home },
    { href: localizePath(locale, "/systems"), label: t.nav.systems },
    { href: localizePath(locale, "/engineering"), label: t.nav.engineering },
    { href: localizePath(locale, "/about"), label: t.nav.about },
    { href: localizePath(locale, "/contact"), label: t.nav.contact },
  ] as const;

  return (
    <header className="site-chrome sticky top-0 z-30 border-b border-border/70 bg-background/82 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-6">
        <Link href={localizePath(locale, "/")} className="site-wordmark text-sm font-semibold tracking-[0.08em] text-foreground/92 transition-colors duration-300">
          Brandon Mojica
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-all duration-200 hover:bg-muted/55 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>

      <nav className="mx-auto flex w-full max-w-6xl items-center gap-1 overflow-x-auto px-6 pb-2 md:hidden">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-full px-3 py-2 text-sm text-muted-foreground transition-all duration-200 hover:bg-muted/55 hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
