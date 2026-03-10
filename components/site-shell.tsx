import type { Locale } from "@/lib/i18n";

import { LanguageProvider } from "@/components/language-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeScript } from "@/components/theme-script";

export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="bg-background font-sans text-foreground antialiased">
        <ThemeScript />
        <ThemeProvider>
          <LanguageProvider initialLocale={locale}>
            <div className="relative min-h-screen overflow-x-hidden">
              <div className="theme-backdrop pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,_rgba(94,234,212,0.12),_transparent_40%),radial-gradient(circle_at_90%_10%,_rgba(56,189,248,0.16),_transparent_35%)]" />
              <SiteHeader />
              <main>{children}</main>
              <SiteFooter />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
