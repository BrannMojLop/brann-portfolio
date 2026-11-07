"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site";

export function ContactContent() {
  const { t } = useLanguage();
  const contact = t.contact;

  return (
    <Section className="max-w-5xl">
      <header className="max-w-3xl">
        <h1 className="text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.04em] text-balance sm:text-5xl">
          {contact.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          {contact.description}
        </p>
      </header>

      <div className="mt-8 flex flex-col gap-5 border-y border-border/70 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {contact.emailLabel}
          </p>
          <p className="mt-1 break-all text-base font-semibold text-foreground sm:text-lg">
            {contact.emailValue}
          </p>
        </div>
        <Link
          href={siteConfig.links.email}
          className="inline-flex min-h-11 w-fit shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {contact.emailCta}
          <ArrowRight aria-hidden className="size-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
        <section aria-labelledby="contact-hiring-title" className="border-t-2 border-primary/60 bg-card/70 p-5 sm:p-6">
          <h2 id="contact-hiring-title" className="text-xl font-semibold tracking-tight sm:text-2xl">
            {contact.hiringTitle}
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            {contact.hiringDescription}
          </p>
        </section>

        <section aria-labelledby="contact-projects-title" className="border-t-2 border-border bg-card/50 p-5 sm:p-6">
          <h2 id="contact-projects-title" className="text-xl font-semibold tracking-tight sm:text-2xl">
            {contact.projectsTitle}
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            {contact.projectsDescription}
          </p>
        </section>
      </div>

      <nav aria-label={contact.profilesLabel} className="mt-8 flex flex-wrap gap-3 border-t border-border/70 pt-5">
        <Link
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {contact.linkedin}
          <ArrowUpRight aria-hidden className="size-4" />
        </Link>
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {contact.github}
          <ArrowUpRight aria-hidden className="size-4" />
        </Link>
      </nav>
    </Section>
  );
}
