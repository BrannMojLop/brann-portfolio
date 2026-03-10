"use client";

import Link from "next/link";
import { ArrowRight, Database, Landmark, Network, ServerCog } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/section";
import { SystemCard } from "@/components/system-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { localizePath } from "@/lib/routing";
import { systems } from "@/lib/systems";

const icons = [Network, ServerCog, Landmark, Database] as const;

export function HomeContent() {
  const { locale, t } = useLanguage();
  const [leadIntro, ...supportingIntro] = t.home.intro;
  const stack = ["Python", "FastAPI", "React", "AWS", "Microservices", "ERP"];

  return (
    <>
      <Section className="pb-10 pt-14 md:pt-18 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-16">
          <div className="space-y-10 lg:space-y-12">
            <div className="hero-copy space-y-9">
              <div className="flex items-center gap-3.5">
                <span className="h-px w-12 bg-primary/35" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 md:text-[11px]">
                  {t.home.eyebrow}
                </p>
              </div>

              <div className="space-y-7">
                <h1 className="max-w-4xl text-[3.05rem] font-semibold leading-[0.9] tracking-[-0.065em] text-balance md:max-w-5xl md:text-[4.6rem] lg:max-w-[14ch] lg:text-[5.15rem]">
                  {t.home.title}
                </h1>

                <div className="max-w-[43rem] space-y-6">
                  <p className="max-w-[40rem] text-[1.08rem] leading-8 text-foreground/90 md:text-[1.24rem] md:leading-9">
                    {leadIntro}
                  </p>
                  <div className="max-w-[39rem] border-l border-primary/18 pl-4.5 md:pl-6">
                    <div className="space-y-3.5 text-[0.98rem] leading-7 text-muted-foreground/95 md:text-[1.03rem] md:leading-8">
                      {supportingIntro.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4.5">
              <div className="space-y-3.5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/52 md:text-[11px]">
                  {t.home.stackLabel}
                </p>
                <div className="flex max-w-3xl flex-wrap gap-2.5">
                  {stack.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="rounded-md border border-primary/10 bg-card/95 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/74 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] md:text-[11px]"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link href={localizePath(locale, "/systems")}>
                <Button size="lg" className="group">
                  {t.home.exploreSystems}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
              <Link href={localizePath(locale, "/engineering")}>
                <Button size="lg" variant="outline">
                  {t.home.readNotes}
                </Button>
              </Link>
            </div>
          </div>

          <aside className="hero-panel rounded-2xl border border-border/70 bg-card/95 p-5 shadow-sm lg:p-6">
            <div className="mb-6 flex items-start justify-between gap-4 border-b border-border/70 pb-4">
              <div className="space-y-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80 md:text-[11px]">
                  {t.home.signalBoard}
                </p>
                <p className="max-w-xs text-[0.95rem] leading-6 text-muted-foreground">
                  {t.home.matrixNote}
                </p>
              </div>
              <span className="rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                {t.common.liveProfile}
              </span>
            </div>

            <div className="space-y-3">
              {t.home.architectureSignals.map((signal, idx) => {
                const Icon = icons[idx];

                return (
                  <article
                    key={signal.title}
                    className="data-float rounded-xl border border-border/65 bg-background/75 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                      <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-foreground/58 md:text-[11px]">
                        {signal.title}
                      </p>
                    </div>
                    <p className="mt-3 text-[1.06rem] font-semibold leading-6 tracking-[-0.025em] text-foreground">
                      {signal.value}
                    </p>
                    <p className="mt-2.5 max-w-sm text-[0.87rem] leading-5 text-muted-foreground">
                      {signal.note}
                    </p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </Section>

      <Section className="py-8">
        <div className="rounded-2xl border border-border/70 bg-card/85 p-6">
          <div className="border-b border-border/70 pb-4">
            <h2 className="text-xl font-semibold tracking-tight">{t.home.matrixTitle}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">{t.home.matrixNote}</p>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {t.home.focusTracks.map((track) => (
              <article key={track.name} className="rounded-xl border border-border/70 bg-background/80 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/75">{track.name}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{track.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-4">
        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="rounded-2xl border border-border/70 bg-card/85 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80 md:text-[11px]">
              {locale === "en" ? "Search positioning focus" : "Enfoque de posicionamiento"}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              {locale === "en"
                ? "Software Engineer portfolio focused on ERP systems, backend architecture, FastAPI services, and systems design."
                : "Portafolio de ingeniería enfocado en sistemas ERP, arquitectura backend, servicios con FastAPI y diseño de sistemas."}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-[0.98rem]">
              {locale === "en"
                ? "The strongest topics in this portfolio are ERP Systems Engineer work, Python FastAPI Backend Engineer experience, and systems architecture decisions validated in production environments."
                : "Los temas más fuertes de este portafolio son el trabajo como especialista en ERP, experiencia como ingeniero backend con Python y FastAPI, y decisiones de arquitectura de sistemas validadas en producción."}
            </p>
          </article>

          <aside className="rounded-2xl border border-border/70 bg-card/85 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/58 md:text-[11px]">
              {locale === "en" ? "Continue through the portfolio" : "Continúa por el portafolio"}
            </p>
            <div className="mt-4 space-y-3">
              <Link
                href={localizePath(locale, "/systems")}
                className="block rounded-xl border border-border/65 bg-background/75 px-4 py-3 text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground"
              >
                {locale === "en"
                  ? "Review Businext ERP and TR0V1 as architecture case studies."
                  : "Revisar Businext ERP y TR0V1 como casos de arquitectura."}
              </Link>
              <Link
                href={localizePath(locale, "/about")}
                className="block rounded-xl border border-border/65 bg-background/75 px-4 py-3 text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground"
              >
                {locale === "en"
                  ? "See professional background, current role, and technology focus."
                  : "Ver trayectoria profesional, rol actual y enfoque tecnológico."}
              </Link>
              <Link
                href={localizePath(locale, "/engineering")}
                className="block rounded-xl border border-border/65 bg-background/75 px-4 py-3 text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground"
              >
                {locale === "en"
                  ? "Read engineering writing about ERP modules, service layers, and financial consistency."
                  : "Leer escritura técnica sobre módulos ERP, capas de servicio y consistencia financiera."}
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section id="systems" title={t.home.majorSystemsTitle} description={t.home.majorSystemsDesc}>
        <div className="grid gap-6 md:grid-cols-2">
          {systems.map((system) => (
            <SystemCard key={system.slug} system={system} />
          ))}
        </div>
      </Section>
    </>
  );
}
