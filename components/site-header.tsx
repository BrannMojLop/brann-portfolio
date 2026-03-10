"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/components/language-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { localizePath } from "@/lib/routing";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { locale, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { href: localizePath(locale, "/"), label: t.nav.home },
    { href: localizePath(locale, "/systems"), label: t.nav.systems },
    { href: localizePath(locale, "/engineering"), label: t.nav.engineering },
    { href: localizePath(locale, "/about"), label: t.nav.about },
    { href: localizePath(locale, "/contact"), label: t.nav.contact },
  ] as const;

  return (
    <header className="site-chrome sticky top-0 z-30 border-b border-border/70 bg-background/78 backdrop-blur-xl">
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

        <div className="hidden shrink-0 items-center gap-1 sm:gap-2 md:flex">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="mobile-menu-trigger inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-card/78 text-foreground shadow-[0_10px_24px_rgba(8,17,31,0.18),inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-200 hover:border-primary/35 hover:text-primary md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-site-menu"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
        </button>
      </div>

      <div
        id="mobile-site-menu"
        className={cn(
          "mobile-menu-panel mx-auto grid w-full max-w-6xl overflow-hidden px-4 transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden sm:px-6",
          mobileMenuOpen
            ? "pointer-events-auto grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <div className="mobile-menu-surface mb-3 rounded-[1.75rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_24%),linear-gradient(135deg,rgba(94,234,212,0.07),transparent_52%),color-mix(in_srgb,var(--card)_94%,transparent)] p-3 shadow-[0_20px_50px_rgba(8,17,31,0.2),inset_0_1px_0_rgba(255,255,255,0.05)]">
            <nav className="grid gap-2" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-drawer-link group flex items-center justify-between rounded-2xl border border-transparent bg-muted/30 px-4 py-3 text-sm font-medium text-foreground/88 transition-all duration-200 hover:border-primary/20 hover:bg-muted/55 hover:text-foreground"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="size-4 text-primary/60 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </nav>

            <div className="mt-3 rounded-2xl border border-border/60 bg-background/36 p-3">
              <div className="grid gap-3 min-[520px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <div className="grid gap-2">
                  <span className="px-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {t.common.language}
                  </span>
                  <LanguageSwitcher />
                </div>
                <div className="grid gap-2.5">
                  <span className="px-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {t.common.theme}
                  </span>
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
