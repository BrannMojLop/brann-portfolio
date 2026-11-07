"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { localizePath } from "@/lib/routing";

export function AboutContent() {
  const { locale, t } = useLanguage();
  const about = t.about;

  return (
    <Section className="space-y-12 md:space-y-16">
      <header className="grid gap-8 border-b border-border/70 pb-10 md:grid-cols-[minmax(0,1fr)_12rem] md:items-center md:gap-12">
        <div>
          <h1 className="max-w-[17ch] text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.04em] text-balance sm:text-5xl">
            {about.title}
          </h1>
          <p className="mt-5 max-w-[68ch] text-lg leading-8 text-foreground/90">
            {about.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={localizePath(locale, "/systems")}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {about.systemsCta}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
            <Link
              href={localizePath(locale, "/contact")}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-card/70 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {about.contactCta}
            </Link>
          </div>
        </div>

        <Image
          src="/profile.png"
          alt="Brandon Mojica Lopez"
          width={192}
          height={192}
          priority
          className="mx-auto size-36 rounded-full border border-border/70 object-cover md:size-44"
        />
      </header>

      <section aria-labelledby="about-systems-title" className="space-y-6">
        <header className="max-w-3xl">
          <h2 id="about-systems-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {about.systemsTitle}
          </h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            {about.systemsDescription}
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <article className="border-t-2 border-primary/60 bg-card/70 px-5 py-5 sm:px-6 sm:py-6">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {about.businextTitle}
            </h3>
            <p className="mt-3 max-w-[62ch] text-sm leading-7 text-muted-foreground sm:text-base">
              {about.businextDescription}
            </p>
          </article>
          <article className="border-t-2 border-primary/60 bg-card/70 px-5 py-5 sm:px-6 sm:py-6">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {about.tr0v1Title}
            </h3>
            <p className="mt-3 max-w-[62ch] text-sm leading-7 text-muted-foreground sm:text-base">
              {about.tr0v1Description}
            </p>
          </article>
        </div>

        <aside className="flex flex-col gap-2 border-t border-border/70 pt-5 sm:flex-row sm:items-baseline sm:gap-4">
          <h3 className="shrink-0 text-base font-semibold">{about.workforceTitle}</h3>
          <p className="text-sm leading-6 text-muted-foreground">
            <span className="font-medium text-primary-text">{about.workforceStatus}</span>
            <span className="mx-2" aria-hidden="true">·</span>
            {about.workforceDescription}
          </p>
        </aside>
      </section>

      <section className="grid gap-8 border-t border-border/70 pt-8 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {about.approachTitle}
          </h2>
          <p className="mt-3 max-w-[66ch] text-base leading-7 text-muted-foreground">
            {about.approachDescription}
          </p>
          <ul className="mt-6 space-y-4">
            {about.approachPrinciples.map((item) => (
              <li key={item.title} className="border-t border-border/70 pt-4">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="self-start border-t-2 border-primary/60 bg-card/70 p-5 sm:p-6">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {about.aiTitle}
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            {about.aiDescription}
          </p>
          <p className="mt-5 border-t border-border/70 pt-4 text-sm leading-6 text-foreground/85">
            {about.focusTitle}: {about.focusDescription}
          </p>
        </aside>
      </section>
    </Section>
  );
}
