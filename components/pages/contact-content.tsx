"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function ContactContent() {
  const { t } = useLanguage();
  const contact = t.contact;

  return (
    <Section title={contact.title} description={contact.description} titleAs="h1" className="max-w-4xl">
      <div className="contact-shell rounded-2xl border border-border/70 bg-card/80 p-6 md:p-8">
        <div className="contact-layout">
          <div className="contact-copy max-w-2xl">
            <p className="text-[1.05rem] leading-8 text-foreground/90">{contact.cardIntro}</p>
            <ul className="contact-pill-row" aria-label={contact.topicsTitle}>
              {contact.pills.map((pill) => (
                <li key={pill} className="contact-pill">
                  {pill}
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-email-card">
            <p className="contact-label">{contact.emailLabel}</p>
            <Link
              href={siteConfig.links.email}
              className="contact-email-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {contact.emailValue}
            </Link>
            <p className="contact-note">{contact.note}</p>
          </div>

          <div className="contact-topics">
            <p className="contact-label">{contact.topicsTitle}</p>
            <ul>
              {contact.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>

          <div className="contact-actions" aria-label={contact.title}>
            <Link href={siteConfig.links.email}>
              <Button size="lg">{contact.email}</Button>
            </Link>
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              <Button variant="outline">{contact.linkedin}</Button>
            </Link>
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <Button variant="ghost">{contact.github}</Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
