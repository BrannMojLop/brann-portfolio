"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { localizePath } from "@/lib/routing";
import { systems } from "@/lib/systems";

const technologies = ["Python", "FastAPI", "React", "AWS"];

export function HomeContent() {
  const { locale, t } = useLanguage();
  const copy = t.home.projectCopy;
  const businext = systems.find((system) => system.slug === "businext-erp");
  const tr0v1 = systems.find((system) => system.slug === "tr0v1-credit-platform");
  const workforce = systems.find((system) => system.slug === "workforce");

  if (!businext || !tr0v1 || !workforce) {
    throw new Error("Home selected work is missing a system entry.");
  }

  return (
    <>
      <Section className="hero-stage relative isolate overflow-hidden border-b border-border/60 py-12 sm:py-14 md:py-16">
        <div aria-hidden className="hero-ambient">
          <div className="hero-grid" />
          <span className="hero-orbit hero-orbit-a" />
          <span className="hero-orbit hero-orbit-b" />
          <span className="hero-scanline" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-text md:text-xs">
            {t.home.eyebrow}
          </p>
          <h1 className="hero-title max-w-[22ch] text-[2.55rem] font-semibold leading-[1.03] tracking-[-0.045em] text-balance sm:text-5xl md:text-[4.25rem] md:leading-[1.02]">
            {t.home.title}
          </h1>
          <p className="mt-6 max-w-[62ch] text-base leading-7 text-foreground/85 sm:text-lg sm:leading-8">
            {t.home.intro}
          </p>

          <div role="group" aria-label={t.home.stackLabel} className="mt-6 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <Badge
                key={technology}
                variant="secondary"
                className="rounded-md border border-primary/15 bg-card/90 px-3 py-1.5 font-mono text-xs tracking-wide text-foreground"
              >
                {technology}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#selected-work"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t.home.exploreSystems}
              <ArrowDownRight aria-hidden className="size-4" />
            </Link>
            <Link
              href={localizePath(locale, "/contact")}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-card/70 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t.home.contactCta}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section
        id="selected-work"
        title={t.home.majorSystemsTitle}
        description={t.home.majorSystemsDesc}
        className="scroll-mt-24 py-14 md:py-16"
      >
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {[businext, tr0v1].map((system, index) => {
            const project = index === 0 ? copy.businext : copy.tr0v1;
            const content = system.content[locale];

            return (
              <article
                key={system.slug}
                className="group flex h-full flex-col border-t-2 border-primary/60 bg-card/70 px-5 py-5 transition-colors hover:bg-card sm:px-6 sm:py-6"
              >
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary-text">
                  {project.focus}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                  {content.name}
                </h3>
                <p className="mt-3 max-w-[58ch] text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  {project.summary}
                </p>
                <Link
                  href={localizePath(locale, `/systems#${system.slug}`)}
                  className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-primary-text underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {project.linkLabel}
                  <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>

        <article className="mt-5 flex flex-col gap-3 border-t border-border/70 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold">{workforce.content[locale].name}</h3>
              <p className="text-sm font-medium text-primary-text">{copy.workforce.status}</p>
            </div>
            <p className="mt-1 max-w-[68ch] text-sm leading-6 text-muted-foreground">
              {copy.workforce.summary}
            </p>
          </div>
          <Link
            href={localizePath(locale, `/systems#${workforce.slug}`)}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-primary-text underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {copy.workforce.linkLabel}
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </article>
      </Section>

      <Section className="border-t border-border/60 py-12 md:py-14">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.7fr)] md:gap-14">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t.home.approachTitle}
            </h2>
            <p className="mt-4 max-w-[68ch] text-base leading-7 text-muted-foreground">
              {t.home.approach}
            </p>
          </div>
          <aside className="border-l border-primary/40 pl-5 sm:pl-6">
            <h3 className="text-lg font-semibold">{t.home.aiTitle}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {t.home.aiDescription}
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
