"use client";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function ContactContent() {
  const { t } = useLanguage();
  const contact = t.contact;

  return (
    <Section title={contact.title} description={contact.description} className="max-w-4xl">
      <div className="contact-shell rounded-2xl border border-border/70 bg-card/80 p-6">
        <div aria-hidden className="contact-ambient">
          <span className="contact-orbit" />
          <span className="contact-scanline" />
        </div>

        <div className="contact-panel space-y-5 rounded-xl border border-border/70 bg-background/70 p-5">
          <p className="contact-copy max-w-2xl text-sm leading-7 text-muted-foreground">{contact.cardIntro}</p>

          <div className="contact-pill-row flex flex-wrap gap-2">
            {contact.pills.map((pill) => (
              <Badge
                key={pill}
                variant="secondary"
                className="contact-pill rounded-md border border-border/70 bg-card/90 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-foreground/80"
              >
                {pill}
              </Badge>
            ))}
          </div>

          <div className="contact-grid grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/60 md:text-[11px]">
                {contact.topicsTitle}
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                {contact.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>

            <div className="contact-email-card rounded-xl border border-border/70 bg-card/80 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/60 md:text-[11px]">
                {contact.emailLabel}
              </p>
              <Link
                href={siteConfig.links.email}
                className="mt-3 block text-base font-medium tracking-[-0.02em] text-foreground transition-colors hover:text-primary"
              >
                {contact.emailValue}
              </Link>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{contact.note}</p>
            </div>
          </div>

          <div className="contact-actions flex flex-wrap gap-3">
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              <Button>{contact.linkedin}</Button>
            </Link>
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <Button variant="secondary">{contact.github}</Button>
            </Link>
            <Link href={siteConfig.links.email}>
              <Button variant="outline">{contact.email}</Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
