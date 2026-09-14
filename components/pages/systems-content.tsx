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
      titleAs="h1"
      className="systems-page relative overflow-hidden"
    >
      <div aria-hidden className="systems-ambient">
        <div className="systems-grid" />
        <span className="systems-orbit systems-orbit-a" />
        <span className="systems-orbit systems-orbit-b" />
      </div>

      <div className="systems-intro" aria-hidden="true">
        <span className="systems-intro-line" />
      </div>

      <div className="space-y-12 md:space-y-16">
        {systems.map((system, index) => {
          const content = system.content[locale];

          return (
            <article
              key={system.slug}
              data-system={system.slug}
              className="system-case-study border-t border-border/70 pt-7 md:pt-9"
            >
              <header className="system-case-study-header grid gap-5 border-b border-border/70 pb-6 md:grid-cols-[minmax(0,0.9fr)_minmax(15rem,0.7fr)] md:items-end md:gap-10 md:pb-8">
                <div className="space-y-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/80 md:text-[11px]">
                    {String(index + 1).padStart(2, "0")} · {t.systems.architectureLabel}
                  </p>
                  <h2 className="text-[2rem] font-semibold tracking-[-0.04em] md:text-[2.65rem]">
                    {content.name}
                  </h2>
                  <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-[1.02rem]">
                    {content.tagline}
                  </p>
                </div>

                <div className="system-case-study-signal border-l border-primary/35 pl-4 md:justify-self-end md:max-w-sm md:pl-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80 md:text-[11px]">
                    {t.systems.impactLabel}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground/85">{content.impact[0]}</p>
                </div>
              </header>

              <div className="system-case-study-body grid gap-9 pt-7 md:gap-12 md:pt-9 lg:grid-cols-[minmax(0,1.1fr)_minmax(17rem,0.72fr)] lg:gap-16">
                <div className="system-case-study-narrative space-y-8 md:space-y-10">
                  <section className="system-case-study-section space-y-3">
                    <h3>{t.systems.businessContextLabel}</h3>
                    <p>{content.businessContext}</p>
                  </section>

                  <section className="system-case-study-section system-case-study-solution space-y-3">
                    <h3>{t.systems.solutionLabel}</h3>
                    <p>{content.solution}</p>
                  </section>

                  <section className="system-case-study-section system-case-study-current space-y-4">
                    <h3>{t.systems.impactLabel}</h3>
                    <ul>
                      {content.results.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                </div>

                <aside className="system-case-study-rail space-y-7 border-t border-border/70 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <section className="system-case-study-section space-y-3">
                    <h3>{t.systems.responsibilityLabel}</h3>
                    <p>{content.responsibility}</p>
                  </section>

                  <section className="system-case-study-section space-y-3">
                    <h3>{t.systems.architectureLabel}</h3>
                    <ul>
                      {content.architectureApproach.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="system-case-study-section space-y-3">
                    <h3>{t.systems.constraintsLabel}</h3>
                    <ul>
                      {content.constraints.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="system-case-study-section space-y-3">
                    <h3>{locale === "en" ? "Technical challenges" : "Retos técnicos"}</h3>
                    <ul>
                      {content.technicalChallenges.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="system-case-study-section system-case-study-stack space-y-3">
                    <h3>{t.systems.stackLabel}</h3>
                    <p>{content.stack}</p>
                  </section>
                </aside>
              </div>

              <footer className="system-case-study-footer mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-5 md:mt-10 md:pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {t.systems.constraintsLabel} · {content.constraints.length}
                </p>
                <Link
                  href={localizePath(locale, "/contact")}
                  className="system-cta inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {content.ctaLabel}
                </Link>
              </footer>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
