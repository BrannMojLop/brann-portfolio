"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { localizePath } from "@/lib/routing";
import { systems } from "@/lib/systems";

export function SystemsContent() {
  const { locale, t } = useLanguage();

  return (
    <Section title={t.systems.title} description={t.systems.description}>
      <div className="space-y-6">
        {systems.map((system) => {
          const content = system.content[locale];

          return (
            <article
              key={system.slug}
              className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm md:p-7"
            >
              <div className="space-y-6">
                <header className="space-y-2 border-b border-border/70 pb-5">
                  <h3 className="text-2xl font-semibold tracking-tight">{content.name}</h3>
                  <p className="max-w-3xl text-sm leading-6 text-muted-foreground md:text-[0.96rem]">
                    {content.tagline}
                  </p>
                </header>

                <div className="rounded-2xl border border-primary/12 bg-primary/[0.045] p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/85">
                    Business context
                  </p>
                  <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground md:text-[0.98rem]">
                    {content.businessContext}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/85">
                    {t.systems.solutionLabel}
                  </p>
                  <p className="max-w-4xl text-sm leading-7 text-muted-foreground md:text-[0.98rem]">
                    {content.solution}
                  </p>
                </div>

                <div className="rounded-xl border border-border/70 bg-background/70 px-4 py-3">
                  <p className="text-sm leading-6 text-foreground/90">
                    <span className="font-medium text-foreground">{t.systems.stackLabel}: </span>
                    <span className="text-muted-foreground">{content.stack}</span>
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="text-base font-semibold">{t.systems.architectureLabel}</h4>
                    <ul className="mt-3 space-y-2.5 text-sm leading-6 text-muted-foreground">
                      {content.architectureApproach.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base font-semibold">{t.systems.impactLabel}</h4>
                    <ul className="mt-3 space-y-2.5 text-sm leading-6 text-muted-foreground">
                      {content.impact.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-semibold">
                    {locale === "en" ? "Technical challenges" : "Retos técnicos"}
                  </h4>
                  <ul className="mt-3 space-y-2.5 text-sm leading-6 text-muted-foreground">
                    {content.technicalChallenges.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
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
                    className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
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
