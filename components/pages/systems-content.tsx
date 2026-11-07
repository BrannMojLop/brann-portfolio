"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { localizePath } from "@/lib/routing";
import { systems, systemsCaseStudies } from "@/lib/systems";

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
        {systems.map((system) => {
          const content = systemsCaseStudies[system.slug][locale];
          const identity = system.content[locale];

          return (
            <article
              key={system.slug}
              id={system.slug}
              data-system={system.slug}
              className="system-case-study scroll-mt-24 border-t border-border/70 pt-7 md:pt-9"
            >
              <header className="system-case-study-header grid gap-5 border-b border-border/70 pb-6 md:grid-cols-[minmax(0,0.9fr)_minmax(15rem,0.7fr)] md:items-end md:gap-10 md:pb-8">
                <div className="space-y-3">
                  <h2 className="text-[2rem] font-semibold tracking-[-0.04em] md:text-[2.65rem]">
                    {identity.name}
                  </h2>
                  <p className="max-w-3xl text-base leading-7 text-muted-foreground md:text-[1.02rem]">
                    {content.context}
                  </p>
                  {content.status && (
                    <p className="w-fit border-t border-primary/40 pt-2 text-sm font-medium text-primary-text">
                      {content.status}
                    </p>
                  )}
                </div>

                <div className="system-case-study-signal border-l border-primary/35 pl-4 md:justify-self-end md:max-w-sm md:pl-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-text md:text-[11px]">
                    {t.systems.purposeLabel}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground/85">{content.purpose}</p>
                </div>
              </header>

              <div className="system-case-study-body grid gap-9 pt-7 md:gap-12 md:pt-9 lg:grid-cols-[minmax(0,1.1fr)_minmax(17rem,0.72fr)] lg:gap-16">
                <div className="system-case-study-narrative space-y-8 md:space-y-10">
                  <section className="system-case-study-section space-y-3">
                    <h3>{t.systems.responsibilityLabel}</h3>
                    <p>{content.responsibility}</p>
                  </section>

                  <section className="system-case-study-section system-case-study-solution space-y-3">
                    <h3>{t.systems.decisionsLabel}</h3>
                    <ul>
                      {content.decisions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                </div>

                <aside className="system-case-study-rail space-y-7 border-t border-border/70 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <section className="system-case-study-section space-y-3">
                    <h3>{t.systems.constraintsLabel}</h3>
                    <ul>
                      {content.considerations.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="system-case-study-section system-case-study-stack space-y-3">
                    <h3>{t.systems.stackLabel}</h3>
                    <p>{content.technology}</p>
                  </section>
                </aside>
              </div>

              <footer className="system-case-study-footer mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-5 md:mt-10 md:pt-6">
                <Link
                  href={localizePath(locale, "/contact")}
                  className="system-cta inline-flex min-h-11 items-center py-2 text-sm font-medium text-primary-text underline-offset-4 transition-colors hover:text-primary-text hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
