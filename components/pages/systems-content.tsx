"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { localizePath } from "@/lib/routing";
import { systems } from "@/lib/systems";

export function SystemsContent() {
  const { locale, t } = useLanguage();

  return (
    <Section
      title={t.systems.title}
      description={t.systems.description}
      className="systems-page relative overflow-hidden"
    >
      <div aria-hidden className="systems-ambient">
        <div className="systems-grid" />
        <span className="systems-orbit systems-orbit-a" />
        <span className="systems-orbit systems-orbit-b" />
      </div>

      <div className="systems-intro">
        <span className="systems-intro-line" />
      </div>

      <div className="space-y-7 md:space-y-8">
        {systems.map((system) => {
          const content = system.content[locale];

          return (
            <article
              key={system.slug}
              className="system-panel rounded-[1.7rem] border border-border/70 p-6 shadow-sm md:p-7"
            >
              <span aria-hidden className="system-panel-rail" />
              <div className="space-y-6 md:space-y-7">
                <header className="system-panel-header space-y-2 border-b border-border/70 pb-5">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-[1.95rem]">
                    {content.name}
                  </h3>
                  <p className="max-w-3xl text-sm leading-6 text-muted-foreground md:text-[0.96rem]">
                    {content.tagline}
                  </p>
                </header>

                <div className="system-module system-module-accent rounded-2xl border border-primary/12 p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/85">
                    {t.systems.businessContextLabel}
                  </p>
                  <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground md:text-[0.98rem]">
                    {content.businessContext}
                  </p>
                </div>

                <div className="system-module space-y-2 rounded-2xl border border-border/65 px-4 py-4 md:px-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/85">
                    {t.systems.solutionLabel}
                  </p>
                  <p className="max-w-4xl text-sm leading-7 text-muted-foreground md:text-[0.98rem]">
                    {content.solution}
                  </p>
                </div>

                <div className="system-stack rounded-xl border border-border/70 px-4 py-3">
                  <p className="text-sm leading-6 text-foreground/90">
                    <span className="font-medium text-foreground">{t.systems.stackLabel}: </span>
                    <span className="text-muted-foreground">{content.stack}</span>
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="system-list-block rounded-2xl border border-border/65 px-4 py-4 md:px-5">
                    <h4 className="text-base font-semibold">{t.systems.architectureLabel}</h4>
                    <ul className="mt-3 space-y-2.5 text-sm leading-6 text-muted-foreground">
                      {content.architectureApproach.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="system-list-block rounded-2xl border border-border/65 px-4 py-4 md:px-5">
                    <h4 className="text-base font-semibold">{t.systems.impactLabel}</h4>
                    <ul className="mt-3 space-y-2.5 text-sm leading-6 text-muted-foreground">
                      {content.impact.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="system-list-block rounded-2xl border border-border/65 px-4 py-4 md:px-5">
                  <h4 className="text-base font-semibold">
                    {locale === "en" ? "Technical challenges" : "Retos técnicos"}
                  </h4>
                  <ul className="mt-3 space-y-2.5 text-sm leading-6 text-muted-foreground">
                    {content.technicalChallenges.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="system-list-block system-results rounded-2xl border border-border/65 px-4 py-4 md:px-5">
                  <h4 className="text-base font-semibold">
                    {locale === "en" ? "Operational results" : "Resultados operativos"}
                  </h4>
                  <ul className="mt-3 space-y-2.5 text-sm leading-6 text-muted-foreground">
                    {content.results.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-1">
                  <Link
                    href={localizePath(locale, "/contact")}
                    className="system-cta inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    {content.ctaLabel}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
