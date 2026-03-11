"use client";

import { Moon, SunMedium } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  const { t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";
  const actionLabel = isLight ? t.common.switchToDark : t.common.switchToLight;

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className={cn(
        "theme-toggle inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-[1.1rem] border border-border/70 bg-card/78 text-foreground shadow-[0_10px_24px_rgba(8,17,31,0.18),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-[border-color,background-color,color,box-shadow] duration-200 hover:border-primary/35 hover:bg-card/92 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:size-10",
        isLight ? "text-amber-300" : "text-sky-200",
      )}
      aria-label={actionLabel}
      title={actionLabel}
    >
      <span className="sr-only">{t.common.theme}</span>
      {isLight ? <SunMedium className="size-5 sm:size-4.5" /> : <Moon className="size-5 sm:size-4.5" />}
    </button>
  );
}
