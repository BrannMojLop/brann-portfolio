"use client";

import Image from "next/image";
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
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-6">
        <Link
          href={localizePath(locale, "/")}
          className="site-wordmark flex min-w-0 flex-1 items-center gap-2 text-sm font-semibold tracking-[0.05em] text-foreground/92 transition-colors duration-300 sm:flex-none sm:gap-3 sm:tracking-[0.08em]"
        >
          <Image
            src="/brand-mark.svg"
            alt="Brandon Mojica logo"
            width={28}
            height={28}
            className="h-6 w-6 rounded-md sm:h-7 sm:w-7"
            priority
          />
          <span className="truncate">
            Brandon <span className="max-[380px]:hidden">Mojica</span>
          </span>
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

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
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
