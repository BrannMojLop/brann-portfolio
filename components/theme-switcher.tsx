"use client";

import { Circle, Disc3 } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  const { t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="control-shell flex items-center gap-1 rounded-full border border-border/70 bg-card/80 p-1 shadow-[0_1px_0_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-sm sm:gap-2 sm:p-1.5">
      <span className="control-icon flex size-8 items-center justify-center rounded-full border border-primary/18 bg-primary/10 text-primary">
        <span className="sr-only">{t.common.theme}</span>
        <Disc3 className="size-3.5" />
      </span>
      <button
        type="button"
        onClick={() => setTheme(isLight ? "dark" : "light")}
        className={cn(
          "theme-toggle relative inline-flex h-8 w-10 items-center rounded-full border border-border/60 bg-background/70 p-1 transition-colors duration-300 sm:h-9 sm:w-[4.25rem]",
          isLight ? "text-slate-700" : "text-slate-200",
        )}
        aria-label={isLight ? t.common.switchToDark : t.common.switchToLight}
        aria-pressed={isLight}
      >
        <span className="sr-only">{t.common.theme}</span>
        <span className="hidden w-full items-center justify-between px-1 sm:flex">
          <Circle className={cn("size-3.5 transition-all duration-300", isLight ? "text-foreground" : "text-muted-foreground/70")} />
          <Disc3 className="size-3.5" />
        </span>
        <span className="flex w-full items-center justify-center sm:hidden">
          {isLight ? (
            <Circle className="size-3.5 text-muted-foreground/70" />
          ) : (
            <Disc3 className="size-3.5 text-primary" />
          )}
        </span>
        <span
          className={cn(
            "absolute top-1 flex size-6 items-center justify-center rounded-full border border-border/60 bg-card text-foreground shadow-[0_6px_14px_rgba(8,17,31,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 ease-out sm:size-7",
            isLight ? "left-1" : "left-[1.55rem] sm:left-[2.1rem]",
          )}
        >
          {isLight ? <Circle className="size-3.5" /> : <Disc3 className="size-3.5 text-primary" />}
        </span>
      </button>
    </div>
  );
}
