"use client";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { localizePath } from "@/lib/routing";
import { siteConfig } from "@/lib/site";

export function AboutContent() {
  const { locale, t } = useLanguage();
  const about = t.about;

  return (
    <Section title={about.title} description={about.description}>
      <div className="about-flow space-y-8">
        <article className="about-panel about-panel-intro rounded-3xl border border-border/70 bg-card/90 p-6 shadow-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="about-intro-copy">
              <div className="about-heading flex items-center gap-3">
                <span className="h-px w-10 bg-primary/35" />
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-primary/85 md:text-[11px]">
                  {about.intro.eyebrow}
                </p>
              </div>
              <h2 className="mt-5 max-w-4xl text-[2.2rem] font-semibold leading-[0.96] tracking-[-0.05em] md:text-[3.3rem]">
                {about.intro.title}
              </h2>
              <p className="mt-5 max-w-3xl text-[1.03rem] leading-8 text-foreground/90 md:text-[1.12rem]">
                {about.intro.lead}
              </p>
              <div className="mt-5 space-y-4 text-[0.98rem] leading-7 text-muted-foreground">
                {about.intro.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {about.intro.badges.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="about-chip rounded-md border border-primary/10 bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/75 md:text-[11px]"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <aside className="about-panel-shell about-panel-rail rounded-2xl border border-border/70 bg-background/80 p-5">
              <div className="mb-5 flex justify-center">
                <div className="overflow-hidden rounded-full border border-border/70 bg-card shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                  <Image
                    src="/profile.png"
                    alt="Brandon Mojica Lopez"
                    width={132}
                    height={132}
                    className="size-[132px] object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="space-y-3 border-b border-border/70 pb-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/58 md:text-[11px]">
                  {about.intro.eyebrow}
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  {about.description}
                </p>
              </div>

              <div className="mt-4 space-y-3.5">
                {about.intro.stats.map((stat) => (
                  <article
                    key={stat.label}
                    className="about-stat-card rounded-xl border border-border/70 bg-card/80 px-4 py-4"
                  >
                    <p className="text-[1.1rem] font-semibold tracking-[-0.03em] text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {stat.label}
                    </p>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </article>

        <article className="about-panel rounded-3xl border border-border/70 bg-card/85 p-6 md:p-8">
          <div className="about-section-copy max-w-2xl">
            <h3 className="about-heading text-[1.55rem] font-semibold tracking-[-0.03em]">
              {about.build.title}
            </h3>
            <p className="mt-3 text-[0.98rem] leading-7 text-muted-foreground">
              {about.build.description}
            </p>
          </div>
          <div className="about-card-grid mt-6 grid gap-4 md:grid-cols-3">
            {about.build.items.map((item) => (
              <article
                key={item.title}
                className="about-card rounded-2xl border border-border/70 bg-background/80 p-5"
              >
                <h4 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </article>

        <article className="about-panel rounded-3xl border border-border/70 bg-card/85 p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="about-section-copy">
              <h3 className="about-heading text-[1.55rem] font-semibold tracking-[-0.03em]">
                {about.background.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-muted-foreground">
                {about.background.description}
              </p>
              <div className="mt-5 space-y-4 text-[0.98rem] leading-7 text-muted-foreground">
                {about.background.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="about-panel-shell rounded-2xl border border-border/70 bg-background/80 p-5">
              <div className="space-y-3 text-sm leading-6 text-muted-foreground">
                {about.background.highlights.map((item) => (
                  <div
                    key={item}
                    className="about-list-card rounded-xl border border-border/65 bg-card/75 px-4 py-3"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </article>

        <article className="about-panel about-panel-reference rounded-3xl border border-border/70 bg-card/85 p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="about-section-copy">
              <h3 className="about-heading text-[1.55rem] font-semibold tracking-[-0.03em]">
                {locale === "en" ? "Public references and professional profiles" : "Referencias públicas y perfiles profesionales"}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-muted-foreground">
                {locale === "en"
                  ? "This portfolio is supported by public professional profiles and technical writing aligned with the systems and architectures described throughout the site."
                  : "Este portfolio se respalda con perfiles profesionales públicos y escritura técnica alineada con los sistemas y arquitecturas descritos en el sitio."}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="about-inline-link rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm text-foreground transition-colors hover:text-primary"
                >
                  LinkedIn
                </Link>
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="about-inline-link rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm text-foreground transition-colors hover:text-primary"
                >
                  GitHub
                </Link>
                <Link
                  href={localizePath(locale, "/contact")}
                  className="about-inline-link rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm text-foreground transition-colors hover:text-primary"
                >
                  {t.nav.contact}
                </Link>
              </div>
            </div>

            <aside className="about-panel-shell about-panel-rail rounded-2xl border border-border/70 bg-background/80 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/58 md:text-[11px]">
                {locale === "en" ? "Explore next" : "Explorar después"}
              </p>
              <div className="mt-4 space-y-3">
                <Link
                  href={localizePath(locale, "/systems")}
                  className="about-nav-link block rounded-xl border border-border/65 bg-card/75 px-4 py-3 text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {locale === "en"
                    ? "View architecture cases from Businext ERP and TR0V1."
                    : "Ver los casos de arquitectura de Businext ERP y TR0V1."}
                </Link>
                <Link
                  href={localizePath(locale, "/engineering")}
                  className="about-nav-link block rounded-xl border border-border/65 bg-card/75 px-4 py-3 text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {locale === "en"
                    ? "Read engineering notes about backend architecture, ERP domain boundaries and financial systems."
                    : "Leer notas de ingeniería sobre arquitectura backend, límites de dominio en ERP y sistemas financieros."}
                </Link>
              </div>
            </aside>
          </div>
        </article>

        <article className="about-panel rounded-3xl border border-border/70 bg-card/85 p-6 md:p-8">
          <div className="about-section-copy max-w-2xl">
            <h3 className="about-heading text-[1.55rem] font-semibold tracking-[-0.03em]">
              {about.systemsThinking.title}
            </h3>
            <p className="mt-3 text-[0.98rem] leading-7 text-muted-foreground">
              {about.systemsThinking.description}
            </p>
          </div>
          <div className="about-card-grid mt-6 grid gap-4 md:grid-cols-2">
            {about.systemsThinking.principles.map((principle) => (
              <article
                key={principle.title}
                className="about-card rounded-2xl border border-border/70 bg-background/80 p-5"
              >
                <h4 className="text-lg font-semibold tracking-tight">
                  {principle.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </article>

        <article className="about-panel rounded-3xl border border-border/70 bg-card/85 p-6 md:p-8">
          <div className="about-section-copy max-w-2xl">
            <h3 className="about-heading text-[1.55rem] font-semibold tracking-[-0.03em]">
              {about.technologyFocus.title}
            </h3>
            <p className="mt-3 text-[0.98rem] leading-7 text-muted-foreground">
              {about.technologyFocus.description}
            </p>
          </div>
          <div className="about-card-grid mt-6 grid gap-4 md:grid-cols-2">
            {about.technologyFocus.groups.map((group) => (
              <article
                key={group.title}
                className="about-card rounded-2xl border border-border/70 bg-background/80 p-5"
              >
                <h4 className="text-lg font-semibold tracking-tight">
                  {group.title}
                </h4>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="about-chip rounded-md border border-border/70 bg-card/90 px-3 py-1.5 text-xs text-foreground/80"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </article>

        <article className="about-panel rounded-3xl border border-border/70 bg-card/85 p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="about-section-copy">
              <h3 className="about-heading text-[1.55rem] font-semibold tracking-[-0.03em]">
                {about.lookingFor.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-muted-foreground">
                {about.lookingFor.description}
              </p>
              <div className="mt-5 space-y-4 text-[0.98rem] leading-7 text-muted-foreground">
                {about.lookingFor.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="about-panel-shell rounded-2xl border border-border/70 bg-background/80 p-5">
              <div className="space-y-3 text-sm leading-6 text-muted-foreground">
                {about.lookingFor.opportunities.map((item) => (
                  <div
                    key={item}
                    className="about-list-card rounded-xl border border-border/65 bg-card/75 px-4 py-3"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </article>
      </div>
    </Section>
  );
}
