"use client";

import type { CSSProperties } from "react";
import { Circle, Disc3 } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  const { t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";
  const trackStyle = {
    "--thumb-size": "1.95rem",
    "--thumb-travel": "calc(100% - var(--thumb-size) - 0.5rem)",
  } as CSSProperties;

  return (
    <div className="control-shell flex w-full items-center gap-2 rounded-full border border-border/70 bg-card/72 p-1 shadow-[0_1px_0_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-sm sm:w-auto sm:gap-2 sm:p-1.5">
      <span className="control-icon flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/18 bg-primary/8 text-primary sm:size-8">
        <span className="sr-only">{t.common.theme}</span>
        <Disc3 className="size-3.5" />
      </span>
      <button
        type="button"
        onClick={() => setTheme(isLight ? "dark" : "light")}
        className={cn(
          "theme-toggle relative inline-flex h-11 flex-1 items-center overflow-hidden rounded-full border border-border/60 bg-background/78 px-1 py-1 transition-[border-color,background-color] duration-300 sm:h-10 sm:w-[6rem] sm:flex-none",
          isLight ? "text-slate-700" : "text-slate-200",
        )}
        aria-label={isLight ? t.common.switchToDark : t.common.switchToLight}
        aria-pressed={isLight}
        style={trackStyle}
      >
        <span className="sr-only">{t.common.theme}</span>
        <span
          className={cn(
            "pointer-events-none absolute inset-y-1 left-1 right-1 flex items-center transition-all duration-300",
            isLight ? "justify-end" : "justify-start",
          )}
        >
          {isLight ? (
            <Disc3 className="size-3.5 text-primary/45 sm:size-3.5" />
          ) : (
            <Circle className="size-3.5 text-muted-foreground/55 sm:size-3.5" />
          )}
        </span>
        <span
          className={cn(
            "pointer-events-none absolute inset-y-1 left-1 flex w-[var(--thumb-size)] items-center justify-center rounded-full border border-border/60 bg-card text-foreground shadow-[0_6px_14px_rgba(8,17,31,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] transition-transform duration-300 ease-out",
            isLight ? "translate-x-0" : "translate-x-[var(--thumb-travel)]",
          )}
        >
          {isLight ? <Circle className="size-3.5" /> : <Disc3 className="size-3.5 text-primary" />}
        </span>
      </button>
    </div>
  );
}
