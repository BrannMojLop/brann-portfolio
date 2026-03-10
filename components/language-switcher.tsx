"use client";

import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { localeLabels, type Locale } from "@/lib/i18n";
import { useLanguage } from "@/components/language-provider";
import { switchLocalePath } from "@/lib/routing";

const locales: Locale[] = ["en", "es"];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const activeIndex = locales.indexOf(locale);

  return (
    <div className="control-shell flex items-center gap-2 rounded-full border border-border/70 bg-card/80 p-1.5 shadow-[0_1px_0_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-sm">
      <div className="flex items-center gap-2 pl-1.5">
        <span className="control-icon flex size-7 items-center justify-center rounded-full border border-primary/18 bg-primary/10 text-primary">
          <Languages className="size-3.5" />
        </span>
        <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:inline">
          {t.common.language}
        </span>
      </div>
      <div className="relative inline-flex rounded-full border border-border/60 bg-background/70 p-0.5">
        <span
          className="pointer-events-none absolute inset-y-0.5 rounded-full bg-primary/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform duration-300 ease-out"
          style={{
            width: "calc(50% - 2px)",
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        />
        {locales.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => {
              setLocale(option);
              router.push(switchLocalePath(pathname, option));
            }}
            className={cn(
              "relative z-10 min-w-11 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] transition-all duration-200",
              locale === option
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
            aria-label={localeLabels[option]}
            aria-pressed={locale === option}
          >
            {option.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
